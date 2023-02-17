import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Name = () => {
  const { query } = useRouter();

  return (
    <>
      <h2>앙녕 여기 {query.name}</h2>
      <Link href="/">홈으로 가보자 &apos; / &apos;</Link>
    </>
  );
};
export default Name;
