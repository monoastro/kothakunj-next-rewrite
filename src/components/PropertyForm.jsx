import React, { useState } from "react";
import { useTheme } from "../ThemeContext";

const PropertyForm = () => {
  const [province, setProvince] = useState("");
  const [districts, setDistricts] = useState([]);
  const [formData, setFormData] = useState({
    location: "",
    city: "",
    area: "",
    bedrooms: 0,
    bathrooms: 0,
    roomSize: "",
    kitchenRooms: 0,
    extraRoom: 0,
    rent: 0,
    priceRange: "",
    amenities: [],
    furnished: "",
    preferredGender: "",
    description: "",
    houseFrontPicture: null,
    gallery: null,
  });
  const { theme } = useTheme();

  const districtData = {
    Koshi: ["Ilam", "Jhapa", "Taplejung", "Tehrathum", "Sankhuwasabha", "Panchthar", "Morang", "Sunsari"],
    Madhesh: ["Saptari", "Siraha", "Dhanusha", "Mahottari", "Sarlahi", "Rautahat", "Bara", "Parsa"],
    Bagmati: ["Bhaktapur", "Kathmandu", "Lalitpur", "Dhading", "Dolakha", "Makwanpur", "Nuwakot", "Ramechhap", "Rasuwa", "Sindhuli", "Sindhupalchok"],
    Gandaki: ["Baglung", "Gorkha", "Kaski", "Lamjung", "Manang", "Mustang", "Myagdi", "Parbat", "Syangja", "Tanahu"],
    Lumbini: ["Arghakhanchi", "Banke", "Bardiya", "Dang", "Gulmi", "Kapilvastu", "Palpa", "Parasi", "Rolpa", "Rukum", "Salyan", "Dang"],
    Karnali: ["Jajarkot", "Jumla", "Kalikot", "Mugu", "Dolpa", "Humla"],
    Sudhurpaschim: ["Baitadi", "Dadeldhura", "Darchula", "Kailali", "Kanchanpur"],
  };

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
    setDistricts(districtData[selectedProvince] || []);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        amenities: checked
          ? [...prevData.amenities, value]
          : prevData.amenities.filter((amenity) => amenity !== value),
      }));
    } else if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: e.target.files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });

    try {
      const response = await fetch("API_URL_HERE", {
        method: "POST",
        body: formPayload,
      });

      if (response.ok) {
        alert("Property posted successfully!");
        // Reset form or handle success
      } else {
        alert("Failed to post property.");
        // Handle error
      }
    } catch (error) {
      console.error("Error posting property:", error);
      alert("An error occurred while posting the property.");
    }
  };

  return (
    <div
        className={`w-full h-full mx-auto ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white"
        } shadow-md rounded-lg`}
      >
      <div
        className={`w-4/5 h-full mx-auto p-4 ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white"
        } shadow-md rounded-lg`}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Property Details Form
        </h2>
        <p className="text-center text-yellow-600 mb-4">
          Before Post Your Property You Need To Login First
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className={`block ${
                theme === "dark" ? "text-white" : "text-gray-700"
              }`}
            >
              Enter your property location*
            </label>
            <input
              className={`w-full p-2 border border-gray-300 rounded ${
                theme === "dark" ? "bg-gray-700 text-white" : ""
              }`}
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className={`block ${
                  theme === "dark" ? "text-white" : "text-gray-700"
                }`}
              >
                Province*
              </label>
              <select
                className={`w-full p-2 border border-gray-300 rounded ${
                  theme === "dark" ? "bg-gray-700 text-white" : ""
                }`}
                value={province}
                onChange={handleProvinceChange}
              >
                <option value="" disabled>
                  Select your Province
                </option>
                <option value="Koshi">Koshi</option>
                <option value="Madhesh">Madhesh</option>
                <option value="Bagmati">Bagmati</option>
                <option value="Gandaki">Gandaki</option>
                <option value="Lumbini">Lumbini</option>
                <option value="Karnali">Karnali</option>
                <option value="Sudhurpaschim">Sudhurpaschim</option>
              </select>
            </div>
            <div>
              <label
                className={`block ${
                  theme === "dark" ? "text-white" : "text-gray-700"
                }`}
              >
                District*
              </label>
              <select
                className={`w-full p-2 border border-gray-300 rounded ${
                  theme === "dark" ? "bg-gray-700 text-white" : ""
                }`}
                name="district"
                value={formData.district}
                onChange={handleInputChange}
              >
                <option value="">Choose District</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className={`block ${
                  theme === "dark" ? "text-white" : "text-gray-700"
                }`}
              >
                City*
              </label>
              <input
                className={`w-full p-2 border border-gray-300 rounded ${
                  theme === "dark" ? "bg-gray-700 text-white" : ""
                }`}
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                className={`block ${
                  theme === "dark" ? "text-white" : "text-gray-700"
                }`}
              >
                Area/Tole*
              </label>
              <input
                className={`w-full p-2 border border-gray-300 rounded ${
                  theme === "dark" ? "bg-gray-700 text-white" : ""
                }`}
                type="text"
                name="area"
                value={formData.area}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className={`block ${
                  theme === "dark" ? "text-white" : "text-gray-700"
                }`}
              >
                Total number of bedrooms*
              </label>
              <input
                className={`w-full p-2 border border-gray-300 rounded ${
                  theme === "dark" ? "bg-gray-700 text-white" : ""
                }`}
                type="number"
                name="bedrooms"
                min="0"
                value={formData.bedrooms}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                className={`block ${
                  theme === "dark" ? "text-white" : "text-gray-700"
                }`}
              >
                Total number of bathrooms*
              </label>
              <input
                className={`w-full p-2 border border-gray-300 rounded ${
                  theme === "dark" ? "bg-gray-700 text-white" : ""
                }`}
                type="number"
                name="bathrooms"
                min="0"
                value={formData.bathrooms}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label
              className={`block ${
                theme === "dark" ? "text-white" : "text-gray-700"
              }`}
            >
              Room size*
            </label>
            <input
              className={`w-full p-2 border border-gray-300 rounded ${
                theme === "dark" ? "bg-gray-700 text-white" : ""
              }`}
              type="text"
              name="roomSize"
              value={formData.roomSize}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className={`block ${
                  theme === "dark" ? "text-white" : "text-gray-700"
                }`}
              >
                Total number of kitchen rooms*
              </label>
              <input
                className={`w-full p-2 border border-gray-300 rounded ${
                  theme === "dark" ? "bg-gray-700 text-white" : ""
                }`}
                type="number"
                name="kitchenRooms"
                min="0"
                value={formData.kitchenRooms}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                className={`block ${
                  theme === "dark" ? "text-white" : "text-gray-700"
                }`}
              >
                Extra room
              </label>
              <input
                className={`w-full p-2 border border-gray-300 rounded ${
                  theme === "dark" ? "bg-gray-700 text-white" : ""
                }`}
                type="number"
                name="extraRoom"
                min="0"
                value={formData.extraRoom}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className={`block ${
                  theme === "dark" ? "text-white" : "text-gray-700"
                }`}
              >
                Rent per month (Rs.)*
              </label>
              <input
                className={`w-full p-2 border border-gray-300 rounded ${
                  theme === "dark" ? "bg-gray-700 text-white" : ""
                }`}
                type="number"
                name="rent"
                min="0"
                value={formData.rent}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                className={`block ${
                  theme === "dark" ? "text-white" : "text-gray-700"
                }`}
              >
                Price*
              </label>
              <select
                className={`w-full p-2 border border-gray-300 rounded ${
                  theme === "dark" ? "bg-gray-700 text-white" : ""
                }`}
                name="priceRange"
                value={formData.priceRange}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Choose
                </option>
                <option value="Below 10000">Below 10000</option>
                <option value="10000-20000">10000-20000</option>
                <option value="20000-30000">20000-30000</option>
                <option value="Above 30000">Above 30000</option>
              </select>
            </div>
          </div>
          <div>
            <label
              className={`block ${
                theme === "dark" ? "text-white" : "text-gray-700"
              }`}
            >
              Property amenities*
            </label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="checkbox"
                  value="WiFi"
                  onChange={handleInputChange}
                />{" "}
                WiFi
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Parking"
                  onChange={handleInputChange}
                />{" "}
                Parking
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Garden"
                  onChange={handleInputChange}
                />{" "}
                Garden
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Water"
                  onChange={handleInputChange}
                />{" "}
                Water
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className={`block ${
                  theme === "dark" ? "text-white" : "text-gray-700"
                }`}
              >
                Furnished or Unfurnished*
              </label>
              <select
                className={`w-full p-2 border border-gray-300 rounded ${
                  theme === "dark" ? "bg-gray-700 text-white" : ""
                }`}
                name="furnished"
                value={formData.furnished}
                onChange={handleInputChange}
              >
                <option value="">Choose</option>
                <option value="furnished">Furnished</option>
                <option value="unfurnished">Unfurnished</option>
              </select>
            </div>
            <div>
              <label
                className={`block ${
                  theme === "dark" ? "text-white" : "text-gray-700"
                }`}
              >
                Preferred gender
              </label>
              <select
                className={`w-full p-2 border border-gray-300 rounded ${
                  theme === "dark" ? "bg-gray-700 text-white" : ""
                }`}
                name="preferredGender"
                value={formData.preferredGender}
                onChange={handleInputChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Mixed / Any">Mixed / Any</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <label
              className={`block ${
                theme === "dark" ? "text-white" : "text-gray-700"
              }`}
            >
              Description
            </label>
            <textarea
              className={`w-full p-2 border border-gray-300 rounded ${
                theme === "dark" ? "bg-gray-700 text-white" : ""
              }`}
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className={`block ${
                  theme === "dark" ? "text-white" : "text-gray-700"
                }`}
              >
                House front pictures*
              </label>
              <input
                className={`w-full p-2 border border-gray-300 rounded ${
                  theme === "dark" ? "bg-gray-700 text-white" : ""
                }`}
                type="file"
                name="houseFrontPicture"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                className={`block ${
                  theme === "dark" ? "text-white" : "text-gray-700"
                }`}
              >
                Gallery*
              </label>
              <input
                className={`w-full p-2 border border-gray-300 rounded ${
                  theme === "dark" ? "bg-gray-700 text-white" : ""
                }`}
                type="file"
                name="gallery"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className={`px-4 py-2 rounded hover:bg-blue-600 ${
                theme === "dark"
                  ? "bg-gray-700 text-white"
                  : "bg-blue-500 text-white"
              } transition duration-300`}
            >
              Post Your Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyForm;