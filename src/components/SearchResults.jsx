import { useTheme } from "../ThemeContext";
import React, { useState } from "react";

const SearchResults = () => {
  const { theme } = useTheme();
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const sampleResults = [
    {
      id: 1,
      name: "Cozy Studio",
      price: "5000",
      type: "Flat",
      location: "Baneshwor, Kathmandu",
      imageUrl: "https://via.placeholder.com/150",
      rooms: "1 BHK",
      size: "450 sqft",
      description:
        "A cozy studio apartment located in the heart of the city, perfect for singles or couples.",
      reviews: [
        { rating: 4, comment: "Great place, very cozy and clean!" },
        { rating: 5, comment: "Amazing experience, highly recommend!" },
      ],
    },
    {
      id: 2,
      name: "Spacious 2 BHK",
      price: "15000",
      type: "Apartment",
      location: "Kalanki, Kathmandu",
      imageUrl: "https://via.placeholder.com/150",
      rooms: "2 BHK",
      size: "850 sqft",
      description:
        "A spacious 2 BHK apartment with modern amenities, located in a serene neighborhood.",
      reviews: [
        { rating: 3, comment: "Nice place but a bit pricey." },
        { rating: 4, comment: "Spacious and well-maintained." },
      ],
    },
    {
      id: 3,
      name: "Affordable Room",
      price: "7000",
      type: "Room",
      location: "Kupondole, Kathmandu",
      imageUrl: "https://via.placeholder.com/150",
      rooms: "1 BHK",
      size: "300 sqft",
      description:
        "An affordable room in a quiet area, ideal for students or young professionals.",
      reviews: [
        { rating: 2, comment: "Could be cleaner." },
        { rating: 3, comment: "Good for the price." },
      ],
    },
  ];

  const handleToggleDetails = (id) => {
    setSelectedProperty(selectedProperty === id ? null : id);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sampleResults.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + sampleResults.length) % sampleResults.length
    );
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    console.log("Rating:", rating);
    console.log("Comment:", comment);
  };

  const currentProperty = sampleResults[currentIndex];

  return (
    <div className="w-full h-1/2 p-2 pb-11">
      <div
        className={`bg-${
          theme === "dark" ? "gray-700 text-white" : "white text-gray-900"
        } p-6 rounded-lg shadow-lg w-full h-full mx-auto max-w-2xl`}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Search Results
        </h2>
        <div className="relative">
          <div className="flex justify-center">
            <div
              className={`border border-gray-200 text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full ${
                theme === "dark" ? "bg-gray-600" : ""
              }`}
            >
              <img
                src={currentProperty.imageUrl}
                alt={currentProperty.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                {currentProperty.name}
              </h3>
              <p className="text-gray-700 mb-1">
                Price: Rs. {currentProperty.price}
              </p>
              <p className="text-gray-700 mb-1">Type: {currentProperty.type}</p>
              <p className="text-gray-700 mb-1">
                Location: {currentProperty.location}
              </p>
              <button
                onClick={() => handleToggleDetails(currentProperty.id)}
                className={`text-${
                  theme === "dark" ? "yellow" : "orange"
                }-500 hover:text-${
                  theme === "dark" ? "yellow" : "orange"
                }-700 focus:outline-none`}
              >
                {selectedProperty === currentProperty.id
                  ? "Hide Details"
                  : "Show Details"}
              </button>
              {selectedProperty === currentProperty.id && (
                <div className="mt-4">
                  <p className="text-gray-700 mb-1">
                    Rooms: {currentProperty.rooms}
                  </p>
                  <p className="text-gray-700 mb-1">
                    Size: {currentProperty.size}
                  </p>
                  <p className="text-gray-700">{currentProperty.description}</p>
                </div>
              )}
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={handlePrev}
              className={`bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none ${
                theme === "dark" ? "text-black" : ""
              }`}
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className={`bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none ${
                theme === "dark" ? "text-black" : ""
              }`}
            >
              Next
            </button>
          </div>
        </div>
        {selectedProperty === currentProperty.id && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Reviews:</h4>
            {currentProperty.reviews.map((review, index) => (
              <div key={index} className="mb-2 p-2 border rounded-lg">
                <p className="font-semibold">Rating: {review.rating}</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        )}
        <div className="mt-6">
          <div
            className={`flex justify-center items-center ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <div
              className={`bg-white p-4 md:p-6 rounded-md shadow-md w-[62%] flex flex-col ${
                theme === "dark" ? "dark:bg-gray-700 dark:text-white" : ""
              }`}
            >
              <h2
                className={`text-2xl font-semibold mb-4 md:mb-8 ${
                  theme === "dark" ? "dark:text-gray-200" : ""
                }`}
              >
                Provide Your Review
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className={`block mb-2 ${
                      theme === "dark" ? "dark:text-gray-300" : ""
                    }`}
                  >
                    Rating:
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rate) => (
                      <button
                        key={rate}
                        type="button"
                        className={`w-10 h-10 flex items-center justify-center border rounded-full ${
                          rate <= rating ? "bg-yellow-500" : "bg-gray-300"
                        }`}
                        onClick={() => handleRating(rate)}
                      >
                        {rate}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label
                    className={`block mb-2 ${
                      theme === "dark" ? "dark:text-gray-300" : ""
                    }`}
                  >
                    Comment:
                  </label>
                  <textarea
                    placeholder="Your Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className={`w-full px-3 py-3 border border-gray-300 rounded ${
                      theme === "dark" ? "dark:bg-gray-600 dark:text-white" : ""
                    }`}
                  ></textarea>
                </div>
                <div class="flex justify-center">
                  <button
                    type="submit"
                    className={`w-40 px-3 py-3 ${
                      theme === "dark"
                        ? "bg-gray-600 hover:bg-gray-700"
                        : "bg-orange-500 hover:bg-orange-900"
                    } text-white rounded`}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
