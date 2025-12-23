import { Link } from 'react-router-dom';
import './header.css';

export function Header({ cart = [] }) { // ۱. مقدار پیش‌فرض را آرایه خالی بگذارید
  let totalQuantity = 0;

  // ۲. استفاده از optional chaining برای اطمینان از وجود cart
  cart?.forEach((cartItem) => {
     totalQuantity += cartItem.quantity;
  });

  return (
    <>
      <div className="header">
        <div className="left-section">
          <Link to="/" className="header-link">
            {/* ۳. یک اسلش اول آدرس عکس‌ها بگذارید تا در تمام صفحات به درستی لود شوند */}
            <img className="logo" src="/images/logo-white.png" />
            <img className="mobile-logo" src="/images/mobile-logo-white.png" />
          </Link>
        </div>
        {/* بقیه کد شما ... */}
        <div className="right-section">
          <Link className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </Link>

          <Link className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="/images/icons/cart-icon.png" />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </Link>
        </div>
      </div>
    </>
  );
}