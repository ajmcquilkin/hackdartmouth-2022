import * as React from "react";
import styles from "./Ranking.module.scss";
import Choice from "./circle/Circle"

export const Ranking = (props: any) => {

  let ranks = [1,2,3,4,5]
  return (
    <div className={styles.circles}>
      {ranks.map((data, i) => (
        <Choice
          number={data}
          props={props.getRank}/>
        ))}
      
    </div>
  )
};
