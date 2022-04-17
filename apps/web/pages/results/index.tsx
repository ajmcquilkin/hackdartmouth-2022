import React from "react";
import { useSelector } from "react-redux";
import { RootAppState } from "schema";
import { Button } from "ui";

export default function Results() {
  const results = useSelector((state: RootAppState) => !!state.room.currentRoom?.done);
  
  return (
    <div>
      <h1>Web</h1>
      {results
        ? <p>results</p>
        : <p>waiting on others</p>}
      <Button />
    </div>
  );
}
