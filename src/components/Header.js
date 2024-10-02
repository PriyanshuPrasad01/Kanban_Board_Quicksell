import React from 'react';
import '../styles/Header.css';

const Header = ({ setGrouping, setOrdering, grouping, ordering }) => {
    return (
        <header className="header">
            <div className="grouping-controls">
                <label htmlFor="grouping">Grouping:</label>
                <select
                    id="grouping"
                    value={grouping} 
                    onChange={(e) => setGrouping(e.target.value)}
                >
                    <option value="status">Status</option>
                    <option value="priority">Priority</option>
                    <option value="user">User</option>
                </select>

                <label htmlFor="ordering">Ordering:</label>
                <select
                    id="ordering"
                    value={ordering} 
                    onChange={(e) => setOrdering(e.target.value)}
                >
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </header>
    );
};

export default Header;
