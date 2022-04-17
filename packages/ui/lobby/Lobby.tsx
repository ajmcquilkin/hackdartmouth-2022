import * as React from "react";
import styles from "./Lobby.module.scss";
import LobbyCard from "./lobbyCard/LobbyCard";

export const Lobby = (props: any) => {

  let users = ['ben', 'adam', 'jeff']
  return (
    <div className={styles.wrapper}>
        <div className={styles.lobby}>
        {users.map((data, i) => (
          <LobbyCard
            name={data}/>
          ))}
      </div>
    </div>
    
      
  )
};
