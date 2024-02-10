'use client'

import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo2.jpg";
import Link from "next/link";
import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"





  function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu?.classList.toggle("open");
  icon?.classList.toggle("open");
}
const navbarVariants = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } ,y:0},
};

const itemVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

function Header() {
  const { setTheme } = useTheme()


  return (
    <>
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
       id="desktop-nav">
        <div className="logo">
            <Link href={'/'}>
          <Image src={logo} alt="Abhishek Rajput Logo" />
            </Link>
        </div>
        <div>
          <motion.ul  variants={navbarVariants} className="nav-links">
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
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

          </motion.ul>
        </div>
      </motion.nav>
      <nav id="hamburger-nav">
      <div className="logo">
      <Link href={'/'}>
          <Image src={logo} alt="Abhishek Rajput Logo" />
            </Link>
      </div>
      <div className="hamburger-menu">
        <button 
        onClick={toggleMenu}
        >
        <div className="hamburger-icon" >
          <span></span>
          <span></span>
          <span></span>
        </div>
          </button>
        <div className="menu-links z-10">
          <li><Link href="/about" >About</Link></li>
          <li><Link href="/experience" >Skills</Link></li>
          <li><Link href="/projects" >Projects</Link></li>
          <li><Link href="/Certificates" >Cretificates</Link></li>
          <li><Link href="/contact" >Contact</Link></li>
        </div>
      </div>
      </nav>
    </>
      
  );
}

export default Header;
