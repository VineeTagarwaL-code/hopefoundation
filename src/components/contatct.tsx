"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const Contact = () => {
  const initialFormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormState);
  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData(initialFormState);
  };

  return (
    <>
      <h1 className="text-4xl md:text-5xl flex justify-center items-center font-bold text-[#d47f22] w-full py-10">
        Contact Us

      </h1>
      
      <div className="flex flex-col md:flex-row w-full h-full mb-11 px-4 md:px-14">
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-lg md:text-xl font-bold mb-4 text-blue-500">
            Take the first step, Call us today!
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-lg md:text-xl text-gray-500 font-bold mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-lg md:text-xl text-gray-500 font-bold mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-lg md:text-xl text-gray-500 font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                id="subject"
                name="subject"
                type="text"
                placeholder="Enter the subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-lg md:text-xl text-gray-500 font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                id="message"
                name="message"
                placeholder="Type your message"
                rows={4}
                required
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>    
            </div>

            <div className="flex justify-end md:justify-center mb-10">
              <motion.button
                whileHover={{ translateY: -10 }}
                className="px-4 py-2 gap-3 mt-4 text-lg md:text-2xl bg-[#f09a29] rounded-md border-solid border-2 border-transparent hover:border-orange-300 transition-all text-white cursor-pointer hover:bg-transparent hover:text-orange-300"
              >
                Send
              </motion.button>
            </div>
          </form>
     
        </div>

        <div className="relative md:w-1/2 w-full h-[400px] md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14631.18718070232!2d87.338981!3d23.53981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f77180d5e28d15%3A0x98cf5f7bc2d38501!2sDURGAPUR%20HOPE%20FOUNDATION!5e0!3m2!1sen!2sin!4v1714754512628!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};
