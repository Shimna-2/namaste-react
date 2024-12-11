import { RestCard, promtedCard } from "./components/RestCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

export const Body = () => {
  const [list, setList] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestPromotedCard = promtedCard(RestCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      const json = await response.json();

      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      console.log(list);

      setList(restaurants);
      setFilterRestaurant(restaurants);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search"
            onClick={() => {
              const filtered = list.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const topRated = list.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setFilterRestaurant(topRated);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurant, index) => (
          <Link key={restaurant.id || index} to={"/rest/" + restaurant.info.id}>
            {restaurant.info.promoted ? (
              <RestPromotedCard resList={restaurant} />
            ) : (
              <RestCard resList={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
