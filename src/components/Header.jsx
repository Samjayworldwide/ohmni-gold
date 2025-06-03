import React, { useState } from "react";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section id="home" className="relative pb-20">
      <div className="container mx-auto overflow-hidden">
        <div className="relative z-20 flex items-center justify-between px-4 py-5 bg-transparent">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto mr-14">
                <a
                  href="/"
                  className="font-bold text-4xl max-md:text-2xl uppercase flex flex-col items-start text-left text-[#2c2f73]"
                >
                  <h1>Ohmni Gold</h1>
                  <h1>Logistika Ltd</h1>
                </a>
              </div>
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center mr-16">
                  <li className="mr-9 last:mr-0 font-medium hover:text-red-700 text-[#2c2f73] text-2xl">
                    <a href="#home">Home</a>
                  </li>

                  <li className="mr-9 last:mr-0 font-medium hover:text-red-700 text-[#2c2f73] text-2xl">
                    <a href="#services">Services</a>
                  </li>

                  <li className="mr-9 last:mr-0 font-medium hover:text-red-700 text-[#2c2f73] text-2xl">
                    <a href="#about">About Us</a>
                  </li>

                  <li className="mr-9 last:mr-0 font-medium hover:text-red-700 text-[#2c2f73] text-2xl">
                    <a href="#contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex justify-center">
              <div className="flex flex-col uppercase font-bold text-3xl text-[#2c2f73] max-md:hidden">
                <i class="bi bi-tools"></i>
                <p>ogl ltd</p>
              </div>
              <div className="w-auto lg:hidden ml-3 mt-5">
                <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                  <svg
                    className="text-indigo-600"
                    width="51"
                    height="51"
                    viewBox="0 0 56 56"
                    fill="#2c2f73"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="56" height="56" rx="28" fill="#2c2f73" />
                    <path
                      d="M37 32H19M37 24H19"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {mobileNavOpen && (
          <div className="fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
            <div
              onClick={() => setMobileNavOpen(false)}
              className="fixed inset-0 bg-gray-800 opacity-80"
            ></div>
            <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
              <div className="flex flex-wrap justify-between">
                <div className="w-full">
                  <div className="flex items-center justify-between -m-2">
                    <div className="w-auto p-2">
                      <a className="inline-block" href="#">
                        <div className="flex flex-col uppercase font-bold text-xl text-[#2c2f73]">
                          <i class="bi bi-tools"></i>
                          <p>ogl ltd</p>
                        </div>
                      </a>
                    </div>
                    <div className="w-auto p-2">
                      <button onClick={() => setMobileNavOpen(false)}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="#2c2f73"
                        >
                          <path
                            d="M6 18L18 6M6 6L18 18"
                            stroke="#111827"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center py-16 w-full">
                  <ul
                    onClick={(e) => {
                      if (e.target.tagName === "A") {
                        setMobileNavOpen(false);
                      }
                    }}
                  >
                    <li className="mb-12 last:mb-0">
                      <a
                        className="font-medium hover:text-red-700 text-[#2c2f73] text-2xl"
                        href="#home"
                      >
                        Home
                      </a>
                    </li>

                    <li className="mb-12 last:mb-0">
                      <a
                        className="font-medium hover:text-red-700 text-[#2c2f73] text-2xl"
                        href="#services"
                      >
                        Services
                      </a>
                    </li>

                    <li className="mb-12 last:mb-0">
                      <a
                        className="font-medium hover:text-red-700 text-[#2c2f73] text-2xl"
                        href="#about"
                      >
                        About Us
                      </a>
                    </li>

                    <li className="mb-12 last:mb-0">
                      <a
                        className="font-medium hover:text-red-700 text-[#2c2f73] text-2xl"
                        href="#contact"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto grid gap-y-[8rem] gap-x-[4rem] md:grid-cols-2 pt-28">
        <div className="flex flex-col items-start text-left">
          <h1 className="text-5xl font-bold text-[#2c2f73] break-words">
            Your Trusted Partner in
            <div>Oil & Gas, Real Estate, Commerce and Infrastructure</div>
          </h1>
          <p className="text-xl mt-5 text-[#2c2f73]">
            Delivering excellent services to strategic investments that
            transform projects.
          </p>
          <h3 className="font-bold mt-5 text-[#2c2f73] text-2xl">
            Our Core values
          </h3>
          <p className="text-[#2c2f73] italic text-xl">
            Integrity and foresight
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid gap-y-[2rem] gap-x-[1rem] md:grid-cols-2">
          <img
            className="mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000 h-64 w-72 rounded-3xl object-cover"
            src="https://cdn.thenationonlineng.net/wp-content/uploads/2023/02/13224252/Makariors-home.jpg"
            alt=""
          />
          <img
            className="mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000 h-64 w-72 rounded-3xl object-cover"
            src="https://clearingandforwardingnigeria.com/wp-content/uploads/2018/06/ship-2-1024x680.jpg"
            alt=""
          />
          <img
            className="mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000 h-64 w-72 rounded-3xl object-cover"
            src="https://www.isoilmeter.it/media/24rkvew4/truck-loading-sigemi.jpg?anchor=center&mode=crop&width=800&height=450&format=webp&rnd=133250964516570000"
            alt=""
          />
          <img
            className="mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000 h-64 w-72 rounded-3xl object-cover"
            src="https://wc1.prod1.arlocdn.net/p/888eb62aa1004f8d9a8b31e13901e166/d/tH5YCdMMcdzzzKLJBYakcpED1PW3FITtgE3PqYkn1Lk6Pfg9/Basic%20Road%20Constr%20Principals.jpg
"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
