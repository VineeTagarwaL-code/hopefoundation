import Image from "next/image";
import Transitional from "../assets/TransitionalHousing.jpg";

export const TransitionalHousing = () => {
  return (
    <div className="flex flex-row px-4 w-full h-full mb-11 ">
      <div className="2xl:w-[70%] w-full mt-10 flex-col gap-4 text-left">
      <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#d47f22] w-full text-left">
          Transitional Housing
        </h1>
        <p className="md:text-xl text-lg text-gray-500 mt-5 leading-normal">
          Completing an addiction treatment program is a major step on the path
          to recovery, but some of the toughest challenges occur after the
          treatment is over. For many individuals in recovery, transitional
          housing facilities can help them re-enter society and navigate the
          challenges of their new sober lives. <br /><br />HOPE Foundation offers a
          transitional housing program. The Transit Home is located in the main
          rehab centre, where we provide a safe substance-free environment for
          addicts/alcoholics who have successfully completed our rehabilitation
          program. We are open to housing addicts/alcoholics in recovery, who
          have not gone through our hands. The supportive atmosphere, structured
          setting, and conveniences of transitional housing can help you bridge
          the gap from rehab to daily life at your own pace.
        </p>
      </div>
      <div className="2xl:flex hidden justify-end items-center  mt-10 w-[30%]">
        <Image
          src={Transitional}
          alt="Mother Teresa"
          width={400}
          height={350}
          className=""
        />
      </div>

    </div>
    
  );
};
