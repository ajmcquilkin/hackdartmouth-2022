import React from "react";
import Link from 'next/link';
import { Home } from "../components/home1/home"

export default function Web() {
  
  return (
    <div style={{width:''}}>
      {/* <div > */}
        {/* <div style={{position: "absolute",
  backgroundColor: "rgba(0,0,0,.4)", overflow: "hidden", top:0, right:0, height: "100%", width:"100%" }}></div> */}
            {/* <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
            alt="{props.name}"/> */}
            
      {/* </div> */}
      
      <Home/>
    </div>
  );
}
