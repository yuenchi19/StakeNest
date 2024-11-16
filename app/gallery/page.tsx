// app/gallery/page.tsx
"use client";

import React from "react";
import NFTDataFetcher from "./NFTDataFetcher";

const GalleryPage = () => {
  const nftPrices = [500, 700, 1000, 3000, 5000, 10000];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gallery</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {nftPrices.map((price) => (
          <NFTDataFetcher key={price} price={price} />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
