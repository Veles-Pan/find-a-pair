<template>

<main class="gameplay">
    <p class="gameplay__timer"><strong class="text_bold">Your time: </strong>{{currentTime}}</p>
    <p class="gameplay__score"><strong class="text_bold">Your score: </strong>{{currentScore}}</p>

    <div class="cards">
      <CardTemplate v-for="index in idNames" :key="index" :class="index"/>
    </div>

</main>


  
</template>

<script>

import CardTemplate from './CardTemplate.vue'

export default {
  name: 'Game',

  components: {
    CardTemplate
  },

  data() {
    return {
      numberOfCards: parseInt(this.$parent.number),
      cardID: [],
      idNames: [],
      currentTime: 0,
      currentScore: 0,
      isFinished: false
    }
  },

  watch: {
    isFinished() {
        this.$emit('score', this.currentScore)
        this.$parent.isGameEnded = true
    }
  },

  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime++
      }, 1000)
    },

    stopTimer() {
      clearTimeout(this.timer)
    },

    addPoint() {
      this.currentScore++
    }
  },

  created() {
    this.cardID = Array.from({ length: this.numberOfCards }, (v, i) =>  i + 1); 
    
    for (let i = this.cardID.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [this.cardID[i], this.cardID[j]] = [this.cardID[j], this.cardID[i]];
    }

    this.idNames = this.cardID.map(function(num) {
    return 'card-' + num;
});
  },

  mounted() {
    this.startTimer()
  }
}
</script>

<style scoped>

.gameplay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
}
.cards {
  width: 80vw;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 100px));;
  gap: 20px 20px;
}

@media screen and (max-width: 1000px) {
    
.cards {
    width: 95vw;
    grid-template-columns: repeat(auto-fit, minmax(60px, 60px));;
    gap: 6px 6px;
    }
}

.card:hover {
  cursor: pointer;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}

.gameplay__timer {
  margin: 0 0 10px;
  align-self: flex-start;
}

.gameplay__score {
  margin: 0 0 20px;
  align-self: flex-start;
}
</style>