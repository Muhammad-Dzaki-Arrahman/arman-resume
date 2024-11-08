"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaReact,
  FaNpm,
  FaNodeJs,
  FaFileExcel,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiCodeigniter,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiBootstrap,
  SiPhp,
  SiPython,
  SiReact,
  SiShadcnui,
  SiGit,
  SiPostman,
} from "react-icons/si";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About Me",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  info: [
    {
      fieldName: "Name",
      valueName: "M Dzaki Arrahman",
    },
    {
      fieldName: "Email",
      valueName: "firzhaalex@gmail.com",
    },
    {
      fieldName: "Nationality",
      valueName: "Indonesia",
    },
    {
      fieldName: "LinkedIn",
      valueName: "M_Dzaki_Arrahman",
    },
  ],
};

// experience data
const experience = {
  title: "My Experience",
  desc: "Learning through hands-on experience in fullstack web development, data analysis, and machine learning to create impactful solutions in various projects.",
  items: [
    {
      company: "Computer Science University of Lampung",
      projectTitle: "Information System for Mosque",
      position: "fullstack web developer",
      duration: "July 2022 - December 2022",
      techUsed: [
        {
          icon: <SiCodeigniter />,
          name: "CodeIgniter4",
        },
        {
          icon: <SiBootstrap />,
          name: "Bootstrap",
        },
        {
          icon: <SiMysql />,
          name: "MySQL",
        },
        {
          icon: <SiPhp />,
          name: "PHP",
        },
      ],
    },
    {
      company: "Computer Science University of Lampung",
      projectTitle: "Kiar Novel",
      position: "fullstack web developer",
      duration: "June 2023 - August 2023",
      techUsed: [
        {
          icon: <SiLaravel />,
          name: "Laravel",
        },
        {
          icon: <SiBootstrap />,
          name: "Bootstrap",
        },
        {
          icon: <SiTailwindcss />,
          name: "Tailwindcss",
        },
        {
          icon: <SiMysql />,
          name: "MySQL",
        },
        {
          icon: <SiPhp />,
          name: "PHP",
        },
      ],
    },
    {
      company: "Homeschooling Kak Seto School",
      projectTitle: "New Student Enrollment",
      position: "Front-end Web Developer Intern",
      duration: "August 2023 - December 2023",
      techUsed: [
        {
          icon: <SiReact />,
          name: "React",
        },
        {
          icon: <SiBootstrap />,
          name: "Bootstrap",
        },
        {
          icon: <SiTailwindcss />,
          name: "Tailwindcss",
        },
        {
          icon: <FaNodeJs />,
          name: "NodeJS",
        },
        {
          icon: <FaNpm />,
          name: "NPM",
        },
        {
          icon: <SiPostman />,
          name: "Postman",
        },
      ],
    },
    {
      company: "Computer Science University of Lampung",
      projectTitle:
        "Prediction customers interest using sentiment analysis for Indonesia Airline ",
      position: "Data Science and Machine Learning Engineer",
      duration: "January 2024 - November 2024",
      techUsed: [
        {
          icon: <SiPython />,
          name: "Python",
        },
        {
          icon: <FaFileExcel />,
          name: "Excel",
        },
      ],
    },
    {
      company: "Computer Science University of Lampung",
      projectTitle:
        "Prediction public interest in the mayor bandarlampung using sentiment analysis",
      position: "Data Analyst",
      duration: "September 2024 - Oktober 2024",
      techUsed: [
        {
          icon: <FaFileExcel />,
          name: "Excel",
        },
      ],
    },
    {
      company: "Computer Science University of Lampung",
      projectTitle: "Resume",
      position: "Frontend Web",
      duration: "Oktober 2024 - November 2024",
      techUsed: [
        {
          icon: <SiReact />,
          name: "React",
        },
        {
          icon: <FaNpm />,
          name: "NPM",
        },
        {
          icon: <FaNodeJs />,
          name: "NodeJS",
        },
        {
          icon: <SiTailwindcss />,
          name: "Tailwindcss",
        },
        {
          icon: <SiShadcnui />,
          name: "Shadcnui",
        },
        {
          icon: <SiGit />,
          name: "Git",
        },
      ],
    },
  ],
};

// education data
const education = {
  title: "My Education",
  desc: "Studying Computer Science at the University of Lampung, enhanced skills through data analysis, programming courses, and multiple scholarship programs.",
  items: [
    {
      Institution: "University of Lampung",
      position: "Bachelor Program",
      duration: "September 2020 - Now",
    },
    {
      Institution: "Online Course Data Visualisation",
      position: "Data Analysis",
      duration: "November 2024 - Now",
    },
    {
      Institution: "Digital Talent Scholarship",
      position: "Data Science Scholarship Program",
      duration: "August 2024 - September 2024",
    },
    {
      Institution: "RevoU Data Analyst Scholarship",
      position: "Data Analyst Scholarship Program",
      duration: "January 2023",
    },
    {
      Institution: "Udacoding Web Developer Scholarship",
      position: "Basic Web Programming",
      duration: " January 2021 - April 2021",
    },
  ],
};

// skill data
const skills = {
  title: "My Skills",
  desc: "Here of my skills depend on every project",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "HTJava Script",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaReact />,
      name: "ReactJS",
    },
    {
      icon: <SiTailwindcss />,
      name: "ReactJS",
    },
    {
      icon: <SiBootstrap />,
      name: "ReactJS",
    },
    {
      icon: <SiNextdotjs />,
      name: "ReactJS",
    },
    {
      icon: <SiLaravel />,
      name: "ReactJS",
    },
    {
      icon: <SiMysql />,
      name: "ReactJS",
    },
    {
      icon: <SiNodedotjs />,
      name: "ReactJS",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-14"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Expericence</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-7 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.desc}
                </p>
                <ScrollArea className="h-[400px] style">
                  <ul className="grid grid-cold-1 lg:grid-cols-2 gap-8">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329]">
                          <h2 className="text-2xl font-bold">
                            {item.projectTitle}
                          </h2>
                          <span>{item.duration}</span>
                          <h3>{item.position}</h3>
                          <div>
                            {/* dot */}
                            <span></span>
                            <p>{item.company}</p>
                          </div>
                          <div>
                            <ul className="flex items-center justify-center gap-2 mt-2 xl:mt-0 text-5xl">
                              {item.techUsed &&
                                item.techUsed.map((tech, techIndex) => {
                                  return (
                                    <li key={techIndex} className="flex gap-6">
                                      <span>{tech.icon}</span>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
