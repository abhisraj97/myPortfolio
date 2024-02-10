"use client";
import React from "react";
import Image from "next/image";
import checkmark from "../../public/assets/checkmark.png";
import { motion } from "framer-motion";

function Skill({ skill, experience }) {
  return (
    <article>
      <Image src={checkmark} alt="Experience icon" className="icon" />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h3>{skill}</h3>
        <p>{experience}</p>
      </motion.div>
    </article>
  );
}

export default Skill;
