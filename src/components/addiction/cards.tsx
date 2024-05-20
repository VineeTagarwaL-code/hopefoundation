"use client";
import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import messages from "./messages.json";
import Link from "next/link";

export function CarouselSize() {
  return (
    <div className="  overflow-hidden flex  flex-row flex-wrap justify-center items-center">
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-[90%] mx-20"
      >
        <CarouselContent className="flex flex-row">
          {messages.map((message, index) => (
            <CarouselItem
              key={index}
              className="lg:basis-1/3 flex-shrink-0 px-4 basis:1/3 mb-10" 
            >
              <Card>
                <CardContent className="flex flex-col items-center p-6 ">
                  <div className="bg-gray-100 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105">
                    <Image
                      src={message.image}
                      width={400}
                      height={400}
                      alt={message.title || "Image"}
                      className="w-full h-60 object-cover rounded-t-lg"
                    />
                    <div className="flex flex-col gap-6 p-4">
                      <div className="flex justify-center items-center font-bold">
                        {message.title}
                      </div>
                      <div className="flex flex-col text-wrap text-left gap-4 ">
                        <div className="w-full h-0.5 bg-gray-300" />
                        <p className="text-base hover:text-gray-500">
                          {message.content}
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <Link href={message.url}>
                        <button className="border border-gray-300 hover:bg-[#E57226] px-4 py-2 rounded-md">
                          {message.button}
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
