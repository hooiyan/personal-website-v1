import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Heading, Text, useColorMode } from '@chakra-ui/core';

const BlogPreviewPost = ({ title, description, date, readTime, linkTo }) => {
  const { colorMode } = useColorMode();
  const titleColor = { light: 'brand.800', dark: 'brand.800' };
  const detailColor = { light: 'blackAlpha.900', dark: 'gray.400' };

  return (
    <Box
      as={GatsbyLink}
      to={linkTo}
      borderRadius='lg'
      marginBottom='8'
      marginX='auto'
      width='100%'>
      <Heading
        as='h3'
        size='lg'
        color={titleColor[colorMode]}
        fontWeight='bold'
        lineHeight='shorter'
        marginBottom='2'>
        {title}
      </Heading>
      <Text
        as='p'
        color={detailColor[colorMode]}
        fontSize={['base', 'base', 'lg']}
        lineHeight='normal'
        marginBottom='2'>
        {description}
      </Text>
      <Text
        as='p'
        color={detailColor[colorMode]}
        fontSize={['xs', 'xs', 'sm']}
        fontWeight='bold'>
        {`${date}`} &#183;{' '}
        <Text as='span' color='brand.80' fontWeight='normal'>
          {`${readTime}`} min read
        </Text>
      </Text>
    </Box>
  );
};

export default BlogPreviewPost;
