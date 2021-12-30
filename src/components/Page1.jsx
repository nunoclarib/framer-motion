import React from 'react';
import {motion} from 'framer-motion'
import AnimatedPage from './AnimatedPage';
import Card from './Card'


const cards = [
    { id: 1, title: "Beautiful Card", text: "very very pretty" },
    { id: 2, title: "Beautiful Card", text: "very very pretty" },
    { id: 3, title: "Beautiful Card", text: "very very pretty" },
    { id: 4, title: "Beautiful Card", text: "very very pretty" },
    { id: 5, title: "Beautiful Card", text: "very very pretty" },
    { id: 6, title: "Beautiful Card", text: "very very pretty" },
  ];

const Page1 = () => {

  return (
    <div style={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "1024px",
        margin: "0 auto",
        justifyContent: "center"}}>
        {cards.map((card, i) => (
            <Card key={card.id} title={card.title} text={card.text} num={i}/>
        ))}
   </div>
  );
}
export default Page1;