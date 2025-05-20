import { Button } from "react-bootstrap";
import styles from "./style.module.css";
const { product, productImg } = styles;

const Product = () => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src="https://media.alshaya.com/adobe/assets/urn:aaid:aem:4237c89d-a474-4c13-8f39-28e22705c042/as/Newborn-CE-wk20-26-v2.jpg?width=750&format=webply&optimize=medium"
          alt=""
        />
      </div>
      <h2>Title</h2>
      <h3>10 EGP</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
