// app/layout.tsx
"use client";

import "../public/styles/design_styles.css"; // デザイン用のCSSファイル
import "../styles/globals.css";
import Header from "./Header";
import Footer from "./Footer";
import ErrorBoundary from "./components/ErrorBoundary"; 
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider
      activeChain={ChainId.BinanceSmartChainMainnet}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_API_KEY}
    >
      <html lang="en">
        <body>
          <ErrorBoundary>
            <div>
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </ErrorBoundary>
        </body>
      </html>
    </ThirdwebProvider>
  );
}
