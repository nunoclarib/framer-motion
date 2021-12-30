import React from 'react';
import {motion} from 'framer-motion'
import styles from '../styles/styles.css'
import PageButtons from '../components/PageButton'

import { Link } from 'react-router-dom';


const App = () => {

  return (
    <div className={styles.articles}>
      
      <PageButtons/>
    </div>
    
  );
}
export default App;