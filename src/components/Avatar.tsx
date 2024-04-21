"use client"

import React, { Suspense, useEffect, useState } from 'react'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import Model from "./Model"


type AvatarProps={
    className?:string
}

function Avatar({className}:AvatarProps) {
 
  const[isLoading,setIsLoading]=useState(true);

  useEffect(() => {
     const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  

  return (
    <div className={className} style={{height:500}}>
        <Canvas
         camera={{ position: [-2,-1,7], fov: 15 }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <Suspense fallback={null}>
         <Model position={[0.025, -0.9, 0]}/>
         </Suspense>
         
         <OrbitControls 
         enablePan={false}
         enableRotate={false}
         enableZoom={false}
         />
      </Canvas>
    </div>
  )
}

export default Avatar