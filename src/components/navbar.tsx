"use client";
import { useState } from "react";
import NavLinks from "@/constants/NavLink";
import Logo from "../assets/logo.jpg";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex justify-between items-center sticky top-0 bg-white shadow-sm h-20 px-7 z-50 "
    >
      <div className="flex items-center ">
        <Image src={Logo} alt="Company Logo" width={50} height={50} />
        <span className=" text-2xl  font-bold ml-3 text-[#d47f22] hidden md:inline-block  ">
          Durgapur Hope Foundation
        </span>
      </div>
      <div className="hidden md:flex justify-center items-center gap-8  ">
        {NavLinks.map((link, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={link.name}
          >
            <Link spy={true} smooth={true} duration={500} to={link.to || ""}>
              <div className="flex justify-center items-center px-4 py-2 gap-3 bg-[#f09a29] rounded-md border-solid border-2 border-transparent hover:border-orange-300 transition-all text-white cursor-pointer hover:bg-transparent hover:text-orange-300">
                {link.icon}
                <span>{link.name}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div onClick={handleNav} className="md:hidden cursor-pointer  text-2xl  ">
        <Menu className=" hover:text-[#E57226] scale-x-150 scale-y-125 cursor-pointer " />
      </div>
      <div
        className={
          menuOpen
            ? "fixed  left-0 top-0 w-[75%] lg:hidden p-4 ease-in-out duration-500 bg-gray-50 z-[1200] h-full "
            : "fixed  left-[-100%] top-0 w-[75%] lg:hidden p-4 ease-in-out duration-500 bg-gray-50 z-[1200] h-full"
        }
      >
        <div className="flex w-full items-center justify-end ">
          <div
            onClick={handleNav}
            className="cursor-pointer pb-5 hover:text-[#E57226] flex justify-between items-center w-full "
          >
            <Image src={Logo} alt="Company Logo" width={50} height={50} />

            <X size={40} />
          </div>
        </div>
        <div className="flex-row mt-12">
          {NavLinks.map((link, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={link.name}
              className="mb-4  "
            >
              <Link spy={true} smooth={true} duration={500} to={link.to || ""}>
                <div className="flex justify-start items-center mt-6 px-4 py-2 gap-5 bg-[#f09a29] rounded-md border-solid border-2 border-transparent hover:border-orange-300 transition-all text-white cursor-pointer hover:bg-transparent hover:text-orange-300">
                  {link.icon}
                  <span className="text-lg">{link.name}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
