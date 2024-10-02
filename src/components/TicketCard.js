import React from 'react';
import '../styles/TicketCard.css';
import { getPriorityIcon } from '../utils/iconUtils';
import avatarPlaceholder from '../assets/placeholder-avatar.svg';
import featureIcon from '../assets/feature-icon.svg';

const TicketCard = ({ ticket, userName }) => {
    return (
        <div className="ticket-card">
            <div className="ticket-header">
                <span className="ticket-id">{ticket.id}</span>
                <img src={avatarPlaceholder} alt={userName} className="user-avatar" />
            </div>
            <div className="ticket-content">
                <h3 className="ticket-title">{ticket.title}</h3>

              
                <div className="ticket-info">
                    <div className="ticket-meta">
                        <img src={featureIcon} alt="Feature Icon" className="feature-icon" />
                        <span className="feature-request-tag">Feature Request</span>
                    </div>
                    <div className="ticket-priority">
                        <img src={getPriorityIcon(ticket.priority)} alt="Priority Icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;
