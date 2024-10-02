import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import Header from './components/Header';
import './App.css';

function App() {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);

    const [grouping, setGrouping] = useState(() => {
        return sessionStorage.getItem('grouping') || 'status';
    });

    const [ordering, setOrdering] = useState(() => {
        return sessionStorage.getItem('ordering') || 'priority';
    });

    useEffect(() => {
        sessionStorage.setItem('grouping', grouping);
    }, [grouping]);

    useEffect(() => {
        sessionStorage.setItem('ordering', ordering);
    }, [ordering]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
                const data = await response.json();
                setTickets(data.tickets);
                setUsers(data.users);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <Header setGrouping={setGrouping} setOrdering={setOrdering} grouping={grouping} ordering={ordering} />
            <KanbanBoard tickets={tickets} users={users} grouping={grouping} ordering={ordering} />
        </div>
    );
}

export default App;
