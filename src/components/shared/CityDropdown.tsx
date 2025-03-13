import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { TravelPost } from "@/types";
import useLoader from "@/hooks/use-loader";
import { BASE_URL } from "@/constants";
import axios from "axios";

const CityDropdown = () => {
  const [cities, setCities] = useState<TravelPost[] | null>();
  const { startLoading, stopLoading } = useLoader();
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
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    getPictures();
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={cn(
          "flex items-center nav-link text-sm font-medium",
          isOpen && "text-primary"
        )}
      >
        Cities
        <ChevronDown
          className={cn(
            "ml-1 h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-56 rounded-lg shadow-lg overflow-hidden border bg-white/95 backdrop-blur-md z-50 animate-fade-up">
          <div className="p-2">
            {cities &&
              cities.map((city) => (
                <Link
                  key={city.id}
                  to={`/cities/${city.id}`}
                  className="block px-4 py-3 hover:bg-secondary rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mt-0.5 mr-2 text-primary" />
                    <div>
                      <span className="block font-medium">
                        {city.city_name}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CityDropdown;
