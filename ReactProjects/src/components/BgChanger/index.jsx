import React, { useEffect } from 'react'
import { useState } from 'react';

function BgChanger() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#00000");

  function randomColor(length){
    return Math.floor(Math.random()*length);
  }

  function handleCreateHexColor(){
    const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexColor = "#";
    for(let i =0;i<6;i++){
      hexColor+=hex[randomColor(hex.length)];
    }
  setColor(hexColor);    
  }
  function handleCreateRgbColor(){
    let r = randomColor(256)
    let g = randomColor(256)
    let b = randomColor(256)

    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(()=>{
    if(typeOfColor=== "rgb") handleCreateRgbColor()
    else handleCreateHexColor()
  },typeOfColor)

  return (
    <div style={{
      background: color,
    }} className='w-[100vw] h-[100vh] bg-black'>
      <button className='p-1 bg-slate-50 text-black m-2 rounded' onClick={()=>setTypeOfColor("rgb")}>Generate RGB color</button>
      <button className='p-1 bg-slate-50 text-black m-2 rounded' onClick={()=>setTypeOfColor("hex")}>Gnereate Hex Color</button>
      <button className='p-1 bg-slate-50 text-black m-2 rounded-md' onClick={typeOfColor==="hex"?handleCreateHexColor:handleCreateRgbColor}>Generate random Color</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default BgChanger