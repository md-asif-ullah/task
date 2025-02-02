import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SmallDeviceHeader from "@/components/smallDeviceHeader";
import { ReactNode } from "react";
import { Montserrat } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Home | AnyTech",
  description: "https://task-dusky-phi.vercel.app",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${montserrat.variable} antialiased`}
      >
        <div className="lg:hidden">
          <SmallDeviceHeader />
        </div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
