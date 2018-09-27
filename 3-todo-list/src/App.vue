<template>
  <div id="app">    
    <h1>✍️ TODO LIST</h1>    
    <div class="new">
      <label>Nueva Tarea: </label><input type="text" v-model.lazy="newTask" /> <button @click="addNewTask">Añadir</button>
    </div>
    <h1>Mis tareas</h1>
    <div class="tareas">
      <div v-for="todo in todos" :key="todo.id" class="tarea" v-bind:class="{done: todo.done}">
        <span @click="markAsDone(todo)" v-show="todo.done == 0">✅</span>
        {{ todo.name }}
      </div>
      <div v-show="todos.length == 0" class="tarea">
        Sin tareas 😁
      </div>
    </div>  
  </div>   
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      newTask: '',
      todos: [        
      ]
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
    markAsDone: function(todo) {
      todo.done = 1;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.tareas {
    background-color: #eee;
    width: 400px;
    text-align: center;
    padding: 20px;
    margin: 0 auto;

  .tarea{
    text-align: left;
    border-button: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
    margin-bottom: 20px;
    &.done {
      text-decoration: line-through;
    }
  }    
}

</style>
