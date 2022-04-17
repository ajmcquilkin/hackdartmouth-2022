import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hostStartRequest } from "../../store/actionCreators/socketActionCreators";
import styles from "./onboard.module.scss";
import { Button, Input, Ranking, Lobby } from "ui";
import { updateRoomRequest } from "../../store/actionCreators/roomActionCreators";
import { IRoom, RootAppState } from "schema";
import { useRouter } from "next/router";


export const Onboard = () => {
    const [location, setLocation] = useState('');
    const [foodPref, setFoodPref] = useState('');
    const [maxChoices, setMaxChoices] = useState('');
    const [price, setPrice] = useState('');

    const router = useRouter();
    const dispatch = useDispatch();

    const room = useSelector((state: RootAppState) => state.room.currentRoom);
    
    const handleSubmit = () => {
        console.log('room', room);
        
        const updatedRoom = {
            ...room,
            location: location || room?.location,
            foodPref: foodPref || room?.foodPref,
            maxChoices: Number(maxChoices) || room?.maxChoices,
            price: price || room?.price
        } as IRoom;
        
        dispatch(updateRoomRequest(updatedRoom));
        router.push(`/group/${room?.id}`)
    };  
  
  return(
    <div className={styles.page}>
        <h1 className={styles.title}>Let&apos;s Find Some Eats!</h1>
        <div className={styles.form}>
            <div className={styles.field}>
                <h2>Code</h2>
                {/* <p>Code from backend here</p> */}
            </div>
            <Input
                title="Location"
                placeholder="i.e New York City"
                onChange={(e: any) => setLocation(e.target.value)}
                value={location}/>
            <Input
                title="Food Preferences"
                placeholder="i.e Chinese, Mexican"
                onChange={(e: any) => setFoodPref(e.target.value)}                
                value={foodPref}/>
            <Input
                title="Max # of Choices"
                placeholder="i.e 25 (default 20)"
                onChange={(e: any) => setMaxChoices(e.target.value)}                
                value={maxChoices}/>
            <Input
                title="Price (in $)"
                placeholder="1,2,3"
                onChange={(e: any) => setPrice(e.target.value)}                
                value={price}/>

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

            <Button
                text="Submit"
                onClick={handleSubmit}/>
        </div>
    </div>
  )
};
