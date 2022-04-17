import React, { useState } from "react";
import styles from "./home.module.scss";
import { Button, Input, Ranking, Lobby } from "ui";

export const Home = () => {
  const [code, setCode] = useState('');
  return(
    <div className={styles.nowHome}>
      <div className={styles.inner}>
        <h1 style={{fontSize: "3.6em", textShadow: "1px 1px 1px blue", textAlign:"center"}}>Why We Eat</h1>

        <Input
          title="Join Room"
          placeholder="game code"
          onChange={(e: any) => setCode(e.target.value)}
          value={code}/>

        <Button
          text="Join"
          onClick={()=> console.log("Join Room")}/>

        <Button
          text="Create Room"
          onClick={()=> console.log("Create Room")}/>
      </div>
        
      </div>
  )
};
