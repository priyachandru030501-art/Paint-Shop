import { useState } from "react";
import { Link } from "react-router-dom";
import "./OurPaint.css";

const products = [
  {
    id: 1,
    name: "Premium Interior Paint",
    category: "Interior",
    price: 1299,
    shade: "Warm White",
    color: "#eee8dc",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "Nature Green Paint",
    category: "Interior",
    price: 1499,
    shade: "Sage Green",
    color: "#899b7d",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    name: "Luxury Exterior Paint",
    category: "Exterior",
    price: 1799,
    shade: "Stone Grey",
    color: "#9b9b96",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "Ocean Blue Paint",
    category: "Interior",
    price: 1399,
    shade: "Ocean Blue",
    color: "#648a9c",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 5,
    name: "Sunshine Yellow Paint",
    category: "Exterior",
    price: 1199,
    shade: "Soft Yellow",
    color: "#e9c56d",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 6,
    name: "Blush Pink Paint",
    category: "Interior",
    price: 1349,
    shade: "Blush Pink",
    color: "#d9a6a5",
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=85",
  },
];

function OurPaint() {
  const [filter, setFilter] = useState("All");
  const [message, setMessage] = useState("");

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

  function addToCart(product) {
    try {
      const cart = JSON.parse(
        localStorage.getItem("colorcraft-cart") || "[]"
      );

      const existing = cart.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("colorcraft-cart", JSON.stringify(cart));
      setMessage(`${product.name} added to your cart!`);
    } catch {
      setMessage("Unable to update cart. Please try again.");
    }
  }

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

      <section className="shop-banner" data-aos="fade-up">
        <span className="paint-eyebrow">THE PAINTORA COLLECTION</span>
        <h1>Find Your Perfect Shade</h1>
        <p>Bring your walls to life with colours made for your home.</p>
      </section>

      <main className="shop-products-section">
        <div className="shop-filter-bar">
          <h2>Our Paint Collection</h2>

          <div className="shop-filter-buttons">
            {["All", "Interior", "Exterior"].map((category) => (
              <button
                key={category}
                className={filter === category ? "active" : ""}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {message && (
          <div className="shop-message" role="status">
            <i className="bi bi-check-circle-fill"></i> {message}
            <Link to="/cart"> View Cart</Link>
            <button
              onClick={() => setMessage("")}
              aria-label="Dismiss message"
            >
              ×
            </button>
          </div>
        )}

        <div className="row g-4">
          {filteredProducts.map((product, index) => (
            <div
              className="col-sm-6 col-lg-4"
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              <article className="shop-product-card">
                <div className="shop-product-image">
                  <img src={product.image} alt={product.name} />
                  <span className="shop-product-tag">
                    {product.category}
                  </span>
                </div>

                <div className="shop-product-info">
                  <div className="shop-shade-row">
                    <span
                      className="shop-shade-swatch"
                      style={{ backgroundColor: product.color }}
                    />
                    <span>{product.shade}</span>
                  </div>

                  <h3>{product.name}</h3>
                  <p>Premium quality colour for a beautiful finish.</p>

                  <div className="shop-product-bottom">
                    <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                    <button onClick={() => addToCart(product)}>
                      <i className="bi bi-bag-plus"></i> Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
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

export default OurPaint;