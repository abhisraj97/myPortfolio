import Image from 'next/image'
import React from 'react'
import checkmark from '../../../public/assets/checkmark.png'
import Skill from '../../components/Skill'


function experience() {
  return (
    <section id="experience">
    <p className="section__text__p1">Explore My</p>
    <h1 className="title">Skills</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container">
          <h2 className="experience-sub-title">Frontend Development</h2>
          <div className="article-container">
              <Skill skill='HTML' experience='Experienced'></Skill>
              <Skill skill='CSS' experience='Experienced'></Skill>
              <Skill skill='React Js' experience='Intermediate'></Skill>
              <Skill skill='Javascript' experience='Intermediate'></Skill>
              <Skill skill='Typescript' experience='Basic'></Skill>
              <Skill skill='Next Js' experience='Intermediate'></Skill>
          </div>
        </div>
        <div className="details-container">
          <h2 className="experience-sub-title">Backend Development</h2>
          <div className="article-container">
              <Skill skill='SQL' experience='Intermediate'></Skill>
              <Skill skill='Node Js' experience='Intermediate'></Skill>
              <Skill skill='Express Js' experience='Intermediate'></Skill>
              <Skill skill='Git' experience='Intermediate'></Skill>
              <Skill skill='Docker' experience='Intermediate'></Skill>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default experience