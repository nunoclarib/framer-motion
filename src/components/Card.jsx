import React, {useState} from 'react'
import {motion} from 'framer-motion'

export default function Card({key, title, text, num}) {
    const [isModal, setModal] = useState(false);

    const variants = {
        active: {
            opacity: 1,
            x: 0,
            y:  0,
            scale: 2,
            zIndex: 3,
            backgroundColor: "#FAFF81",
            color: "black"
        },
        inActive: {
            opacity: 1,
            x: 0,
            y:0,
            transition:{
                durantion: 1, 
                delay: num * 0.2
            }
        }
      };

    return (
        <motion.div key={key}
        onClick={() => setModal(!isModal)}

        initial={{opacity: 0 , x: num % 2 === 0 ? -50 : 50, y: num % 2 === 0 ? -50 : 50}}
        animate={isModal ? "active" : "inActive"}
        variants={variants}

        className='col-12 col-sm-3'
        style={
            {
                width: "calc(33.33% - 8px)",
                margin: "4px",
                backgroundColor: '#F564A9',
                color: "#fff",
                padding: "1.5rem",
                borderRadius: "5px",
            }
        }
        >
            <h2>{title}</h2>
            <p>{text}</p>
            {isModal ? (<p>✨the prettiest! 💅🏻 </p>) : (<div></div>) }
        </motion.div>
    )
}
