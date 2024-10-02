import React from 'react';
import KanbanColumn from './KanbanColumn';
import '../styles/KanbanBoard.css';
import { getPriorityLabel } from '../utils/iconUtils';

const KanbanBoard = ({ tickets, users, grouping, ordering }) => {
    const groupedTickets = groupTickets(tickets, grouping);

    return (
        <div className="kanban-board">
            <div className="columns-container">
                {Object.keys(groupedTickets).map((groupKey) => (
                    <KanbanColumn
                        key={groupKey}
                        groupKey={groupKey}
                        tickets={groupedTickets[groupKey]}
                        users={users}
                        grouping={grouping}
                        ordering={ordering}
                    />
                ))}
            </div>
        </div>
    );
};


const allStatuses = ['todo', 'In progress', 'Backlog', 'Done', 'Cancelled'];


const groupTickets = (tickets, grouping) => {
    const groups = {};

    if (grouping === 'status') {
       
        allStatuses.forEach(status => {
            groups[status.toLowerCase()] = []; 
        });

       
        tickets.forEach(ticket => {
            const status = ticket.status.toLowerCase(); 
            if (groups[status]) {
                groups[status].push(ticket);
            } else {
                groups[status] = [ticket];
            }
        });
    } else if (grouping === 'user') {
        tickets.forEach(ticket => {
            const userGroup = ticket.userId;
            if (!groups[userGroup]) {
                groups[userGroup] = [];
            }
            groups[userGroup].push(ticket);
        });
    } else if (grouping === 'priority') {
        tickets.forEach(ticket => {
            const priorityGroup = getPriorityLabel(ticket.priority);
            if (!groups[priorityGroup]) {
                groups[priorityGroup] = [];
            }
            groups[priorityGroup].push(ticket);
        });
    }

    return groups;
};


export default KanbanBoard;
