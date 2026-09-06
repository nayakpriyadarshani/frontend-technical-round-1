import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <main className="landing">

      {/* Hero Section */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="subtitle">AI Employee Assistant</p>

        <h1>
          Your Smart
          <span> Employee Assistant</span>
        </h1>

        <p className="description">
          Manage your work, connect with employees, explore analytics,
          and get instant help from your AI-powered workplace assistant.
        </p>

        <Link to="/chat">
          <motion.button
            className="primary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </Link>
      </motion.section>

      {/* Features Section */}
      <section className="features-section">

        <div className="section-heading">
          <p className="subtitle">Powerful Features</p>
          <h2>Everything You Need</h2>
        </div>

        <div className="feature-container">

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon">🤖</div>
            <h3>AI Assistant</h3>
            <p>
              Get quick answers and assistance with your everyday work.
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon">👥</div>
            <h3>Employee Directory</h3>
            <p>
              Search and find employee information easily.
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon">📊</div>
            <h3>Analytics</h3>
            <p>
              View important employee and department statistics.
            </p>
          </motion.div>

        </div>
      </section>

    </main>
  );
}

export default Landing;