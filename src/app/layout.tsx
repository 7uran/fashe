import { Montserrat } from "next/font/google";
import "./globals.scss";
import { Provider } from "../provide/SwrProvide";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
  hideHeaderFooter = false,
}: Readonly<{
  children: React.ReactNode;
  hideHeaderFooter?: boolean;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {!hideHeaderFooter && <Header />}
        <Provider>{children}</Provider>
        {!hideHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
