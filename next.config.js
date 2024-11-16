// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://thirdweb.com; style-src 'self' 'unsafe-inline';",
          },
        ],
      },
    ];
  },
};
