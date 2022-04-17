import React from "react";
import { Result } from "../../components/results";
import { useSelector } from "react-redux";
import { RootAppState } from "schema";
import { Button } from "ui";

export default function Results() {
  const results = useSelector((state: RootAppState) => !!state.room.currentRoom?.done);
  
  return (
    <div>
      <Result />
      <h1>Web</h1>
      {results
        ? <Result />
        : <p>waiting on others</p>}
      <Button />
    </div>
  );
}
