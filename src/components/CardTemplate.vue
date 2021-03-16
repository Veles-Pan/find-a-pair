<template>
	<div
		class="card"
		@click="openCard"
		:style="{
			backgroundColor: cardInfo.isActive ? cardInfo.color : '#6c6874'
		}"
		:class="{'card_disabled' : cardInfo.isDisabled}"
	></div>
</template>

<script>
export default {
	name: "CardTemplate",

	props: {
		cardInfo: Object,
	},

	methods: {
		openCard() {
			this.$emit("openedCard", this.cardInfo.id);
		},
	},
};
</script>

<style scoped>
.card {
	width: 100px;
	height: 150px;
	border-radius: 10px;
}

.card:hover {
	cursor: pointer;
}

.card_disabled {
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
