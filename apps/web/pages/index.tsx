import React from "react";
import { Button } from "ui";
import Link from 'next/link';

export default function Web() {
  return (
    <div className="home">
      <h1>Web</h1>
      <Link href="/join">
        <a>Join room</a>
      </Link>
      <Link href="/create">
        <a>Create room</a>
      </Link>
    </div>
  );
}
