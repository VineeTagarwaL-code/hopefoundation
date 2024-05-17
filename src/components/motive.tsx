"use client";
import Image from "next/image";
import Hope from "../assets/hope.jpg";

export const Motive = () => {
  return (
    <div className="flex flex-row px-4 w-full h-full mb-11 ">
      <div className="2xl:w-[70%] w-full mt-10 flex-col gap-4 text-left">
      <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#d47f22] w-full text-left">
          Purpose & Motive
        </h1>
        <p className="text-xl font-semibold text-blue-500 mb-5 mt-5">
          LET&apos;S WALK TOGETHER ON YOUR JOURNEY OF RECOVERY
        </p>
        <p className="md:text-xl text-lg text-gray-500 mt-5 leading-normal">
                    Addiction can have a crippling effect on you and those around you, and
          can lead to health problems and behavioral disorders. But there&apos;s
          always hope and there is always light, even in the darkest of hours.
          DURGAPUR HOPE FOUNDATION can help you overcome your problem. Get your
          life back on the right path - and, with our ongoing support, stay on
          that path for good. The root of an addiction varies from person to
          person, but the journey towards a better path is possible when you
          have support around you. At DURGAPUR HOPE FOUNDATION, we know and
          understand addiction, and are here to help you take the first step on
          the road to recovery. Addiction is a battle you can’t fight on your
          own, and at DURGAPUR HOPE FOUNDATION, you’ll never have to. Here, you
          can count on having a support team at your service at all times. 
          DURGAPUR HOPE FOUNDATION is a spiritual recovery centre for the care
          and sustained well-being of alcohol and drug dependants. We are an
          affordable drug and alcohol addiction treatment facility. We at HOPE
          Foundation help people transform their lives by providing quality
          de-addiction treatment and continuing care services in a safe, serene,
          and comfortable homely environment. We offer a comprehensive approach
          to the recovery process through the universal 12-Step program. We
          address the full range of patient, family, and professional needs,
          including treatment and continuing care for youth and adults. Our goal
          is to help people reclaim their lives from the disease of addiction,
          thus becoming responsible and productive members of society again.
        </p>
      </div>
      <div className="2xl:flex hidden justify-end items-center mt-16 w-[30%]">
        <Image
          src={Hope}
          alt="Hope"
          width={400}
          height={400}
          className="rounded"
        />
      </div>
    </div>
  );
};

export default Motive;
