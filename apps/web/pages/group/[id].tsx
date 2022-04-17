import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "ui";

export default function Group() {
  const router = useRouter();
  const started = useSelector((state) => !!state.room.currentRoom?.started);
  const done = useSelector((state) => !!state.room.currentRoom?.done);

  useEffect(() => {
    if (done) router.push("/results");
  }, [done, router]);
  
  return (
    <div>
      <h1>Web</h1>
      {started 
        ? <p>started</p>
        : <p>{router.query?.id}</p>}
      <Button />
    </div>
  );
}