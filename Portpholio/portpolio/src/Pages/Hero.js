import React from "react";
import { HERO } from "../constants";
import carlImg from "../assets/carl.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex mt-14 min-h-screen flex-wrap items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        <h2 className="my-8 p-2 text-3xl font-bold md:text-5xl lg:text-[6rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <div className="flex justify-center">
          <motion.img
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1}}
            src={carlImg}
            alt="carlImg"
            width={550}
            height={550}
            className="rounded-3xl"
          />
        </div>
      </motion.div>

<div className="flex items-center justify-center gap-10 w-full">
  {/* button */}
<div className="flex items-center justify-center gap-10 w-full">
      <motion.div
      className="flex items-center justify-center mt-10"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      
      <motion.a
        href="/certificates"
        className="relative inline-block px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <Link to="/certificates">
        Certificates
        </Link>
      </motion.a>

    </motion.div>

      </div>
      

{/* button */}
{/* button for download the resume PDF */}
<div className="flex items-center justify-center gap-10 w-full">
      <motion.div
      className="flex items-center justify-center mt-10"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      
      <motion.a
        href="/resume.pdf"
        download="Lucky_Manikpur_Resume.pdf"
        className="relative inline-block px-8 py-4 text-lg font-semibold text-white bg-indigo-500 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
        whileHover={{
          scale: 1.1,
          rotate: -5,
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        Resume
       
        {/* Floating Animated Icon */}
        <motion.span
          className="absolute bottom-0 right-0 flex items-center justify-center w-5 h-5 text-sm text-indigo-600 bg-white rounded-full"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
        >
          ↓
        </motion.span>
      </motion.a>

    </motion.div>

      </div>
</div>

    </section>
  );
}
