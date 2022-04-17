import React, { useState } from "react";
import styles from "./selection.module.scss";
import { Button, Ranking } from "ui";

export const Selection = (props: any) => {
  

  return(
    <div className={styles.page}>
        <header className={styles.header}>
            <h1 className={styles.title}>{props.name}</h1>
        </header>
        <div className={styles.info}>
            <p className={styles.trait}>{props.location}</p>   
            <div className={styles.categoryPrice}>
                <p className={styles.trait}>{props.category}</p> 
                <p className={styles.trait}>{props.price}</p>
            </div>
            {/* <p className={styles.trait}>Allergies</p> */}
                <img style={{objectFit:"cover", borderRadius: '10px', maxHeight:'14em', overflow:'true'}}src={props.imageUrl} alt={'image'}/>
        </div>
          <Button
                text="Veto"
                backgroundColor= "lightred"
                onClick={props.vetoed}
          /> 
            <Ranking
              id = {props.id}
              getRank={props.getSelection}/>
    </div>
  )
};
