import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import {
  Box,
  Code,
  Divider,
  Heading,
  Image,
  Link as ChakraLink,
  List,
  ListItem,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import styled from '@emotion/styled';

const StyledBlockQuote = styled(Box)`
  p {
    margin: 0;
    padding: 20px;
  }
`;

const CustomBlockQuote = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'brand.100', dark: 'gray.800' };

  return (
    <StyledBlockQuote
      as='blockquote'
      bg={bgColor[colorMode]}
      borderLeft='6px solid'
      borderLeftColor='brand.700'
      borderRadius='md'
      marginY='10'
      {...props}
    />
  );
};

const CustomHeading = (props) => {
  const { colorMode } = useColorMode();
  const color = { light: 'blackAlpha.800', dark: 'whiteAlpha.800' };

  return (
    <Heading
      color={color[colorMode]}
      fontWeight='medium'
      letterSpacing='wide'
      textTransform='capitalize'
      {...props}>
      {props.children}
    </Heading>
  );
};

const CustomParagraph = (props) => {
  const { colorMode } = useColorMode();
  const color = { light: 'black', dark: 'whiteAlpha.900' };

  return (
    <Text
      as='p'
      color={color[colorMode]}
      fontSize={['md', 'md', 'lg']}
      lineHeight='tall'
      marginTop='10'
      {...props}
    />
  );
};

const CustomStrong = (props) => {
  const { colorMode } = useColorMode();
  const color = { light: 'blackAlpha.800', dark: 'brand.300' };

  return <Text as='strong' color={color[colorMode]} {...props} />;
};

const CustomHorizontalLine = (props) => {
  const { colorMode } = useColorMode();
  const borderColor = { light: 'brand.400', dark: 'gray.600' };

  return (
    <Divider borderColor={borderColor[colorMode]} marginTop='12' {...props} />
  );
};

const CustomLink = (props) => {
  const { colorMode } = useColorMode();
  const color = { light: 'brand.800', dark: 'brand.800' };

  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <ChakraLink
        as={GatsbyLink}
        to={href}
        color={color[colorMode]}
        fontWeight='semibold'
        textDecoration='underline'
        _hover={{ textDecoration: 'none' }}
        {...props}
      />
    );
  } else {
    return (
      <ChakraLink
        as={OutboundLink}
        isExternal
        color={color[colorMode]}
        fontWeight='semibold'
        textDecoration='underline'
        _hover={{ textDecoration: 'none' }}
        {...props}
      />
    );
  }
};

const CustomList = (props) => {
  return (
    <List
      styleType='bullet'
      paddingLeft='2'
      marginLeft='2'
      marginTop='10'
      {...props}>
      {props.children}
    </List>
  );
};

const CustomListItem = (props) => {
  const { colorMode } = useColorMode();
  const color = { light: 'black', dark: 'brand.200' };
  return (
    <ListItem as='li' color={color[colorMode]} paddingBottom='2' {...props} />
  );
};

const components = {
  h1: (props) => <CustomHeading as='h1' size='2xl' marginY='12' {...props} />,
  h2: (props) => <CustomHeading as='h2' size='xl' marginTop='16' {...props} />,
  h3: (props) => <CustomHeading as='h3' size='lg' marginTop='16' {...props} />,
  h4: (props) => <CustomHeading as='h4' size='md' marginTop='16' {...props} />,
  a: CustomLink,
  p: CustomParagraph,
  strong: CustomStrong,
  blockquote: CustomBlockQuote,
  hr: CustomHorizontalLine,
  ul: (props) => <CustomList as='ul' {...props} />,
  ol: (props) => <CustomList as='ol' {...props} />,
  li: CustomListItem,
  pre: (props) => <Box as='pre' marginY='16' {...props} />,
  img: (props) => (
    <Image cursor='pointer' marginY='10' size='100px' {...props} />
  ),
  inlineCode: (props) => <Code variantColor='red' {...props} />,
};

const MDXComponents = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDXComponents;
