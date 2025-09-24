class Task {
  constructor(description) {
    this.description = description;
    this.done = false;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    const task = new Task(description);
    this.tasks.push(task);
  }

  listTasks() {
    return this.tasks.map((task, index) => ({
      index,
      description: task.description,
      done: task.done,
    }));
  }

  markTaskAsDone(index) {
    if (this.tasks[index]) {
      this.tasks[index].done = true;
    }
  }
}
