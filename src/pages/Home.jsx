import { Link } from "react-router-dom";
import "./Home.css";

const categories = [
  {
    name: "Interior Paint",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Exterior Paint",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Colour Collections",
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=700&q=85",
  },
];

function Home() {
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

      <main>
        <section className="paint-hero">
          <div className="paint-hero-content" data-aos="fade-right">
            <span className="paint-eyebrow">
              COLOUR YOUR WORLD
            </span>

            <h1>
              Give Your Walls
              <br />
              A <span>Beautiful Story.</span>
            </h1>

            <p>
              Discover beautiful colours and quality paints to
              transform your home into a place you love.
            </p>

            <div className="paint-hero-buttons">
              <Link to="/our-paint" className="paint-btn">
                Explore Paints <i className="bi bi-arrow-right"></i>
              </Link>

              <Link to="/about" className="paint-outline-btn">
                Discover Us
              </Link>
            </div>

            <div className="paint-hero-stats">
              <div>
                <strong>500+</strong>
                <span>Beautiful Shades</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Colour Inspiration</span>
              </div>
            </div>
          </div>

          <div className="paint-hero-image" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=90"
              alt="Beautiful modern interior with elegant wall colours"
            />
            <div className="paint-image-note">
              <i className="bi bi-brush-fill"></i>
              <div>
                <strong>Find Your Colour</strong>
                <span>Make every wall special</span>
              </div>
            </div>
          </div>
        </section>

        <section className="paint-categories section-space">
          <div className="section-heading" data-aos="fade-up">
            <span className="paint-eyebrow">EXPLORE OUR WORLD</span>
            <h2>Colours for Every Corner</h2>
            <p>Find the perfect finish for every space.</p>
          </div>

          <div className="container">
            <div className="row g-4">
              {categories.map((item, index) => (
                <div
                  className="col-md-4"
                  key={item.name}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Link to="/our-paint" className="category-card">
                    <img src={item.image} alt={item.name} />
                    <div className="category-card-overlay">
                      <h3>{item.name}</h3>
                      <span>
                        Explore collection{" "}
                        <i className="bi bi-arrow-up-right"></i>
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="paint-home-cta" data-aos="zoom-in">
          <div>
            <span className="paint-eyebrow">YOUR HOME, YOUR COLOURS</span>
            <h2>Ready to refresh your space?</h2>
            <p>Choose colours that make you feel at home.</p>
            <Link to="/our-paint" className="paint-btn">
              Shop Paints <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
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

export default Home;