import React from 'react'
import Image from 'next/image'
import email from '../../../public/assets/email.png'
import Linkedin from '../../../public/assets/linkedin.png'
import Link from 'next/link'

function contact() {
  return (
    <section id="contact">
    <p className="section__text__p1">Get in Touch</p>
    <h1 className="title">Contact Me</h1>
    <div className="contact-info-upper-container">
      <div className="contact-info-container">
        <Image
          src={email}
          alt="Email icon"
          className="icon contact-icon email-icon"
        />
        <p><a href="mailto:abhiraj21put@gmail.com">abhiraj21put@gmail.com</a></p>
      </div>
      <div className="contact-info-container">
        <Image
          src={Linkedin}
          alt="LinkedIn icon"
          className="icon contact-icon"
        />
        <p><Link href="https://www.linkedin.com/in/abhishek-rajput-175b01222/"  target='_blank'>LinkedIn</Link></p>
      </div>
    </div>
  </section>
  )
}

export default contact