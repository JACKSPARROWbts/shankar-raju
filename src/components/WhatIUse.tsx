"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./css/WhatIUse.css";
import Heading from "@/components/Heading";
import { Draggable } from "gsap/Draggable";
import Experience from "./Experience";
import Projects from "./Projects";

function WhatIUse() {
  const skillsRef1 = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const skillsRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Draggable);
    
    function getScrollAmountForSkillsRef1() {
      let racesWidth = skillsRef1.current!.scrollWidth;
      return -(racesWidth - window.innerWidth);
    }
    function getScrollAmountForSkillsRef2() {
      let racesWidth = skillsRef2.current!.scrollWidth;
      return -(racesWidth - window.innerWidth);
    }

    const rightToLeft = gsap.fromTo(
      skillsRef1.current,
      {
        translateX: 0,
      },
      {
        translateX: "-150vw",
        ease: "none",
        duration: 3,
        scrollTrigger: {
          trigger: triggerRef.current,
          markers: false,
          invalidateOnRefresh: true,
          start: "top 20%",
          end: () => `+=${getScrollAmountForSkillsRef1() * -1}`,
          scrub: 0.6,
          pin: true,
        },
      }
    );
    const leftToRight = gsap.fromTo(
      skillsRef2.current,
      {
        translateX: "-110vw",
      },
      {
        translateX: 0,
        ease: "none",
        duration: 3,
        scrollTrigger: {
          trigger: triggerRef.current,
          markers: false,
          invalidateOnRefresh: true,
          start: "top 19%",
          end: () => `+=${getScrollAmountForSkillsRef2() * -1}`,
          scrub: 0.6,
          pin: true,
        },
      }
    );

    Draggable.create(skillsRef1.current, {
      type: "x",
      edgeResistance: 0.65,
      bounds: {
        minX: 0,
        maxX: -(
          (skillsRef1.current!.offsetWidth -
            skillsRef1.current!.parentElement!.offsetWidth) *
          1.5
        ), // Set bounds based on container width and content width
      },
      onDrag: updatePosition1, // Callback to update position dynamically
    });
    Draggable.create(skillsRef2.current, {
      type: "x",
      edgeResistance: 0.65,
      bounds: {
        minX: 0,
        maxX: -(
          (skillsRef2.current!.offsetWidth -
            skillsRef2.current!.parentElement!.offsetWidth) *
          1.5
        ), // Set bounds based on container width and content width
      },
      onDrag: updatePosition2, // Callback to update position dynamically
    });
    // Function to update position dynamically during drag
    function updatePosition1() {
     if(skillsRef1.current!==null){
      skillsRef1.current.style.left =
        gsap.getProperty(skillsRef1.current, "x") + "px";
     }
    }
    function updatePosition2() {
      if(skillsRef2.current!==null){
        skillsRef2.current.style.left =
        gsap.getProperty(skillsRef2.current, "x") + "px";
      }
    }

    // Cleanup function
    return () => {
      leftToRight.kill();
      rightToLeft.kill();
    };
  }, []); 

  return (
    <div>
      <div ref={triggerRef}>
      <Heading className="col-start-1">What I Use</Heading>
      <br></br>
      <div className="racesWrapper">
        <div ref={skillsRef1} className="races" draggable="true">
          <h2 className="skill1 text-blue-500">Python</h2>
          <h2 className="skill1 text-yellow-500">Tableau</h2>
          <h2 className="skill1 text-green-500">Probability</h2>
          <h2 className="skill1 text-red-500">Statistics</h2>
          <h2 className="skill1 text-purple-500">AWS</h2>
          <h2 className="skill1 text-indigo-500">NLP</h2>
          <h2 className="skill1 text-pink-500">OpenCV</h2>
          <h2 className="skill1 text-gray-500">Machine Learning</h2>
          <h2 className="skill1 text-teal-500">Deep Learning</h2>
        </div>
        <div ref={skillsRef2} className="races">
          <h2 className="skill2 text-purple-500">Javascript</h2>
          <h2 className="skill2 text-blue-500">Typescript</h2>
          <h2 className="skill2 text-red-500">Redux</h2>
          <h2 className="skill2 text-yellow-500">React Native</h2>
          <h2 className="skill2 text-indigo-500">Next.js</h2>
          <h2 className="skill2 text-green-500">Node.js</h2>
          <h2 className="skill2 text-pink-500">Express.js</h2>
          <h2 className="skill2 text-gray-500">MongoDB</h2>
          <h2 className="skill2 text-red-500">React</h2>
        </div>
      </div>
      <br></br>
      <br></br>
       </div>
       <Heading className="col-start-1">Experience</Heading>
       <br></br>
        <Experience></Experience>
      <br></br>
        <Heading className="col-start-1">Projects</Heading>
       <br></br>
       <Projects></Projects>
        

      </div>

  );
}

export default WhatIUse;
