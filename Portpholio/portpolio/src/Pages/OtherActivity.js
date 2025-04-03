import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function OtherActivity() {

  return (
    <section className="pt-20" id="activity">
        <motion.h2
            initial={{opacity:0, y:-20}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 1}}
            className='text-center text-4xl font-semibold tracking-tighter'>Other Activities</motion.h2>
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1,delay:0.5}}
                 className='space-y-8 p-10'>

<motion.div
            initial={{opacity:0,x:-20}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1,delay:0.5}} 
             className='rounded-xl border border-stone-50/30 bg-white/10 hover:bg-white/20 p-4'>
                <h3 className='text-2xl font-semibold'>Competitions, Achivements & Extracurriculars Activty</h3>
                <p className='text-sm text-stone-300'>at CSIT and other places</p>
                <p className='mt-2 text-base'>I excelled academically with 93% in 12th grade and an 82% aggregate in Computer Science Engineering. I actively participated in academic clubs and competitions, showcasing skills in programming, problem-solving, and algorithm design. My dedication to learning has earned me recognition in technical and extracurricular activities.</p>
</motion.div>

                               {/* button */}
                    <div className="flex items-center justify-center gap-10 w-full">
                         <motion.div
                         className="flex items-center justify-center mt-10"
                         initial={{ opacity: 0, scale: 0.8 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.8 }}
                       >
                         
                         <motion.a
                           href="/Activity"
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
                           <Link to="/Activity">
                           View
                           </Link>
                         </motion.a>
                   
                       </motion.div>
                   
                    </div>   
                    {/*end of the button*/}
   

    </motion.div>

    </section>
  )
}
