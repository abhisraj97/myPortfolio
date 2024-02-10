"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Projectitem({ children, projectName, gitLink, demoLink }) {
  return (
    <>
      <div className="details-container color-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="article-container"
        >
          {children}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 0, x: -100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 2 }}
          className="experience-sub-title project-title"
        >
          {projectName}
        </motion.h2>
        <div className="btn-container">
          <Link
            href={gitLink}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <motion.button
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="btn btn-color-2 project-btn"
            >
              Github
            </motion.button>
          </Link>
          <Link
            href={demoLink}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <motion.button
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="btn btn-color-2 project-btn"
            >
              Live Demo
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projectitem;
