// src/config/thirdweb.ts

import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Binance } from "@thirdweb-dev/chains";

// 環境変数からAPIキーとクライアントIDを取得
const client = new ThirdwebSDK(Binance, {
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "", // 必要に応じてYOUR_CLIENT_IDを変更
  secretKey: process.env.THIRDWEB_SECRET_KEY || "",          // SECRET_KEYは.envに格納
});

// コントラクトに接続する関数をエクスポート
export const getContract = async (address: string) => {
  return client.getContract(address);
};

export default client;