<template>
<div class="card card_unactive" @click="openCard"></div>
</template>

<script>
export default {
  name: 'CardTemplate',

  data() {
      return {

      }
  },

  methods: {
      openCard(evt) {
            evt.target.classList.toggle('card_unactive');
            evt.target.classList.toggle('card_active');
            this.checkCards();
      },

      closeCards(card1, card2) {
        card1.classList.toggle('card_unactive');
        card1.classList.toggle('card_active');
        card2.classList.toggle('card_unactive');
        card2.classList.toggle('card_active');
      },

      checkCards() {
          if (this.countOpened() > 1) {
              let openedCard = document.querySelectorAll('.card_active');

              if (window.getComputedStyle(openedCard[0]).backgroundColor === window.getComputedStyle(openedCard[1]).backgroundColor) {
                    this.closeCards(openedCard[0], openedCard[1]);
                    openedCard[0].classList.toggle('card_finished');
                    openedCard[1].classList.toggle('card_finished');
                    
                    this.$parent.addPoint()
              }

              else {
                setTimeout(() => this.closeCards(openedCard[0], openedCard[1]), 300)

              }
          }
                let finishedCard = document.querySelectorAll('.card_finished');
                let allCards = document.querySelectorAll('.card')
                if (finishedCard.length === allCards.length) {
                    this.$parent.stopTimer()
                    this.$parent.isFinished = true;
                    let score = this.$parent.currentScore
                    this.$parent.currentScore = Math.ceil((score**2 * allCards.length * 10) / (parseInt(this.$parent.currentTime) * 0.09))
              }
      },

      countOpened() {
          let count = document.querySelectorAll('.card_active').length
          return count
      }
      
  },

}
</script>

<style scoped>


.card {
    width: 100px;
    height: 150px;
    border-radius: 10px;
}

.card-2,
.card-1 {
    background-color: #8b0000;
}

.card-3,
.card-4 {
    background-color: #00098b;
}

.card-5,
.card-6 {
    background-color: #8b8900;
}

.card-8,
.card-7 {
    background-color: #108b00;
}

.card-10,
.card-9 {
    background-color: #00768b;
}

.card-12,
.card-11 {
    background-color: #5f2e2e;
}

.card-13,
.card-14 {
    background-color: #5f2e54;
}

.card-15,
.card-16 {
    background-color: #2e5f2e;
}

.card-17,
.card-18 {
    background-color: #5f4a2e;
}

.card-19,
.card-20 {
    background-color: #b1f7aa;
}

.card-21,
.card-22 {
    background-color: #f7aaaa;
}

.card-23,
.card-24 {
    background-color: #afaaf7;
}

.card-25,
.card-26 {
    background-color: #f7aaed;
}

.card-27,
.card-28 {
    background-color: #0d0a3f;
}

.card-29,
.card-30 {
    background-color: #3f0a0a;
}

.card_unactive {
    background-color: #6c6874;
}

.card_finished {
    opacity: .2;
    pointer-events: none;
}


</style>
