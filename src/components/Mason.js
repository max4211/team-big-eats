import React from "react";
import "./Mason.css";
import Masonry from "react-masonry-css";
import "../img/IMG_1.JPEG";


function Mason() {

    var maxWidth = 300;

    var items = [
        {id: 1, src: "../img/IMG_1.JPEG", alt: "Ramen"},
        {id: 2, src: "../img/IMG_2.JPEG", alt: "Ramen"},
        {id: 3, src: "../img/IMG_3.JPEG", alt: "Ramen"},
        {id: 4, src: "../img/IMG_4.JPEG", alt: "Ramen"}
    ];
      
      // Convert array to JSX items
      items = items.map(function(item) {
        return <img key={item.id} src={require(item.src)} alt={item.alt} width={maxWidth}/>
      });
      
  return (
    <div className="App">
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items}
      </Masonry>
    </div>
  );
}

export default Mason;
