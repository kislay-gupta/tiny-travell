import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div>
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    </div>
  );
};
