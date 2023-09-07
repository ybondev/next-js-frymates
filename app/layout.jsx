import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.css";

// COMPONENT
import Nav from "@components/Nav";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Frymates NFT | Web3 Detective Agency",
  description: "",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="main_container">
        <Nav />
        <ThirdwebProvider
          activeChain="goerli"
          clientId="e887491a6bf2e42ba4a0436a450b1b93"
        >
          {children}
          <Toaster />
        </ThirdwebProvider>
      </body>
    </html>
  );
};

export default RootLayout;
