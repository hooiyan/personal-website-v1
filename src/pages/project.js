import React from 'react';
import Img from 'gatsby-image';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  ListItem,
  Stack,
  Text,
  useColorMode,
  LightMode,
} from '@chakra-ui/core';
import styled from '@emotion/styled';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

import Head from '@components/head';
import useContentQuery from '@hooks/useContentQuery';

const StyledGradient = styled.div`
  background-image: linear-gradient(to bottom, #104153, #071a21);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 100%;
  width: 100%;
  opacity: 0.7;
  position: absolute;
  top: 0;
  z-index: 10;

  @media screen and (min-width: 768px) {
    border-top-right-radius: 0;
    border-bottom-left-radius: 10px;
  }
`;

const StyledImage = styled(Img)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 768px) {
    border-top-right-radius: 0;
    border-bottom-left-radius: 10px;
  }
`;

const ProjectPage = () => {
  const data = useContentQuery();
  const { colorMode } = useColorMode();

  const cardBg = { light: 'white', dark: 'gray.900' };
  const iconColor = { light: 'black', dark: 'whiteAlpha.800' };
  const titleColor = { light: 'brand.50' };
  const techColor = { light: 'brand.800', dark: 'brand.800' };
  const descriptionColor = { light: 'black', dark: 'brand.300' };

  return (
    <>
      <Head title='Projects' />
      <Box marginY='10' paddingX={['5', '10']} width='100%'>
        <Stack marginX='auto' maxWidth='900px' spacing={10}>
          {data.project.edges.map((project, index) => {
            return (
              <Flex
                key={index}
                bg={cardBg[colorMode]}
                flexDirection={['column', 'column', 'row']}
                alignItems='center'
                borderRadius='10px'
                shadow='2xl'
                marginTop='0'
                marginBottom='4'
                marginX='auto'>
                <Box
                  alignSelf={['flex-start', 'flex-start', 'stretch']}
                  position='relative'
                  width='100%'>
                  <StyledImage
                    fluid={project.node.frontmatter.image.childImageSharp.fluid}
                    backgroundColor='#2a748d'
                    objectFit='cover'
                    objectPosition='50% 50%'
                  />
                  <StyledGradient />
                  <LightMode>
                    <Heading
                      as='h3'
                      fontSize={['lg', 'xl', '2xl']}
                      color={titleColor[colorMode]}
                      display='flex'
                      alignItems='center'
                      justifyContent='center'
                      paddingY='0'
                      paddingX='6'
                      textAlign='center'
                      textTransform='uppercase'
                      position='absolute'
                      top='0'
                      height='100%'
                      width='100%'
                      zIndex='dropdown'>
                      {project.node.frontmatter.title}
                    </Heading>
                  </LightMode>
                </Box>
                <Box paddingY={['3', '3', '6', '0']} paddingX='6' width='100%'>
                  <Flex
                    as='ul'
                    flexWrap='wrap'
                    listStyleType='none'
                    marginBottom='2'
                    width='100%'>
                    {project.node.frontmatter.tech.map((item, index) => {
                      return (
                        <ListItem
                          key={index}
                          color={techColor[colorMode]}
                          fontSize='sm'
                          fontWeight='bold'
                          textTransform='lowercase'
                          _notLast={{
                            marginRight: '4',
                          }}>
                          {item}
                        </ListItem>
                      );
                    })}
                  </Flex>
                  <Text
                    color={descriptionColor[colorMode]}
                    lineHeight='tall'
                    marginBottom={['0', '0', '2']}>
                    {project.node.frontmatter.description}
                  </Text>
                  <Flex justifyContent='flex-end'>
                    {project.node.frontmatter.sourceUrl !== '' ? (
                      <Link
                        isExternal
                        href={project.node.frontmatter.sourceUrl}
                        marginRight={['0', '0', '18']}>
                        <IconButton
                          aria-label='source code'
                          icon={FaGithub}
                          color={iconColor[colorMode]}
                          fontSize={['xl', 'xl', '2xl']}
                          variant='ghost'
                          variantColor='gray'
                        />
                      </Link>
                    ) : (
                      <Link isDisabled marginRight={['0', '0', '18']}>
                        <IconButton
                          isDisabled
                          aria-label='source code'
                          icon={FaGithub}
                          color={iconColor[colorMode]}
                          fontSize={['xl', 'xl', '2xl']}
                          variant='ghost'
                          variantColor='gray'
                        />
                      </Link>
                    )}
                    <Link isExternal href={project.node.frontmatter.demoUrl}>
                      <IconButton
                        aria-label='demo site'
                        icon={FaExternalLinkAlt}
                        color={iconColor[colorMode]}
                        fontSize={['lg', 'lg', 'xl']}
                        variant='ghost'
                        variantColor='gray'
                      />
                    </Link>
                  </Flex>
                </Box>
              </Flex>
            );
          })}
        </Stack>
      </Box>
    </>
  );
};

export default ProjectPage;
