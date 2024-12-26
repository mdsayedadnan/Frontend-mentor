// import { Carousel } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import img1 from '../../../Frontend-Mentor/src/assets/download222.jpg'

import { easeOut, motion } from "framer-motion";

export default function Banner() {

  return (
    <div>
      {/* <Carousel transition={{ duration: 2 }} className="rounded-xl">
      <img
        src={img1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={img2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={img3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel> */}
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: {img1},
          }}>
          <div className="hero-overlay bg-teal-600 rounded-"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">

              <motion.h1
                    animate={{x:50,color:['green ,yellow']}}
                    transition={{duration:2, delay:1,ease:easeOut,repeat:Infinity}}
               className="mb-5 text-5xl font-bold">Hello Developer</motion.h1>
              <p className="mb-5">
              Mastering Modern Web Development: Top Tips for Frontend and Backend Developers to Build Scalable, Performant, and User-Friendly Applications Using the Latest Frameworks, Tool
              </p>
             <Link to={'/'}>
             <button className="btn btn-outline">Get Started</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

