import React from "react";

import "./noTaskAdded.css";

/**
 * Render when no task has been added in the todo list
 */
function NoTaskAdded() {
  return (
    <div className="tasknotadded">
      <h3>No task has been added Yet.! </h3>
      <h4>Add your task now</h4>
    </div>
  );
}

export default NoTaskAdded;
