import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { increment } from "../features/cart/cartSlicer";
const NavBar = () => {
  const { amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  return (
    <div>
      <p>{amount}</p>
      <button onClick={handleIncrement}>Update</button>
    </div>
  );
};
export default NavBar;
