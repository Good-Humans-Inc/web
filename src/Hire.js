import React from "react";

const Hire = () => {
  return (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto", paddingBottom: "60px" }}>
        <h1>We're Hiring</h1>
      
      <div style={{ marginTop: "20px", marginBottom: "40px", lineHeight: "1.5" }}>
        <p style={{ fontSize: "20px", color: "#666" }}>
          <a href="https://babymilu.com/" style={{ color: "#666" }}>BabyMilu</a> is building a <em>third kind of companionship</em> — not quite friend, not quite pet, but something uniquely comforting for 18–40 y/o young women who don't think of themselves as AI users… until they meet BabyMilu. We're a well-funded, remote-friendly, and passionate crew building emotional rhythms, tiny rituals of comfort, and community magic around an AI plushie bag charm that <em>feels like a companion you bring into your everyday.</em> Our users hang out with BabyMilu while watching anime, knitting sweaters, cooking crepes, and generally treating it like a part of life.
        </p>
        
        <p style={{ marginTop: "20px", fontSize: "22px", color: "#000", fontWeight: "bold" }}>We've already:</p>
        <ul style={{ marginTop: "10px", fontSize: "18px", color: "#000" }}>
          <li>Sold out 100 units in <strong>20 minutes</strong></li>
          <li>Built a <strong>3,500+ member Discord</strong> obsessed with co-building with us</li>
          <li>Grown a community that logs hours with BabyMilu daily</li>
        </ul>
      </div>

      <h2 style={{ marginTop: "40px", marginBottom: "20px", fontSize: "28px" }}>Open Positions</h2>

      <div>
        <div style={{ marginBottom: "20px" }}>
          <a 
            href="https://thread-snow-256.notion.site/BabyMilu-Experienced-Cloud-Infra-Full-time-2fd2b144ff4c809dbea3e488e20bdbf4"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              fontSize: "22px", 
              color: "#000", 
              textDecoration: "underline"
            }}
          >
            Experienced Cloud Infra (Full-time)
          </a>
        </div>
        <div>
          <a 
            href="https://thread-snow-256.notion.site/BabyMilu-Junior-Generalist-Engineer-Full-time-Part-time-2fd2b144ff4c802295c4c7b71f2b65a7"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              fontSize: "22px", 
              color: "#000", 
              textDecoration: "underline"
            }}
          >
            Junior Generalist Engineer (Full-time/Part-time)
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hire;
