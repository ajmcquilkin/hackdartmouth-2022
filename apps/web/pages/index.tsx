import React, { useState } from "react";
import Link from 'next/link';
import { useDispatch } from "react-redux";
import { createRoomRequest } from "../store/actionCreators/roomActionCreators";
import { useRouter } from "next/router";

export default function Web() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [hostId, setHostId] = useState<string>("");

  const handleCreateRoom = () => {
    if (!hostId) return;
    dispatch(createRoomRequest(hostId));
    router.push("/create");
  };
  
  return (
    <div className="home">
      <h1>Web</h1>
      <Link href="/join">
        <a>Join room</a>
      </Link>
      <input value={hostId} onChange={(e) => setHostId(e.target.value)} />
      <button type="button" onClick={handleCreateRoom}>Create Room</button>
    </div>
  );
}
