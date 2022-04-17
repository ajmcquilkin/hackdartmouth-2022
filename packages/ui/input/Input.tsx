import * as React from "react";
import styles from "./Input.module.scss";

export const Input = (props: any) => {

  return (
    <div className={styles.container}>
      <p className={styles.inputTitle}>{props.title}</p>

      <input className={styles.field} 
        placeholder={props.placeholder} 
        onChange={props.onChange}
        value={props.value}></input>
    </div>
  )
};
