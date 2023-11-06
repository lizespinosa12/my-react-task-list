import React, { useState } from 'react';
import Task from './Task';

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Estudiar React', completed: true },
    { id: 2, name: 'Planear clases', completed: true },
    { id: 3, name: 'Avanzar en la plataforma', completed: false },
    { id: 4, name: 'Hacer las compras', completed: false },
    { id: 5, name: 'Estudiar inglés', completed: true },
    { id: 6, name: 'Repasar el curso de marketing', completed: false },
  ]);

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h2>Lista de tareas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              name={task.name}
              completed={task.completed}
              onToggle={() => toggleTask(task.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;