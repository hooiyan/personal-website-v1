import React from 'react';
import { Badge, Stack, useColorMode } from '@chakra-ui/core';

const PostTag = ({ clickable, tags, ...props }) => {
  const { colorMode } = useColorMode();
  const variantColor = { light: 'brand', dark: 'gray' };

  return (
    <Stack isInline alignItems='center' flexWrap='wrap' {...props}>
      {tags.map((tag, index) => {
        return (
          <Badge
            key={index}
            cursor={clickable}
            fontWeight='500'
            marginY='1'
            variantColor={variantColor[colorMode]}>
            #{tag}
          </Badge>
        );
      })}
    </Stack>
  );
};

export default PostTag;
