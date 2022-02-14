import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Box, useColorMode } from '@chakra-ui/core';
import MDXComponents from '@components/MDXComponents';

import Head from '@components/head';
import useContentQuery from '@hooks/useContentQuery';

const AboutPage = () => {
  const data = useContentQuery();
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.900' };

  return (
    <>
      <Head title='About Me' />
      <Box bg={bgColor[colorMode]} marginY='16' width='100%'>
        <Box maxWidth='700px' marginX='auto' paddingX={['5', '10']}>
          {data.about.edges.map((edge, index) => {
            return (
              <MDXComponents key={index}>
                <MDXRenderer>{edge.node.body}</MDXRenderer>
              </MDXComponents>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default AboutPage;
