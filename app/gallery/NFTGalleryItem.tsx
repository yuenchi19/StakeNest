// app/gallery/NFTGalleryItem.tsx
"use client";

import React from "react";
import { NFT } from "@thirdweb-dev/sdk";

interface NFTGalleryItemProps {
  nft: NFT;
  price: number;
}

const NFTGalleryItem: React.FC<NFTGalleryItemProps> = ({ nft, price }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", width: "150px" }}>
      <img
        src={nft.metadata.image as string}
        alt={nft.metadata.name as string}
        style={{ width: "100%", borderRadius: "5px" }}
      />
      <p>{nft.metadata.name || "名前未設定"}</p>
      <p>価格: {price}円</p>
      <button style={{ padding: "5px 10px", marginTop: "5px" }}>購入</button>
    </div>
  );
};

export default NFTGalleryItem;
