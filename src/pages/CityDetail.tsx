import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { TravelPost } from "@/types";
import { BASE_URL } from "@/constants";
import useLoader from "@/hooks/use-loader";
import { Suspense } from "react";
import { MoreCities } from "@/components/shared/MoreCities";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const CityDetail = () => {
  const { citySlug } = useParams();
  const [cityData, setCityData] = useState<TravelPost | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { isLoading, startLoading, stopLoading } = useLoader();
  const fetchCityData = async () => {
    startLoading();
    try {
      const response = await axios.get(`${BASE_URL}/api/pictures/${citySlug}`);
      if (!response.data) {
        throw new Error("City not found");
      }
      setCityData(response.data);
    } catch (error) {
      setCityData(null);
      toast({
        title: "Error",
        description: "We couldn't find the city you're looking for.",
        variant: "destructive",
      });
    } finally {
      stopLoading();
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);

    if (citySlug) {
      fetchCityData();
    }
  }, [citySlug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section Skeleton */}
        <div className="relative h-[60vh] min-h-[400px] bg-gray-200 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
            <div className="h-12 w-64 bg-gray-300 rounded-lg"></div>
            <div className="h-6 w-32 bg-gray-300 rounded-lg"></div>
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="h-10 w-48 bg-gray-200 rounded-lg mb-6"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!cityData) {
    return (
      <div className="min-h-screen bg-white">
        <div className="pt-32 px-6 md:px-10 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">City Not Found</h1>
          <p className="mb-8">We couldn't find the city you're looking for.</p>
          <Link
            to="/"
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] min-h-[400px] flex items-center justify-center cursor-pointer"
        onClick={() => setIsLightboxOpen(true)}
        style={{
          backgroundImage: `url(${cityData.picture_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></section>

      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={[{ src: cityData.picture_url }]}
      />

      {/* City Information */}
      <section className="py-12 lg:py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-6">{cityData.title}</h2>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{cityData.city_name}</span>
              <span className="mx-2">•</span>
              <Badge>
                {new Date(cityData.created_at).toLocaleDateString()}
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {cityData.description}
            </p>

            <Link
              to="/"
              className="inline-flex items-center text-primary hover:underline mb-12"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all cities
            </Link>
          </div>
        </div>
      </section>

      {/* More Cities Section */}
      <section className="lg:py-16 px-6 md:px-10 lg:max-w-7xl mx-auto">
        <div className="flex justify-between lg:mb-12">
          <div>
            <h2 className="text-xl lg:text-2xl font-bold mb-4">
              Explore More Cities
            </h2>
            <p className="text-muted-foreground">
              Discover other amazing destinations around the world
            </p>
          </div>
          <div className="">
            <Button asChild>
              <Link
                to="/must-visit-places"
                className="inline-flex text-white items-center text-sm text-primary hover:underline"
              >
                More
              </Link>
            </Button>
          </div>
        </div>
        <Suspense fallback={<div>Loading more cities...</div>}>
          <MoreCities currentCityId={citySlug || ""} />
        </Suspense>
      </section>

      {/* Footer */}
    </div>
  );
};

export default CityDetail;
