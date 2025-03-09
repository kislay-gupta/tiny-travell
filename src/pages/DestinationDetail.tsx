import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Star, Bookmark } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/shared/Navbar";

// City data (in a real app, this would come from an API)
// This is a subset of the data from CityDetail.tsx
const cityData = {
  tokyo: {
    name: "Tokyo",
    destinations: [
      {
        name: "Tokyo Tower",
        slug: "tokyo-tower",
        image:
          "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1836&q=80",
        description:
          "Iconic landmark offering panoramic views of Tokyo's skyline and beyond.",
        fullDescription:
          "Tokyo Tower is a communications and observation tower in the Shiba-koen district of Minato, Tokyo, Japan. At 332.9 meters (1,092 ft), it is the second-tallest structure in Japan. The structure is an Eiffel Tower-inspired lattice tower that is painted white and international orange to comply with air safety regulations. Built in 1958, it was Japan's tallest structure until 2012 when the Tokyo Skytree was completed.",
        category: "Landmark",
        visitDuration: "2-3 hours",
        rating: 4.5,
        city: "Tokyo",
        citySlug: "tokyo",
        address:
          "Tokyo Tower, 4 Chome-2-8 Shibakoen, Minato, Tokyo 105-0011, Japan",
        tips: [
          "Visit at sunset for spectacular views of the city",
          "The Main Observatory is at 150m, and there's a Special Observatory at 250m",
          "Consider purchasing tickets online in advance to avoid lines",
        ],
        nearbyAttractions: ["Zojoji Temple", "Shiba Park", "Mori Art Museum"],
      },
      {
        name: "Shibuya Crossing",
        slug: "shibuya-crossing",
        image:
          "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        description:
          "The world's busiest pedestrian crossing and an icon of modern Tokyo.",
        fullDescription:
          "Shibuya Crossing is one of the busiest and most famous pedestrian crossings in the world, located in front of the Shibuya Station Hachikō exit in Tokyo, Japan. When the traffic lights turn red at this busy intersection, pedestrians surge into the crossing from all directions, sometimes up to 3,000 people at a time. It's an impressive demonstration of ordered chaos and has become a symbol of modern Tokyo.",
        category: "Urban",
        visitDuration: "30 minutes",
        rating: 4.7,
        city: "Tokyo",
        citySlug: "tokyo",
        address:
          "Shibuya Crossing, 2 Chome-2-1 Dogenzaka, Shibuya City, Tokyo 150-0043, Japan",
        tips: [
          "View from the Starbucks in the Tsutaya building for a great overhead perspective",
          "Visit at night when it's illuminated by neon lights",
          "Be aware of your belongings in the crowd",
        ],
        nearbyAttractions: ["Hachiko Statue", "Shibuya 109", "Center Gai"],
      },
      {
        name: "Meiji Shrine",
        slug: "meiji-shrine",
        image:
          "https://images.unsplash.com/photo-1583766395091-2eb9994ed094?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
        description:
          "Serene Shinto shrine dedicated to Emperor Meiji and Empress Shoken.",
        fullDescription:
          "Meiji Shrine (明治神宮, Meiji Jingū) is a Shinto shrine dedicated to the deified spirits of Emperor Meiji and his consort, Empress Shōken. Located in a forest that covers an area of 70 hectares, it consists of 120,000 trees of 365 different species, which were donated by people from all parts of Japan when the shrine was established. The shrine itself is composed of two major areas: Naien, the inner precinct, which is centered on the shrine buildings and includes a treasure museum; and Gaien, the outer precinct, which includes the Meiji Memorial Picture Gallery and a variety of sports facilities.",
        category: "Cultural",
        visitDuration: "1-2 hours",
        rating: 4.8,
        city: "Tokyo",
        citySlug: "tokyo",
        address:
          "Meiji Shrine, 1-1 Yoyogikamizonocho, Shibuya City, Tokyo 151-8557, Japan",
        tips: [
          "Try to arrive early in the morning to avoid crowds",
          "Respect the sacred atmosphere by being quiet and following shrine etiquette",
          "Take time to write a wish on an ema (wooden plaque)",
        ],
        nearbyAttractions: ["Yoyogi Park", "Harajuku", "Omotesando"],
      },
    ],
  },
  paris: {
    name: "Paris",
    destinations: [
      {
        name: "Eiffel Tower",
        slug: "eiffel-tower",
        image:
          "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        description:
          "The most famous symbol of Paris and one of the world's most recognized landmarks.",
        fullDescription:
          "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower from 1887 to 1889 as the centerpiece of the 1889 World's Fair. The Eiffel Tower is 330 meters (1,083 ft) tall and was the tallest man-made structure in the world for 41 years until the Chrysler Building in New York City was finished in 1930. It has become a global cultural icon of France and one of the most recognizable structures in the world.",
        category: "Monument",
        visitDuration: "2-3 hours",
        rating: 4.6,
        city: "Paris",
        citySlug: "paris",
        address:
          "Eiffel Tower, Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
        tips: [
          "Book tickets online in advance to avoid long lines",
          "Consider visiting at night to see the hourly light show",
          "The second floor often offers the best views for photography",
        ],
        nearbyAttractions: [
          "Champ de Mars",
          "Les Invalides",
          "Seine River Cruises",
        ],
      },
      {
        name: "Louvre Museum",
        slug: "louvre-museum",
        image:
          "https://images.unsplash.com/photo-1565099824688-ab48da5b875d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
        description:
          "World's largest art museum and home to thousands of works, including the Mona Lisa.",
        fullDescription:
          "The Louvre, or the Louvre Museum, is the world's largest art museum and a historic monument in Paris, France. A central landmark of the city, it is located on the Right Bank of the Seine. Approximately 38,000 objects from prehistory to the 21st century are exhibited over an area of 72,735 square meters (782,910 square feet). In 2019, the Louvre received 9.6 million visitors, making it the most visited museum in the world.",
        category: "Museum",
        visitDuration: "3-4 hours",
        rating: 4.8,
        city: "Paris",
        citySlug: "paris",
        address: "Louvre Museum, Rue de Rivoli, 75001 Paris, France",
        tips: [
          "Don't try to see everything in one visit; focus on specific sections",
          "The Mona Lisa is smaller than many expect and is always crowded",
          "Enter through the less crowded Porte des Lions entrance",
        ],
        nearbyAttractions: [
          "Tuileries Garden",
          "Palais Royal",
          "Pont des Arts",
        ],
      },
      {
        name: "Montmartre",
        slug: "montmartre",
        image:
          "https://images.unsplash.com/photo-1550340499-a6c60coesnob?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
        description:
          "Historic hill district known for its artistic history and the Sacré-Cœur Basilica.",
        fullDescription:
          "Montmartre is a large hill in Paris's 18th arrondissement. It is 130 meters high and gives its name to the surrounding district, part of the Right Bank. Montmartre is primarily known for its artistic history, the white-domed Basilica of the Sacré-Cœur on its summit, and as a nightclub district. At the end of the 19th century and at the beginning of the twentieth, during the Belle Époque, many artists worked and had studios in or around Montmartre, including Modigliani, Monet, Renoir, and Van Gogh.",
        category: "District",
        visitDuration: "3-4 hours",
        rating: 4.7,
        city: "Paris",
        citySlug: "paris",
        address: "Montmartre, 75018 Paris, France",
        tips: [
          "Take the funicular to avoid climbing the steep steps to Sacré-Cœur",
          "Visit Place du Tertre to see artists at work",
          "Beware of scammers targeting tourists in the area",
        ],
        nearbyAttractions: [
          "Sacré-Cœur Basilica",
          "Moulin Rouge",
          "Place du Tertre",
        ],
      },
    ],
  },
  "new-york": {
    name: "New York",
    destinations: [
      {
        name: "Central Park",
        slug: "central-park",
        image:
          "https://images.unsplash.com/photo-1545853332-147d5073187e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
        description:
          "An urban oasis in the heart of Manhattan with lakes, walking paths, and recreational areas.",
        fullDescription:
          "Central Park is an urban park in New York City located between the Upper West and Upper East Sides of Manhattan. It is the fifth-largest park in the city, covering 843 acres (341 ha). Central Park is the most visited urban park in the United States, with an estimated 42 million visitors annually as of 2016, and is the most filmed location in the world. The park contains several lakes and ponds, walking tracks, two ice-skating rinks, the Central Park Zoo, the Central Park Conservatory Garden, a wildlife sanctuary, the Delacorte Theater, outdoor amphitheater, Belvedere Castle, Swedish Cottage Marionette Theatre, and the historic Carousel.",
        category: "Park",
        visitDuration: "2-6 hours",
        rating: 4.9,
        city: "New York",
        citySlug: "new-york",
        address: "Central Park, New York, NY, USA",
        tips: [
          "Rent a bike to cover more ground in less time",
          "Check the park's calendar for free performances in summer",
          "The Ramble is perfect for bird watching",
        ],
        nearbyAttractions: [
          "Metropolitan Museum of Art",
          "American Museum of Natural History",
          "Guggenheim Museum",
        ],
      },
      {
        name: "Empire State Building",
        slug: "empire-state-building",
        image:
          "https://images.unsplash.com/photo-1550342618-75ec9de190e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
        description:
          "Iconic Art Deco skyscraper with observatories offering spectacular views of the city.",
        fullDescription:
          "The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan, New York City. The building was designed by Shreve, Lamb & Harmon and built from 1930 to 1931. Its name is derived from \"Empire State\", the nickname of the state of New York. The building has a roof height of 1,250 feet (380 m) and stands a total of 1,454 feet (443.2 m) tall, including its antenna. The Empire State Building stood as the world's tallest building until the construction of the World Trade Center in 1970; following its collapse in 2001, the Empire State Building was again the city's tallest skyscraper until 2012.",
        category: "Landmark",
        visitDuration: "1-2 hours",
        rating: 4.7,
        city: "New York",
        citySlug: "new-york",
        address: "Empire State Building, 20 W 34th St, New York, NY 10001, USA",
        tips: [
          "Visit early in the morning or late at night to avoid crowds",
          "Skip-the-line tickets are worth the extra cost",
          "The 86th floor outdoor observatory offers the classic experience",
        ],
        nearbyAttractions: [
          "Macy's Herald Square",
          "Bryant Park",
          "Times Square (walking distance)",
        ],
      },
      {
        name: "Times Square",
        slug: "times-square",
        image:
          "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
        description:
          "Bustling commercial intersection famous for its bright lights, Broadway theaters, and New Year's Eve celebration.",
        fullDescription:
          'Times Square is a major commercial intersection, tourist destination, entertainment center, and neighborhood in Midtown Manhattan, New York City. It is formed by the junction of Broadway, Seventh Avenue, and 42nd Street. Together with adjacent Duffy Square, Times Square is a bowtie-shaped space occupying the blocks between 45th and 47th Streets. Brightly lit by numerous billboards and advertisements, it is sometimes referred to as "The Crossroads of the World", "The Center of the Universe", and "The Heart of the World". Times Square is one of the world\'s most visited tourist attractions, drawing an estimated 50 million visitors annually.',
        category: "District",
        visitDuration: "1-2 hours",
        rating: 4.5,
        city: "New York",
        citySlug: "new-york",
        address: "Times Square, Manhattan, NY 10036, USA",
        tips: [
          "Visit at night to experience the full effect of the lights",
          "TKTS booth offers discounted Broadway tickets",
          "Be aware of costumed characters who expect tips for photos",
        ],
        nearbyAttractions: [
          "Broadway Theaters",
          "Madame Tussauds",
          "Rockefeller Center",
        ],
      },
    ],
  },
  rome: {
    name: "Rome",
    destinations: [
      {
        name: "Colosseum",
        slug: "colosseum",
        image:
          "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1996&q=80",
        description:
          "Ancient amphitheater that once hosted gladiatorial games and other spectacles.",
        fullDescription:
          "The Colosseum, also known as the Flavian Amphitheatre, is an oval amphitheatre in the centre of the city of Rome, Italy. Built of travertine limestone, tuff, and brick-faced concrete, it was the largest amphitheatre ever built at the time and held 50,000 to 80,000 spectators. It was used for gladiatorial contests and public spectacles such as mock sea battles, animal hunts, executions, re-enactments of famous battles, and dramas based on Classical mythology. The building ceased to be used for entertainment in the early medieval era. It was later reused for such purposes as housing, workshops, quarters for a religious order, a fortress, a quarry, and a Christian shrine.",
        category: "Historical",
        visitDuration: "2-3 hours",
        rating: 4.8,
        city: "Rome",
        citySlug: "rome",
        address: "Colosseum, Piazza del Colosseo, 1, 00184 Roma RM, Italy",
        tips: [
          "Buy combined tickets for the Colosseum, Roman Forum, and Palatine Hill",
          "Consider a guided tour to better understand the history",
          "Visit early in the morning or late afternoon to avoid crowds",
        ],
        nearbyAttractions: [
          "Roman Forum",
          "Palatine Hill",
          "Arch of Constantine",
        ],
      },
      {
        name: "Vatican City",
        slug: "vatican-city",
        image:
          "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=1676&q=80",
        description:
          "World's smallest independent state and home to St. Peter's Basilica and the Vatican Museums.",
        fullDescription:
          "Vatican City, officially the Vatican City State, is an independent city-state and enclave surrounded by Rome, Italy. The Vatican City is the smallest sovereign state in the world by both area and population. Within Vatican City are religious and cultural sites such as St. Peter's Basilica, the Sistine Chapel, and the Vatican Museums. They feature some of the world's most famous paintings and sculptures. The unique economy of Vatican City is supported financially by donations from the faithful, by the sale of postage stamps and souvenirs, fees for admission to museums, and sales of publications.",
        category: "Cultural",
        visitDuration: "4-6 hours",
        rating: 4.9,
        city: "Rome",
        citySlug: "rome",
        address: "Vatican City, Vatican City",
        tips: [
          "Book tickets for the Vatican Museums well in advance",
          "Dress modestly (no bare shoulders or knees)",
          "Wednesday mornings are busy due to Papal audiences",
        ],
        nearbyAttractions: [
          "St. Peter's Square",
          "Castel Sant'Angelo",
          "Via della Conciliazione",
        ],
      },
      {
        name: "Trevi Fountain",
        slug: "trevi-fountain",
        image:
          "https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
        description:
          "Baroque masterpiece and Rome's largest fountain, famous for the coin-tossing tradition.",
        fullDescription:
          "The Trevi Fountain (Italian: Fontana di Trevi) is a fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi and completed by Giuseppe Pannini and several others. Standing 26.3 meters (86 ft) high and 49.15 meters (161.3 ft) wide, it is the largest Baroque fountain in the city and one of the most famous fountains in the world. The fountain has appeared in several notable films, including Federico Fellini's La Dolce Vita, the eponymous Three Coins in the Fountain, and Roman Holiday.",
        category: "Landmark",
        visitDuration: "30 minutes",
        rating: 4.7,
        city: "Rome",
        citySlug: "rome",
        address: "Trevi Fountain, Piazza di Trevi, 00187 Roma RM, Italy",
        tips: [
          "Visit early morning or late evening to avoid crowds",
          "Tradition says that throwing a coin into the fountain ensures a return to Rome",
          "The area is known for pickpockets, so be vigilant",
        ],
        nearbyAttractions: ["Spanish Steps", "Pantheon", "Piazza Colonna"],
      },
    ],
  },
  sydney: {
    name: "Sydney",
    destinations: [
      {
        name: "Sydney Opera House",
        slug: "sydney-opera-house",
        image:
          "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80",
        description:
          "World-famous architectural icon and performing arts center on Sydney Harbour.",
        fullDescription:
          "The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour in Sydney, New South Wales, Australia. It is one of the 20th century's most famous and distinctive buildings. Designed by Danish architect Jørn Utzon, but completed by an Australian architectural team headed by Peter Hall, the building was formally opened on 20 October 1973 after a gestation beginning with Utzon's 1957 selection as winner of an international design competition. The Opera House was inscribed as a UNESCO World Heritage Site in 2007. It is one of the most popular visitor attractions in Australia, with more than eight million people visiting the site annually, and approximately 350,000 visitors taking a guided tour of the building each year.",
        category: "Arts",
        visitDuration: "1-3 hours",
        rating: 4.9,
        city: "Sydney",
        citySlug: "sydney",
        address:
          "Sydney Opera House, Bennelong Point, Sydney NSW 2000, Australia",
        tips: [
          "Take a guided tour to learn about the architecture and history",
          "Check the schedule for performances during your visit",
          "The Opera Bar offers great views for a drink or meal",
        ],
        nearbyAttractions: [
          "Sydney Harbour Bridge",
          "Royal Botanic Garden",
          "Circular Quay",
        ],
      },
      {
        name: "Bondi Beach",
        slug: "bondi-beach",
        image:
          "https://images.unsplash.com/photo-1523428461295-92041d10dda9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
        description:
          "Famous beach known for its golden sands, surfing conditions, and vibrant atmosphere.",
        fullDescription:
          "Bondi Beach is one of Australia's most famous beaches and among the world's most well-known beaches. Located in the suburb of Bondi, in Sydney, New South Wales, Australia. Bondi Beach is about 1 kilometer long and receives many visitors throughout the year. It is a popular beach for tourists, surfers, and locals alike. Surf lifesavers patrol the beach to ensure safety, and the beach is marked with flags indicating safe swimming areas. The beach is also known for its vibrant atmosphere, with numerous cafes, restaurants, and shops lining the nearby streets.",
        category: "Beach",
        visitDuration: "2-6 hours",
        rating: 4.7,
        city: "Sydney",
        citySlug: "sydney",
        address:
          "Bondi Beach, Queen Elizabeth Dr, Bondi Beach NSW 2026, Australia",
        tips: [
          "Swim between the red and yellow flags for safety",
          "Try the Bondi to Coogee coastal walk for spectacular views",
          "Visit the Bondi Icebergs Pool for a unique swimming experience",
        ],
        nearbyAttractions: [
          "Bondi Icebergs",
          "Bondi Markets",
          "Tamarama Beach",
        ],
      },
      {
        name: "Sydney Harbour Bridge",
        slug: "sydney-harbour-bridge",
        image:
          "https://images.unsplash.com/photo-1506374322094-6021fc3926f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80",
        description:
          "Iconic steel arch bridge spanning Sydney Harbour, offering bridge climbs and spectacular views.",
        fullDescription:
          'The Sydney Harbour Bridge is a heritage-listed steel through arch bridge across Sydney Harbour that carries rail, vehicular, bicycle, and pedestrian traffic between the Sydney central business district (CBD) and the North Shore. The dramatic view of the bridge, the harbour, and the nearby Sydney Opera House is an iconic image of Sydney, and Australia itself. The bridge is nicknamed "The Coathanger" because of its arch-based design. Under the direction of Dr John Bradfield of the NSW Department of Public Works, the bridge was designed and built by British firm Dorman Long and Co Ltd and opened in 1932. The bridge\'s design was influenced by the Hell Gate Bridge in New York City.',
        category: "Landmark",
        visitDuration: "1-3 hours",
        rating: 4.8,
        city: "Sydney",
        citySlug: "sydney",
        address: "Sydney Harbour Bridge, Sydney NSW, Australia",
        tips: [
          "The BridgeClimb experience offers unparalleled views but is expensive",
          "Walking across the bridge is free and also offers great views",
          "Pylon Lookout is a cheaper alternative to BridgeClimb",
        ],
        nearbyAttractions: ["Sydney Opera House", "The Rocks", "Luna Park"],
      },
    ],
  },
};

const DestinationDetail = () => {
  const { citySlug, destinationSlug } = useParams();
  const [destination, setDestination] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // In a real app, you would fetch data from an API here
    setIsLoading(true);

    if (
      citySlug &&
      destinationSlug &&
      cityData[citySlug as keyof typeof cityData]
    ) {
      const city = cityData[citySlug as keyof typeof cityData];
      const foundDestination = city.destinations.find(
        (d: { slug: string }) => d.slug === destinationSlug
      );

      if (foundDestination) {
        setDestination(foundDestination);
        setIsLoading(false);
      } else {
        toast({
          title: "Destination not found",
          description:
            "The destination you're looking for doesn't exist in our database.",
          variant: "destructive",
        });
        setIsLoading(false);
      }
    } else {
      toast({
        title: "Invalid URL",
        description: "The URL you've entered is invalid.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  }, [citySlug, destinationSlug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-lg font-medium">Loading...</div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen bg-white">
        <div className="pt-32 px-6 md:px-10 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
          <p className="mb-8">
            We couldn't find the destination you're looking for.
          </p>
          <Link
            to={citySlug ? `/cities/${citySlug}` : "/"}
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {citySlug
              ? `Return to ${cityData[citySlug as keyof typeof cityData]?.name}`
              : "Return to Home"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${destination.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/80 text-white text-xs font-medium mb-4">
            {destination.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {destination.name}
          </h1>
          <div className="flex items-center justify-center">
            <MapPin className="h-5 w-5 mr-2" />
            <span>
              {destination.city},{" "}
              {destination.citySlug === "new-york"
                ? "USA"
                : destination.citySlug === "tokyo"
                ? "Japan"
                : destination.citySlug === "paris" ||
                  destination.citySlug === "rome"
                ? "Europe"
                : destination.citySlug === "sydney"
                ? "Australia"
                : "Unknown"}
            </span>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="bg-secondary/10 py-4 border-b">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link
              to={`/cities/${destination.citySlug}`}
              className="hover:text-primary"
            >
              {destination.city}
            </Link>
            <span>/</span>
            <span className="text-muted-foreground">{destination.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="flex items-center mr-4">
                <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                <span className="text-sm">{destination.visitDuration}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-sm">{destination.rating}/5</span>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">
              About {destination.name}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {destination.fullDescription}
            </p>

            <h3 className="text-xl font-semibold mb-4">Local Tips</h3>
            <ul className="space-y-3 mb-8">
              {destination.tips.map((tip: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary mt-2 mr-3"></span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-4">Nearby Attractions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {destination.nearbyAttractions.map(
                (attraction: string, index: number) => (
                  <div key={index} className="bg-secondary/10 p-3 rounded-lg">
                    <span>{attraction}</span>
                  </div>
                )
              )}
            </div>

            <Link
              to={`/cities/${destination.citySlug}`}
              className="inline-flex items-center text-primary hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {destination.city}
            </Link>
          </div>

          {/* Right Column - Additional Information */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-secondary/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <address className="not-italic">{destination.address}</address>
              </div>
              <div className="h-48 bg-muted rounded overflow-hidden mb-4">
                {/* In a real app, this would be a map component */}
                <div className="h-full w-full flex items-center justify-center bg-secondary/30">
                  <span className="text-sm text-muted-foreground">
                    Map view would be displayed here
                  </span>
                </div>
              </div>
              <button className="w-full py-2.5 px-4 bg-secondary hover:bg-secondary/80 text-foreground rounded-md flex items-center justify-center">
                <MapPin className="h-4 w-4 mr-2" />
                Get Directions
              </button>
            </div>

            {/* Save Card */}
            <div className="bg-primary/5 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Planning a visit?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Save {destination.name} to your travel wishlist and plan your
                trip later.
              </p>
              <button className="w-full py-2.5 px-4 bg-primary hover:bg-primary/90 text-white rounded-md flex items-center justify-center">
                <Bookmark className="h-4 w-4 mr-2" />
                Save to Wishlist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Destinations */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto bg-secondary/10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          More in {destination.city}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityData[destination.citySlug as keyof typeof cityData].destinations
            .filter((d: { name: string }) => d.name !== destination.name)
            .slice(0, 3)
            .map(
              (
                relatedDestination: {
                  name: string;
                  slug: string;
                  image: string;
                  category: string;
                  description: string;
                },
                index: number
              ) => (
                <Link
                  key={index}
                  to={`/cities/${destination.citySlug}/${relatedDestination.slug}`}
                  className="group block overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="aspect-[3/2] overflow-hidden bg-muted">
                    <img
                      src={relatedDestination.image}
                      alt={relatedDestination.name}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block py-1 px-2 rounded-full bg-secondary/20 text-xs font-medium mb-2">
                      {relatedDestination.category}
                    </span>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {relatedDestination.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedDestination.description}
                    </p>
                  </div>
                </Link>
              )
            )}
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;
