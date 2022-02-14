import React from 'react';
import { Box, Divider, Flex, Text, useColorMode } from '@chakra-ui/core';

import Head from '@components/head';
import SocialMedia from '@components/SocialMedia';
import ContactForm from '@components/ContactForm';

const ContactPage = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'brand.50', dark: 'gray.900' };
  const color = { light: 'black', dark: 'whiteAlpha.900' };

  return (
    <>
      <Head title='Contact Me' />
      <Flex
        as='main'
        bg={bgColor[colorMode]}
        flexDirection='column'
        justifyContent='center'
        minHeight='80vh'>
        <Box paddingX={['5', '10']} paddingTop={['8']}>
          <Box marginX='auto' maxWidth='700px'>
            <Box width={['100%', '85%', '70%']} marginX='auto'>
              <Text
                as='p'
                fontSize={['base', 'lg', 'xl']}
                color={color[colorMode]}
                textAlign='center'
                marginBottom='10'>
                <Text as='span' aria-label='party popper logo' role='img'>
                  🎉
                </Text>
                <br /> Hey, thanks for stopping by! <br /> <br /> I am{' '}
                <strong>currently</strong> looking for job opportunities. If you
                like my work, feel free to <strong>check out</strong> my social
                media to get to know me better.
                <br /> <br /> <strong>Email me</strong> or just{' '}
                <strong>send me</strong> a quick message below to discuss
                something more!
              </Text>
            </Box>
            <SocialMedia />
          </Box>
          <Divider
            borderColor='brand.600'
            width='35%'
            marginTop='6'
            marginX='auto'
          />
        </Box>
        <ContactForm />
      </Flex>
    </>
  );
};

export default ContactPage;
