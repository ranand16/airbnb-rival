import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar/Page";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/Modals/RegisterModal";
import LoginModal from "./components/Modals/LoginModal";

// Reserved CONSTANT in next 13 for meta data
// metadata reference: https://beta.nextjs.org/docs/api-reference/metadata#metadata-fields
export const metadata = {
  title: "Airbnb Rival Appplication",
  description: "Book your stay now!!",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <LoginModal />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
