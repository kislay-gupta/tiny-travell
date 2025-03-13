import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface CityCardProps {
  city: {
    title: string;
    slug: string;
    image: string;
    description: string;
  };
  index: number;
}

const CityCard = ({ city, index }: CityCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      to={`/cities/${city.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border shadow-sm hover:shadow-md transition-all duration-300",
        "transform hover:-translate-y-1"
      )}
      style={{
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
        animation: "fade-up 0.6s ease-out forwards",
      }}
    >
      <div className="image-container aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={city.image}
          alt={city.title}
          className={cn(
            "h-full w-full object-cover transition-all duration-500",
            imageLoaded ? "image-loaded" : "image-loading"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 transition-opacity group-hover:opacity-70"></div>
      </div>

      {/* City info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
        <div className="flex items-center space-x-1 mb-1.5">
          <MapPin className="h-4 w-4" />
        </div>
        <h3 className="text-xl font-bold">{city.title}</h3>
      </div>

      {/* Reveal on hover */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center text-white">
          <h3 className="text-xl font-bold mb-2">{city.title}</h3>
          <p className="text-sm line-clamp-3">{city.description}</p>
          <div className="mt-4 inline-block px-4 py-2 border border-white/30 rounded-md text-sm font-medium hover:bg-white/10 transition-colors">
            Explore
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CityCard;
