import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <>
      <header className="paint-navbar">
        <Link to="/" className="paint-logo">
          <i className="bi bi-palette-fill"></i> PAINTORA
        </Link>
        <nav className="paint-nav-links">
          <Link to="/">Home</Link>
          <Link to="/our-paint">Our Paint</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">
            <i className="bi bi-bag"></i> Cart
          </Link>
        </nav>
      </header>

      <section className="about-banner" data-aos="fade-up">
        <span className="paint-eyebrow">A LITTLE ABOUT US</span>
        <h1>We Believe in the Power of Colour</h1>
        <p>Helping you create spaces that feel like home.</p>
      </section>

      <main>
        <section className="about-story">
          <div className="about-story-image" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1000&q=85"
              alt="Painting a wall with a paint roller"
            />
          </div>

          <div className="about-story-content" data-aos="fade-left">
            <span className="paint-eyebrow">OUR STORY</span>
            <h2>Every Colour Has a Story to Tell</h2>
            <p>
              At PAINTORA, we believe that the right colour can
              change the feeling of a room. Our goal is to help you
              discover beautiful shades for your home and workspace.
            </p>
            <p>
              From peaceful neutrals to bold statement colours, we
              make choosing paint a more enjoyable experience.
            </p>
            <Link to="/our-paint" className="paint-btn">
              Explore Our Paints <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </section>

        <section className="about-values">
          <div className="section-heading">
            <span className="paint-eyebrow">WHAT MATTERS TO US</span>
            <h2>Our Values</h2>
          </div>

          <div className="container">
            <div className="row g-4">
              <div className="col-md-4" data-aos="fade-up">
                <div className="about-value-card">
                  <i className="bi bi-palette"></i>
                  <h3>Beautiful Colours</h3>
                  <p>
                    Explore shades that complement your style and
                    bring your ideas to life.
                  </p>
                </div>
              </div>

              <div
                className="col-md-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="about-value-card">
                  <i className="bi bi-shield-check"></i>
                  <h3>Quality First</h3>
                  <p>
                    We focus on helping you find suitable products
                    for your painting projects.
                  </p>
                </div>
              </div>

              <div
                className="col-md-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="about-value-card">
                  <i className="bi bi-heart"></i>
                  <h3>Customer Care</h3>
                  <p>
                    We want your colour selection and shopping
                    experience to feel simple and welcoming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-bottom-cta">
          <h2>Let's Make Something Beautiful</h2>
          <p>Your next favourite colour is waiting for you.</p>
          <Link to="/contact" className="paint-btn">
            Get in Touch <i className="bi bi-arrow-right"></i>
          </Link>
        </section>
      </main>

      <footer className="paint-footer">
        <Link to="/" className="paint-logo">
          <i className="bi bi-palette-fill"></i> PAINTORA
        </Link>
        <p>Beautiful colours. Beautiful spaces.</p>
        <div>
          <Link to="/our-paint">Our Paint</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <small>© 2026 PAINTORA. All rights reserved.</small>
      </footer>
    </>
  );
}

export default About;