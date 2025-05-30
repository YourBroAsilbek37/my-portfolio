import React from 'react';
import { motion } from 'framer-motion';
import { chakra, css, db, express, firebase, html, js, mui, native, nest, next, node, react, sass, tail } from '../../assets';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref}  className="w-full flex items-center flex-col lgl:flex-row gap-10 lgl:gap-20">
      <motion.div initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5 }}
        animate={{ opacity: inView ? 1 : 0, transition: { duration: 0.5 } }}
        className="w-full lgl:w-1/2"
      >
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl h-[70px] font-bold">UI Skills</h2>
        </div>
        <div className=" w-full flex flex-col gap-6">
          {[
            { name: 'CSS', src: css, width: '3.7%', progress: 96 },
            { name: 'ChakraUI', src: chakra, width: '5%', progress: 80 },
            { name: 'TailwindCSS', src: tail, width: '5%', progress: 100 },
            { name: 'MaterialUI', src: mui, width: '5%', progress: 86 },
            { name: 'SCSS', src: sass, width: '5%', progress: 100 },
          ].map((skill, index) => (
            <div key={index} className="overflow-x-hidden h-[55px]">
              <p className="text-sm uppercase flex items-center gap-[5px] font-medium">
                <img width={skill.width} src={skill.src} alt={skill.name} />
                {skill.name}
              </p>
              <span className="w-full h-2 bg-gray-200 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: inView ? 0 : '-100%', opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  style={{ width: `${skill.progress}%` }}
                >
                  <span className="absolute -top-7 right-0">{skill.progress}%</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0, transition: { duration: 0.5 } }}
        className="w-full lgl:w-1/2"
      >
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl h-[70px] font-bold"> Frontend Development Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          {[
            { name: 'HTML 5', src: html, width: '5%', progress: 99 },
            { name: 'JavaScript', src: js, width: '5%', progress: 75 },
            { name: 'ReactJS', src: react, width: '5%', progress: 80 },
            { name: 'NextJS', src: next, width: '5%', progress: 95 },
            { name: 'React Native', src: native, width: '4.5%', progress: 60 },
          ].map((skill, index) => (
            <div key={index} className="overflow-x-hidden h-[55px]">
              <p className="text-sm uppercase flex items-center gap-[5px] font-medium">
                <img width={skill.width} src={skill.src} alt={skill.name} />
                {skill.name}
              </p>
              <span className="w-full h-2 bg-gray-200 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: inView ? 0 : '-100%', opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  style={{ width: `${skill.progress}%` }}
                >
                  <span className="absolute -top-7 right-0">{skill.progress}%</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </motion.div>



       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0, transition: { duration: 0.5 } }}
        className="w-full lgl:w-1/2"
      >
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl h-[70px] font-bold">Backend Development Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          {[
            { name: 'Node Js', src: node, width: '5%', progress: 50 },
            { name: 'Express Js', src: express, width: '5%', progress: 40 },
            { name: 'Mongo DB', src: db, width: '5%', progress: 45 },
            { name: 'Nest Js', src: nest, width: '5%', progress: 30 },
            { name: 'Firebase', src: firebase, width: '4.5%', progress: 50 },
          ].map((skill, index) => (
            <div key={index} className="overflow-x-hidden h-[55px]">
              <p className="text-sm uppercase flex items-center gap-[5px] font-medium">
                <img width={skill.width} src={skill.src} alt={skill.name} />
                {skill.name}
              </p>
              <span className="w-full h-2 bg-gray-200 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: inView ? 0 : '-100%', opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  style={{ width: `${skill.progress}%` }}
                >
                  <span className="absolute -top-7 right-0">{skill.progress}%</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
