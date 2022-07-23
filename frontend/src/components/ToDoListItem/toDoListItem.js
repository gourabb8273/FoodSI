import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";

import "./toDoListItem.css";

/**
 * List to do item component
 */
function ToDoListItem({
  taskItem,
  taskIndex,
  handleDeleteItem,
  handleEditItem,
}) {
  /**
   * Delete the selected task item
   */
  function handleDeleteTask(e) {
    e.preventDefault();
    handleDeleteItem(taskIndex);
  }

  /**
   * Edit the selected task item
   */
  function handleEditTask(e) {
    e.preventDefault();
    handleEditItem(taskIndex);
  }

  return (
    <div className="todolist-items" key={taskIndex}>
      <div className="todolist-item__title">
        <h3>{`${taskIndex + 1}.  ${taskItem.taskTitle}`}</h3>
      </div>
      <div className="todolist-item__date">
        <h5>
          <Badge bg="success">{taskItem.createdDate}</Badge>
        </h5>
      </div>
      <div className="todolist-item__icons">
        <FontAwesomeIcon
          className="list-group__edit"
          icon={faEdit}
          onClick={handleEditTask}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="list-group__delete"
          icon={faTrashAlt}
          onClick={handleDeleteTask}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default ToDoListItem;
