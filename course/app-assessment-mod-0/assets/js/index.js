$(() => {
  $('#retrieve').on('click', getTasks);
  $('#task-button').on('click', postTask);
  $('.remove').on('click', deleteTask);
});

function getTasks() {
  $.get('/gettasks', (tasks) => {
    for (let i = 0; i < tasks.length; i++) {
      $('#task-list').append('<li>' + tasks[i].item + '<button class="remove">X</button></li>');
    }
  });
}

function postTask() {
  let task = { 'item': $('#task').val() };
  console.log(task);
  $.post('http://localhost:3333/posttask', task, (task) => {
    $('#task-list').append('<li>' + task.item + '<button class="remove">X</button></li>');
  });
}

// Delete
function deleteTask() {
  console.log('inside deleteTask')
}

