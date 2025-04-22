import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mark Ruzicka",
  description: "Personal site and blog by Mark Ruzicka. Software, engineering, and writing.",
  keywords: ["Mark Ruzicka", "personal blog", "software engineering", "tech writing", "portfolio"],
  authors: [{ name: "Mark Ruzicka", url: "https://markruzicka.com" }],
  creator: "Mark Ruzicka",
  openGraph: {
    title: "Mark Ruzicka",
    description: "Personal site and blog by Mark Ruzicka.",
    url: "https://markruzicka.com",
    siteName: "Mark Ruzicka",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Ruzicka",
    description: "Personal site and blog by Mark Ruzicka.",
  },
  metadataBase: new URL("https://markruzicka.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
