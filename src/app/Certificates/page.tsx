import Image from "next/image";
import Certificateitem from "../../components/Certificateitem";
import sql from "../../../public/assets/50daysofsql.png";
import typescript from "../../../public/assets/typescript.png";
import hacker from "../../../public/assets/hackerrank.png";

function Certificates() {
  return (
    <section id="Certificates">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Certificates</h1>
      <div className="experience-details-container">
        <div className="about-containers">
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
        </div>
      </div>
    </section>
  );
}

export default Certificates;
