<template>
<main class="intro">
    <h1 class="intro__title">Игра &laquo;Найди пару&raquo;</h1>

    <form class="form">
        <label for="card-number" class="form__label">Количество карточек: {{ number }}</label>
        <input class= "form__item form__item_card-number" type="range" min="6" max="30" step="2" id="card-number" name="card-number" v-model="number">
        <button type="button" class="form__button" @click="createGame">Создать игру</button>
    </form>

    </main>

</template>

<script>

export default {
  name: 'StartGame',

  data() {
      return {
          number: 12
      }
  },

  methods: {
      createGame() {
          this.$emit('card', this.number)
      },
      
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



.intro__title {
    font-size: 28px;
    margin: 20px 0 20px;
}
.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
}

.form__item {
    width: 74%;
    -webkit-appearance: none;
    background: transparent;
    margin-top: 20px;
    outline-style: none;
}



.form__label {
    text-align: center;
}

.form__item::-webkit-slider-runnable-track {
    height: 7px;
    box-sizing: border-box;
    border-radius: 3px;
    position: relative;
    background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
    outline-style: none;
}

.form__item::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
    border: 1.5px solid rgba(255, 255, 255);
    border-radius: 10px;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
    outline-style: none;
}

.form__item::-moz-range-track {
    height: 7px;
    width: 320px;
    box-sizing: border-box;
    border-radius: 3px;
    position: relative;
    background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
    outline-style: none;
}

.form__item::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
    border: 1.5px solid rgba(255, 255, 255);
    border-radius: 10px;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
    outline-style: none;
}

.form__item::-ms-track {
    height: 7px;
    width: 320px;
    box-sizing: border-box;
    border-radius: 3px;
    position: relative;
    background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
    outline-style: none;
}
.form__item::-ms-fill-lower {
    height: 7px;
    width: 320px;
    box-sizing: border-box;
    border-radius: 3px;
    position: relative;
    background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
    outline-style: none;
}
.form__item::-ms-fill-upper {
    height: 7px;
    width: 320px;
    box-sizing: border-box;
    border-radius: 3px;
    position: relative;
    background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
    outline-style: none;
}
.form__item::-ms-thumb {
    width: 20px;
    height: 20px;
    background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
    border: 1.5px solid rgba(255, 255, 255);
    border-radius: 10px;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
    outline-style: none;
}

.form__button {
    width: 74%;
    height: 36px;
    background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);;
    border-style: none;
    border-radius: 22px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    justify-self: center;
    color: #FFFFFF;
    margin: 20px 0;
    outline-style: none;
}
.form__button:hover {
    cursor: pointer;
    opacity: .8;
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

    .form__item {
        width: 90%;;
    }

    .form__button {
    width: 90%;
    }

    .form {
    width: 80%;
    }
}
</style>
