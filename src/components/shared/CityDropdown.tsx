import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const cities = [
  {
    name: "Tokyo",
    slug: "tokyo",
    description: "Modern meets traditional",
  },
  {
    name: "Paris",
    slug: "paris",
    description: "City of lights and romance",
  },
  {
    name: "New York",
    slug: "new-york",
    description: "The city that never sleeps",
  },
  {
    name: "Rome",
    slug: "rome",
    description: "Eternal city of history",
  },
  {
    name: "Sydney",
    slug: "sydney",
    description: "Harbor city with iconic landmarks",
  },
];

const CityDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
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
            {cities.map((city) => (
              <Link
                key={city.slug}
                to={`/cities/${city.slug}`}
                className="block px-4 py-3 hover:bg-secondary rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mt-0.5 mr-2 text-primary" />
                  <div>
                    <span className="block font-medium">{city.name}</span>
                    <span className="block text-xs text-muted-foreground mt-0.5">
                      {city.description}
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
