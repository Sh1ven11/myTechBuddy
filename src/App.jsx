import logo from "./assets/logo.png"; // put your myTechBuddy logo here
import "./App.css";

export default function App() {
  return (
    <div className="site">
      {/* NAVBAR */}
      <header className="nav">
        <div className="brand">
          <img src={logo} alt="myTechBuddy logo" className="logo" />
        </div>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact" className="btn btn-outline">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>
          Technology Made Simple <span className="accent">for Seniors</span>
        </h1>
        <p className="lead">
          We help senior citizens stay connected with family, use smartphones and
          computers confidently, and stay safe online — at home or over a call.
        </p>
        <div className="cta">
          <a href="#contact" className="btn btn-primary">Get Started</a>
          <a href="tel:+919876543210" className="btn btn-success">Call Support</a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>Our Services</h2>
        <div className="cards">
          <article className="card">
            <h3>📱 Smartphone Help</h3>
            <p>Calls, WhatsApp, photos, contacts & settings made easy.</p>
          </article>
          <article className="card">
            <h3>💻 Computer Basics</h3>
            <p>Email, browsing, video calls, file/folder basics.</p>
          </article>
          <article className="card">
            <h3>🛡️ Online Safety</h3>
            <p>Avoid scams, manage passwords, privacy & updates.</p>
          </article>
          <article className="card">
            <h3>🌐 Social & Video</h3>
            <p>Facebook, YouTube, Zoom, Google Meet, Photos backup.</p>
          </article>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section muted">
        <div className="about">
          <h2>Why myTechBuddy?</h2>
          <ul>
            <li>Large text, clear buttons, patient guidance.</li>
            <li>At-home visits or remote screen-share sessions.</li>
            <li>No jargon — step-by-step, printed or digital notes.</li>
          </ul>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="footer">
        <div className="contact">
          <p className="contact-line">📞 <strong>+91 98765 43210</strong></p>
          <p className="contact-line">✉️ <strong>support@mytechbuddy.com</strong></p>
          <p className="small">© {new Date().getFullYear()} myTechBuddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
