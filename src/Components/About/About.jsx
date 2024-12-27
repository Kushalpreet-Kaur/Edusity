import React from "react";
import "./About.css";
import about_img from "../../assets/edusity_assets/about.png";
import play_icon from "../../assets/edusity_assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Nestled in the heart of London, our university is a vibrant hub of
          academic excellence and diversity. With sprawling green campuses
          adorned by majestic trees and modern architectural marvels, the
          environment fosters a sense of tranquility and inspiration.
        </p>
        <p>
          Fuelled by innovation and dedication, our university boasts numerous
          achievements across various disciplines. From groundbreaking research
          projects to stellar performances in national and international
          competitions, our students and faculty continuously push the
          boundaries of knowledge and excellence.
        </p>
        <p>
          Beyond academics, the campus buzzes with a myriad of extracurricular
          activities, clubs, and organizations, providing ample opportunities
          for students to explore their passions and develop new skills. From
          cultural festivals to sports events, there's always something exciting
          happening on campus, fostering a sense of community and belonging. In
          essence, our university is not just a place of learning but a vibrant
          ecosystem where individuals thrive, dreams flourish, and futures are
          shaped.
        </p>
      </div>
    </div>
  );
};

export default About;
