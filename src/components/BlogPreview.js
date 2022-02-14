import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/core';

import CtaButton from '@components/CtaButton';
import BlogPreviewPost from '@components/BlogPreviewPost';
import SectionTitle from '@components/SectionTitle';
import ImgBlog from '@images/home/blog.svg';
import useContentQuery from '@hooks/useContentQuery';

const BlogList = () => {
  const data = useContentQuery();
  const latestBlog = data.post.edges.slice(0, 3);

  return (
    <>
      {latestBlog.map((edge, index) => {
        const { frontmatter, timeToRead } = edge.node;
        const { slug } = edge.node.fields;
        return (
          <BlogPreviewPost
            key={index}
            title={frontmatter.title}
            description={frontmatter.description}
            date={frontmatter.date}
            readTime={timeToRead}
            linkTo={`/blog/${slug}`}
          />
        );
      })}
    </>
  );
};

const BlogPreview = () => {
  return (
    <Flex
      flexDirection={['column', 'column', 'column', 'row-reverse']}
      justifyContent={['stretch', 'stretch', 'stretch', 'space-between']}
      alignItems='center'
      maxWidth='992px'
      marginX='auto'
      paddingX={['5', '10']}
      paddingTop={['32', '32', '40', '64']}
      paddingBottom={['40', '40', '48']}>
      <Box width={['90%', '80%', '70%', '50%']}>
        <Image src={ImgBlog} alt='illustration' />
        <SectionTitle text='Latest blog' />
      </Box>
      <Flex flexDirection='column' width={['100%', '80%', '70%', '50%']}>
        <BlogList />
        <Box alignSelf={['center', 'center', 'center', 'flex-start']}>
          <CtaButton linkTo='/blog/' text='More Posts' />
        </Box>
      </Flex>
    </Flex>
  );
};

export default BlogPreview;
