import React from 'react';
import {motion} from 'framer-motion'
import styles from '../styles/styles.css'
import PageButtons from './PageButton'

import { Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';


const Page1 = () => {

  return (
    <AnimatedPage>
        <h1>hello</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum nibh turpis. Aenean dui massa, vehicula in maximus quis, commodo in urna. Donec pretium sapien vitae mi gravida, quis faucibus mi lobortis. Etiam et nibh maximus urna lobortis tempus eu sed quam. Morbi varius scelerisque nulla, a hendrerit turpis accumsan quis. Nullam sit amet nunc eget enim aliquam ultrices ac in justo. Quisque tempus leo vitae dolor blandit egestas. Sed pharetra, dolor non posuere elementum, dolor quam iaculis purus, vel egestas nibh turpis in elit. Sed semper, orci eget egestas eleifend, mauris dolor volutpat diam, ac facilisis mauris erat nec enim. Cras tempor non orci elementum congue. Proin non condimentum arcu. Curabitur sollicitudin vitae sapien eget cursus. Quisque auctor metus nulla, et molestie turpis feugiat laoreet. Nunc at massa ut ligula laoreet posuere eu id neque. Donec in ornare arcu, non dictum enim.

Nunc venenatis venenatis ligula, quis efficitur mauris feugiat feugiat. Duis finibus eleifend lorem, sit amet faucibus ante elementum id. In in ipsum nec metus maximus semper sit amet at risus. Nullam dignissim magna nunc, in gravida lacus viverra at. Maecenas laoreet magna dui, eu ultricies nulla faucibus quis. Mauris fringilla, eros volutpat iaculis fermentum, urna orci pellentesque est, vitae ornare ligula libero vel diam. In nec leo consequat, eleifend ex ut, cursus urna. Ut faucibus tortor sit amet elementum pretium. Fusce eget enim vel sem euismod finibus. Sed quis dolor commodo, congue quam id, molestie sapien. Nunc vulputate leo tortor, suscipit bibendum erat ullamcorper quis. Proin mollis purus fringilla vulputate rutrum. Cras quis orci posuere, dapibus nulla sed, condimentum eros. Etiam dictum auctor ultrices. Nulla porta luctus libero at suscipit. </p>
    </AnimatedPage>
  );
}
export default Page1;