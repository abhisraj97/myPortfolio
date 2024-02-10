"use client";

import Image from "next/image";
import Certificateitem from "../../components/Certificateitem";
import sql from "../../../public/assets/50daysofsql.png";
import typescript from "../../../public/assets/typescript.png";
import hacker from "../../../public/assets/hackerrank.png";
import { motion } from "framer-motion";

function Certificates() {
  return (
    <section id="Certificates">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="section__text__p1"
      >
        Browse My Recent
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="title"
      >
        Certificates
      </motion.h1>
      <div className="experience-details-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="about-containers"
        >
          <Certificateitem
            certificateName="50 Days of SQL"
            link="https://codedamn.com/certificate/verify/afcb6cd3121f3725a32c89985aa08d1ba2b910eb"
          >
            <Image src={sql} alt="Project 1" className="project-img" />
          </Certificateitem>
          <Certificateitem
            certificateName="Mastering TypeScript"
            link="https://www.udemy.com/certificate/UC-6cfd23c2-7b0c-4d1c-9907-166e74502a97/"
          >
            <Image src={typescript} alt="Project 2" className="project-img" />
          </Certificateitem>
          <Certificateitem
            certificateName="HackerRank Problem Solving (Intermediate)"
            link="https://www.hackerrank.com/certificates/1f144a7aa32c"
          >
            <Image src={hacker} alt="Project 3" className="project-img" />
          </Certificateitem>
        </motion.div>
      </div>
    </section>
  );
}

export default Certificates;
