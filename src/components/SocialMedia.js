import React from 'react';
import { IconButton, Link, Stack, useColorMode } from '@chakra-ui/core';
import {
  FaCodepen,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const StyledSocialIcon = (props) => {
  const { colorMode } = useColorMode();
  const color = { light: 'brand.900', dark: 'whiteAlpha.900' };

  return (
    <Link isExternal href={props.link}>
      <IconButton
        borderRadius='lg'
        color={color[colorMode]}
        fontSize={['lg', 'xl']}
        size='sm'
        variant='ghost'
        _hover={{
          backgroundColor: 'brand.800',
          color: 'brand.100',
        }}
        {...props}
      />
    </Link>
  );
};

const SocialMedia = () => {
  return (
    <Stack isInline justifyContent='center'>
      <StyledSocialIcon
        icon={FaGithub}
        aria-label='GitHub'
        title='GitHub'
        link='https://github.com/hoehooiyan'
      />
      <StyledSocialIcon
        icon={FaCodepen}
        aria-label='Codepen'
        title='Codepen'
        link='https://codepen.io/hooiyancodes'
      />
      <StyledSocialIcon
        icon={FaInstagram}
        aria-label='Instagram'
        title='Instagram'
        link='https://www.instagram.com/hooiyan.codes'
      />
      <StyledSocialIcon
        icon={FaTwitter}
        aria-label='Twitter'
        title='Twitter'
        link='https://www.twitter.com/hooiyancodes'
      />
      <StyledSocialIcon
        icon={FaEnvelope}
        aria-label='Email'
        title='Email'
        link='mailto:hoehooiyan@gmail.com'
      />
    </Stack>
  );
};

export default SocialMedia;
