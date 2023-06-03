import React, { useEffect, useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material';


function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');

    useEffect(() => {
        Math.floor(
            setSeed(Math.random() * 5000))
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('Ваше сообщение: ', input);
        setInput('');
    };

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='chat__headerInfo'>
                    <h3>Название чата</h3>
                    <p>Был(а) в сети ...</p>
                </div>
                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

            </div>

            <div className='chat__body'>
                <p className={`chat__message ${true && 'chat__reciver'}`}>
                    <span className='chat__name'>Имя отправителя</span>
                    Йоу, собаки! Я Наруто Узумаки!
                    <span className='chat__timestamp'>20:00</span></p>
            </div>

            <div className='chat__footer'>
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type='text'placeholder='Введите сообщение'/>
                    <button onClick={sendMessage} type='submit'>Отправить</button>
                </form>
                <Mic />
            </div>
        </div>
    );
};

export default Chat