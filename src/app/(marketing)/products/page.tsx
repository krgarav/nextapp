import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        <li>
          <Link href="/products/1">Product 1</Link>
        </li>
        <li>
          <Link href="/products/2">Product 2</Link>
        </li>
        <li>
          <Link href="/products/3">Product 3</Link>
        </li>
      </ul>
    </>
  );
};

export default page;
