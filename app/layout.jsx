"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.css";

// COMPONENT
import Nav from "@components/Nav";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";

// export const metadata = {
//   title: "Frymates NFT | Web3 Detective Agency",
//   description: "",
// };

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Frymates NFT | Web3 Detective Agency</title>
      </head>
      <body className="main_container">
        <ThirdwebProvider
          activeChain="ethereum"
          clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
        >
          <Nav />
          {children}
          <Toaster />
        </ThirdwebProvider>
      </body>
    </html>
  );
};

export default RootLayout;
