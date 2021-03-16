<template>
<main class="intro">
    <h1 class="intro__title">Игра &laquo;Найди пару&raquo; окончена!</h1>

    <strong class="intro__text">Ваши баллы:</strong> <p class="intro__score">{{score}}</p>

    <button class="intro__button" @click="restartGame">Новая игра</button>

    </main>

</template>

<script>

export default {
  name: 'EndGame',

  data() {
      return {
          score: this.$parent.score
      }
  },

  methods: {
      restartGame() {
          this.$parent.isGameCreated = false;
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro {
    color: #000;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -360px;
}

.intro__button {
    width: 320px;
    height: 36px;
    background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
    border-style: none;
    border-radius: 22px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    justify-self: center;
    color: #FFFFFF;
    margin-bottom: 20px;
    outline-style: none;
}

.intro__button:hover {
    cursor: pointer;
    opacity: .8;
}

.intro__title {
    font-size: 28px;
    margin: 20px 0 20px;
    text-align: center;
}

.intro__text {
    margin: 0;
}

.intro__score {
    margin: 10px 0 20px;
}

@media screen and (max-width: 650px) {
    .intro {
        width: 90vw;
    }
}


@media screen and (max-width: 500px) {
    .intro__title {
        font-size: 24px;
    }

    .intro__button {
        width: 90%;
    }
}

</style>
