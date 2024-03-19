'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ComponentA from '../_components/component-a/component-a';

const PageA = () => {
  return (
    <motion.main className='h-screen bg-blue-300'>
      <ComponentA />
    </motion.main>
  );
};

export default PageA;
