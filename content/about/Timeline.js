import React, { useState } from 'react';
import {
  Button,
  Collapse,
  Divider,
  Flex,
  Heading,
  List,
  ListItem,
  ListIcon,
  Text,
  useColorMode,
} from '@chakra-ui/core';

const MyHeading = ({ text, ...props }) => {
  const { colorMode } = useColorMode();
  const color = { light: 'blackAlpha.800', dark: 'whiteAlpha.800' };

  return (
    <Heading
      as='h3'
      color={color[colorMode]}
      fontWeight='medium'
      size='lg'
      mt='12'
      {...props}>
      {text}
    </Heading>
  );
};

const MyList = ({ children, ...props }) => {
  return (
    <List pl='2' mt='3' {...props}>
      {children}
    </List>
  );
};

const MyListIcon = ({ ...props }) => {
  const { colorMode } = useColorMode();
  const color = { light: 'brand.700', dark: 'brand.800' };

  return <ListIcon icon='check-circle' color={color[colorMode]} {...props} />;
};

const MyListItem = ({ text, ...props }) => {
  const { colorMode } = useColorMode();
  const color = { light: 'black', dark: 'brand.300' };

  return (
    <Flex alignItems='center' mb='3'>
      <MyListIcon />
      <ListItem
        color={color[colorMode]}
        fontSize={['md', 'md', 'lg']}
        lineHeight='normal'
        ml='1'
        {...props}>
        {text}
      </ListItem>
    </Flex>
  );
};

const MyDivider = () => {
  const { colorMode } = useColorMode();
  const borderColor = { light: 'brand.400', dark: 'gray.600' };

  return <Divider borderColor={borderColor[colorMode]} mt='10' />;
};

export const Year1995 = () => {
  return (
    <>
      <MyHeading text='1995 - Born' />
      <MyList>
        <MyListItem text='Born in March 👶' />
        <MyListItem text='Raised up by my grandmother by the age of 7 👧' />
      </MyList>
    </>
  );
};

export const Year2013 = () => {
  return (
    <>
      <MyHeading text='2013 - Pre University' />
      <MyList>
        <MyListItem text='Pursued Pre U in another state 🚌' />
        <MyListItem text='Took Cambridge GCE A-Level Science at TARUC 📕' />
        <MyListItem text='My first ever experience writing code with Visual Basic 💻' />
        <MyListItem text='Graduated in Nov 2014 👋' />
      </MyList>
    </>
  );
};

export const Year2015 = () => {
  return (
    <>
      <MyHeading text='2015 - University' />
      <MyList>
        <MyListItem text='Motorcycle accident 🏍' />
        <MyListItem text='Joined Bachelor of Information Systems (Hons) Information System Engineering at UTAR 📕' />
        <MyListItem text='Felt uncomfortable internally & looking different externally at the end of the year 🤮' />
      </MyList>
    </>
  );
};

export const Year2016 = () => {
  return (
    <>
      <MyHeading text='2016 - Diagnosis' />
      <MyList>
        <MyListItem text='Diagnosed with kidney failure - ESRD 😔' />
        <MyListItem text='Forced to stop my degree studies ⏹' />
        <MyListItem text='Hospitalised for a month 🏥' />
        <MyListItem text='Began the journey of peritoneal dialysis 💉' />
      </MyList>
    </>
  );
};

export const Year2017 = () => {
  return (
    <>
      <MyHeading text='2017 - Treatment' />
      <MyList>
        <MyListItem text='Mostly dealing with dialysis & having doctor appt. regularly 🔁' />
        <MyListItem text='Life has been ups & downs, full of negative thoughts 🤯' />
        <MyListItem text='Pre-transplant full body check-ups 🩺' />
      </MyList>
    </>
  );
};

export const Year2018 = () => {
  return (
    <>
      <MyHeading text='2018 - Reborn' />
      <MyList>
        <MyListItem text='Renal transplant successfully done on 18th May 🎉' />
        <MyListItem text='Body recovery mode & adjust to new life routine 🔁' />
        <MyListItem text='Dicovered freeCodeCamp ✨' />
        <MyListItem text='Started to learn a little HTML & CSS ✍' />
        <MyListItem text='Miserable about future path: University or Self-taught? ❓' />
      </MyList>
    </>
  );
};

export const Year2019 = () => {
  return (
    <>
      <MyHeading text='2019 - Road to web development' />
      <MyList>
        <MyListItem text='Discovered #100daysofcodes 🗓' />
        <MyListItem text='Started posting from April to August on instagram 📱' />
        <MyListItem text='Decided taking the self-taught path 🚆' />
        <MyListItem text='Learned HTML, CSS, JavaScript, Git, etc. through online resources 📚' />
        <MyListItem text='Started learning piano 🎹' />
        <MyListItem text='Participated in Hacktoberfest for the first time 🎃' />
      </MyList>
    </>
  );
};

export const Year2020 = () => {
  return (
    <>
      <MyHeading text='2020 - Future' />
      <MyList>
        <MyListItem text='Published my first personal website 👩‍💻' />
        <MyListItem text='Studying Computer Science 📖' />
      </MyList>
    </>
  );
};

const Timeline = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode } = useColorMode();

  return (
    <Flex flexDir='column'>
      <Collapse animateOpacity={true} startingHeight={740} isOpen={show}>
        <Year2020 />
        <MyDivider />
        <Year2019 />
        <MyDivider />
        <Year2018 />
        <MyDivider />
        <Year2017 />
        <MyDivider />
        <Year2016 />
        <MyDivider />
        <Year2015 />
        <MyDivider />
        <Year2013 />
        <MyDivider />
        <Year1995 />
      </Collapse>
      <Button
        aria-label='Show more'
        onClick={handleToggle}
        alignSelf='center'
        fontWeight='medium'
        mt='8'
        variantColor={{ light: 'brand', dark: 'gray' }[colorMode]}>
        <Text px='2'> Show {show ? 'Less' : 'More'}</Text>
      </Button>
    </Flex>
  );
};

export default Timeline;
