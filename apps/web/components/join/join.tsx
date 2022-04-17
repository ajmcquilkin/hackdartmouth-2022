import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { joinRoomRequest } from "../../store/actionCreators/roomActionCreators";

import styles from "./join.module.scss";

export const Join = () => {
  const [code, setCode] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const dispatch = useDispatch();
  const router = useRouter();
  
  const handleSubmit = () => {
    if (!code || !username) return;
    dispatch(joinRoomRequest(code, username));
    router.push(`/group/${code}`);
  };

  return(
    <div className={styles.page}>
        <h1 className={styles.header}>Join</h1>
        <input className={styles.input} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"></input>
        <input className={styles.input} value={code} onChange={(e) => setCode(e.target.value)} placeholder="Room Code"></input>
        <button className={styles.submit} type="button" onClick={handleSubmit}>Submit</button>
    </div>
  )
};
