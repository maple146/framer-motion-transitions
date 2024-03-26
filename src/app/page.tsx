'use client';

import React, { useState } from 'react';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import HomeComponent from './_components/component-home/component-home';
import ComponentB from './_components/component-b/component-b';
import ComponentA from './_components/component-a/component-a';

// const itemVariants: Variants = {
//   open: {
//     y: 1000,
//     transition: { duration: 3 }
//   },
//   closed: {
//     y: -1000,
//     transition: { duration: 3 }
//   }
// };

type Direction = 'up' | 'down';

const variants: Variants = {
  initial: (direction: Direction) => ({
    x: direction === 'up' ? '-1000' : '1000',
  }),
  target: {
    x: '0%',
  },
  exit: (direction: Direction) => ({
    x: direction === 'up' ? '-1000' : '1000',
  }),
};

const Home = () => {
  const router = useRouter()
  const [transitionA, setTransitionA] = useState<boolean | null>(null)
  const direction: Direction = transitionA ? 'up' : 'down';
  console.log({ transitionA })
  console.log({ direction })


  const handleClick = (item: string) => {
    if (item === '/page-a') {
      setTransitionA(true)
    }
    setTimeout(() => {
      router.push(item)
    }, 3000)
  }

  return (
    <motion.main className='h-screen bg-blue-300'>
      <AnimatePresence
        initial={false}
        mode='popLayout'
        custom={direction}
      >
        {!transitionA && (<motion.div
          key={'home'}
          exit={variants}
        // variants={itemVariants}
        // exit={direction}
        // transition={{ duration: 3 }}
        >
          <HomeComponent handleClick={handleClick} />
        </motion.div>)}
      </AnimatePresence>
      {transitionA && (<motion.div key='component-a' initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: 3 }}>
        <ComponentA />
      </motion.div>)}
    </motion.main>
  );
};

export default Home;
