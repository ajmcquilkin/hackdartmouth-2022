import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootAppState } from "schema";
import { Button } from "ui";
import { hostStartRequest } from "../../store/actionCreators/socketActionCreators";

export default function Group() {
  const router = useRouter();
  const dispatch = useDispatch();
  
  const started = useSelector((state: RootAppState) => !!state.room.currentRoom?.started);
  const room = useSelector((state: RootAppState) => !!state.room.currentRoom);
  const done = useSelector((state: RootAppState) => !!state.room.currentRoom?.done);

  useEffect(() => {
    if (done) router.push("/results");
  }, [done, router]);

  const handleGameEdit = () => {
    router.push("/onboard");
  }
  
  return (
    <div>
      <h1>Web</h1>
      <Button text="Edit Game"
          onClick={handleGameEdit} />
      <button type="button" onClick={() => {dispatch(hostStartRequest())}}>sadfjasdf</button>
      {started 
        ? <p>started</p>
        : <p>{router.query?.id}</p>}
      <Button />
    </div>
  );
}
