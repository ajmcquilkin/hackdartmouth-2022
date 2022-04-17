import * as React from "react";
import styles from "./results.module.scss";
import { RankCard } from "ui";

export const Result = (props: any) => {
  let ranks =['1st', '2nd', '3rd']

  
  return(
    <div className={styles.page}>
        <h1 className={styles.header}>RESULTS</h1>
        
        {ranks.map((data, i) => (
          <div className={styles.ranks}>
            <RankCard
              name="Joe's Pizza"
              place={data}
              imageUrl="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="
              cardInfo="7 Carmine St, New York"/>
          </div>
        ))}
    </div>
  )
};
