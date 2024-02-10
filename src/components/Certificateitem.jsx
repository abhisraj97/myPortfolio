"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
// import { Interface } from 'readline'
import { motion } from "framer-motion";

// interface item{
//   certificateName : string,
//   link : String,
// }

function Certificateitem({ children, certificateName, link }) {
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
          {certificateName}
        </motion.h2>
        <div className="btn-container">
          <Link href={link} target="_blank" style={{ textDecoration: "none" }}>
            <motion.button
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="btn btn-color-2 project-btn"
            >
              Credential
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Certificateitem;
