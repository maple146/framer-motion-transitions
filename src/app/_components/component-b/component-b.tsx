'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';

const ComponentB = () => {
  return (
    <Container renderAs='section' className='flex items-center justify-center h-screen bg-green-200'>
      Component B
    </Container>
  );
};

export default ComponentB;
