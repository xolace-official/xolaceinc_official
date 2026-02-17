import type { Metadata } from "next";
import { Nunito, PT_Sans } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/providers/motion-provider";
import NavBar from "@/layout/nav-bar";
import Footer from "@/layout/footer";

const _nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Xolace Inc | Join Our Mission",
  description:
    "Xolace is a mental health support platform that empowers individuals to take control of their mental health journey. Our mission is to provide compassionate, accessible, and affordable mental health support to help more people thrive.",
  applicationName: "Xolace Inc",
  icons: {
    apple: "/apple-icon.png",
  },
  creator: "Xolace Inc.",
  publisher: "Xolace Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${_nunito.variable} ${ptSans.variable} antialiased overflow-x-hidden`}>
        <MotionProvider>
          <NavBar/>
          {children}
          <Footer/>
        </MotionProvider>
      </body>
    </html>
  );
}
