import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="prices">
        <div className="name__price">
          <h5 className="price__name">Subtotal</h5>
          <h5 className="price">N2,597.00</h5>
        </div>
        <div className="name__price">
          <h5 className="price__name">Extimated TAX</h5>
          <h5 className="price">N119.64</h5>
        </div>
        <div className="name__price">
          <h5 className="price__name">
            Promotional Code: <span className="code">Z4KXLM9A</span>
          </h5>
          <h5 className="price">N60.00</h5>
        </div>
      </div>

      <div className="complete">
        <button className="btn__complete">Complete payment</button>

        <h4>TOTAL: N2556.64</h4>
      </div>
    </div>
  );
}

export default Footer;
