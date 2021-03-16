<template>
	<main class="gameplay">
		<p class="gameplay__timer">
			<strong class="text_bold">Your time: </strong>{{ currentTime }}
		</p>
		<p class="gameplay__score">
			<strong class="text_bold">Your score: </strong>{{ currentScore }}
		</p>

		<div class="cards">
			<CardTemplate
				v-for="object in cardInfo"
				:key="object.id"
				@openedCard="openCard"
				:cardInfo="object"
			/>
		</div>
	</main>
</template>

<script>
import CardTemplate from "./CardTemplate.vue";

export default {
	name: "Game",

	components: {
		CardTemplate,
	},

	data() {
		return {
			numberOfCards: parseInt(this.$parent.number),
			cardInfo: [],
			cardsList: [],
			currentTime: 0,
			currentScore: 0,
			isFinished: false,
			counter: 0,
		};
	},

	methods: {
		startTimer() {
			this.timer = setInterval(() => {
				this.currentTime++;
			}, 1000);
		},

		stopTimer() {
			clearTimeout(this.timer);
		},

		addPoint() {
			this.currentScore += 2;
		},

		openCard(cardId) {
			this.cardsList.push(cardId);
			this.cardInfo.find(
				(item) => item.id === cardId
			).isActive = !this.cardInfo.find((item) => item.id === cardId).isActive;
			this.checkCards();
		},

		checkCards() {
			if (this.cardsList.length > 1) {
				this.preventClick();
				if (
					this.cardInfo.find((item) => item.id === this.cardsList[0]).color === this.cardInfo.find((item) => item.id === this.cardsList[1]).color &&
					this.cardsList[0] !== this.cardsList[1]
				) {
					this.addPoint();
					this.cardInfo.find(
						(item) => item.id === this.cardsList[0]
					).isDisabled = true;
					this.cardInfo.find(
						(item) => item.id === this.cardsList[1]
					).isDisabled = true;
					this.cardsList = [];
				} else if (this.cardsList[0] === this.cardsList[1]) {
					this.cardsList = [];
				} else {
					setTimeout(() => {
						this.cardInfo.find(
							(item) => item.id === this.cardsList[0]
						).isActive = false;
						this.cardInfo.find(
							(item) => item.id === this.cardsList[1]
						).isActive = false;
						this.cardsList = [];
					}, 400);
				}
			}
		},

		preventClick() {
			document.querySelector("#app").style.pointerEvents = "none";
      setTimeout(() => {
        document.querySelector("#app").style.pointerEvents = "auto";
      }, 400)
		},

		getRandomColor() {
			var letters = "0123456789ABCDEF";
			var color = "#";
			for (var i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		},
	},

	watch: {
		currentScore() {
			if (this.currentScore === this.numberOfCards) {
				this.$emit(
					"score",
					(this.currentScore * 100) / (this.currentTime * 0.1)
				);
				this.stopTimer();
				this.$parent.isGameEnded = true;
			}
		},
	},

	created() {
		for (let i = this.numberOfCards / 2; i > 0; i--) {
			let currentColor = this.getRandomColor();
			this.cardInfo.push(
				{
					color: currentColor,
					isActive: false,
					isDisabled: false,
					id: this.counter,
				},
				{
					color: currentColor,
					isActive: false,
					isDisabled: false,
					id: this.counter + 1,
				}
			);
			this.counter += 2;
		}

		for (let i = this.cardInfo.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[this.cardInfo[i], this.cardInfo[j]] = [
				this.cardInfo[j],
				this.cardInfo[i],
			];
		}
	},

	mounted() {
		this.startTimer();
	},
};
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
	grid-template-columns: repeat(auto-fit, minmax(40px, 100px));
	gap: 20px 20px;
}

@media screen and (max-width: 1000px) {
	.cards {
		width: 95vw;
		grid-template-columns: repeat(auto-fit, minmax(60px, 60px));
		gap: 6px 6px;
	}
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
