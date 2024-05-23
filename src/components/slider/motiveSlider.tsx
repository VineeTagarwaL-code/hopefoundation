import * as React from "react";
import images from "../slider/motive.json";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function MotiveSlider() {
  return (
    <>
      <h1 className="md:text-3xl text-xl font-semibold text-blue-500 mt-5 text-left px-4 ">

          Recite some Motivational Quotes and to uplift and change the way you
          feel about life
        </h1>
   
    
        <p className="text-xl text-gray-500 mt-5 px-4 ">
          The way you think and feel about yourself, including your beliefs and
          expectations about what is possible for you, determines everything
          that happens to you.
          <br />
          When you change the quality of your thinking, you change the quality
          of your life.You have complete control over only one thing in the
          universe — your thinking – and that’s where motivational quotes come
          in! You can decide what you are going to think in any given situation.
          Your thoughts and feelings determine your actions and determine the
          results you get
        </p>
 
      <div className="overflow-hidden flex flex-row flex-wrap justify-center items-center mt-10">
        <Carousel
          opts={{
            align: "center",
          }}
          className="mx-20"
        >
          <CarouselContent className="flex">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="flex-shrink-0 px-4 basis-1/3 mb-10"
                style={{ flex: "0 0 30%" }}
              >
                <div className="p-1">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        src={image.img}
                        width={900}
                        height={400}
                        alt={`Image ${index + 1}`}
                        className="w-full h-full"
                        priority={index === 0}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
