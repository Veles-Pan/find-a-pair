<template>

  <StartGame @card="cardNumber" v-if="!isGameCreated"/>

  <Game @score="getScore" v-if="!isGameEnded"/>

  <EndGame v-else-if="isGameCreated"/>


</template>

<script>
import StartGame from './components/StartGame.vue'
import Game from './components/Game.vue'
import EndGame from './components/EndGame.vue'

export default {
  name: 'App',

  data() {
    return {
      number: '',
      isGameCreated: false,
      isGameEnded: true,
      score: 0
    }
  },

  components: {
    StartGame,
    Game,
    EndGame
  },

  methods: {
    cardNumber (data) {
      this.number = parseInt(data);
      this.isGameCreated = true,
      this.isGameEnded = false
    },

    getScore(data) {
      this.score = parseInt(data)
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0;
  background-color: rgb(240, 240, 240);
}
</style>
