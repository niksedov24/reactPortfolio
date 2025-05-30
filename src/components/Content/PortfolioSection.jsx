import "../css/Content.css";
import { motion } from "framer-motion";
import React, { useState } from "react";
import portfolioimg from "/public/portfolio/9739961.jpg";

export default function PortfolioSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projects = [
    {
      id: 1,
      title: "Project 1",
      imageUrl: { portfolioimg },
      description: "Short description of project 1.",
      fullDescription: "Detailed description of Project 1...",
    },
    {
      id: 2,
      title: "Project 2",
      imageUrl: { portfolioimg },
      description: "Short description of project 2.",
      fullDescription: "Detailed description of Project 2...",
    },
  ];
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === projects.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projects.length - 1 : prevSlide - 1
    );
  };

  const Animation1 = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const Animation2 = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const Animation3 = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  const Animation4 = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  const Animation5 = {
    hidden: {
      x: -300,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
      id="portfolio"
      className="portfolio"
    >
      <motion.h2 custom={1} variants={Animation4}>
        Portfolio
      </motion.h2>

      <motion.div custom={2} variants={Animation5} className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="slide">
              <img src={project.imageUrl} alt={project.title} />
            </div>
          ))}
        </div>
        <button className="slider-button prev" onClick={prevSlide}>
          &lt;
        </button>
        <button className="slider-button next" onClick={nextSlide}>
          &gt;
        </button>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        className="slide-description"
      >
        <motion.h3 custom={1} variants={Animation3}>
          {projects[currentSlide].title}
        </motion.h3>
        <motion.p custom={2} variants={Animation3}>
          {projects[currentSlide].description}
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
