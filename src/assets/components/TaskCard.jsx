import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";

const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="task_card">
      <div className="task_content">
        <p className="task_text">{title}</p>
      </div>

      <div className="task_card_footer">
        <div className="task_card_tags">
          {tags.length > 0 ? (
            tags.map((tag, idx) => (
              <Tag 
                key={idx} 
                tagName={tag} 
                selected={true} 
                selectTag={() => {}}
              />
            ))
          ) : (
            <span className="no_tags">No tags</span>
          )}
        </div>
        
        <button 
          className="task_delete" 
          onClick={() => handleDelete(index)}
          aria-label="Delete task"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
        </button>
      </div>
    </article>
  );
};

export default TaskCard;