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
  openGraph: {
    title: "Yudi Chang",
    description: "A showcase of my work and skills.",
    url: "https://yudi-chang-portofolio.netlify.app/",
    siteName: "Yudi Chang Portfolio",
    images: [
        {
            url: "https://yudi-chang-portofolio.netlify.app/preview.png",
            width: 1200,
            height: 630,
            alt: "A preview of Yudi Chang's portfolio",
        },
    ],
    type: "website",
},
twitter: {
    card: "summary_large_image",
    title: "Yudi Chang",
    description: "A showcase of my work and skills.",
    images: ["https://yudi-chang-portofolio.netlify.app/preview.png"],
},
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
