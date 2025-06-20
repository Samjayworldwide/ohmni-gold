import React from "react";

const servicesData = [
  {
    title: "Oil and Gas",
    description: "",
    image:
      "https://www.economypost.ng/wp-content/uploads/2024/09/Petrol-marketers.webp",
    items: [
      "Consulting",
      "Technical services",
      "Infrastructure",
      "Geology services",
      "Digital and transformations",
      "ESG and sustainability services",
      "Governance and compliance",
    ],
  },
  {
    title: "Real estate",
    description:
      "We specialize in building and selling of reliable houses by employing affordable technologies to meet customer satisfaction.",
    image:
      "https://victoriacresthomes.ng/wp-content/uploads/2023/10/IMG-20231019-WA0001-758x564.jpg",
    items: [
      "Quantity surveying",
      "Proper housing scheme",
      "Home management services",
      "Land usage advice",
    ],
  },
  {
    title: "Logistics",
    description: "",
    image:
      "https://cdn.guardian.ng/wp-content/uploads/2023/09/Seaport-1062x598.jpg",
    items: [
      "Procurement",
      "Terminal leasing",
      "Marine logistics",
      "Freight and ship management",
      "Port and terminal management",
      "Freight forwarding",
      "Custom clearance",
    ],
  },
  {
    title: "Commerce",
    description: "",
    image: "https://i.postimg.cc/SQnNKDX5/haydn-ZT3i-6-XW8-J8-unsplash.jpg",
    items: ["Import", "Export", "Trade services"],
  },
  {
    title: "Infrastructure",
    description: "",
    image:
      "https://i.postimg.cc/FHWj0TZS/Screen-Shot-2025-05-22-at-9-29-04-AM.png",
    items: [
      "Road Construction",
      "Pipeborne Services",
      "Train tracks construction",
    ],
  },
];

const ServiceSection = ({ title, description, image, items }) => (
  <div className="max-w-7xl mx-auto px-4 pb-20">
    <div className="flex flex-col items-center text-center">
      <h1 className="uppercase text-3xl md:text-5xl font-bold pb-5 break-words">
        {title}
      </h1>
      {description && <p className="text-lg md:text-xl mb-4">{description}</p>}
      <article className="mt-10 flex flex-wrap md:flex-nowrap justify-center items-center gap-10 max-md:flex-col-reverse">
        <figure className="w-full md:max-w-[500px] flex-1">
          <img
            className="w-full h-auto max-h-[400px] rounded-3xl object-cover transform hover:scale-105 transition duration-1000 ease-in-out"
            src={image}
            alt={title.toLowerCase()}
          />
        </figure>
        <div className="w-full md:w-1/2">
          <h3 className="font-bold uppercase mb-4 text-left text-lg">
            Our services include:
          </h3>
          <ul className="list-disc list-inside space-y-3 text-left text-base md:text-xl leading-relaxed break-words">
            {items.map((item, index) => (
              <li key={index} className="before:mr-2 before:text-black">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="pt-10 pb-36 bg-white text-[#2c2f73]">
      {servicesData.map((service, index) => (
        <ServiceSection key={index} {...service} />
      ))}
    </section>
  );
};

export default Services;
