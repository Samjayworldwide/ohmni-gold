import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="py-28 bg-[#2c2f73] overflow-hidden">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-6xl max-md:text-4xl xl:text-10xl text-white text-center font-bold font-heading tracking-px-n leading-none md:max-w-4xl mx-auto">
          95% of industry leaders trust Ohmni Gold Logistika to build value
          across every sector we serve. Are you ready to grow with us?
        </h2>
        <div className="mb-16 md:max-w-max mx-auto">
          <button
            type="button"
            className="py-4 px-6 w-full text-[#2c2f73] font-medium rounded-xl shadow-6xl focus:ring focus:ring-gray-300 bg-white hover:bg-gray-100 transition ease-in-out duration-200"
          >
            Contact Us Now!
          </button>
        </div>
        <p className="mb-9 text-white text-center font-medium leading-relaxed">
          Trusted by 100+ construction experts
        </p>
        <div className="flex flex-col mb-5 justify-center items-center text-white">
          <i className="bi bi-envelope-fill mr-2"></i>
          <p>
            <strong>Email: </strong>coughers2002@gmail.com
          </p>
        </div>
        <hr className="text-white"></hr>
        <div className="flex flex-col mb-5 justify-center items-center text-white pt-5">
          <i className="bi bi-telephone-fill"></i>
          <p className="flex flex-col">
            <strong>Call: </strong>08062062681
            <p>09096399103</p>
          </p>
        </div>
        <hr className="text-white"></hr>
        <div className="flex flex-col mb-5 justify-center items-center text-white pt-5">
          <i className="bi bi-building-fill"></i>
          <p>
            <strong>Address: </strong>plot 225 Kugbo cadastral Abuja
          </p>
        </div>
        <hr className="text-white"></hr>
      </div>
    </section>
  );
};

export default ContactUs;
