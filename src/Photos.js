import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <a href={photo.src.original} target="_blank" key={index}>
              <img src={photo.src.portrait} className="img-fluid"></img>
            </a>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
