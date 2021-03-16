(function(e) {
	function t(t) {
		for (
			var r, i, o = t[0], s = t[1], d = t[2], f = 0, l = [];
			f < o.length;
			f++
		)
			(i = o[f]),
				Object.prototype.hasOwnProperty.call(c, i) && c[i] && l.push(c[i][0]),
				(c[i] = 0);
		for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
		u && u(t);
		while (l.length) l.shift()();
		return a.push.apply(a, d || []), n();
	}
	function n() {
		for (var e, t = 0; t < a.length; t++) {
			for (var n = a[t], r = !0, o = 1; o < n.length; o++) {
				var s = n[o];
				0 !== c[s] && (r = !1);
			}
			r && (a.splice(t--, 1), (e = i((i.s = n[0]))));
		}
		return e;
	}
	var r = {},
		c = { app: 0 },
		a = [];
	function i(t) {
		if (r[t]) return r[t].exports;
		var n = (r[t] = { i: t, l: !1, exports: {} });
		return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
	}
	(i.m = e),
		(i.c = r),
		(i.d = function(e, t, n) {
			i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
		}),
		(i.r = function(e) {
			"undefined" !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(i.t = function(e, t) {
			if ((1 & t && (e = i(e)), 8 & t)) return e;
			if (4 & t && "object" === typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if (
				(i.r(n),
				Object.defineProperty(n, "default", { enumerable: !0, value: e }),
				2 & t && "string" != typeof e)
			)
				for (var r in e)
					i.d(
						n,
						r,
						function(t) {
							return e[t];
						}.bind(null, r)
					);
			return n;
		}),
		(i.n = function(e) {
			var t =
				e && e.__esModule
					? function() {
							return e["default"];
					  }
					: function() {
							return e;
					  };
			return i.d(t, "a", t), t;
		}),
		(i.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(i.p = "/card-game/");
	var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
		s = o.push.bind(o);
	(o.push = t), (o = o.slice());
	for (var d = 0; d < o.length; d++) t(o[d]);
	var u = s;
	a.push([0, "chunk-vendors"]), n();
})({
	0: function(e, t, n) {
		e.exports = n("56d7");
	},
	"48e9": function(e, t, n) {},
	"56d7": function(e, t, n) {
		"use strict";
		n.r(t);
		n("e260"), n("e6cf"), n("cca6"), n("a79d");
		var r = n("7a23");
		function c(e, t, n, c, a, i) {
			var o = Object(r["k"])("StartGame"),
				s = Object(r["k"])("Game"),
				d = Object(r["k"])("EndGame");
			return (
				Object(r["g"])(),
				Object(r["c"])(
					r["a"],
					null,
					[
						a.isGameCreated
							? Object(r["d"])("", !0)
							: (Object(r["g"])(),
							  Object(r["c"])(o, { key: 0, onCard: i.cardNumber }, null, 8, [
									"onCard",
							  ])),
						a.isGameEnded
							? a.isGameCreated
								? (Object(r["g"])(), Object(r["c"])(d, { key: 2 }))
								: Object(r["d"])("", !0)
							: (Object(r["g"])(),
							  Object(r["c"])(s, { key: 1, onScore: i.getScore }, null, 8, [
									"onScore",
							  ])),
					],
					64
				)
			);
		}
		var a = Object(r["o"])("data-v-72696a97");
		Object(r["i"])("data-v-72696a97");
		var i = { class: "intro" },
			o = Object(r["f"])(
				"h1",
				{ class: "intro__title" },
				"Игра «Найди пару»",
				-1
			),
			s = { class: "form" },
			d = { for: "card-number", class: "form__label" };
		Object(r["h"])();
		var u = a(function(e, t, n, c, a, u) {
				return (
					Object(r["g"])(),
					Object(r["c"])("main", i, [
						o,
						Object(r["f"])("form", s, [
							Object(r["f"])(
								"label",
								d,
								"Количество карточек: " + Object(r["l"])(a.number),
								1
							),
							Object(r["n"])(
								Object(r["f"])(
									"input",
									{
										class: "form__item form__item_card-number",
										type: "range",
										min: "6",
										max: "30",
										step: "2",
										id: "card-number",
										name: "card-number",
										"onUpdate:modelValue":
											t[1] ||
											(t[1] = function(e) {
												return (a.number = e);
											}),
									},
									null,
									512
								),
								[[r["m"], a.number]]
							),
							Object(r["f"])(
								"button",
								{
									type: "button",
									class: "form__button",
									onClick:
										t[2] ||
										(t[2] = function() {
											return u.createGame && u.createGame.apply(u, arguments);
										}),
								},
								" Создать игру "
							),
						]),
					])
				);
			}),
			f = {
				name: "StartGame",
				data: function() {
					return { number: 12 };
				},
				methods: {
					createGame: function() {
						this.$emit("card", this.number);
					},
				},
			};
		n("ebe3");
		(f.render = u), (f.__scopeId = "data-v-72696a97");
		var l = f,
			b = Object(r["o"])("data-v-68f41a9a");
		Object(r["i"])("data-v-68f41a9a");
		var p = { class: "gameplay" },
			m = { class: "gameplay__timer" },
			h = Object(r["f"])("strong", { class: "text_bold" }, "Your time: ", -1),
			O = { class: "gameplay__score" },
			j = Object(r["f"])("strong", { class: "text_bold" }, "Your score: ", -1);
		Object(r["h"])();
		var v = b(function(e, t, n, c, a, i) {
				var o = Object(r["k"])("CardTemplate");
				return (
					Object(r["g"])(),
					Object(r["c"])("main", p, [
						Object(r["f"])("p", m, [
							h,
							Object(r["e"])(Object(r["l"])(a.currentTime), 1),
						]),
						Object(r["f"])("p", O, [
							j,
							Object(r["e"])(Object(r["l"])(a.currentScore), 1),
						]),
						Object(r["f"])(
							"div",
							{
								class: "cards",
								style: { pointerEvents: a.isClicksAllowed ? "auto" : "none" },
							},
							[
								(Object(r["g"])(!0),
								Object(r["c"])(
									r["a"],
									null,
									Object(r["j"])(a.cardInfo, function(e) {
										return (
											Object(r["g"])(),
											Object(r["c"])(
												o,
												{ key: e.id, onOpenedCard: i.openCard, cardInfo: e },
												null,
												8,
												["onOpenedCard", "cardInfo"]
											)
										);
									}),
									128
								)),
							],
							4
						),
					])
				);
			}),
			C = (n("7db0"), Object(r["o"])("data-v-39b9fee5")),
			_ = C(function(e, t, n, c, a, i) {
				return (
					Object(r["g"])(),
					Object(r["c"])(
						"div",
						{
							class: ["card", { card_disabled: n.cardInfo.isDisabled }],
							onClick:
								t[1] ||
								(t[1] = function() {
									return i.openCard && i.openCard.apply(i, arguments);
								}),
							style: {
								backgroundColor: n.cardInfo.isActive
									? n.cardInfo.color
									: "#6c6874",
							},
						},
						null,
						6
					)
				);
			}),
			g = {
				name: "CardTemplate",
				props: { cardInfo: Object },
				methods: {
					openCard: function() {
						this.$emit("openedCard", this.cardInfo.id);
					},
				},
			};
		n("5b31");
		(g.render = _), (g.__scopeId = "data-v-39b9fee5");
		var y = g,
			I = {
				name: "Game",
				components: { CardTemplate: y },
				data: function() {
					return {
						numberOfCards: parseInt(this.$parent.number),
						cardInfo: [],
						openedCardsList: [],
						currentTime: 0,
						currentScore: 0,
						isFinished: !1,
						isClicksAllowed: !0,
						counter: 0,
					};
				},
				methods: {
					startTimer: function() {
						var e = this;
						this.timer = setInterval(function() {
							e.currentTime++;
						}, 1e3);
					},
					stopTimer: function() {
						clearTimeout(this.timer);
					},
					addPoint: function() {
						this.currentScore += 2;
					},
					openCard: function(e) {
						this.openedCardsList.push(e),
							(this.cardInfo.find(function(t) {
								return t.id === e;
							}).isActive = !this.cardInfo.find(function(t) {
								return t.id === e;
							}).isActive),
							this.checkCards();
					},
					checkCards: function() {
						var e = this;
						this.openedCardsList.length > 1 &&
							(this.preventClick(),
							this.cardInfo.find(function(t) {
								return t.id === e.openedCardsList[0];
							}).color ===
								this.cardInfo.find(function(t) {
									return t.id === e.openedCardsList[1];
								}).color && this.openedCardsList[0] !== this.openedCardsList[1]
								? (this.addPoint(),
								  (this.cardInfo.find(function(t) {
										return t.id === e.openedCardsList[0];
								  }).isDisabled = !0),
								  (this.cardInfo.find(function(t) {
										return t.id === e.openedCardsList[1];
								  }).isDisabled = !0),
								  (this.openedCardsList = []))
								: this.openedCardsList[0] === this.openedCardsList[1]
								? (this.openedCardsList = [])
								: setTimeout(function() {
										(e.cardInfo.find(function(t) {
											return t.id === e.openedCardsList[0];
										}).isActive = !1),
											(e.cardInfo.find(function(t) {
												return t.id === e.openedCardsList[1];
											}).isActive = !1),
											(e.openedCardsList = []);
								  }, 400));
					},
					preventClick: function() {
						var e = this;
						(this.isClicksAllowed = !1),
							setTimeout(function() {
								e.isClicksAllowed = !0;
							}, 400);
					},
					getRandomColor: function() {
						for (var e = "0123456789ABCDEF", t = "#", n = 0; n < 6; n++)
							t += e[Math.floor(16 * Math.random())];
						return t;
					},
				},
				watch: {
					currentScore: function() {
						this.currentScore === this.numberOfCards &&
							(this.$emit(
								"score",
								(100 * this.currentScore) / (0.1 * this.currentTime)
							),
							this.stopTimer(),
							(this.$parent.isGameEnded = !0));
					},
				},
				created: function() {
					for (var e = this.numberOfCards / 2; e > 0; e--) {
						var t = this.getRandomColor();
						this.cardInfo.push(
							{ color: t, isActive: !1, isDisabled: !1, id: this.counter },
							{ color: t, isActive: !1, isDisabled: !1, id: this.counter + 1 }
						),
							(this.counter += 2);
					}
					for (var n = this.cardInfo.length - 1; n > 0; n--) {
						var r = Math.floor(Math.random() * (n + 1)),
							c = [this.cardInfo[r], this.cardInfo[n]];
						(this.cardInfo[n] = c[0]), (this.cardInfo[r] = c[1]);
					}
				},
				mounted: function() {
					this.startTimer();
				},
			};
		n("8236");
		(I.render = v), (I.__scopeId = "data-v-68f41a9a");
		var G = I,
			k = Object(r["o"])("data-v-71dc1036");
		Object(r["i"])("data-v-71dc1036");
		var S = { class: "intro" },
			L = Object(r["f"])(
				"h1",
				{ class: "intro__title" },
				"Игра «Найди пару» окончена!",
				-1
			),
			T = Object(r["f"])("strong", { class: "intro__text" }, "Ваши баллы:", -1),
			w = { class: "intro__score" };
		Object(r["h"])();
		var A = k(function(e, t, n, c, a, i) {
				return (
					Object(r["g"])(),
					Object(r["c"])("main", S, [
						L,
						T,
						Object(r["f"])("p", w, Object(r["l"])(a.score), 1),
						Object(r["f"])(
							"button",
							{
								class: "intro__button",
								onClick:
									t[1] ||
									(t[1] = function() {
										return i.restartGame && i.restartGame.apply(i, arguments);
									}),
							},
							"Новая игра"
						),
					])
				);
			}),
			x = {
				name: "EndGame",
				data: function() {
					return { score: this.$parent.score };
				},
				methods: {
					restartGame: function() {
						this.$parent.isGameCreated = !1;
					},
				},
			};
		n("62fa");
		(x.render = A), (x.__scopeId = "data-v-71dc1036");
		var E = x,
			P = {
				name: "App",
				data: function() {
					return { number: "", isGameCreated: !1, isGameEnded: !0, score: 0 };
				},
				components: { StartGame: l, Game: G, EndGame: E },
				methods: {
					cardNumber: function(e) {
						(this.number = parseInt(e)),
							(this.isGameCreated = !0),
							(this.isGameEnded = !1);
					},
					getScore: function(e) {
						this.score = parseInt(e);
					},
				},
			};
		n("9bac");
		P.render = c;
		var M = P;
		Object(r["b"])(M).mount("#app");
	},
	"5b31": function(e, t, n) {
		"use strict";
		n("a7c0");
	},
	"62fa": function(e, t, n) {
		"use strict";
		n("48e9");
	},
	8236: function(e, t, n) {
		"use strict";
		n("ec49");
	},
	"9bac": function(e, t, n) {
		"use strict";
		n("fcdc");
	},
	a7c0: function(e, t, n) {},
	ebe3: function(e, t, n) {
		"use strict";
		n("ebed");
	},
	ebed: function(e, t, n) {},
	ec49: function(e, t, n) {},
	fcdc: function(e, t, n) {},
});
//# sourceMappingURL=app.22c30742.js.map
