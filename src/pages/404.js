import React from 'react';
import { graphql, Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';
import { Button, Flex, Heading, Text, useColorMode } from '@chakra-ui/core';

import Head from '@components/head';

const NotFoundPage = ({ data }) => {
  const { colorMode } = useColorMode();
  const titleColor = { light: 'blackAlpha.800', dark: 'whiteAlpha.900' };
  const subtitleColor = { light: 'black', dark: 'brand.300' };
  const variantColor = { light: 'brand', dark: 'gray' };

  return (
    <>
      <Head />
      <Flex
        flexDirection='column'
        justifyContent='center'
        marginY='6'
        minHeight={('auto', 'auto', '75vh')}
        paddingX={['5', '10']}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{ margin: '1rem', maxHeight: 'calc(50vh - 4rem)' }}
          imgStyle={{ objectFit: 'contain' }}
        />
        <Flex
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
          <Heading
            as='h1'
            size='xl'
            color={titleColor[colorMode]}
            fontWeight='black'
            lineHeight='normal'
            textAlign='center'
            textTransform='uppercase'>
            Page not found
          </Heading>
          <Text
            color={subtitleColor[colorMode]}
            fontSize={['md', 'md', 'lg']}
            marginBottom='5'>
            This page{' '}
            <Text
              as='span'
              color='brand.800'
              fontStyle='italic'
              fontWeight='bold'>
              doesn't
            </Text>{' '}
            exist.
          </Text>
          <Button
            aria-label='return home'
            as={GatsbyLink}
            exact='true'
            to='/'
            borderRadius='lg'
            fontSize={['sm', 'md']}
            fontWeight='bold'
            size='lg'
            variantColor={variantColor[colorMode]}
            textTransform='capitalize'>
            Return home
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default NotFoundPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "404/sadness.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
