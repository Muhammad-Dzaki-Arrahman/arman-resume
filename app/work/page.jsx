"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide, SwiperSlider } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Fullstack Web Dev",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    stack: [
      { name: "Html" },
      { name: "CSS" },
      { name: "PHP" },
      { name: "Bootstrap" },
      { name: "CodeIgniter4" },
      { name: "MySql" },
      { name: "Xampp" },
    ],
    image: "'assets/images/works/project1.png'",
    github: "",
  },
  {
    num: "02",
    category: "Frontend Web Dev",
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    stack: [
      { name: "Html" },
      { name: "CSS" },
      { name: "PHP" },
      { name: "Tailwindcss" },
      { name: "Laravel" },
      { name: "MySql" },
      { name: "Xampp" },
    ],
    image: "'assets/images/works/project2.png'",
    github: "",
  },
  {
    num: "03",
    category: "Frontend Web Dev",
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Javscript" },
      { name: "Tailwindcss" },
      { name: "ReactJS" },
      { name: "NodeJS" },
      { name: "NPM" },
    ],
    image: "'assets/images/works/project3.png'",
    github: "",
  },
  {
    num: "04",
    category: "Frontend Web Dev",
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Javscript" },
      { name: "tailwindCSS" },
      { name: "ReactJS" },
      { name: "NextJS" },
      { name: "NodeJS" },
      { name: "NPM" },
      { name: "ShadCN" },
    ],
    image: "'assets/images/works/project4.png'",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // Get currentIndex
    const currentIndex = swiper.activeIndex;
    // Update project state based on current
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-8 h-[50%]">
              {/* Outline Num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-5xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20 "></div>
              {/* Button */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github Project Button */}
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return <SwiperSlide key={index}>Slide</SwiperSlide>;
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
