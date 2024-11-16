// app/_app.js
import '../styles/globals.css'; // グローバルスタイルをインポート

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
