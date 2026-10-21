import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const CART_KEY = "colorcraft-cart";

function Cart() {
  const [cart, setCart] = useState([]);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
      setCart(Array.isArray(savedCart) ? savedCart : []);
    } catch {
      setCart([]);
    }
  }, []);

  function saveCart(updatedCart) {
    setCart(updatedCart);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
    setCheckoutMessage("");
  }

  function changeQuantity(id, amount) {
    const updatedCart = cart
      .map((item) => {
        if (item.id !== id) return item;

        return {
          ...item,
          quantity: Math.max(1, (item.quantity || 1) + amount),
        };
      });

    saveCart(updatedCart);
  }

  function removeProduct(id) {
    saveCart(cart.filter((item) => item.id !== id));
  }

  const totalItems = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  function handleCheckout() {
    setCheckoutMessage(
      "Your cart is ready! Connect a payment or order service to complete checkout."
    );
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

      <section className="cart-banner">
        <span className="paint-eyebrow">YOUR COLOUR SELECTION</span>
        <h1>Shopping Cart</h1>
        <p>Review your favourite paints before you continue.</p>
      </section>

      <main className="cart-main">
        {cart.length === 0 ? (
          <div className="cart-empty" data-aos="fade-up">
            <i className="bi bi-bag-x"></i>
            <h2>Your cart is empty</h2>
            <p>Discover beautiful shades for your next project.</p>
            <Link to="/our-paint" className="paint-btn">
              Explore Paints <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <section className="cart-items">
              <div className="cart-items-heading">
                <h2>Your Items</h2>
                <span>{totalItems} item(s)</span>
              </div>

              {cart.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.shade || item.category}</p>
                    <strong>
                      ₹{(item.price * (item.quantity || 1)).toLocaleString("en-IN")}
                    </strong>

                    <div className="cart-quantity">
                      <button
                        onClick={() => changeQuantity(item.id, -1)}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>
                      <span>{item.quantity || 1}</span>
                      <button
                        onClick={() => changeQuantity(item.id, 1)}
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="cart-remove"
                    onClick={() => removeProduct(item.id)}
                    aria-label={`Remove ${item.name}`}
                    title="Remove product"
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </article>
              ))}

              <Link to="/our-paint" className="cart-continue">
                <i className="bi bi-arrow-left"></i> Continue Shopping
              </Link>
            </section>

            <aside className="cart-summary">
              <h2>Order Summary</h2>

              <div>
                <span>Total Items</span>
                <strong>{totalItems}</strong>
              </div>

              <div>
                <span>Subtotal</span>
                <strong>₹{totalPrice.toLocaleString("en-IN")}</strong>
              </div>

              <div>
                <span>Delivery</span>
                <strong>Calculated at checkout</strong>
              </div>

              <hr />

              <div className="cart-total">
                <span>Total</span>
                <strong>₹{totalPrice.toLocaleString("en-IN")}</strong>
              </div>

              <button
                className="cart-checkout-btn"
                onClick={handleCheckout}
              >
                Continue to Checkout <i className="bi bi-arrow-right"></i>
              </button>

              {checkoutMessage && (
                <p className="cart-checkout-message" role="status">
                  {checkoutMessage}
                </p>
              )}

              <p className="cart-secure-note">
                <i className="bi bi-shield-check"></i> Secure shopping
                experience
              </p>
            </aside>
          </div>
        )}
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

export default Cart;