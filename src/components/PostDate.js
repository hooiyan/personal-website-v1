import React from 'react';
import { Flex, Icon, Text, useColorMode } from '@chakra-ui/core';

const PostDate = ({ date, timeToRead, ...props }) => {
  const { colorMode } = useColorMode();
  const color = { light: 'black', dark: 'whiteAlpha.800' };

  return (
    <Flex alignItems='center' height='20px' {...props}>
      <Icon name='calendar' color={color[colorMode]} marginRight='2' />
      <Text as='small' color={color[colorMode]} fontWeight='medium'>
        {date} &#183;
        <Text as='span'> {timeToRead} min read</Text>
      </Text>
    </Flex>
  );
};

export default PostDate;
