<template>
  <div id="app">    
    <h1>✍️ TODO LIST</h1>    
    <addNew v-bind:todos="todos"></addNew>
    <h1>Mis tareas</h1>
    <div class="tareas">
      <task v-for="todo in todos" :key="todo.id" v-bind:todo="todo">      
      </task>

      <div v-show="todos.length == 0" class="tarea">
        Sin tareas 😁
      </div>

      <allDone v-on:markAllAsDone="handleMarkAllAsDone"></allDone>
    </div>  
  </div>   
</template>

<script>
import task from './components/Task';
import allDone from './components/allDone';
import addNew from './components/addNew';

export default {
  name: 'app',
  components: {
    task,
    allDone,
    addNew
  },
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
    handleMarkAllAsDone: function() {
        var that = this;
        this.todos.forEach(function(todo, index) {
            that.todos[index].done = 1;
        });
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
