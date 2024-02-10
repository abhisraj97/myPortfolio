"use client";

import React from "react";
import Image from "next/image";
import email from "../../../public/assets/email.png";
import Linkedin from "../../../public/assets/linkedin.png";
import Link from "next/link";
import { motion } from "framer-motion";

function contact() {
  return (
    <section id="contact">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="section__text__p1"
      >
        Get in Touch
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="title"
      >
        Contact Me
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="contact-info-upper-container"
      >
        <div className="contact-info-container">
          <Image
            src={email}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:abhiraj21put@gmail.com">abhiraj21put@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <Image
            src={Linkedin}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <Link
              href="https://www.linkedin.com/in/abhishek-rajput-175b01222/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default contact;
