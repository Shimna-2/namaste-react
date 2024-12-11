export const RestCard = ({ resList }) => {
  const {
    cloudinaryImageId = "",
    name = "Unknown Restaurant",
    avgRating = "N/A",
  } = resList?.info || {};

  return (
    <div className="res-card">
      <img
        className="resImg"
        alt="restaurant"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};
//higher order function
export const promtedCard = (RestCard) => {
  return (props) => {
    return (
      <div>
        <label>promoted</label>
        <RestCard {...props} />
      </div>
    );
  };
};
