'use client';

import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, Variants, motion } from 'framer-motion';
import ComponentC from '../_components/component-c/page';
import { Button } from '@/components/ui/Button';

const PageD = ({ direction, variants }) => {
  return (
    <MotionConfig transition={{ duration: 1 }}>
      <motion.main
        className='h-screen bg-blue-300 flex justify-center items-center'
      >
        <motion.div
          key={'comp2'}
          custom={direction}
          variants={variants}
          initial='initial'
          animate='target'
          exit='exit'
        >
          <div className='w-screen h-screen flex flex-col justify-center items-center bg-purple-300'>
            <div>
                Page D
            </div>
            <div>
              <Button onClick={() => {
                console.log('Clicked')
              }}>Go to Main Component</Button>
            </div>
          </div>
        </motion.div>
      </motion.main>
    </MotionConfig>
  );
};

export default PageD;
