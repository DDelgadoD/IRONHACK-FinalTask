import { defineStore } from "pinia";

export const useTaskStore = defineStore("tasks", {
    state: () => ({
        loadedSupa: false,
        tasks: [],
        discarded: false,
        completed: false,
    }),

    actions: {
        init(tasks) {
            this.tasks = [...tasks];
            this.loadedSupa = true;
        },

        disc() {
            this.discarded = true;
        },

        comp() {
            this.completed = true;
        },

        getTasks() {
            return this.tasks;
        },

        getTask(taskId) {
          const task = this.tasks
          .filter(x => x.id == taskId)
          return task[0];
        },

        deleteTasks() {
            this.tasks = "";
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
        },

        discardTask(TaskId) {
            this.tasks.map((x) => {
                if (x.id == TaskId) x.discarded = true;
            });
        },

        completeTask(TaskId) {
            this.tasks.map((x) => {
                if (x.id == TaskId) x.completed = true;
            });
        },

        newTask(task) {
            console.log("pushing",task)
            this.tasks.push(task);
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
