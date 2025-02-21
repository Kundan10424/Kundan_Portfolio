import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { socialLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);

  const socialDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link to="/" className="flex items-center gap-2" onClick={() => {setActive(""); window.scrollTo({ top: 0, behavior: "smooth" });
  }}
>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Kundan &nbsp;<span className="sm:block hidden">| Kumar</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) =>
            link.id === "social" ? (
              <li key={link.id} className="relative">
                <button
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer flex items-center`}
                  onClick={() => setSocialToggle(!socialToggle)}
                >
                  {link.title}
                </button>

                {socialToggle && (
                  <div
                    ref={socialDropdownRef}
                    className="absolute left-0 mt-2 w-48 bg-primary border border-gray-600 rounded-lg shadow-lg p-2"
                  >
                    {socialLinks.map((social) =>
                      social.id === "resume" ? (
                        <a
                          key={social.id}
                          href="./resume/Resume.pdf"
                          download
                          className="flex items-center gap-3 text-secondary hover:text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition"
                        >
                          <img src={social.icon} alt={social.name} className="w-6 h-6"/>
                          <span>{social.name}</span>
                        </a>
                      ) : (
                        <a
                          key={social.id}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-secondary hover:text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition"
                        >
                          <img src={social.icon} alt={social.name} className="w-6 h-6" />
                          <span>{social.name}</span>
                        </a>
                      )
                    )}
                  </div>
                )}
              </li>
            ) : (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(link.title)}
                >
                  {link.title}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {toggle && (
          <div
            ref={mobileMenuRef}
            className="sm:hidden absolute top-20 right-0 mx-4 my-2 min-w-[140px] bg-primary border border-gray-600 rounded-xl p-4 z-10"
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) =>
                link.id === "social" ? (
                  <li key={link.id}>
                    <button
                      className="text-secondary hover:text-white text-[16px] font-medium cursor-pointer flex items-center"
                      onClick={() => setSocialToggle(!socialToggle)}
                    >
                      {link.title}
                    </button>

                    {socialToggle && (
                      <div className="mt-2 bg-primary border border-gray-600 rounded-lg shadow-lg p-2">
                        {socialLinks.map((social) =>
                          social.id === "resume" ? (
                            <a
                              key={social.id}
                              href="./resume/Resume.pdf"
                              download
                              className="flex items-center gap-3 text-secondary hover:text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition"
                            >
                              Resume
                            </a>
                          ) : (
                            <a
                              key={social.id}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 text-secondary hover:text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition"
                            >
                              <img src={social.icon} alt={social.name} className="w-6 h-6" />
                              <span>{social.name}</span>
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-secondary hover:text-white text-[16px] font-medium cursor-pointer"
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                    >
                      {link.title}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
