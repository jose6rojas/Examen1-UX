import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({value}) {
  const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                Vaciar Carrito
              </button>
            </Link>
            <h5>
              <span className="text-title">
                Subtotal:
              </span>
              <strong> L {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">
                Impuesto:
              </span>
              <strong> L {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">
                Total:
              </span>
              <strong> L {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
