/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'localhost',
    '127.0.0.1',
    '10.10.0.186',
  ],
};

if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export';
}

module.exports = nextConfig;
