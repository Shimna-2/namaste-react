import useRestmenu from "../../utilis/useRestmenu";
import { Shimmer } from "../Shimmer";
import { useParams } from "react-router-dom";

const RestMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestmenu(resId);
  //it return id

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(",")}</h2>

      <ul className="menuall">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{"RS."}
            {item.card.info.price / 100}-
            {
              <img
                className="resImgid"
                alt="restaurant"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${item.card.info.imageId}`}
              />
            }
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestMenu;
