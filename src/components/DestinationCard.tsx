
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DestinationCardProps {
  destination: {
    name: string;
    image: string;
    description: string;
    category: string;
    city: string;
    citySlug: string;
  };
  index: number;
}

const DestinationCard = ({ destination, index }: DestinationCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300"
      style={{ 
        animationDelay: `${0.1 + (index * 0.1)}s`,
        opacity: 0, 
        animation: 'fade-up 0.6s ease-out forwards' 
      }}
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-muted">
        <img
          src={destination.image}
          alt={destination.name}
          className={cn(
            "h-full w-full object-cover transition-all duration-500",
            imageLoaded ? "image-loaded" : "image-loading"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        
        <div className="absolute top-3 left-3">
          <span className="inline-block py-1 px-2 rounded-full bg-white/80 backdrop-blur-sm text-xs font-medium">
            {destination.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col p-4">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {destination.name}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {destination.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between pt-2 border-t">
          <Link 
            to={`/cities/${destination.citySlug}`}
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            {destination.city}
          </Link>
          
          <Link 
            to={`/cities/${destination.citySlug}/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="flex items-center text-xs font-medium hover:text-primary transition-colors"
          >
            Discover
            <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
