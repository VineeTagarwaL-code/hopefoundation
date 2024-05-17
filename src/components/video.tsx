"use client";

export const Video = () => {
  return (
    <div className="w-screen h-screen flex flex-col mt-20 ">
      <div className="w-full text-center space-y-4">
        <h1 className=" text-3xl md:text-5xl font-semibold  text-[#d47f22]">TREATMENT MODALITIES</h1>
        <h1 className="text-3xl md:text-4xl font-semibold">ROAD TO RECOVERY</h1>
        <h1 className=" text-2xl  text-gray-500 font-semibold">
          LIVE LIFE, DON&apos;T LEAVE LIFE
        </h1>
      </div>

      <div className="flex-grow"></div>

      <div className=" flex justify-center items-center ">
        <video
          src="/assets/file.mp4" 
          autoPlay
          muted
          loop
          controls
          className=" w-full md:w-5/6 lg:w-4/6 xl:w-3/6 xs:h-2/6"
        />
      </div>
      
      
      <div className="flex-grow"></div>
    </div>
  );
};
