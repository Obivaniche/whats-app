import React, { useEffect, useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase/app';


function Chat() {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');
  const [messages, setMesaages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) =>
          setRoomName(snapshot.data().name));
      db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => (
          setMesaages(snapshot.docs.map((doc) =>
            doc.data()
          ))
        ))
    }
  }, [roomId]);

  useEffect(() => {
    Math.floor(
      setSeed(Math.random() * 5000))
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('rooms').doc(roomId)
    .collection('messages').add({
      message: input,
      user: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('');
  };

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='chat__headerInfo'>
          <h3>{roomName}</h3>
          <p>Был(а) в сети{" "}
          {new Date(
            messages[messages.length -1]?.timestamp?.toDate()).toUTCString()}</p>
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
        {messages.map((message) => (
          <p className={`chat__message ${message.user === user.displayName && 'chat__reciver'}`}>
            <span className='chat__name'>{message.user}</span>
            {message.message}
            <span className='chat__timestamp'>
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>

      <div className='chat__footer'>
        <InsertEmoticon />
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} type='text' placeholder='Введите сообщение' />
          <button onClick={sendMessage} type='submit'>Отправить</button>
        </form>
        <Mic />
      </div>
    </div>
  );
};

export default Chat
