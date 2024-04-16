<template>
  <div class="container p-5">
    <div class="col-md-4 offset-md-4">
      <form @submit.prevent="saveTask" class="car card-body">
        <h3 class="text-center mb-2">Create Task</h3>
      <input type="text" placeholder="wirte a title" v-model="task.title" class="form-control mb-3" autofocus/>
      <textarea
      class="form-control mb-3"
        placeholder="wirte a description"
        cols="30"
        rows="10"
        v-model="task.description"
      ></textarea>
      <button class="btn btn-primary">Save</button>
    </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "@/interface/Task";
import { createTask } from "@/services/TaskService";

export default defineComponent({
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    async saveTask() {
      await createTask(this.task);
      this.$router.push({ name: "tasks" });
    },
  },
});
</script>
