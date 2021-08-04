import io from 'socket.io-client';
import React, {useState, useEffect} from 'react';

const Chat = () => {
    const [socket] = useState(() => io(':8000'));

  useEffect(()=> {
    console.log('Is this running?');
    socket.on('msg', data => console.log(data));

    return () => socket.disconnect(true);
  },[])
    return (
        <div>
            <h1>socket Test</h1>
        </div>
    )
}

export default Chat
