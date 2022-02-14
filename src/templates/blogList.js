import React from 'react';
import { graphql, Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import styled from '@emotion/styled';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

import Head from '@components/head';
import PostDate from '@components/PostDate';
import PostTag from '@components/PostTag';
import Pagination, { NavigateButton, PageNumber } from '@components/Pagination';

const StyledImage = styled(Img)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 180px;
  max-width: 100%;

  @media screen and (min-width: 480px) {
    height: 250px;
  }
`;

const BlogPage = ({ data, pageContext }) => {
  const { colorMode } = useColorMode();
  const cardBg = { light: 'brand.50', dark: 'gray.800' };
  const titleColor = { light: 'brand.800', dark: 'brand.800' };
  const excerptColor = { light: 'black', dark: 'gray.400' };

  const posts = data.allMdx.edges;
  const { currentPage, numOfPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numOfPages;
  const prevPage = currentPage - 1 === 1 ? `/` : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  const blogPosts = posts.map((edge, index) => {
    return (
      <ChakraLink
        key={index}
        as={GatsbyLink}
        to={`${edge.node.fields.slug}`}
        alignSelf='stretch'
        bg={cardBg[colorMode]}
        borderRadius='10px'
        marginX='auto'
        marginTop={['10', '12']}
        shadow='2xl'
        width={['100%', '100%', '45%', '45%']}
        _hover={{
          textDecoration: 'none',
        }}
        _last={{
          marginBottom: '0',
        }}>
        <Box width='100%'>
          <StyledImage
            fluid={edge.node.frontmatter.featureImg.childImageSharp.fluid}
            backgroundColor='#2a748d'
            objectFit='cover'
            objectPosition='50% 50%'
          />
        </Box>
        <Box
          paddingTop={['3']}
          paddingBottom={['5', '8']}
          paddingX={['5', '8', '5']}>
          <PostDate
            date={edge.node.frontmatter.date}
            timeToRead={edge.node.timeToRead}
            marginBottom='2'
          />
          <Heading
            as='h1'
            color={titleColor[colorMode]}
            fontWeight='bold'
            lineHeight='shorter'
            marginBottom='1'
            size='lg'>
            {edge.node.frontmatter.title}
          </Heading>
          <Text
            as='p'
            color={excerptColor[colorMode]}
            lineHeight='short'
            marginBottom='2'>
            {edge.node.excerpt}
          </Text>
          <PostTag tags={edge.node.frontmatter.tags} />
        </Box>
      </ChakraLink>
    );
  });

  return (
    <>
      <Head title={`Blog - Page ${currentPage} `} />

      <Flex
        flexDirection='column'
        alignItems='center'
        paddingX={['5', '10', '5']}>
        <Pagination marginTop='10'>
          {/* If this is the first page, disable the button for clicking */}
          {isFirst && (
            <NavigateButton
              // linkTo="blog"
              isDisabled={true}
              icon={FaAngleLeft}
              label='previous page'
            />
          )}
          {!isFirst && (
            <NavigateButton
              linkTo={`${prevPage}`}
              icon={FaAngleLeft}
              label='previous page'
            />
          )}
          <PageNumber current={currentPage} total={numOfPages} />

          {/* If this is the last page, disable the button for clicking */}
          {isLast && (
            <NavigateButton
              linkTo='blog'
              isDisabled={true}
              icon={FaAngleRight}
              label='next page'
            />
          )}
          {!isLast && (
            <NavigateButton
              linkTo={`blog/${nextPage}`}
              icon={FaAngleRight}
              label='next page'
            />
          )}
        </Pagination>

        <Flex
          flexDirection={['column']}
          alignItems='center'
          bg={{ light: 'white', dark: 'gray.900' }[colorMode]}
          marginX='auto'
          paddingBottom={['6']}
          width='100%'>
          <Flex flexWrap='wrap' maxWidth='900px' width={['100%']}>
            {blogPosts}
          </Flex>
        </Flex>
        <Pagination marginTop='6' marginBottom={['10', '20']}>
          {/* If this is the first page, disable the button for clicking */}
          {isFirst && (
            <NavigateButton
              linkTo='blog'
              isDisabled={true}
              icon={FaAngleLeft}
              label='previous page'
            />
          )}
          {!isFirst && (
            <NavigateButton
              linkTo={`blog/${prevPage}`}
              icon={FaAngleLeft}
              label='previous page'
            />
          )}
          <PageNumber current={currentPage} total={numOfPages} />

          {/* If this is the last page, disable the button for clicking */}
          {isLast && (
            <NavigateButton
              linkTo='blog'
              isDisabled={true}
              icon={FaAngleRight}
              label='next page'
            />
          )}
          {!isLast && (
            <NavigateButton
              linkTo={`blog/${nextPage}`}
              icon={FaAngleRight}
              label='next page'
            />
          )}
        </Pagination>
      </Flex>
    </>
  );
};

export default BlogPage;

export const query = graphql`
  query MdxBlogList($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
  }
`;
