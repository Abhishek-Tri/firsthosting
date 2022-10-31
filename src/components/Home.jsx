import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillApple,
  AiFillFacebook,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>AbhiShek Tiwari</h1>
          <p>Everyday Should Be Progressive :)</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            This is the first wesite deployed by me 
            on internet so kindly see this and give your 
            valuable feedback
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            we are unitians we are unitians we are unitians we are unitians
            we are unitians we are unitians we are unitians we are unitians
            we are unitians we are unitians we are unitians we are unitians
            we are unitians we are unitians we are unitians we are unitians
            we are unitians we are unitians we are unitians we are unitians 
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Faag</h1>

          <article>
            <div
              style={{
                animationDelay: "0.2s",
              }}
            >
              <AiFillGoogleCircle />
              <a href="https://careers.google.com/"><p>Google</p></a>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <a href="https://www.amazon.jobs/en/"><p>Amazon</p></a>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillApple />
              <a href="https://www.apple.com/careers/in/"><p>Apple</p></a>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillFacebook />
              <a href="https://research.facebook.com/careers/"><p>Facebook</p></a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
