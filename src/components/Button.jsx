import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// const styles = {
//   background: "#F17F29",
//   borderRadius: 30,
//   width: 150,
//   padding: "10px 20px",
//   margin: "0 auto",
//   color: "#333",
//   outline: "none",
//   border: "none",
//   cursor: "pointer",
//   color: "white",
//   display: "flex",
//   flexWrap: "wrap",
//   maxWidth: "1024px",
//   margin: "0 auto",
//   justifyContent: "center",
// };


const MyButton = styled(motion.button)`
background: #F17F29;
border-radius: 30px;
width: 150;
padding: 10px 20px;
margin: 0 auto;
color: #333;
outline: none;
border: none;
cursor: pointer;
color: white;
display: flex;
flex-wrap: wrap;
maxWidth: 1024px;
margin: 0 auto;
justify-content: center;
`;

export default function Button({text,setText}) {


  return (
    <div className="col-12">
      <MyButton
      className="mt-5"

      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
      
      drag

      onClick={()=> setText(text + "This is more text ")}
      >Click Me!</MyButton>
  <br/>
    </div>
  )
}