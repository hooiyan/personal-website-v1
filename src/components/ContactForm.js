import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
  Textarea,
  useColorMode,
} from '@chakra-ui/core';

import SectionTitle from '@components/SectionTitle';
import ImgContact from '@images/home/contact.svg';

const StyledStack = (props) => {
  return <Stack as='form' spacing='6' {...props} />;
};

const StyledFormLabel = (props) => {
  const { colorMode } = useColorMode();
  const formLabelColor = { light: 'brand.700', dark: 'gray.400' };

  return (
    <FormLabel
      color={formLabelColor[colorMode]}
      fontSize={['base', 'lg']}
      {...props}>
      {props.label}
    </FormLabel>
  );
};

const StyledInput = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.900' };
  const borderColor = { light: 'brand.500', dark: 'brand.800' };
  const fontColor = { light: 'brand.900', dark: 'brand.300' };

  return (
    <Input
      bg={bgColor[colorMode]}
      borderColor={borderColor[colorMode]}
      color={fontColor[colorMode]}
      focusBorderColor='brand.800'
      fontSize={['base', 'lg']}
      fontWeight='medium'
      _placeholder={{
        fontSize: 'md',
        fontWeight: 'normal',
      }}
      {...props}
    />
  );
};

const StyledTextarea = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.900' };
  const borderColor = { light: 'brand.500', dark: 'brand.800' };
  const fontColor = { light: 'brand.900', dark: 'brand.300' };

  return (
    <Textarea
      bg={bgColor[colorMode]}
      borderColor={borderColor[colorMode]}
      color={fontColor[colorMode]}
      focusBorderColor='brand.800'
      fontSize={['base', 'lg']}
      fontWeight='medium'
      _placeholder={{
        fontSize: 'md',
        fontWeight: 'normal',
      }}
      {...props}
    />
  );
};

const ContactForm = () => {
  const { colorMode } = useColorMode();

  return (
    <Box paddingY={['12', '12', '16']} paddingX={['5', '10']}>
      <Flex
        flexDirection={['column', 'column', 'column', 'row']}
        alignItems='center'
        justifyContent={['stretch', 'stretch', 'stretch', 'space-between']}
        maxWidth='992px'
        marginX='auto'
        width='100%'>
        <Box width={['90%', '80%', '70%', '50%']}>
          <Image src={ImgContact} alt='illustration' />
          <SectionTitle text='Get in touch' />
        </Box>
        <Flex flexDirection='column' width={['100%', '90%', '80%', '40%']}>
          <StyledStack
            id='contact'
            name='new-contact-form'
            method='POST'
            data-netlify='true'
            data-netlify-honeypot='bot-field'>
            <input type='hidden' name='form-name' value='new-contact-form' />

            <FormControl isRequired>
              <StyledFormLabel htmlFor='name' label='Name' />
              <StyledInput
                required
                type='text'
                id='name'
                name='name'
                placeholder='John Doe'
                aria-label='Name'
              />
            </FormControl>

            <FormControl isRequired>
              <StyledFormLabel htmlFor='email' label='Email' />
              <StyledInput
                required
                type='email'
                id='email'
                name='email'
                placeholder='johndoe@example.com'
                aria-label='Email'
              />
            </FormControl>

            <FormControl isRequired>
              <StyledFormLabel htmlFor='message' label='Message' />
              <StyledTextarea
                required
                form='contact'
                id='message'
                name='message'
                type='text'
                placeholder="What's in you mind?"
                aria-label='Message'
              />
            </FormControl>

            <Button
              aria-label='submit form'
              borderRadius='lg'
              fontWeight='medium'
              letterSpacing='wide'
              marginTop='6'
              marginX='auto'
              size='lg'
              textTransform='capitalize'
              type='submit'
              variantColor={{ light: 'brand', dark: 'gray' }[colorMode]}>
              Submit
            </Button>
          </StyledStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ContactForm;
