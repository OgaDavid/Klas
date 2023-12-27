"use client";

import "swiper/css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    id: "slide 1",
    img: "/images/auth-pages/slide-1.svg",
    title: "Deliver an unforgettable experience",
    paragraph: "Host all types and sizes of classes on Klas",
  },
  {
    id: "slide 2",
    img: "/images/auth-pages/slide-2.svg",
    title: "Accept payments from students globally",
    paragraph: "You can monetize your classes with ease and manage payouts",
  },
  {
    id: "slide 3",
    img: "/images/auth-pages/slide-3.svg",
    title: "Join the live learning revolution",
    paragraph: "The go-to live learning platform for creators around the world",
  },
];

export default function AuthCarousel() {
  return (
    <div className="gradient pt-5 h-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay]}
      >
        {slides.map(({ id, img, title, paragraph }) => (
          <div key={id}>
            <SwiperSlide className="auth-swiper-slide">
              <Image
                className="w-[512px] h-[436px] mx-auto"
                src={img}
                width={512}
                height={436}
                alt={id}
              />
              <div>
                <h2 className="max-w-[578px] mx-auto font-bold text-white text-[32px] leading-[42px] mt-5 mb-[18px]">
                  {title}
                </h2>
                <p className="font-extralight mx-auto text-lg leading-[20px] text-white max-w-[578px]">
                  {paragraph}
                </p>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
