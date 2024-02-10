"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const navbarVariants = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 }, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

function Footer() {
  return (
    <footer>
      <motion.nav initial="hidden" animate="visible" variants={navbarVariants}>
        <div className="nav-links-container">
          <motion.ul variants={navbarVariants} className="nav-links">
            <motion.li variants={itemVariants}>
              <Link href="/about">About</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/experience">Skills</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/projects">Projects</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/Certificates">Certificates</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/contact">Contact</Link>
            </motion.li>
          </motion.ul>
        </div>
      </motion.nav>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        Copyright &#169; 2023 Abhishek Rajput. All Rights Reserved.
      </motion.p>
    </footer>
  );
}

export default Footer;
