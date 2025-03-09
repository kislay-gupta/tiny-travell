import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import DestinationCard from "@/components/DestinationCard";
import { toast } from "@/components/ui/use-toast";

// City data (in a real app, this would come from an API)
const cityData = {
  tokyo: {
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1788&q=80",
    description:
      "Experience the perfect blend of traditional culture and cutting-edge modernity in Japan's bustling capital. Tokyo is a city of contrasts where ancient temples stand in the shadow of ultramodern skyscrapers, and where traditional cuisine meets innovative culinary trends. Explore vibrant neighborhoods, each with their own distinct character, from the fashionable streets of Shibuya to the electronic wonderland of Akihabara.",
    facts: [
      "Population: 13.96 million",
      "Area: 2,194 km²",
      "Founded: 1457 (as Edo)",
      "Language: Japanese",
      "Currency: Japanese Yen (JPY)",
    ],
    destinations: [
      {
        name: "Tokyo Tower",
        image:
          "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1836&q=80",
        description:
          "Iconic landmark offering panoramic views of Tokyo's skyline and beyond.",
        category: "Landmark",
        city: "Tokyo",
        citySlug: "tokyo",
      },
      {
        name: "Shibuya Crossing",
        image:
          "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        description:
          "The world's busiest pedestrian crossing and an icon of modern Tokyo.",
        category: "Urban",
        city: "Tokyo",
        citySlug: "tokyo",
      },
      {
        name: "Meiji Shrine",
        image:
          "https://images.unsplash.com/photo-1583766395091-2eb9994ed094?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
        description:
          "Serene Shinto shrine dedicated to Emperor Meiji and Empress Shoken.",
        category: "Cultural",
        city: "Tokyo",
        citySlug: "tokyo",
      },
    ],
  },
  paris: {
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80",
    description:
      "Discover the allure of the City of Light, from iconic landmarks to charming neighborhoods and world-class cuisine. Paris captivates visitors with its elegant boulevards, historic monuments, and artistic treasures. The city boasts some of the world's most famous museums and galleries, alongside picturesque cafés where you can watch the world go by. Whether strolling along the Seine or exploring the narrow streets of Montmartre, Paris offers an unforgettable blend of history, culture, and romance.",
    facts: [
      "Population: 2.16 million",
      "Area: 105.4 km²",
      "Founded: 3rd century BC",
      "Language: French",
      "Currency: Euro (EUR)",
    ],
    destinations: [
      {
        name: "Eiffel Tower",
        image:
          "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        description:
          "The most famous symbol of Paris and one of the world's most recognized landmarks.",
        category: "Monument",
        city: "Paris",
        citySlug: "paris",
      },
      {
        name: "Louvre Museum",
        image:
          "https://images.unsplash.com/photo-1565099824688-ab48da5b875d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
        description:
          "World's largest art museum and home to thousands of works, including the Mona Lisa.",
        category: "Museum",
        city: "Paris",
        citySlug: "paris",
      },
      {
        name: "Montmartre",
        image:
          "https://images.unsplash.com/photo-1550340499-a6c60coesnob?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
        description:
          "Historic hill district known for its artistic history and the Sacré-Cœur Basilica.",
        category: "District",
        city: "Paris",
        citySlug: "paris",
      },
    ],
  },
  "new-york": {
    name: "New York",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description:
      "Explore the city that never sleeps, with its iconic skyline, diverse neighborhoods, and endless entertainment. New York City is a global center for culture, finance, media, and international diplomacy. The city thrums with energy across its five boroughs, each offering distinct experiences. From Broadway shows to world-class museums, from Central Park to hidden speakeasies, New York offers something for every traveler, all connected by its comprehensive subway system.",
    facts: [
      "Population: 8.8 million",
      "Area: 783.8 km²",
      "Founded: 1624",
      "Language: English",
      "Currency: US Dollar (USD)",
    ],
    destinations: [
      {
        name: "Central Park",
        image:
          "https://images.unsplash.com/photo-1545853332-147d5073187e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
        description:
          "An urban oasis in the heart of Manhattan with lakes, walking paths, and recreational areas.",
        category: "Park",
        city: "New York",
        citySlug: "new-york",
      },
      {
        name: "Empire State Building",
        image:
          "https://images.unsplash.com/photo-1550342618-75ec9de190e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
        description:
          "Iconic Art Deco skyscraper with observatories offering spectacular views of the city.",
        category: "Landmark",
        city: "New York",
        citySlug: "new-york",
      },
      {
        name: "Times Square",
        image:
          "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
        description:
          "Bustling commercial intersection famous for its bright lights, Broadway theaters, and New Year's Eve celebration.",
        category: "District",
        city: "New York",
        citySlug: "new-york",
      },
    ],
  },
  rome: {
    name: "Rome",
    image:
      "https://images.unsplash.com/photo-1555992336-fb0d29498b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    description:
      "Step back in time in the Eternal City, where ancient history meets la dolce vita in every piazza and trattoria. Rome, Italy's capital, offers nearly three thousand years of globally influential art, architecture, and culture. Walking through the city is like moving through an open-air museum, with ancient ruins, Renaissance palaces, and Baroque fountains around every corner. The city's culinary traditions, from authentic pasta dishes to gelato, offer delicious ways to refuel between sightseeing adventures.",
    facts: [
      "Population: 2.8 million",
      "Area: 1,285 km²",
      "Founded: 753 BC",
      "Language: Italian",
      "Currency: Euro (EUR)",
    ],
    destinations: [
      {
        name: "Colosseum",
        image:
          "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1996&q=80",
        description:
          "Ancient amphitheater that once hosted gladiatorial games and other spectacles.",
        category: "Historical",
        city: "Rome",
        citySlug: "rome",
      },
      {
        name: "Vatican City",
        image:
          "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=1676&q=80",
        description:
          "World's smallest independent state and home to St. Peter's Basilica and the Vatican Museums.",
        category: "Cultural",
        city: "Rome",
        citySlug: "rome",
      },
      {
        name: "Trevi Fountain",
        image:
          "https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
        description:
          "Baroque masterpiece and Rome's largest fountain, famous for the coin-tossing tradition.",
        category: "Landmark",
        city: "Rome",
        citySlug: "rome",
      },
    ],
  },
  sydney: {
    name: "Sydney",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description:
      "Experience the vibrant harbor city with its iconic Opera House, beautiful beaches, and laid-back lifestyle. Sydney combines urban excitement with natural beauty, offering visitors stunning harbor views alongside world-class dining, shopping, and cultural experiences. The city's outdoor lifestyle takes advantage of its numerous beaches, coastal walks, and lush parks. A gateway to exploring Australia, Sydney represents the perfect blend of relaxed atmosphere and cosmopolitan charm.",
    facts: [
      "Population: 5.3 million",
      "Area: 12,368 km²",
      "Founded: 1788",
      "Language: English",
      "Currency: Australian Dollar (AUD)",
    ],
    destinations: [
      {
        name: "Sydney Opera House",
        image:
          "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80",
        description:
          "World-famous architectural icon and performing arts center on Sydney Harbour.",
        category: "Arts",
        city: "Sydney",
        citySlug: "sydney",
      },
      {
        name: "Bondi Beach",
        image:
          "https://images.unsplash.com/photo-1523428461295-92041d10dda9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
        description:
          "Famous beach known for its golden sands, surfing conditions, and vibrant atmosphere.",
        category: "Beach",
        city: "Sydney",
        citySlug: "sydney",
      },
      {
        name: "Sydney Harbour Bridge",
        image:
          "https://images.unsplash.com/photo-1506374322094-6021fc3926f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80",
        description:
          "Iconic steel arch bridge spanning Sydney Harbour, offering bridge climbs and spectacular views.",
        category: "Landmark",
        city: "Sydney",
        citySlug: "sydney",
      },
    ],
  },
};

const CityDetail = () => {
  const { citySlug } = useParams();
  const [city, setCity] = useState<
    (typeof cityData)[keyof typeof cityData] | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // In a real app, you would fetch data from an API here
    setIsLoading(true);

    if (citySlug && cityData[citySlug as keyof typeof cityData]) {
      setCity(cityData[citySlug as keyof typeof cityData]);
      setIsLoading(false);
    } else {
      toast({
        title: "City not found",
        description:
          "The city you're looking for doesn't exist in our database.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  }, [citySlug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-lg font-medium">Loading...</div>
      </div>
    );
  }

  if (!city) {
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
          backgroundImage: `url(${city.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {city.name}
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>{city.destinations.length} destinations to explore</span>
          </div>
        </div>
      </section>

      {/* City Information */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">About {city.name}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {city.description}
            </p>

            <Link
              to="/"
              className="inline-flex items-center text-primary hover:underline mb-12"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all cities
            </Link>
          </div>

          <div className="bg-secondary/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-3">
              {city.facts.map((fact: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary mt-2 mr-3"></span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto bg-secondary/30">
        <div className="mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
            Explore {city.name}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top Destinations
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover the most iconic and must-visit places in {city.name}. From
            historic landmarks to hidden gems, these destinations capture the
            essence of the city.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {city.destinations.map(
            (
              destination: {
                name: string;
                image: string;
                description: string;
                category: string;
                city: string;
                citySlug: string;
              },
              index: number
            ) => (
              <DestinationCard
                key={destination.name}
                destination={destination}
                index={index}
              />
            )
          )}
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Traveling to {city.name}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Best Time to Visit
                </h3>
                <p className="text-muted-foreground">
                  {city.name === "Tokyo" &&
                    "Spring (March to May) for cherry blossoms and fall (September to November) for autumn colors offer the most pleasant weather and stunning scenery."}
                  {city.name === "Paris" &&
                    "Late spring (April to June) or early fall (September to October) when the weather is mild and the tourist crowds are smaller."}
                  {city.name === "New York" &&
                    "Spring (April to June) and fall (September to November) offer comfortable temperatures and fewer tourists than summer."}
                  {city.name === "Rome" &&
                    "April to May or September to October for pleasant weather and fewer crowds than the summer tourist peak."}
                  {city.name === "Sydney" &&
                    "Spring (September to November) and fall (March to May) offer comfortable temperatures and fewer tourists."}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Getting Around</h3>
                <p className="text-muted-foreground">
                  {city.name === "Tokyo" &&
                    "Tokyo's metro and JR train systems are efficient and extensive. Consider getting a Suica or Pasmo card for easy travel."}
                  {city.name === "Paris" &&
                    "The Paris Métro is comprehensive and easy to navigate. Walking is also a delightful way to explore central neighborhoods."}
                  {city.name === "New York" &&
                    "The subway runs 24/7 and is the fastest way to travel around NYC. Yellow taxis and rideshare services are readily available."}
                  {city.name === "Rome" &&
                    "The historic center is best explored on foot. For longer distances, use the metro, buses, or taxis."}
                  {city.name === "Sydney" &&
                    "Opal cards make it easy to use trains, buses, and ferries. Ferries also offer scenic views of the harbor."}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Local Etiquette</h3>
                <p className="text-muted-foreground">
                  {city.name === "Tokyo" &&
                    "Bow when greeting people, remove shoes when entering homes, and avoid eating while walking. Tipping is not customary."}
                  {city.name === "Paris" &&
                    "Greet shop owners when entering and leaving. Learn basic French phrases. Tipping is appreciated but not required."}
                  {city.name === "New York" &&
                    "New Yorkers walk fast and value efficiency. Tipping 15-20% is expected for services. Stand to the right on escalators."}
                  {city.name === "Rome" &&
                    "Dress modestly when visiting churches. Lunch is typically 1-3 PM and dinner after 8 PM. Cappuccino is a morning-only drink."}
                  {city.name === "Sydney" &&
                    "Casual attire is widely accepted. Tipping is not expected but appreciated for exceptional service."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityDetail;
