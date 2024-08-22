import { ChangeEvent, useEffect, useState } from 'react'
import io from 'socket.io-client';
const socket = io('http://localhost:3300');

const HomeChat = () => {

    const [myMsg, setMyMsg] = useState("");
    const [recievedmsg, setRecievedmsg] = useState("");

    function handleMessage(e: ChangeEvent<HTMLInputElement>) {
        setMyMsg(e.target.value);
    }

    const sendMessage = () => {
        if (myMsg === "") return;
        socket.emit("send_message", { message: myMsg })
        setMyMsg("");
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            alert(data.message);
        })
    }, [socket]);

    return (
        <div className='flex flex-col gap-3'>
            <input type="text" placeholder='Type Message . . . ' value={myMsg} onChange={handleMessage} className='w-1/3 m-auto p-2 outline-double rounded' />
            <button onClick={sendMessage} className="p-2 border w-1/6 m-auto bg-slate-200 rounded">Send Message</button>
        </div>
    )
}


export default HomeChat