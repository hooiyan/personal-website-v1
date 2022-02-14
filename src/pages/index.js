import React from 'react';
import { Box, Flex, useColorMode } from '@chakra-ui/core';
import styled from '@emotion/styled';

import Head from '@components/head';
import Hero from '@components/Hero';
import Skills from '@components/Skills';
import BlogPreview from '@components/BlogPreview';
import ContactForm from '@components/ContactForm';

const FullWidthBox = styled(Box)`
  width: 100%;
`;

const HomePage = () => {
  const { colorMode } = useColorMode();
  const oddBg = { light: 'brand.100', dark: 'gray.800' };
  const evenBg = { light: 'white', dark: 'gray.900' };

  return (
    <>
      <Head />
      <Flex as='main' flexDirection='column' alignItems='center'>
        <FullWidthBox bg={oddBg[colorMode]}>
          <Hero />
        </FullWidthBox>
        <FullWidthBox bg={evenBg[colorMode]}>
          <Skills />
        </FullWidthBox>
        <FullWidthBox bg={oddBg[colorMode]}>
          <BlogPreview />
        </FullWidthBox>
        <FullWidthBox bg={evenBg[colorMode]}>
          <ContactForm />
        </FullWidthBox>
      </Flex>
    </>
  );
};

export default HomePage;
