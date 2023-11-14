import React from "react";
import { OptimizedBlock } from "../compare/OptimizedBlock";
import { UserCreatedBlock } from "../compare/UserCreatedBlock";

import "../styles/compare.css";

export const Compare = () => {
  return (
    <div className="compare">
      <div className="div-2">
        <div className="text-wrapper-73">Compare</div>
        <div className="text-wrapper-74">User Created</div>
        <div className="text-wrapper-75">Optimized</div>
        <UserCreatedBlock className="user-created-block-instance" />
        <OptimizedBlock className="optimized-block-instance" />
      </div>
    </div>
  );
};
