import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  const handleMenuClick = (index) => {
    setActive(index);
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed top-4 left-4 z-[999]">
      <div className="relative">
        <div className="flex items-center">
          <div
            className={`sm:cursor-pointer z-[999] rounded-lg p-2 bg-white/50 transition-all ${
              showMenu ? "w-24 mr-4" : "w-12"
            }`}
            onClick={handleMenuToggle}
            style={{ pointerEvents: showMenu ? "none" : "auto" }}
          >
            <HiMenuAlt2 size={34} />
          </div>
          {showMenu && (
            <div
              className="absolute top-0 right-0 bottom-0 bg-white/50 z-[998] flex flex-col items-center justify-center gap-5 px-6 py-2 rounded-lg text-dark_primary"
              style={{ backdropFilter: "none" }}
            >
              {nav.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the link from navigating
                    handleMenuClick(i);
                  }}
                  className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${
                    i === active && "bg-dark_primary text-white"
                  }`}
                >
                  {createElement(item.icon)}
                </a>
              ))}
            </div>
          )}
        </div>
        {showMenu && (
          <div
            className="fixed inset-0"
            onClick={handleMenuToggle}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
