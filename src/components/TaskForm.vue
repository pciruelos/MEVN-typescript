<template>
  <form @submit.prevent="saveTask">
    <input type="text" placeholder="wirte a title" v-model="task.title" />
    <textarea
      placeholder="wirte a description"
      cols="30"
      rows="10"
      v-model="task.description"
    ></textarea>
    <button>Save</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {Task} from '@/interface/Task'
import {createTask} from '@/services/TaskService'

export default defineComponent({
  data() {
    return {
      task: {} as Task
    };
  },
  methods: {
    async saveTask() {
       await createTask(this.task)
       this.$router.push({name: "tasks"})
    }
  }
});
</script>
