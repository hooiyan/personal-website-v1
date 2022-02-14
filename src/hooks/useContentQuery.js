import { useStaticQuery, graphql } from 'gatsby';

const useContentQuery = () => {
  return useStaticQuery(graphql`
    query {
      about: allMdx(filter: { fileAbsolutePath: { regex: "/about/" } }) {
        edges {
          node {
            frontmatter {
              title
            }
            body
          }
        }
      }
      post: allMdx(
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
              description
              date(formatString: "DD MMMM YYYY")
              tags
              featureImg {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            excerpt
            timeToRead
          }
        }
      }
      project: allMdx(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              tech
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              demoUrl
              sourceUrl
            }
          }
        }
      }
    }
  `);
};

export default useContentQuery;
