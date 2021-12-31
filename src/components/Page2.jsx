import React, {useState} from 'react';
import {motion, useViewportScroll, useTransform} from 'framer-motion'
import styles from '../styles/styles.css'
import PageButtons from './PageButton'

import AnimatedPage from './AnimatedPage';
import Button from './Button';

const Page2 = () => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 7], [0.9, 9]);
  const [text, setText] = useState('');

  return (
      <AnimatedPage>
        <div style={{height:"150vh", marginTop:"200px"}}>
        <motion.h2
        className='mt-5 pt-5'
        style={{
          scale,
          color:"#FAFF81"
        }}

        >{text}</motion.h2>
        <Button text={text} setText={setText}/>
        </div>
      </AnimatedPage>
  );
}
export default Page2;