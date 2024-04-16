<template>
  <div class="container p-5">
    <ul class="list-group">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        @click="this.$router.push(`/tasks/${task._id}`)"
        class="list-group-item list-group-item-action"
        style="cursor: pointer"
      >
        {{ index + 1 }} -
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getTasks } from "@/services/TaskService";
import { Task } from "@/interface/Task";

export default defineComponent({
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  methods: {
    async loadTasks() {
      try {
        const res = await getTasks();
        this.tasks = res.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.loadTasks();
  },
});
</script>
