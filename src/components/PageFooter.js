import React from 'react';
import './PageFooter.css';
import LouisPic from '../Capture2.PNG';

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
            <form className="feedback-form">
                <fieldset>
                    <div className="feedback-form-item">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input 
                            type="text"
                            className="text-input-short"
                            name="name"
                            size="100" 
                        />
                    </div>
                <br />
                <div className="feedback-form-item">
                    <label htmlFor="institution"><strong>Institution</strong></label>
                    <input 
                        type="text"
                        className="text-input-short"
                        name="institution"
                        size="100" 
                    />
                </div>
                <br />
                <div className="feedback-form-item">
                    <label htmlFor="comments"><strong>Comments</strong></label>
                    <textarea
                        className="text-input-long"
                        name="name"
                        cols="100"
                        rows="5"
                    />
                </div>
                <button>Submit</button>
                </fieldset>
            </form>
        </div>
        <hr />
        <div className="about-us-container">
            <h3>Creators</h3>
            <div className="creator-container">
                <img src={LouisPic} alt="" />
                <h4>Louis Bromfield</h4>
                <h4>Politics PhD Student @ Swansea University</h4>
                <h4>908747@swansea.ac.uk</h4>
            </div>
        </div>
    </div>
  )
}

export default PageFooter;