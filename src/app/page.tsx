"use client";

import Image from "next/image";
import profile from "../../public/assets/pic3.png";
import linkedin from "../../public/assets/linkedin.png";
import github from "../../public/assets/github.png";
import Link from "next/link";
import { motion } from "framer-motion";

function cv() {
  window.open("./assets/AbhishekRajput_Resume.pdf");
}

export default function Home() {
  return (
    <section id="profile">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="section__pic-container"
      >
        <Image src={profile} alt="Abhishek  Rajput profile picture" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="section__text"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="section__text__p1"
        >
          Hello I Am
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="title"
        >
          Abhishek Rajput
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="section__text__p2"
        >
          Full Stack Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="btn-container"
        >
          <button className="btn  btn-color-2" onClick={cv}>
            Download CV
          </button>
          <Link href={"/contact"} style={{ textDecoration: "none" }}>
            <button className="btn btn-color-2">Contact Info</button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          id="socials-container"
        >
          <Link
            href={"https://www.linkedin.com/in/abhishek-rajput-175b01222/"}
            target="_blank"
          >
            <Image src={linkedin} alt="My LinkedIn profile" className="icon" />
          </Link>
          <Link href={"https://github.com/abhisraj97"} target="_blank">
            <Image src={github} alt="My Github profile" className="icon" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
