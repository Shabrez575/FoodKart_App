import { CDN_URL } from "../utils/constant";
import { useDispatch} from "react-redux";
import { addItems} from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  //console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

 console.log(dummy);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-bottom row text-start"
        >
          <div className="col-sm-6">
            <div className="py-2">
              {" "}
              <span>{item.card.info.name}</span>
              <span>
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="col-sm-4 p-1 text-center">
            {/* <div className="food-img p-4"> */}
            <img
              src={CDN_URL + item.card.info.imageId}
              className="food-img h-75 w-75" alt="food"
            />
            {/* <button className="btn btn-outline-success m-1 shadow-lg rounded-pill fw-bold" onClick={handleAddItem}> Add+ </button> */}

             <button className="btn btn-outline-success m-1 shadow-lg rounded-pill fw-bold" onClick= {() => handleAddItem(item)}> Add+ </button>
          </div>
          {/* </div> */}
        </div>
      ))}
    </div>
  );
};
export default ItemList;
