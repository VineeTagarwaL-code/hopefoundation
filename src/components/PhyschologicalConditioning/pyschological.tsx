import Image from "next/image";
import pyschological from "../../assets/psychologicial.webp";
import { AccordionDemo } from "./accordion";

export const Pyschological = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col md:flex-row px-6 gap-4 mt-11">
        <div className="w-full 2xl:w-5/6 flex flex-col justify-center items-center md:items-start gap-4">
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#d47f22] w-full text-left ">
            Psychological Conditioning
          </h1>
          <p className="md:text-xl text:lg text-gray-500 mt-5 leading-normal">
            Addiction / Alcoholism isn’t just a biological condition but a
            Psychological one too. No treatment program has been able to deal
            with a purely clinical approach to addiction / alcoholism, so far.
            We are hopeful. At the outset a thorough assessment of the client
            is taken up to build a roadmap for his recovery. This is in
            accordance and intervention of the family of the client who are
            sometimes better suited to breaking the client’s denials. Fixed
            ideas and beliefs, rigid and repetitive thought patterns, lack of
            constructive planning, absence of abstract reasoning and
            intellectualization are some of the most common road-blocks in the
            process of thought modification. When our clients are able to
            summon the will to walk down this path they are sometimes baffled
            by the ensuing emotional upheavals . The protective love and
            concern shown by our staff aids the patient to translate their
            willingness into an action program. Having themselves walked down
            the road of recovery they understand the pain and discomfort of
            abandoning the old and embracing the new. A strict discipline
            routine, a thoroughly structured day-plan, a rigorous practice of
            empowering each one of our client through individual and group
            responsibilities is an effective strategy to counteract the living
            problems faced by our clients. Here again the un-aided but
            supervisory role played by our staff ensure that the client begins
            to feel responsible again. There is no substitute for the goal of
            behavior modification than a positive habit forming action plan.
          </p>
        </div>
        <div className="hidden 2xl:flex  sm:hidden justify-end items-center mt-14 2xl:w-1/3">
          <Image
            src={pyschological}
            alt="pyschological"
            width={300}
            height={350}
            className="rounded-lg w-[400px] h-[350px] mb-5"
          />
        </div>
      </div>
      <div className="bottom-0 left-0">
        <AccordionDemo />
      </div>
    </>
  );
};
