import React from 'react';
import TicketCard from './TicketCard';
import '../styles/KanbanColumn.css';
import { getUserName } from '../utils/userUtils';
import { getPriorityIcon, getStatusIcon } from '../utils/iconUtils';
import avatarPlaceholder from '../assets/placeholder-avatar.svg';
import addIcon from '../assets/add.svg'; 
import threeDotMenu from '../assets/3 dot menu.svg'; 

const KanbanColumn = ({ groupKey, tickets, users, ordering, grouping }) => {
    const sortedTickets = sortTickets(tickets, ordering);
    const ticketCount = sortedTickets.length;


    const groupTitle = grouping === 'user' 
        ? (
            <div className="user-column-header">
                <img src={avatarPlaceholder} alt="User Avatar" className="avatar-icon" />
                <span>{getUserName(groupKey, users)}</span>
            </div>
        ) 
        : grouping === 'status'
        ? (
            <div className="status-column-header">
                <img src={getStatusIcon(groupKey)} alt="Status Icon" />
                <span>{groupKey}</span>
            </div>
        ) 
        : (
            <div className="priority-column-header">
                <img src={getPriorityIcon(getPriorityKeyFromLabel(groupKey))} alt="Priority Icon" />
                <span>{groupKey}</span>
            </div>
        );

    return (
        <div className="kanban-column">
            <div className="column-header">
                <h3 className="group-title">
                    {groupTitle}
                    <span className="ticket-count">{ticketCount}</span>
                </h3>
                <div className="header-icons">
                    <img src={addIcon} alt="Add Icon" className="header-icon" />
                    <img src={threeDotMenu} alt="Menu Icon" className="header-icon" />
                </div>
            </div>
            {sortedTickets.length > 0 ? (
                sortedTickets.map((ticket) => (
                    <TicketCard
                        key={ticket.id}
                        ticket={ticket}
                        userName={getUserName(ticket.userId, users)}
                    />
                ))
            ) : (
                <div className="empty-column">No items</div> 
            )}
        </div>
    );
};

const getPriorityKeyFromLabel = (label) => {
    switch (label) {
        case 'Urgent':
            return 4;
        case 'High':
            return 3;
        case 'Medium':
            return 2;
        case 'Low':
            return 1;
        default:
            return 0;
    }
};


const sortTickets = (tickets, ordering) => {
    return tickets.sort((a, b) => {
        if (ordering === 'priority') {
            return b.priority - a.priority;
        } else if (ordering === 'title') {
            return a.title.localeCompare(b.title);
        }
        return 0;
    });
};

export default KanbanColumn;
