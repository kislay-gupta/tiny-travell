import { useState, useEffect, use } from "react";
import { Link, useLocation } from "react-router-dom";
import { MapPin, Menu, X } from "lucide-react";
import CityDropdown from "./CityDropdown";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TravelPost } from "@/types";
import axios from "axios";
import useLoader from "@/hooks/use-loader";
import { BASE_URL } from "@/constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [cities, setCities] = useState<TravelPost[] | null>();
  const [isOpen, setIsOpen] = useState(false);
  const { startLoading, stopLoading, isLoading } = useLoader();
  const getPictures = async () => {
    startLoading();
    try {
      const res = await axios.get(`${BASE_URL}/api/pictures`);
      setCities(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      stopLoading();
    }
  };
  useEffect(() => {
    getPictures();
  }, []);
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
    setIsOpen(false);
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
          Fleance Kyere
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

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              disabled={isLoading}
              className="md:hidden flex items-center p-2"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
            <SheetHeader className="p-6 border-b">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col">
              <Link
                to="/"
                className={cn(
                  "px-6 py-4 text-lg font-medium hover:bg-secondary transition-colors",
                  location.pathname === "/" && "text-primary"
                )}
              >
                Home
              </Link>

              <Accordion type="single" collapsible>
                <AccordionItem value="cities" className="border-b-0">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:bg-secondary">
                    Cities
                  </AccordionTrigger>
                  {cities?.map((city) => (
                    <AccordionContent key={city.id} className="pb-0">
                      <Link
                        to={`/cities/${city.id}`}
                        className=" flex px-6 py-4 hover:bg-secondary"
                      >
                        <MapPin className="h-4 w-4 mt-0.5 mr-2 text-primary" />
                        {city.city_name}
                      </Link>
                      <div className="bg-secondary/50"></div>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              </Accordion>

              <Link
                to="/about"
                className={cn(
                  "px-6 py-4 text-lg font-medium hover:bg-secondary transition-colors",
                  location.pathname === "/about" && "text-primary"
                )}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={cn(
                  "px-6 py-4 text-lg font-medium hover:bg-secondary transition-colors",
                  location.pathname === "/contact" && "text-primary"
                )}
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
