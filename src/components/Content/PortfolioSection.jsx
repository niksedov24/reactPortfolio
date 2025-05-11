import "../css/Content.css";
import React, { useState } from "react";

export default function PortfolioSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projects = [
    {
      id: 1,
      title: "Project 1",
      imageUrl: "path/to/image1.jpg",
      description: "Short description of project 1.",
      fullDescription: "Detailed description of Project 1...",
    },
    {
      id: 2,
      title: "Project 2",
      imageUrl: "path/to/image2.jpg",
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
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>

      <div className="slider-container">
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
      </div>
      <div className="slide-description">
        <h3>{projects[currentSlide].title}</h3>
        <p>{projects[currentSlide].description}</p>
      </div>
    </section>
  );
}
