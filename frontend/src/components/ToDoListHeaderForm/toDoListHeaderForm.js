import React from "react";
import { Button } from "react-bootstrap";

import ModalDialog from "../ModalDialog/modalDialog";
import "./toDoListHeaderForm.css";

/**
 * To do list header form component
 */
function ToDoListHeaderForm({
  searchText,
  handleSearchItem,
  handleOnSubmit,
  handleOnEdit,
  taskDescription,
  handleInputChange,
  handleClearAll,
  isListEmpty,
  isTextEntered,
  editButtonState,
}) {
  // Assigning props data for clear all list modal
  const variant = "danger";
  const Name = "Clear All";
  const bodyTitle = "Do you really want to clear all?";
  const bodyDescription = "This will remove all your tasks";
  const closeName = "Close";
  const actionName = "Clear All";
  const buttonBodyStyle = "todolist-clear";
  const buttonStyle = "todolist-clear__button";

  return (
    <div className="todolist-header__container">
      <h2>To Do List</h2>
      <div>
        <input
          disabled={!isListEmpty}
          className="todolist-search"
          type="text"
          value={searchText}
          placeholder="Search Here.."
          onChange={handleSearchItem}
        ></input>
      </div>
      <form className="todolist-form">
        <input
          className="todolist-form__input"
          type="text"
          placeholder="Add tasks here.."
          value={taskDescription}
          onChange={handleInputChange}
        ></input>
        {editButtonState ? (
          <Button
            onClick={handleOnEdit}
            disabled={!isTextEntered}
            className="todolist-form__submit"
          >
            Save
          </Button>
        ) : (
          <Button
            onClick={handleOnSubmit}
            disabled={!isTextEntered}
            className="todolist-form__submit"
          >
            Add
          </Button>
        )}

        <ModalDialog
          shouldEnable={isListEmpty}
          variant={variant}
          name={Name}
          bodyTitle={bodyTitle}
          bodyDescription={bodyDescription}
          closeName={closeName}
          actionName={actionName}
          handleAction={handleClearAll}
          buttonBodyStyle={buttonBodyStyle}
          buttonStyle={buttonStyle}
        />
      </form>
    </div>
  );
}

export default ToDoListHeaderForm;
