import { useEffect, useState } from "react";
import CreateCard from "./createCard";

type FoodItem = {
  cloudinaryImageId: string | "Image";
  name: string;
  cuisines: Array<string>;
  area: string;
  id: number;
};

// filtering restaurants by search
function FilterList(
  searchText: string,
  restaurants: Array<FoodItem>
): Array<FoodItem> {
  return restaurants.filter((r) => r.name.toLowerCase().includes(searchText.toLowerCase()));
}

const Body = () => {
  const [allRestaurants, setallRestaurants] = useState<Array<FoodItem>>([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState<
    Array<FoodItem>
  >([]);
  const [searchText, setsearchText] = useState<string>("");

  useEffect(() => {
    getRestaurants();
  }, []);

  // const user =localStorage.getItem('user') as string
  // const as = JSON.parse(user)
  // console.log(JSON.parse(user))
  // console.log(as["isLoggedIn"])
  // console.log("body getting called");


  async function getRestaurants() {
    // console.log("calling here");

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?page=0&ignoreServiceability=true&lat=22.69048851118229&lng=88.39274636162034&pageType=SEE_ALL&sortBy=RELEVANCE&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const result = await data.json();
    // console.log(result.data.cards);
    const reqData: Array<FoodItem> = result.data.cards.map((item: any) => {
      return {
        cloudinaryImageId: item.data.data.cloudinaryImageId,
        name: item.data.data.name,
        cuisines: item.data.data.cuisines,
        area: item.data.data.area,
        id: item.data.data.id,
      };
    });
    // console.log("reqData ", reqData);

    setallRestaurants(reqData);
    setfilteredRestaurants(reqData);
  }

  return (
    <>
      <div id="searchBox">
        <input
          value={searchText}
          className="border-black"
          onChange={(e) => setsearchText(e.target.value)}
          onKeyDown={(e)=>{
            if(e.code=='Enter'){
              const data = FilterList(searchText, allRestaurants);
              {setfilteredRestaurants(data)}
            }
          }}
          autoFocus
        />
        <button
          onClick={() => {
            // getting data
            const data = FilterList(searchText, allRestaurants);

            // setting restaurants to be data
            {
              setfilteredRestaurants(data);
            }
          }}
        >
          {" "}
          search{" "}
        </button>
      </div>
      <div className="restraunt-list justify-center">
        {filteredRestaurants.map((res) => {
          return <CreateCard {...res} key={res.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
