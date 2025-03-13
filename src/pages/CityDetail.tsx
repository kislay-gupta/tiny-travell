import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { TravelPost } from "@/types";
import { BASE_URL } from "@/constants";
import useLoader from "@/hooks/use-loader";

const CityDetail = () => {
  const { citySlug } = useParams();
  const [cityData, setCityData] = useState<TravelPost | null>(null);
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
        className="relative h-[60vh] min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${cityData.picture_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {cityData.city_name}
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>{cityData.title}</span>
          </div>
        </div>
      </section>

      {/* City Information */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">
              About {cityData.city_name}
            </h2>
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

          {/* <div className="bg-secondary/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Post Details</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-primary mt-2 mr-3"></span>
                <span>
                  Created: {new Date(cityData.created_at).toLocaleDateString()}
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-primary mt-2 mr-3"></span>
                <span>ID: {cityData.id}</span>
              </li>
            </ul>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default CityDetail;
