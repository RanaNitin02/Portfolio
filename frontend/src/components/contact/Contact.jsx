import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contactImage from '../../assets/contact.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e3kjv67",
        "template_svcjgda",
        form.current,
        "_Hs5SqK4Ttn_qFS4k"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[12vw] bg-[#0b0a17] font-sans text-white"
    >
      <ToastContainer />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold">CONTACT</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 text-lg">
          I’d love to connect! Send me a message or reach out on social media.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 text-center"
        >
          <img
            src={contactImage}
            alt="Web development illustration"
            className="w-96 mx-auto mb-8"
          />

          <h4 className="text-xl font-semibold mb-4">Also Connect On</h4>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://github.com/RanaNitin02"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/nitin-2005-rana"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:rana02nitin@email.com"
              className="hover:text-blue-500"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-white text-center">
            Let's Talk <span className="ml-1">✉️</span>
          </h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Send Message 🚀
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
