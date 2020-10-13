import React from "react";
import ReactDOM from "react-dom";

const img1 = "https://picsum.photos/200";
const img2 = "https://picsum.photos/200";
const img3 = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img className="images" alt="Random" src={img1 + "?grayscale"} />
    <img className="images" alt="Random2" src={img2 + "?sepia"} />
    <img className="images" alt="Random3" src={img3} />
  </div>,
  document.getElementById("root")
);
