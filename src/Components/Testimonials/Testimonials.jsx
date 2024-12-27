import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "..//../assets/edusity_assets/next-icon.png";
import back_icon from "..//../assets/edusity_assets/back-icon.png";
import user_1 from "..//../assets/edusity_assets/user-1.png";
import user_2 from "..//../assets/edusity_assets/user-2.png";
import user_3 from "..//../assets/edusity_assets/user-3.png";
import user_4 from "..//../assets/edusity_assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Beatrice Harrington</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academics
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                The dynamic learning environment, dedicated faculty and endless
                opportunities for personal and professional growth have truly
                prepared me for success in the real world. I am proud to be a
                part of this.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Cecilia Radcliffe</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Their study material has exceeded all my expectations. From the
                engaging classes to the supportive faculty, I couldn't have
                asked for a better academic experience. It's truly been a
                game-changer for me.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Jasper Wellington</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Attending this university is the best decision so far.
                Exceptional professors, boundless opportunities—my journey here
                has been nothing short of transformative. Learned alot about
                life here.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
