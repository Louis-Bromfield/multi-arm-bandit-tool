import React from 'react';
import './TabSelector.css';

function TabSelector() {
  return (
    <div className="tab-selector">
        <div className="tab-selector-option">
            <h3>MAB Tool</h3>
        </div>
        <div className="tab-selector-option">
            <h3>Tool Explained</h3>
        </div>
        <div className="tab-selector-option">
            <h3>Multi-Arm Bandits Explained</h3>
        </div>
    </div>
  )
}

export default TabSelector;