import React from 'react';
import { Flex, IconButton, Link as ChakraLink, Text } from '@chakra-ui/core';

const CustomCta = ({ href, bg, color, icon, label, text, ...props }) => (
  <ChakraLink
    isExternal
    href={href}
    bg={bg}
    color={color}
    title={label}
    paddingX='1'
    paddingY='2'
    width={['100%']}
    _active={{ outline: 'none' }}
    _hover={{ textDecor: 'none' }}
    {...props}>
    <Flex alignItems='center' justifyContent='center'>
      <IconButton
        aria-label={label}
        icon={icon}
        marginLeft='-10px'
        size='sm'
        variant='ghost'
        _active={{ outline: 'none' }}
        _hover={{ textDecor: 'none' }}
      />{' '}
      <Text as='span' fontSize='sm' fontWeight='semibold'>
        {text}
      </Text>
    </Flex>
  </ChakraLink>
);

export default CustomCta;
