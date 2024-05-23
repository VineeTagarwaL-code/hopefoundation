"use client";
import Image from "next/image";
import Images from "../assets/Mother_Teresa_1.jpg";
import { motion } from "framer-motion";
import { CircleHelp } from "lucide-react";
import { SectionWrapper } from "./seciton-wrapper";
export const Main = () => {
  const phoneNumber = 7001029801;
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <SectionWrapper>
      <div className="flex justify-between items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col items-start justify-center md:w-[60%]">
          <h1 className="text-2xl font-bold md:text-4xl  text-[#d47f22] md:font-semibold  lg:text-5xl  mb-10">
            Welcome to Durgapur Hope Foundation
          </h1>
          {/* <div className=" font-semibold flex justify-center items-center  px-5 py-3 gap-5 rounded-xl">
  <CircleHelp size={38}  />
  
  <span className="md:text-2xl text-base"> Are you or a loved one
  suffering from the seemingly never-ending cycle of sickness, misery,
  and destruction from drugs or alcohol?
</span>
</div> */}
          <p className="mb-8 text-lg md:text-2xl text-gray-800">
            NOT TO WORRY! HOPE Foundation is fully committed to providing the
            best treatment to any person with a dependence on substances or
            alcohol. We believe that alcoholism and drug addiction are diseases
            and that abstinence is the best way to manage the condition. Our
            holistic approach involves working with mind, body, and spirit, for
            a complete turnaround in behaviors and attitudes that puts patients
            on the path to a healthy and worthwhile life.
          </p>
          <p className="text-lg md:text-2xl  text-gray-800">
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
          </p>

          <div className="pt-10 w-full flex justify-start">
            <motion.div>
              <motion.button
                whileHover={{ translateY: -10 }}
                className="px-4 py-4 text-xl  bg-[#f09a29] rounded-md border-solid border-2 border-transparent hover:border-orange-300 transition-all text-white cursor-pointer hover:bg-transparent hover:text-orange-300"
                onClick={handleCallClick}
              >
                Make a Call
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden md:inline">
          <Image
            src={Images}
            alt="Mother Teresa"
            width={400}
            height={400}
            className="rounded-lg  mb-5"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

{
  /* <div className="  flex justify-center items-start flex-col pl-1  ">
<h1 className="text-2xl font-bold md:text-4xl text-left text-[#d47f22] w-full md:font-semibold mt-10  lg:text-5xl  mb-5">
  Welcome to Durgapur Hope Foundation
</h1>
<div className=" font-semibold flex justify-center items-center text-gray-200 bg-gray-400 px-5 py-3 gap-5 rounded-xl">
  <CircleHelp size={38}  />
  
  <span className="md:text-2xl text-base"> Are you or a loved one
  suffering from the seemingly never-ending cycle of sickness, misery,
  and destruction from drugs or alcohol?
</span>
</div>
<p className="  w-full overflow-auto text-left text-base">
  <span className="  md:text-xl text-lg  text-gray-500">
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
  <span className=" md:text-xl text-lg  text-gray-500">
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

</div>

<div className="2xl:flex  hidden xl:hidden lg:hidden md:hidden sm:hidden justify-end items-center">
<Image
  src={Images}
  alt="Mother Teresa"
  width={400}
  height={400}
  className="rounded-lg  mb-5"
/>
</div> */
}
