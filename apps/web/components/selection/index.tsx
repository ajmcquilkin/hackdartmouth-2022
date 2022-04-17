import React, { useState } from "react";
import styles from "./selection.module.scss";
import { Button, Ranking } from "ui";

export const Selection = (props: any) => {
  const [selection, setSelection] = useState(0);

  const getSelection = (props: any) => {
    setSelection(props);
    console.log(selection);
  
    // Go to next selection
    // GET RESULTS HERE
  }

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
                <img style={{borderRadius: '10px', maxHeight:'14em', overflow:'true'}}src={props.imageUrl} alt={'image'}/>
        </div>
        <Button
                text="Veto"
                backgroundColor= "lightred"
                /> 
            <Ranking
              getRank={getSelection}/>
    </div>
  )
};
