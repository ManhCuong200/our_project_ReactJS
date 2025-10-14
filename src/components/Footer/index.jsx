import React from "react";
import Youtube from "../../assets/youtube.png";

const Footer = () => {
  return (
    <footer
      className="relative text-white pt-7 pb-8"
      style={{
        backgroundImage: `url('https://napaglobal.com/img/baner-footer.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="md:w-[30%]">
          <img
            src="https://napaglobal.com/img/logo/logo_napa-mobile.png"
            alt="NAPA Global"
            className="w-[180px] mb-4 brightness-0 invert contrast-100 "
          />

          <p className="font-semibold text-white mb-2">
            Phone:{" "}
            <span className="font-normal text-[#e5e5e5]">
              (+84) 901 946 329
            </span>
          </p>
          <p className="font-semibold text-white mb-6">
            Email:{" "}
            <span className="font-normal text-[#e5e5e5]">
              contact@napaglobal.com
            </span>
          </p>

          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://napaglobal.com/img/footer/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6 hover:opacity-80 cursor-pointer"
            />
            <img
              src="https://napaglobal.com/img/footer/facebook.svg"
              alt="Facebook"
              className="w-6 h-6 hover:opacity-80 cursor-pointer"
            />
            <img
              src="https://napaglobal.com/img/footer/twitter.svg"
              alt="Twitter"
              className="w-6 h-6 hover:opacity-80 cursor-pointer"
            />
            <img
              src={Youtube}
              alt="YouTube"
              className="h-6 w-[60px] object-contain hover:opacity-80 cursor-pointer -ml-4"
            />
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <div className="flex gap-8 items-center">
              <div className="flex flex-col items-center">
                <img
                  src="https://napaglobal.com/img/ISO_9001-2015%201.svg"
                  alt="ISO 9001"
                  className="w-[60px]"
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://napaglobal.com/img/ISO_27001-2015.svg"
                  alt="ISO 27001"
                  className="w-[60px]"
                />
              </div>
            </div>

            <p className="text-sm text-[#ccc] mt-4">
              © 2024 NAPA Global All Rights Reserved.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full md:w-[65%] gap-x-20">
          <div className="min-w-[150px]">
            <h3 className="font-semibold text-white mb-4">Information</h3>
            <ul className="space-y-3 text-[#ddd] text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Why NAPA?</li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">News</li>
            </ul>
          </div>

          <div className="min-w-[180px]">
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-[#ddd] text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Projects</li>
              <li className="hover:text-white cursor-pointer">Technologies</li>
              <li className="hover:text-white cursor-pointer">
                Cooperation Models
              </li>
            </ul>
          </div>

          <div className="min-w-[250px]">
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-3 text-[#ddd] text-sm">
              <li className="hover:text-white cursor-pointer">AI Solutions</li>
              <li className="hover:text-white cursor-pointer">
                Blockchain Solutions
              </li>
              <li className="hover:text-white cursor-pointer">
                Game Development
              </li>
              <li className="hover:text-white cursor-pointer">
                Mobile Application Development
              </li>
              <li className="hover:text-white cursor-pointer">
                Web Application Development
              </li>
              <li className="hover:text-white cursor-pointer">
                Embedded Systems
              </li>
              <li className="hover:text-white cursor-pointer">
                Quality Control & Testing
              </li>
              <li className="hover:text-white cursor-pointer">JODC</li>
              <li className="hover:text-white cursor-pointer">
                Offshore Development
              </li>
              <li className="hover:text-white cursor-pointer">
                Software Development for Startups
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
