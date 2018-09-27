<template>
  <div id="app">
    <h1>Te voy a saludar</h1>
    <div class="container">
      <div class="input">
        <label>Decime tu nombre</label>
        <input type="text" v-model.lazy="name" />        
      </div>
      <div class="result" v-show="name != ''">
        <div>👋 Hola {{ name }}!</div>
      </div>
    </div>
  </div>    
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
    }
  }, 
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

.input {
  margin-bottom: 30px;
}

.result {
  font-size: 30px;
}
</style>
