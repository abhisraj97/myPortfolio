import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Certificateitem({children,certificateName,link}) {
  return (
    <>
    <div className="details-container color-container">
    <div className="article-container">
      {children}
    </div>
    <h2 className="experience-sub-title project-title">{certificateName}</h2>
    <div className="btn-container">
    <Link href={link}  target='_blank' style={{textDecoration:"none"}}>
    <button
        className="btn btn-color-2 project-btn"
      >
    Credential
      </button>
    </Link>
    </div>
  </div>
    </>
  )
}

export default Certificateitem