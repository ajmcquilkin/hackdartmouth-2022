import * as React from "react";
import styles from "./home.module.scss";
import { Button, Input, Ranking, Lobby } from "ui";

export const Home = () => {
  return(
    <div className={styles.nowHome}>
      <div className={styles.inner}>
        <h1 style={{fontSize: "4em", textShadow: "5px 5px 5px black", textAlign:"center"}}>Where We Eat</h1>

        <Input
          title="Join Room"
          placeholder="game code"
          onChange={()=>{}}
          value="state"/>

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
