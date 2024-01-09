"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icons } from "@/components/icons";
import Stats from "@/app/(routes)/(main)/components/main-stats";
import {
  BeforeData,
  ExplainerData,
  FeaturesData,
  Features_Section_one,
  Features_Section_two,
} from "@/data/data";
import {
  Feature,
  FeatureCard,
} from "@/app/(routes)/(main)/components/main-feature-card";
import CallToAction from "@/app/(routes)/(main)/components/main-call-to-action";
import TestimonialSection from "@/app/(routes)/(main)/components/main-testimonial-section";

export default function HomePage() {
  return (
    <main>
      <section className="gradient">
        <div className="container">
          <div className="grid md-920:grid-cols-2 mb-[120px] gap-[80px] md-920:gap-[10px] max-md:pt-[190px] pt-[210px] pb-[120px] md-920:pb-[35px]">
            <div className="max-w-[599px] grid_row_1 md-800:justify-self-start md-800:col-span-full">
              <motion.h1
                transition={{ duration: 0.5 }}
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="font-bold max-md:text-[42px] max-md:leading-[48px] max-md:mb-4 mb-10 leading-[68px] text-[64px] text-white"
              >
                Anyone, anywhere can teach online
              </motion.h1>
              <motion.p
                transition={{ duration: 0.7 }}
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="text-2xl max-md:text-[18px] max-md:leading-[28px] mb-[40px] leading-8 text-[hsla(0,0%,100%,.8)]"
              >
                Create & sell your ebooks, courses, and live classes- all on
                Klas
              </motion.p>
              <motion.div
                transition={{ duration: 0.9 }}
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="flex items-center gap-6"
              >
                <Link
                  href="/login"
                  className="bg-white rounded-[8px] text-base font-bold py-[14px] px-[30px] text-brand-blue-100"
                >
                  Sign up free
                </Link>
                <Link
                  className="text-white flex gap-[2px] hover:gap-[4px] duration-300 transition-all justify-center items-center text-base font-bold"
                  href="https://calendly.com/nathanstark101/chat"
                >
                  Request demo
                  <Icons.chevron_right />
                </Link>
              </motion.div>
            </div>
            <motion.div
              transition={{ duration: 0.7 }}
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              className="md-920:justify-self-end grid_row_1 md-800:col-span-full"
            >
              <Image
                className="w-full md-920:w-[400px] min-[1110px]:w-[640px] object-cover"
                alt="hero-image"
                src="/images/landing-page/home-page/hero.png"
                width={640}
                height={563.95}
              />
            </motion.div>
          </div>
        </div>
      </section>
      <Stats />
      <section className="container">
        <div className="mb-[160px]">
          <div>
            <span className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-5xl leading-[62px] max-md:text-[32px] max-md:leading-[42px] text-black text-center font-bold">
                Three ways to teach
              </h2>
              <p className="text-2xl leading-[31px] font-normal max-md:text-lg max-md:leading-[23px] text-[rgba(0,0,0,.5)]">
                The ultimate solution to help you launch your online academy
              </p>
            </span>
            <div className="mt-10 pt-10 grid gap-6 explainer_grid">
              {ExplainerData.map((item, index) => (
                <motion.div
                  key={index}
                  transition={{ duration: 0.7 }}
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  className="flex flex-col rounded-[8px] items-start bg-white shadow-lg"
                >
                  <div>
                    <Image
                      className="w-full"
                      src={item.image}
                      width={500}
                      height={254.33}
                      alt={item.title}
                    />
                  </div>
                  <div className="px-6 py-10 flex flex-col gap-4">
                    <h3 className="text-2xl leading-[31px] font-medium">
                      {item.title}
                    </h3>
                    <p className="text-lg leading-[23px] font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-[160px]">
          <div>
            <div>
              <h3 className="text-center font-medium text-[32px] leading-[42px] mb-[45px]">
                Before
              </h3>
              <div className="grid max grid-cols-5 max-lg-1150:gap-[10px] gap-y-[20px] lg-1150:grid-cols-11 lg-1150:gap-x-[40px] place-items-center">
                {BeforeData.map((item) => (
                  <>
                    <div className="flex flex-col gap-4 items-center justify-center">
                      <div className="w-[63px] h-[63px] lg-1150:w-[90px] lg-1150:h-[90px] grid place-items-center p-4 lg-1150:p[22px] bg-white shadow-md rounded-[50%]">
                        <Image
                          width={46}
                          height={46}
                          src={item.img}
                          alt={item.name}
                        />
                      </div>
                      <p className="lg-1150:text-base text-[12px] leading-[15px] lg-110:leading-[23px] whitespace-nowrap">
                        {item.name}
                      </p>
                    </div>
                    {item.span && (
                      <span
                        className={`${
                          item.remove_Span ? "max-lg-1150:hidden" : ""
                        } text-[28px]`}
                      >
                        +
                      </span>
                    )}
                  </>
                ))}
              </div>
            </div>
            <div className="mt-[80px] flex flex-col items-center">
              <h3 className="text-center font-medium text-[32px] leading-[42px] mb-[45px]">
                Now
              </h3>
              <Image
                width={90}
                height={90}
                className="mb-4"
                src="images/landing-page/home-page/klas-logo.svg"
                alt="logo"
              />
              <p className="text-lg">All you need is Klas</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="">
          <div className="pb-[120px]">
            <div className="flex items-center justify-center">
              <h2 className="text-[32px] leading-[42px] font-bold text-center md:text-5xl md:leading-[62px]">
                With you from first student to full scale
              </h2>
            </div>
          </div>
          <div className="container">
            {Features_Section_one.map((featureData) => (
              <Feature key={featureData.id} data={featureData} />
            ))}
          </div>
        </div>

        <div className="gradient pt-[160px] mb-[160px] pb-[10px]">
          <div className="container text-white">
            {Features_Section_two.map((featureData) => (
              <Feature key={featureData.id} data={featureData} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="pb-[120px]">
            <div>
              <h2 className="text-[32px] leading-[42px] font-bold text-center md:text-5xl md:leading-[62px]">
                And many more features
              </h2>
            </div>
            <div className="mt-[80px] grid features_grid gap-6">
              {FeaturesData.map((cardData) => (
                <FeatureCard data={cardData} key={cardData.heading} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />

      <CallToAction
        buttonText="Sign up free"
        heading="Ready to start teaching?"
        paragraph="Use Klas to create and manage your online academy"
      />
    </main>
  );
}
