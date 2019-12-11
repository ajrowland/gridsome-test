// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(() => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allArticle {
        articles {
          id,
          path,
          pageTitle,
          pageIntroText,
          paragraph {
            heading,
            subHeading,
            body
          }
        }
      }
    }`);

    data.allArticle.articles.forEach((node) => {
      let article = JSON.parse(JSON.stringify(node));

      createPage({
        path: article.path,
        component: './src/templates/Article.vue',
        context: article
      });
    });

    createPage({
      path: '/',
      component: './src/templates/Home.vue',
      context: {
        pages: data.allArticle.articles
      }
    });
  });
};
