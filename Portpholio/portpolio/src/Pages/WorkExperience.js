import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion";

export default function WorkExperience() {
  return (
   <section className="pt-20" id="work">
    <motion.h2
    initial={{opacity:0, y:-20}}
    whileInView={{opacity: 1, y:0}}
    transition={{duration: 1}}
    className='text-center text-4xl font-semibold tracking-tighter'>Project Work Experience</motion.h2>
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1,delay:0.5}}
     className='space-y-8 p-10'>
        {EXPERIENCES.map((experiences,index)=>(
            <motion.div
            initial={{opacity:0,x:-20}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1,delay:index*0.2}} 
            key={index} className='rounded-xl border border-stone-50/30 bg-white/10 hover:bg-white/20 p-4'>
                <h3 className='text-2xl font-semibold'>{experiences.title}</h3>
                <p className='text-xl'>{experiences.company}</p>
                <p className='text-sm text-stone-300'>{experiences.duration}</p>
                <p className='mt-2 text-base'>{experiences.description}</p>
            </motion.div>
        ))}
    </motion.div>

   </section>
  )
}
