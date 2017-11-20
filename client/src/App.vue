<template>
  <div id="app">
    <img src="./assets/logo.png">
    <el-switch active-color="red" inactive-color="green" v-model="value1">
    </el-switch>
    <div class="block">
      <span class="demonstration">区分颜色</span>
      <el-rate
        v-model="value2"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate>
    </div>
    <div :class="evenOrOdd" @click="add">
      {{ count }}
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      value1: true,
      value2: null
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    evenOrOdd (state) {
      return this.$store.getters.evenOrOdd
    }
  },
  methods: {
    add () {
      this.$store.dispatch('increment')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.even {
  color: green;
}
.odd {
  color: red;
}
</style>
