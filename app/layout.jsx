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
          clientId="1b7ea9923feb105d323484e3f9467813"
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
