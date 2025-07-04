import { delay, motion } from "framer-motion";
import logoimg from "/public/fupKYNKcanU.jpg";
import vkimg from "/public/icons/vk.png";
import gitimg from "/public/icons/Octicons-mark-github.svg.png";
import tgimg from "/public/icons/telegram-2048x2048.webp";

export default function HeroSection() {
  const Animation1 = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const Animation2 = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const Animation3 = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.7 }}
      id="home"
      className="HeroContainer"
    >
      <div>
        {" "}
        <motion.h1 variants={Animation1} className="HeroTitle">
          Hello! I am <span style={{ color: "#FF77A8" }}>Nikita</span>
        </motion.h1>
        <motion.p custom={1} variants={Animation1} className="HeroSubtitle">
          I Design and develop fast, reliable, and modern websites and
          applications, focusing on best practices and meticulous attention to
          detail for top-tier quality.
        </motion.p>
        <div className="HeroContact">
          <motion.a
            variants={Animation2}
            custom={2}
            href="#contact"
            className="HeroButton"
          >
            Contact Me →
          </motion.a>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.9 }}
            className="icons"
          >
            <motion.a variants={Animation3} custom={1} href="#">
              <img className="HeroIcons" src={vkimg} alt="" />
            </motion.a>
            <motion.a variants={Animation3} custom={2} href="#">
              <img className="HeroIcons" src={gitimg} alt="" />
            </motion.a>
            <motion.a variants={Animation3} custom={3} href="#">
              <img className="HeroIcons" src={tgimg} alt="" />
            </motion.a>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.7 }}
      >
        <motion.img variants={Animation3} src={logoimg} alt="" />
      </motion.div>
    </motion.section>
  );
}
