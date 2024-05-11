import React, { useEffect, useRef, useState } from "react";
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
  const ref = useRef(null);
  const parentRef = useRef(null);
  useEffect(() => {
    console.log("width", ref.current ? ref.current.offsetWidth : 0);
    console.log("width", parentRef.current ? parentRef.current.width : 0);
    console.log("width", parentRef.current ? parentRef.current.offsetWidth : 0);
  }, [ref.current]);

  return (
    <div className="column">
      <div
        ref={parentRef}
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
          scrollBehavior: "smooth",
        }}
      >
        <div ref={ref}>
          {BLOGS.map((doc) => (
            <BlogCard {...doc} />
          ))}
        </div>

        <div
          className="nextButton"
          onClick={() => {
            ref.scrollTop += 10;
          }}
        >
          <GrNext />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
