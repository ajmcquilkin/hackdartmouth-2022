import React, { useState } from "react";
import styles from "./home.module.scss";
import Link from 'next/link';
import { useDispatch } from "react-redux";
import { createRoomRequest } from "../../store/actionCreators/roomActionCreators";
import { joinRoomRequest } from "../../store/actionCreators/roomActionCreators";
import { useRouter } from "next/router";
import { Button, Input, Ranking, Lobby } from "ui";

export const Home = () => {
  
  const [code, setCode] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [hostId, setHostId] = useState<string>("");
  
  const dispatch = useDispatch();
  const router = useRouter();


  const handleCreateRoom = () => {
    if (!hostId) return;
    dispatch(createRoomRequest(hostId));
    router.push("/create");
  };

  const handleSubmit = () => {
    if (!code || !username) return;
    dispatch(joinRoomRequest(code, username));
    router.push(`/group/${code}`);
  };

  return(
    <div className={styles.nowHome}>
      <div className={styles.inner}>
        <h1 style={{fontSize: "3.6em", textShadow: "1px 1px 1px blue", textAlign:"center"}}>Why We Eat</h1>

        <Input
          title="Username"
          placeholder="i.e Jeff Adams"
          onChange={(e: any) => setUsername(e.target.value)}
          value={username}/>
        <Input
          title="Join Room"
          placeholder="game code"
          onChange={(e: any) => setCode(e.target.value)}
          value={code}/>

        <Button
          text="Join"
          onClick={()=> {handleSubmit}}/>

        <Input
          title="Host Username"
          placeholder="i.e. Ben Franklin"
          onChange={(e: any) => setHostId(e.target.value)}
          value={hostId}/>
        <Button
          text="Create Room"
          onClick={handleCreateRoom}/>
      </div>
        
      </div>
  )
};
