import { useEffect, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import CityCard from "@/components/CityCard";
import DestinationCard from "@/components/DestinationCard";
import { popularDestinations } from "@/data";
import { BASE_URL } from "@/constants";
// Sample data for cities
import axios from "axios";
import { TravelPost } from "@/types";
import useLoader from "@/hooks/use-loader";
import CardSkeleton from "@/components/CardSkeleton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
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

  const LoadingCards = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Featured Cities Section */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
            Explore Destinations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Cities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the world's most remarkable cities and their unique
            attractions. From historic landmarks to hidden gems, start your
            journey here.
          </p>
        </div>

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
        <div className="self-end justify-end flex mt-4">
          <Button asChild className="group">
            <Link to="/must-visit-places" className="flex items-center gap-2">
              View More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-20 px-6 hidden md:px-10 max-w-7xl mx-auto bg-secondary/30">
        <div className="mb-12 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
            Must-Visit Places
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Destinations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the most sought-after attractions from around the world.
            These iconic destinations are beloved by travelers and locals alike.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {popularDestinations.map((destination, index) => (
            <DestinationCard
              key={destination.name}
              destination={destination}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get inspired for your next journey
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter and receive personalized travel
              recommendations, exclusive offers, and insider tips.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  toast.info("Coming soon!");
                }}
                className="px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default Index;
