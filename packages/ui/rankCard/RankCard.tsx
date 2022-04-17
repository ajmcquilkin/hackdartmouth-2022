import * as React from "react";
import styles from "./RankCard.module.scss";

export const RankCard = (props: any) => {

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.overlay}></div>
          <div className={styles.cardPlace}>{props.place}</div>

          <img
          src={props.imageUrl} 
          alt={props.name}/>
          <div className={styles.cardTitle}>{props.name}</div>
          <div className={styles.cardInfo}>{props.cardInfo}</div>
      </div>
    </div>
  )
};
