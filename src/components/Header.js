import React from 'react';

function header() {
  return (
    <header 
        className="home-header"
        style={{ width: "90%", margin: "0 auto" }}>
        <h2>Multi-Arm Bandit Tool</h2>
        <h4>Version 1.0.0</h4>
        <p>Welcome to our Multi-Arm Bandit online tool. This is free-to-use
        for everyone, no restrictions and open-source. It can handle real-world
        data for experimental purposes, and also has the ability to simulate experiments
        for pedagogical purposes.</p>
        <p>Use the tabs below to navigate, feel free to leave a testimonial
        letting us know how you used our tool, or drop us some feedback for
        how we can improve it.</p>
    </header>
  )
}

export default header;