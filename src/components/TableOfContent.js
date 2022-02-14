import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Slugger from 'github-slugger';
import { Link as ChakraLink, List, ListItem } from '@chakra-ui/core';

const slugger = new Slugger();
// var slugger = require('github-slugger').slug;

const TableOfContent = ({ headings, postSlug }) => (
  <List as='ol' styleType='decimal' pl='2' pt='4'>
    {headings
      .filter((heading) => heading.depth === 2)
      .map((heading) => (
        <ChakraLink
          key={heading.value}
          as={GatsbyLink}
          to={`blog/${postSlug}#${slugger.slug(heading.value)}`}
          color='brand.800'
          _hover={{ outline: 'none' }}
          _focus={{ outline: 'none' }}>
          <ListItem _hover={{ textDecoration: 'underline' }}>
            {heading.value}
          </ListItem>
        </ChakraLink>
      ))}
    {/* <pre>{JSON.stringify(headings, null, 2)}</pre> */}
  </List>
);

export default TableOfContent;
