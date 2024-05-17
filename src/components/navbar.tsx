"use client";
import { useState } from "react";
import NavLinks from "@/constants/NavLink";
import Logo from "../assets/logo.jpg";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
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
      className="flex justify-between items-center sticky  h-24 w-full px-7"
    >
      <div className="flex items-center">
        <Image src={Logo} alt="Company Logo" width={50} height={50} />
        <span className=" text-2xl  font-bold ml-3 text-[#d47f22] hidden md:inline-block  ">
          Durgapur Hope Foundation
        </span>
      </div>
      <div className="hidden md:flex justify-center items-center gap-8 ">
        {NavLinks.map((link, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={link.name}
          >
            <Link to="">
              <div className="flex justify-center items-center px-4 py-2 gap-3 bg-[#f09a29] rounded-md border-solid border-2 border-transparent hover:border-orange-300 transition-all text-white cursor-pointer hover:bg-transparent hover:text-orange-300">
                {link.icon}
                <span>{link.name}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div onClick={handleNav} className="md:hidden cursor-pointer  text-2xl ">
        <Menu className=" hover:text-[#E57226] scale-x-150 scale-y-125 cursor-pointer " />
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[75%] lg:hidden h-screen    p-10 ease-in-out duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <X size={45}></X>
          </div>
        </div>
        <div className="flex-row">
          {NavLinks.map((link, index) => (
            <li key={index} className="text-xl uppercase ">
              <a href={link.href} className="flex items-center  ">
                {link.icon && (
                  <span className="hover:text-[#E57226] hover:opacity-95 hover:scale-125 cursor-pointer ">
                    {link.icon}
                  </span>
                )}
                <span className="hover:text-[#E57226] hover:scale-105 cursor-pointer  text-2xl text-black p-3">
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
