import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DestinationCard from "@/components/DestinationCard";
import { ArrowLeft, Search } from "lucide-react";

// Sample data for popular destinations (expanded from the original list)
const allDestinations = [
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
    name: "Louvre Museum",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    description:
      "World's largest art museum and home to the iconic Mona Lisa painting.",
    category: "Museum",
    city: "Paris",
    citySlug: "paris",
  },
  {
    name: "Statue of Liberty",
    image:
      "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    description:
      "Iconic neoclassical sculpture symbolizing freedom and democracy.",
    category: "Monument",
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
    name: "Times Square",
    image:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description:
      "Iconic commercial intersection known for its bright lights, Broadway theaters, and vibrant atmosphere.",
    category: "Urban",
    city: "New York",
    citySlug: "new-york",
  },
  {
    name: "Vatican City",
    image:
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
    description:
      "The world's smallest independent state and home to St. Peter's Basilica and the Sistine Chapel.",
    category: "Religious",
    city: "Rome",
    citySlug: "rome",
  },
  {
    name: "Bondi Beach",
    image:
      "https://images.unsplash.com/photo-1578859695770-6d6faf92c0e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description:
      "Iconic beach known for its golden sand, turquoise waters, and surf-friendly waves.",
    category: "Beach",
    city: "Sydney",
    citySlug: "sydney",
  },
];

// Categories for filtering
const categories = [
  "All",
  ...Array.from(new Set(allDestinations.map((dest) => dest.category))).sort(),
];

const PopularDestinations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Filter destinations based on search term and selected category
  const filteredDestinations = allDestinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      destination.city.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || destination.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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
            Popular Destinations
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-8">
            Discover the most beloved travel destinations around the world.
            These iconic places attract millions of visitors each year for good
            reason.
          </p>

          {/* Search Box */}
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search destinations..."
              className="pl-10 pr-4 py-3 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <section className="py-8 px-6 md:px-10 border-b bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-secondary/50 hover:bg-secondary/70 text-foreground"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredDestinations.map((destination, index) => (
              <DestinationCard
                key={destination.name}
                destination={destination}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">
              No destinations found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Never miss new destinations
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest travel inspiration,
              insider tips, and exclusive offers.
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
                className="px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
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

export default PopularDestinations;
