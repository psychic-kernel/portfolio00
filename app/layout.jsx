import { Poppins, Inter, Iceland } from 'next/font/google';
import "./globals.css";

import BreadCrumbs from "./components/BreadCrumbs.jsx";
import Header from "./components/Header.jsx";

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})
const inter = Inter({ subsets: ["latin"] });
const iceLand = Iceland({
  weight: ['400'],
  subsets: ['latin']
})

export const metadata = {
  title: "Manic Media",
  description: "Learning next.js so that I can better understand how server side components work in the react framework.",
  keywords: 'Next, React, Server-Side Components, data fetching, data caching html css tailwind.css'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={iceLand.className} >
        <Header />
        <BreadCrumbs/>
        <main className="relative block">{children}</main>
      </body>
    </html>
  );
}
