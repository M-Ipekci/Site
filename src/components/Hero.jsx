import React, { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const viewerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight / 2;
      const isScrolled = window.scrollY > threshold;
      setShowContent((prev) => (isScrolled ? true : prev));
    };

    window.addEventListener("scroll", handleScroll);

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.0.16/build/spline-viewer.js";
    script.async = true;
    script.onload = () => {
      const viewer = document.createElement("spline-viewer");
      viewer.setAttribute("url", "https://prod.spline.design/HKlfAoUoTv3w35yQ/scene.splinecode");
      viewerRef.current.appendChild(viewer);
    };
    script.onerror = () => {
      console.error("Error loading Spline viewer script");
    };

    document.body.appendChild(script);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          className={`absolute h-full md:w-4/12 w-8/12 top-0 right-0 bottom-0 z-10 ${
            showContent ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          } bg-primaryLinear`}
        >
          <h2 className="rotate-90 absolute top-[30%] right-[15%]" style={{ fontSize: '3rem' }}>{hero.title}</h2>
        </div>

        <div className={`pb-16 px-6 pt-12 z-10 text-center-mobile ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <br />
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                className={`flex items-center w-80 ${i === 1 && " flex-row-reverse text-right flex-col-reverse-mobile"}`}
                style={{ transitionDelay: `${i * 300}ms` }}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {showContent && (
          <div
            ref={viewerRef}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1000,
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
