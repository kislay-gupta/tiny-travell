import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BASE_URL } from "@/constants";
import useLoader from "@/hooks/use-loader";
import { TravelPost } from "@/types";
import axios from "axios";
import CityCard from "@/components/CityCard";
import { LoadingCards } from "@/components/cards/CardSkeleton";

// Sample data for must-visit places (expanded from popularDestinations in Index.tsx)

const MustVisitPlaces = () => {
  const [cities, setCities] = useState<TravelPost[] | null>();
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
    // Scroll to top when component mounts
    getPictures();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative py-20 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My Travel Adventures
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Join me on my journey as I share some of my favorite places around
            the world. These are the destinations that have left a lasting
            impression on me and shaped my travel experiences.
          </p>
        </div>
      </header>

      {/* Places Grid */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        {isLoading ? (
          <LoadingCards />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cities &&
              cities.map((city, index) => (
                <CityCard
                  key={city.city_name}
                  city={{
                    title: city.city_name,
                    slug: city.id.toLocaleString(),
                    image: city.picture_url,
                    description: city.description,
                  }}
                  index={index}
                />
              ))}
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Connect!
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Want to know more about my travel experiences or share your own
            stories? I'd love to hear from you and exchange travel tips!
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default MustVisitPlaces;
