"use client";

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const eventDetails = {
  "1": {
    name: "Music Concert",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439",
    description: "An electrifying music concert featuring top artists.",
    date: "2025-06-15",
    location: "Madison Square Garden, NY",
    reviews: [
      {
        id: 1,
        user: "Alice Johnson",
        rating: 5,
        comment: "Amazing concert! The energy was incredible.",
      },
      {
        id: 2,
        user: "Bob Williams",
        rating: 4,
        comment: "Great performances, but the crowd was a bit overwhelming.",
      },
    ],
  },
  "2": {
    name: "Tech Conference",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    description:
      "A gathering of tech enthusiasts discussing the latest innovations.",
    date: "2025-07-20",
    location: "Silicon Valley Conference Center, CA",
    reviews: [
      {
        id: 1,
        user: "Charlie Brown",
        rating: 5,
        comment: "Incredible insights from industry leaders!",
      },
      {
        id: 2,
        user: "Diana Ross",
        rating: 4,
        comment: "Very informative, but could use more networking sessions.",
      },
    ],
  },
  "3": {
    name: "Food Festival",
    image: "https://images.unsplash.com/photo-1565895405138-6f9eb6d62a80",
    description:
      "A paradise for food lovers with delicious cuisines from around the world.",
    date: "2025-08-10",
    location: "Central Park, NY",
    reviews: [
      {
        id: 1,
        user: "Ethan Clark",
        rating: 5,
        comment: "Best food experience ever! So many flavors to explore.",
      },
      {
        id: 2,
        user: "Fiona Green",
        rating: 4,
        comment: "Loved the variety, but it was a bit crowded.",
      },
    ],
  },
  "4": {
    name: "Art Exhibition",
    image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    description: "An exquisite display of contemporary and classical art.",
    date: "2025-09-05",
    location: "The Louvre, Paris",
    reviews: [
      {
        id: 1,
        user: "George Martin",
        rating: 5,
        comment: "Absolutely breathtaking collection!",
      },
      {
        id: 2,
        user: "Hannah Lee",
        rating: 4,
        comment: "Beautiful pieces, but the lighting could be improved.",
      },
    ],
  },
  "5": {
    name: "Sports Meetup",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2607",
    description: "A fun and engaging sports meetup for enthusiasts.",
    date: "2025-10-12",
    location: "Staples Center, LA",
    reviews: [
      {
        id: 1,
        user: "Ian Rogers",
        rating: 5,
        comment: "Fantastic experience with fellow sports lovers!",
      },
      {
        id: 2,
        user: "Julia Adams",
        rating: 4,
        comment: "Great games, but parking was a challenge.",
      },
    ],
  },
  "6": {
    name: "Startup Pitch Event",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    description: "A platform for aspiring entrepreneurs to pitch their ideas.",
    date: "2025-11-22",
    location: "Silicon Valley Hub, CA",
    reviews: [
      {
        id: 1,
        user: "Kevin White",
        rating: 5,
        comment: "Great exposure and amazing ideas!",
      },
      {
        id: 2,
        user: "Laura Green",
        rating: 4,
        comment: "Good networking, but needs better time management.",
      },
    ],
  },
  "7": {
    name: "Comedy Show",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    description: "An evening filled with laughter and top comedians.",
    date: "2025-12-05",
    location: "Apollo Theater, NY",
    reviews: [
      {
        id: 1,
        user: "Michael Scott",
        rating: 5,
        comment: "Hilarious! Haven't laughed this much in years!",
      },
      {
        id: 2,
        user: "Nina Brown",
        rating: 4,
        comment: "Great comedians, but the seats were uncomfortable.",
      },
    ],
  },
  "8": {
    name: "Book Fair",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    description: "A haven for book lovers with a wide range of collections.",
    date: "2026-01-10",
    location: "London Book Center",
    reviews: [
      {
        id: 1,
        user: "Oscar Clark",
        rating: 5,
        comment: "Loved the variety of books and author interactions!",
      },
      {
        id: 2,
        user: "Patricia Kim",
        rating: 4,
        comment: "Great selection, but some books were overpriced.",
      },
    ],
  },
  "9": {
    name: "Gaming Expo",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    description: "A paradise for gamers showcasing the latest in gaming tech.",
    date: "2026-02-15",
    location: "E3 Convention Center, LA",
    reviews: [
      {
        id: 1,
        user: "Quincy Blake",
        rating: 5,
        comment: "Best gaming experience ever!",
      },
      {
        id: 2,
        user: "Rachel Carter",
        rating: 4,
        comment: "Amazing games, but the lines were too long.",
      },
    ],
  },
  "10": {
    name: "Photography Workshop",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    description:
      "A workshop for photography enthusiasts to enhance their skills.",
    date: "2026-03-20",
    location: "National Art Gallery, London",
    reviews: [
      {
        id: 1,
        user: "Steve Nash",
        rating: 5,
        comment: "Learned so much! Highly recommended.",
      },
      {
        id: 2,
        user: "Tina Bell",
        rating: 4,
        comment: "Great workshop, but needed more hands-on sessions.",
      },
    ],
  },
  "11": {
    name: "Fitness Bootcamp",
    image: "https://images.unsplash.com/photo-1599058917212-d9066cc5d5de",
    description: "An intense workout session with top trainers.",
    date: "2026-04-05",
    location: "Central Park, NY",
    reviews: [
      {
        id: 1,
        user: "Uma Harris",
        rating: 5,
        comment: "Challenging but totally worth it!",
      },
      {
        id: 2,
        user: "Victor Young",
        rating: 4,
        comment: "Great exercises, but too exhausting for beginners.",
      },
    ],
  },

};




export default function EventDetailPage() {
  const { id } = useParams();
  const event = eventDetails[id as keyof typeof eventDetails];

  return (
    <div className="container mx-auto p-6">
      {/* Event Details Section */}
      {event ? (
        <>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-60 object-cover rounded-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl text-center font-bold">
                {event.name}
              </CardTitle>
              <p className="text-gray-600 mt-2 text-center">
                {event.description}
              </p>
              <p className="text-gray-500 text-center mt-2">📅 {event.date}</p>
              <p className="text-gray-500 text-center">📍 {event.location}</p>
            </CardContent>
          </Card>

          {/* Reviews Section
          <div className="max-w-2xl mx-auto mt-8">
            <h2 className="text-xl font-bold mb-4">Attendee Reviews</h2>
            <div className="space-y-4">
              {event.reviews.map((review) => (
                <div
                  key={review.id}
                  className="p-4 border rounded-lg shadow-sm bg-white"
                >
                  <h3 className="font-semibold">{review.user}</h3>
                  <p className="text-yellow-500">
                    {"⭐".repeat(review.rating)}{" "}
                    <span className="text-gray-500">({review.rating}/5)</span>
                  </p>
                  <p className="text-gray-700 mt-1">{review.comment}</p>
                </div>
              ))}
            </div>
          </div> */}
        </>
      ) : (
        <p className="text-center text-gray-500 text-lg font-semibold">
          Event not found.
        </p>
      )}
    </div>
  );
}
