"use client";

import Image from "next/image";
import React from "react";
import pic from "../../../public/assets/pic2.png";
import education from "../../../public/assets/education.png";
import { motion } from "framer-motion";



function about() {
  return (
    <section id="about">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="section__text__p1"
      >
        Get To Know More
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="title"
      >
        About Me
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="section-container"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="section__pic-container"
        >
          <Image src={pic} alt="Profile picture" className="about-pic" />
        </motion.div>
        <div className="about-details-container">
          <div className="about-containers">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="details-container"
            >
              <Image src={education} alt="Experience icon" className="icon" />
              <motion.h3
                initial={{ opacity: 0, y: 0, x: -100 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 3 }}
              >
                Education
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 0, x: -100 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 3 }}
              >
                B.Sc. <br />
                Bachelors Degree
                <br />
                Govt. College Timarni,Harda,M.P
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="details-container"
            >
              <Image src={education} alt="Education icon" className="icon" />
              <motion.h3
                initial={{ opacity: 0, y: 0, x: -100 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 3 }}
              >
                Education
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 0, x: -100 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 3 }}
              >
                M.C.A <br /> Masters Degree
                <br />
                National Institute of Technology Patna,Bihar
              </motion.p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
            className="text-container"
          >
            <strong>Achivements</strong>
            <motion.ul>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
              >
                1.AIR-680 In Nimcet 2021.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
              >
                2.Solved 500+ questions on Leetcode.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
              >
                3.Achieved 5 Star in Problem Solving at HackerRank.
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default about;
