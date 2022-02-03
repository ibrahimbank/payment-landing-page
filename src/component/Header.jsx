import React from "react";
import AtmCard from "../images/Gradient.png";
import Paypal from "../images/paypal.png";
import Visa from "../images/visa-logo.png";
import Discover from "../images/Discover-logo.png";

function Header() {
  return (
    <div className="header">
      <div className="atm">
        <div className="info">
          <h4>Payment Information</h4>
          <h6>Choose your method of payment</h6>
        </div>

        <img src={AtmCard} alt="atm card" className="atm__card" />
      </div>
      <div className="form__container">
        <div className="logos">
          <img className="logo__img visa" src={Visa} alt="visa logo" />
          <img
            className="logo__img discover"
            src={Discover}
            alt="discover logo"
          />
          <img className="logo__img paypal" src={Paypal} alt="paypal logo" />
        </div>

        <form action="" className="form">
          <label htmlFor=" Credit Card Number" className="form__input">
            Credit Card Number
            <input
              type="text"
              placeholder="4324 5433 9382 1030"
              className="text"
            />
          </label>
          <label htmlFor=" Expiration date" className="form__input">
            Expiration date
            <input type="text" placeholder="03/24" className="text" />
          </label>
          <label htmlFor="  Security code" className="form__input">
            Security code
            <input type="text" placeholder="420" className="text" />
          </label>
          <label htmlFor=" Postal code" className="form__input">
            Postal code
            <input type="text" placeholder="10119" className="text" />
          </label>

          <label htmlFor="check">
            <input type="radio" name="checkbox" id="checkbox" />
            Use this card for next time purchase
          </label>

          <button className="form__btn">Add Card</button>
        </form>
      </div>
    </div>
  );
}

export default Header;
