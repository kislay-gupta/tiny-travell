import { useEffect } from "react";
import { Link } from "react-router-dom";
import DestinationCard from "@/components/DestinationCard";
import { ArrowLeft } from "lucide-react";

// Sample data for must-visit places (expanded from popularDestinations in Index.tsx)
const mustVisitPlaces = [
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
    name: "Great Wall of China",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description:
      "One of the greatest wonders of the world, this ancient defensive wall spans over 13,000 miles.",
    category: "Historical",
    city: "Beijing",
    citySlug: "beijing",
  },
  {
    name: "Machu Picchu",
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description:
      "The iconic Incan citadel set high in the Andes Mountains, offering breathtaking views and ancient ruins.",
    category: "Historical",
    city: "Cusco",
    citySlug: "cusco",
  },
  {
    name: "Taj Mahal",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    description:
      "A magnificent white marble mausoleum built by Emperor Shah Jahan in memory of his beloved wife.",
    category: "Monument",
    city: "Agra",
    citySlug: "agra",
  },
];

const MustVisitPlaces = () => {
  useEffect(() => {
    // Scroll to top when component mounts
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
            Must-Visit Places
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore our curated collection of iconic landmarks, natural wonders,
            and unforgettable destinations that should be on every traveler's
            bucket list.
          </p>
        </div>
      </header>

      {/* Places Grid */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mustVisitPlaces.map((place, index) => (
            <DestinationCard
              key={place.name}
              destination={place}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Plan your dream journey
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to explore these amazing destinations? Let us help you create
            the perfect itinerary for your next adventure.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12 px-6 md:px-10 border-t">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fleance Kofi Kyere. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MustVisitPlaces;
