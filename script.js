function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskDatetime = document.getElementById('task-datetime');
  const taskText = taskInput.value.trim();
  const taskDateTime = taskDatetime.value;

  if (taskText === '') {
      alert('Please enter a task.');
      return;
  }

  const taskList = document.getElementById('task-list');

  const listItem = document.createElement('li');
  listItem.className = 'task-item';

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText + (taskDateTime ? ` (Due: ${new Date(taskDateTime).toLocaleString()})` : '');

  const actions = document.createElement('div');
  actions.className = 'task-actions';

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.onclick = () => editTask(listItem, taskContent);

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.onclick = () => completeTask(listItem);

  actions.appendChild(editButton);
  actions.appendChild(completeButton);

  listItem.appendChild(taskContent);
  listItem.appendChild(actions);

  taskList.appendChild(listItem);

  taskInput.value = '';
  taskDatetime.value = '';
}

function completeTask(listItem) {
  const taskContent = listItem.querySelector('span');
  taskContent.classList.toggle('completed');
}

function editTask(listItem, taskContent) {
  const newTaskText = prompt('Edit task:', taskContent.textContent.split(' (')[0]);
  if (newTaskText !== null && newTaskText.trim() !== '') {
      taskContent.textContent = newTaskText + (taskContent.textContent.includes(' (Due: ') ? taskContent.textContent.split(' (')[1] : '');
  }
}