import React from "react";
import familyContent from "../FamilyCounselling/familyCounselling.json";
import { SectionWrapper } from "../seciton-wrapper";

export const FamilyCoun = () => {
  return (
    <SectionWrapper>
      <div className="w-full h-full">
      <div className="flex justify-center items-center flex-col px-6">
      <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#d47f22] w-full text-left ">
        Family Counselling
        </h1>
        <p className="2xl:text-xl  md:text-xl text-lg pt-5  text-gray-500">
          “Addiction / Alcoholism is a one of a kind condition that not only
          affects the sufferer but all those whose lives he touches.” This quote
          from the Big Book of Alcoholics Anonymous would resonate with the
          family of every suffering addict / alcoholic. Guilt, Anger,
          Detachment, Abuse, Neglect, Isolation, Fear are just some of the words
          that may describe the loved ones of a client. If you as a family
          member feel that the mere abstinence from the substance of abuse would
          work a miracle in your life then you need to re-look. <br /><br /> We at HPF feel
          its our utmost priority to educate the family of the client on the
          multi faceted nature of this condition. You are as much a part of the
          recovery program as the client. Our counselors will be working closely
          with you at every stage of the treatment program to not only aid in
          his recovery but to also help you firmly establish a ground for a
          total healing of the family. You need no longer feel betrayed. We
          remain invested in your needs and through regular
          Educational/Awareness and Family Counseling Sessions serve to empower
          you. Introduction to Self-Help groups and regular follow-ups.
        </p>
      </div>
      <div>
      <h1 className="text-xl md:text-2xl font-semibold text-[#d47f22] w-full mb-5 pt-5 px-6">
          Process of Treatment:
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {familyContent.map((content, index) => (
          <div key={index} className="p-4 gap-4">
            <h3 className="text-xl font-medium  hover:text-neutral-500 text-[#d47f22] pb-3">
              <span className="font-bold text-[#d47f22] pr-1 text-2xl">|</span>
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

export default  FamilyCoun;
