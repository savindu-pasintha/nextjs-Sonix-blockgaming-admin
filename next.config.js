const path = require('path')

module.exports = {

  future: {
    webpack5: true,
  },
  poweredByHeader: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    // Only bypass ESLint in development builds!
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ezbets68/auth/login',
        basePath: false,
        permanent: true,
      }
    ]
  },
};
