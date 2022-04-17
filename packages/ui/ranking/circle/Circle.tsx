import * as React from "react";
import styles from "./Circle.module.scss";


const Choice = (props: any) => {
  return <button className={styles.circle}

          onClick={()=> {props.func(props.number)}}>{props.number}</button>
};

export default Choice;