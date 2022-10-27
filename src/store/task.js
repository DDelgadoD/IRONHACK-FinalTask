import { defineStore } from "pinia";
import moment from "moment";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    loadedSupa: false,
    tasks: [],
    tasksF: [],
    tasksTime: [],
    discarded: false,
    completed: false,
  }),

  actions: {
    init(tasks) {
      this.tasks = [...tasks];
      this.tasksF = { discarded: [], completed: [], active: [] };
      this.tasksTime = [];
      this.loadedSupa = true;
      [...tasks].map((t) => {
        t.discarded
          ? this.tasksF.discarded.push(t)
          : t.completed
          ? this.tasksF.completed.push(t)
          : this.tasksF.active.push(t);
      });

      if (this.tasksF.discarded.length > 0) this.discarded = true;
      if (this.tasksF.completed.length > 0) this.completed = true;

      this.tasksTime = [...this.tasksF.active]
        .filter((t) => t.max_time != null)
        .sort((a, b) => (a.max_time > b.max_time ? 1 : -1));

      this.tasksTime.forEach((t) => {
        t.max_time_format = moment(t.max_time).format("D-M-Y HH:mm:ss");
      });
    },

    getTasks() {
      return this.tasks;
    },

    getTask(taskId) {
      const task = this.tasks.filter((x) => x.id == taskId);
      return task[0];
    },

    deleteTasks() {
      this.tasks = [];
      this.tasksF = [];
      this.tasksTime = [];
      this.loadedSupa = false;
      this.completed = false;
      this.discarded = false;
    },

    deleteTask(TaskId) {
      const index = this.tasks
        .map((x) => {
          return x.id;
        })
        .indexOf(TaskId);

      console.log(index);
      this.tasks.splice(index, 1);
      this.init(this.getTasks());
    },

    discardTask(TaskId) {
      this.tasks.map((x) => {
        if (x.id == TaskId) x.discarded = true;
      });
      this.init(this.getTasks());
    },

    completeTask(TaskId) {
      this.tasks.map((x) => {
        if (x.id == TaskId) x.completed = true;
      });
      this.init(this.getTasks());
    },

    newTask(task) {
      console.log("pushing", task);
      this.tasks.push(task);
      this.init(this.getTasks());
    },
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: "tasks",
        storage: localStorage,
      },
    ],
  },
});
