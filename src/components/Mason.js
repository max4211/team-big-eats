import React from "react";
import "./Mason.css";
import Masonry from "react-masonry-css";

/* PHOTO IMPORTS*/
import Lava from "../img/IMG_50.JPEG";
import Scallops from "../img/IMG_115.JPEG";
import Omlette from "../img/IMG_114.JPEG";
import Tacos from "../img/IMG_113.JPEG";
import Steak from "../img/IMG_112.JPEG";
import Sandwhich from "../img/IMG_111.JPEG";
import Salad from "../img/IMG_110.JPEG";
import Cookies from "../img/IMG_109.JPEG";
import Shrimp from "../img/IMG_108.JPEG";
import SteakSandwhich from "../img/IMG_107.JPEG";
import LambRack from "../img/IMG_106.JPEG";
import EggsHam from "../img/IMG_105.JPEG";
import AvoToast from "../img/IMG_104.JPEG";
import Waffles from "../img/IMG_103.JPEG";
import Pho from "../img/IMG_102.JPEG";
import Ramen from "../img/IMG_101.JPEG";




function Mason() {

    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };

    var maxWidth = "500px";

    var items = [
        {id: 1, src: Ramen, alt: "Ramen"},
        {id: 2, src: Pho, alt: "Pho"},
        {id: 3, src: Waffles, alt: "Waffles"},
        {id: 4, src: AvoToast, alt: "AvoToast"},
        {id: 5, src: EggsHam, alt: "EggsHam"},
        {id: 6, src: LambRack, alt: "LambRack"},
        {id: 7, src: SteakSandwhich, alt: "SteakSandwhich"},
        {id: 8, src: Shrimp, alt: "Shrimp"},
        {id: 9, src: Cookies, alt: "Cookies"},
        {id: 10, src: Salad, alt: "Salad"},
        {id: 11, src: Sandwhich, alt: "Sandwhich"},
        {id: 12, src: Steak, alt: "Steak"},
        {id: 13, src: Tacos, alt: "Tacos"},
        {id: 14, src: Omlette, alt: "Omlette"},
        {id: 15, src: Scallops, alt: "Scallops"},
        // {id: 16, src: Lava, alt: "Lava"}
    ];
      
      // Convert array to JSX items
      items = items.map(function(item) {
        return <img key={item.id} src={item.src} alt={item.alt} width={maxWidth} className="food-photo" />
      });
      
  return (
    <div className="mason-wrapper">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items}
      </Masonry>
    </div>
  );
}

export default Mason;
