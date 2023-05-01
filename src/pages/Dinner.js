import React from "react";
import "./Dinner.css";

function Dinner() {

  return (
    <div className="dinner-wrapper">
        <div className="dinner-menu">
            <h1>Dinner Menu</h1>
            <div className="d-section">
                <h3 className="section-name">Drinks</h3>
                <div className="menu-item">
                    <p className="strong-name">Red Wine</p>
                    <p className="light-desc">TODO description</p>
                </div>
            </div>
            <div className="d-section">
                <h3 className="section-name">Main</h3>
                <div className="menu-item">
                    <p className="strong-name">Steak</p>
                    <p className="light-desc">Sous vide filet, truffle butter</p>
                </div>
                <div className="menu-item">
                    <p className="strong-name">Potatoes</p>
                    <p className="light-desc">Kenji's crispy potatoes, rosemary/thyme oil</p>
                </div>
                <div className="menu-item">
                    <p className="strong-name">Broccoli</p>
                    <p className="light-desc">Gotta have a vegetable, lemon and garlic</p>
                </div>
            </div>
            <div className="d-section">
                <h3 className="section-name">Dessert</h3>
                <div className="menu-item">
                    <p className="strong-name">Chocolate Lava Cakes</p>
                    <p className="light-desc">Vanilla ice cream, berries</p>
                </div>
            </div>
            <div className="d-footer">
                <p className="p-footer">Executive Chef Max Smith</p>
            </div>

        </div>
      
    </div>
  );
}

export default Dinner;
