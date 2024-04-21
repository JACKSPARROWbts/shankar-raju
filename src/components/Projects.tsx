"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  contentType?: string
};

export default function Projects({
  contentType,
}: Project) {
  const component = useRef(null);
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);

  const revealRef = useRef(null);
  const [currentItem, setCurrentItem] = useState<null | number>(null);
  const [hovering, setHovering] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const items = [
    {
      uid: 1,
      title: "Covid Data Analysis",
      image:"/images/covid19.png",
      tags: [
        {
          tag: "Tableau,Excel,Python",
        },
      ],
      projectLink:"https://github.com/JACKSPARROWbts/DS_ML_AI_Universe/tree/covid_19_data_analysis"
    },
    {
      uid: 2,
      title: "The_Ear",
      image:"/images/theEar.png",
      tags: [
        {
          tag: "Python,Flask",
        },
      ],
      projectLink:"https://github.com/JACKSPARROWbts/The_Ear"
    },
    {
      uid: 1,
      title: "The_Eye",
      image:"/images/theEye.png",
      tags: [
        {
          tag: "Django,React,MongoDB",
        },
      ],
      projectLink:"https://github.com/JACKSPARROWbts/The_Eye"
    },
    {
      uid: 1,
      title: "Pulse-Series",
      image:"/images/documentation.png",
      tags: [
        {
          tag: "Documentation for developers",
        },
      ],
      projectLink:"https://github.com/JACKSPARROWbts/Pulse-Series"
    }
  ];
  
  useEffect(() => {
    // Animate list-items in with a stagger
    let ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
      gsap.fromTo(
          item,
          {
            y: 20,
          },
          {
            y: 0,
            duration: 1.3,
            ease: "elastic.out(1,0.3)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100px",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          },
        );
      });

      return () => ctx.revert(); // cleanup!
    }, component);
  }, []);

  useEffect(() => {
    // Mouse move event listener
    const handleMouseMove = (e: MouseEvent) => {
      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };
      // Calculate speed and direction
      const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2));

      let ctx = gsap.context(() => {
        // Animate the image holder
        if (currentItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350;
          const maxX = window.innerWidth - 250;

          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
            rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1), // Apply rotation based on speed and direction
            ease: "back.out(2)",
            duration: 1.3,
          });
          gsap.to(revealRef.current, {
            opacity: hovering ? 1 : 0,
            visibility: "visible",
            ease: "power3.out",
            duration: 0.4,
          });
        }
        lastMousePos.current = mousePos;
        return () => ctx.revert(); // cleanup!
      }, component);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hovering, currentItem]);

  const onMouseEnter = (index: number) => {
    setCurrentItem(index);
    if (!hovering) setHovering(true);
  };

  const onMouseLeave = () => {
    setHovering(false);
    setCurrentItem(null);
  };

  const contentImages = items.map((item) => {
    return item.image
  });

  // Preload images
  useEffect(() => {
    const promises = contentImages.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    });
  
    Promise.all(promises).catch((error) => {
      console.error("Error loading images:", error);
    });
  }, [contentImages]);
  

  return (
    <>
      <ul
        ref={component}
        className="grid"
        onMouseLeave={onMouseLeave}
      >
        {items.map((post, index) => (
          <li
            key={index}
            ref={(el:any) => itemsRef.current[index] = el}
            onMouseEnter={() => onMouseEnter(index)}
            className="list-item opacity-1"
          >
            <a
              href={`${post.projectLink}`}
              target="_blank"
              className="flex flex-col justify-between  py-10  text-slate-200 md:flex-row "
              aria-label={post.title || ""}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{post.title}</span>
                <div className="flex gap-3 text-yellow-400">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-lg font-bold">
                      {tag.tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
                Read More <MdArrowOutward />
              </span>
            </a>
          </li>
        ))}

        {/* Hover element */}
        <div
          className="hover-reveal pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg bg-cover bg-center opacity-0 transition-[background] duration-300"
          style={{
            backgroundImage:
              currentItem !== null ? `url(${contentImages[currentItem]})` : "",
          }}
          ref={revealRef}
        ></div>
      </ul>
    </>
  );
}