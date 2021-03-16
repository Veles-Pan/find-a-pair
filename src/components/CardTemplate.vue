<template>
<div class="card card_unactive" @click="openCard" :style="{backgroundColor: isActive ? cardColor.color : '#6c6874'}"></div>
</template>

<script>

export default {
  name: 'CardTemplate',

    props: {
        cardColor: Object
    },

  data() {
      return {
          isActive: this.cardColor.isActive
      }
  },

  methods: {
      openCard(evt) {
            this.isActive = !this.isActive;
            this.$emit('openedCard', evt.target, this.cardColor, this.isActive)
      },
  }

}
</script>

<style scoped>


.card {
    width: 100px;
    height: 150px;
    border-radius: 10px;
}

.card_finished {
    opacity: .2;
    pointer-events: none;
}

@media screen and (max-width: 1000px) {
    
.card {
    width: 60px;
    height: 100px;
    }
}
</style>
