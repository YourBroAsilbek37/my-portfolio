import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Learning Journey Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            My Learning Journey
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="HTML & CSS"
            subTitle="Fundamentals of Web Development"
            result="Mastered"
            des="Learned the foundations of web structure and styling, including responsive design principles."
          />
          <ResumeCard
            title="JavaScript & React.js"
            subTitle="Building Interactive User Interfaces"
            result="Advanced"
            des="Gained proficiency in JavaScript ES6+, React.js, component-based architecture, and state management."
          />
          <ResumeCard
            title="UI Frameworks & Styling"
            subTitle="Chakra UI, Tailwind CSS, Material UI"
            result="Proficient"
            des="Explored modern UI frameworks to enhance user experience and streamline development."
          />
          <ResumeCard
            title="Backend Development"
            subTitle="Node.js, Express.js, Databases"
            result="Proficient"
            des="Developed RESTful APIs, worked with databases like MongoDB & MySQL, and handled authentication."
          />
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            My Learning Journey
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full-Stack Development"
            subTitle="Building Scalable Web Apps"
            result="Advanced"
            des="Developed full-stack applications using React.js, Next.js, and backend technologies."
          />
          <ResumeCard
            title="Mobile Development"
            subTitle="React Native & Cross-Platform Apps"
            result="Intermediate"
            des="Built mobile applications with React Native, focusing on UI/UX and API integration."
          />
          <ResumeCard
            title="Cybersecurity & Best Practices"
            subTitle="Securing Web Applications"
            result="Intermediate"
            des="Learned about web security, authentication, and best coding practices to prevent vulnerabilities."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;