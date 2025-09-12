import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SiNamecheap } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaPhone } from "react-icons/fa";

export default function About() {
  return (
    <section id="About" className="pt-[40px] bg-prymary">
      <div className="container">
        {/* Title Animation */}
        <motion.h2
          id="about_title"
          className="text-center text-[48px] font-bold font-prymary text-white mb-[48px]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About
        </motion.h2>

        {/* Paragraph Animation */}
        <motion.p
          className="w-[745px] text-[18px] font-normal font-prymary text-white text-center m-auto pb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I am Rakib, a passionate Frontend Developer to building dynamic and
          responsive web applications. Skilled in HTML, HTML5, CSS, CSS3,
          javascript, React and Tailwind CSS. I help you create websites for
          your business at affordable cost. My objective is to deliver work
          within time and budget that meets the client's requirements.
        </motion.p>

        {/* Info Cards */}
        <div className="about_Info flex flex-wrap items-center justify-between gap-6">
          {/* Single Card */}
          <motion.div
            className="single_About1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link>
              <SiNamecheap className="text-4xl ml-[60px] text-[#85f994c5] hover:scale-[1.2] duration-[.4s]" />
            </Link>
            <h2 className="text-[18px] font-normal font-prymary text-white ml-[50px] mt-[18px]">
              Name
            </h2>
            <h2 className="text-[22px] font-normal font-prymary text-white">
              MD.Rakib Hasan
            </h2>
          </motion.div>

          {/* Email */}
          <motion.div
            className="single_About1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link>
              <MdEmail className="text-4xl text-[#85f994c5] ml-[115px] hover:scale-[1.2] duration-[.4s]" />
            </Link>
            <h2 className="text-[18px] font-normal font-prymary text-white ml-[80px] mt-[18px]">
              Email Address
            </h2>
            <h2 className="text-[22px] font-normal font-prymary text-white">
              ornilhasanridoy@gmail.com
            </h2>
          </motion.div>

          {/* Facebook */}
          <motion.div
            className="single_About1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link>
              <FaFacebook className="text-4xl text-[#85f994c5] ml-[60px] hover:scale-[1.2] duration-[.4s]" />
            </Link>
            <h2 className="text-[18px] font-normal font-prymary text-white ml-[40px] mt-[18px]">
              Facebook
            </h2>
            <h2 className="text-[22px] font-normal font-prymary text-white">
              MD.Rakib Hasan
            </h2>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="single_About1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link>
              <FaPhone className="text-4xl text-[#85f994c5] ml-[60px] hover:scale-[1.2] duration-[.4s]" />
            </Link>
            <h2 className="text-[18px] font-normal font-prymary text-white ml-[50px] mt-[18px]">
              Phone
            </h2>
            <h2 className="text-[22px] font-normal font-prymary text-white">
              +8801904522130
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
