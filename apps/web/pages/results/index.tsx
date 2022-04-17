import React, { useEffect } from "react";
import { Result } from "../../components/results";
import { useDispatch, useSelector } from "react-redux";
import { IRoom, RootAppState } from "schema";
import { Button } from "ui";
import { fetchRoomRequest } from "../../store/actionCreators/roomActionCreators";

export default function Results() {
  const dispatch = useDispatch();
  
  const isDone = useSelector((state: RootAppState) => !!state.room.currentRoom?.results);
  const currentRoom = useSelector((state: RootAppState) => state.room.currentRoom);

  useEffect(() => {
    dispatch(fetchRoomRequest(currentRoom?.id ?? ""));
  }, [isDone, currentRoom?.id, dispatch]);
  
  return (
    <div>
      <Result />
      <h1>Web</h1>
      {isDone
        ? <Result />
        : <p>waiting on others</p>}
      <Button />
    </div>
  );
}
