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

  return (
    <section id="services" className="services-section">
      <h2>Services</h2>
      <p>
        “Получи уверенность в своем выборе. Мои услуги под гарантийным
        контролем.”
      </p>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="service-item"
            onClick={() => handleServiceClick(service.id)}
          >
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>

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
    </section>
  );
};

export default ServicesSection;
