<template>
<nav>
    <ul>
        <li>
            <router-link to="/">Task List</router-link>
        </li>
        <li>
            <router-link to="/tasks/new">Create Task</router-link>
        </li>
    </ul>
</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "NavBar",
});
</script>
