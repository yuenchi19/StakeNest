// app/purchase/[id]/page.tsx
"use client";

import React from "react";
import { useContract, useNFT } from "@thirdweb-dev/react";

const PurchasePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const contractAddress = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS as string;
  const { contract } = useContract(contractAddress, "nft-collection");
  const { data: nft, isLoading, error } = useNFT(contract, id);

  if (isLoading) return <p>Loading NFT details...</p>;
  if (error) {
    console.error("Error loading NFT details:", error);
    return <p>Error loading NFT details: {(error as any)?.message || "詳細なエラーがありません"}</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>購入ページ</h1>
      {nft && (
        <div>
          <h2>{nft.metadata.name ?? "NFT 名がありません"}</h2>
          <img
            src={nft.metadata.image ?? ""}
            alt={typeof nft.metadata.name === "string" ? nft.metadata.name : "NFT"}
            width="300"
          />
          <p>{nft.metadata.description ?? "説明がありません"}</p>
          <button style={{ padding: "10px", fontSize: "16px" }}>購入する</button>
        </div>
      )}
    </div>
  );
};

export default PurchasePage;
