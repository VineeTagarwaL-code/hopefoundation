import { SectionWrapper } from "../seciton-wrapper";
import { CarouselSize } from "./cards";
export const Addiction = () => {
  return (
    <SectionWrapper>
               <div className="w-full h-full " id="addiction">
        <div className="flex justify-center items-center flex-col px-4 ">
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#d47f22] w-full text-left ">
         What is Addiction?
        </h1>
        <p className="md:text-xl text:lg text-gray-500 mt-5 leading-normal mb-5">
        Addiction is a chronic condition where a person compulsively seeks and
        uses a substance or engages in an activity, despite harmful
        consequences. It involves changes in the brain that lead to a loss of
        control and an inability to stop, even when it causes physical or
        psychological harm. Although people often start using substances or
        engaging in activities voluntarily, addiction can undermine self-control
        and create a dependence for coping with daily life.
        </p>
      </div>
     
 <CarouselSize/>
 </div>
    </SectionWrapper>

  );
};
