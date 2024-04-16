<template>
<div class="container">
    <div class="col-md-6 offset-md-3">
<h1 class="text-center">Task Detail</h1>
  <form @submit.prevent="handleUpdate()" class="card card-body">
    <input type="text" v-model="currentTask.title" class="form-control mb-3"/>
    <textarea rows="4" v-model="currentTask.description" class="form-control mb-3"></textarea>
    <button class="btn btn-warning">update</button>
  </form>
  <div class="text-center">
      <button class="btn btn-danger" @click="handleDelete()">DELETE</button>
  </div>
    </div>
</div>
  
</template>

<script lang="ts">
import { Task } from "@/interface/Task";
import { deleteTask, getOneTask, updateTask } from "@/services/TaskService";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      currentTask: {} as Task,
    };
  },
  methods: {
    async loadTask(id: string) {
      const res = await getOneTask(id);
      this.currentTask = res.data;
    },
    async handleUpdate() {
      const res = await updateTask(this.$route.params.id as any, this.currentTask);
      this.$router.push({ name: "tasks" });
    },
    async handleDelete() {
      const res = await deleteTask(this.$route.params.id as any);
      this.$router.push({ name: "tasks" });
    },
  },
  mounted() {
    this.loadTask(this.$route.params.id as any);
  },
});
</script>
