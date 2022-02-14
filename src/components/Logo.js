import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Link as ChakraLink, Text, useColorMode } from '@chakra-ui/core';

const Logo = () => {
  const { colorMode } = useColorMode();
  const color = { light: 'brand.800', dark: 'brand.800' };

  return (
    <ChakraLink
      as={GatsbyLink}
      title='Go back home'
      exact={true}
      to='/'
      _hover={{ textDecoration: 'none' }}>
      <Box>
        <Text
          color={color[colorMode]}
          fontFamily='Montserrat'
          fontSize={['md', 'lg']}
          fontWeight='black'>
          h<sup>2</sup>y
        </Text>
      </Box>
    </ChakraLink>
  );
};

export default Logo;
