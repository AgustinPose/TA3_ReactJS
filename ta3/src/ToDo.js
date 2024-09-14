import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h2 className="title is-3">TO DO LIST</h2>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="Escribe una tarea"
          />
        </div>
        <div className="control">
          <button className="button is-primary" onClick={handleAddTask}>
            Agregar Tarea
          </button>
        </div>
      </div>

      <ul className="box">
        {tasks.map((t, index) => (
          <li key={index} className="level">
            <div className="level-left">
              <span className="level-item">{t}</span>
            </div>
            <div className="level-right">
              <button className="button is-danger is-small" onClick={() => handleDeleteTask(index)}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
