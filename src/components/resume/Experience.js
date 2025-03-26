import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div  initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Fullstack Developer"
            subTitle="MOdevco team - (2024 - Present)"
            result="Uzbekistan"
            des="Combining frontend and backend skills to build complete applications with modern frameworks."
          />
          <ResumeCard
            title="Mobile Developer"
            subTitle="MOdevco Team - (2023 - 2024)"
            result="Uzbekistan"
            des="Developed mobile applications using React Native, integrating APIs and authentication."
          />
          <ResumeCard
            title="Backend Developer"
            subTitle="MOdevco Team - (2023 - 2024)"
            result="Uzbekistan"
            des="Built and maintained backend systems using Node.js, Express.js, databases: MongoDB, and RESTful APIs."
          />
          <ResumeCard
            title="Frontend Developer"
            subTitle="MOdevco Team - (2022 - 2023)"
            result="Uzbekistan"
            des="Worked with HTML, CSS, JavaScript, and React.js, Next.js, ChackraUi, MaterialUi, Tailwind Css to create user-friendly interfaces."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Ongoing</p>
          <h2 className="text-3xl md:text-4xl font-bold">Learning & Growth</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Cybersecurity Enthusiast"
            subTitle="Self-Learning (2024 - Present)"
            result="Ongoing"
            des="Exploring security best practices, ethical hacking, and data protection to secure applications."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
