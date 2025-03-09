import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import CityDropdown from "./CityDropdown";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-10",
        isScrolled ? "py-4 blur-backdrop border-b" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="font-semibold text-2xl tracking-tight transition-all duration-300"
        >
          Fleance Kofi Kyere
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link
            to="/"
            className={cn(
              "nav-link text-sm font-medium transition-all",
              location.pathname === "/" && "text-primary"
            )}
          >
            Home
          </Link>

          <CityDropdown />

          <Link
            to="/about"
            className={cn(
              "nav-link text-sm font-medium transition-all",
              location.pathname === "/about" && "text-primary"
            )}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className={cn(
              "nav-link text-sm font-medium transition-all",
              location.pathname === "/contact" && "text-primary"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b animate-fade-in">
          <nav className="flex flex-col py-6 px-6 space-y-6">
            <Link to="/" className="text-lg font-medium">
              Home
            </Link>
            <div className="py-2 border-y">
              <p className="text-lg font-medium mb-3">Cities</p>
              <div className="space-y-4 pl-4">
                <Link to="/cities/tokyo" className="block text-base">
                  Tokyo
                </Link>
                <Link to="/cities/paris" className="block text-base">
                  Paris
                </Link>
                <Link to="/cities/new-york" className="block text-base">
                  New York
                </Link>
                <Link to="/cities/rome" className="block text-base">
                  Rome
                </Link>
                <Link to="/cities/sydney" className="block text-base">
                  Sydney
                </Link>
              </div>
            </div>
            <Link to="/about" className="text-lg font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-lg font-medium">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
