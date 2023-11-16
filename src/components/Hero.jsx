import { useEffect } from "react";
import { content } from "../Content";
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="z-10">
        {/* Your text content */}
        <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
          <div
            data-aos="slide-left"
            data-aos-delay="1200"
            className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
          >
          </div>

          <div className="pb-16 px-6 pt-5" data-aos="fade-down">
            <h2>{hero.title}</h2>
            <br />
            <div className="flex flex-col gap-10 mt-10">
              {hero.hero_content.map((content, i) => (
                <div
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 300}
                  className={`flex items-center w-80 gap-5
                  ${i === 1 && " flex-row-reverse text-right"}  `}
                >
                  <h3>{content.count}</h3>
                  <p>{content.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="z-0">
        {/* Your spline project */}
        <Spline scene="https://prod.spline.design/HKlfAoUoTv3w35yQ/scene.splinecode" />
      </div>
    </section>
  );
};

export default Hero;
