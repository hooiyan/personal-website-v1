import React from 'react';
import { Box, Flex, useColorMode } from '@chakra-ui/core';

import ThemeWrapper from '@components/ThemeWrapper';
import Header from '@components/Header';
import Footer from '@components/Footer';

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.900' };

  return (
    <ThemeWrapper>
      <Flex
        flexDirection='column'
        width='100%'
        minHeight='100vh'
        bg={bgColor[colorMode]}>
        <Box flexGrow='1'>
          <Header />
          {children}
        </Box>
        <Footer />
      </Flex>
    </ThemeWrapper>
  );
};

export default Layout;
