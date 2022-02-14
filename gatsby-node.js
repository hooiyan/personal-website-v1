const path = require('path');
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);

/**
 * @reference
 * https://www.gatsbyjs.org/docs/node-apis/#createPages
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogListTemplate = path.resolve(`./src/templates/blogList.js`);
  const blogPostTemplate = path.resolve(`./src/templates/blogPost.js`);
  const tagsTemplate = path.resolve(`./src/templates/tags.js`);

  const blogs = await graphql(`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  const posts = blogs.data.allMdx.edges;

  // create page for single blog post
  posts.forEach((edge, index, arr) => {
    const slug = edge.node.fields.slug;
    const prev = arr[index - 1];
    const next = arr[index + 1];

    createPage({
      component: blogPostTemplate,
      path: `blog/${slug}`,
      context: {
        slug,
        prev,
        next,
      },
    });

    console.log(next);
  });

  // create pages for blog list
  const postsPerPage = 10;
  const numOfPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numOfPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numOfPages,
        currentPage: i + 1,
      },
    });
  });

  // Extract tag data from query
  const tags = blogs.data.tagsGroup.group;

  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagsTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};

/**
 * @reference
 * https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    // const slug = path.basename(node.fileAbsolutePath, '.mdx');
    const value = createFilePath({ node, getNode });
    // const [month, day, year] = new Date(node.frontmatter.date)
    //   .toLocaleDateString('en-EN', {
    //     year: 'numeric',
    //     month: '2-digit',
    //     day: '2-digit',
    //   })
    //   .split('/');

    const slug = value.replace('/blog/', '').replace(/\/$/, '');
    const url = `${slug}`;

    // console.log(value);

    createNodeField({
      name: `slug`,
      node,
      value: url,
    });
  }
};

/**
 * @reference
 * https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
 * knew this method from VueJs
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@content': path.resolve(__dirname, 'content'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@templates': path.resolve(__dirname, 'src/templates'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};
