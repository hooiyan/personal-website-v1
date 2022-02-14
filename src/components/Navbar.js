import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Flex, Link as ChakraLink, useColorMode } from '@chakra-ui/core';
import ModeToggler from '@components/ModeToggler';

const StyledLink = (props) => {
  const { colorMode } = useColorMode();

  const color = { light: 'blackAlpha.800', dark: 'whiteAlpha.900' };

  return (
    <ChakraLink
      as={GatsbyLink}
      color={color[colorMode]}
      fontSize={['xs', 'sm']}
      fontWeight='700'
      letterSpacing='tight'
      textTransform='uppercase'
      _hover={{
        color: 'brand.800',
      }}
      {...props}>
      {props.name}
    </ChakraLink>
  );
};

const Navbar = () => {
  const width = ['100%', '85%', '50%', '40%'];

  return (
    <Flex
      as='nav'
      id='navbar'
      alignItems='center'
      justifyContent='space-between'
      width={width}
      zIndex='sticky'>
      <StyledLink to='/about' title='About me' name='about' />
      <StyledLink to='/project' title='See my projects' name='project' />
      <Box display={['block', 'block', 'none']}>
        <ModeToggler />
      </Box>
      <StyledLink to='/blog' title='See my blog' name='blog' />
      <StyledLink to='/contact' title='Contact me' name='contact' />
    </Flex>
  );
};

export default Navbar;
