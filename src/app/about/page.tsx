import Image from "next/image";
import React from "react";
import pic from "../../../public/assets/pic2.png";
import education from "../../../public/assets/education.png";

function about() {
  return (
    <>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <Image src={pic} alt="Profile picture" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <Image src={education} alt="Experience icon" className="icon" />
                <h3>Education</h3>
                <p>
                  B.Sc. <br />
                  Bachelors Degree
                  <br />
                  Govt. College Timarni,Harda,M.P
                </p>
              </div>
              <div className="details-container">
                <Image src={education} alt="Education icon" className="icon" />
                <h3>Education</h3>
                <p>
                  M.C.A <br /> Masters Degree
                  <br />
                  National Institute of Technology Patna,Bihar
                </p>
              </div>
            </div>
            <div className="text-container">
              <strong>Achivements</strong>
              <ul>
                <li>1.AIR-680 In Nimcet 2021.</li>
                <li>2.Solved 450+ questions on Leetcode.</li>
                <li>3.Achieved 5 Star in Problem Solving at HackerRank.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;
