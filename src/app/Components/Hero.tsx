import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-black text-white">
      <div className="flex justify-center items-center min-h-screen">
        <div className="container grid lg:grid-cols-2 gap-8 lg:h-[calc(100vh-70px)] h-full">
          {/* Text Section */}
          <div className="flex flex-col justify-center px-6 space-y-4 text-center lg:text-left">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">
              <p>Hello, I&apos;m</p>
              <span className="text-blue-300">Areesha Nadeem</span>
              <Typewriter
                options={{
                  strings: ["Web Developer", "Digital Entrepreneur"],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 50,
                }}
              />
            </h1>
            <p className="mb-6 leading-relaxed text-base">
              I craft innovative web experiences with a passion for clean code
              and user-centric design. Whether building dynamic websites or
              scalable applications, I turn ideas into interactive, responsive
              solutions. Let&apos;s create something extraordinary together!
            </p>
            <Link href="#contact">
              <button className="bg-blue-300 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-blue-400 transition duration-300 ease-in-out mx-auto lg:mx-0">
                Let&apos;s Contact
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center p-6">
            <Image
              src="/Image2.jpeg"
              alt="Hero"
              width={192}
              height={200}
              className="shadow-2xl transition-transform duration-500 hover:scale-105 rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
