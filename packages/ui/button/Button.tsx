import * as React from "react";
import styles from "./Button.module.scss";


export const Button = (props: any) => {
  return <button 
          className={styles.button} 
          onClick={props.onClick}>
    {props.text}
    </button>;
};
