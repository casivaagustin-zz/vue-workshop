<template>
    <div class="new">
      <label>Nueva Tarea: </label>
      <input type="text" v-model.lazy="newTask" /> 
      <button @click="addNewTask">Añadir</button>
    </div>
</template>

<script>

export default {
  props: ['todos'],
  data () {
    return {
      newTask: '',
    }
  },
  methods: {
    addNewTask: function () {
      if (this.newTask == '') {
        return '';
      }
      var newTask = {};
      newTask.id = this.todos.length + 1;
      newTask.name = this.newTask;
      newTask.done = 0;
      this.todos.push(newTask);
      this.newTask = '';
    },
  }
}
</script>