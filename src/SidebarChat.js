import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';

function SidebarChat({ addNewChat }) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        Math.floor(
            setSeed(Math.random() * 5000))
    }, []);

    const createChat = () => {
        const roomName = prompt('Введите имя чата');

        if (roomName) {
            
        }
    };

    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='sidebarChat__info'>
                    <h2>Название чата</h2>
                    <p>Последнее сообщение ...</p>
                </div>
        </div>
    ) : (
        <div onClick={createChat} className='sidebarChat'>
            <h2>Новый чат</h2>
        </div>
    );
};

export default SidebarChat