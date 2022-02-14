import React from 'react';
import { Box, IconButton, useColorMode } from '@chakra-ui/core';

const ModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const icon = { light: 'moon', dark: 'sun' };
  const color = { light: 'blackAlpha', dark: 'whiteAlpha' };
  const variantColor = { light: 'brand', dark: 'gray' };

  return (
    <Box>
      <IconButton
        aria-label='toggle theme'
        icon={icon[colorMode]}
        color={color[colorMode]}
        fontSize={['lg', 'lg', 'xl']}
        mr={['0', '0', '4']}
        size='xs'
        variant='ghost'
        variantColor={variantColor[colorMode]}
        _active={{ backgroundColor: 'transparent' }}
        _focus={{ outline: 'none' }}
        _hover={{
          backgroundColor: 'transparent',
        }}
        onClick={toggleColorMode}
      />
    </Box>
  );
};

export default ModeToggler;
