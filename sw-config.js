module.exports = {
    runtimeCaching: [

      {
        urlPattern: /^https:\/\/avatars\d?\.githubusercontent\.com\/u\/.*/,
        handler: 'fastest',
      },
      {
        urlPattern: /^https:\/\/api\.myjson\.com\/bins\/.*/,
        handler: 'fastest',
      },
      {
        urlPattern: /^https:\/\/api\.github\.com\/.*/,
        handler: 'cacheFirst',
      },
      
    ],
  };