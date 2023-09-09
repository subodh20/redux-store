import { useSelector } from "react-redux/es/hooks/useSelector";
const NavBar = () => {
  const { amount } = useSelector((state) => state.cart);
  return <>{amount}</>;
};
export default NavBar;
