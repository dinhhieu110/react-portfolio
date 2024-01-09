// import React from "react";
import { useState } from "react";
import "./works.scss";
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handlesubmit = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1)
      : setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  };
  const data = [
    {
      id: 1,
      icon: "./assets/writing.png",
      title: "Branding",
      description:
        "The quality of products is the core and the satisfaction from customers is the value.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: 2,
      icon: "./assets/globe.png",
      title: "Mobile Application",
      description:
        "The quality of products is the core and the satisfaction from customers is the value.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: 3,
      icon: "./assets/youtube.png",
      title: "Branding",
      description:
        "The quality of products is the core and the satisfaction from customers is the value.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
  ];

  return (
    <div className="works" id="works">
      <div className="slider" style={{ left: `${currentSlide * -100}vw` }}>
        {data.map((d, index) => {
          return (
            <div key={index} className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="phone.png" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.description}</p>
                    <span>Projects</span>
                  </div>
                </div>
                <div className="right">
                  <img
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => {
          handlesubmit("right");
        }}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => {
          handlesubmit("right");
        }}
      />
    </div>
  );
}
