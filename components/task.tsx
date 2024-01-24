"use client";

import "./task.css";

import React, { useState, useEffect } from "react";

type Props = {
  key: number;
  task: string;
  completed: boolean;
  complete: any;
};

const Task = (props: Props): React.ReactElement => {
  const { key, task, completed, complete } = props;
  return (
    <div className="task-container">
      <div
        onClick={complete}
        className={completed ? "checked" : "not-checked"}
      ></div>
      <div className="task-text">{task}</div>
    </div>
  );
};
export default Task;
