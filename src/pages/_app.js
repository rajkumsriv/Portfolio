// src/pages/_app.js
import "../styles/globals.css"; // Load Tailwind styles
import Navbar from "../components/Navbar"; // Navbar
import Footer from "../components/Footer"; // ✅ Footer added

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer /> {/* ✅ Footer will show below page content */}
    </>
  );
}
