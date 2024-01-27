'use client'

import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo2.jpg";
import Link from "next/link";

  function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu?.classList.toggle("open");
  icon?.classList.toggle("open");
}


function Header() {
  return (
    <>
    <nav id="desktop-nav">
        <div className="logo">
            <Link href={'/'}>
          <Image src={logo} alt="Abhishek Rajput Logo" />
            </Link>
        </div>
        <div>
          <ul className="nav-links">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/Certificates">Certificates</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
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
          <li><Link href="/experience" >Experience</Link></li>
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
