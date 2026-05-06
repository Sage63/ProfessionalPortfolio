import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { WeeklyLog } from "@/types";

const logsDirectory = path.join(process.cwd(), "content/logs");

export function getAllLogSlugs(): string[] {
  const fileNames = fs.readdirSync(logsDirectory);
  return fileNames
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export async function getLogBySlug(slug: string): Promise<WeeklyLog> {
  const fullPath = path.join(logsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    week: data.week as number,
    dateRange: data.dateRange as string,
    title: data.title as string,
    summary: data.summary as string,
    content: contentHtml,
  };
}

export async function getAllLogs(): Promise<WeeklyLog[]> {
  const slugs = getAllLogSlugs();
  const logs = await Promise.all(slugs.map((s) => getLogBySlug(s)));
  return logs.sort((a, b) => a.week - b.week);
}
