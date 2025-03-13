import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TravelPost } from "@/types";
import CityCard from "@/components/CityCard";
import axios from "axios";
import { BASE_URL } from "@/constants";
import { useEffect, useState } from "react";

export function MoreCities({ currentCityId }: { currentCityId: string }) {
  const [filteredCities, setFilteredCities] = useState<TravelPost[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/pictures`);
        const data: TravelPost[] = response.data;
        const filtered = data.filter(
          (city) => city.id.toString() !== currentCityId
        );
        setFilteredCities(filtered);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, [currentCityId]);

  if (filteredCities.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        No other cities available
      </div>
    );
  }

  return (
    <ScrollArea className="w-full lg:whitespace-nowrap rounded-md border">
      <div className="flex w-full space-x-4 p-4 lg:space-x-6 lg:p-6">
        {filteredCities.map((city, index) => (
          <div className="w-[250px]" key={city.id}>
            <CityCard
              city={{
                title: city.city_name,
                slug: city.id.toString(),
                image: city.picture_url,
                description: city.description,
              }}
              index={index}
            />
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
