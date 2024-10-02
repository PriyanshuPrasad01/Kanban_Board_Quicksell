import React from 'react';
import './GroupingControls.css';
import displayIcon from '../assets/Display.svg'; 

const GroupingControls = ({ onGroupingChange }) => {
    return (
        <div className="grouping-controls">
            <img src={displayIcon} alt="Display" className="filter-icon" />
            <label htmlFor="grouping" className="grouping-label">Grouping</label>
            <select id="grouping" onChange={(e) => onGroupingChange(e.target.value)}>
                <option value="status">Status</option>
                <option value="assignedTo">User</option>
                <option value="priority">Priority</option>
            </select>
        </div>
    );
};

export default GroupingControls;
