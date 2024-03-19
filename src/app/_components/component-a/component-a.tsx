'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';

const ComponentA = () => {
  return (
    <Container renderAs='section' className='flex flex-col items-center justify-center h-screen bg-orange-200'>
      Component A
    </Container>
  );
};

export default ComponentA;
