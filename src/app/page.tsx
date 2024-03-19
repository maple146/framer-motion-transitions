'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import HomeComponent from './_components/component-home/component-home';
import ComponentB from './_components/component-b/component-b';
import ComponentA from './_components/component-a/component-a';

const Home = () => {
  const router = useRouter()
  const [homeCoords, setHomeCoords] = useState({ y: 1000 })
  const [transitionA, setTransitionA] = useState<boolean>(false)
  const [transitionB, setTransitionB] = useState<boolean>(false)

  const handleClick = (item) => {
    if (item === '/page-a') {
      setTransitionA(true)
      setHomeCoords({ y: 1000 })
    } else if (item === '/page-b') {
      setTransitionB(true)
      setHomeCoords({ y: -1000 })
    } else {
      return
    }
    setTimeout(() => {
      router.push(item)
    }, 3000)
  }

  return (
    <motion.main className='h-screen bg-blue-300'>
      <AnimatePresence mode='popLayout'>
        {!transitionB && !transitionA && (<motion.div
          key={'home'}
          exit={homeCoords}
          transition={{ duration: 3 }}
        >
          <HomeComponent handleClick={handleClick} />
        </motion.div>)}
      </AnimatePresence>
      {transitionA && (<motion.div key='component-a' initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: 3 }}>
        <ComponentA />
      </motion.div>)}
      {transitionB && (<motion.div key='component-b' initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ duration: 3 }}>
        <ComponentB />
      </motion.div>)}
    </motion.main>
  );
};

export default Home;
