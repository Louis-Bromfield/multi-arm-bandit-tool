import React from 'react';
import './PageFooter.css';
import logo from '../logo.svg';

function PageFooter() {
  return (
    <div className="page-footer">
        <div className="feedback-container">
            <h3>Feedback</h3>
            <p>If you have any ideas as to how we can improve this tool or
            you want to share how you've used the tool, either for research,
            pedagogical, or any other purposes, we would love to hear from you.
            </p>
            {/* Redo with proper form JSX */}
            <h4>Name</h4>
            <input type="text" />
            <br />
            <h4>Institution</h4>
            <input type="text" />
            <br />
            <h4>Comments</h4>
            <input type="text" />
        </div>
        <hr />
        <div className="about-us-container">
            <h3>Creators</h3>
            <div className="creator-container">
                <img src={logo} alt="" />
                <h4>Louis Bromfield</h4>
                <h4>908747@swansea.ac.uk</h4>
            </div>
        </div>
    </div>
  )
}

export default PageFooter;