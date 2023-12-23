import React, { useRef, useState } from "react";
import BLOGS from "../Constants/Blogs";
import { GrNext } from "react-icons/gr";
import "./styles/blogs.css";

const BlogCard = ({ title, link, desc }) => {
  return (
    <div className="blogs">
      <div>{title}</div>
      <div>{desc}</div>
    </div>
  );
};

// working fine... learn from it
const Images = () => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const unsplashed = "https://source.unsplash.com/200x200/";

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <>
      <div class="button-contianer">
        <button
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, -10);
          }}
          disabled={arrowDisable}
        >
          Left
        </button>
        <button
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, 10);
          }}
        >
          Right
        </button>
      </div>
      <div class="img-container" ref={elementRef}>
        {/* {Photos.map((placement, i) => (
          <img
            key={i}
            loading="lazy"
            alt={placement}
            src={unsplashed + `?${placement}`}
          />
        ))} */}
      </div>
    </>
  );
};

const Blogs = () => {
  return (
    <div className="column">
      <div
        style={{
          justifyContent: "space-between",
          padding: "2px 10px",
          color: "white",
        }}
      >
        <div>Blogs</div>
        <div style={{ textDecoration: "underline" }}>View all</div>
      </div>
      <div
        style={{
          height: 250,
          overflowX: "scroll",
          position: "relative",
        }}
      >
        {BLOGS.map((doc) => (
          <BlogCard {...doc} />
        ))}
        <div
          style={{
            color: "white",
            padding: 10,
            margin: 10,
            backgroundColor: "aliceblue",
            alignItems: "center",
            justifyContent: "center",
            position: "sticky",
            right: 20,
            top: 95,
            borderRadius: 35,
            cursor: "pointer",
          }}
          onClick={() => {
            console.log("clicke");
          }}
        >
          <GrNext />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
