const TaskManager = require('./taskManager');

describe('TaskManager', () => {
  let manager;

  beforeEach(() => {
    manager = new TaskManager();
  });

  test('should add a task', () => {
    manager.addTask('Test task');
    const tasks = manager.listTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0].description).toBe('Test task');
    expect(tasks[0].done).toBe(false);
  });

  test('should list tasks with correct properties', () => {
    manager.addTask('Task 1');
    manager.addTask('Task 2');
    const tasks = manager.listTasks();
    expect(tasks).toEqual([
      { index: 0, description: 'Task 1', done: false },
      { index: 1, description: 'Task 2', done: false },
    ]);
  });

  test('should mark a task as done', () => {
    manager.addTask('Task to complete');
    manager.markTaskAsDone(0);
    const tasks = manager.listTasks();
    expect(tasks[0].done).toBe(true);
  });

  test('should not mark a non-existent task as done', () => {
    manager.addTask('Only task');
    manager.markTaskAsDone(5); // out of bounds
    const tasks = manager.listTasks();
    expect(tasks[0].done).toBe(false);
  });

  test('should remove a task', () => {
    manager.addTask('Task 1');
    manager.addTask('Task 2');
    manager.removeTask(0);
    const tasks = manager.listTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0].description).toBe('Task 2');
  });

  test('should not remove a task with invalid index', () => {
    manager.addTask('Task 1');
    manager.removeTask(-1);
    manager.removeTask(5);
    const tasks = manager.listTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0].description).toBe('Task 1');
  });
});
