import { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../features/counter/products";
import { Addproduct } from "../features/counter/cartSlice";

function Cart() {
  const prod = useSelector((state) => state.product);
  console.log(prod);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <>
      <h1>This the Cart page</h1>
      <Row>
        {prod.map((product) => {
          return (
            <Col key={product.id}>
              <Card style={{ width: "12rm" }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      dispatch(Addproduct(prod));
                    }}
                  >
                    number: {product.id}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Cart;
