import Image from "next/image";
import HopeFoundation from "../assets/durgapur-hope-foundation.avif";
import { SectionWrapper } from "./seciton-wrapper";
export const OurCenter = () => {
  return (
    <SectionWrapper>
 <div className="flex flex-row px-4 w-full h-full mb-4 ">
      <div className="2xl:w-[70%] w-full mt-10 flex-col gap-4 text-left">
      <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#d47f22] w-full text-left">
          OUR CENTER - YOUR HOME
        </h1> 
        <p className="text-blue-500 font-semibold text-xl mt-5">Treating The Whole You </p>
        <p className="md:text-xl text-lg text-gray-500 mt-5 leading-normal">
          DURGAPUR HOPE FOUNDATION is committed to helping each and every
          patient with any dependence (substance addiction as cocaine, heroine,
          marijuana, LSD /process limited addiction such as gambling, gaming or
          digital) and behavioral health concerns (anxiety, anger,schizophrenia,
          bipolar disorder depression, OCD, personality disorders, eating
          disorders). The treatment offered here includes medication, behavioral
          therapy, counseling, and support groups with a dedicated team of
          psychiatrists and psychologists, they cater to the special needs of
          addicts. We offer cutting edge evidence-based treatment and take a
          multidisciplinary approach towards tailoring the right recovery path
          for each patron. We have a wide range of programs to address various
          mental and emotional issues.
        </p>
      </div>
      <div className="2xl:flex hidden justify-end items-center mt-16   w-[30%]">
        <Image 
          src={HopeFoundation}
          alt="Mother Teresa"
          width={450}
          height={200}
          className="h-[250px]"
        />
      </div>
    </div>
    </SectionWrapper>
   
  );
};
