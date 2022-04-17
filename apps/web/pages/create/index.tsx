import React from "react";
import { useSelector } from "react-redux";
import { Button } from "ui";

export default function Create() {
  const code = useSelector((state) => state.room.currentRoom?.id);
  
  return (
    <div>
      <h1>Your room code is:</h1>
      <p>{code}</p>
    </div>
  );
}
