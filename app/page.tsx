"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icons } from "@/components/icons";
import Stats from "@/components/stats";
import { ExplainerData } from "@/data/data";

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
                  className="text-white flex gap-[5px] hover:gap-[10px] duration-300 transition-all justify-center items-center text-base font-bold"
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
                src="/images/hero.png"
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
    </main>
  );
}
