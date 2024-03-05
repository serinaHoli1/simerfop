// simerfop.js

class Simerfop {
  constructor() {
    this.tasks = [];
    this.timer = null;
  }

  schedule(task, time) {
    const taskObj = { task, time };
    this.tasks.push(taskObj);
    this.sortTasks();
    this.startTimer();
  }

  startTimer() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        const currentTime = new Date().getTime();
        for (const taskObj of this.tasks) {
          if (taskObj.time <= currentTime) {
            taskObj.task();
            this.removeTask(taskObj);
          }
        }
        if (this.tasks.length === 0) {
          clearInterval(this.timer);
          this.timer = null;
        }
      }, 1000); // Check every second
    }
  }

  removeTask(taskObj) {
    const index = this.tasks.indexOf(taskObj);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  sortTasks() {
    this.tasks.sort((a, b) => a.time - b.time);
  }

  clear() {
    clearInterval(this.timer);
    this.timer = null;
    this.tasks = [];
  }
}

module.exports = Simerfop;
