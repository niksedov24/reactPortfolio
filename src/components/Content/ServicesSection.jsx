import { motion } from "framer-motion";
import React, { useState } from "react";
import "../css/Content.css";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: "website-development",
      title: "Website Development",
      description: "Создаю современные, адаптивные и удобные веб-сайты...",
      icon: "fas fa-code",
    },
    {
      id: "web-application",
      title: "Web Application Development",
      description:
        "Разрабатываю веб-приложения, отвечающие вашим конкретным потребностям...",
      icon: "fas fa-laptop-code",
    },
    {
      id: "mobile-application",
      title: "Mobile Application Development",
      description:
        "Creating and designing software for smaller, wireless computing devices, such as smart phones and tablets. The focus is on a more direct way to handle the demands and capabilities of the devices.",
      icon: "fas fa-mobile-alt",
    },
    {
      id: "seo-optimization",
      title: "SEO Optimization",
      description:
        "I ensure that your website is easily found by potential customers. In fact, I can guarantee that your website can be on the top of the search results.",
      icon: "fas fa-search",
    },
    {
      id: "consulting",
      title: "IT Consulting",
      description:
        "I can solve any software issues you may have. From setting up your databases to designing your company website, I can handle any of your needs.",
      icon: "fas fa-comments",
    },
    {
      id: "website-development",
      title: "Website Development",
      description: "Создаю современные, адаптивные и удобные веб-сайты...",
      icon: "fas fa-code",
    },
    {
      id: "website-development",
      title: "Website Development",
      description: "Создаю современные, адаптивные и удобные веб-сайты...",
      icon: "fas fa-code",
    },
    {
      id: "website-development",
      title: "Website Development",
      description: "Создаю современные, адаптивные и удобные веб-сайты...",
      icon: "fas fa-code",
    },
  ];

  const handleServiceClick = (serviceId) => {
    setSelectedService(
      servicesData.find((service) => service.id === serviceId)
    );
  };

  const handleCloseDetails = () => {
    setSelectedService(null);
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
      y: -50,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
      id="services"
      className="services-section"
    >
      <motion.h2 custom={1} variants={Animation4}>
        Services
      </motion.h2>
      <motion.p custom={2} variants={Animation4}>
        “Gain confidence in your choice. My services are under warranty
        control.”
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        className="services-grid"
      >
        {servicesData.map((service, index) => (
          <motion.div
            variants={Animation5}
            custom={index + 0.1}
            key={service.id}
            className="service-item"
            onClick={() => handleServiceClick(service.id)}
          >
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
          </motion.div>
        ))}
      </motion.div>

      {selectedService && (
        <div className="overlay" onClick={handleCloseDetails}>
          {" "}
          <div className="service-details" onClick={(e) => e.stopPropagation()}>
            {" "}
            <button onClick={handleCloseDetails}>X</button>
            <h3>{selectedService.title}</h3>
            <p>{selectedService.description}</p>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default ServicesSection;
