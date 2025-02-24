'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sliderData = [
  { id: 1, videoSrc: '/videos/partyanimalll.mp4', title: 'Party Animals' },
  { id: 2, videoSrc: '/videos/thelord.mp4', title: 'The Lord of the Rings: Return to Moria' },
  { id: 3, videoSrc: '/videos/freecompress-sonic.mp4', title: 'Sonic Superstars' },
];

const HeaderSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-full h-[500px] flex justify-center items-center mt-6'>
      {/* กรอบแบบ Glow Effect */}
      <div className='relative w-[90%] h-full rounded-xl overflow-hidden border-[6px] border-[#0f172a] shadow-[0_0_30px_rgba(59,130,246,0.4)] bg-[#0f172a]'>
        {/* วิดีโอ Background */}
        <div className='absolute inset-0 w-full h-full'>
          {sliderData.map((slide, index) => (
            <motion.video
              key={slide.id}
              src={slide.videoSrc}
              autoPlay
              loop
              muted
              className='absolute w-full h-full object-cover'
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: index === currentSlide ? 1 : 0, scale: 1 }}
              transition={{ duration: 1 }}
            />
          ))}
        </div>

        {/* ชื่อเกม (เพิ่ม Glow & Background) */}
        {sliderData.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-white text-6xl font-bold px-4 py-2 rounded-lg bg-black/50 border-2 border-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              {slide.title}
            </h2>
          </motion.div>
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>

        {/* Shadow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a]/50"></div>
      </div>
    </div>
  );
};

export default HeaderSlider;
