// app/dashboard/page.tsx
"use client";

import { useAddress, useNFTs, useContract } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";

// 価格帯に応じたコントラクトアドレスを取得する関数
const getContractAddress = (price: number) => {
  switch (price) {
    case 500:
      return process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS_500;
    case 700:
      return process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS_700;
    case 1000:
      return process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS_1000;
    case 3000:
      return process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS_3000;
    case 5000:
      return process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS_5000;
    case 10000:
      return process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS_10000;
    default:
      return null;
  }
};

export default function Dashboard() {
  const address = useAddress();
  const [price, setPrice] = useState(500);
  const contractAddress = getContractAddress(price);

  // コントラクトを取得し、エラーを取得
  const { contract, error: contractError } = useContract(contractAddress, "nft-collection");

  useEffect(() => {
    // エラーがある場合にログを表示
    if (contractError) {
      console.error("Contract Error:", contractError);
    }
  }, [contractError]);

  console.log("ウォレットアドレス:", address);
  console.log("現在の価格帯:", price);
  console.log("コントラクト情報:", contract);

  const { data: nfts, isLoading, error: nftError } = useNFTs(contract, { start: 0, count: 100 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div style={{ padding: "20px" }}>
      <h2>あなたのNFTダッシュボード</h2>
      <select onChange={(e) => setPrice(Number(e.target.value))} value={price}>
        <option value={500}>500円</option>
        <option value={700}>700円</option>
        <option value={1000}>1000円</option>
        <option value={3000}>3000円</option>
        <option value={5000}>5000円</option>
        <option value={10000}>10000円</option>
      </select>
      {address ? (
        <div>
          {isLoading ? (
            <p>ロード中...</p>
          ) : nftError ? (
            <p style={{ color: "red" }}>エラー: {(nftError as any)?.message || "詳細なエラーがありません"}</p>
          ) : nfts && nfts.length > 0 ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {nfts.map((nft) => (
                <div
                  key={nft.metadata.id}
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "5px",
                    textAlign: "center",
                    width: "150px",
                  }}
                >
                  <img
                    src={String(nft.metadata.image) || ""}
                    alt={String(nft.metadata.name) || "NFT"}
                    style={{ width: "100%", borderRadius: "5px" }}
                  />
                  <p>{nft.metadata.name || "名前未設定"}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>NFTが見つかりません。</p>
          )}
        </div>
      ) : (
        <p>ウォレットを接続してください。</p>
      )}
    </div>
  );
}
