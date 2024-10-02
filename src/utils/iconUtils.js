import highPriorityIcon from '../assets/Img - High Priority.svg';
import mediumPriorityIcon from '../assets/Img - Medium Priority.svg';
import lowPriorityIcon from '../assets/Img - Low Priority.svg';
import noPriorityIcon from '../assets/No-priority.svg';
import urgentPriorityIcon from '../assets/SVG - Urgent Priority colour.svg';
import doneIcon from '../assets/Done.svg';
import cancelledIcon from '../assets/Cancelled.svg';
import todoIcon from '../assets/To-do.svg'; 
import inProgressIcon from '../assets/in-progress.svg'; 
import backlogIcon from '../assets/Backlog.svg'; 


export const getPriorityIcon = (priority) => {
    switch (priority) {
        case 4:
            return urgentPriorityIcon; 
        case 3:
            return highPriorityIcon;
        case 2:
            return mediumPriorityIcon; 
        case 1:
            return lowPriorityIcon;
        default:
            return noPriorityIcon; 
    }
};

export const getPriorityLabel = (priority) => {
    switch (priority) {
        case 4:
            return 'Urgent';
        case 3:
            return 'High';
        case 2:
            return 'Medium';
        case 1:
            return 'Low';
        default:
            return 'No priority';
    }
};

export const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
        case 'done':
            return doneIcon; 
        case 'cancelled':
            return cancelledIcon; 
        case 'todo':
            return todoIcon; 
        case 'in progress':
            return inProgressIcon; 
        case 'backlog':
            return backlogIcon; 
        default:
            return null; 
    }
};