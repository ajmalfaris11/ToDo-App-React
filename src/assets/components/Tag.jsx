import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  //props fucntion
  const tagStyle = {
    HTML: { backgroundColor: "#fda821",color: "white"},
    CSS: { backgroundColor: "#15d4c8",color: "white" },
    JavaScript: { backgroundColor: "#ffd12c",color: "white" },
    React: { backgroundColor: "#4cdafc",color: "white" },
    Default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <div>
      <button 
        type="button"
        className="tag"
        style={selected ? tagStyle[tagName]: tagStyle.Default}
        onClick={() => selectTag(tagName)}>
        {tagName}
      </button>
    </div>
  );
};

export default Tag;
