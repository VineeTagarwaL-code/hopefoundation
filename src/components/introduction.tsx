"use client";
import { SectionWrapper } from "./seciton-wrapper";
import { ChevronRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import hand from "@/assets/handshake.png";
import Image from "next/image";

export const Introduction = () => {
  return (

      <div className="w-full   flex mt-12 md:mt-0 md:justify-center items-start flex-col md:h-[calc(100vh-95px)] relative overflow-hidden">
        <div className="text-3xl md:text-6xl flex flex-col  gap-4 md:gap-6 text-gray-800 pl-2 md:pl-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col gap-3"
          >
            <p>
              The{" "}
              <span className="text-5xl md:text-6xl text-[#d47f22] underline decoration-wavy decoration-2">
                Best
              </span>
            </p>

            <p className="text-3xl md:text-5xl">
              Addiction Treatment Center You Can Trust!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col gap-2"
          >
            <p className=" w-full md:w-[60%] text-lg md:text-2xl ">
              Durgapur Hope Foundation provides holistic treatment for substance
              addiction offering comprehensive care for lasting recovery in a supportive
              environment.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex justify-center items-center gap-4 mt-6 md:mt-16 pl-2 md:pl-12"
        >
          <motion.button
            whileHover={{ translateY: -10 }}
            className="flex justify-center items-center px-4 py-2 gap-3 text-lg md:text-2xl bg-[#f09a29] rounded-md border-solid border-2 border-transparent hover:border-orange-300 transition-all text-white cursor-pointer hover:bg-transparent hover:text-orange-300"
          >
            Know more <ChevronRight />
          </motion.button>
          <motion.button
            whileHover={{ translateY: -10 }}
            className="flex justify-center items-center px-4 py-2 gap-3 text-lg md:text-2xl bg-[#f09a29] rounded-md border-solid border-2 border-transparent hover:border-orange-300 transition-all text-white cursor-pointer hover:bg-transparent hover:text-orange-300"
          >
            Call Now <PhoneCall />
          </motion.button>
        </motion.div>

       
          <Image
            className="absolute right-[-160px] rotate-[-45deg] bottom-[-30px]  lg:inline-block z-10 hidden"
            src={hand}
            alt="Handshake"
            height={600}
            width={600}
          />

      </div>

  );
};
