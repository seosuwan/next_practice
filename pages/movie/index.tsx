import Link from "next/link";
import React from "react";

export default function Home2() {
  const movie = { id: "one" };

  return (
    <>
      <Link href={`/movie/${movie.id}`} key={movie.id}>
        여기다 여기
      </Link>
    </>
  );
}
