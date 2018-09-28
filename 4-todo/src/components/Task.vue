<template>
    <div class="tarea" v-bind:class="{done: todo.done}">
        <span @click="markAsDone(todo)" v-show="todo.done == 0">✅</span>
        {{ todo.name }}
    </div>
</template>

<script>
export default {
    props: [
        'todo'
    ],
    methods: {
        markAsDone: function(todo) {
            todo.done = 1;
        },        
    }
}
</script>