import React, { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => {
    document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = 'hidden';
    };
  }, []);

  return (
    <div style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        lineHeight: '1.6',
        maxWidth: '800px',
        margin: '40px auto',
        padding: '0 20px',
        color: '#333'
    }}>
        <h1 style={{color: '#222'}}>Privacy Policy for Jas</h1>
        <p><strong>Effective Date:</strong> June 21, 2025</p>

        <p>Thank you for using <em>Jas</em>! Your privacy is very important to us. This Privacy Policy explains what information we collect and how we use it.</p>

        <h2 style={{color: '#222'}}>Information We Collect</h2>
        <p><em>Jas</em> is designed to be simple, fun, and privacy-friendly.</p>
        <p>We do <strong>NOT</strong>:</p>
        <ul>
            <li>Require account sign-in</li>
            <li>Collect personal information such as your name, email, or phone number</li>
            <li>Track your location</li>
            <li>Share any data with third parties</li>
        </ul>

        <h2 style={{color: '#222'}}>How We Use Information</h2>
        <p>Photos you take inside the app stay on your device and are used solely to generate your food stickers and reports.</p>
        <p>The app may collect anonymous app usage data (such as crash logs or performance statistics) to help us improve the app experience. This data is collected using Apple's built-in analytics tools and is <strong>never shared or sold</strong>.</p>

        <h2 style={{color: '#222'}}>Third-party Services</h2>
        <p><em>Jas</em> does not use any third-party tracking SDKs or advertising services.</p>
        <p>We use Apple-provided frameworks for features like:</p>
        <ul>
            <li>Camera access (for food photos)</li>
            <li>Haptic feedback</li>
            <li>Local storage</li>
        </ul>

        <h2 style={{color: '#222'}}>Your Choices</h2>
        <p>Because <em>Jas</em> does not require an account or store data externally, there is nothing you need to opt out of. You can delete the app at any time to remove all data stored on your device.</p>

        <h2 style={{color: '#222'}}>Contact</h2>
        <p>If you have any questions about this Privacy Policy, you can contact us at:</p>
        <p>Email: <strong>contact@goodhumans.today</strong></p>

        <h2 style={{color: '#222'}}>Updates</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted here.</p>
    </div>
  );
};

export default Privacy; 