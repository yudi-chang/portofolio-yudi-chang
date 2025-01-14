import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';
import { Providers } from './providers';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", '400', "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Yudi Chang",
  description: "Yudi Chang's portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
