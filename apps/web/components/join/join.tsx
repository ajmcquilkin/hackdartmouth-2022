import * as React from "react";
import styles from "./join.module.scss";
export const Join = () => {
  return(
    <div className={styles.page}>
        <h1 className={styles.header}>Join</h1>
        <input className={styles.input} placeholder="Room Code"></input>
        <button className={styles.submit}>Submit</button>
    </div>
  )
};
