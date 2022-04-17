import React from "react";
import { useSelector } from "react-redux";
import { RootAppState } from "schema";
import { Button } from "ui";

export default function Create() {
  const code = useSelector((state: RootAppState) => state.room.currentRoom?.id);
  
  return (
    <div>
      <h1>Your room code is:</h1>
      <p>{code}</p>
    </div>
  );
}
