import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  Box,
  Flex,
  IconButton,
  Link as ChakraLink,
  Text,
  useColorMode,
} from '@chakra-ui/core';

export const PageNumber = ({ current, total, ...props }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'brand.100', dark: 'gray.800' };
  const color = { light: 'black', dark: 'whiteAlpha.800' };
  const borderColor = { light: 'brand.900', dark: 'gray.900' };

  return (
    <Box
      bg={bgColor[colorMode]}
      border='2px solid'
      borderColor={borderColor[colorMode]}
      borderTop='none'
      borderBottom='none'
      paddingY='2'
      paddingX='4'
      {...props}>
      <Text
        color={color[colorMode]}
        fontWeight='bold'
        letterSpacing='wide'
        {...props}>
        Page{' '}
        <Text as='span' color='brand.800'>
          {current}
        </Text>{' '}
        of {total}
      </Text>
    </Box>
  );
};

export const NavigateButton = ({
  isDisabled,
  icon,
  linkTo,
  label,
  text,
  ...props
}) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'brand.800' };
  const arrowColor = { light: 'black', dark: 'black' };

  return (
    <ChakraLink
      as={GatsbyLink}
      to={linkTo}
      isDisabled={isDisabled}
      _focus={{ outline: 'none' }}
      _hover={{ textDecoration: 'none' }}
      {...props}>
      <IconButton
        aria-label={label}
        icon={icon}
        isDisabled={isDisabled}
        bg={bgColor[colorMode]}
        borderRadius='lg'
        color={arrowColor[colorMode]}
        size='md'
        variant='ghost'
        _hover={{ textDecoration: 'none', bg: 'none' }}
        {...props}
      />
      <Text>{text}</Text>
    </ChakraLink>
  );
};

const Pagination = ({ children, ...props }) => {
  const { colorMode } = useColorMode();
  const borderColor = { light: 'brand.900', dark: 'gray.900' };

  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      border='2px solid'
      borderColor={borderColor[colorMode]}
      borderRadius='lg'
      maxWidth='700px'
      {...props}>
      {children}
    </Flex>
  );
};

export default Pagination;
