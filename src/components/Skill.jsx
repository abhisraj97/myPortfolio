import React from 'react'
import Image from 'next/image'
import checkmark from '../../public/assets/checkmark.png'

function Skill({skill,experience}) {
  return (
    <article>
    <Image
      src={checkmark}
      alt="Experience icon"
      className="icon"
    />
    <div>
      <h3>{skill}</h3>
      <p>{experience}</p>
    </div>
  </article>
  )
}

export default Skill