import { useDispatch, useSelector } from "react-redux";

function Products() {
  const prod = useSelector((state) => state.cartprod);
  console.log(prod);
  const dispatch = useDispatch();
  return (
    <>
      <h1>This the Products page</h1>
    </>
  );
}

export default Products;
