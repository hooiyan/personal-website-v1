import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Button, Link as ChakraLink, useColorMode } from '@chakra-ui/core';

const CtaButton = ({ linkTo, text, ...props }) => {
  const { colorMode } = useColorMode();

  const variantColor = { light: 'brand', dark: 'gray' };

  return (
    <ChakraLink
      as={GatsbyLink}
      exact={true}
      to={linkTo}
      _hover={{ textDecoration: 'none' }}>
      <Button
        aria-label={text}
        borderRadius='lg'
        fontSize={['md', 'lg']}
        fontWeight='medium'
        letterSpacing='wide'
        textTransform='capitalize'
        size='lg'
        title={text}
        variantColor={variantColor[colorMode]}
        {...props}>
        {text}
      </Button>
    </ChakraLink>
  );
};

export default CtaButton;
