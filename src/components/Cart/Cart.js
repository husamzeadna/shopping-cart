import React from "react";
import "../../css/Cart/Cart.css";
function Cart(props) {
  return (
    <div className="cart-wrapper">
      <div className="cart-title">Empty Cart</div>
      <div className="cart-items">
        {props.cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.imageUrl} alt="" />
            <div className="cart-info">
              <div>
                <p>title : {item.title}</p>
                <p>qty </p>
                <p>price : ${item.price}</p>
              </div>
              <button>remove from cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
