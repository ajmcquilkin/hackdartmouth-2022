import * as React from "react";
import styles from "./LobbyCard.module.scss";

 const LobbyCard = (props: any) => {
  return (
      <p className={styles.text}>{props.name}</p>
  )
};

export default LobbyCard;
