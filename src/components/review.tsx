import { SectionWrapper } from "./seciton-wrapper";

export const Review = () => {
  return (
    <SectionWrapper>
 <div className="h-screen w-full flex justify-center items-center flex-col mt-20 px-2">
 <h1 className="text-xl md:text-3xl flex justify-center items-center font-bold text-[#d47f22] w-full py-10">
          POST A REVIEW ABOUT YOUR EXPERIENCE
        </h1>
       
          <iframe
            src="https://widgets.sociablekit.com/google-reviews/iframe/25416223"
            frameBorder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
    
    </SectionWrapper>
  );
};
