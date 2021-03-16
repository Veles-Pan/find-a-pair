(function(t) {
	function e(e) {
		for (
			var n, i, o = e[0], s = e[1], d = e[2], f = 0, b = [];
			f < o.length;
			f++
		)
			(i = o[f]),
				Object.prototype.hasOwnProperty.call(c, i) && c[i] && b.push(c[i][0]),
				(c[i] = 0);
		for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
		u && u(e);
		while (b.length) b.shift()();
		return a.push.apply(a, d || []), r();
	}
	function r() {
		for (var t, e = 0; e < a.length; e++) {
			for (var r = a[e], n = !0, o = 1; o < r.length; o++) {
				var s = r[o];
				0 !== c[s] && (n = !1);
			}
			n && (a.splice(e--, 1), (t = i((i.s = r[0]))));
		}
		return t;
	}
	var n = {},
		c = { app: 0 },
		a = [];
	function i(e) {
		if (n[e]) return n[e].exports;
		var r = (n[e] = { i: e, l: !1, exports: {} });
		return t[e].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
	}
	(i.m = t),
		(i.c = n),
		(i.d = function(t, e, r) {
			i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
		}),
		(i.r = function(t) {
			"undefined" !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(i.t = function(t, e) {
			if ((1 & e && (t = i(t)), 8 & e)) return t;
			if (4 & e && "object" === typeof t && t && t.__esModule) return t;
			var r = Object.create(null);
			if (
				(i.r(r),
				Object.defineProperty(r, "default", { enumerable: !0, value: t }),
				2 & e && "string" != typeof t)
			)
				for (var n in t)
					i.d(
						r,
						n,
						function(e) {
							return t[e];
						}.bind(null, n)
					);
			return r;
		}),
		(i.n = function(t) {
			var e =
				t && t.__esModule
					? function() {
							return t["default"];
					  }
					: function() {
							return t;
					  };
			return i.d(e, "a", e), e;
		}),
		(i.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(i.p = "/card-game/");
	var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
		s = o.push.bind(o);
	(o.push = e), (o = o.slice());
	for (var d = 0; d < o.length; d++) e(o[d]);
	var u = s;
	a.push([0, "chunk-vendors"]), r();
})({
	0: function(t, e, r) {
		t.exports = r("56d7");
	},
	"48e9": function(t, e, r) {},
	"56d7": function(t, e, r) {
		"use strict";
		r.r(e);
		r("e260"), r("e6cf"), r("cca6"), r("a79d");
		var n = r("7a23");
		function c(t, e, r, c, a, i) {
			var o = Object(n["k"])("StartGame"),
				s = Object(n["k"])("Game"),
				d = Object(n["k"])("EndGame");
			return (
				Object(n["g"])(),
				Object(n["c"])(
					n["a"],
					null,
					[
						a.isGameCreated
							? Object(n["d"])("", !0)
							: (Object(n["g"])(),
							  Object(n["c"])(o, { key: 0, onCard: i.cardNumber }, null, 8, [
									"onCard",
							  ])),
						a.isGameEnded
							? a.isGameCreated
								? (Object(n["g"])(), Object(n["c"])(d, { key: 2 }))
								: Object(n["d"])("", !0)
							: (Object(n["g"])(),
							  Object(n["c"])(s, { key: 1, onScore: i.getScore }, null, 8, [
									"onScore",
							  ])),
					],
					64
				)
			);
		}
		var a = Object(n["o"])("data-v-72696a97");
		Object(n["i"])("data-v-72696a97");
		var i = { class: "intro" },
			o = Object(n["f"])(
				"h1",
				{ class: "intro__title" },
				"Игра «Найди пару»",
				-1
			),
			s = { class: "form" },
			d = { for: "card-number", class: "form__label" };
		Object(n["h"])();
		var u = a(function(t, e, r, c, a, u) {
				return (
					Object(n["g"])(),
					Object(n["c"])("main", i, [
						o,
						Object(n["f"])("form", s, [
							Object(n["f"])(
								"label",
								d,
								"Количество карточек: " + Object(n["l"])(a.number),
								1
							),
							Object(n["n"])(
								Object(n["f"])(
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
											e[1] ||
											(e[1] = function(t) {
												return (a.number = t);
											}),
									},
									null,
									512
								),
								[[n["m"], a.number]]
							),
							Object(n["f"])(
								"button",
								{
									type: "button",
									class: "form__button",
									onClick:
										e[2] ||
										(e[2] = function() {
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
		r("ebe3");
		(f.render = u), (f.__scopeId = "data-v-72696a97");
		var b = f,
			l = Object(n["o"])("data-v-a27616f8");
		Object(n["i"])("data-v-a27616f8");
		var m = { class: "gameplay" },
			p = { class: "gameplay__timer" },
			h = Object(n["f"])("strong", { class: "text_bold" }, "Your time: ", -1),
			O = { class: "gameplay__score" },
			j = Object(n["f"])("strong", { class: "text_bold" }, "Your score: ", -1),
			v = { class: "cards" };
		Object(n["h"])();
		var _ = l(function(t, e, r, c, a, i) {
				var o = Object(n["k"])("CardTemplate");
				return (
					Object(n["g"])(),
					Object(n["c"])("main", m, [
						Object(n["f"])("p", p, [
							h,
							Object(n["e"])(Object(n["l"])(a.currentTime), 1),
						]),
						Object(n["f"])("p", O, [
							j,
							Object(n["e"])(Object(n["l"])(a.currentScore), 1),
						]),
						Object(n["f"])("div", v, [
							(Object(n["g"])(!0),
							Object(n["c"])(
								n["a"],
								null,
								Object(n["j"])(a.cardInfo, function(t) {
									return (
										Object(n["g"])(),
										Object(n["c"])(
											o,
											{ key: t.id, onOpenedCard: i.openCard, cardInfo: t },
											null,
											8,
											["onOpenedCard", "cardInfo"]
										)
									);
								}),
								128
							)),
						]),
					])
				);
			}),
			g = (r("7db0"), Object(n["o"])("data-v-39b9fee5")),
			y = g(function(t, e, r, c, a, i) {
				return (
					Object(n["g"])(),
					Object(n["c"])(
						"div",
						{
							class: ["card", { card_disabled: r.cardInfo.isDisabled }],
							onClick:
								e[1] ||
								(e[1] = function() {
									return i.openCard && i.openCard.apply(i, arguments);
								}),
							style: {
								backgroundColor: r.cardInfo.isActive
									? r.cardInfo.color
									: "#6c6874",
							},
						},
						null,
						6
					)
				);
			}),
			C = {
				name: "CardTemplate",
				props: { cardInfo: Object },
				methods: {
					openCard: function() {
						this.$emit("openedCard", this.cardInfo.id);
					},
				},
			};
		r("5b31");
		(C.render = y), (C.__scopeId = "data-v-39b9fee5");
		var I = C,
			G = {
				name: "Game",
				components: { CardTemplate: I },
				data: function() {
					return {
						numberOfCards: parseInt(this.$parent.number),
						cardInfo: [],
						cardsList: [],
						currentTime: 0,
						currentScore: 0,
						isFinished: !1,
						counter: 0,
					};
				},
				methods: {
					startTimer: function() {
						var t = this;
						this.timer = setInterval(function() {
							t.currentTime++;
						}, 1e3);
					},
					stopTimer: function() {
						clearTimeout(this.timer);
					},
					addPoint: function() {
						this.currentScore += 2;
					},
					openCard: function(t) {
						this.cardsList.push(t),
							(this.cardInfo.find(function(e) {
								return e.id === t;
							}).isActive = !this.cardInfo.find(function(e) {
								return e.id === t;
							}).isActive),
							this.checkCards();
					},
					checkCards: function() {
						var t = this;
						this.cardsList.length > 1 &&
							(this.preventClick(),
							this.cardInfo.find(function(e) {
								return e.id === t.cardsList[0];
							}).color ===
								this.cardInfo.find(function(e) {
									return e.id === t.cardsList[1];
								}).color && this.cardsList[0] !== this.cardsList[1]
								? (this.addPoint(),
								  (this.cardInfo.find(function(e) {
										return e.id === t.cardsList[0];
								  }).isDisabled = !0),
								  (this.cardInfo.find(function(e) {
										return e.id === t.cardsList[1];
								  }).isDisabled = !0),
								  (this.cardsList = []))
								: this.cardsList[0] === this.cardsList[1]
								? (this.cardsList = [])
								: setTimeout(function() {
										(t.cardInfo.find(function(e) {
											return e.id === t.cardsList[0];
										}).isActive = !1),
											(t.cardInfo.find(function(e) {
												return e.id === t.cardsList[1];
											}).isActive = !1),
											(t.cardsList = []);
								  }, 400));
					},
					preventClick: function() {
						(document.querySelector("#app").style.pointerEvents = "none"),
							setTimeout(function() {
								document.querySelector("#app").style.pointerEvents = "auto";
							}, 400);
					},
					getRandomColor: function() {
						for (var t = "0123456789ABCDEF", e = "#", r = 0; r < 6; r++)
							e += t[Math.floor(16 * Math.random())];
						return e;
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
					for (var t = this.numberOfCards / 2; t > 0; t--) {
						var e = this.getRandomColor();
						this.cardInfo.push(
							{ color: e, isActive: !1, isDisabled: !1, id: this.counter },
							{ color: e, isActive: !1, isDisabled: !1, id: this.counter + 1 }
						),
							(this.counter += 2);
					}
					for (var r = this.cardInfo.length - 1; r > 0; r--) {
						var n = Math.floor(Math.random() * (r + 1)),
							c = [this.cardInfo[n], this.cardInfo[r]];
						(this.cardInfo[r] = c[0]), (this.cardInfo[n] = c[1]);
					}
				},
				mounted: function() {
					this.startTimer();
				},
			};
		r("8342");
		(G.render = _), (G.__scopeId = "data-v-a27616f8");
		var S = G,
			k = Object(n["o"])("data-v-71dc1036");
		Object(n["i"])("data-v-71dc1036");
		var L = { class: "intro" },
			T = Object(n["f"])(
				"h1",
				{ class: "intro__title" },
				"Игра «Найди пару» окончена!",
				-1
			),
			w = Object(n["f"])("strong", { class: "intro__text" }, "Ваши баллы:", -1),
			x = { class: "intro__score" };
		Object(n["h"])();
		var E = k(function(t, e, r, c, a, i) {
				return (
					Object(n["g"])(),
					Object(n["c"])("main", L, [
						T,
						w,
						Object(n["f"])("p", x, Object(n["l"])(a.score), 1),
						Object(n["f"])(
							"button",
							{
								class: "intro__button",
								onClick:
									e[1] ||
									(e[1] = function() {
										return i.restartGame && i.restartGame.apply(i, arguments);
									}),
							},
							"Новая игра"
						),
					])
				);
			}),
			A = {
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
		r("62fa");
		(A.render = E), (A.__scopeId = "data-v-71dc1036");
		var P = A,
			M = {
				name: "App",
				data: function() {
					return { number: "", isGameCreated: !1, isGameEnded: !0, score: 0 };
				},
				components: { StartGame: b, Game: S, EndGame: P },
				methods: {
					cardNumber: function(t) {
						(this.number = parseInt(t)),
							(this.isGameCreated = !0),
							(this.isGameEnded = !1);
					},
					getScore: function(t) {
						this.score = parseInt(t);
					},
				},
			};
		r("9bac");
		M.render = c;
		var $ = M;
		Object(n["b"])($).mount("#app");
	},
	"5b31": function(t, e, r) {
		"use strict";
		r("a7c0");
	},
	"62fa": function(t, e, r) {
		"use strict";
		r("48e9");
	},
	8342: function(t, e, r) {
		"use strict";
		r("9f49");
	},
	"9bac": function(t, e, r) {
		"use strict";
		r("fcdc");
	},
	"9f49": function(t, e, r) {},
	a7c0: function(t, e, r) {},
	ebe3: function(t, e, r) {
		"use strict";
		r("ebed");
	},
	ebed: function(t, e, r) {},
	fcdc: function(t, e, r) {},
});
//# sourceMappingURL=app.72625233.js.map
