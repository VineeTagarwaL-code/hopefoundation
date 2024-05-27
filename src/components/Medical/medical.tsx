import React from "react";
import medContent from "../Medical/medContent.json";
import { SectionWrapper } from "../seciton-wrapper";

export const Medical = () => {
  return (
    <SectionWrapper>
<div className="w-full h-full mt-12 md:mt-20 " id="treatment">
      <div className="flex justify-center items-center flex-col px-6 ">
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#d47f22] w-full text-left ">
          MEDICAL CARE AND DETOX FOR DRUG AND ALCOHOL ADDICTION
        </h1>
        <p className="2xl:text-xl  md:text-xl text-lg pt-5  text-gray-500">
          Effective rehabilitation restores confidence, strength, and
          motivation, and is the safest route back to a more normal way of life.
          It’s a process that varies from person to person, depending on
          attitude, personal circumstances, and the nature of the dependency.
          Whatever the addiction, the first step will always be to deprive the
          addict of the substance or access to the habit to which they’re
          addicted. For drug and alcohol addictions, this entails
          detoxification. Understandably, addicts worry about the difficulty of
          detox. But detoxifying in private treatment centres makes the detox
          process as safe, controlled, and quick as it can be, managing
          withdrawal symptoms and providing access to the right medical and
          therapeutic support.
        </p>
      </div>
      <div>
        <h1 className="text-xl md:text-2xl font-semibold text-[#d47f22] w-full mb-5 pt-5 px-6">
          Process of Treatment:
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {medContent.map((content, index) => (
          <div key={index} className="p-4 gap-4">
            <h3 className="md:text-2xl text-xl font-medium  hover:text-neutral-500 text-[#d47f22] pb-3">
              <span className="font-bold text-[#d47f22] pr-1 text-2xl  ">|</span>
              {content.tagline}
            </h3>
            <p className="text-base md:text-lg text-neutral-400 ">
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </SectionWrapper>
    
  );
};

export default Medical;
