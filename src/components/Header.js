import React from 'react';
import { Box, Flex, useColorMode } from '@chakra-ui/core';
import Logo from '@components/Logo';
import Navbar from '@components/Navbar';
import ModeToggler from '@components/ModeToggler';

const Header = () => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'brand.500', dark: 'gray.800' };

  return (
    <Box
      as='header'
      bg={bgColor[colorMode]}
      shadow='lg'
      position='sticky'
      top='0'
      width='100%'
      zIndex='sticky'>
      <Flex
        flexDirection={['column', 'column', 'row']}
        alignItems='center'
        justifyContent='space-between'
        paddingX={['5', '5', '5', '2']}
        paddingTop={['2', '2', '3']}
        paddingBottom={['2', '2', '3']}
        marginX='auto'
        maxWidth='992px'>
        {/* <Logo /> */}
        <Flex alignItems='center' minH='30px'>
          <Box display={['none', 'none', 'block']}>
            <ModeToggler />
          </Box>
          <Logo />
        </Flex>
        <Navbar />
      </Flex>
    </Box>
  );
};

export default Header;
