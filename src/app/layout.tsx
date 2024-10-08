"use client"
import { Montserrat } from "next/font/google";
import "./globals.scss";
import { Provider } from "../provide/SwrProvide";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Spinner from "../components/Spinner/spinner";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-credit-cards-2/dist/lib/styles.scss';
import ScrollButton from '../components/ScrollButton/scrollButton';

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname === '/dashboard' || pathname === '/login';

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={montserrat.className}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {!hideHeaderFooter && <Header />}
            <Provider>{children}</Provider>
            {!hideHeaderFooter && <Footer />}
            <ToastContainer />
            <ScrollButton />
          </>
        )}
      </body>
    </html>
  );
}
