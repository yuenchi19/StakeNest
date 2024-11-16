// app/Header.tsx
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="navbar">
      <Link href="/">Home</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/about">About</Link>
      <Link href="/dashboard">Dashboard</Link>
    </header>
  );
};

export default Header;
