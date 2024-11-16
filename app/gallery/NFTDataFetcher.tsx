// app/gallery/NFTDataFetcher.tsx
"use client";

import React from "react";
import { useContract, useNFTs } from "@thirdweb-dev/react";
import NFTGalleryItem from "./NFTGalleryItem";
import { useRouter } from "next/navigation";

interface NFTDataFetcherProps {
  price: number;
}

const NFTDataFetcher: React.FC<NFTDataFetcherProps> = ({ price }) => {
  const contractAddress = process.env[`NEXT_PUBLIC_NFT_CONTRACT_ADDRESS_${price}`] as string;
  const { contract } = useContract(contractAddress, "nft-collection");
  const { data: nfts, isLoading, error } = useNFTs(contract);
  const router = useRouter();

  if (isLoading) return <p>Loading NFTs...</p>;
  if (error) return <p style={{ color: "red" }}>Error fetching NFTs: {(error as any).message}</p>;

  return (
    <div>
      <h2>{price}円のNFT</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {nfts?.map((nft) => (
          <div
            key={nft.metadata.id}
            onClick={() => router.push(`/purchase/${nft.metadata.id}`)} // 画像クリックで購入ページに遷移
            style={{ cursor: "pointer" }}
          >
            <NFTGalleryItem nft={nft} price={price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTDataFetcher;
