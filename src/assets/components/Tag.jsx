import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyles = {
    HTML: { 
      backgroundColor: selected ? "#f97316" : "#fff7ed", 
      color: selected ? "#ffffff" : "#f97316",
      borderColor: "#f97316"
    },
    CSS: { 
      backgroundColor: selected ? "#06b6d4" : "#ecfeff", 
      color: selected ? "#ffffff" : "#06b6d4",
      borderColor: "#06b6d4"
    },
    JavaScript: { 
      backgroundColor: selected ? "#eab308" : "#fefce8", 
      color: selected ? "#ffffff" : "#eab308",
      borderColor: "#eab308"
    },
    React: { 
      backgroundColor: selected ? "#3b82f6" : "#eff6ff", 
      color: selected ? "#ffffff" : "#3b82f6",
      borderColor: "#3b82f6"
    },
    default: { 
      backgroundColor: "#f8fafc", 
      color: "#64748b",
      borderColor: "#e2e8f0"
    },
  };

  const style = tagStyles[tagName] || tagStyles.default;

  return (
    <button
      type="button"
      className={`tag ${selected ? 'tag_selected' : ''}`}
      style={style}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;