import React from 'react';
import { Box, Flex, useColorMode } from '@chakra-ui/core';

import SocialMedia from '@components/SocialMedia';
import Copyright from '@components/Copyright';

const Footer = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.800' };

  return (
    <Box as='footer' bg={bgColor[colorMode]} textAlign='center' paddingY='4'>
      <Flex flexDirection='column' marginX='auto' maxWidth='992px'>
        <Box mb='1'>
          <SocialMedia />
        </Box>
        <Copyright />
      </Flex>
    </Box>
  );
};

export default Footer;
