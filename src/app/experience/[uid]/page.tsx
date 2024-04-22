"use client"

import Bounded from '@/components/Bounded'
import React from 'react'
import { useParams} from 'next/navigation'
import Vuram from './Vuram';
import Naaniz from './Naaniz';
import Hawkdigital from './Hawkdigital';
import Skct from './Skct';

function page() {
  const params=useParams();
  const uid:number=Number(params.uid)
  
  let componentToRender;

 if(uid==1){
  componentToRender=<Vuram></Vuram>;
 }
 else if(uid==2){
  componentToRender=<Naaniz></Naaniz>;
 }
 else if(uid==3){
  componentToRender=<Hawkdigital></Hawkdigital>;
 }
 else{
  componentToRender=<Skct></Skct>;
 }
  return (
    <Bounded as="article">
     {componentToRender}
  </Bounded>
  )
}

export default page