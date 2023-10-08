import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return props.meaning.definition;
}
