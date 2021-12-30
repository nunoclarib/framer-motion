import React, {useState} from 'react'
import {motion} from 'framer-motion'

export default function Card({key, title, text, num}) {

    return (
        <motion.div 
        onClick={()=> setSelectedId(key)}
        key={key} className='col-12 col-sm-3'
        style={
            {
                width: "calc(33.33% - 8px)",
                margin: "4px",
                backgroundColor: '#ae2',
                color: "#fff",
                padding: "1.5rem",
                borderRadius: "5px",
            }
        }

        initial={{opacity: 0 , x: num % 2 === 0 ? -50 : 50, y: num % 2 === 0 ? -50 : 50}}
        animate={{opacity: 1 , x: 0 , y: 0}}
        transition={{durantion: 1, delay: num * 0.2}}
        >
            <h2>{title}</h2>
            <p>{text}</p>
        </motion.div>
    )
}
