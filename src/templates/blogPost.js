import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Box, Flex, Heading, useColorMode } from '@chakra-ui/core';
import { FaGithub, FaTwitter, FaRss } from 'react-icons/fa';

import Head from '@components/head';
import MDXComponents from '@components/MDXComponents';
// import TableOfContent from '@components/TableOfContent';
import PostDate from '@components/PostDate';
import PostTag from '@components/PostTag';
import CustomCta from '@components/CustomCta';
import {
  Direction,
  NavigateDivider,
  NavigateLink,
  NavigatePostTitle,
  Wrapper,
} from '@components/Navigation';

const BlogPostTemplate = ({ data, pageContext }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.900' };
  const titleColor = { light: 'blackAlpha.800', dark: 'whiteAlpha.800' };

  const { prev, next } = pageContext;
  const post = data.mdx;

  return (
    <>
      <Head title={post.frontmatter.title} />
      <Box
        as='main'
        bg={bgColor[colorMode]}
        maxWidth='700px'
        marginX='auto'
        paddingTop='16'
        paddingX={['5', '10']}
        width='100%'>
        <Box as='article' bg={bgColor[colorMode]} marginBottom='16'>
          <Box marginBottom='16'>
            <Heading
              as='h1'
              color={titleColor[colorMode]}
              fontWeight='bold'
              marginBottom='4'
              size='2xl'>
              {post.frontmatter.title}
            </Heading>
            <PostTag
              // clickable="pointer"
              tags={post.frontmatter.tags}
              marginBottom='2'
            />
            <PostDate
              date={post.frontmatter.date}
              timeToRead={post.timeToRead}
            />
          </Box>
          {/* <Heading as="h2" color="brand.800">
            Table of Content
          </Heading>
          <TableOfContent
            headings={post.headings}
            postSlug={post.fields.slug}
          /> */}
          <MDXComponents>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXComponents>
        </Box>

        <Flex
          flexDirection={['column', 'column', 'row']}
          justifyContent='space-between'
          marginTop='20'>
          <CustomCta
            href={`https://github.com/hoehooiyan/portfolio/tree/master/content/blog/${post.fields.slug}/index.mdx`}
            bg='black'
            color='white'
            icon={FaGithub}
            label='Edit on GitHub'
            text='Edit on GitHub'
            marginBottom={['4', '4', '0']}
          />

          <CustomCta
            href={`https://twitter.com/intent/tweet?text=${post.frontmatter.title}&via=hooiyancodes`}
            bg='twitter.500'
            color='white'
            icon={FaTwitter}
            label='Discuss on Twitter'
            text='Discuss on Twitter'
            marginBottom={['4', '4', '0']}
          />

          <CustomCta
            href={`https://hoehooiyan.com/rss.xml`}
            bg='rss.default'
            color='white'
            icon={FaRss}
            label='Subscribe to RSS'
            text='Subscribe to RSS'
          />
        </Flex>

        <Box marginBottom='20' marginTop='8'>
          <Flex
            flexDirection={['column', 'column', 'row']}
            justifyContent='space-between'
            flexWrap='wrap'
            width='100%'>
            {/* If this is the first post, show the next link only */}
            {!prev && next && (
              <NavigateLink
                to={`blog/${next.node.fields.slug}`}
                textAlign='right'
                width='100%'>
                <Wrapper alignItems='flex-end'>
                  <Direction text='Next →' />
                  <NavigateDivider />
                  <NavigatePostTitle title={next.node.frontmatter.title} />
                </Wrapper>
              </NavigateLink>
            )}
            {/* If this is the last post, show the previous link only */}
            {!next && prev && (
              <NavigateLink
                to={`blog/${prev.node.fields.slug}`}
                textAlign='left'
                width='100%'>
                <Wrapper alignItems='flex-start'>
                  <Direction text='← Prev' />
                  <NavigateDivider />
                  <NavigatePostTitle title={prev.node.frontmatter.title} />
                </Wrapper>
              </NavigateLink>
            )}
            {prev && next && (
              <NavigateLink
                to={`blog/${prev.node.fields.slug}`}
                borderTopRightRadius={['lg', 'lg', 'none']}
                borderBottomRightRadius={['lg', 'lg', 'none']}
                borderRightWidth={['2px', '2px', '1px']}
                marginBottom={['6', '6', '0']}
                textAlign='left'
                width={['100%', '100%', '50%']}>
                <Wrapper alignItems='flex-start'>
                  <Direction text='← Prev' />
                  <NavigateDivider />
                  <NavigatePostTitle title={prev.node.frontmatter.title} />
                </Wrapper>
              </NavigateLink>
            )}
            {prev && next && (
              <NavigateLink
                to={`blog/${next.node.fields.slug}`}
                borderTopLeftRadius={['lg', 'lg', 'none']}
                borderBottomLeftRadius={['lg', 'lg', 'none']}
                borderLeftWidth={['2px', '2px', '1px']}
                textAlign='right'
                width={['100%', '100%', '50%']}>
                <Wrapper alignItems='flex-end'>
                  <Direction text='Next →' />
                  <NavigateDivider />
                  <NavigatePostTitle title={next.node.frontmatter.title} />
                </Wrapper>
              </NavigateLink>
            )}
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query MdxBlogPost($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        tags
        featureImg {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      timeToRead
      body
      headings {
        depth
        value
      }
    }
  }
`;
