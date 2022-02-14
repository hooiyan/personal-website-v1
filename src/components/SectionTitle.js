import React from 'react';
import { Heading, useColorMode } from '@chakra-ui/core';

const SectionTitle = ({ text }) => {
  const { colorMode } = useColorMode();
  const color = { light: 'blackAlpha.800', dark: 'brand.200' };

  return (
    <Heading
      as='h2'
      color={color[colorMode]}
      fontFamily='Permanent Marker'
      fontWeight='bold'
      marginY='6'
      size='xl'
      textAlign='center'
      textTransform='capitalize'>
      {text}
    </Heading>
  );
};

export default SectionTitle;
