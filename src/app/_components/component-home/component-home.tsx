'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const HomeComponent = ({ handleClick }) => {
  return (
    <Container renderAs='section' className='flex flex-col items-center justify-center h-screen bg-blue-200'>
      Home
      <Button onClick={() => {
        handleClick('/page-a')
      }}>Component A</Button>
      <Button onClick={() => {
        handleClick('/page-b')
      }}>Component B</Button>
    </Container>
  );
};

export default HomeComponent;
