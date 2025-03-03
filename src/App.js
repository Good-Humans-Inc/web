import React from "react";
import { motion } from "framer-motion";
import "./App.css";

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

const App = () => {
  return (
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
  );
};

export default App;
