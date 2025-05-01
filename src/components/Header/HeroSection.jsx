export default function HeroSection() {
  return (
    <section className="HeroContainer">
      <div>
        {" "}
        <h1 className="HeroTitle">
          Hello! I am <span style={{ color: "#FF77A8" }}>Nikita</span>
        </h1>
        <p className="HeroSubtitle">
          I design and develop fast, reliable, and modern websites and
          applications, focusing on best practices and meticulous attention to
          detail for top-tier quality.
        </p>
        <div className="HeroContact">
          <a href="#portfolio" className="HeroButton">
            Contact Me →
          </a>
          <div className="icons">
            <a href="#">
              <img
                className="HeroIcons"
                src="/src/assets/icons/vk.png"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="HeroIcons"
                src="/src/assets/icons/Octicons-mark-github.svg.png"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="HeroIcons"
                src="/src/assets/icons/telegram-2048x2048.webp"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <img src="/src/assets/fupKYNKcanU.jpg" alt="" />
      <div class="scroll-indicator">
        <button>
          Scroll Down <span style={{ color: "#FF77A8" }}>↓</span>{" "}
        </button>
      </div>
    </section>
  );
}
