'use client'

import Image from "next/image";
import profile from '../../public/assets/pic3.png'
import linkedin from  '../../public/assets/linkedin.png'
import github from  '../../public/assets/github.png'
import { redirect } from "next/navigation";
import Link from "next/link";


function cv(){
  window.open('./assets/AbhishekRajput_Resume.pdf')
}

export default function Home() {
  return (
    <section id="profile">
    <div className="section__pic-container">
      <Image src={profile} alt="Abhishek  Rajput profile picture" />
    </div>
    <div className="section__text">
      <p className="section__text__p1">Hello I Am</p>
      <h1 className="title">Abhishek Rajput</h1>
      <p className="section__text__p2">Full Stack Developer</p>
      <div className="btn-container">
        <button
          className="btn  btn-color-2"
          onClick={cv}
        >
          Download CV
        </button>
        <Link href={'/contact'} style={{textDecoration:"none"}}>
        <button className="btn btn-color-2" 
        >
          Contact Info
        </button>
          </Link> 
       
      </div>
      <div id="socials-container">
        <Link href={"https://www.linkedin.com/in/abhishek-rajput-175b01222/"} target="_blank">
        <Image
          src={linkedin}
          alt="My LinkedIn profile"
          className="icon"

        />
          </Link>
          <Link href={"https://github.com/abhisraj97"} target="_blank">
          <Image
          src={github}
          alt="My Github profile"
          className="icon"
        />
          </Link>
        
      </div>
    </div>
  </section>
  );
}
