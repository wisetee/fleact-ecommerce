import React from "react";
import { Icon } from '@iconify/react';

const ServiceSection = () => {
  const services = [
    {
      icon: "ci:shopping-cart-02",
      title: "Free Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
    },
    {
      icon: "tdesign:secured",
      title: "100% Secure Payment",
      description: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
    },
    {
      icon: "la:award",
      title: "Quality Guarantee",
      description: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
    },
    {
      icon: "solar:dollar-outline",
      title: "Daily Offer",
      description: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
    },
  ];

  return (
    <section id="service" className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {services.map((service, index) => (
            <div key={index} className="my-4">
              <div className="mb-4">
                <Icon icon={service.icon} className="text-primary text-4xl" />
              </div>
              <h4 className="text-lg font-bold mb-2">{service.title}</h4>
              <p className="blog-paragraph">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
