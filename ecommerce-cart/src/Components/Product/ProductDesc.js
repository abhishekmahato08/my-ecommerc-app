import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const ProductDescription = ({ product, addToCart }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // Get the product details based on the URL parameter.
  return {
    product: getProductDetails(ownProps.match.params.productId),
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription);
