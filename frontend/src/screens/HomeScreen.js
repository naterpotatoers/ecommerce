import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

import Product from "../components/Product";

const HomeScreen = () => {
  // useState for functional component since no constructor like Component
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
      const fetchProducts = async () => {
        const res = await axios.get("/api/products");
        setProducts(res.data);
      };

      fetchProducts();
    },
    [] /* put in things that might be changed - for now empty */
  );
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product, index) => (
          <Col sm={12} md={6} lg={4} key={index}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
