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
        <a href="#portfolio" className="HeroButton">
          Projects
        </a>
      </div>
      <img src="/src/assets/fupKYNKcanU.jpg" alt="" />
    </section>
  );
}
