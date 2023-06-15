import { Provider } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "newsAI",
  description: "A web application for learning about the new things faster.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
