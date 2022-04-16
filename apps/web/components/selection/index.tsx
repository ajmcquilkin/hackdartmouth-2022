import * as React from "react";
import styles from "./selection.module.scss";
export const Selection = () => {
  return(
    <div className={styles.page}>
        <header className={styles.header}>
            <h1 className={styles.title}>Restaurant Name</h1>
        </header>
        <div className={styles.info}>
            <p className={styles.trait}>Placeholder Location</p>   
            <p className={styles.trait}>Placeholder Category</p> 
            <p className={styles.trait}>$$$</p>
            <p className={styles.trait}>Allergies</p>
            <div className={styles.images}>
                <img src="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="/>
                <img src="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="/>
                <img src="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="/>
                <img src="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="/>
                <img src="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="/>
                <img src="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="/>
            </div> 
            <button className={styles.veto}>Veto</button>
            <h2>Rate:</h2> 
            <div className={styles.ratings}>
                <button className={styles.rating}>1</button>
                <button className={styles.rating}>2</button>
                <button className={styles.rating}>3</button>
                <button className={styles.rating}>4</button>
                <button className={styles.rating}>5</button>
            </div>
        </div>
    </div>
  )
};
