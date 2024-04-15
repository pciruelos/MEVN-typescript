<template>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
        {{task.title}}
    </li>
  </ul>
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
