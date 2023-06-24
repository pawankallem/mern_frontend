import NavBar from "../Navbar";
import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<any>([]);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const token = localStorage.getItem("token");

  const handleOrderNow = (title: string) => {
    console.log(`Order Now: ${title}`);
  };

  const handleAddToCart = (title: string) => {
    console.log(`Add to Cart: ${title}`);
  };

  const handleMouseEnter = (title: string) => {
    setHoveredProduct(title);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const config: AxiosRequestConfig = {
    url: "https://mern-backend-thmt.onrender.com/api/item",
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const handleFetchItems = async () => {
    try {
      axios(config)
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.log("Error in Home page getting Items error : ", error);
    }
  };

  useEffect(() => {
    if (token) {
      handleFetchItems();
    } else {
      navigate("/login");
    }
  }, [token]);

  return (
    <div>
      <NavBar />
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Home Page</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item: any) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between relative"
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto"
              />
              <p className="text-gray-700">{item.price}</p>
              <p className="text-gray-700">{item.category}</p>
              <p className="text-gray-700">{item.description}</p>
              <div
                className={`mt-4 absolute bottom-0 left-0 right-0 transition-opacity duration-300 ${
                  hoveredProduct === item.title ? "opacity-100" : "opacity-0"
                }`}
              >
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
                  onClick={() => handleOrderNow(item.title)}
                >
                  Order Now
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleAddToCart(item.title)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
