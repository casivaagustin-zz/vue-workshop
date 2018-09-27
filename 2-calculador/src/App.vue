<template>
  <div id="app">  
    <h1>🤔 Calculemos</h1>
    <div class="data">
      <div class="entry">
        <label>Factor 1: </label><input type="number" v-model.number="f1" />
      </div>
      <div class="entry">
        <label>Factor 2: </label><input type="number" v-model.number="f2" />
      </div>
      <div class="operators">
        <button v-on:click="sum">+</button>
        <button @click="sub">-</button>
        <button @click="mul">X</button>
        <button @click="div">/</button>
        <button @click="cls">CLS</button>
      </div>
    </div>
    <div class="results" v-show="result !== 0">
      {{ roundedResult }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      f1: '',
      f2: '',
      result: 0
    }
  },
  computed: {
    roundedResult: function() {
      if (this.result % 1 == 0) {
        return this.result;
      }
      return this.result.toFixed(2);    
    }
  },
  methods: {
    cls: function() {
      this.f1 = '';
      this.f2 = '';
      this.result = 0;
    },
    sum: function() {
      this.result = (this.f1) + (this.f2);
    },
    sub: function() {
      this.result = parseFloat(this.f1) - parseFloat(this.f2);
    },
    mul: function() {
      this.result = parseFloat(this.f1) * parseFloat(this.f2);
    },
    div: function() {
      this.result = parseFloat(this.f1) / parseFloat(this.f2);
      
    },
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Wallpoet');

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

.data {
    background-color: #eee;
    padding: 20px;
    border: 1px solid #ccc;
    width: 220px;
    margin: 0 auto;
    .entry {
      margin-bottom: 10px;
    }

    label {
      font-weight: bold;
    }
}

.results {
    font-family: 'Wallpoet', cursive;
    font-size: 50px;
    color: #1fb01f;
    background-color: #404040;
    margin: 20px auto;
    width: 266px;
}
</style>
