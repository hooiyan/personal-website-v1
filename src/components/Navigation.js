import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  Divider,
  Flex,
  Link as ChakraLink,
  Text,
  useColorMode,
} from '@chakra-ui/core';

export const NavigateLink = (props) => {
  const { colorMode } = useColorMode();
  const borderColor = { light: 'brand.900', dark: 'gray.500' };

  return (
    <ChakraLink
      as={GatsbyLink}
      border='2px solid'
      borderColor={borderColor[colorMode]}
      borderRadius='lg'
      _hover={{ textDecoration: 'none' }}
      {...props}
    />
  );
};

export const NavigatePostTitle = (props) => {
  const { colorMode } = useColorMode();
  const color = { light: 'black', dark: 'whiteAlpha.900' };

  return (
    <Text as='p' color={color[colorMode]} lineHeight='normal' px='4' {...props}>
      {props.title}
    </Text>
  );
};

export const Wrapper = (props) => (
  <Flex flexDirection='column' paddingY='3' {...props} />
);

export const Direction = (props) => {
  const { colorMode } = useColorMode();
  const color = { light: 'brand.800', dark: 'gray.500' };

  return (
    <Text
      as='span'
      color={color[colorMode]}
      fontWeight='bold'
      lineHeight='normal'
      px='4'
      {...props}>
      {props.text}
    </Text>
  );
};

export const NavigateDivider = (props) => {
  const { colorMode } = useColorMode();
  const borderColor = { light: 'brand.900', dark: 'gray.500' };

  return (
    <Divider
      borderWidth='2px'
      borderColor={borderColor[colorMode]}
      width='100%'
      {...props}
    />
  );
};
