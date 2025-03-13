import {Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Provider";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Peerlist Assignment",
  description: "Peerlist Frontend Developer Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Providers>
       {/* <Link href="/preview">About</Link> */}
       {children}
       </Providers>
       
       <Toaster />
      </body>
    </html>
  );
}
