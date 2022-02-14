import React from 'react';
import {
  Box,
  Flex,
  Image,
  List,
  ListItem,
  ListIcon,
  useColorMode,
} from '@chakra-ui/core';

import CtaButton from '@components/CtaButton';
import SectionTitle from '@components/SectionTitle';
import ImgSkill from '@images/home/skill.svg';

const SkillList = () => {
  const skillItems = [
    'html & s(c)ss',
    'css modules',
    'styled-components',
    'javascript',
    'reactjs',
    'gaysbyjs',
    'git & github',
  ];
  const { colorMode } = useColorMode();
  const color = { light: 'brand.900', dark: 'brand.300' };
  const iconColor = { light: 'brand.700', dark: 'brand.800' };

  return (
    <List spacing={2} marginBottom='6'>
      {skillItems.map((item, index) => {
        return (
          <ListItem
            key={index}
            color={color[colorMode]}
            fontSize={['md', 'lg']}>
            <ListIcon icon='check-circle' color={iconColor[colorMode]} />
            {item}
          </ListItem>
        );
      })}
    </List>
  );
};

const Skills = () => {
  return (
    <Flex
      id='skills'
      flexDirection={['column', 'column', 'column', 'row']}
      justifyContent={['center', 'center', 'center', 'space-between']}
      alignItems='center'
      maxWidth='992px'
      width='100%'
      marginX='auto'
      paddingY={['10', '16']}
      paddingX={['5', '10']}>
      <Box width={['90%', '80%', '70%', '50%']}>
        <Image src={ImgSkill} alt='illustration' maxWidth='100%' />
        <SectionTitle text='Skills' />
      </Box>
      <Flex
        flexDirection={['column']}
        justifyContent={['stretch', 'stretch', 'space-around']}
        width={['70%', '55%', '30%', '40%']}>
        <SkillList />
        <Box alignSelf={['center', 'center', 'center', 'flex-start']}>
          <CtaButton linkTo='/project/' text='See My Work' />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Skills;
