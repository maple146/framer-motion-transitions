'use client';

import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, Variants, motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

type Direction = 'vertical' | 'diagonal' | 'null' ;

const variants = {
  initial: (direction: Direction) => ({
    y: direction === 'vertical' ? -1000 : -1000,
    x: direction === 'vertical' ? 0 : -1000,
  }),
  target: {
    y: 0,
    x: 0,
  },
  exit: (direction: Direction) => ({
    y: direction === 'vertical' ? 1000 : 1000,
    x: direction === 'vertical' ? 0 : 1000,
  }),
};


const Testing = () => {
  const router = useRouter();
  const [transitionHome, setTransitionHome] = useState<boolean | null>(null)
  const [transitionVertical, setTransitionVertical] = useState<boolean | null>(null)
  const [transitionDiagonal, setTransitionDiagonal] = useState<boolean | null>(null)
  const [direction, setDirection] = useState<string | null>(null)

  console.log({ transitionHome })
  console.log({ transitionVertical })
  console.log({ transitionDiagonal })

  return (
    <MotionConfig transition={{ duration: 1 }}>
      <div className='fixed bg-black text-white'>
        <pre>
          <div>Direction value: {String(direction)}</div>
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
          custom={direction}
          initial={false}
        >
          {
            !transitionHome && (
              <motion.div
                key={'main'}
                custom={direction}
                variants={variants}
                initial='initial'
                animate='target'
                exit='exit'
              >
                <div className='w-screen h-screen flex flex-col justify-center items-center bg-orange-300'>
                  <div>Home</div>
                  <div>Direction value: {String(direction)}</div>
                  <div>TransitionHome value: {String(transitionHome)}</div>
                  <div>TransitionVertical value: {String(transitionVertical)}</div>
                  <div>TransitionDiagonal value: {String(transitionDiagonal)}</div>
                  <div>
                    <Button onClick={() => {
                      setDirection('vertical'),
                      setTransitionHome(true),
                      setTransitionVertical(true);
                    }}>Go to A Component</Button>
                    <Button onClick={() => {
                      setDirection('diagonal'),
                      setTransitionHome(true),
                      setTransitionDiagonal(true);
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
                custom={direction}
                variants={variants}
                initial='initial'
                animate='target'
                exit='exit'
              >
                <div className='w-screen h-screen flex flex-col justify-center items-center bg-green-300'>
                  <div>Ticket de animacion</div>
                  <div>Direction value: {String(direction)}</div>
                  <div>TransitionHome value: {String(transitionHome)}</div>
                  <div>TransitionVertical value: {String(transitionVertical)}</div>
                  <div>TransitionDiagonal value: {String(transitionDiagonal)}</div>
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
                custom={direction}
                variants={variants}
                initial='initial'
                animate='target'
                exit='exit'
              >
                <div className='w-screen h-screen flex flex-col justify-center items-center bg-purple-300'>
                  <div>FAQs de animacion</div>
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
