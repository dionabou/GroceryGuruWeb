import React, { useState } from "react";
import { OptimizedBlock } from "./OptimizedBlock";
import { UserCreatedBlock } from "./UserCreatedBlock";
import { Link } from "react-router-dom";
import "../styles/compare.css";

export const Compare = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);

  const handleSelect = (block) => {
    setSelectedBlock(block);
  };

  return (
    <div className="compare">
      <div className="div-2">
        <div className="text-wrapper-73">Compare</div>
        <div className="text-wrapper-74">User Created</div>
        <UserCreatedBlock
          className="user-created-block-instance"
          onSelect={handleSelect}
        />
        <div className="text-wrapper-75">Optimized</div>
        <OptimizedBlock
          className="optimized-block-instance"
          onSelect={handleSelect}
        />
      </div>
      {/* Display selected block information */}
      {selectedBlock && (
        <div className="selected-block-info">
          <p>Selected Block: {selectedBlock}</p>
          {/* Add any additional information or components based on the selected block */}
          <Link to="../Main">Go to Main</Link>
        </div>
      )}
    </div>
  );
};
