'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ComponentB from '../_components/component-b/component-b';

const TicketPage = () => {
  return (
    <motion.main className='h-screen bg-blue-300'>
      <ComponentB />
    </motion.main>
  );
};

export default TicketPage;
