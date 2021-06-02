//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
  tasks: [
    {
      text: 'Grocery shopping',
      completed: true,
    },
    {
      text: 'Clean yard',
      completed: false,
    },
    {
      text: 'Film course',
      completed: false,
    },
  ],
  getTasksToDo: function () {
    // let arr = [];
    // for (let i = 0; i < this.tasks.length; i++) {
    //   if (!this.tasks[i].completed) {
    //     arr.push(this.tasks[i].text);
    //   }
    // }
    // return arr;
    const toDoTasks = this.tasks.filter((task) => task.completed === false);
    return toDoTasks;
  },
};

console.log(tasks.getTasksToDo());
