// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Unilever',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: process.env.API_URL,
        typeName: 'Article',
        fieldName: 'allArticle',
        headers: {
          'x-api-key': process.env.API_KEY,
        }
      }
    }
  ]
};
