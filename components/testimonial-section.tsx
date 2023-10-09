import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Testimonials } from "@/data/data";
import Image from "next/image";

export default function TestimonialSection() {
  const swiper = useSwiper();

  const handlePrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  return (
    <>
      <section className="mb-[160px] container">
        <div>
          <h2 className="text-[32px] mb-[80px] leading-[42px] font-bold text-center md:text-5xl md:leading-[62px]">
            Don&apos;t just take our word for it...
          </h2>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {Testimonials.map(({ testimony, name, company, img }) => (
            <div key={name}>
              <SwiperSlide>
                <div>
                  <p className="text-center font-normal text-[rgba(0,0,0,.8)] mb-20 text-lg md:text-2xl leading-[28px]">
                    &quot;{testimony}&quot;
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Image
                      className="w-[50px] h-[50px]"
                      width={50}
                      height={50}
                      src={img}
                      alt={name}
                    />
                    <div className="text-center">
                      <h3 className="text-lg leading-[23px] font-bold">
                        {name}
                      </h3>
                      <p className="text-base font-normal leading-[21px] text-[rgba(0,0,0,.5)]">
                        {company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>

        <div className="flex justify-center gap-20 mt-10 items-center">
          <ChevronLeft
            onClick={handlePrev}
            className="h-10 text-white hover:cursor-pointer rounded-full p-[6px] bg-brand-blue-100 w-10"
            aria-hidden="true"
          />
          <ChevronRight
            onClick={handleNext}
            className="h-10 hover:cursor-pointer text-white rounded-full p-[6px] bg-brand-blue-100 w-10"
            aria-hidden="true"
          />
        </div>
      </section>
    </>
  );
}
