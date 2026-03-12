 import React from 'react'
 import { Geist  } from "next/font/google";

 
const Bitcount=Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export default function Page() {
  const internal = {  
    backgroundColor:"red" ,
    textAlign:"center",
  }
  
  return (
  <div >
  <h1 style={internal} >About Page</h1>
  <p className={Bitcount.variable}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
  
  
  </div>
  )
   
}