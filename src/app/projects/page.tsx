"use client"

import Image from "next/image";
import React from "react";
import currency from "../../../public/assets/currencey.png";
import weather from "../../../public/assets/weatherApp.png";
import todo from "../../../public/assets/todo.png";
import Projectitem from "../../components/Projectitem";
import {motion} from "framer-motion"


function projects() {
  return (
    <section id="projects">
      <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
        className="section__text__p1">Browse My Recent</motion.p>
      <motion.h1 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.5, duration: 1 }}
       className="title">Projects</motion.h1>
      <div className="experience-details-container">
        <motion.div  
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
        className="about-containers">
          <Projectitem
            projectName="Currencry Converter"
            gitLink="https://github.com/abhisraj97/currency_converter"
            demoLink="https://currencyconverterab.netlify.app/"
          >
            <Image src={currency} alt="Project 1" className="project-img" />
          </Projectitem>
          <Projectitem
            projectName="Weather App"
            gitLink="https://github.com/abhisraj97/react-weather-app"
            demoLink="https://app-react-weatherapp.netlify.app/"
          >
            <Image src={weather} alt="Project 2" className="project-img" />
          </Projectitem>
          <Projectitem
            projectName="Todo"
            gitLink="https://github.com/abhisraj97/todoApp"
            demoLink="https://todofirstapp.netlify.app/"
          >
            <Image src={todo} alt="Project 3" className="project-img" />
          </Projectitem>
        </motion.div>
      </div>
    </section>
  );
}

export default projects;
