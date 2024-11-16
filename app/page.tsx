// app/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import "./styles.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* ヘッダー */}
      <header className="header">
        <div className="logo">My NFT Dashboard</div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </header>

      {/* ヒーローセクション */}
      <section className="hero">
        <h1>Welcome to the World of NFTs</h1>
        <p>Discover, manage, and explore your unique NFT collection.</p>
        <Link href="/gallery" className="cta-button">Explore Gallery</Link>
      </section>

      {/* 特徴セクション */}
      <section className="features">
        <div className="feature-card">
          <h2>Unique NFTs</h2>
          <p>Each NFT in our collection is one-of-a-kind.</p>
        </div>
        <div className="feature-card">
          <h2>Secure Platform</h2>
          <p>We prioritize security for our users and assets.</p>
        </div>
        <div className="feature-card">
          <h2>Exclusive Rewards</h2>
          <p>Get exclusive rewards by holding NFTs in your wallet.</p>
        </div>
      </section>

      {/* NFTプレビュー */}
      <section className="nft-preview">
        <h2>Featured NFTs</h2>
        <div className="nft-gallery">
          {/* NFTカードをここに配置（例としてダミー画像を使用） */}
          <div className="nft-card">
            <img src="/images/nft1.jpg" alt="NFT 1" />
            <p>NFT Title 1</p>
          </div>
          <div className="nft-card">
            <img src="/images/nft2.jpg" alt="NFT 2" />
            <p>NFT Title 2</p>
          </div>
          <div className="nft-card">
            <img src="/images/nft3.jpg" alt="NFT 3" />
            <p>NFT Title 3</p>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="footer">
        <p>&copy; 2024 My NFT Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
