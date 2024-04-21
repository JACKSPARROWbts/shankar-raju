"use client";

import { useEffect, useRef, useState } from "react";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {gsap} from "gsap";
import Bounded from "@/components/Bounded";
import Shapes from "./Shapes"
import Button from "@/components/Button";
import Biography from "../Biography";
import Link from "next/link";
import "../../components/css/WhatIUse.css"
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */

const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef(null);

 
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Generate animation for name
      tl.fromTo(
        ".name-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease:"elastic.out(1,0.3)",
          duration:1,
          transformOrigin:"left top",
          delay:0.5,
          stagger:{
            each:0.1,
            from:"random"
          }
        }
      );

      // Generate animation for job title
      tl.fromTo(".job-title",{
        y:20,
        opacity:0,
        scale:1.2
      },
      {
        opacity:1,
        y:0,
        duration:1,
        scale:1,
        ease:"elastic.out(1,0.3)"
      })
    }, component);
    return () => ctx.revert();
  }, []);

  const renderLetters = (name: KeyTextField, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`myNameHeader name-animation name-animation-${key} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };
  return (
   <div>
     <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="glassContainer glass"
      ref={component}
    >
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
      <Shapes/>
        <div className="col-start-1 md:row-start-1">
          <h1
            className="mb-8 font-extraold leading-none
        tracking-tighter"
            aria-label={
              slice.primary.first_name + " " + slice.primary.last_name
            }
          >
            <span className="block space-x-1 text-[clamp(3rem,10vmin,10rem)] md:text-[clamp(3rem,15vmin,15rem)] text-slate-300">
              {renderLetters(slice.primary.first_name, "first")}
              <span className="mr-4"></span>
              {renderLetters(slice.primary.last_name, "second")}
            </span>
            <span className="-mt-[.2em] block text-slate-500">
            </span>
            <span
              className="job-title mt-[1em] block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500
            bg-clip-text text-2x1 font-bold uppercase tracking-[.2em] text-transparent opacity-0
            md:text-4xl"
            >
              {slice.primary.tag_line}
            </span>
          </h1>
          <Button></Button>
        </div>
      </div>
      <Biography slice={slice}></Biography>
    </Bounded>
    <div className="space-10vh lightBG">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
           Shankar Raju
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">
            © {new Date().getFullYear()} {"Shankar Raju"}
          </p>
        </div>
        </div>
    </div>
  );
};

export default Hero;
