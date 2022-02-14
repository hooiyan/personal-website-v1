import React from 'react';
import { Text, useColorMode } from '@chakra-ui/core';

import getCurrentYear from '@utils/getCurrentYear';

const Copyright = () => {
  const { colorMode } = useColorMode();
  const color = { light: 'blackAlpha.800', dark: 'brand.300' };

  return (
    <Text
      color={color[colorMode]}
      fontSize={['xs', 'sm']}
      fontWeight='600'
      letterSpacing='tighter'
      textTransform='uppercase'>
      Copyright &copy; {getCurrentYear()}, Hooi Yan
    </Text>
  );
};

export default Copyright;
