import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Cover = ({image,title,details}) => {
    return (
         <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={image}
        bgImageAlt="the dog"
        strength={-200}
    >
         <div
          className="hero md:min-h-[500px] min-h-[400px]">
          <div className="hero-overlay"></div>
          <div className="hero-content  text-center ">
            <div className="max-w-5xl mx-auto block bg-[#151515] text-white opacity-60 md:p-28 p-14">
              <h1 className="mb-5 text-5xl font-bold ">{title}</h1>
              <p className="mb-5">
              {details}
              </p>
            </div>
          </div>
        </div>
    </Parallax>
    );
};

export default Cover;