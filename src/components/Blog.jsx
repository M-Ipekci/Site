import React from "react";
import { content } from "../Content";

const Blog = () => {
  const { blog } = content;

  return (
    <section id="home" className="relative overflow-hidden">
      <style>
        {`
          @media only screen and (max-width: 767px) {
            .flex-col-reverse-mobile {
              flex-direction: column-reverse !important;
            }

            .text-center-mobile {
              text-align: center !important;
            }
          `}
      </style>
      <div>
        <h1>
          Hello, this is blog!
        </h1>
      </div>
    </section>
  );
};

export default Blog;
