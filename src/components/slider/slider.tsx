import * as React from "react";
import images from '../slider/images.json';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Slider() {
  return (
    <div className="overflow-hidden flex flex-row flex-wrap justify-center items-center">
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
                      className="w-full h-auto"
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
  );
}
