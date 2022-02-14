import React, { useEffect } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Link as ChakraLink,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import { FaChevronDown } from 'react-icons/fa';
import styled from '@emotion/styled';

import CtaButton from '@components/CtaButton';
import HeroImg from '@images/home/hero.svg';
import changeVhVariable from '@utils/changeVhVariable';

export const Container = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  position: relative;
  z-index: 0;

  min-height: ${({ fullHeight }) =>
    fullHeight
      ? 'calc(var(--vh, 1vh) * 90)'
      : 'auto'}; /* Fallback for browsers that do not support Custom Properties */
  text-align: center;
`;

const Hero = () => {
  const { colorMode } = useColorMode();
  const headingColor = { light: 'blackAlpha.800', dark: 'brand.100' };
  const roleColor = { light: 'brand.700', dark: 'brand.800' };
  const locationColor = { light: 'brand.900', dark: 'gray.400' };
  const variantColor = { light: 'brand', dark: 'gray' };

  useEffect(() => {
    changeVhVariable();
  }, []);

  return (
    <Container
      fullHeight
      flexDirection={['column']}
      alignItems='center'
      justifyContent='center'
      paddingX={['5', '10']}
      width='100%'>
      <Flex
        flexDirection={['column', 'column', 'column', 'row-reverse']}
        alignItems='center'
        justifyContent={['center', 'center', 'center', 'space-around']}
        maxWidth='992px'
        width='100%'
        textAlign={['center', 'center', 'center', 'left']}>
        <Box width={['90%', '80%', '70%', '50%']} marginBottom='2'>
          <Image src={HeroImg} alt='Hero Image' maxWidth='100%' />
        </Box>
        <Box marginBottom={['8', '16', '16', '0']}>
          <Flex
            flexDirection={['row', 'row', 'row', 'column']}
            justifyContent={['center', 'center', 'center', 'flex-start']}
            color='blackAlpha.800'
            marginBottom={['3']}
            textTransform='uppercase'>
            <Heading
              as='h1'
              size='2xl'
              color={headingColor[colorMode]}
              fontFamily='Permanent Marker'
              fontWeight='black'
              marginRight={['10px', '10px', '10px', '0']}
              lineHeight={['normal', 'normal', 'normal', 'none']}>
              I'm
            </Heading>
            <Heading
              as='h1'
              size='2xl'
              color={headingColor[colorMode]}
              fontFamily='Permanent Marker'
              fontWeight='black'
              lineHeight={['normal', 'normal', 'normal', 'none']}>
              Hooi Yan
            </Heading>
          </Flex>
          <Box>
            <Heading
              as='h2'
              size='lg'
              color={roleColor[colorMode]}
              fontWeight='semibold'>
              Front-End Developer
            </Heading>
            <Text
              as='p'
              color={locationColor[colorMode]}
              fontSize={['md', 'lg']}
              fontWeight='medium'
              marginBottom={['4', '4', '4', '6']}>
              based in Malaysia
            </Text>
            <CtaButton linkTo='/about' text='About Me' />
          </Box>
        </Box>
        <ChakraLink
          as={GatsbyLink}
          to='/#skills'
          display={['block', 'block', 'block', 'none']}
          position={'absolute'}
          bottom='2'>
          <IconButton
            icon={FaChevronDown}
            focusable='true'
            borderRadius='full'
            variantColor={variantColor[colorMode]}
            size='sm'
          />
        </ChakraLink>
      </Flex>
      <ChakraLink
        as={GatsbyLink}
        to='/#skills'
        display={['none', 'none', 'none', 'block']}
        position={'absolute'}
        bottom='10'>
        <IconButton
          icon={FaChevronDown}
          focusable='true'
          borderRadius='full'
          variantColor={variantColor[colorMode]}
        />
      </ChakraLink>
    </Container>
  );
};

export default Hero;
