import React from "react";
import "./Dinner.css";

function Dinner() {

  return (
    <div className="dinner-wrapper">
        <div className="dinner-menu text-center">
            <div className="d-section text-uppercase header-section">
                <h1>Dinner Menu</h1>
                <p>Tuesday May 2nd, 2023</p>
            </div>
            <div className="d-section">
                {/* <h5 className="font-weight-bold">Drinks</h5> */}
                <div className="menu-item ">
                    <p className="text-uppercase mb-0">Red Wine</p>
                    <p className="light-desc">Red wine, bottle says "dry"</p>
                </div>
            </div>
            <div className="d-section">
                {/* <h3 className="font-weight-bold">Main</h3> */}
                <div className="menu-item">
                    <p className="text-uppercase mb-0">Steak</p>
                    <p className="light-desc">Sous vide filet, truffle butter</p>
                </div>
                <div className="menu-item">
                    <p className="text-uppercase mb-0">Potatoes</p>
                    <p className="light-desc">Kenji's potatoes, herb oil</p>
                </div>
                <div className="menu-item">
                    <p className="text-uppercase mb-0">Broccoli</p>
                    <p className="light-desc">Need a vegetable</p>
                </div>
            </div>
            <div className="d-section">
                {/* <h3 className="font-weight-bold">Dessert</h3> */}
                <div className="menu-item">
                    <p className="text-uppercase mb-0">Chocolate Lava Cakes</p>
                    <p className="light-desc">Vanilla ice cream, berries</p>
                </div>
            </div>
            <div className="d-section">
                <p className="p-footer">Executive Chef Max Smith</p>
            </div>

        </div>
      
    </div>
  );
}

export default Dinner;
