'use client';

import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, Variants, motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

type Direction = 'vertical' | 'diagonal' ;

const variantsDiagonal = {
  initial: (direction: Direction) => ({
    y: -1000,
    x: -1000,
  }),
  target: {
    y: 0,
    x: 0
  },
  exit: (direction: Direction) => ({
    y: 1000,
    x: 1000,
  }),
};

const variantsVertical = {
  initial: (direction: Direction) => ({
    y: -1000,
    x: 0,
  }),
  target: {
    y: 0,
    x: 0,
  },
  exit: (direction: Direction) => ({
    y: 1000,
    x: 0,
  }),
};


const Testing = () => {
  const router = useRouter();
  const [transitionHome, setTransitionHome] = useState<boolean | null>(null)
  const [transitionVertical, setTransitionVertical] = useState<boolean | null>(null)
  const [transitionDiagonal, setTransitionDiagonal] = useState<boolean | null>(null)

  const direction: Direction = transitionHome ? 'vertical' : 'diagonal';

  console.log({ transitionHome })
  console.log({ transitionVertical })
  console.log({ transitionDiagonal })

  return (
    <MotionConfig transition={{ duration: 3 }}>
      <div className='fixed bg-black text-white'>
        <pre>
          <div>TransitionHome value: {String(transitionHome)}</div>
          <div>TransitionVertical value: {String(transitionVertical)}</div>
          <div>TransitionDiagonal value: {String(transitionDiagonal)}</div>
        </pre>
      </div>
      <motion.main
        className='h-screen bg-blue-300 flex justify-center items-center'
      >
        <AnimatePresence
          mode='popLayout'
          initial={false}
        >
          {
            !transitionHome && (
              <motion.div
                key={'main'}
                custom={direction}
                variants={variantsVertical}
                initial='initial'
                animate='target'
                exit='exit'
              >
                <div className='w-screen h-screen flex flex-col justify-center items-center bg-orange-300'>
                  <div>Home</div>
                  <div>Transition value: {String(transitionHome)}</div>
                  <div>Direction value: {String(direction)}</div>
                  <div>
                    <Button onClick={() => {
                      setTransitionHome(true),
                      setTransitionVertical(true),
                      setTimeout(() => {
                        router.push('/page-c');
                      }, 3000);
                    }}>Go to A Component</Button>
                    <Button onClick={() => {
                      setTransitionHome(true),
                      setTransitionDiagonal(true),
                      setTimeout(() => {
                        router.push('/page-d');
                      }, 3000);
                    }}>Go to B Component</Button>
                  </div>
                </div>
              </motion.div>

            )
          }
        </AnimatePresence>
        <AnimatePresence
          mode='popLayout'
        >
          {
            transitionVertical && (
              <motion.div
                key={'comp1'}
                variants={variantsVertical}
                custom={direction}
                initial='initial'
                animate='target'
                exit='exit'
              >
                <div className='w-screen h-screen flex flex-col justify-center items-center bg-green-300'>
                  <div>Ticket para animacion</div>
                  <div>Transition value: {String(transitionHome)}</div>
                  <div>Direction value: {String(direction)}</div>
                  <div>
                    <Button onClick={() => {
                      setTransitionHome(true),
                      setTransitionVertical(null)
                    }}>Go to Main Component</Button>
                  </div>
                </div>
              </motion.div>
            )
          }
        </AnimatePresence>
        <AnimatePresence
          mode='popLayout'
        >
          {
            transitionDiagonal && (
              <motion.div
                key={'comp2'}
                variants={variantsDiagonal}
                custom={direction}
                initial='initial'
                animate='target'
                exit='exit'
              >
                <div className='w-screen h-screen flex flex-col justify-center items-center bg-purple-300'>
                  <div>FAQs para animacion</div>
                  <div>Transition value: {String(transitionHome)}</div>
                  <div>Direction value: {String(direction)}</div>
                  <div>
                    <Button onClick={() => {
                      setTransitionHome(true),
                      setTransitionDiagonal(null)
                    }}>Go to Main Component</Button>
                  </div>
                </div>
              </motion.div>
            )
          }
        </AnimatePresence>
      </motion.main>
    </MotionConfig>
  );
};

export default Testing;
