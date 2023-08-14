import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.css";

// COMPONENT
import Nav from "@components/Nav";

export const metadata = {
  title: "Frymates",
  description: "",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="main_container">
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
