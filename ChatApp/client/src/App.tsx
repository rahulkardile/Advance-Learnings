import { ChangeEvent, useEffect, useState } from 'react'
import io from 'socket.io-client';
const socket = io('http://localhost:3300');

function App() {

  const [myMsg, setMyMsg] = useState("");

 function handleMessage(e: ChangeEvent<HTMLInputElement>){
  setMyMsg(e.target.value);
 }

  const sendMessage = () =>{
    if(myMsg === "") return;
    socket.emit("send_message", {message: myMsg})

    setMyMsg("");
  }

  useEffect(()=>{
    socket.on("receive_message", (data)=>{
      alert(data.message);
    })
  },[socket]);

  return (
    <>
      <input type="text" placeholder='Type Message . . . ' value={myMsg} onChange={handleMessage} />
      <button onClick={sendMessage}>Send Message</button>
    </>
  )
}

export default App;
