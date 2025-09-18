import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Privacy from "./Privacy";
import "./App.css";

const BabyMiluPopup = ({ onClose }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Auto redirect after 5 seconds
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://babymilu.com';
    }, 5000);

    // Countdown timer
    const countdownTimer = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownTimer);
    };
  }, []);

  const handleRedirect = () => {
    window.location.href = 'https://babymilu.com';
  };

  return (
    <motion.div
      className="popup-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="popup-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2>We are building BabyMilu</h2>
        <p>Redirecting in {countdown} seconds...</p>
        <button onClick={handleRedirect} className="popup-button">
          Check out BabyMilu
        </button>
        <button onClick={onClose} className="popup-close">
          ×
        </button>
      </motion.div>
    </motion.div>
  );
};

const sections = [
  { title: "Good Humans Inc.", content: "" },
  { title: "", content: "All the bones in your body weigh just about 9 kg, yet they can withstand over a ton of force." },
  { title: "", content: "Your heart pumps 260 liters of blood every hour—enough to fill up 5 car fuel tanks." },
  { title: "", content: "An average person burns 85,000 kWh in their lifetime, whereas training GPT-4 used 589 times that." },
  { 
    title: "", 
    content: (
      <>
        <p className="text-2xl">Hey good human, you are that one true miracle.</p>
        <p className="text-2xl">Stay tuned</p>
        <p className="text-sm mt-2">or reach us at <a href="mailto:contact@goodhumans.today" className="text-black underline">contact@goodhumans.today</a></p>
      </>
    )
  }
];

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      <div className="scroll-container">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            {section.title && <h1>{section.title}</h1>}
            {typeof section.content === "string" ? <p>{section.content}</p> : section.content}
          </motion.div>
        ))}
      </div>
      {showPopup && <BabyMiluPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jas-privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;
