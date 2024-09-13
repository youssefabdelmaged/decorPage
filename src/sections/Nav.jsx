import React, { useEffect, useRef, useState } from "react";
import { logo } from "../assets/images";
import { navLinks } from "../constants";
import Button from "../components/Button";
import { hamburger } from "../assets/icons";
import { AnimatePresence, motion } from "framer-motion";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const sidebarRef = useRef(null); // Ref for the sidebar
  const hamburgerRef = useRef(null); // Ref for the hamburger (toggle) button

  useEffect(() => {
    const handleBodyClick = (event) => {
      // Check if the clicked target is inside the sidebar or the hamburger button
      if (sidebarRef.current && sidebarRef.current.contains(event.target)) {
        return;
      } else if (
        hamburgerRef.current &&
        hamburgerRef.current.contains(event.target)
      ) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleBodyClick);

    return () => {
      document.removeEventListener("click", handleBodyClick);
    };
  }, []);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className=" flex justify-between items-center max-container">
        <a href="/">
          <img src={logo} alt="logo" className="" />
        </a>
        <ul className=" flex-1 flex justify-center  items-center gap-16 max-lg:hidden ">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}> {link.label}</a>
            </li>
          ))}
        </ul>
        <Button className="max-lg:hidden text-white " value={"Sign Up"} />

        <div ref={hamburgerRef}>
          <img
            src={hamburger}
            width={25}
            height={30}
            alt="toggle icon"
            className="hidden max-lg:inline-block cursor-pointer"
          />
        </div>
        {toggle && (
          <AnimatePresence>
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="bg-primary h-screen  
            w-[30%] flex flex-col fixed right-0 top-0 bottom-0
            items-center justify-start 
            lg:hidden
            
            "
              ref={sidebarRef}
            >
              <ul className=" flex justify-center  items-center flex-col gap-16 py-8  ">
                {navLinks.map((link) => (
                  <li>
                    <a href={link.href} className="text-white">
                      {" "}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Button
                className={
                  "bg-white text-primary font-bold cursor-pointer   max-sm:py-0 max-sm:px-5  text-center "
                }
                value={"Sign Up"}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </nav>
    </header>
  );
};

export default Nav;
