import React from "react";
import capcha from "../../assets/capcha.png";

const ConsultationSection = () => {
  return (
    <section className="relative min-h-[680px] bg-[#fff] flex flex-col align-center">
      <div className="w-full">
        <img
          src="https://napaglobal.com/img/pink-contact-form.svg"
          alt="background wave"
          className="w-full min-h-[375px]"
        />
      </div>

      <div className="absolute inset-0 flex items-start justify-center pt-[60px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div className="relative text-center lg:text-left">
            <div className="z-10 relative">
              <h2 className="text-[28px] sm:text-[40px] font-bold text-[#681c66] leading-[1.2] mb-3">
                Get free consultation
              </h2>
              <p className="text-gray-800 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-0 leading-[1.9] font-sans font-normal">
                A free consultation is available to discuss your business needs,
                no obligation, just a friendly chat to work out how we can help.
              </p>
            </div>

            <img
              src="https://napaglobal.com/img/Group%20555contact.svg"
              alt="plane"
              className="hidden sm:block absolute -bottom-[260px] left-[-100px] w-full animate-float"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.08)] w-full p-6 sm:p-10">
            <form className="flex flex-col space-y-5 sm:space-y-6">
              <input
                type="text"
                placeholder="Your name*"
                className="border border-gray-300 rounded-lg p-3"
                required
              />
              <input
                type="email"
                placeholder="Email*"
                className="border border-gray-300 rounded-lg p-3"
                required
              />
              <textarea
                placeholder="Describe your request"
                rows="4"
                className="w-full min-h-[120px] border border-gray-300 rounded-lg p-3 resize-y"
              ></textarea>

              <div className="flex flex-col sm:flex-row items-center justify-between border border-gray-300 bg-[#fafafa] p-3 sm:p-2 w-full sm:w-60 ">
                <div className="flex items-center gap-2 mb-2 sm:mb-0">
                  <input
                    type="checkbox"
                    id="not-robot"
                    className="w-9 h-6 border border-gray-300"
                  />
                  <label
                    htmlFor="not-robot"
                    className="text-[13px] sm:text-[14px] cursor-pointer text-gray-950 select-none leading-[1.2]"
                  >
                    Tôi không phải là người máy
                  </label>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-4 rounded-sm flex items-center justify-center">
                    <img src={capcha} alt="captcha" />
                  </div>
                  <div className="text-center text-xs">
                    <div className="text-[10px]">reCAPTCHA</div>
                    <div className="text-[8px] text-gray-500 whitespace-nowrap">
                      Bảo mật - Điều khoản
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#6ea544] text-white font-semibold py-3 sm:py-4 rounded-lg hover:bg-[#7fb853] transition-all duration-200"
              >
                Get it Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="fixed right-3 sm:right-6 bottom-3 sm:bottom-6 flex flex-col gap-3 sm:gap-4 z-50">
        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer">
          <img
            src="https://napaglobal.com/_next/static/media/whatsapp.1472e4d7.png"
            alt="WhatsApp"
            className="w-[60px] h-[60px] object-contain"
          />
        </div>

        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer">
          <img
            src="https://napaglobal.com/_next/static/media/telegram.d19f62a5.png"
            alt="Telegram"
            className="w-[60px] h-[60px] object-contain"
          />
        </div>

        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/892/892692.png"
            alt="Scroll to top"
            className="w-[60px] h-[60px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
