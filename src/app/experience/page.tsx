"use client";

import Image from "next/image";
import React from "react";
import checkmark from "../../../public/assets/checkmark.png";
import Skill from "../../components/Skill";
import { motion } from "framer-motion";

function experience() {
  return (
    <section id="experience">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="section__text__p1"
      >
        Explore My
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="title"
      >
        Skills
      </motion.h1>
      <div className="experience-details-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="about-containers"
        >
          <div className="details-container">
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="experience-sub-title"
            >
              Frontend Development
            </motion.h1>
            <div className="article-container">
              <Skill skill="HTML" experience="Experienced"></Skill>
              <Skill skill="CSS" experience="Experienced"></Skill>
              <Skill skill="React Js" experience="Intermediate"></Skill>
              <Skill skill="Javascript" experience="Intermediate"></Skill>
              <Skill skill="Typescript" experience="Basic"></Skill>
              <Skill skill="Next Js" experience="Intermediate"></Skill>
            </div>
          </div>
          <div className="details-container">
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="experience-sub-title"
            >
              Backend Development
            </motion.h1>
            <div className="article-container">
              <Skill skill="SQL" experience="Intermediate"></Skill>
              <Skill skill="Node Js" experience="Intermediate"></Skill>
              <Skill skill="Express Js" experience="Intermediate"></Skill>
              <Skill skill="Git" experience="Intermediate"></Skill>
              <Skill skill="Docker" experience="Intermediate"></Skill>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default experience;
