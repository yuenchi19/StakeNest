// app/purchase/page.tsx
"use client";

import { useAddress, useContract, useClaimConditions, useClaimNFT } from "@thirdweb-dev/react";
import { useState, useEffect, ReactNode } from "react";

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

export default function PurchasePage() {
  const address = useAddress();
  const [price, setPrice] = useState(500);
  const contractAddress = getContractAddress(price);
  const { contract } = useContract(contractAddress, "nft-drop");

  const { data: claimConditions } = useClaimConditions(contract);
  const { mutate: claimNFT, isLoading, error } = useClaimNFT(contract as any);

  useEffect(() => {
    if (claimConditions) {
      console.log("Claim Conditions:", claimConditions);
    }
  }, [claimConditions]);

  const handleClaim = () => {
    if (!address) {
      alert("ウォレットを接続してください");
      return;
    }
    claimNFT(
      { quantity: 1 },
      {
        onSuccess: () => {
          alert("NFTの購入が完了しました！");
        },
        onError: (err: unknown) => {
          console.error("購入エラー:", err);
          alert("購入に失敗しました。");
        },
      }
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>NFT購入ページ</h2>
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
            <p>購入処理中...</p>
          ) : (
            <button onClick={handleClaim}>NFTを購入する</button>
          )}
          {error instanceof Error && (
            <p style={{ color: "red" }}>
              エラー: {error.message || "詳細なエラーがありません"}
            </p>
          )}
        </div>
      ) : (
        <p>ウォレットを接続してください。</p>
      )}
    </div>
  );
}
