<template>

<main class="gameplay">
    <p class="gameplay__timer"><strong class="text_bold">Your time: </strong>{{currentTime}}</p>
    <p class="gameplay__score"><strong class="text_bold">Your score: </strong>{{currentScore}}</p>

    <div class="cards">
      <CardTemplate v-for="object in colors" :key="object.id" @openedCard="openCard" :cardColor='object'/>
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
      colors: [],
      cardsList: [],
      currentTime: 0,
      currentScore: 0,
      isFinished: false,
      counter: 0
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
      this.currentScore += 2
    },

    openCard(element, color, isActive) {
      this.cardsList.push({
        element: element,
        color: color,
        isActive: isActive
      })
      this.checkCards()
    },

    checkCards() {
      if (this.cardsList.length > 1) {
        this.preventClick()
        if (this.cardsList[0].color.color === this.cardsList[1].color.color) {
          this.cardsList[0].element.classList.add('card_finished');
          this.cardsList[1].element.classList.add('card_finished');
          this.addPoint();
          this.cardsList = []
        }
        else {
          let changesCards = this.searchCard(this.cardsList[0].color.id, this.cardsList[1].color.id);
          setTimeout(() => {changesCards[0].isActive = false
          changesCards[1].isActive = false
          changesCards[0].id = this.counter
          changesCards[1].id = this.counter+1
          this.counter += 2
          this.cardsList = []}, 400)
          
        }
      }
    },

    searchCard(firstId, secondId) {
      let cardsForClose = [];
      this.colors.forEach(element => {
        if (element.id === firstId || element.id === secondId) {
          cardsForClose.push(element)
        }
      });
      return cardsForClose
    },

    preventClick() {
      document.querySelector('#app').style.pointerEvents = 'none';
      setTimeout(() => {document.querySelector('#app').style.pointerEvents = 'auto'}, 400)
    },

    getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  },

    watch: {
    currentScore() {
      if (this.currentScore === this.numberOfCards) {
        this.$emit('score', (this.currentScore * 100) / (this.currentTime * 0.1))
        this.stopTimer();
        this.$parent.isGameEnded = true
      }
    }
  },


  created() {
    for (let i = this.numberOfCards/2; i > 0; i--) {
      let currentColor = this.getRandomColor()
      this.colors.push( {color: currentColor,
      isActive: false,
      id: this.counter},
      {color: currentColor,
      isActive: false,
      id: this.counter+1})
      this.counter += 2
    }

    for (let i = this.colors.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [this.colors[i], this.colors[j]] = [this.colors[j], this.colors[i]];
    }
  },

  mounted() {
    this.startTimer();
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

.gameplay__timer {
  margin: 0 0 10px;
  align-self: flex-start;
}

.gameplay__score {
  margin: 0 0 20px;
  align-self: flex-start;
}
</style>
