export interface TravelPost {
  id: number;
  title: string;
  city_name: string;
  description: string;
  picture: string;
  picture_url: string;
  created_at: string;
}

export type TravelPosts = TravelPost[];
