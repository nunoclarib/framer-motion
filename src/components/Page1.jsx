import React from 'react';
import {motion} from 'framer-motion'
import Card from './Card'
import AnimatedPage from './AnimatedPage';

const cards = [
    { id: 1, title: "Beautiful Card", text: "very pretty card 😌" },
    { id: 2, title: "Beautiful Card", text: "very pretty card 😌" },
    { id: 3, title: "Beautiful Card", text: "very pretty card 😌" },
    { id: 4, title: "Beautiful Card", text: "very pretty card 😌" },
    { id: 5, title: "Beautiful Card", text: "very pretty card 😌" },
    { id: 6, title: "Beautiful Card", text: "very pretty card 😌" },
  ];

const Page1 = () => {
  
  return (
    <AnimatedPage>
    <motion.div  
    className='cards'
    style={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "1024px",
        margin: "0 auto",
        justifyContent: "center"
        
        }}>
        {cards.map((card, i) => (
            <Card key={card.id} title={card.title} text={card.text} num={i}/>
        ))}
   </motion.div>
   </AnimatedPage>
  );
}
export default Page1;