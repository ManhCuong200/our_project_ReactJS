import React from "react";

const Navbar = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-50 flex items-center justify-between px-[55px] h-[90px] bg-transparent backdrop-blur-sm">
      <img
        className="max-w-[190px]"
        src="https://napaglobal.com/img/logo/logo_napa.png"
        alt="logo"
      />

      <nav className="flex items-center gap-10 text-[16px] font-medium relative text-white">
        <div className="relative group flex items-center gap-1 cursor-pointer">
          <span className="text-[#6ea544] font-semibold group-hover:text-[#84b857] transition-colors">
            Company
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-2 h-2 mt-[2px] transition-transform duration-200 group-hover:rotate-180 text-white"
          >
            <polygon points="8,13 0,5 16,5"></polygon>
          </svg>

          <div className="absolute left-0 mt-3 w-48 bg-white rounded-lg shadow-lg py-2 text-gray-700 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              About Us
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Our Team
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Careers
            </a>
          </div>
        </div>

        <div className="relative group flex items-center gap-1 cursor-pointer">
          <span className="group-hover:text-[#84b857] transition-colors">
            Our Services
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-2 h-2 mt-[2px] transition-transform duration-200 group-hover:rotate-180 text-white"
          >
            <polygon points="8,13 0,5 16,5"></polygon>
          </svg>

          <div className="absolute left-0 mt-3 w-56 bg-white rounded-lg shadow-lg py-2 text-gray-700 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Web Development
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Mobile App
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              UI/UX Design
            </a>
          </div>
        </div>

        <a href="#" className="hover:text-[#84b857] transition-colors">
          News
        </a>
        <a href="#" className="hover:text-[#84b857] transition-colors">
          Why NAPA?
        </a>

        <a
          href="#"
          className="inline-block bg-[#6ea544] text-white italic font-semibold px-8 py-3 rounded-[2px] -skew-x-[12deg] shadow-sm hover:bg-[#7fb853] transition-all duration-200"
        >
          <span className="inline-block skew-x-[12deg]">Contact</span>
        </a>

        <div className="flex items-center gap-4 ml-4 relative">
          <i className="fa-regular fa-sun text-white text-lg cursor-pointer"></i>

          <div className="flex items-center gap-1">
            <img
              src="https://napaglobal.com/img/US.svg"
              alt="US Flag"
              className="w-[28px] h-auto object-cover cursor-default"
            />

            <div className="relative group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-2 h-2 text-white cursor-pointer transition-transform duration-200 group-hover:rotate-180"
              >
                <polygon points="8,13 0,5 16,5"></polygon>
              </svg>

              <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg py-2 text-gray-700 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <img
                    src="https://napaglobal.com/img/US.svg"
                    alt="English"
                    className="w-9 h-auto"
                  />
                  <span>English</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <img
                    src="https://flagcdn.com/w20/jp.png"
                    alt="Japan"
                    className="w-9 h-auto"
                  />
                  <span>Japan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
