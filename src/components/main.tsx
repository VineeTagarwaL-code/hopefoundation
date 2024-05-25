"use client";
import Image from "next/image";
import Images from "../assets/Mother_Teresa_1.jpg";
import { motion } from "framer-motion";
import { CircleHelp } from "lucide-react";
import {call} from "../utils/call";
export const Main = () => {

  return (
    <div className="w-screen px-6 flex flex-row h-full overflow-hidden">
      <div className=" 2xl:w-[70%] w-full   flex justify-center items-center flex-col pl-1  ">
        <h1 className="text-xl font-bold md:text-4xl text-left text-[#d47f22] w-full md:font-semibold mt-10  lg:text-5xl  mb-5">
          Welcome to Durgapur Hope Foundation
        </h1>
        <span className=" text-sm md:text-2xl mt-5 flex gap-2 leading-normal font-semibold text-blue-500">
           Are you or a loved one
          suffering from the seemingly never-ending cycle of sickness, misery,
          and destruction from drugs or alcohol?
        </span>
        <p className="  w-full max-h-[calc(100vh - 350px)] overflow-auto text-left text-base">
          <br />
          <br />
          <span className="lg:text-xl  md:text-xl text-sm  text-gray-500">
            NOT TO WORRY! HOPE Foundation is fully committed to providing the
            best treatment to any person with a dependence on substances or
            alcohol. We believe that alcoholism and drug addiction are diseases
            and that abstinence is the best way to manage the condition. Our
            holistic approach involves working with mind, body, and spirit, for
            a complete turnaround in behaviors and attitudes that puts patients
            on the path to a healthy and worthwhile life.
          </span>
          <br />
          <br />
          <span className="lg:text-xl  md:text-xl text-sm  text-gray-500">
            The good news is addiction is not a life sentence. We at HOPE
            Foundation help people transform their lives by providing the
            highest quality de-addiction treatment and continuing care services
            in a safe, serene, and comfortable homely environment. We offer a
            comprehensive approach to the recovery process, which addresses the
            full range of patient, family, and professional needs, including
            treatment and continuing care for youth and adults. Our goal is to
            help people reclaim their lives from the disease of addiction, thus
            becoming responsible and productive members of society. If you’re
            reading this, then there’s a good chance that you or someone you
            know is suffering from the disease of addiction. We’re here to help
            you overcome that affliction and guarantee complete discretion. You
            don’t need to suffer in silence. Call us today and take the first
            steps towards a brighter future.
          </span>
        </p>
        <div className="pt-10 w-full flex justify-start">
          <motion.div>
            <motion.button
            onClick={call}
              whileHover={{ translateY: -10 }}
              className="p-2 md:p-4 text-sm md:text-xl  bg-[#f09a29] rounded-md border-solid border-2 border-transparent hover:border-orange-300 transition-all text-white cursor-pointer hover:bg-transparent hover:text-orange-300"
            >
              Make a Call
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="2xl:flex w-[30%] hidden xl:hidden lg:hidden md:hidden sm:hidden justify-end items-center">
        <Image
          src={Images}
          alt="Mother Teresa"
          className="rounded-lg w-[400px] h-[550px] mb-5"
        />
      </div>
    </div>
  );
};

