import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed top-4 left-4 z-[999] flex flex-col items-center">
      <div className="relative">
        <div
          className={`sm:cursor-pointer z-[999] rounded-lg bg-white/40 p-2`}
          onClick={toggleMenu}
        >
          <HiMenuAlt2 size={34} />
        </div>
        <nav
          className={`${
            showMenu ? "open" : ""
          } absolute top-14 left-0 z-[999] w-40 transform -translate-x-full sm:translate-x-0 bg-slate-200/60 p-6 backdrop-blur-md rounded-lg text-dark_primary transition-transform duration-300`}
        >
          {nav.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => {
                setActive(i);
                setShowMenu(false);
              }}
              className={`text-xl p-2.5 rounded-full block sm:text-center sm:mb-2 ${
                i === active ? "bg-dark_primary text-white" : ""
              } `}
            >
              {createElement(item.icon)}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
