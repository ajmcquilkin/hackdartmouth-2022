import * as React from "react";
import styles from "./onboard.module.scss";
export const Onboard = () => {
  return(
    <div className={styles.page}>
        <h1 className={styles.title}>Let's find some eats!</h1>
        <div className={styles.form}>
            <div className={styles.field}>
                <h2>Code</h2>
                {/* <p>Code from backend here</p> */}
            </div>
            <div className={styles.field}>
                <h2>Location</h2>
                <input></input>
            </div>
            <div className={styles.field}>
                <h2>Food Preferences</h2>
                <input></input>
            </div>
            <div className={styles.field}>
                <h2>Max # of Choices</h2>
                <input></input>
            </div>
            <div className={styles.field}>
                <h2>Price Range</h2>
                <label htmlFor="price-range"></label>
                <select className={styles.priceRange} name="price-range" id="price-range">
                    <option value="$">$</option>
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>
                    <option value="$$$$">$$$$</option>
                </select>
            </div>
            <div className={styles.members}>
                <h2>Current Diners:</h2>
                <div className={styles.membersList}>
                    {/* Replace this with usernames of ppl who join */}
                    <p>Name</p> 
                    <p>Name</p>
                    <p>Name</p>
                    <p>Name</p>
                    <p>Name</p>
                    <p>Name</p>
                    <p>Name</p>
                    <p>Name</p>
                    <p>Name</p>
                    <p>Name</p>
                    <p>Name</p>
                </div>
            </div>
        </div>
    </div>
  )
};
