var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var e, l, t, _, w, S, x, v, i, y, P, T, b, h, f, g, s;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(s, d, y) {
            var g = function(e) {
                    var t, i = [],
                        s = e.length;
                    for (t = 0; t !== s; i.push(e[t++]));
                    return i
                },
                v = function(e, t, i) {
                    var s, o, r = e.cycle;
                    for (s in r) o = r[s], e[s] = "function" == typeof o ? o(i, t[i]) : o[i % o.length];
                    delete e.cycle
                },
                T = function(e, t, i) {
                    y.call(this, e, t, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = T.prototype.render
                },
                b = 1e-10,
                w = y._internals,
                S = w.isSelector,
                _ = w.isArray,
                e = T.prototype = y.to({}, .1, {}),
                x = [];
            T.version = "1.20.4", e.constructor = T, e.kill()._gc = !1, T.killTweensOf = T.killDelayedCallsTo = y.killTweensOf, T.getTweensOf = y.getTweensOf, T.lagSmoothing = y.lagSmoothing, T.ticker = y.ticker, T.render = y.render, e.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), y.prototype.invalidate.call(this)
            }, e.updateTo = function(e, t) {
                var i, s = this.ratio,
                    o = this.vars.immediateRender || e.immediateRender;
                for (i in t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), e) this.vars[i] = e[i];
                if (this._initted || o)
                    if (t) this._initted = !1, o && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && y._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
                    var r = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(r, !0, !1)
                } else if (this._initted = !1, this._init(), 0 < this._time || o)
                    for (var n, a = 1 / (1 - s), l = this._firstPT; l;) n = l.s + l.c, l.c *= a, l.s = n - l.c, l = l._next;
                return this
            }, e.render = function(e, t, i) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var s, o, r, n, a, l, c, d, p, u = this._dirty ? this.totalDuration() : this._totalDuration,
                    h = this._time,
                    f = this._totalTime,
                    m = this._cycle,
                    g = this._duration,
                    v = this._rawPrevTime;
                if (u - 1e-7 <= e && 0 <= e ? (this._totalTime = u, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, o = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (v < 0 || e <= 0 && -1e-7 <= e || v === b && "isPause" !== this.data) && v !== e && (i = !0, b < v && (o = "onReverseComplete")), this._rawPrevTime = d = !t || e || v === e ? e : b)) : e < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== f || 0 === g && 0 < v) && (o = "onReverseComplete", s = this._reversed), e < 0 && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (0 <= v && (i = !0), this._rawPrevTime = d = !t || e || v === e ? e : b)), this._initted || (i = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (n = g + this._repeatDelay, this._cycle = this._totalTime / n >> 0, 0 !== this._cycle && this._cycle === this._totalTime / n && f <= e && this._cycle--, this._time = this._totalTime - this._cycle * n, this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time, (p = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== p || this._initted ? this._yoyoEase = p = !0 === p ? this._ease : p instanceof Ease ? p : Ease.map[p] : (p = this.vars.ease, this._yoyoEase = p = p ? p instanceof Ease ? p : "function" == typeof p ? new Ease(p, this.vars.easeParams) : Ease.map[p] || y.defaultEase : y.defaultEase)), this.ratio = p ? 1 - p.getRatio((g - this._time) / g) : 0)), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType && !p ? (a = this._time / g, (1 === (l = this._easeType) || 3 === l && .5 <= a) && (a = 1 - a), 3 === l && (a *= 2), 1 === (c = this._easePower) ? a *= a : 2 === c ? a *= a * a : 3 === c ? a *= a * a * a : 4 === c && (a *= a * a * a * a), 1 === l ? this.ratio = 1 - a : 2 === l ? this.ratio = a : this._time / g < .5 ? this.ratio = a / 2 : this.ratio = 1 - a / 2) : p || (this.ratio = this._ease.getRatio(this._time / g))), h !== this._time || i || m !== this._cycle) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = h, this._totalTime = f, this._rawPrevTime = v, this._cycle = m, w.lazyTweens.push(this), void(this._lazy = [e, t]);
                        !this._time || s || p ? s && this._ease._calcEnd && !p && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / g)
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== h && 0 <= e && (this._active = !0), 0 === f && (2 === this._initted && 0 < e && this._init(), this._startAt && (0 <= e ? this._startAt.render(e, !0, i) : o || (o = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (t || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (e < 0 && this._startAt && this._startTime && this._startAt.render(e, !0, i), t || (this._totalTime !== f || o) && this._callback("onUpdate")), this._cycle !== m && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), o && (!this._gc || i) && (e < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, !0, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[o] && this._callback(o), 0 === g && this._rawPrevTime === b && d !== b && (this._rawPrevTime = 0))
                } else f !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
            }, T.to = function(e, t, i) {
                return new T(e, t, i)
            }, T.from = function(e, t, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new T(e, t, i)
            }, T.fromTo = function(e, t, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new T(e, t, s)
            }, T.staggerTo = T.allTo = function(e, t, i, s, o, r, n) {
                s = s || 0;
                var a, l, c, d, p = 0,
                    u = [],
                    h = function() {
                        i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments), o.apply(n || i.callbackScope || this, r || x)
                    },
                    f = i.cycle,
                    m = i.startAt && i.startAt.cycle;
                for (_(e) || ("string" == typeof e && (e = y.selector(e) || e), S(e) && (e = g(e))), e = e || [], s < 0 && ((e = g(e)).reverse(), s *= -1), a = e.length - 1, c = 0; c <= a; c++) {
                    for (d in l = {}, i) l[d] = i[d];
                    if (f && (v(l, e, c), null != l.duration && (t = l.duration, delete l.duration)), m) {
                        for (d in m = l.startAt = {}, i.startAt) m[d] = i.startAt[d];
                        v(l.startAt, e, c)
                    }
                    l.delay = p + (l.delay || 0), c === a && o && (l.onComplete = h), u[c] = new T(e[c], t, l), p += s
                }
                return u
            }, T.staggerFrom = T.allFrom = function(e, t, i, s, o, r, n) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, T.staggerTo(e, t, i, s, o, r, n)
            }, T.staggerFromTo = T.allFromTo = function(e, t, i, s, o, r, n, a) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, T.staggerTo(e, t, s, o, r, n, a)
            }, T.delayedCall = function(e, t, i, s, o) {
                return new T(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: i,
                    callbackScope: s,
                    onReverseComplete: t,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    useFrames: o,
                    overwrite: 0
                })
            }, T.set = function(e, t) {
                return new T(e, 0, t)
            }, T.isTweening = function(e) {
                return 0 < y.getTweensOf(e, !0).length
            };
            var r = function(e, t) {
                    for (var i = [], s = 0, o = e._first; o;) o instanceof y ? i[s++] = o : (t && (i[s++] = o), s = (i = i.concat(r(o, t))).length), o = o._next;
                    return i
                },
                p = T.getAllTweens = function(e) {
                    return r(s._rootTimeline, e).concat(r(s._rootFramesTimeline, e))
                };
            T.killAll = function(e, t, i, s) {
                null == t && (t = !0), null == i && (i = !0);
                var o, r, n, a = p(0 != s),
                    l = a.length,
                    c = t && i && s;
                for (n = 0; n < l; n++) r = a[n], (c || r instanceof d || (o = r.target === r.vars.onComplete) && i || t && !o) && (e ? r.totalTime(r._reversed ? 0 : r.totalDuration()) : r._enabled(!1, !1))
            }, T.killChildTweensOf = function(e, t) {
                if (null != e) {
                    var i, s, o, r, n, a = w.tweenLookup;
                    if ("string" == typeof e && (e = y.selector(e) || e), S(e) && (e = g(e)), _(e))
                        for (r = e.length; - 1 < --r;) T.killChildTweensOf(e[r], t);
                    else {
                        for (o in i = [], a)
                            for (s = a[o].target.parentNode; s;) s === e && (i = i.concat(a[o].tweens)), s = s.parentNode;
                        for (n = i.length, r = 0; r < n; r++) t && i[r].totalTime(i[r].totalDuration()), i[r]._enabled(!1, !1)
                    }
                }
            };
            var o = function(e, t, i, s) {
                t = !1 !== t, i = !1 !== i;
                for (var o, r, n = p(s = !1 !== s), a = t && i && s, l = n.length; - 1 < --l;) r = n[l], (a || r instanceof d || (o = r.target === r.vars.onComplete) && i || t && !o) && r.paused(e)
            };
            return T.pauseAll = function(e, t, i) {
                o(!0, e, t, i)
            }, T.resumeAll = function(e, t, i) {
                o(!1, e, t, i)
            }, T.globalTimeScale = function(e) {
                var t = s._rootTimeline,
                    i = y.ticker.time;
                return arguments.length ? (e = e || b, t._startTime = i - (i - t._startTime) * t._timeScale / e, t = s._rootFramesTimeline, i = y.ticker.frame, t._startTime = i - (i - t._startTime) * t._timeScale / e, t._timeScale = s._rootTimeline._timeScale = e, e) : t._timeScale
            }, e.progress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
            }, e.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
            }, e.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
            }, e.duration = function(e) {
                return arguments.length ? s.prototype.duration.call(this, e) : this._duration
            }, e.totalDuration = function(e) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, e.repeat = function(e) {
                return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
            }, e.repeatDelay = function(e) {
                return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
            }, e.yoyo = function(e) {
                return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, T
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(d, p, u) {
            var h = function(e) {
                    p.call(this, e), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var t, i, s = this.vars;
                    for (i in s) t = s[i], g(t) && -1 !== t.join("").indexOf("{self}") && (s[i] = this._swapSelfInParams(t));
                    g(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                },
                m = 1e-10,
                e = u._internals,
                t = h._internals = {},
                f = e.isSelector,
                g = e.isArray,
                v = e.lazyTweens,
                y = e.lazyRender,
                n = _gsScope._gsDefine.globals,
                T = function(e) {
                    var t, i = {};
                    for (t in e) i[t] = e[t];
                    return i
                },
                b = function(e, t, i) {
                    var s, o, r = e.cycle;
                    for (s in r) o = r[s], e[s] = "function" == typeof o ? o(i, t[i]) : o[i % o.length];
                    delete e.cycle
                },
                r = t.pauseCallback = function() {},
                w = function(e) {
                    var t, i = [],
                        s = e.length;
                    for (t = 0; t !== s; i.push(e[t++]));
                    return i
                },
                i = h.prototype = new p;
            return h.version = "1.20.4", i.constructor = h, i.kill()._gc = i._forcingPlayhead = i._hasPause = !1, i.to = function(e, t, i, s) {
                var o = i.repeat && n.TweenMax || u;
                return t ? this.add(new o(e, t, i), s) : this.set(e, i, s)
            }, i.from = function(e, t, i, s) {
                return this.add((i.repeat && n.TweenMax || u).from(e, t, i), s)
            }, i.fromTo = function(e, t, i, s, o) {
                var r = s.repeat && n.TweenMax || u;
                return t ? this.add(r.fromTo(e, t, i, s), o) : this.set(e, s, o)
            }, i.staggerTo = function(e, t, i, s, o, r, n, a) {
                var l, c, d = new h({
                        onComplete: r,
                        onCompleteParams: n,
                        callbackScope: a,
                        smoothChildTiming: this.smoothChildTiming
                    }),
                    p = i.cycle;
                for ("string" == typeof e && (e = u.selector(e) || e), f(e = e || []) && (e = w(e)), (s = s || 0) < 0 && ((e = w(e)).reverse(), s *= -1), c = 0; c < e.length; c++)(l = T(i)).startAt && (l.startAt = T(l.startAt), l.startAt.cycle && b(l.startAt, e, c)), p && (b(l, e, c), null != l.duration && (t = l.duration, delete l.duration)), d.to(e[c], t, l, c * s);
                return this.add(d, o)
            }, i.staggerFrom = function(e, t, i, s, o, r, n, a) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, s, o, r, n, a)
            }, i.staggerFromTo = function(e, t, i, s, o, r, n, a, l) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(e, t, s, o, r, n, a, l)
            }, i.call = function(e, t, i, s) {
                return this.add(u.delayedCall(0, e, t, i), s)
            }, i.set = function(e, t, i) {
                return i = this._parseTimeOrLabel(i, 0, !0), null == t.immediateRender && (t.immediateRender = i === this._time && !this._paused), this.add(new u(e, 0, t), i)
            }, h.exportRoot = function(e, t) {
                null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
                var i, s, o, r, n = new h(e),
                    a = n._timeline;
                for (null == t && (t = !0), a._remove(n, !0), n._startTime = 0, n._rawPrevTime = n._time = n._totalTime = a._time, o = a._first; o;) r = o._next, t && o instanceof u && o.target === o.vars.onComplete || ((s = o._startTime - o._delay) < 0 && (i = 1), n.add(o, s)), o = r;
                return a.add(n, 0), i && n.totalDuration(), n
            }, i.add = function(e, t, i, s) {
                var o, r, n, a, l, c;
                if ("number" != typeof t && (t = this._parseTimeOrLabel(t, 0, !0, e)), !(e instanceof d)) {
                    if (e instanceof Array || e && e.push && g(e)) {
                        for (i = i || "normal", s = s || 0, o = t, r = e.length, n = 0; n < r; n++) g(a = e[n]) && (a = new h({
                            tweens: a
                        })), this.add(a, o), "string" != typeof a && "function" != typeof a && ("sequence" === i ? o = a._startTime + a.totalDuration() / a._timeScale : "start" === i && (a._startTime -= a.delay())), o += s;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof e) return this.addLabel(e, t);
                    if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                    e = u.delayedCall(0, e)
                }
                if (p.prototype.add.call(this, e, t), e._time && e.render((this.rawTime() - e._startTime) * e._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (c = (l = this).rawTime() > e._startTime; l._timeline;) c && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
                return this
            }, i.remove = function(e) {
                if (e instanceof d) {
                    this._remove(e, !1);
                    var t = e._timeline = e.vars.useFrames ? d._rootFramesTimeline : d._rootTimeline;
                    return e._startTime = (e._paused ? e._pauseTime : t._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                }
                if (e instanceof Array || e && e.push && g(e)) {
                    for (var i = e.length; - 1 < --i;) this.remove(e[i]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, i._remove = function(e, t) {
                return p.prototype._remove.call(this, e, t), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, i.append = function(e, t) {
                return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
            }, i.insert = i.insertMultiple = function(e, t, i, s) {
                return this.add(e, t || 0, i, s)
            }, i.appendMultiple = function(e, t, i, s) {
                return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, s)
            }, i.addLabel = function(e, t) {
                return this._labels[e] = this._parseTimeOrLabel(t), this
            }, i.addPause = function(e, t, i, s) {
                var o = u.delayedCall(0, r, i, s || this);
                return o.vars.onComplete = o.vars.onReverseComplete = t, o.data = "isPause", this._hasPause = !0, this.add(o, e)
            }, i.removeLabel = function(e) {
                return delete this._labels[e], this
            }, i.getLabelTime = function(e) {
                return null != this._labels[e] ? this._labels[e] : -1
            }, i._parseTimeOrLabel = function(e, t, i, s) {
                var o, r;
                if (s instanceof d && s.timeline === this) this.remove(s);
                else if (s && (s instanceof Array || s.push && g(s)))
                    for (r = s.length; - 1 < --r;) s[r] instanceof d && s[r].timeline === this && this.remove(s[r]);
                if (o = "number" != typeof e || t ? 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof t) return this._parseTimeOrLabel(t, i && "number" == typeof e && null == this._labels[t] ? e - o : 0, i);
                if (t = t || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = o);
                else {
                    if (-1 === (r = e.indexOf("="))) return null == this._labels[e] ? i ? this._labels[e] = o + t : t : this._labels[e] + t;
                    t = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)), e = 1 < r ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, i) : o
                }
                return Number(e) + t
            }, i.seek = function(e, t) {
                return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
            }, i.stop = function() {
                return this.paused(!0)
            }, i.gotoAndPlay = function(e, t) {
                return this.play(e, t)
            }, i.gotoAndStop = function(e, t) {
                return this.pause(e, t)
            }, i.render = function(e, t, i) {
                this._gc && this._enabled(!0, !1);
                var s, o, r, n, a, l, c, d = this._time,
                    p = this._dirty ? this.totalDuration() : this._totalDuration,
                    u = this._startTime,
                    h = this._timeScale,
                    f = this._paused;
                if (d !== this._time && (e += this._time - d), p - 1e-7 <= e && 0 <= e) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (o = !0, n = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (e <= 0 && -1e-7 <= e || this._rawPrevTime < 0 || this._rawPrevTime === m) && this._rawPrevTime !== e && this._first && (a = !0, this._rawPrevTime > m && (n = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : m, e = p + 1e-4;
                else if (e < 1e-7)
                    if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== m && (0 < this._rawPrevTime || e < 0 && 0 <= this._rawPrevTime)) && (n = "onReverseComplete", o = this._reversed), e < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = o = !0, n = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (a = !0), this._rawPrevTime = e;
                    else {
                        if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : m, 0 === e && o)
                            for (s = this._first; s && 0 === s._startTime;) s._duration || (o = !1), s = s._next;
                        e = 0, this._initted || (a = !0)
                    } else {
                    if (this._hasPause && !this._forcingPlayhead && !t) {
                        if (d <= e)
                            for (s = this._first; s && s._startTime <= e && !l;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (l = s), s = s._next;
                        else
                            for (s = this._last; s && s._startTime >= e && !l;) s._duration || "isPause" === s.data && 0 < s._rawPrevTime && (l = s), s = s._prev;
                        l && (this._time = e = l._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    this._totalTime = this._time = this._rawPrevTime = e
                }
                if (this._time !== d && this._first || i || a || l) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && 0 < e && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || t || this._callback("onStart")), d <= (c = this._time))
                        for (s = this._first; s && (r = s._next, c === this._time && (!this._paused || f));)(s._active || s._startTime <= c && !s._paused && !s._gc) && (l === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (e - s._startTime) * s._timeScale, t, i) : s.render((e - s._startTime) * s._timeScale, t, i)), s = r;
                    else
                        for (s = this._last; s && (r = s._prev, c === this._time && (!this._paused || f));) {
                            if (s._active || s._startTime <= d && !s._paused && !s._gc) {
                                if (l === s) {
                                    for (l = s._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (e - l._startTime) * l._timeScale : (e - l._startTime) * l._timeScale, t, i), l = l._prev;
                                    l = null, this.pause()
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (e - s._startTime) * s._timeScale, t, i) : s.render((e - s._startTime) * s._timeScale, t, i)
                            }
                            s = r
                        }
                    this._onUpdate && (t || (v.length && y(), this._callback("onUpdate"))), n && (this._gc || (u === this._startTime || h !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (v.length && y(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[n] && this._callback(n)))
                }
            }, i._hasPausedChild = function() {
                for (var e = this._first; e;) {
                    if (e._paused || e instanceof h && e._hasPausedChild()) return !0;
                    e = e._next
                }
                return !1
            }, i.getChildren = function(e, t, i, s) {
                s = s || -9999999999;
                for (var o = [], r = this._first, n = 0; r;) r._startTime < s || (r instanceof u ? !1 !== t && (o[n++] = r) : (!1 !== i && (o[n++] = r), !1 !== e && (n = (o = o.concat(r.getChildren(!0, t, i))).length))), r = r._next;
                return o
            }, i.getTweensOf = function(e, t) {
                var i, s, o = this._gc,
                    r = [],
                    n = 0;
                for (o && this._enabled(!0, !0), s = (i = u.getTweensOf(e)).length; - 1 < --s;)(i[s].timeline === this || t && this._contains(i[s])) && (r[n++] = i[s]);
                return o && this._enabled(!1, !0), r
            }, i.recent = function() {
                return this._recent
            }, i._contains = function(e) {
                for (var t = e.timeline; t;) {
                    if (t === this) return !0;
                    t = t.timeline
                }
                return !1
            }, i.shiftChildren = function(e, t, i) {
                i = i || 0;
                for (var s, o = this._first, r = this._labels; o;) o._startTime >= i && (o._startTime += e), o = o._next;
                if (t)
                    for (s in r) r[s] >= i && (r[s] += e);
                return this._uncache(!0)
            }, i._kill = function(e, t) {
                if (!e && !t) return this._enabled(!1, !1);
                for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), s = i.length, o = !1; - 1 < --s;) i[s]._kill(e, t) && (o = !0);
                return o
            }, i.clear = function(e) {
                var t = this.getChildren(!1, !0, !0),
                    i = t.length;
                for (this._time = this._totalTime = 0; - 1 < --i;) t[i]._enabled(!1, !1);
                return !1 !== e && (this._labels = {}), this._uncache(!0)
            }, i.invalidate = function() {
                for (var e = this._first; e;) e.invalidate(), e = e._next;
                return d.prototype.invalidate.call(this)
            }, i._enabled = function(e, t) {
                if (e === this._gc)
                    for (var i = this._first; i;) i._enabled(e, !0), i = i._next;
                return p.prototype._enabled.call(this, e, t)
            }, i.totalTime = function(e, t, i) {
                this._forcingPlayhead = !0;
                var s = d.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, s
            }, i.duration = function(e) {
                return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
            }, i.totalDuration = function(e) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var t, i, s = 0, o = this._last, r = 999999999999; o;) t = o._prev, o._dirty && o.totalDuration(), o._startTime > r && this._sortChildren && !o._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(o, o._startTime - o._delay), this._calculatingDuration = 0) : r = o._startTime, o._startTime < 0 && !o._paused && (s -= o._startTime, this._timeline.smoothChildTiming && (this._startTime += o._startTime / this._timeScale, this._time -= o._startTime, this._totalTime -= o._startTime, this._rawPrevTime -= o._startTime), this.shiftChildren(-o._startTime, !1, -9999999999), r = 0), s < (i = o._startTime + o._totalDuration / o._timeScale) && (s = i), o = t;
                        this._duration = this._totalDuration = s, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
            }, i.paused = function(e) {
                if (!e)
                    for (var t = this._first, i = this._time; t;) t._startTime === i && "isPause" === t.data && (t._rawPrevTime = 0), t = t._next;
                return d.prototype.paused.apply(this, arguments)
            }, i.usesFrames = function() {
                for (var e = this._timeline; e._timeline;) e = e._timeline;
                return e === d._rootFramesTimeline
            }, i.rawTime = function(e) {
                return e && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(e) - this._startTime) * this._timeScale
            }, h
        }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, a, e) {
            var i = function(e) {
                    t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                },
                C = 1e-10,
                s = a._internals,
                M = s.lazyTweens,
                A = s.lazyRender,
                l = _gsScope._gsDefine.globals,
                c = new e(null, null, 1, 0),
                o = i.prototype = new t;
            return o.constructor = i, o.kill()._gc = !1, i.version = "1.20.4", o.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
            }, o.addCallback = function(e, t, i, s) {
                return this.add(a.delayedCall(0, e, i, s), t)
            }, o.removeCallback = function(e, t) {
                if (e)
                    if (null == t) this._kill(null, e);
                    else
                        for (var i = this.getTweensOf(e, !1), s = i.length, o = this._parseTimeOrLabel(t); - 1 < --s;) i[s]._startTime === o && i[s]._enabled(!1, !1);
                return this
            }, o.removePause = function(e) {
                return this.removeCallback(t._internals.pauseCallback, e)
            }, o.tweenTo = function(e, t) {
                t = t || {};
                var i, s, o, r = {
                        ease: c,
                        useFrames: this.usesFrames(),
                        immediateRender: !1,
                        lazy: !1
                    },
                    n = t.repeat && l.TweenMax || a;
                for (s in t) r[s] = t[s];
                return r.time = this._parseTimeOrLabel(e), i = Math.abs(Number(r.time) - this._time) / this._timeScale || .001, o = new n(this, i, r), r.onStart = function() {
                    o.target.paused(!0), o.vars.time === o.target.time() || i !== o.duration() || o.isFromTo || o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale).render(o.time(), !0, !0), t.onStart && t.onStart.apply(t.onStartScope || t.callbackScope || o, t.onStartParams || [])
                }, o
            }, o.tweenFromTo = function(e, t, i) {
                i = i || {}, e = this._parseTimeOrLabel(e), i.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [e],
                    callbackScope: this
                }, i.immediateRender = !1 !== i.immediateRender;
                var s = this.tweenTo(t, i);
                return s.isFromTo = 1, s.duration(Math.abs(s.vars.time - e) / this._timeScale || .001)
            }, o.render = function(e, t, i) {
                this._gc && this._enabled(!0, !1);
                var s, o, r, n, a, l, c, d, p = this._time,
                    u = this._dirty ? this.totalDuration() : this._totalDuration,
                    h = this._duration,
                    f = this._totalTime,
                    m = this._startTime,
                    g = this._timeScale,
                    v = this._rawPrevTime,
                    y = this._paused,
                    T = this._cycle;
                if (p !== this._time && (e += this._time - p), u - 1e-7 <= e && 0 <= e) this._locked || (this._totalTime = u, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, n = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (e <= 0 && -1e-7 <= e || v < 0 || v === C) && v !== e && this._first && (a = !0, C < v && (n = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : C, this._yoyo && 0 != (1 & this._cycle) ? this._time = e = 0 : e = (this._time = h) + 1e-4;
                else if (e < 1e-7)
                    if (this._locked || (this._totalTime = this._cycle = 0), ((this._time = 0) !== p || 0 === h && v !== C && (0 < v || e < 0 && 0 <= v) && !this._locked) && (n = "onReverseComplete", o = this._reversed), e < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = o = !0, n = "onReverseComplete") : 0 <= v && this._first && (a = !0), this._rawPrevTime = e;
                    else {
                        if (this._rawPrevTime = h || !t || e || this._rawPrevTime === e ? e : C, 0 === e && o)
                            for (s = this._first; s && 0 === s._startTime;) s._duration || (o = !1), s = s._next;
                        e = 0, this._initted || (a = !0)
                    } else if (0 === h && v < 0 && (a = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (l = h + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && f <= e && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = h - this._time), this._time > h ? e = (this._time = h) + 1e-4 : this._time < 0 ? this._time = e = 0 : e = this._time)), this._hasPause && !this._forcingPlayhead && !t) {
                    if (p <= (e = this._time) || this._repeat && T !== this._cycle)
                        for (s = this._first; s && s._startTime <= e && !c;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (c = s), s = s._next;
                    else
                        for (s = this._last; s && s._startTime >= e && !c;) s._duration || "isPause" === s.data && 0 < s._rawPrevTime && (c = s), s = s._prev;
                    c && c._startTime < h && (this._time = e = c._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                if (this._cycle !== T && !this._locked) {
                    var b = this._yoyo && 0 != (1 & T),
                        w = b === (this._yoyo && 0 != (1 & this._cycle)),
                        S = this._totalTime,
                        _ = this._cycle,
                        x = this._rawPrevTime,
                        P = this._time;
                    if (this._totalTime = T * h, this._cycle < T ? b = !b : this._totalTime += h, this._time = p, this._rawPrevTime = 0 === h ? v - 1e-4 : v, this._cycle = T, this._locked = !0, p = b ? 0 : h, this.render(p, t, 0 === h), t || this._gc || this.vars.onRepeat && (this._cycle = _, this._locked = !1, this._callback("onRepeat")), p !== this._time) return;
                    if (w && (this._cycle = T, this._locked = !0, p = b ? h + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !y) return;
                    this._time = P, this._totalTime = S, this._cycle = _, this._rawPrevTime = x
                }
                if (this._time !== p && this._first || i || a || c) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && 0 < e && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t || this._callback("onStart")), p <= (d = this._time))
                        for (s = this._first; s && (r = s._next, d === this._time && (!this._paused || y));)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (c === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (e - s._startTime) * s._timeScale, t, i) : s.render((e - s._startTime) * s._timeScale, t, i)), s = r;
                    else
                        for (s = this._last; s && (r = s._prev, d === this._time && (!this._paused || y));) {
                            if (s._active || s._startTime <= p && !s._paused && !s._gc) {
                                if (c === s) {
                                    for (c = s._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (e - c._startTime) * c._timeScale : (e - c._startTime) * c._timeScale, t, i), c = c._prev;
                                    c = null, this.pause()
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (e - s._startTime) * s._timeScale, t, i) : s.render((e - s._startTime) * s._timeScale, t, i)
                            }
                            s = r
                        }
                    this._onUpdate && (t || (M.length && A(), this._callback("onUpdate"))), n && (this._locked || this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (o && (M.length && A(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[n] && this._callback(n)))
                } else f !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
            }, o.getActive = function(e, t, i) {
                null == e && (e = !0), null == t && (t = !0), null == i && (i = !1);
                var s, o, r = [],
                    n = this.getChildren(e, t, i),
                    a = 0,
                    l = n.length;
                for (s = 0; s < l; s++)(o = n[s]).isActive() && (r[a++] = o);
                return r
            }, o.getLabelAfter = function(e) {
                e || 0 !== e && (e = this._time);
                var t, i = this.getLabelsArray(),
                    s = i.length;
                for (t = 0; t < s; t++)
                    if (i[t].time > e) return i[t].name;
                return null
            }, o.getLabelBefore = function(e) {
                null == e && (e = this._time);
                for (var t = this.getLabelsArray(), i = t.length; - 1 < --i;)
                    if (t[i].time < e) return t[i].name;
                return null
            }, o.getLabelsArray = function() {
                var e, t = [],
                    i = 0;
                for (e in this._labels) t[i++] = {
                    time: this._labels[e],
                    name: e
                };
                return t.sort(function(e, t) {
                    return e.time - t.time
                }), t
            }, o.invalidate = function() {
                return this._locked = !1, t.prototype.invalidate.call(this)
            }, o.progress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0
            }, o.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration() || 0
            }, o.totalDuration = function(e) {
                return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, o.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
            }, o.repeat = function(e) {
                return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
            }, o.repeatDelay = function(e) {
                return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
            }, o.yoyo = function(e) {
                return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, o.currentLabel = function(e) {
                return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
            }, i
        }, !0), _ = 180 / Math.PI, w = [], S = [], x = [], v = {}, i = _gsScope._gsDefine.globals, y = function(e, t, i, s) {
            i === s && (i = s - (s - t) / 1e6), e === t && (t = e + (i - e) / 1e6), this.a = e, this.b = t, this.c = i, this.d = s, this.da = s - e, this.ca = i - e, this.ba = t - e
        }, P = function(e, t, i, s) {
            var o = {
                    a: e
                },
                r = {},
                n = {},
                a = {
                    c: s
                },
                l = (e + t) / 2,
                c = (t + i) / 2,
                d = (i + s) / 2,
                p = (l + c) / 2,
                u = (c + d) / 2,
                h = (u - p) / 8;
            return o.b = l + (e - l) / 4, r.b = p + h, o.c = r.a = (o.b + r.b) / 2, r.c = n.a = (p + u) / 2, n.b = u - h, a.b = d + (s - d) / 4, n.c = a.a = (n.b + a.b) / 2, [o, r, n, a]
        }, T = function(e, t, i, s, o) {
            var r, n, a, l, c, d, p, u, h, f, m, g, v, y = e.length - 1,
                T = 0,
                b = e[0].a;
            for (r = 0; r < y; r++) n = (c = e[T]).a, a = c.d, l = e[T + 1].d, o ? (m = w[r], v = ((g = S[r]) + m) * t * .25 / (s ? .5 : x[r] || .5), u = a - ((d = a - (a - n) * (s ? .5 * t : 0 !== m ? v / m : 0)) + (((p = a + (l - a) * (s ? .5 * t : 0 !== g ? v / g : 0)) - d) * (3 * m / (m + g) + .5) / 4 || 0))) : u = a - ((d = a - (a - n) * t * .5) + (p = a + (l - a) * t * .5)) / 2, d += u, p += u, c.c = h = d, c.b = 0 !== r ? b : b = c.a + .6 * (c.c - c.a), c.da = a - n, c.ca = h - n, c.ba = b - n, i ? (f = P(n, b, h, a), e.splice(T, 1, f[0], f[1], f[2], f[3]), T += 4) : T++, b = p;
            (c = e[T]).b = b, c.c = b + .4 * (c.d - b), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = b - c.a, i && (f = P(c.a, b, c.c, c.d), e.splice(T, 1, f[0], f[1], f[2], f[3]))
        }, b = function(e, t, i, s) {
            var o, r, n, a, l, c, d = [];
            if (s)
                for (r = (e = [s].concat(e)).length; - 1 < --r;) "string" == typeof(c = e[r][t]) && "=" === c.charAt(1) && (e[r][t] = s[t] + Number(c.charAt(0) + c.substr(2)));
            if ((o = e.length - 2) < 0) return d[0] = new y(e[0][t], 0, 0, e[0][t]), d;
            for (r = 0; r < o; r++) n = e[r][t], a = e[r + 1][t], d[r] = new y(n, 0, 0, a), i && (l = e[r + 2][t], w[r] = (w[r] || 0) + (a - n) * (a - n), S[r] = (S[r] || 0) + (l - a) * (l - a));
            return d[r] = new y(e[r][t], 0, 0, e[r + 1][t]), d
        }, h = function(e, t, i, s, o, r) {
            var n, a, l, c, d, p, u, h, f = {},
                m = [],
                g = r || e[0];
            for (a in o = "string" == typeof o ? "," + o + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == t && (t = 1), e[0]) m.push(a);
            if (1 < e.length) {
                for (h = e[e.length - 1], u = !0, n = m.length; - 1 < --n;)
                    if (a = m[n], .05 < Math.abs(g[a] - h[a])) {
                        u = !1;
                        break
                    }
                u && (e = e.concat(), r && e.unshift(r), e.push(e[1]), r = e[e.length - 3])
            }
            for (w.length = S.length = x.length = 0, n = m.length; - 1 < --n;) a = m[n], v[a] = -1 !== o.indexOf("," + a + ","), f[a] = b(e, a, v[a], r);
            for (n = w.length; - 1 < --n;) w[n] = Math.sqrt(w[n]), S[n] = Math.sqrt(S[n]);
            if (!s) {
                for (n = m.length; - 1 < --n;)
                    if (v[a])
                        for (p = (l = f[m[n]]).length - 1, c = 0; c < p; c++) d = l[c + 1].da / S[c] + l[c].da / w[c] || 0, x[c] = (x[c] || 0) + d * d;
                for (n = x.length; - 1 < --n;) x[n] = Math.sqrt(x[n])
            }
            for (n = m.length, c = i ? 4 : 1; - 1 < --n;) l = f[a = m[n]], T(l, t, i, s, v[a]), u && (l.splice(0, c), l.splice(l.length - c, c));
            return f
        }, f = function(e, t, i) {
            for (var s, o, r, n, a, l, c, d, p, u, h, f = 1 / i, m = e.length; - 1 < --m;)
                for (r = (u = e[m]).a, n = u.d - r, a = u.c - r, l = u.b - r, s = o = 0, d = 1; d <= i; d++) s = o - (o = ((c = f * d) * c * n + 3 * (p = 1 - c) * (c * a + p * l)) * c), t[h = m * i + d - 1] = (t[h] || 0) + s * s
        }, g = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.8",
            API: 2,
            global: !0,
            init: function(e, t, i) {
                this._target = e, t instanceof Array && (t = {
                    values: t
                }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                var s, o, r, n, a, l = t.values || [],
                    c = {},
                    d = l[0],
                    p = t.autoRotate || i.vars.orientToBezier;
                for (s in this._autoRotate = p ? p instanceof Array ? p : [
                        ["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]
                    ] : null, d) this._props.push(s);
                for (r = this._props.length; - 1 < --r;) s = this._props[r], this._overwriteProps.push(s), o = this._func[s] = "function" == typeof e[s], c[s] = o ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), a || c[s] !== l[0][s] && (a = c);
                if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? h(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, a) : function(e, t, i) {
                        var s, o, r, n, a, l, c, d, p, u, h, f = {},
                            m = "cubic" === (t = t || "soft") ? 3 : 2,
                            g = "soft" === t,
                            v = [];
                        if (g && i && (e = [i].concat(e)), null == e || e.length < m + 1) throw "invalid Bezier data";
                        for (p in e[0]) v.push(p);
                        for (l = v.length; - 1 < --l;) {
                            for (f[p = v[l]] = a = [], u = 0, d = e.length, c = 0; c < d; c++) s = null == i ? e[c][p] : "string" == typeof(h = e[c][p]) && "=" === h.charAt(1) ? i[p] + Number(h.charAt(0) + h.substr(2)) : Number(h), g && 1 < c && c < d - 1 && (a[u++] = (s + a[u - 2]) / 2), a[u++] = s;
                            for (d = u - m + 1, c = u = 0; c < d; c += m) s = a[c], o = a[c + 1], r = a[c + 2], n = 2 === m ? 0 : a[c + 3], a[u++] = h = 3 === m ? new y(s, o, r, n) : new y(s, (2 * o + s) / 3, (2 * o + r) / 3, r);
                            a.length = u
                        }
                        return f
                    }(l, t.type, c), this._segCount = this._beziers[s].length, this._timeRes) {
                    var u = function(e, t) {
                        var i, s, o, r, n = [],
                            a = [],
                            l = 0,
                            c = 0,
                            d = (t = t >> 0 || 6) - 1,
                            p = [],
                            u = [];
                        for (i in e) f(e[i], n, t);
                        for (o = n.length, s = 0; s < o; s++) l += Math.sqrt(n[s]), u[r = s % t] = l, r === d && (c += l, p[r = s / t >> 0] = u, a[r] = c, l = 0, u = []);
                        return {
                            length: c,
                            lengths: a,
                            segments: p
                        }
                    }(this._beziers, this._timeRes);
                    this._length = u.length, this._lengths = u.lengths, this._segments = u.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (p = this._autoRotate)
                    for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), r = p.length; - 1 < --r;) {
                        for (n = 0; n < 3; n++) s = p[r][n], this._func[s] = "function" == typeof e[s] && e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                        s = p[r][2], this._initialRotations[r] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0, this._overwriteProps.push(s)
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },
            set: function(e) {
                var t, i, s, o, r, n, a, l, c, d, p = this._segCount,
                    u = this._func,
                    h = this._target,
                    f = e !== this._startRatio;
                if (this._timeRes) {
                    if (c = this._lengths, d = this._curSeg, e *= this._length, s = this._li, e > this._l2 && s < p - 1) {
                        for (l = p - 1; s < l && (this._l2 = c[++s]) <= e;);
                        this._l1 = c[s - 1], this._li = s, this._curSeg = d = this._segments[s], this._s2 = d[this._s1 = this._si = 0]
                    } else if (e < this._l1 && 0 < s) {
                        for (; 0 < s && (this._l1 = c[--s]) >= e;);
                        0 === s && e < this._l1 ? this._l1 = 0 : s++, this._l2 = c[s], this._li = s, this._curSeg = d = this._segments[s], this._s1 = d[(this._si = d.length - 1) - 1] || 0, this._s2 = d[this._si]
                    }
                    if (t = s, e -= this._l1, s = this._si, e > this._s2 && s < d.length - 1) {
                        for (l = d.length - 1; s < l && (this._s2 = d[++s]) <= e;);
                        this._s1 = d[s - 1], this._si = s
                    } else if (e < this._s1 && 0 < s) {
                        for (; 0 < s && (this._s1 = d[--s]) >= e;);
                        0 === s && e < this._s1 ? this._s1 = 0 : s++, this._s2 = d[s], this._si = s
                    }
                    n = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else n = (e - (t = e < 0 ? 0 : 1 <= e ? p - 1 : p * e >> 0) * (1 / p)) * p;
                for (i = 1 - n, s = this._props.length; - 1 < --s;) o = this._props[s], a = (n * n * (r = this._beziers[o][t]).da + 3 * i * (n * r.ca + i * r.ba)) * n + r.a, this._mod[o] && (a = this._mod[o](a, h)), u[o] ? h[o](a) : h[o] = a;
                if (this._autoRotate) {
                    var m, g, v, y, T, b, w, S = this._autoRotate;
                    for (s = S.length; - 1 < --s;) o = S[s][2], b = S[s][3] || 0, w = !0 === S[s][4] ? 1 : _, r = this._beziers[S[s][0]], m = this._beziers[S[s][1]], r && m && (r = r[t], m = m[t], g = r.a + (r.b - r.a) * n, g += ((y = r.b + (r.c - r.b) * n) - g) * n, y += (r.c + (r.d - r.c) * n - y) * n, v = m.a + (m.b - m.a) * n, v += ((T = m.b + (m.c - m.b) * n) - v) * n, T += (m.c + (m.d - m.c) * n - T) * n, a = f ? Math.atan2(T - v, y - g) * w + b : this._initialRotations[s], this._mod[o] && (a = this._mod[o](a, h)), u[o] ? h[o](a) : h[o] = a)
                }
            }
        }), s = g.prototype, g.bezierThrough = h, g.cubicToQuadratic = P, g._autoCSS = !0, g.quadraticToCubic = function(e, t, i) {
            return new y(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
        }, g._cssRegister = function() {
            var e = i.CSSPlugin;
            if (e) {
                var t = e._internals,
                    h = t._parseToProxy,
                    f = t._setPluginRatio,
                    m = t.CSSPropTween;
                t._registerComplexSpecialProp("bezier", {
                    parser: function(e, t, i, s, o, r) {
                        t instanceof Array && (t = {
                            values: t
                        }), r = new g;
                        var n, a, l, c = t.values,
                            d = c.length - 1,
                            p = [],
                            u = {};
                        if (d < 0) return o;
                        for (n = 0; n <= d; n++) l = h(e, c[n], s, o, r, d !== n), p[n] = l.end;
                        for (a in t) u[a] = t[a];
                        return u.values = p, (o = new m(e, "bezier", 0, 0, l.pt, 2)).data = l, o.plugin = r, o.setRatio = f, 0 === u.autoRotate && (u.autoRotate = !0), !u.autoRotate || u.autoRotate instanceof Array || (n = !0 === u.autoRotate ? 0 : Number(u.autoRotate), u.autoRotate = null != l.end.left ? [
                            ["left", "top", "rotation", n, !1]
                        ] : null != l.end.x && [
                            ["x", "y", "rotation", n, !1]
                        ]), u.autoRotate && (s._transform || s._enableTransforms(!1), l.autoRotate = s._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, s._overwriteProps.push("rotation")), r._onInitTween(l.proxy, u, s._tween), o
                    }
                })
            }
        }, s._mod = function(e) {
            for (var t, i = this._overwriteProps, s = i.length; - 1 < --s;)(t = e[i[s]]) && "function" == typeof t && (this._mod[i[s]] = t)
        }, s._kill = function(e) {
            var t, i, s = this._props;
            for (t in this._beziers)
                if (t in e)
                    for (delete this._beziers[t], delete this._func[t], i = s.length; - 1 < --i;) s[i] === t && s.splice(i, 1);
            if (s = this._autoRotate)
                for (i = s.length; - 1 < --i;) e[s[i][2]] && s.splice(i, 1);
            return this._super._kill.call(this, e)
        }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(r, $) {
            var f, x, C, m, N = function() {
                    r.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = N.prototype.setRatio
                },
                c = _gsScope._gsDefine.globals,
                g = {},
                e = N.prototype = new r("css");
            (e.constructor = N).version = "1.20.4", N.API = 2, N.defaultTransformPerspective = 0, N.defaultSkewType = "compensated", N.defaultSmoothOrigin = !0, e = "px", N.suffixMap = {
                top: e,
                right: e,
                bottom: e,
                left: e,
                width: e,
                height: e,
                fontSize: e,
                padding: e,
                margin: e,
                perspective: e,
                lineHeight: ""
            };
            var M, v, y, X, T, P, A, k, t, i, E = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                I = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                d = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                D = /(?:\d|\-|\+|=|#|\.)*/g,
                G = /opacity *= *([^)]*)/i,
                w = /opacity:([^;]*)/i,
                n = /alpha\(opacity *=.+?\)/i,
                S = /^(rgb|hsl)/,
                a = /([A-Z])/g,
                l = /-([a-z])/gi,
                _ = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                p = function(e, t) {
                    return t.toUpperCase()
                },
                h = /(?:Left|Right|Width)/i,
                u = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                z = /,(?=[^\)]*(?:\(|$))/gi,
                O = /[\s,\(]/i,
                W = Math.PI / 180,
                F = 180 / Math.PI,
                B = {},
                s = {
                    style: {}
                },
                L = _gsScope.document || {
                    createElement: function() {
                        return s
                    }
                },
                R = function(e, t) {
                    return L.createElementNS ? L.createElementNS(t || "http://www.w3.org/1999/xhtml", e) : L.createElement(e)
                },
                V = R("div"),
                Y = R("img"),
                o = N._internals = {
                    _specialProps: g
                },
                j = (_gsScope.navigator || {}).userAgent || "",
                q = (t = j.indexOf("Android"), i = R("a"), y = -1 !== j.indexOf("Safari") && -1 === j.indexOf("Chrome") && (-1 === t || 3 < parseFloat(j.substr(t + 8, 2))), T = y && parseFloat(j.substr(j.indexOf("Version/index.html") + 8, 2)) < 6, X = -1 !== j.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(j)) && (P = parseFloat(RegExp.$1)), !!i && (i.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(i.style.opacity))),
                U = function(e) {
                    return G.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                K = function(e) {
                    _gsScope.console && console.log(e)
                },
                Q = "",
                Z = "",
                J = function(e, t) {
                    var i, s, o = (t = t || V).style;
                    if (void 0 !== o[e]) return e;
                    for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; - 1 < --s && void 0 === o[i[s] + e];);
                    return 0 <= s ? (Q = "-" + (Z = 3 === s ? "ms" : i[s]).toLowerCase() + "-", Z + e) : null
                },
                ee = L.defaultView ? L.defaultView.getComputedStyle : function() {},
                te = N.getStyle = function(e, t, i, s, o) {
                    var r;
                    return q || "opacity" !== t ? (!s && e.style[t] ? r = e.style[t] : (i = i || ee(e)) ? r = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(a, "-$1").toLowerCase()) : e.currentStyle && (r = e.currentStyle[t]), null == o || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : o) : U(e)
                },
                ie = o.convertToPixels = function(e, t, i, s, o) {
                    if ("px" === s || !s && "lineHeight" !== t) return i;
                    if ("auto" === s || !i) return 0;
                    var r, n, a, l = h.test(t),
                        c = e,
                        d = V.style,
                        p = i < 0,
                        u = 1 === i;
                    if (p && (i = -i), u && (i *= 100), "lineHeight" !== t || s)
                        if ("%" === s && -1 !== t.indexOf("border")) r = i / 100 * (l ? e.clientWidth : e.clientHeight);
                        else {
                            if (d.cssText = "border:0 solid red;position:" + te(e, "position") + ";line-height:0;", "%" !== s && c.appendChild && "v" !== s.charAt(0) && "rem" !== s) d[l ? "borderLeftWidth" : "borderTopWidth"] = i + s;
                            else {
                                if (c = e.parentNode || L.body, -1 !== te(c, "display").indexOf("flex") && (d.position = "absolute"), n = c._gsCache, a = $.ticker.frame, n && l && n.time === a) return n.width * i / 100;
                                d[l ? "width" : "height"] = i + s
                            }
                            c.appendChild(V), r = parseFloat(V[l ? "offsetWidth" : "offsetHeight"]), c.removeChild(V), l && "%" === s && !1 !== N.cacheWidths && ((n = c._gsCache = c._gsCache || {}).time = a, n.width = r / i * 100), 0 !== r || o || (r = ie(e, t, i, s, !0))
                        } else n = ee(e).lineHeight, e.style.lineHeight = i, r = parseFloat(ee(e).lineHeight), e.style.lineHeight = n;
                    return u && (r /= 100), p ? -r : r
                },
                se = o.calculateOffset = function(e, t, i) {
                    if ("absolute" !== te(e, "position", i)) return 0;
                    var s = "left" === t ? "Left" : "Top",
                        o = te(e, "margin" + s, i);
                    return e["offset" + s] - (ie(e, t, parseFloat(o), o.replace(D, "")) || 0)
                },
                oe = function(e, t) {
                    var i, s, o, r = {};
                    if (t = t || ee(e, null))
                        if (i = t.length)
                            for (; - 1 < --i;)(-1 === (o = t[i]).indexOf("-transform") || ze === o) && (r[o.replace(l, p)] = t.getPropertyValue(o));
                        else
                            for (i in t)(-1 === i.indexOf("Transform") || He === i) && (r[i] = t[i]);
                    else if (t = e.currentStyle || e.style)
                        for (i in t) "string" == typeof i && void 0 === r[i] && (r[i.replace(l, p)] = t[i]);
                    return q || (r.opacity = U(e)), s = qe(e, t, !1), r.rotation = s.rotation, r.skewX = s.skewX, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, Be && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
                },
                re = function(e, t, i, s, o) {
                    var r, n, a, l = {},
                        c = e.style;
                    for (n in i) "cssText" !== n && "length" !== n && isNaN(n) && (t[n] !== (r = i[n]) || o && o[n]) && -1 === n.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[n] = "auto" !== r || "left" !== n && "top" !== n ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof t[n] || "" === t[n].replace(d, "") ? r : 0 : se(e, n), void 0 !== c[n] && (a = new be(c, n, c[n], a)));
                    if (s)
                        for (n in s) "className" !== n && (l[n] = s[n]);
                    return {
                        difs: l,
                        firstMPT: a
                    }
                },
                ne = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                ae = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                le = function(e, t, i) {
                    if ("svg" === (e.nodeName + "").toLowerCase()) return (i || ee(e))[t] || 0;
                    if (e.getCTM && Ve(e)) return e.getBBox()[t] || 0;
                    var s = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                        o = ne[t],
                        r = o.length;
                    for (i = i || ee(e, null); - 1 < --r;) s -= parseFloat(te(e, "padding" + o[r], i, !0)) || 0, s -= parseFloat(te(e, "border" + o[r] + "Width", i, !0)) || 0;
                    return s
                },
                ce = function(e, t) {
                    if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                    (null == e || "" === e) && (e = "0 0");
                    var i, s = e.split(" "),
                        o = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : s[0],
                        r = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : s[1];
                    if (3 < s.length && !t) {
                        for (s = e.split(", ").join(",").split(","), e = [], i = 0; i < s.length; i++) e.push(ce(s[i]));
                        return e.join(",")
                    }
                    return null == r ? r = "center" === o ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === o || isNaN(parseFloat(o)) && -1 === (o + "").indexOf("=")) && (o = "50%"), e = o + " " + r + (2 < s.length ? " " + s[2] : ""), t && (t.oxp = -1 !== o.indexOf("%"), t.oyp = -1 !== r.indexOf("%"), t.oxr = "=" === o.charAt(1), t.oyr = "=" === r.charAt(1), t.ox = parseFloat(o.replace(d, "")), t.oy = parseFloat(r.replace(d, "")), t.v = e), t || e
                },
                de = function(e, t) {
                    return "function" == typeof e && (e = e(k, A)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
                },
                pe = function(e, t) {
                    return "function" == typeof e && (e = e(k, A)), null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
                },
                ue = function(e, t, i, s) {
                    var o, r, n, a, l;
                    return "function" == typeof e && (e = e(k, A)), null == e ? a = t : "number" == typeof e ? a = e : (o = 360, r = e.split("_"), n = ((l = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === e.indexOf("rad") ? 1 : F) - (l ? 0 : t), r.length && (s && (s[i] = t + n), -1 !== e.indexOf("short") && ((n %= o) !== n % 180 && (n = n < 0 ? n + o : n - o)), -1 !== e.indexOf("_cw") && n < 0 ? n = (n + 3599999999640) % o - (n / o | 0) * o : -1 !== e.indexOf("ccw") && 0 < n && (n = (n - 3599999999640) % o - (n / o | 0) * o)), a = t + n), a < 1e-6 && -1e-6 < a && (a = 0), a
                },
                he = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                fe = function(e, t, i) {
                    return 255 * (6 * (e = e < 0 ? e + 1 : 1 < e ? e - 1 : e) < 1 ? t + (i - t) * e * 6 : e < .5 ? i : 3 * e < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) + .5 | 0
                },
                me = N.parseColor = function(e, t) {
                    var i, s, o, r, n, a, l, c, d, p, u;
                    if (e)
                        if ("number" == typeof e) i = [e >> 16, e >> 8 & 255, 255 & e];
                        else {
                            if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), he[e]) i = he[e];
                            else if ("#" === e.charAt(0)) 4 === e.length && (e = "#" + (s = e.charAt(1)) + s + (o = e.charAt(2)) + o + (r = e.charAt(3)) + r), i = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                            else if ("hsl" === e.substr(0, 3))
                                if (i = u = e.match(E), t) {
                                    if (-1 !== e.indexOf("=")) return e.match(I)
                                } else n = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, s = 2 * (l = Number(i[2]) / 100) - (o = l <= .5 ? l * (a + 1) : l + a - l * a), 3 < i.length && (i[3] = Number(i[3])), i[0] = fe(n + 1 / 3, s, o), i[1] = fe(n, s, o), i[2] = fe(n - 1 / 3, s, o);
                            else i = e.match(E) || he.transparent;
                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), 3 < i.length && (i[3] = Number(i[3]))
                        } else i = he.black;
                    return t && !u && (s = i[0] / 255, o = i[1] / 255, r = i[2] / 255, l = ((c = Math.max(s, o, r)) + (d = Math.min(s, o, r))) / 2, c === d ? n = a = 0 : (p = c - d, a = .5 < l ? p / (2 - c - d) : p / (c + d), n = c === s ? (o - r) / p + (o < r ? 6 : 0) : c === o ? (r - s) / p + 2 : (s - o) / p + 4, n *= 60), i[0] = n + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                },
                ge = function(e, t) {
                    var i, s, o, r = e.match(ve) || [],
                        n = 0,
                        a = "";
                    if (!r.length) return e;
                    for (i = 0; i < r.length; i++) s = r[i], n += (o = e.substr(n, e.indexOf(s, n) - n)).length + s.length, 3 === (s = me(s, t)).length && s.push(1), a += o + (t ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                    return a + e.substr(n)
                },
                ve = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (e in he) ve += "|" + e + "\\b";
            ve = new RegExp(ve + ")", "gi"), N.colorStringFilter = function(e) {
                var t, i = e[0] + " " + e[1];
                ve.test(i) && (t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), e[0] = ge(e[0], t), e[1] = ge(e[1], t)), ve.lastIndex = 0
            }, $.defaultStringFilter || ($.defaultStringFilter = N.colorStringFilter);
            var ye = function(e, t, r, n) {
                    if (null == e) return function(e) {
                        return e
                    };
                    var a, l = t ? (e.match(ve) || [""])[0] : "",
                        c = e.split(l).join("").match(b) || [],
                        d = e.substr(0, e.indexOf(c[0])),
                        p = ")" === e.charAt(e.length - 1) ? ")" : "",
                        u = -1 !== e.indexOf(" ") ? " " : ",",
                        h = c.length,
                        f = 0 < h ? c[0].replace(E, "") : "";
                    return h ? a = t ? function(e) {
                        var t, i, s, o;
                        if ("number" == typeof e) e += f;
                        else if (n && z.test(e)) {
                            for (o = e.replace(z, "|").split("|"), s = 0; s < o.length; s++) o[s] = a(o[s]);
                            return o.join(",")
                        }
                        if (t = (e.match(ve) || [l])[0], s = (i = e.split(t).join("").match(b) || []).length, h > s--)
                            for (; ++s < h;) i[s] = r ? i[(s - 1) / 2 | 0] : c[s];
                        return d + i.join(u) + u + t + p + (-1 !== e.indexOf("inset") ? " inset" : "")
                    } : function(e) {
                        var t, i, s;
                        if ("number" == typeof e) e += f;
                        else if (n && z.test(e)) {
                            for (i = e.replace(z, "|").split("|"), s = 0; s < i.length; s++) i[s] = a(i[s]);
                            return i.join(",")
                        }
                        if (s = (t = e.match(b) || []).length, h > s--)
                            for (; ++s < h;) t[s] = r ? t[(s - 1) / 2 | 0] : c[s];
                        return d + t.join(u) + p
                    } : function(e) {
                        return e
                    }
                },
                Te = function(c) {
                    return c = c.split(","),
                        function(e, t, i, s, o, r, n) {
                            var a, l = (t + "").split(" ");
                            for (n = {}, a = 0; a < 4; a++) n[c[a]] = l[a] = l[a] || l[(a - 1) / 2 >> 0];
                            return s.parse(e, n, o, r)
                        }
                },
                be = (o._setPluginRatio = function(e) {
                    this.plugin.setRatio(e);
                    for (var t, i, s, o, r, n = this.data, a = n.proxy, l = n.firstMPT; l;) t = a[l.v], l.r ? t = Math.round(t) : t < 1e-6 && -1e-6 < t && (t = 0), l.t[l.p] = t, l = l._next;
                    if (n.autoRotate && (n.autoRotate.rotation = n.mod ? n.mod(a.rotation, this.t) : a.rotation), 1 === e || 0 === e)
                        for (l = n.firstMPT, r = 1 === e ? "e" : "b"; l;) {
                            if ((i = l.t).type) {
                                if (1 === i.type) {
                                    for (o = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++) o += i["xn" + s] + i["xs" + (s + 1)];
                                    i[r] = o
                                }
                            } else i[r] = i.s + i.xs0;
                            l = l._next
                        }
                }, function(e, t, i, s, o) {
                    this.t = e, this.p = t, this.v = i, this.r = o, s && ((s._prev = this)._next = s)
                }),
                we = (o._parseToProxy = function(e, t, i, s, o, r) {
                    var n, a, l, c, d, p = s,
                        u = {},
                        h = {},
                        f = i._transform,
                        m = B;
                    for (i._transform = null, B = t, s = d = i.parse(e, t, s, o), B = m, r && (i._transform = f, p && (p._prev = null, p._prev && (p._prev._next = null))); s && s !== p;) {
                        if (s.type <= 1 && (h[a = s.p] = s.s + s.c, u[a] = s.s, r || (c = new be(s, "s", a, c, s.r), s.c = 0), 1 === s.type))
                            for (n = s.l; 0 < --n;) l = "xn" + n, h[a = s.p + "_" + l] = s.data[l], u[a] = s[l], r || (c = new be(s, l, a, c, s.rxp[l]));
                        s = s._next
                    }
                    return {
                        proxy: u,
                        end: h,
                        firstMPT: c,
                        pt: d
                    }
                }, o.CSSPropTween = function(e, t, i, s, o, r, n, a, l, c, d) {
                    this.t = e, this.p = t, this.s = i, this.c = s, this.n = n || t, e instanceof we || m.push(this.n), this.r = a, this.type = r || 0, l && (this.pr = l, f = !0), this.b = void 0 === c ? i : c, this.e = void 0 === d ? i + s : d, o && ((this._next = o)._prev = this)
                }),
                Se = function(e, t, i, s, o, r) {
                    var n = new we(e, t, i, s - i, o, -1, r);
                    return n.b = i, n.e = n.xs0 = s, n
                },
                _e = N.parseComplex = function(e, t, i, s, o, r, n, a, l, c) {
                    i = i || r || "", "function" == typeof s && (s = s(k, A)), n = new we(e, t, 0, 0, n, c ? 2 : 1, null, !1, a, i, s), s += "", o && ve.test(s + i) && (s = [i, s], N.colorStringFilter(s), i = s[0], s = s[1]);
                    var d, p, u, h, f, m, g, v, y, T, b, w, S, _ = i.split(", ").join(",").split(" "),
                        x = s.split(", ").join(",").split(" "),
                        P = _.length,
                        C = !1 !== M;
                    for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (-1 !== (s + i).indexOf("rgb") || -1 !== (s + i).indexOf("hsl") ? (_ = _.join(" ").replace(z, ", ").split(" "), x = x.join(" ").replace(z, ", ").split(" ")) : (_ = _.join(" ").split(",").join(", ").split(" "), x = x.join(" ").split(",").join(", ").split(" ")), P = _.length), P !== x.length && (P = (_ = (r || "").split(" ")).length), n.plugin = l, n.setRatio = c, d = ve.lastIndex = 0; d < P; d++)
                        if (h = _[d], f = x[d], (v = parseFloat(h)) || 0 === v) n.appendXtra("", v, de(f, v), f.replace(I, ""), C && -1 !== f.indexOf("px"), !0);
                        else if (o && ve.test(h)) w = ")" + ((w = f.indexOf(")") + 1) ? f.substr(w) : ""), S = -1 !== f.indexOf("hsl") && q, T = f, h = me(h, S), f = me(f, S), (y = 6 < h.length + f.length) && !q && 0 === f[3] ? (n["xs" + n.l] += n.l ? " transparent" : "transparent", n.e = n.e.split(x[d]).join("transparent")) : (q || (y = !1), S ? n.appendXtra(T.substr(0, T.indexOf("hsl")) + (y ? "hsla(" : "hsl("), h[0], de(f[0], h[0]), ",", !1, !0).appendXtra("", h[1], de(f[1], h[1]), "%,", !1).appendXtra("", h[2], de(f[2], h[2]), y ? "%," : "%" + w, !1) : n.appendXtra(T.substr(0, T.indexOf("rgb")) + (y ? "rgba(" : "rgb("), h[0], f[0] - h[0], ",", !0, !0).appendXtra("", h[1], f[1] - h[1], ",", !0).appendXtra("", h[2], f[2] - h[2], y ? "," : w, !0), y && (h = h.length < 4 ? 1 : h[3], n.appendXtra("", h, (f.length < 4 ? 1 : f[3]) - h, w, !1))), ve.lastIndex = 0;
                    else if (m = h.match(E)) {
                        if (!(g = f.match(I)) || g.length !== m.length) return n;
                        for (p = u = 0; p < m.length; p++) b = m[p], T = h.indexOf(b, u), n.appendXtra(h.substr(u, T - u), Number(b), de(g[p], b), "", C && "px" === h.substr(T + b.length, 2), 0 === p), u = T + b.length;
                        n["xs" + n.l] += h.substr(u)
                    } else n["xs" + n.l] += n.l || n["xs" + n.l] ? " " + f : f;
                    if (-1 !== s.indexOf("=") && n.data) {
                        for (w = n.xs0 + n.data.s, d = 1; d < n.l; d++) w += n["xs" + d] + n.data["xn" + d];
                        n.e = w + n["xs" + d]
                    }
                    return n.l || (n.type = -1, n.xs0 = n.e), n.xfirst || n
                },
                xe = 9;
            for ((e = we.prototype).l = e.pr = 0; 0 < --xe;) e["xn" + xe] = 0, e["xs" + xe] = "";
            e.xs0 = "", e._next = e._prev = e.xfirst = e.data = e.plugin = e.setRatio = e.rxp = null, e.appendXtra = function(e, t, i, s, o, r) {
                var n = this,
                    a = n.l;
                return n["xs" + a] += r && (a || n["xs" + a]) ? " " + e : e || "", i || 0 === a || n.plugin ? (n.l++, n.type = n.setRatio ? 2 : 1, n["xs" + n.l] = s || "", 0 < a ? (n.data["xn" + a] = t + i, n.rxp["xn" + a] = o, n["xn" + a] = t, n.plugin || (n.xfirst = new we(n, "xn" + a, t, i, n.xfirst || n, 0, n.n, o, n.pr), n.xfirst.xs0 = 0)) : (n.data = {
                    s: t + i
                }, n.rxp = {}, n.s = t, n.c = i, n.r = o)) : n["xs" + a] += t + (s || ""), n
            };
            var Pe = function(e, t) {
                    t = t || {}, this.p = t.prefix && J(e) || e, g[e] = g[this.p] = this, this.format = t.formatter || ye(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                },
                Ce = o._registerComplexSpecialProp = function(e, t, i) {
                    "object" != typeof t && (t = {
                        parser: i
                    });
                    var s, o = e.split(","),
                        r = t.defaultValue;
                    for (i = i || [r], s = 0; s < o.length; s++) t.prefix = 0 === s && t.prefix, t.defaultValue = i[s] || r, new Pe(o[s], t)
                },
                Me = o._registerPluginProp = function(e) {
                    if (!g[e]) {
                        var l = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                        Ce(e, {
                            parser: function(e, t, i, s, o, r, n) {
                                var a = c.com.greensock.plugins[l];
                                return a ? (a._cssRegister(), g[i].parse(e, t, i, s, o, r, n)) : (K("Error: " + l + " js file not loaded."), o)
                            }
                        })
                    }
                };
            (e = Pe.prototype).parseComplex = function(e, t, i, s, o, r) {
                var n, a, l, c, d, p, u = this.keyword;
                if (this.multi && (z.test(i) || z.test(t) ? (a = t.replace(z, "|").split("|"), l = i.replace(z, "|").split("|")) : u && (a = [t], l = [i])), l) {
                    for (c = l.length > a.length ? l.length : a.length, n = 0; n < c; n++) t = a[n] = a[n] || this.dflt, i = l[n] = l[n] || this.dflt, u && ((d = t.indexOf(u)) !== (p = i.indexOf(u)) && (-1 === p ? a[n] = a[n].split(u).join("") : -1 === d && (a[n] += " " + u)));
                    t = a.join(", "), i = l.join(", ")
                }
                return _e(e, this.p, t, i, this.clrs, this.dflt, s, this.pr, o, r)
            }, e.parse = function(e, t, i, s, o, r, n) {
                return this.parseComplex(e.style, this.format(te(e, this.p, C, !1, this.dflt)), this.format(t), o, r)
            }, N.registerSpecialProp = function(e, l, c) {
                Ce(e, {
                    parser: function(e, t, i, s, o, r, n) {
                        var a = new we(e, i, 0, 0, o, 2, i, !1, c);
                        return a.plugin = r, a.setRatio = l(e, t, s._tween, i), a
                    },
                    priority: c
                })
            }, N.useSVGTransformAttr = !0;
            var Ae, ke, Ee, Ie, De, Ge = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                He = J("transform"),
                ze = Q + "transform",
                Oe = J("transformOrigin"),
                Be = null !== J("perspective"),
                Le = o.Transform = function() {
                    this.perspective = parseFloat(N.defaultTransformPerspective) || 0, this.force3D = !(!1 === N.defaultForce3D || !Be) && (N.defaultForce3D || "auto")
                },
                Re = _gsScope.SVGElement,
                $e = function(e, t, i) {
                    var s, o = L.createElementNS("http://www.w3.org/2000/svg", e),
                        r = /([a-z])([A-Z])/g;
                    for (s in i) o.setAttributeNS(null, s.replace(r, "$1-$2").toLowerCase(), i[s]);
                    return t.appendChild(o), o
                },
                Ne = L.documentElement || {},
                Xe = (De = P || /Android/i.test(j) && !_gsScope.chrome, L.createElementNS && !De && (ke = $e("svg", Ne), Ie = (Ee = $e("rect", ke, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, Ee.style[Oe] = "50% 50%", Ee.style[He] = "scaleX(0.5)", De = Ie === Ee.getBoundingClientRect().width && !(X && Be), Ne.removeChild(ke)), De),
                We = function(e, t, i, s, o, r) {
                    var n, a, l, c, d, p, u, h, f, m, g, v, y, T, b = e._gsTransform,
                        w = je(e, !0);
                    b && (y = b.xOrigin, T = b.yOrigin), (!s || (n = s.split(" ")).length < 2) && (0 === (u = e.getBBox()).x && 0 === u.y && u.width + u.height === 0 && (u = {
                        x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
                        y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
                        width: 0,
                        height: 0
                    }), n = [(-1 !== (t = ce(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * u.width : parseFloat(t[0])) + u.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * u.height : parseFloat(t[1])) + u.y]), i.xOrigin = c = parseFloat(n[0]), i.yOrigin = d = parseFloat(n[1]), s && w !== Ye && (p = w[0], u = w[1], h = w[2], f = w[3], m = w[4], g = w[5], (v = p * f - u * h) && (a = c * (f / v) + d * (-h / v) + (h * g - f * m) / v, l = c * (-u / v) + d * (p / v) - (p * g - u * m) / v, c = i.xOrigin = n[0] = a, d = i.yOrigin = n[1] = l)), b && (r && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), o || !1 !== o && !1 !== N.defaultSmoothOrigin ? (a = c - y, l = d - T, b.xOffset += a * w[0] + l * w[2] - a, b.yOffset += a * w[1] + l * w[3] - l) : b.xOffset = b.yOffset = 0), r || e.setAttribute("data-svg-origin", n.join(" "))
                },
                Fe = function(e) {
                    var t, i = R("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        s = this.parentNode,
                        o = this.nextSibling,
                        r = this.style.cssText;
                    if (Ne.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
                        t = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Fe
                    } catch (e) {} else this._originalGetBBox && (t = this._originalGetBBox());
                    return o ? s.insertBefore(this, o) : s.appendChild(this), Ne.removeChild(i), this.style.cssText = r, t
                },
                Ve = function(e) {
                    return !(!Re || !e.getCTM || e.parentNode && !e.ownerSVGElement || ! function(t) {
                        try {
                            return t.getBBox()
                        } catch (e) {
                            return Fe.call(t, !0)
                        }
                    }(e))
                },
                Ye = [1, 0, 0, 1, 0, 0],
                je = function(e, t) {
                    var i, s, o, r, n, a, l = e._gsTransform || new Le,
                        c = e.style;
                    if (He ? s = te(e, ze, null, !0) : e.currentStyle && (s = (s = e.currentStyle.filter.match(u)) && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, !He || !(a = !ee(e) || "none" === ee(e).display) && e.parentNode || (a && (r = c.display, c.display = "block"), e.parentNode || (n = 1, Ne.appendChild(e)), i = !(s = te(e, ze, null, !0)) || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, r ? c.display = r : a && Ze(c, "display"), n && Ne.removeChild(e)), (l.svg || e.getCTM && Ve(e)) && (i && -1 !== (c[He] + "").indexOf("matrix") && (s = c[He], i = 0), o = e.getAttribute("transform"), i && o && (s = "matrix(" + (o = e.transform.baseVal.consolidate().matrix).a + "," + o.b + "," + o.c + "," + o.d + "," + o.e + "," + o.f + ")", i = 0)), i) return Ye;
                    for (o = (s || "").match(E) || [], xe = o.length; - 1 < --xe;) r = Number(o[xe]), o[xe] = (n = r - (r |= 0)) ? (1e5 * n + (n < 0 ? -.5 : .5) | 0) / 1e5 + r : r;
                    return t && 6 < o.length ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o
                },
                qe = o.getTransform = function(e, t, i, s) {
                    if (e._gsTransform && i && !s) return e._gsTransform;
                    var o, r, n, a, l, c, d = i && e._gsTransform || new Le,
                        p = d.scaleX < 0,
                        u = Be && (parseFloat(te(e, Oe, t, !1, "0 0 0").split(" ")[2]) || d.zOrigin) || 0,
                        h = parseFloat(N.defaultTransformPerspective) || 0;
                    if (d.svg = !(!e.getCTM || !Ve(e)), d.svg && (We(e, te(e, Oe, t, !1, "50% 50%") + "", d, e.getAttribute("data-svg-origin")), Ae = N.useSVGTransformAttr || Xe), (o = je(e)) !== Ye) {
                        if (16 === o.length) {
                            var f, m, g, v, y, T = o[0],
                                b = o[1],
                                w = o[2],
                                S = o[3],
                                _ = o[4],
                                x = o[5],
                                P = o[6],
                                C = o[7],
                                M = o[8],
                                A = o[9],
                                k = o[10],
                                E = o[12],
                                I = o[13],
                                D = o[14],
                                G = o[11],
                                H = Math.atan2(P, k);
                            d.zOrigin && (E = M * (D = -d.zOrigin) - o[12], I = A * D - o[13], D = k * D + d.zOrigin - o[14]), d.rotationX = H * F, H && (f = _ * (v = Math.cos(-H)) + M * (y = Math.sin(-H)), m = x * v + A * y, g = P * v + k * y, M = _ * -y + M * v, A = x * -y + A * v, k = P * -y + k * v, G = C * -y + G * v, _ = f, x = m, P = g), H = Math.atan2(-w, k), d.rotationY = H * F, H && (m = b * (v = Math.cos(-H)) - A * (y = Math.sin(-H)), g = w * v - k * y, A = b * y + A * v, k = w * y + k * v, G = S * y + G * v, T = f = T * v - M * y, b = m, w = g), H = Math.atan2(b, T), d.rotation = H * F, H && (f = T * (v = Math.cos(H)) + b * (y = Math.sin(H)), m = _ * v + x * y, g = M * v + A * y, b = b * v - T * y, x = x * v - _ * y, A = A * v - M * y, T = f, _ = m, M = g), d.rotationX && 359.9 < Math.abs(d.rotationX) + Math.abs(d.rotation) && (d.rotationX = d.rotation = 0, d.rotationY = 180 - d.rotationY), H = Math.atan2(_, x), d.scaleX = (1e5 * Math.sqrt(T * T + b * b + w * w) + .5 | 0) / 1e5, d.scaleY = (1e5 * Math.sqrt(x * x + P * P) + .5 | 0) / 1e5, d.scaleZ = (1e5 * Math.sqrt(M * M + A * A + k * k) + .5 | 0) / 1e5, T /= d.scaleX, _ /= d.scaleY, b /= d.scaleX, x /= d.scaleY, 2e-5 < Math.abs(H) ? (d.skewX = H * F, _ = 0, "simple" !== d.skewType && (d.scaleY *= 1 / Math.cos(H))) : d.skewX = 0, d.perspective = G ? 1 / (G < 0 ? -G : G) : 0, d.x = E, d.y = I, d.z = D, d.svg && (d.x -= d.xOrigin - (d.xOrigin * T - d.yOrigin * _), d.y -= d.yOrigin - (d.yOrigin * b - d.xOrigin * x))
                        } else if (!Be || s || !o.length || d.x !== o[4] || d.y !== o[5] || !d.rotationX && !d.rotationY) {
                            var z = 6 <= o.length,
                                O = z ? o[0] : 1,
                                B = o[1] || 0,
                                L = o[2] || 0,
                                R = z ? o[3] : 1;
                            d.x = o[4] || 0, d.y = o[5] || 0, n = Math.sqrt(O * O + B * B), a = Math.sqrt(R * R + L * L), l = O || B ? Math.atan2(B, O) * F : d.rotation || 0, c = L || R ? Math.atan2(L, R) * F + l : d.skewX || 0, d.scaleX = n, d.scaleY = a, d.rotation = l, d.skewX = c, Be && (d.rotationX = d.rotationY = d.z = 0, d.perspective = h, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * O + d.yOrigin * L), d.y -= d.yOrigin - (d.xOrigin * B + d.yOrigin * R))
                        }
                        for (r in 90 < Math.abs(d.skewX) && Math.abs(d.skewX) < 270 && (p ? (d.scaleX *= -1, d.skewX += d.rotation <= 0 ? 180 : -180, d.rotation += d.rotation <= 0 ? 180 : -180) : (d.scaleY *= -1, d.skewX += d.skewX <= 0 ? 180 : -180)), d.zOrigin = u, d) d[r] < 2e-5 && -2e-5 < d[r] && (d[r] = 0)
                    }
                    return i && ((e._gsTransform = d).svg && (Ae && e.style[He] ? $.delayedCall(.001, function() {
                        Ze(e.style, He)
                    }) : !Ae && e.getAttribute("transform") && $.delayedCall(.001, function() {
                        e.removeAttribute("transform")
                    }))), d
                },
                Ue = function(e) {
                    var t, i, s = this.data,
                        o = -s.rotation * W,
                        r = o + s.skewX * W,
                        n = 1e5,
                        a = (Math.cos(o) * s.scaleX * n | 0) / n,
                        l = (Math.sin(o) * s.scaleX * n | 0) / n,
                        c = (Math.sin(r) * -s.scaleY * n | 0) / n,
                        d = (Math.cos(r) * s.scaleY * n | 0) / n,
                        p = this.t.style,
                        u = this.t.currentStyle;
                    if (u) {
                        i = l, l = -c, c = -i, t = u.filter, p.filter = "";
                        var h, f, m = this.t.offsetWidth,
                            g = this.t.offsetHeight,
                            v = "absolute" !== u.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + d,
                            T = s.x + m * s.xPercent / 100,
                            b = s.y + g * s.yPercent / 100;
                        if (null != s.ox && (T += (h = (s.oxp ? m * s.ox * .01 : s.ox) - m / 2) - (h * a + (f = (s.oyp ? g * s.oy * .01 : s.oy) - g / 2) * l), b += f - (h * c + f * d)), v ? y += ", Dx=" + ((h = m / 2) - (h * a + (f = g / 2) * l) + T) + ", Dy=" + (f - (h * c + f * d) + b) + ")" : y += ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? p.filter = t.replace(H, y) : p.filter = y + " " + t, (0 === e || 1 === e) && 1 === a && 0 === l && 0 === c && 1 === d && (v && -1 === y.indexOf("Dx=0, Dy=0") || G.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && p.removeAttribute("filter")), !v) {
                            var w, S, _, x = P < 8 ? 1 : -1;
                            for (h = s.ieOffsetX || 0, f = s.ieOffsetY || 0, s.ieOffsetX = Math.round((m - ((a < 0 ? -a : a) * m + (l < 0 ? -l : l) * g)) / 2 + T), s.ieOffsetY = Math.round((g - ((d < 0 ? -d : d) * g + (c < 0 ? -c : c) * m)) / 2 + b), xe = 0; xe < 4; xe++) _ = (i = -1 !== (w = u[S = ae[xe]]).indexOf("px") ? parseFloat(w) : ie(this.t, S, parseFloat(w), w.replace(D, "")) || 0) !== s[S] ? xe < 2 ? -s.ieOffsetX : -s.ieOffsetY : xe < 2 ? h - s.ieOffsetX : f - s.ieOffsetY, p[S] = (s[S] = Math.round(i - _ * (0 === xe || 2 === xe ? 1 : x))) + "px"
                        }
                    }
                },
                Ke = o.set3DTransformRatio = o.setTransformRatio = function(e) {
                    var t, i, s, o, r, n, a, l, c, d, p, u, h, f, m, g, v, y, T, b, w, S, _, x = this.data,
                        P = this.t.style,
                        C = x.rotation,
                        M = x.rotationX,
                        A = x.rotationY,
                        k = x.scaleX,
                        E = x.scaleY,
                        I = x.scaleZ,
                        D = x.x,
                        G = x.y,
                        H = x.z,
                        z = x.svg,
                        O = x.perspective,
                        B = x.force3D,
                        L = x.skewY,
                        R = x.skewX;
                    if (L && (R += L, C += L), !((1 !== e && 0 !== e || "auto" !== B || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && B || H || O || A || M || 1 !== I) || Ae && z || !Be) C || R || z ? (C *= W, S = R * W, _ = 1e5, i = Math.cos(C) * k, r = Math.sin(C) * k, s = Math.sin(C - S) * -E, n = Math.cos(C - S) * E, S && "simple" === x.skewType && (t = Math.tan(S - L * W), s *= t = Math.sqrt(1 + t * t), n *= t, L && (t = Math.tan(L * W), i *= t = Math.sqrt(1 + t * t), r *= t)), z && (D += x.xOrigin - (x.xOrigin * i + x.yOrigin * s) + x.xOffset, G += x.yOrigin - (x.xOrigin * r + x.yOrigin * n) + x.yOffset, Ae && (x.xPercent || x.yPercent) && (m = this.t.getBBox(), D += .01 * x.xPercent * m.width, G += .01 * x.yPercent * m.height), D < (m = 1e-6) && -m < D && (D = 0), G < m && -m < G && (G = 0)), T = (i * _ | 0) / _ + "," + (r * _ | 0) / _ + "," + (s * _ | 0) / _ + "," + (n * _ | 0) / _ + "," + D + "," + G + ")", z && Ae ? this.t.setAttribute("transform", "matrix(" + T) : P[He] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + T) : P[He] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + k + ",0,0," + E + "," + D + "," + G + ")";
                    else {
                        if (X && (k < (m = 1e-4) && -m < k && (k = I = 2e-5), E < m && -m < E && (E = I = 2e-5), !O || x.z || x.rotationX || x.rotationY || (O = 0)), C || R) C *= W, g = i = Math.cos(C), v = r = Math.sin(C), R && (C -= R * W, g = Math.cos(C), v = Math.sin(C), "simple" === x.skewType && (t = Math.tan((R - L) * W), g *= t = Math.sqrt(1 + t * t), v *= t, x.skewY && (t = Math.tan(L * W), i *= t = Math.sqrt(1 + t * t), r *= t))), s = -v, n = g;
                        else {
                            if (!(A || M || 1 !== I || O || z)) return void(P[He] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + G + "px," + H + "px)" + (1 !== k || 1 !== E ? " scale(" + k + "," + E + ")" : ""));
                            i = n = 1, s = r = 0
                        }
                        d = 1, o = a = l = c = p = u = 0, h = O ? -1 / O : 0, f = x.zOrigin, m = 1e-6, b = ",", w = "0", (C = A * W) && (g = Math.cos(C), p = h * (l = -(v = Math.sin(C))), o = i * v, a = r * v, h *= d = g, i *= g, r *= g), (C = M * W) && (t = s * (g = Math.cos(C)) + o * (v = Math.sin(C)), y = n * g + a * v, c = d * v, u = h * v, o = s * -v + o * g, a = n * -v + a * g, d *= g, h *= g, s = t, n = y), 1 !== I && (o *= I, a *= I, d *= I, h *= I), 1 !== E && (s *= E, n *= E, c *= E, u *= E), 1 !== k && (i *= k, r *= k, l *= k, p *= k), (f || z) && (f && (D += o * -f, G += a * -f, H += d * -f + f), z && (D += x.xOrigin - (x.xOrigin * i + x.yOrigin * s) + x.xOffset, G += x.yOrigin - (x.xOrigin * r + x.yOrigin * n) + x.yOffset), D < m && -m < D && (D = w), G < m && -m < G && (G = w), H < m && -m < H && (H = 0)), T = x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix3d(" : "matrix3d(", T += (i < m && -m < i ? w : i) + b + (r < m && -m < r ? w : r) + b + (l < m && -m < l ? w : l), T += b + (p < m && -m < p ? w : p) + b + (s < m && -m < s ? w : s) + b + (n < m && -m < n ? w : n), M || A || 1 !== I ? (T += b + (c < m && -m < c ? w : c) + b + (u < m && -m < u ? w : u) + b + (o < m && -m < o ? w : o), T += b + (a < m && -m < a ? w : a) + b + (d < m && -m < d ? w : d) + b + (h < m && -m < h ? w : h) + b) : T += ",0,0,0,0,1,0,", T += D + b + G + b + H + b + (O ? 1 + -H / O : 1) + ")", P[He] = T
                    }
                };
            (e = Le.prototype).x = e.y = e.z = e.skewX = e.skewY = e.rotation = e.rotationX = e.rotationY = e.zOrigin = e.xPercent = e.yPercent = e.xOffset = e.yOffset = 0, e.scaleX = e.scaleY = e.scaleZ = 1, Ce("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(e, t, i, s, o, r, n) {
                    if (s._lastParsedTransform === n) return o;
                    var a, l = (s._lastParsedTransform = n).scale && "function" == typeof n.scale ? n.scale : 0;
                    "function" == typeof n[i] && (a = n[i], n[i] = t), l && (n.scale = l(k, e));
                    var c, d, p, u, h, f, m, g, v, y = e._gsTransform,
                        T = e.style,
                        b = Ge.length,
                        w = n,
                        S = {},
                        _ = "transformOrigin",
                        x = qe(e, C, !0, w.parseTransform),
                        P = w.transform && ("function" == typeof w.transform ? w.transform(k, A) : w.transform);
                    if (x.skewType = w.skewType || x.skewType || N.defaultSkewType, s._transform = x, P && "string" == typeof P && He)(d = V.style)[He] = P, d.display = "block", d.position = "absolute", L.body.appendChild(V), c = qe(V, null, !1), "simple" === x.skewType && (c.scaleY *= Math.cos(c.skewX * W)), x.svg && (f = x.xOrigin, m = x.yOrigin, c.x -= x.xOffset, c.y -= x.yOffset, (w.transformOrigin || w.svgOrigin) && (P = {}, We(e, ce(w.transformOrigin), P, w.svgOrigin, w.smoothOrigin, !0), f = P.xOrigin, m = P.yOrigin, c.x -= P.xOffset - x.xOffset, c.y -= P.yOffset - x.yOffset), (f || m) && (g = je(V, !0), c.x -= f - (f * g[0] + m * g[2]), c.y -= m - (f * g[1] + m * g[3]))), L.body.removeChild(V), c.perspective || (c.perspective = x.perspective), null != w.xPercent && (c.xPercent = pe(w.xPercent, x.xPercent)), null != w.yPercent && (c.yPercent = pe(w.yPercent, x.yPercent));
                    else if ("object" == typeof w) {
                        if (c = {
                                scaleX: pe(null != w.scaleX ? w.scaleX : w.scale, x.scaleX),
                                scaleY: pe(null != w.scaleY ? w.scaleY : w.scale, x.scaleY),
                                scaleZ: pe(w.scaleZ, x.scaleZ),
                                x: pe(w.x, x.x),
                                y: pe(w.y, x.y),
                                z: pe(w.z, x.z),
                                xPercent: pe(w.xPercent, x.xPercent),
                                yPercent: pe(w.yPercent, x.yPercent),
                                perspective: pe(w.transformPerspective, x.perspective)
                            }, null != (h = w.directionalRotation))
                            if ("object" == typeof h)
                                for (d in h) w[d] = h[d];
                            else w.rotation = h;
                            "string" == typeof w.x && -1 !== w.x.indexOf("%") && (c.x = 0, c.xPercent = pe(w.x, x.xPercent)), "string" == typeof w.y && -1 !== w.y.indexOf("%") && (c.y = 0, c.yPercent = pe(w.y, x.yPercent)), c.rotation = ue("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : x.rotation, x.rotation, "rotation", S), Be && (c.rotationX = ue("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : x.rotationX || 0, x.rotationX, "rotationX", S), c.rotationY = ue("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : x.rotationY || 0, x.rotationY, "rotationY", S)), c.skewX = ue(w.skewX, x.skewX), c.skewY = ue(w.skewY, x.skewY)
                    }
                    for (Be && null != w.force3D && (x.force3D = w.force3D, u = !0), (p = x.force3D || x.z || x.rotationX || x.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == w.scale || (c.scaleZ = 1); - 1 < --b;)(1e-6 < (P = c[v = Ge[b]] - x[v]) || P < -1e-6 || null != w[v] || null != B[v]) && (u = !0, o = new we(x, v, x[v], P, o), v in S && (o.e = S[v]), o.xs0 = 0, o.plugin = r, s._overwriteProps.push(o.n));
                    return P = w.transformOrigin, x.svg && (P || w.svgOrigin) && (f = x.xOffset, m = x.yOffset, We(e, ce(P), c, w.svgOrigin, w.smoothOrigin), o = Se(x, "xOrigin", (y ? x : c).xOrigin, c.xOrigin, o, _), o = Se(x, "yOrigin", (y ? x : c).yOrigin, c.yOrigin, o, _), (f !== x.xOffset || m !== x.yOffset) && (o = Se(x, "xOffset", y ? f : x.xOffset, x.xOffset, o, _), o = Se(x, "yOffset", y ? m : x.yOffset, x.yOffset, o, _)), P = "0px 0px"), (P || Be && p && x.zOrigin) && (He ? (u = !0, v = Oe, P = (P || te(e, v, C, !1, "50% 50%")) + "", (o = new we(T, v, 0, 0, o, -1, _)).b = T[v], o.plugin = r, Be ? (d = x.zOrigin, P = P.split(" "), x.zOrigin = (2 < P.length && (0 === d || "0px" !== P[2]) ? parseFloat(P[2]) : d) || 0, o.xs0 = o.e = P[0] + " " + (P[1] || "50%") + " 0px", (o = new we(x, "zOrigin", 0, 0, o, -1, o.n)).b = d, o.xs0 = o.e = x.zOrigin) : o.xs0 = o.e = P) : ce(P + "", x)), u && (s._transformType = x.svg && Ae || !p && 3 !== this._transformType ? 2 : 3), a && (n[i] = a), l && (n.scale = l), o
                },
                prefix: !0
            }), Ce("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), Ce("borderRadius", {
                defaultValue: "0px",
                parser: function(e, t, i, s, o, r) {
                    t = this.format(t);
                    var n, a, l, c, d, p, u, h, f, m, g, v, y, T, b, w, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        _ = e.style;
                    for (f = parseFloat(e.offsetWidth), m = parseFloat(e.offsetHeight), n = t.split(" "), a = 0; a < S.length; a++) this.p.indexOf("border") && (S[a] = J(S[a])), -1 !== (d = c = te(e, S[a], C, !1, "0px")).indexOf(" ") && (d = (c = d.split(" "))[0], c = c[1]), p = l = n[a], u = parseFloat(d), v = d.substr((u + "").length), (y = "=" === p.charAt(1)) ? (h = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), h *= parseFloat(p), g = p.substr((h + "").length - (h < 0 ? 1 : 0)) || "") : (h = parseFloat(p), g = p.substr((h + "").length)), "" === g && (g = x[i] || v), g !== v && (T = ie(e, "borderLeft", u, v), b = ie(e, "borderTop", u, v), "%" === g ? (d = T / f * 100 + "%", c = b / m * 100 + "%") : "em" === g ? (d = T / (w = ie(e, "borderLeft", 1, "em")) + "em", c = b / w + "em") : (d = T + "px", c = b + "px"), y && (p = parseFloat(d) + h + g, l = parseFloat(c) + h + g)), o = _e(_, S[a], d + " " + c, p + " " + l, !1, "0px", o);
                    return o
                },
                prefix: !0,
                formatter: ye("0px 0px 0px 0px", !1, !0)
            }), Ce("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function(e, t, i, s, o, r) {
                    return _e(e.style, i, this.format(te(e, i, C, !1, "0px 0px")), this.format(t), !1, "0px", o)
                },
                prefix: !0,
                formatter: ye("0px 0px", !1, !0)
            }), Ce("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(e, t, i, s, o, r) {
                    var n, a, l, c, d, p, u = "background-position",
                        h = C || ee(e, null),
                        f = this.format((h ? P ? h.getPropertyValue(u + "-x") + " " + h.getPropertyValue(u + "-y") : h.getPropertyValue(u) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                        m = this.format(t);
                    if (-1 !== f.indexOf("%") != (-1 !== m.indexOf("%")) && m.split(",").length < 2 && ((p = te(e, "backgroundImage").replace(_, "")) && "none" !== p)) {
                        for (n = f.split(" "), a = m.split(" "), Y.setAttribute("src", p), l = 2; - 1 < --l;)(c = -1 !== (f = n[l]).indexOf("%")) !== (-1 !== a[l].indexOf("%")) && (d = 0 === l ? e.offsetWidth - Y.width : e.offsetHeight - Y.height, n[l] = c ? parseFloat(f) / 100 * d + "px" : parseFloat(f) / d * 100 + "%");
                        f = n.join(" ")
                    }
                    return this.parseComplex(e.style, f, m, o, r)
                },
                formatter: ce
            }), Ce("backgroundSize", {
                defaultValue: "0 0",
                formatter: function(e) {
                    return ce(-1 === (e += "").indexOf(" ") ? e + " " + e : e)
                }
            }), Ce("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), Ce("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), Ce("transformStyle", {
                prefix: !0
            }), Ce("backfaceVisibility", {
                prefix: !0
            }), Ce("userSelect", {
                prefix: !0
            }), Ce("margin", {
                parser: Te("marginTop,marginRight,marginBottom,marginLeft")
            }), Ce("padding", {
                parser: Te("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), Ce("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(e, t, i, s, o, r) {
                    var n, a, l;
                    return P < 9 ? (a = e.currentStyle, l = P < 8 ? " " : ",", n = "rect(" + a.clipTop + l + a.clipRight + l + a.clipBottom + l + a.clipLeft + ")", t = this.format(t).split(",").join(l)) : (n = this.format(te(e, this.p, C, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, n, t, o, r)
                }
            }), Ce("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), Ce("autoRound,strictUnits", {
                parser: function(e, t, i, s, o) {
                    return o
                }
            }), Ce("border", {
                defaultValue: "0px solid #000",
                parser: function(e, t, i, s, o, r) {
                    var n = te(e, "borderTopWidth", C, !1, "0px"),
                        a = this.format(t).split(" "),
                        l = a[0].replace(D, "");
                    return "px" !== l && (n = parseFloat(n) / ie(e, "borderTopWidth", 1, l) + l), this.parseComplex(e.style, this.format(n + " " + te(e, "borderTopStyle", C, !1, "solid") + " " + te(e, "borderTopColor", C, !1, "#000")), a.join(" "), o, r)
                },
                color: !0,
                formatter: function(e) {
                    var t = e.split(" ");
                    return t[0] + " " + (t[1] || "solid") + " " + (e.match(ve) || ["#000"])[0]
                }
            }), Ce("borderWidth", {
                parser: Te("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), Ce("float,cssFloat,styleFloat", {
                parser: function(e, t, i, s, o, r) {
                    var n = e.style,
                        a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                    return new we(n, a, 0, 0, o, -1, i, !1, 0, n[a], t)
                }
            });
            var Qe = function(e) {
                var t, i = this.t,
                    s = i.filter || te(this.data, "filter") || "",
                    o = this.s + this.c * e | 0;
                100 === o && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), t = !te(this.data, "filter")) : (i.filter = s.replace(n, ""), t = !0)), t || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + o + ")"), -1 === s.indexOf("pacity") ? 0 === o && this.xn1 || (i.filter = s + " alpha(opacity=" + o + ")") : i.filter = s.replace(G, "opacity=" + o))
            };
            Ce("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(e, t, i, s, o, r) {
                    var n = parseFloat(te(e, "opacity", C, !1, "1")),
                        a = e.style,
                        l = "autoAlpha" === i;
                    return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + n), l && 1 === n && "hidden" === te(e, "visibility", C) && 0 !== t && (n = 0), q ? o = new we(a, "opacity", n, t - n, o) : ((o = new we(a, "opacity", 100 * n, 100 * (t - n), o)).xn1 = l ? 1 : 0, a.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = e, o.plugin = r, o.setRatio = Qe), l && ((o = new we(a, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== n ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", s._overwriteProps.push(o.n), s._overwriteProps.push(i)), o
                }
            });
            var Ze = function(e, t) {
                    t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(a, "-$1").toLowerCase())) : e.removeAttribute(t))
                },
                Je = function(e) {
                    if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                        this.t.setAttribute("class", 0 === e ? this.b : this.e);
                        for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : Ze(i, t.p), t = t._next;
                        1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            Ce("className", {
                parser: function(e, t, i, s, o, r, n) {
                    var a, l, c, d, p, u = e.getAttribute("class") || "",
                        h = e.style.cssText;
                    if ((o = s._classNamePT = new we(e, i, 0, 0, o, 2)).setRatio = Je, o.pr = -11, f = !0, o.b = u, l = oe(e, C), c = e._gsClassPT) {
                        for (d = {}, p = c.data; p;) d[p.p] = 1, p = p._next;
                        c.setRatio(1)
                    }
                    return (e._gsClassPT = o).e = "=" !== t.charAt(1) ? t : u.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", o.e), a = re(e, l, oe(e), n, d), e.setAttribute("class", u), o.data = a.firstMPT, e.style.cssText = h, o.xfirst = s.parse(e, a.difs, o, r)
                }
            });
            var et = function(e) {
                if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var t, i, s, o, r, n = this.t.style,
                        a = g.transform.parse;
                    if ("all" === this.e) n.cssText = "", o = !0;
                    else
                        for (s = (t = this.e.split(" ").join("").split(",")).length; - 1 < --s;) i = t[s], g[i] && (g[i].parse === a ? o = !0 : i = "transformOrigin" === i ? Oe : g[i].p), Ze(n, i);
                    o && (Ze(n, He), (r = this.t._gsTransform) && (r.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (Ce("clearProps", {
                    parser: function(e, t, i, s, o) {
                        return (o = new we(e, i, 0, 0, o, 2)).setRatio = et, o.e = t, o.pr = -10, o.data = s._tween, f = !0, o
                    }
                }), e = "bezier,throwProps,physicsProps,physics2D".split(","), xe = e.length; xe--;) Me(e[xe]);
            (e = N.prototype)._firstPT = e._lastParsedTransform = e._transform = null, e._onInitTween = function(e, t, i, s) {
                if (!e.nodeType) return !1;
                this._target = A = e, this._tween = i, this._vars = t, k = s, M = t.autoRound, f = !1, x = t.suffixMap || N.suffixMap, C = ee(e, ""), m = this._overwriteProps;
                var o, r, n, a, l, c, d, p, u, h = e.style;
                if (v && "" === h.zIndex && (("auto" === (o = te(e, "zIndex", C)) || "" === o) && this._addLazySet(h, "zIndex", 0)), "string" == typeof t && (a = h.cssText, o = oe(e, C), h.cssText = a + ";" + t, o = re(e, o, oe(e)).difs, !q && w.test(t) && (o.opacity = parseFloat(RegExp.$1)), t = o, h.cssText = a), t.className ? this._firstPT = r = g.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = r = this.parse(e, t, null), this._transformType) {
                    for (u = 3 === this._transformType, He ? y && (v = !0, "" === h.zIndex && (("auto" === (d = te(e, "zIndex", C)) || "" === d) && this._addLazySet(h, "zIndex", 0)), T && this._addLazySet(h, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (u ? "visible" : "hidden"))) : h.zoom = 1, n = r; n && n._next;) n = n._next;
                    p = new we(e, "transform", 0, 0, null, 2), this._linkCSSP(p, null, n), p.setRatio = He ? Ke : Ue, p.data = this._transform || qe(e, C, !0), p.tween = i, p.pr = -1, m.pop()
                }
                if (f) {
                    for (; r;) {
                        for (c = r._next, n = a; n && n.pr > r.pr;) n = n._next;
                        (r._prev = n ? n._prev : l) ? r._prev._next = r: a = r, (r._next = n) ? n._prev = r : l = r, r = c
                    }
                    this._firstPT = a
                }
                return !0
            }, e.parse = function(e, t, i, s) {
                var o, r, n, a, l, c, d, p, u, h, f = e.style;
                for (o in t) {
                    if ("function" == typeof(c = t[o]) && (c = c(k, A)), r = g[o]) i = r.parse(e, c, o, this, i, s, t);
                    else {
                        if ("--" === o.substr(0, 2)) {
                            this._tween._propLookup[o] = this._addTween.call(this._tween, e.style, "setProperty", ee(e).getPropertyValue(o) + "", c + "", o, !1, o);
                            continue
                        }
                        l = te(e, o, C) + "", u = "string" == typeof c, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || u && S.test(c) ? (u || (c = (3 < (c = me(c)).length ? "rgba(" : "rgb(") + c.join(",") + ")"), i = _e(f, o, l, c, !0, "transparent", i, 0, s)) : u && O.test(c) ? i = _e(f, o, l, c, !0, null, i, 0, s) : (d = (n = parseFloat(l)) || 0 === n ? l.substr((n + "").length) : "", ("" === l || "auto" === l) && ("width" === o || "height" === o ? (n = le(e, o, C), d = "px") : "left" === o || "top" === o ? (n = se(e, o, C), d = "px") : (n = "opacity" !== o ? 0 : 1, d = "")), (h = u && "=" === c.charAt(1)) ? (a = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), a *= parseFloat(c), p = c.replace(D, "")) : (a = parseFloat(c), p = u ? c.replace(D, "") : ""), "" === p && (p = o in x ? x[o] : d), c = a || 0 === a ? (h ? a + n : a) + p : t[o], d !== p && ("" !== p || "lineHeight" === o) && (a || 0 === a) && n && (n = ie(e, o, n, d), "%" === p ? (n /= ie(e, o, 100, "%") / 100, !0 !== t.strictUnits && (l = n + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? n /= ie(e, o, 1, p) : "px" !== p && (a = ie(e, o, a, p), p = "px"), h && (a || 0 === a) && (c = a + n + p)), h && (a += n), !n && 0 !== n || !a && 0 !== a ? void 0 !== f[o] && (c || c + "" != "NaN" && null != c) ? (i = new we(f, o, a || n || 0, 0, i, -1, o, !1, 0, l, c)).xs0 = "none" !== c || "display" !== o && -1 === o.indexOf("Style") ? c : l : K("invalid " + o + " tween value: " + t[o]) : (i = new we(f, o, n, a - n, i, 0, o, !1 !== M && ("px" === p || "zIndex" === o), 0, l, c)).xs0 = p)
                    }
                    s && i && !i.plugin && (i.plugin = s)
                }
                return i
            }, e.setRatio = function(e) {
                var t, i, s, o = this._firstPT;
                if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; o;) {
                            if (t = o.c * e + o.s, o.r ? t = Math.round(t) : t < 1e-6 && -1e-6 < t && (t = 0), o.type)
                                if (1 === o.type)
                                    if (2 === (s = o.l)) o.t[o.p] = o.xs0 + t + o.xs1 + o.xn1 + o.xs2;
                                    else if (3 === s) o.t[o.p] = o.xs0 + t + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3;
                            else if (4 === s) o.t[o.p] = o.xs0 + t + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3 + o.xn3 + o.xs4;
                            else if (5 === s) o.t[o.p] = o.xs0 + t + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3 + o.xn3 + o.xs4 + o.xn4 + o.xs5;
                            else {
                                for (i = o.xs0 + t + o.xs1, s = 1; s < o.l; s++) i += o["xn" + s] + o["xs" + (s + 1)];
                                o.t[o.p] = i
                            } else -1 === o.type ? o.t[o.p] = o.xs0 : o.setRatio && o.setRatio(e);
                            else o.t[o.p] = t + o.xs0;
                            o = o._next
                        } else
                            for (; o;) 2 !== o.type ? o.t[o.p] = o.b : o.setRatio(e), o = o._next;
                    else
                        for (; o;) {
                            if (2 !== o.type)
                                if (o.r && -1 !== o.type)
                                    if (t = Math.round(o.s + o.c), o.type) {
                                        if (1 === o.type) {
                                            for (s = o.l, i = o.xs0 + t + o.xs1, s = 1; s < o.l; s++) i += o["xn" + s] + o["xs" + (s + 1)];
                                            o.t[o.p] = i
                                        }
                                    } else o.t[o.p] = t + o.xs0;
                            else o.t[o.p] = o.e;
                            else o.setRatio(e);
                            o = o._next
                        }
            }, e._enableTransforms = function(e) {
                this._transform = this._transform || qe(this._target, C, !0), this._transformType = this._transform.svg && Ae || !e && 3 !== this._transformType ? 2 : 3
            };
            var tt = function(e) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            e._addLazySet = function(e, t, i) {
                var s = this._firstPT = new we(e, t, 0, 0, this._firstPT, 2);
                s.e = i, s.setRatio = tt, s.data = this
            }, e._linkCSSP = function(e, t, i, s) {
                return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, s = !0), i ? i._next = e : s || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = i), e
            }, e._mod = function(e) {
                for (var t = this._firstPT; t;) "function" == typeof e[t.p] && e[t.p] === Math.round && (t.r = 1), t = t._next
            }, e._kill = function(e) {
                var t, i, s, o = e;
                if (e.autoAlpha || e.alpha) {
                    for (i in o = {}, e) o[i] = e[i];
                    o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                }
                for (e.className && (t = this._classNamePT) && ((s = t.xfirst) && s._prev ? this._linkCSSP(s._prev, t._next, s._prev._prev) : s === this._firstPT && (this._firstPT = t._next), t._next && this._linkCSSP(t._next, t._next._next, s._prev), this._classNamePT = null), t = this._firstPT; t;) t.plugin && t.plugin !== i && t.plugin._kill && (t.plugin._kill(e), i = t.plugin), t = t._next;
                return r.prototype._kill.call(this, o)
            };
            var it = function(e, t, i) {
                var s, o, r, n;
                if (e.slice)
                    for (o = e.length; - 1 < --o;) it(e[o], t, i);
                else
                    for (o = (s = e.childNodes).length; - 1 < --o;) n = (r = s[o]).type, r.style && (t.push(oe(r)), i && i.push(r)), 1 !== n && 9 !== n && 11 !== n || !r.childNodes.length || it(r, t, i)
            };
            return N.cascadeTo = function(e, t, i) {
                var s, o, r, n, a = $.to(e, t, i),
                    l = [a],
                    c = [],
                    d = [],
                    p = [],
                    u = $._internals.reservedProps;
                for (e = a._targets || a.target, it(e, c, p), a.render(t, !0, !0), it(e, d), a.render(0, !0, !0), a._enabled(!0), s = p.length; - 1 < --s;)
                    if ((o = re(p[s], c[s], d[s])).firstMPT) {
                        for (r in o = o.difs, i) u[r] && (o[r] = i[r]);
                        for (r in n = {}, o) n[r] = c[s][r];
                        l.push($.fromTo(p[s], t, n, o))
                    }
                return l
            }, r.activate([N]), N
        }, !0), e = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.6.0",
            priority: -1,
            API: 2,
            init: function(e, t, i) {
                return this._tween = i, !0
            }
        }), l = function(e) {
            for (; e;) e.f || e.blob || (e.m = Math.round), e = e._next
        }, (t = e.prototype)._onInitAllProps = function() {
            for (var e, t, i, s = this._tween, o = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), r = o.length, n = {}, a = s._propLookup.roundProps; - 1 < --r;) n[o[r]] = Math.round;
            for (r = o.length; - 1 < --r;)
                for (e = o[r], t = s._firstPT; t;) i = t._next, t.pg ? t.t._mod(n) : t.n === e && (2 === t.f && t.t ? l(t.t._firstPT) : (this._add(t.t, e, t.s, t.c), i && (i._prev = t._prev), t._prev ? t._prev._next = i : s._firstPT === t && (s._firstPT = i), t._next = t._prev = null, s._propLookup[e] = a)), t = i;
            return !1
        }, t._add = function(e, t, i, s) {
            this._addTween(e, t, i, i + s, t, Math.round), this._overwriteProps.push(t)
        }, _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.1",
            init: function(e, t, i, s) {
                var o, r;
                if ("function" != typeof e.setAttribute) return !1;
                for (o in t) "function" == typeof(r = t[o]) && (r = r(s, e)), this._addTween(e, "setAttribute", e.getAttribute(o) + "", r + "", o, !1, o), this._overwriteProps.push(o);
                return !0
            }
        }), _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function(e, t, i, s) {
                "object" != typeof t && (t = {
                    rotation: t
                }), this.finals = {};
                var o, r, n, a, l, c, d = !0 === t.useRadians ? 2 * Math.PI : 360;
                for (o in t) "useRadians" !== o && ("function" == typeof(a = t[o]) && (a = a(s, e)), r = (c = (a + "").split("_"))[0], n = parseFloat("function" != typeof e[o] ? e[o] : e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]()), l = (a = this.finals[o] = "string" == typeof r && "=" === r.charAt(1) ? n + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0) - n, c.length && (-1 !== (r = c.join("_")).indexOf("short") && ((l %= d) !== l % (d / 2) && (l = l < 0 ? l + d : l - d)), -1 !== r.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * d) % d - (l / d | 0) * d : -1 !== r.indexOf("ccw") && 0 < l && (l = (l - 9999999999 * d) % d - (l / d | 0) * d)), (1e-6 < l || l < -1e-6) && (this._addTween(e, o, n, n + l, o), this._overwriteProps.push(o)));
                return !0
            },
            set: function(e) {
                var t;
                if (1 !== e) this._super.setRatio.call(this, e);
                else
                    for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
            }
        })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(g) {
            var i, s, t, e, o = _gsScope.GreenSockGlobals || _gsScope,
                r = o.com.greensock,
                n = 2 * Math.PI,
                a = Math.PI / 2,
                l = r._class,
                c = function(e, t) {
                    var i = l("easing." + e, function() {}, !0),
                        s = i.prototype = new g;
                    return s.constructor = i, s.getRatio = t, i
                },
                d = g.register || function() {},
                p = function(e, t, i, s, o) {
                    var r = l("easing." + e, {
                        easeOut: new t,
                        easeIn: new i,
                        easeInOut: new s
                    }, !0);
                    return d(r, e), r
                },
                v = function(e, t, i) {
                    this.t = e, this.v = t, i && (((this.next = i).prev = this).c = i.v - t, this.gap = i.t - e)
                },
                u = function(e, t) {
                    var i = l("easing." + e, function(e) {
                            this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        s = i.prototype = new g;
                    return s.constructor = i, s.getRatio = t, s.config = function(e) {
                        return new i(e)
                    }, i
                },
                h = p("Back", u("BackOut", function(e) {
                    return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                }), u("BackIn", function(e) {
                    return e * e * ((this._p1 + 1) * e - this._p1)
                }), u("BackInOut", function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                })),
                f = l("easing.SlowMo", function(e, t, i) {
                    t = t || 0 === t ? t : .7, null == e ? e = .7 : 1 < e && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                }, !0),
                m = f.prototype = new g;
            return m.constructor = f, m.getRatio = function(e) {
                var t = e + (.5 - e) * this._p;
                return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 === e ? 0 : 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
            }, f.ease = new f(.7, .7), m.config = f.config = function(e, t, i) {
                return new f(e, t, i)
            }, (m = (i = l("easing.SteppedEase", function(e, t) {
                e = e || 1, this._p1 = 1 / e, this._p2 = e + (t ? 0 : 1), this._p3 = t ? 1 : 0
            }, !0)).prototype = new g).constructor = i, m.getRatio = function(e) {
                return e < 0 ? e = 0 : 1 <= e && (e = .999999999), ((this._p2 * e | 0) + this._p3) * this._p1
            }, m.config = i.config = function(e, t) {
                return new i(e, t)
            }, (m = (s = l("easing.ExpoScaleEase", function(e, t, i) {
                this._p1 = Math.log(t / e), this._p2 = t - e, this._p3 = e, this._ease = i
            }, !0)).prototype = new g).constructor = s, m.getRatio = function(e) {
                return this._ease && (e = this._ease.getRatio(e)), (this._p3 * Math.exp(this._p1 * e) - this._p3) / this._p2
            }, m.config = s.config = function(e, t, i) {
                return new s(e, t, i)
            }, (m = (t = l("easing.RoughEase", function(e) {
                for (var t, i, s, o, r, n, a = (e = e || {}).taper || "none", l = [], c = 0, d = 0 | (e.points || 20), p = d, u = !1 !== e.randomize, h = !0 === e.clamp, f = e.template instanceof g ? e.template : null, m = "number" == typeof e.strength ? .4 * e.strength : .4; - 1 < --p;) t = u ? Math.random() : 1 / d * p, i = f ? f.getRatio(t) : t, "none" === a ? s = m : "out" === a ? s = (o = 1 - t) * o * m : "in" === a ? s = t * t * m : s = (o = t < .5 ? 2 * t : 2 * (1 - t)) * o * .5 * m, u ? i += Math.random() * s - .5 * s : p % 2 ? i += .5 * s : i -= .5 * s, h && (1 < i ? i = 1 : i < 0 && (i = 0)), l[c++] = {
                    x: t,
                    y: i
                };
                for (l.sort(function(e, t) {
                        return e.x - t.x
                    }), n = new v(1, 1, null), p = d; - 1 < --p;) r = l[p], n = new v(r.x, r.y, n);
                this._prev = new v(0, 0, 0 !== n.t ? n : n.next)
            }, !0)).prototype = new g).constructor = t, m.getRatio = function(e) {
                var t = this._prev;
                if (e > t.t) {
                    for (; t.next && e >= t.t;) t = t.next;
                    t = t.prev
                } else
                    for (; t.prev && e <= t.t;) t = t.prev;
                return (this._prev = t).v + (e - t.t) / t.gap * t.c
            }, m.config = function(e) {
                return new t(e)
            }, t.ease = new t, p("Bounce", c("BounceOut", function(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }), c("BounceIn", function(e) {
                return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }), c("BounceInOut", function(e) {
                var t = e < .5;
                return e = (e = t ? 1 - 2 * e : 2 * e - 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
            })), p("Circ", c("CircOut", function(e) {
                return Math.sqrt(1 - (e -= 1) * e)
            }), c("CircIn", function(e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }), c("CircInOut", function(e) {
                return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            })), p("Elastic", (e = function(e, t, i) {
                var s = l("easing." + e, function(e, t) {
                        this._p1 = 1 <= e ? e : 1, this._p2 = (t || i) / (e < 1 ? e : 1), this._p3 = this._p2 / n * (Math.asin(1 / this._p1) || 0), this._p2 = n / this._p2
                    }, !0),
                    o = s.prototype = new g;
                return o.constructor = s, o.getRatio = t, o.config = function(e, t) {
                    return new s(e, t)
                }, s
            })("ElasticOut", function(e) {
                return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
            }, .3), e("ElasticIn", function(e) {
                return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)
            }, .3), e("ElasticInOut", function(e) {
                return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
            }, .45)), p("Expo", c("ExpoOut", function(e) {
                return 1 - Math.pow(2, -10 * e)
            }), c("ExpoIn", function(e) {
                return Math.pow(2, 10 * (e - 1)) - .001
            }), c("ExpoInOut", function(e) {
                return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            })), p("Sine", c("SineOut", function(e) {
                return Math.sin(e * a)
            }), c("SineIn", function(e) {
                return 1 - Math.cos(e * a)
            }), c("SineInOut", function(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            })), l("easing.EaseLookup", {
                find: function(e) {
                    return g.map[e]
                }
            }, !0), d(o.SlowMo, "SlowMo", "ease,"), d(t, "RoughEase", "ease,"), d(i, "SteppedEase", "ease,"), h
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(u, h) {
        "use strict";
        var t, i, f = {},
            s = u.document,
            m = u.GreenSockGlobals = u.GreenSockGlobals || u;
        if (!m.TweenLite) {
            var e, o, r, g, v, y = function(e) {
                    var t, i = e.split("."),
                        s = m;
                    for (t = 0; t < i.length; t++) s[i[t]] = s = s[i[t]] || {};
                    return s
                },
                p = y("com.greensock"),
                T = 1e-10,
                l = function(e) {
                    var t, i = [],
                        s = e.length;
                    for (t = 0; t !== s; i.push(e[t++]));
                    return i
                },
                b = function() {},
                w = (t = Object.prototype.toString, i = t.call([]), function(e) {
                    return null != e && (e instanceof Array || "object" == typeof e && !!e.push && t.call(e) === i)
                }),
                S = {},
                _ = function(a, l, c, d) {
                    this.sc = S[a] ? S[a].sc : [], (S[a] = this).gsClass = null, this.func = c;
                    var p = [];
                    this.check = function(e) {
                        for (var t, i, s, o, r = l.length, n = r; - 1 < --r;)(t = S[l[r]] || new _(l[r], [])).gsClass ? (p[r] = t.gsClass, n--) : e && t.sc.push(this);
                        if (0 === n && c) {
                            if (s = (i = ("com.greensock." + a).split(".")).pop(), o = y(i.join("."))[s] = this.gsClass = c.apply(c, p), d)
                                if (m[s] = f[s] = o, "undefined" != typeof module && module.exports)
                                    if (a === h)
                                        for (r in module.exports = f[h] = o, f) o[r] = f[r];
                                    else f[h] && (f[h][s] = o);
                            else "function" == typeof define && define.amd && define((u.GreenSockAMDPath ? u.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function() {
                                return o
                            });
                            for (r = 0; r < this.sc.length; r++) this.sc[r].check()
                        }
                    }, this.check(!0)
                },
                n = u._gsDefine = function(e, t, i, s) {
                    return new _(e, t, i, s)
                },
                x = p._class = function(e, t, i) {
                    return t = t || function() {}, n(e, [], function() {
                        return t
                    }, i), t
                };
            n.globals = m;
            var a = [0, 0, 1, 1],
                P = x("easing.Ease", function(e, t, i, s) {
                    this._func = e, this._type = i || 0, this._power = s || 0, this._params = t ? a.concat(t) : a
                }, !0),
                C = P.map = {},
                c = P.register = function(e, t, i, s) {
                    for (var o, r, n, a, l = t.split(","), c = l.length, d = (i || "easeIn,easeOut,easeInOut").split(","); - 1 < --c;)
                        for (r = l[c], o = s ? x("easing." + r, null, !0) : p.easing[r] || {}, n = d.length; - 1 < --n;) a = d[n], C[r + "." + a] = C[a + r] = o[a] = e.getRatio ? e : e[a] || new e
                };
            for ((r = P.prototype)._calcEnd = !1, r.getRatio = function(e) {
                    if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                    var t = this._type,
                        i = this._power,
                        s = 1 === t ? 1 - e : 2 === t ? e : e < .5 ? 2 * e : 2 * (1 - e);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === t ? 1 - s : 2 === t ? s : e < .5 ? s / 2 : 1 - s / 2
                }, o = (e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --o;) r = e[o] + ",Power" + o, c(new P(null, null, 1, o), r, "easeOut", !0), c(new P(null, null, 2, o), r, "easeIn" + (0 === o ? ",easeNone" : "")), c(new P(null, null, 3, o), r, "easeInOut");
            C.linear = p.easing.Linear.easeIn, C.swing = p.easing.Quad.easeInOut;
            var M = x("events.EventDispatcher", function(e) {
                this._listeners = {}, this._eventTarget = e || this
            });
            (r = M.prototype).addEventListener = function(e, t, i, s, o) {
                o = o || 0;
                var r, n, a = this._listeners[e],
                    l = 0;
                for (this !== g || v || g.wake(), null == a && (this._listeners[e] = a = []), n = a.length; - 1 < --n;)(r = a[n]).c === t && r.s === i ? a.splice(n, 1) : 0 === l && r.pr < o && (l = n + 1);
                a.splice(l, 0, {
                    c: t,
                    s: i,
                    up: s,
                    pr: o
                })
            }, r.removeEventListener = function(e, t) {
                var i, s = this._listeners[e];
                if (s)
                    for (i = s.length; - 1 < --i;)
                        if (s[i].c === t) return void s.splice(i, 1)
            }, r.dispatchEvent = function(e) {
                var t, i, s, o = this._listeners[e];
                if (o)
                    for (1 < (t = o.length) && (o = o.slice(0)), i = this._eventTarget; - 1 < --t;)(s = o[t]) && (s.up ? s.c.call(s.s || i, {
                        type: e,
                        target: i
                    }) : s.c.call(s.s || i))
            };
            var A = u.requestAnimationFrame,
                k = u.cancelAnimationFrame,
                E = Date.now || function() {
                    return (new Date).getTime()
                },
                I = E();
            for (o = (e = ["ms", "moz", "webkit", "o"]).length; - 1 < --o && !A;) A = u[e[o] + "RequestAnimationFrame"], k = u[e[o] + "CancelAnimationFrame"] || u[e[o] + "CancelRequestAnimationFrame"];
            x("Ticker", function(e, t) {
                var o, r, n, a, l, c = this,
                    d = E(),
                    i = !(!1 === t || !A) && "auto",
                    p = 500,
                    u = 33,
                    h = function(e) {
                        var t, i, s = E() - I;
                        p < s && (d += s - u), I += s, c.time = (I - d) / 1e3, t = c.time - l, (!o || 0 < t || !0 === e) && (c.frame++, l += t + (a <= t ? .004 : a - t), i = !0), !0 !== e && (n = r(h)), i && c.dispatchEvent("tick")
                    };
                M.call(c), c.time = c.frame = 0, c.tick = function() {
                    h(!0)
                }, c.lagSmoothing = function(e, t) {
                    return arguments.length ? (p = e || 1e10, void(u = Math.min(t, p, 0))) : p < 1e10
                }, c.sleep = function() {
                    null != n && (i && k ? k(n) : clearTimeout(n), r = b, n = null, c === g && (v = !1))
                }, c.wake = function(e) {
                    null !== n ? c.sleep() : e ? d += -I + (I = E()) : 10 < c.frame && (I = E() - p + 5), r = 0 === o ? b : i && A ? A : function(e) {
                        return setTimeout(e, 1e3 * (l - c.time) + 1 | 0)
                    }, c === g && (v = !0), h(2)
                }, c.fps = function(e) {
                    return arguments.length ? (a = 1 / ((o = e) || 60), l = this.time + a, void c.wake()) : o
                }, c.useRAF = function(e) {
                    return arguments.length ? (c.sleep(), i = e, void c.fps(o)) : i
                }, c.fps(e), setTimeout(function() {
                    "auto" === i && c.frame < 5 && "hidden" !== (s || {}).visibilityState && c.useRAF(!1)
                }, 1500)
            }), (r = p.Ticker.prototype = new p.events.EventDispatcher).constructor = p.Ticker;
            var d = x("core.Animation", function(e, t) {
                if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = !0 === t.immediateRender, this.data = t.data, this._reversed = !0 === t.reversed, K) {
                    v || g.wake();
                    var i = this.vars.useFrames ? U : K;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            g = d.ticker = new p.Ticker, (r = d.prototype)._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
            var D = function() {
                v && 2e3 < E() - I && ("hidden" !== (s || {}).visibilityState || !g.lagSmoothing()) && g.wake();
                var e = setTimeout(D, 2e3);
                e.unref && e.unref()
            };
            D(), r.play = function(e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, r.pause = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, r.resume = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!1)
            }, r.seek = function(e, t) {
                return this.totalTime(Number(e), !1 !== t)
            }, r.restart = function(e, t) {
                return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
            }, r.reverse = function(e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, r.render = function(e, t, i) {}, r.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, r.isActive = function() {
                var e, t = this._timeline,
                    i = this._startTime;
                return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime(!0)) >= i && e < i + this.totalDuration() / this._timeScale - 1e-7
            }, r._enabled = function(e, t) {
                return v || g.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
            }, r._kill = function(e, t) {
                return this._enabled(!1, !1)
            }, r.kill = function(e, t) {
                return this._kill(e, t), this
            }, r._uncache = function(e) {
                for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                return this
            }, r._swapSelfInParams = function(e) {
                for (var t = e.length, i = e.concat(); - 1 < --t;) "{self}" === e[t] && (i[t] = this);
                return i
            }, r._callback = function(e) {
                var t = this.vars,
                    i = t[e],
                    s = t[e + "Params"],
                    o = t[e + "Scope"] || t.callbackScope || this;
                switch (s ? s.length : 0) {
                    case 0:
                        i.call(o);
                        break;
                    case 1:
                        i.call(o, s[0]);
                        break;
                    case 2:
                        i.call(o, s[0], s[1]);
                        break;
                    default:
                        i.apply(o, s)
                }
            }, r.eventCallback = function(e, t, i, s) {
                if ("on" === (e || "").substr(0, 2)) {
                    var o = this.vars;
                    if (1 === arguments.length) return o[e];
                    null == t ? delete o[e] : (o[e] = t, o[e + "Params"] = w(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, o[e + "Scope"] = s), "onUpdate" === e && (this._onUpdate = t)
                }
                return this
            }, r.delay = function(e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
            }, r.duration = function(e) {
                return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, r.totalDuration = function(e) {
                return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
            }, r.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
            }, r.totalTime = function(e, t, i) {
                if (v || g.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (e < 0 && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            o = this._timeline;
                        if (s < e && !i && (e = s), this._startTime = (this._paused ? this._pauseTime : o._time) - (this._reversed ? s - e : e) / this._timeScale, o._dirty || this._uncache(!1), o._timeline)
                            for (; o._timeline;) o._timeline._time !== (o._startTime + o._totalTime) / o._timeScale && o.totalTime(o._totalTime, !0), o = o._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (O.length && Z(), this.render(e, t, !1), O.length && Z())
                }
                return this
            }, r.progress = r.totalProgress = function(e, t) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
            }, r.startTime = function(e) {
                return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
            }, r.endTime = function(e) {
                return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
            }, r.timeScale = function(e) {
                if (!arguments.length) return this._timeScale;
                var t, i;
                for (e = e || T, this._timeline && this._timeline.smoothChildTiming && (i = (t = this._pauseTime) || 0 === t ? t : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / e), this._timeScale = e, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
                return this
            }, r.reversed = function(e) {
                return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, r.paused = function(e) {
                if (!arguments.length) return this._paused;
                var t, i, s = this._timeline;
                return e != this._paused && s && (v || e || g.wake(), i = (t = s.rawTime()) - this._pauseTime, !e && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== i && this._initted && this.duration() && (t = s.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
            };
            var G = x("core.SimpleTimeline", function(e) {
                d.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (r = G.prototype = new d).constructor = G, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function(e, t, i, s) {
                var o, r;
                if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), o = this._last, this._sortChildren)
                    for (r = e._startTime; o && o._startTime > r;) o = o._prev;
                return o ? (e._next = o._next, o._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = o, this._recent = e, this._timeline && this._uncache(!0), this
            }, r._remove = function(e, t) {
                return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, r.render = function(e, t, i) {
                var s, o = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = e; o;) s = o._next, (o._active || e >= o._startTime && !o._paused && !o._gc) && (o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (e - o._startTime) * o._timeScale, t, i) : o.render((e - o._startTime) * o._timeScale, t, i)), o = s
            }, r.rawTime = function() {
                return v || g.wake(), this._totalTime
            };
            var H = x("TweenLite", function(e, t, i) {
                    if (d.call(this, t, i), this.render = H.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : H.selector(e) || e;
                    var s, o, r, n = e.jquery || e.length && e !== u && e[0] && (e[0] === u || e[0].nodeType && e[0].style && !e.nodeType),
                        a = this.vars.overwrite;
                    if (this._overwrite = a = null == a ? q[H.defaultOverwrite] : "number" == typeof a ? a >> 0 : q[a], (n || e instanceof Array || e.push && w(e)) && "number" != typeof e[0])
                        for (this._targets = r = l(e), this._propLookup = [], this._siblings = [], s = 0; s < r.length; s++)(o = r[s]) ? "string" != typeof o ? o.length && o !== u && o[0] && (o[0] === u || o[0].nodeType && o[0].style && !o.nodeType) ? (r.splice(s--, 1), this._targets = r = r.concat(l(o))) : (this._siblings[s] = J(o, this, !1), 1 === a && 1 < this._siblings[s].length && te(o, this, null, 1, this._siblings[s])) : "string" == typeof(o = r[s--] = H.selector(o)) && r.splice(s + 1, 1) : r.splice(s--, 1);
                    else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === a && 1 < this._siblings.length && te(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === t && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -T, this.render(Math.min(0, -this._delay)))
                }, !0),
                z = function(e) {
                    return e && e.length && e !== u && e[0] && (e[0] === u || e[0].nodeType && e[0].style && !e.nodeType)
                };
            (r = H.prototype = new d).constructor = H, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, H.version = "1.20.4", H.defaultEase = r._ease = new P(null, null, 1, 1), H.defaultOverwrite = "auto", H.ticker = g, H.autoSleep = 120, H.lagSmoothing = function(e, t) {
                g.lagSmoothing(e, t)
            }, H.selector = u.$ || u.jQuery || function(e) {
                var t = u.$ || u.jQuery;
                return t ? (H.selector = t)(e) : void 0 === s ? e : s.querySelectorAll ? s.querySelectorAll(e) : s.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var O = [],
                B = {},
                L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                R = /[\+-]=-?[\.\d]/,
                $ = function(e) {
                    for (var t, i = this._firstPT; i;) t = i.blob ? 1 === e && null != this.end ? this.end : e ? this.join("") : this.start : i.c * e + i.s, i.m ? t = i.m(t, this._target || i.t) : t < 1e-6 && -1e-6 < t && !i.blob && (t = 0), i.f ? i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t) : i.t[i.p] = t, i = i._next
                },
                N = function(e, t, i, s) {
                    var o, r, n, a, l, c, d, p = [],
                        u = 0,
                        h = "",
                        f = 0;
                    for (p.start = e, p.end = t, e = p[0] = e + "", t = p[1] = t + "", i && (i(p), e = p[0], t = p[1]), p.length = 0, o = e.match(L) || [], r = t.match(L) || [], s && (s._next = null, s.blob = 1, p._firstPT = p._applyPT = s), l = r.length, a = 0; a < l; a++) d = r[a], h += (c = t.substr(u, t.indexOf(d, u) - u)) || !a ? c : ",", u += c.length, f ? f = (f + 1) % 5 : "rgba(" === c.substr(-5) && (f = 1), d === o[a] || o.length <= a ? h += d : (h && (p.push(h), h = ""), n = parseFloat(o[a]), p.push(n), p._firstPT = {
                        _next: p._firstPT,
                        t: p,
                        p: p.length - 1,
                        s: n,
                        c: ("=" === d.charAt(1) ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - n) || 0,
                        f: 0,
                        m: f && f < 4 ? Math.round : 0
                    }), u += d.length;
                    return (h += t.substr(u)) && p.push(h), p.setRatio = $, R.test(t) && (p.end = null), p
                },
                X = function(e, t, i, s, o, r, n, a, l) {
                    "function" == typeof s && (s = s(l || 0, e));
                    var c = typeof e[t],
                        d = "function" !== c ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3),
                        p = "get" !== i ? i : d ? n ? e[d](n) : e[d]() : e[t],
                        u = "string" == typeof s && "=" === s.charAt(1),
                        h = {
                            t: e,
                            p: t,
                            s: p,
                            f: "function" === c,
                            pg: 0,
                            n: o || t,
                            m: r ? "function" == typeof r ? r : Math.round : 0,
                            pr: 0,
                            c: u ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - p || 0
                        };
                    return ("number" != typeof p || "number" != typeof s && !u) && (n || isNaN(p) || !u && isNaN(s) || "boolean" == typeof p || "boolean" == typeof s ? (h.fp = n, h = {
                        t: N(p, u ? parseFloat(h.s) + h.c + (h.s + "").replace(/[0-9\-\.]/g, "") : s, a || H.defaultStringFilter, h),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: o || t,
                        pr: 0,
                        m: 0
                    }) : (h.s = parseFloat(p), u || (h.c = parseFloat(s) - h.s || 0))), h.c ? ((h._next = this._firstPT) && (h._next._prev = h), this._firstPT = h) : void 0
                },
                W = H._internals = {
                    isArray: w,
                    isSelector: z,
                    lazyTweens: O,
                    blobDif: N
                },
                F = H._plugins = {},
                V = W.tweenLookup = {},
                Y = 0,
                j = W.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1
                },
                q = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                U = d._rootFramesTimeline = new G,
                K = d._rootTimeline = new G,
                Q = 30,
                Z = W.lazyRender = function() {
                    var e, t = O.length;
                    for (B = {}; - 1 < --t;)(e = O[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                    O.length = 0
                };
            K._startTime = g.time, U._startTime = g.frame, K._active = U._active = !0, setTimeout(Z, 1), d._updateRoot = H.render = function() {
                var e, t, i;
                if (O.length && Z(), K.render((g.time - K._startTime) * K._timeScale, !1, !1), U.render((g.frame - U._startTime) * U._timeScale, !1, !1), O.length && Z(), g.frame >= Q) {
                    for (i in Q = g.frame + (parseInt(H.autoSleep, 10) || 120), V) {
                        for (e = (t = V[i].tweens).length; - 1 < --e;) t[e]._gc && t.splice(e, 1);
                        0 === t.length && delete V[i]
                    }
                    if ((!(i = K._first) || i._paused) && H.autoSleep && !U._first && 1 === g._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || g.sleep()
                    }
                }
            }, g.addEventListener("tick", d._updateRoot);
            var J = function(e, t, i) {
                    var s, o, r = e._gsTweenID;
                    if (V[r || (e._gsTweenID = r = "t" + Y++)] || (V[r] = {
                            target: e,
                            tweens: []
                        }), t && ((s = V[r].tweens)[o = s.length] = t, i))
                        for (; - 1 < --o;) s[o] === t && s.splice(o, 1);
                    return V[r].tweens
                },
                ee = function(e, t, i, s) {
                    var o, r, n = e.vars.onOverwrite;
                    return n && (o = n(e, t, i, s)), (n = H.onOverwrite) && (r = n(e, t, i, s)), !1 !== o && !1 !== r
                },
                te = function(e, t, i, s, o) {
                    var r, n, a, l;
                    if (1 === s || 4 <= s) {
                        for (l = o.length, r = 0; r < l; r++)
                            if ((a = o[r]) !== t) a._gc || a._kill(null, e, t) && (n = !0);
                            else if (5 === s) break;
                        return n
                    }
                    var c, d = t._startTime + T,
                        p = [],
                        u = 0,
                        h = 0 === t._duration;
                    for (r = o.length; - 1 < --r;)(a = o[r]) === t || a._gc || a._paused || (a._timeline !== t._timeline ? (c = c || ie(t, 0, h), 0 === ie(a, c, h) && (p[u++] = a)) : a._startTime <= d && a._startTime + a.totalDuration() / a._timeScale > d && ((h || !a._initted) && d - a._startTime <= 2e-10 || (p[u++] = a)));
                    for (r = u; - 1 < --r;)
                        if (a = p[r], 2 === s && a._kill(i, e, t) && (n = !0), 2 !== s || !a._firstPT && a._initted) {
                            if (2 !== s && !ee(a, t)) continue;
                            a._enabled(!1, !1) && (n = !0)
                        }
                    return n
                },
                ie = function(e, t, i) {
                    for (var s = e._timeline, o = s._timeScale, r = e._startTime; s._timeline;) {
                        if (r += s._startTime, o *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return t < (r /= o) ? r - t : i && r === t || !e._initted && r - t < 2 * T ? T : (r += e.totalDuration() / e._timeScale / o) > t + T ? 0 : r - t - T
                };
            r._init = function() {
                var e, t, i, s, o, r, n = this.vars,
                    a = this._overwrittenProps,
                    l = this._duration,
                    c = !!n.immediateRender,
                    d = n.ease;
                if (n.startAt) {
                    for (s in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), o = {}, n.startAt) o[s] = n.startAt[s];
                    if (o.data = "isStart", o.overwrite = !1, o.immediateRender = !0, o.lazy = c && !1 !== n.lazy, o.startAt = o.delay = null, o.onUpdate = n.onUpdate, o.onUpdateParams = n.onUpdateParams, o.onUpdateScope = n.onUpdateScope || n.callbackScope || this, this._startAt = H.to(this.target, 0, o), c)
                        if (0 < this._time) this._startAt = null;
                        else if (0 !== l) return
                } else if (n.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        for (s in 0 !== this._time && (c = !1), i = {}, n) j[s] && "autoCSS" !== s || (i[s] = n[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = c && !1 !== n.lazy, i.immediateRender = c, this._startAt = H.to(this.target, 0, i), c) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = d = d ? d instanceof P ? d : "function" == typeof d ? new P(d, n.easeParams) : C[d] || H.defaultEase : H.defaultEase, n.easeParams instanceof Array && d.config && (this._ease = d.config.apply(d, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (r = this._targets.length, e = 0; e < r; e++) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], a ? a[e] : null, e) && (t = !0);
                else t = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                if (t && H._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = n.onUpdate, this._initted = !0
            }, r._initProps = function(e, t, i, s, o) {
                var r, n, a, l, c, d;
                if (null == e) return !1;
                for (r in B[e._gsTweenID] && Z(), this.vars.css || e.style && e !== u && e.nodeType && F.css && !1 !== this.vars.autoCSS && function(e, t) {
                        var i, s = {};
                        for (i in e) j[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!F[i] || F[i] && F[i]._autoCSS) || (s[i] = e[i], delete e[i]);
                        e.css = s
                    }(this.vars, e), this.vars)
                    if (d = this.vars[r], j[r]) d && (d instanceof Array || d.push && w(d)) && -1 !== d.join("").indexOf("{self}") && (this.vars[r] = d = this._swapSelfInParams(d, this));
                    else if (F[r] && (l = new F[r])._onInitTween(e, this.vars[r], this, o)) {
                    for (this._firstPT = c = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: r,
                            pg: 1,
                            pr: l._priority,
                            m: 0
                        }, n = l._overwriteProps.length; - 1 < --n;) t[l._overwriteProps[n]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                } else t[r] = X.call(this, e, r, "get", d, r, 0, null, this.vars.stringFilter, o);
                return s && this._kill(s, e) ? this._initProps(e, t, i, s, o) : 1 < this._overwrite && this._firstPT && 1 < i.length && te(e, this, t, this._overwrite, i) ? (this._kill(t, e), this._initProps(e, t, i, s, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (B[e._gsTweenID] = !0), a)
            }, r.render = function(e, t, i) {
                var s, o, r, n, a = this._time,
                    l = this._duration,
                    c = this._rawPrevTime;
                if (l - 1e-7 <= e && 0 <= e) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, o = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (c < 0 || e <= 0 && -1e-7 <= e || c === T && "isPause" !== this.data) && c !== e && (i = !0, T < c && (o = "onReverseComplete")), this._rawPrevTime = n = !t || e || c === e ? e : T);
                else if (e < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && 0 < c) && (o = "onReverseComplete", s = this._reversed), e < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (0 <= c && (c !== T || "isPause" !== this.data) && (i = !0), this._rawPrevTime = n = !t || e || c === e ? e : T)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                else if (this._totalTime = this._time = e, this._easeType) {
                    var d = e / l,
                        p = this._easeType,
                        u = this._easePower;
                    (1 === p || 3 === p && .5 <= d) && (d = 1 - d), 3 === p && (d *= 2), 1 === u ? d *= d : 2 === u ? d *= d * d : 3 === u ? d *= d * d * d : 4 === u && (d *= d * d * d * d), this.ratio = 1 === p ? 1 - d : 2 === p ? d : e / l < .5 ? d / 2 : 1 - d / 2
                } else this.ratio = this._ease.getRatio(e / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = c, O.push(this), void(this._lazy = [e, t]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && 0 <= e && (this._active = !0), 0 === a && (this._startAt && (0 <= e ? this._startAt.render(e, !0, i) : o || (o = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (e < 0 && this._startAt && -1e-4 !== e && this._startAt.render(e, !0, i), t || (this._time !== a || s || i) && this._callback("onUpdate")), o && (!this._gc || i) && (e < 0 && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, !0, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[o] && this._callback(o), 0 === l && this._rawPrevTime === T && n !== T && (this._rawPrevTime = 0))
                }
            }, r._kill = function(e, t, i) {
                if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                t = "string" != typeof t ? t || this._targets || this.target : H.selector(t) || t;
                var s, o, r, n, a, l, c, d, p, u = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((w(t) || z(t)) && "number" != typeof t[0])
                    for (s = t.length; - 1 < --s;) this._kill(e, t[s], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; - 1 < --s;)
                            if (t === this._targets[s]) {
                                a = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], o = this._overwrittenProps[s] = e ? this._overwrittenProps[s] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        a = this._propLookup, o = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (c = e || a, d = e !== o && "all" !== o && e !== a && ("object" != typeof e || !e._tempKill), i && (H.onOverwrite || this.vars.onOverwrite)) {
                            for (r in c) a[r] && (p || (p = []), p.push(r));
                            if ((p || !e) && !ee(this, i, t, p)) return !1
                        }
                        for (r in c)(n = a[r]) && (u && (n.f ? n.t[n.p](n.s) : n.t[n.p] = n.s, l = !0), n.pg && n.t._kill(c) && (l = !0), n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), n._next = n._prev = null), delete a[r]), d && (o[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, r.invalidate = function() {
                return this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], d.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -T, this.render(Math.min(0, -this._delay))), this
            }, r._enabled = function(e, t) {
                if (v || g.wake(), e && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; - 1 < --i;) this._siblings[i] = J(s[i], this, !0);
                    else this._siblings = J(this.target, this, !0)
                }
                return d.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && H._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
            }, H.to = function(e, t, i) {
                return new H(e, t, i)
            }, H.from = function(e, t, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new H(e, t, i)
            }, H.fromTo = function(e, t, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new H(e, t, s)
            }, H.delayedCall = function(e, t, i, s, o) {
                return new H(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: i,
                    callbackScope: s,
                    onReverseComplete: t,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: o,
                    overwrite: 0
                })
            }, H.set = function(e, t) {
                return new H(e, 0, t)
            }, H.getTweensOf = function(e, t) {
                if (null == e) return [];
                var i, s, o, r;
                if (e = "string" != typeof e ? e : H.selector(e) || e, (w(e) || z(e)) && "number" != typeof e[0]) {
                    for (i = e.length, s = []; - 1 < --i;) s = s.concat(H.getTweensOf(e[i], t));
                    for (i = s.length; - 1 < --i;)
                        for (r = s[i], o = i; - 1 < --o;) r === s[o] && s.splice(i, 1)
                } else if (e._gsTweenID)
                    for (i = (s = J(e).concat()).length; - 1 < --i;)(s[i]._gc || t && !s[i].isActive()) && s.splice(i, 1);
                return s || []
            }, H.killTweensOf = H.killDelayedCallsTo = function(e, t, i) {
                "object" == typeof t && (i = t, t = !1);
                for (var s = H.getTweensOf(e, t), o = s.length; - 1 < --o;) s[o]._kill(i, e)
            };
            var se = x("plugins.TweenPlugin", function(e, t) {
                this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = se.prototype
            }, !0);
            if (r = se.prototype, se.version = "1.19.0", se.API = 2, r._firstPT = null, r._addTween = X, r.setRatio = $, r._kill = function(e) {
                    var t, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != e[this._propName]) this._overwriteProps = [];
                    else
                        for (t = i.length; - 1 < --t;) null != e[i[t]] && i.splice(t, 1);
                    for (; s;) null != e[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, r._mod = r._roundProps = function(e) {
                    for (var t, i = this._firstPT; i;)(t = e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && "function" == typeof t && (2 === i.f ? i.t._applyPT.m = t : i.m = t), i = i._next
                }, H._onPluginEvent = function(e, t) {
                    var i, s, o, r, n, a = t._firstPT;
                    if ("_onInitAllProps" === e) {
                        for (; a;) {
                            for (n = a._next, s = o; s && s.pr > a.pr;) s = s._next;
                            (a._prev = s ? s._prev : r) ? a._prev._next = a: o = a, (a._next = s) ? s._prev = a : r = a, a = n
                        }
                        a = t._firstPT = o
                    }
                    for (; a;) a.pg && "function" == typeof a.t[e] && a.t[e]() && (i = !0), a = a._next;
                    return i
                }, se.activate = function(e) {
                    for (var t = e.length; - 1 < --t;) e[t].API === se.API && (F[(new e[t])._propName] = e[t]);
                    return !0
                }, n.plugin = function(e) {
                    if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                    var t, i = e.propName,
                        s = e.priority || 0,
                        o = e.overwriteProps,
                        r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        n = x("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            se.call(this, i, s), this._overwriteProps = o || []
                        }, !0 === e.global),
                        a = n.prototype = new se(i);
                    for (t in (a.constructor = n).API = e.API, r) "function" == typeof e[t] && (a[r[t]] = e[t]);
                    return n.version = e.version, se.activate([n]), n
                }, e = u._gsQueue) {
                for (o = 0; o < e.length; o++) e[o]();
                for (r in S) S[r].func || u.console.log("GSAP encountered missing dependency: " + r)
            }
            v = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";

        function p(e, t, i, s, o, r) {
            return i = (parseFloat(i || 0) - parseFloat(e || 0)) * o, s = (parseFloat(s || 0) - parseFloat(t || 0)) * r, Math.sqrt(i * i + s * s)
        }

        function u(e) {
            return "string" != typeof e && e.nodeType || (e = _gsScope.TweenLite.selector(e)).length && (e = e[0]), e
        }

        function m(e) {
            if (!e) return 0;
            var t, i, s, o, r, n, a, l = (e = u(e)).tagName.toLowerCase(),
                c = 1,
                d = 1;
            "non-scaling-stroke" === e.getAttribute("vector-effect") && (c = (d = e.getScreenCTM()).a, d = d.d);
            try {
                i = e.getBBox()
            } catch (e) {}
            if (i && (i.width || i.height) || "rect" !== l && "circle" !== l && "ellipse" !== l || (i = {
                    width: parseFloat(e.getAttribute("rect" === l ? "width" : "circle" === l ? "r" : "rx")),
                    height: parseFloat(e.getAttribute("rect" === l ? "height" : "circle" === l ? "r" : "ry"))
                }, "rect" !== l && (i.width *= 2, i.height *= 2)), "path" === l) o = e.style.strokeDasharray, e.style.strokeDasharray = "none", t = e.getTotalLength() || 0, c !== d && console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), t *= (c + d) / 2, e.style.strokeDasharray = o;
            else if ("rect" === l) t = 2 * i.width * c + 2 * i.height * d;
            else if ("line" === l) t = p(e.getAttribute("x1"), e.getAttribute("y1"), e.getAttribute("x2"), e.getAttribute("y2"), c, d);
            else if ("polyline" === l || "polygon" === l)
                for (s = e.getAttribute("points").match(h) || [], "polygon" === l && s.push(s[0], s[1]), t = 0, r = 2; r < s.length; r += 2) t += p(s[r - 2], s[r - 1], s[r], s[r + 1], c, d) || 0;
            else("circle" === l || "ellipse" === l) && (n = i.width / 2 * c, a = i.height / 2 * d, t = Math.PI * (3 * (n + a) - Math.sqrt((3 * n + a) * (n + 3 * a))));
            return t || 0
        }

        function g(e, t) {
            if (!e) return [0, 0];
            e = u(e), t = t || m(e) + 1;
            var i = v(e),
                s = i.strokeDasharray || "",
                o = parseFloat(i.strokeDashoffset),
                r = s.indexOf(",");
            return r < 0 && (r = s.indexOf(" ")), t < (s = r < 0 ? t : parseFloat(s.substr(0, r)) || 1e-5) && (s = t), [Math.max(0, -o), Math.max(0, s - o)]
        }
        var e, t = _gsScope.document,
            v = t.defaultView ? t.defaultView.getComputedStyle : function() {},
            h = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            y = -1 !== ((_gsScope.navigator || {}).userAgent || "").indexOf("Edge");
        (e = _gsScope._gsDefine.plugin({
            propName: "drawSVG",
            API: 2,
            version: "0.1.4",
            global: !0,
            overwriteProps: ["drawSVG"],
            init: function(e, t, i, s) {
                if (!e.getBBox) return !1;
                var o, r, n, a, l, c, d, p, u, h, f = m(e) + 1;
                return this._style = e.style, "function" == typeof t && (t = t(s, e)), !0 === t || "true" === t ? t = "0 100%" : t ? -1 === (t + "").indexOf(" ") && (t = "0 " + t) : t = "0 0", o = g(e, f), l = t, c = f, d = o[0], -1 === (h = l.indexOf(" ")) ? (p = void 0 !== d ? d + "" : l, u = l) : (p = l.substr(0, h), u = l.substr(h + 1)), p = -1 !== p.indexOf("%") ? parseFloat(p) / 100 * c : parseFloat(p), r = (u = -1 !== u.indexOf("%") ? parseFloat(u) / 100 * c : parseFloat(u)) < p ? [u, p] : [p, u], this._length = f + 10, 0 === o[0] && 0 === r[0] ? (n = Math.max(1e-5, r[1] - f), this._dash = f + n, this._offset = f - o[1] + n, this._addTween(this, "_offset", this._offset, f - r[1] + n, "drawSVG")) : (this._dash = o[1] - o[0] || 1e-6, this._offset = -o[0], this._addTween(this, "_dash", this._dash, r[1] - r[0] || 1e-5, "drawSVG"), this._addTween(this, "_offset", this._offset, -r[0], "drawSVG")), y && ("butt" !== (r = (a = v(e)).strokeLinecap) && r !== a.strokeLinejoin && (r = parseFloat(a.strokeMiterlimit), this._addTween(e.style, "strokeMiterlimit", r, r + 1e-4, "strokeMiterlimit"))), !0
            },
            set: function(e) {
                this._firstPT && (this._super.setRatio.call(this, e), this._style.strokeDashoffset = this._offset, this._style.strokeDasharray = 1 === e || 0 === e ? this._offset < .001 && this._length - this._dash <= 10 ? "none" : this._offset === this._dash ? "0px, 999999px" : this._dash + "px," + this._length + "px" : this._dash + "px," + this._length + "px")
            }
        })).getLength = m, e.getPosition = g
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).DrawSVGPlugin
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.min.html"), module.exports = t()) : "function" == typeof define && define.amd && define(["TweenLite"], t)
    }();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;

function atvImg() {
    var e = document,
        b = (e.documentElement, e.getElementsByTagName("body")[0]),
        w = e.getElementsByTagName("html")[0],
        r = window,
        t = e.querySelectorAll(".atvImg"),
        i = t.length,
        s = new MobileDetect(window.navigator.userAgent),
        o = "ontouchstart" in r || navigator.msMaxTouchPoints;
    if (!(i <= 0))
        for (var n = 0; n < i; n++) {
            var a = t[n],
                l = a.querySelectorAll(".atvImg-layer"),
                c = l.length;
            if (!(c <= 0)) {
                for (; a.firstChild;) a.removeChild(a.firstChild);
                var d = e.createElement("div"),
                    p = e.createElement("div"),
                    u = e.createElement("div"),
                    h = e.createElement("div"),
                    f = [],
                    m = 0;
                a.id = "atvImg__" + n, d.className = "atvImg-container", p.className = "atvImg-shine", u.className = "atvImg-shadow", h.className = "atvImg-layers", jQuery(l).each(function() {
                    var e = jQuery(this),
                        t = e.data("img");
                    e.data("img") && e.css({
                        backgroundImage: "url(" + t + ")"
                    }), e.attr("data-layer", Number(m)), e.addClass("atvImg-rendered-layer"), e.appendTo(h), f.push(e), m++
                }), d.appendChild(u), d.appendChild(h), a.appendChild(d);
                var g = a.clientWidth || a.offsetWidth || a.scrollWidth;
                a.style.transform = "perspective(" + 3 * g + "px)", o && !s.mobile() ? (r.preventScroll = !1, function(t, i, s, o) {
                    a.addEventListener("touchmove", function(e) {
                        r.preventScroll && e.preventDefault(), window.requestAnimationFrame(function() {
                            v(e, !0, t, i, s, o)
                        })
                    }), a.addEventListener("touchstart", function(e) {
                        r.preventScroll = !0, y(e, t)
                    }), a.addEventListener("touchend", function(e) {
                        r.preventScroll = !1, T(e, t, i, s, o)
                    })
                }(a, f, c, p)) : function(t, i, s, o) {
                    a.addEventListener("mousemove", function(e) {
                        v(e, !1, t, i, s, o)
                    }), a.addEventListener("mouseenter", function(e) {
                        y(e, t)
                    }), a.addEventListener("mouseleave", function(e) {
                        T(e, t, i, s, o)
                    })
                }(a, f, c, p)
            }
        }

    function v(e, t, i, s, o, r) {
        var n = b.scrollTop || w.scrollTop,
            a = b.scrollLeft,
            l = t ? e.touches[0].pageX : e.pageX,
            c = t ? e.touches[0].pageY : e.pageY,
            d = i.getBoundingClientRect(),
            p = i.clientWidth || i.offsetWidth || i.scrollWidth,
            u = i.clientHeight || i.offsetHeight || i.scrollHeight,
            h = 320 / p,
            f = .52 - (l - d.left - a) / p,
            m = .52 - (c - d.top - n) / u,
            g = c - d.top - n - u / 2,
            v = l - d.left - a - p / 2,
            y = "rotateX(" + .05 * h * (g - m) + "deg) rotateY(" + .03 * h * (f - v) + "deg)",
            T = 180 * Math.atan2(g, v) / Math.PI - 90;
        T < 0 && (T += 360), -1 != i.firstChild.className.indexOf(" over") && (y += " scale3d(1.04,1.04,1.04)"), i.firstChild.style.transform = y, r.style.background = "linear-gradient(" + T + "deg, rgba(255,255,255," + (c - d.top - n) / u * .2 + ") 0%,rgba(255,255,255,0) 80%)", r.style.transform = "translateX(" + f * o - .1 + "px) translateY(" + m * o - .1 + "px)"
    }

    function y(e, t) {
        t.firstChild.className += " over"
    }

    function T(e, t, i, s, o) {
        var r = t.firstChild;
        r.className = r.className.replace(" over", ""), r.style.transform = "", o.style.cssText = ""
    }
}(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSRulePlugin", ["plugins.TweenPlugin", "TweenLite", "plugins.CSSPlugin"], function(e, t, o) {
            var i = function() {
                    e.call(this, "cssRule"), this._overwriteProps.length = 0
                },
                c = _gsScope.document,
                s = o.prototype.setRatio,
                r = i.prototype = new o;
            return r._propName = "cssRule", (r.constructor = i).version = "0.6.5", i.API = 2, i.getRule = function(e) {
                var t, i, s, o, r = c.all ? "rules" : "cssRules",
                    n = c.styleSheets,
                    a = n.length,
                    l = ":" === e.charAt(0);
                for (e = (l ? "" : ",") + e.split("::").join(":").toLowerCase() + ",", l && (o = []); - 1 < --a;) {
                    try {
                        if (!(i = n[a][r])) continue;
                        t = i.length
                    } catch (e) {
                        console.log(e);
                        continue
                    }
                    for (; - 1 < --t;)
                        if ((s = i[t]).selectorText && -1 !== ("," + s.selectorText.split("::").join(":").toLowerCase() + ",").indexOf(e)) {
                            if (!l) return s.style;
                            o.push(s.style)
                        }
                }
                return o
            }, r._onInitTween = function(e, t, i) {
                if (void 0 === e.cssText) return !1;
                var s = e._gsProxy = e._gsProxy || c.createElement("div");
                return this._ss = e, this._proxy = s.style, s.style.cssText = e.cssText, o.prototype._onInitTween.call(this, s, t, i), !0
            }, r.setRatio = function(e) {
                s.call(this, e), this._ss.cssText = this._proxy.cssText
            }, e.activate([i]), i
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).CSSRulePlugin
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.min.html"), module.exports = t()) : "function" == typeof define && define.amd && define(["TweenLite"], t)
    }();
var NEWTON_ITERATIONS = 4,
    NEWTON_MIN_SLOPE = .001,
    SUBDIVISION_PRECISION = 1e-7,
    SUBDIVISION_MAX_ITERATIONS = 10,
    kSplineTableSize = 11,
    kSampleStepSize = 1 / (kSplineTableSize - 1),
    float32ArraySupported = "function" == typeof Float32Array;

function A(e, t) {
    return 1 - 3 * t + 3 * e
}

function B(e, t) {
    return 3 * t - 6 * e
}

function C(e) {
    return 3 * e
}

function calcBezier(e, t, i) {
    return ((A(t, i) * e + B(t, i)) * e + C(t)) * e
}

function getSlope(e, t, i) {
    return 3 * A(t, i) * e * e + 2 * B(t, i) * e + C(t)
}

function binarySubdivide(e, t, i, s, o) {
    for (var r, n, a = 0; 0 < (r = calcBezier(n = t + (i - t) / 2, s, o) - e) ? i = n : t = n, Math.abs(r) > SUBDIVISION_PRECISION && ++a < SUBDIVISION_MAX_ITERATIONS;);
    return n
}

function newtonRaphsonIterate(e, t, i, s) {
    for (var o = 0; o < NEWTON_ITERATIONS; ++o) {
        var r = getSlope(t, i, s);
        if (0 === r) return t;
        t -= (calcBezier(t, i, s) - e) / r
    }
    return t
}

function BezierEasing(e, t, i, s) {
    if (4 === arguments.length) return new BezierEasing([e, t, i, s]);
    if (!(this instanceof BezierEasing)) return new BezierEasing(e);
    if (!e || 4 !== e.length) throw new Error("BezierEasing: points must contains 4 values");
    for (var o = 0; o < 4; ++o)
        if ("number" != typeof e[o] || isNaN(e[o]) || !isFinite(e[o])) throw new Error("BezierEasing: points should be integers.");
    if (e[0] < 0 || 1 < e[0] || e[2] < 0 || 1 < e[2]) throw new Error("BezierEasing x values must be in [0, 1] range.");
    this._str = "BezierEasing(" + e + ")", this._css = "cubic-bezier(" + e + ")", this._p = e, this._mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize), this._precomputed = !1, this.get = this.get.bind(this)
}
BezierEasing.prototype = {
        get: function(e) {
            var t = this._p[0],
                i = this._p[1],
                s = this._p[2],
                o = this._p[3];
            return this._precomputed || this._precompute(), t === i && s === o ? e : 0 === e ? 0 : 1 === e ? 1 : calcBezier(this._getTForX(e), i, o)
        },
        getPoints: function() {
            return this._p
        },
        toString: function() {
            return this._str
        },
        toCSS: function() {
            return this._css
        },
        _precompute: function() {
            var e = this._p[0],
                t = this._p[1],
                i = this._p[2],
                s = this._p[3];
            this._precomputed = !0, e === t && i === s || this._calcSampleValues()
        },
        _calcSampleValues: function() {
            for (var e = this._p[0], t = this._p[2], i = 0; i < kSplineTableSize; ++i) this._mSampleValues[i] = calcBezier(i * kSampleStepSize, e, t)
        },
        _getTForX: function(e) {
            for (var t = this._p[0], i = this._p[2], s = this._mSampleValues, o = 0, r = 1, n = kSplineTableSize - 1; r !== n && s[r] <= e; ++r) o += kSampleStepSize;
            var a = o + (e - s[--r]) / (s[r + 1] - s[r]) * kSampleStepSize,
                l = getSlope(a, t, i);
            return NEWTON_MIN_SLOPE <= l ? newtonRaphsonIterate(e, a, t, i) : 0 === l ? a : binarySubdivide(e, o, o + kSampleStepSize, t, i)
        }
    }, BezierEasing.css = {
        ease: BezierEasing.ease = BezierEasing(.25, .1, .25, 1),
        linear: BezierEasing.linear = BezierEasing(0, 0, 1, 1),
        "ease-in": BezierEasing.easeIn = BezierEasing(.42, 0, 1, 1),
        "ease-out": BezierEasing.easeOut = BezierEasing(0, 0, .58, 1),
        "ease-in-out": BezierEasing.easeInOut = BezierEasing(.42, 0, .58, 1)
    },
    function(e) {
        "use strict";

        function i(e) {
            return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
        }
        var s, o, r;

        function t(e, t) {
            (s(e, t) ? r : o)(e, t)
        }
        "classList" in document.documentElement ? (s = function(e, t) {
            return e.classList.contains(t)
        }, o = function(e, t) {
            e.classList.add(t)
        }, r = function(e, t) {
            e.classList.remove(t)
        }) : (s = function(e, t) {
            return i(t).test(e.className)
        }, o = function(e, t) {
            s(e, t) || (e.className = e.className + " " + t)
        }, r = function(e, t) {
            e.className = e.className.replace(i(t), " ")
        });
        var n = {
            hasClass: s,
            addClass: o,
            removeClass: r,
            toggleClass: t,
            has: s,
            add: o,
            remove: r,
            toggle: t
        };
        "function" == typeof define && define.amd ? define(n) : e.classie = n
    }(window);
var Froogaloop = function() {
    function t(e) {
        return new t.fn.init(e)
    }

    function n(e, t, i) {
        if (!i.contentWindow.postMessage) return !1;
        e = JSON.stringify({
            method: e,
            value: t
        }), i.contentWindow.postMessage(e, c)
    }

    function e(e) {
        var t, i;
        try {
            i = (t = JSON.parse(e.data)).event || t.method
        } catch (e) {}
        if ("ready" != i || l || (l = !0), !/^https?:\/\/player.vimeo.com/.test(e.origin)) return !1;
        "*" === c && (c = e.origin), e = t.value;
        var s = t.data,
            o = "" === o ? null : t.player_id;
        return t = o ? r[o][i] : r[i], i = [], !!t && (void 0 !== e && i.push(e), s && i.push(s), o && i.push(o), 0 < i.length ? t.apply(null, i) : t.call())
    }

    function a(e, t, i) {
        i ? (r[i] || (r[i] = {}), r[i][e] = t) : r[e] = t
    }
    var r = {},
        l = !1,
        c = "*";
    return (t.fn = t.prototype = {
        element: null,
        init: function(e) {
            return "string" == typeof e && (e = document.getElementById(e)), this.element = e, this
        },
        api: function(e, t) {
            if (!this.element || !e) return !1;
            var i = this.element,
                s = "" !== i.id ? i.id : null,
                o = t && t.constructor && t.call && t.apply ? null : t,
                r = t && t.constructor && t.call && t.apply ? t : null;
            return r && a(e, r, s), n(e, o, i), this
        },
        addEvent: function(e, t) {
            if (!this.element) return !1;
            var i = this.element,
                s = "" !== i.id ? i.id : null;
            return a(e, t, s), "ready" != e ? n("addEventListener", e, i) : "ready" == e && l && t.call(null, s), this
        },
        removeEvent: function(e) {
            if (!this.element) return !1;
            var t = this.element,
                i = "" !== t.id ? t.id : null;
            e: {
                if (i && r[i]) {
                    if (!r[i][e]) {
                        i = !1;
                        break e
                    }
                    r[i][e] = null
                } else {
                    if (!r[e]) {
                        i = !1;
                        break e
                    }
                    r[e] = null
                }
                i = !0
            }
            "ready" != e && i && n("removeEventListener", e, t)
        }
    }).init.prototype = t.fn, window.addEventListener ? window.addEventListener("message", e, !1) : window.attachEvent("onmessage", e), window.Froogaloop = window.$f = t
}();
"undefined" != typeof google && eval(function(e, t, i, s, o, r) {
        if (o = function(e) {
                return (e < 62 ? "" : o(parseInt(e / 62))) + (35 < (e %= 62) ? String.fromCharCode(e + 29) : e.toString(36))
            }, !"".replace(/^/, String)) {
            for (; i--;) r[o(i)] = s[i] || o(i);
            s = [function(e) {
                return r[e]
            }], o = function() {
                return "\\w+"
            }, i = 1
        }
        for (; i--;) s[i] && (e = e.replace(new RegExp("\\b" + o(i) + "\\b", "g"), s[i]));
        return e
    }('7 p(a){a=a||{};5.8.1N.2h(2,32);2.L=a.1u||"";2.1D=a.1q||H;2.P=a.1H||0;2.E=a.1B||1f 5.8.1U(0,0);2.B=a.W||1f 5.8.2t(0,0);2.S=a.11||q;2.1n=a.1l||"28";2.1k=a.D||{};2.1G=a.1E||"34";2.M=a.19||"2W://2Q.5.2L/2I/2G/2F/1v.2z";3(a.19===""){2.M=""}2.1i=a.1r||1f 5.8.1U(1,1);2.Y=a.1s||H;2.1a=a.1p||H;2.1K=a.2k||"2g";2.17=a.1m||H;2.4=q;2.w=q;2.X=q;2.16=q;2.15=q;2.13=q;2.12=q;2.O=q}p.r=1f 5.8.1N();p.r.22=7(){6 a;6 d=2;6 c=7(e){e.1Z=U;3(e.18){e.18()}};6 b=7(e){e.2S=H;3(e.1Y){e.1Y()}3(!d.17){c(e)}};3(!2.4){2.4=1g.2K("2J");2.1d();3(t 2.L.1w==="u"){2.4.J=2.F()+2.L}v{2.4.J=2.F();2.4.1b(2.L)}2.2y()[2.1K].1b(2.4);2.1F();3(2.4.9.A){2.O=U}v{3(2.P!==0&&2.4.Z>2.P){2.4.9.A=2.P;2.4.9.2u="2s";2.O=U}v{a=2.24();2.4.9.A=(2.4.Z-a.14-a.T)+"R";2.O=H}}2.1t(2.1D);3(!2.17){2.X=5.8.s.I(2.4,"2n",c);2.16=5.8.s.I(2.4,"1L",c);2.15=5.8.s.I(2.4,"2m",c);2.1o=5.8.s.I(2.4,"2l",7(e){2.9.1J="2j"})}2.12=5.8.s.I(2.4,"2i",b);5.8.s.Q(2,"2f")}};p.r.F=7(){6 a="";3(2.M!==""){a="<2e";a+=" 2d=\'"+2.M+"\'";a+=" 2c=T";a+=" 9=\'";a+=" W: 2b;";a+=" 1J: 2a;";a+=" 29: "+2.1G+";";a+="\'>"}N a};p.r.1F=7(){6 a;3(2.M!==""){a=2.4.27;2.w=5.8.s.I(a,\'1L\',2.1I())}v{2.w=q}};p.r.1I=7(){6 a=2;N 7(e){e.1Z=U;3(e.18){e.18()}a.1v();5.8.s.Q(a,"26")}};p.r.1t=7(d){6 m;6 n;6 e=0,G=0;3(!d){m=2.25();3(m 39 5.8.38){3(!m.23().37(2.B)){m.36(2.B)}n=m.23();6 a=m.35();6 h=a.Z;6 f=a.21;6 k=2.E.A;6 l=2.E.1j;6 g=2.4.Z;6 b=2.4.21;6 i=2.1i.A;6 j=2.1i.1j;6 o=2.20().31(2.B);3(o.x<(-k+i)){e=o.x+k-i}v 3((o.x+g+k+i)>h){e=o.x+g+k+i-h}3(2.1a){3(o.y<(-l+j+b)){G=o.y+l-j-b}v 3((o.y+l+j)>f){G=o.y+l+j-f}}v{3(o.y<(-l+j)){G=o.y+l-j}v 3((o.y+b+l+j)>f){G=o.y+b+l+j-f}}3(!(e===0&&G===0)){6 c=m.30();m.2Z(e,G)}}}};p.r.1d=7(){6 i,D;3(2.4){2.4.2Y=2.1n;2.4.9.2X="";D=2.1k;2V(i 2U D){3(D.2R(i)){2.4.9[i]=D[i]}}3(t 2.4.9.1h!=="u"&&2.4.9.1h!==""){2.4.9.2P="2O(1h="+(2.4.9.1h*2N)+")"}2.4.9.W="2M";2.4.9.V=\'1y\';3(2.S!==q){2.4.9.11=2.S}}};p.r.24=7(){6 c;6 a={1e:0,1c:0,14:0,T:0};6 b=2.4;3(1g.1x&&1g.1x.1V){c=b.2H.1x.1V(b,"");3(c){a.1e=C(c.1T,10)||0;a.1c=C(c.1S,10)||0;a.14=C(c.1R,10)||0;a.T=C(c.1W,10)||0}}v 3(1g.2E.K){3(b.K){a.1e=C(b.K.1T,10)||0;a.1c=C(b.K.1S,10)||0;a.14=C(b.K.1R,10)||0;a.T=C(b.K.1W,10)||0}}N a};p.r.2D=7(){3(2.4){2.4.2C.2B(2.4);2.4=q}};p.r.1A=7(){2.22();6 a=2.20().2A(2.B);2.4.9.14=(a.x+2.E.A)+"R";3(2.1a){2.4.9.1c=-(a.y+2.E.1j)+"R"}v{2.4.9.1e=(a.y+2.E.1j)+"R"}3(2.Y){2.4.9.V=\'1y\'}v{2.4.9.V="1X"}};p.r.2T=7(a){3(t a.1l!=="u"){2.1n=a.1l;2.1d()}3(t a.D!=="u"){2.1k=a.D;2.1d()}3(t a.1u!=="u"){2.1Q(a.1u)}3(t a.1q!=="u"){2.1D=a.1q}3(t a.1H!=="u"){2.P=a.1H}3(t a.1B!=="u"){2.E=a.1B}3(t a.1p!=="u"){2.1a=a.1p}3(t a.W!=="u"){2.1z(a.W)}3(t a.11!=="u"){2.1P(a.11)}3(t a.1E!=="u"){2.1G=a.1E}3(t a.19!=="u"){2.M=a.19}3(t a.1r!=="u"){2.1i=a.1r}3(t a.1s!=="u"){2.Y=a.1s}3(t a.1m!=="u"){2.17=a.1m}3(2.4){2.1A()}};p.r.1Q=7(a){2.L=a;3(2.4){3(2.w){5.8.s.z(2.w);2.w=q}3(!2.O){2.4.9.A=""}3(t a.1w==="u"){2.4.J=2.F()+a}v{2.4.J=2.F();2.4.1b(a)}3(!2.O){2.4.9.A=2.4.Z+"R";3(t a.1w==="u"){2.4.J=2.F()+a}v{2.4.J=2.F();2.4.1b(a)}}2.1F()}5.8.s.Q(2,"2x")};p.r.1z=7(a){2.B=a;3(2.4){2.1A()}5.8.s.Q(2,"1O")};p.r.1P=7(a){2.S=a;3(2.4){2.4.9.11=a}5.8.s.Q(2,"2w")};p.r.2v=7(){N 2.L};p.r.1C=7(){N 2.B};p.r.33=7(){N 2.S};p.r.2r=7(){2.Y=H;3(2.4){2.4.9.V="1X"}};p.r.2q=7(){2.Y=U;3(2.4){2.4.9.V="1y"}};p.r.2p=7(c,b){6 a=2;3(b){2.B=b.1C();2.13=5.8.s.2o(b,"1O",7(){a.1z(2.1C())})}2.1M(c);3(2.4){2.1t()}};p.r.1v=7(){3(2.w){5.8.s.z(2.w);2.w=q}3(2.X){5.8.s.z(2.X);5.8.s.z(2.16);5.8.s.z(2.15);5.8.s.z(2.1o);2.X=q;2.16=q;2.15=q;2.1o=q}3(2.13){5.8.s.z(2.13);2.13=q}3(2.12){5.8.s.z(2.12);2.12=q}2.1M(q)};', 0, 196, "||this|if|div_|google|var|function|maps|style||||||||||||||||InfoBox|null|prototype|event|typeof|undefined|else|closeListener_|||removeListener|width|position_|parseInt|boxStyle|pixelOffset_|getCloseBoxImg_|yOffset|false|addDomListener|innerHTML|currentStyle|content_|closeBoxURL_|return|fixedWidthSet_|maxWidth_|trigger|px|zIndex_|right|true|visibility|position|eventListener1_|isHidden_|offsetWidth||zIndex|contextListener_|moveListener_|left|eventListener3_|eventListener2_|enableEventPropagation_|stopPropagation|closeBoxURL|alignBottom_|appendChild|bottom|setBoxStyle_|top|new|document|opacity|infoBoxClearance_|height|boxStyle_|boxClass|enableEventPropagation|boxClass_|eventListener4_|alignBottom|disableAutoPan|infoBoxClearance|isHidden|panBox_|content|close|nodeType|defaultView|hidden|setPosition|draw|pixelOffset|getPosition|disableAutoPan_|closeBoxMargin|addClickHandler_|closeBoxMargin_|maxWidth|getCloseClickHandler_|cursor|pane_|click|setMap|OverlayView|position_changed|setZIndex|setContent|borderLeftWidth|borderBottomWidth|borderTopWidth|Size|getComputedStyle|borderRightWidth|visible|preventDefault|cancelBubble|getProjection|offsetHeight|createInfoBoxDiv_|getBounds|getBoxWidths_|getMap|closeclick|firstChild|infoBox|margin|pointer|relative|align|src|img|domready|floatPane|apply|contextmenu|default|pane|mouseover|dblclick|mousedown|addListener|open|hide|show|auto|LatLng|overflow|getContent|zindex_changed|content_changed|getPanes|gif|fromLatLngToDivPixel|removeChild|parentNode|onRemove|documentElement|mapfiles|en_us|ownerDocument|intl|div|createElement|com|absolute|100|alpha|filter|www|hasOwnProperty|returnValue|setOptions|in|for|http|cssText|className|panBy|getCenter|fromLatLngToContainerPixel|arguments|getZIndex|2px|getDiv|setCenter|contains|Map|instanceof".split("|"), 0, {})),
    function(v, y) {
        function T(e, t) {
            var i = e.getBoundingClientRect(),
                s = i.top,
                o = i.bottom,
                r = i.left,
                n = i.right,
                a = v.extend({
                    tolerance: 0,
                    viewport: y
                }, t),
                l = !1,
                c = a.viewport.jquery ? a.viewport : v(a.viewport);
            c.length || (console.warn("isInViewport: The viewport selector you have provided matches no element on page."), console.warn("isInViewport: Defaulting to viewport as window"), c = v(y));
            var d, p, u, h = c.height(),
                f = c.width(),
                m = c[0].toString();
            if (c[0] !== y && "[object Window]" !== m && "[object DOMWindow]" !== m) {
                var g = c[0].getBoundingClientRect();
                s -= g.top, o -= g.top, r -= g.left, n -= g.left, f -= T.scrollBarWidth = T.scrollBarWidth || (d = c, u = v("<div></div>").css({
                    width: "100%"
                }), d.append(u), p = d.width() - u.width(), u.remove(), p)
            }
            return a.tolerance = ~~Math.round(parseFloat(a.tolerance)), a.tolerance < 0 && (a.tolerance = h + a.tolerance), n <= 0 || f <= r ? l : l = a.tolerance ? s <= a.tolerance && o >= a.tolerance : 0 < o && s <= h
        }
        String.prototype.hasOwnProperty("trim") || (String.prototype.trim = function() {
            return this.replace(/^\s*(.*?)\s*$/, "$1")
        });
        var t = function(e) {
            if (1 === arguments.length && "function" == typeof e && (e = [e]), !(e instanceof Array)) throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions");
            for (var t = 0; t < e.length; t++)
                if ("function" == typeof e[t])
                    for (var i = 0; i < this.length; i++) e[t].call(v(this[i]));
                else console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"), console.warn("isInViewport: Ignoring non-function values in array and moving on");
            return this
        };
        v.fn.do = function(e) {
            return console.warn("isInViewport: .do is deprecated as it causes issues in IE and some browsers since it's a reserved word. Use $.fn.run instead i.e., $(el).run(fn)."), t(e)
        }, v.fn.run = t;
        var s = function(e) {
            if (e) {
                var t = e.split(",");
                return 1 === t.length && isNaN(t[0]) && (t[1] = t[0], t[0] = void 0), {
                    tolerance: t[0] ? t[0].trim() : void 0,
                    viewport: t[1] ? v(t[1].trim()) : void 0
                }
            }
            return {}
        };
        v.extend(v.expr[":"], {
            "in-viewport": v.expr.createPseudo ? v.expr.createPseudo(function(t) {
                return function(e) {
                    return T(e, s(t))
                }
            }) : function(e, t, i) {
                return T(e, s(i[3]))
            }
        }), v.fn.isInViewport = function(i) {
            return this.filter(function(e, t) {
                return T(t, i)
            })
        }
    }(jQuery, window),
    function(e) {
        function t() {}

        function i(c) {
            if (c) {
                var d = "undefined" == typeof console ? t : function(e) {
                    console.error(e)
                };
                return c.bridget = function(e, t) {
                    var a, l, i;
                    (i = t).prototype.option || (i.prototype.option = function(e) {
                        c.isPlainObject(e) && (this.options = c.extend(!0, this.options, e))
                    }), a = e, l = t, c.fn[a] = function(t) {
                        if ("string" == typeof t) {
                            for (var e = p.call(arguments, 1), i = 0, s = this.length; i < s; i++) {
                                var o = this[i],
                                    r = c.data(o, a);
                                if (r)
                                    if (c.isFunction(r[t]) && "_" !== t.charAt(0)) {
                                        var n = r[t].apply(r, e);
                                        if (void 0 !== n) return n
                                    } else d("no such method '" + t + "' for " + a + " instance");
                                else d("cannot call methods on " + a + " prior to initialization; attempted to call '" + t + "'")
                            }
                            return this
                        }
                        return this.each(function() {
                            var e = c.data(this, a);
                            e ? (e.option(t), e._init()) : (e = new l(this, t), c.data(this, a, e))
                        })
                    }
                }, c.bridget
            }
        }
        var p = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : e.jQuery)
    }(window),
    function(i) {
        function s(e) {
            var t = i.event;
            return t.target = t.target || t.srcElement || e, t
        }
        var e = document.documentElement,
            t = function() {};
        e.addEventListener ? t = function(e, t, i) {
            e.addEventListener(t, i, !1)
        } : e.attachEvent && (t = function(t, e, i) {
            t[e + i] = i.handleEvent ? function() {
                var e = s(t);
                i.handleEvent.call(i, e)
            } : function() {
                var e = s(t);
                i.call(t, e)
            }, t.attachEvent("on" + e, t[e + i])
        });
        var o = function() {};
        e.removeEventListener ? o = function(e, t, i) {
            e.removeEventListener(t, i, !1)
        } : e.detachEvent && (o = function(t, i, s) {
            t.detachEvent("on" + i, t[i + s]);
            try {
                delete t[i + s]
            } catch (e) {
                t[i + s] = void 0
            }
        });
        var r = {
            bind: t,
            unbind: o
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : i.eventie = r
    }(window),
    function() {
        "use strict";

        function e() {}

        function r(e, t) {
            for (var i = e.length; i--;)
                if (e[i].listener === t) return i;
            return -1
        }

        function t(e) {
            return function() {
                return this[e].apply(this, arguments)
            }
        }
        var i = e.prototype,
            s = this,
            o = s.EventEmitter;
        i.getListeners = function(e) {
            var t, i, s = this._getEvents();
            if (e instanceof RegExp)
                for (i in t = {}, s) s.hasOwnProperty(i) && e.test(i) && (t[i] = s[i]);
            else t = s[e] || (s[e] = []);
            return t
        }, i.flattenListeners = function(e) {
            var t, i = [];
            for (t = 0; t < e.length; t += 1) i.push(e[t].listener);
            return i
        }, i.getListenersAsObject = function(e) {
            var t, i = this.getListeners(e);
            return i instanceof Array && ((t = {})[e] = i), t || i
        }, i.addListener = function(e, t) {
            var i, s = this.getListenersAsObject(e),
                o = "object" == typeof t;
            for (i in s) s.hasOwnProperty(i) && -1 === r(s[i], t) && s[i].push(o ? t : {
                listener: t,
                once: !1
            });
            return this
        }, i.on = t("addListener"), i.addOnceListener = function(e, t) {
            return this.addListener(e, {
                listener: t,
                once: !0
            })
        }, i.once = t("addOnceListener"), i.defineEvent = function(e) {
            return this.getListeners(e), this
        }, i.defineEvents = function(e) {
            for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
            return this
        }, i.removeListener = function(e, t) {
            var i, s, o = this.getListenersAsObject(e);
            for (s in o) o.hasOwnProperty(s) && (-1 !== (i = r(o[s], t)) && o[s].splice(i, 1));
            return this
        }, i.off = t("removeListener"), i.addListeners = function(e, t) {
            return this.manipulateListeners(!1, e, t)
        }, i.removeListeners = function(e, t) {
            return this.manipulateListeners(!0, e, t)
        }, i.manipulateListeners = function(e, t, i) {
            var s, o, r = e ? this.removeListener : this.addListener,
                n = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (s = i.length; s--;) r.call(this, t, i[s]);
            else
                for (s in t) t.hasOwnProperty(s) && (o = t[s]) && ("function" == typeof o ? r.call(this, s, o) : n.call(this, s, o));
            return this
        }, i.removeEvent = function(e) {
            var t, i = typeof e,
                s = this._getEvents();
            if ("string" === i) delete s[e];
            else if (e instanceof RegExp)
                for (t in s) s.hasOwnProperty(t) && e.test(t) && delete s[t];
            else delete this._events;
            return this
        }, i.removeAllListeners = t("removeEvent"), i.emitEvent = function(e, t) {
            var i, s, o, r = this.getListenersAsObject(e);
            for (o in r)
                if (r.hasOwnProperty(o))
                    for (s = r[o].length; s--;) !0 === (i = r[o][s]).once && this.removeListener(e, i.listener), i.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, i.listener);
            return this
        }, i.trigger = t("emitEvent"), i.emit = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t)
        }, i.setOnceReturnValue = function(e) {
            return this._onceReturnValue = e, this
        }, i._getOnceReturnValue = function() {
            return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, e.noConflict = function() {
            return s.EventEmitter = o, e
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return e
        }) : "object" == typeof module && module.exports ? module.exports = e : s.EventEmitter = e
    }.call(this),
    function(e) {
        function t(e) {
            if (e) {
                if ("string" == typeof r[e]) return e;
                e = e.charAt(0).toUpperCase() + e.slice(1);
                for (var t, i = 0, s = o.length; i < s; i++)
                    if (t = o[i] + e, "string" == typeof r[t]) return t
            }
        }
        var o = "Webkit Moz ms Ms O".split(" "),
            r = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return t
        }) : "object" == typeof exports ? module.exports = t : e.getStyleProperty = t
    }(window),
    function(x, e) {
        function P(e) {
            var t = parseFloat(e);
            return -1 === e.indexOf("%") && !isNaN(t) && t
        }

        function t(y) {
            function T(e, t) {
                if (x.getComputedStyle || -1 === t.indexOf("%")) return t;
                var i = e.style,
                    s = i.left,
                    o = e.runtimeStyle,
                    r = o && o.left;
                return r && (o.left = e.currentStyle.left), i.left = t, t = i.pixelLeft, i.left = s, r && (o.left = r), t
            }
            var b, w, S, _ = !1;
            return function(e) {
                if (function() {
                        if (!_) {
                            _ = !0;
                            var t = x.getComputedStyle;
                            if (o = t ? function(e) {
                                    return t(e, null)
                                } : function(e) {
                                    return e.currentStyle
                                }, b = function(e) {
                                    var t = o(e);
                                    return t || C("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), t
                                }, w = y("boxSizing")) {
                                var e = document.createElement("div");
                                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[w] = "border-box";
                                var i = document.body || document.documentElement;
                                i.appendChild(e);
                                var s = b(e);
                                S = 200 === P(s.width), i.removeChild(e)
                            }
                        }
                        var o
                    }(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                    var t = b(e);
                    if ("none" === t.display) return function() {
                        for (var e = {
                                width: 0,
                                height: 0,
                                innerWidth: 0,
                                innerHeight: 0,
                                outerWidth: 0,
                                outerHeight: 0
                            }, t = 0, i = M.length; t < i; t++) e[M[t]] = 0;
                        return e
                    }();
                    var i = {};
                    i.width = e.offsetWidth, i.height = e.offsetHeight;
                    for (var s = i.isBorderBox = !(!w || !t[w] || "border-box" !== t[w]), o = 0, r = M.length; o < r; o++) {
                        var n = M[o],
                            a = t[n];
                        a = T(e, a);
                        var l = parseFloat(a);
                        i[n] = isNaN(l) ? 0 : l
                    }
                    var c = i.paddingLeft + i.paddingRight,
                        d = i.paddingTop + i.paddingBottom,
                        p = i.marginLeft + i.marginRight,
                        u = i.marginTop + i.marginBottom,
                        h = i.borderLeftWidth + i.borderRightWidth,
                        f = i.borderTopWidth + i.borderBottomWidth,
                        m = s && S,
                        g = P(t.width);
                    !1 !== g && (i.width = g + (m ? 0 : c + h));
                    var v = P(t.height);
                    return !1 !== v && (i.height = v + (m ? 0 : d + f)), i.innerWidth = i.width - (c + h), i.innerHeight = i.height - (d + f), i.outerWidth = i.width + p, i.outerHeight = i.height + u, i
                }
            }
        }
        var C = "undefined" == typeof console ? function() {} : function(e) {
                console.error(e)
            },
            M = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], t) : "object" == typeof exports ? module.exports = t(require("desandro-get-style-property")) : x.getSize = t(x.getStyleProperty)
    }(window),
    function(t) {
        function i(e) {
            "function" == typeof e && (i.isReady ? e() : n.push(e))
        }

        function s(e) {
            var t = "readystatechange" === e.type && "complete" !== r.readyState;
            i.isReady || t || o()
        }

        function o() {
            i.isReady = !0;
            for (var e = 0, t = n.length; e < t; e++) {
                (0, n[e])()
            }
        }

        function e(e) {
            return "complete" === r.readyState ? o() : (e.bind(r, "DOMContentLoaded", s), e.bind(r, "readystatechange", s), e.bind(t, "load", s)), i
        }
        var r = t.document,
            n = [];
        i.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : t.docReady = e(t.eventie)
    }(window),
    function(o) {
        "use strict";

        function i(e, t) {
            return e[s](t)
        }

        function r(e) {
            e.parentNode || document.createDocumentFragment().appendChild(e)
        }
        var e, s = function() {
            if (o.matches) return "matches";
            if (o.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], t = 0, i = e.length; t < i; t++) {
                var s = e[t] + "MatchesSelector";
                if (o[s]) return s
            }
        }();
        if (s) {
            var t = i(document.createElement("div"), "div");
            e = t ? i : function(e, t) {
                return r(e), i(e, t)
            }
        } else e = function(e, t) {
            r(e);
            for (var i = e.parentNode.querySelectorAll(t), s = 0, o = i.length; s < o; s++)
                if (i[s] === e) return !0;
            return !1
        };
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : window.matchesSelector = e
    }(Element.prototype),
    function(i, s) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(e, t) {
            return s(i, e, t)
        }) : "object" == typeof exports ? module.exports = s(i, require("doc-ready"), require("desandro-matches-selector")) : i.fizzyUIUtils = s(i, i.docReady, i.matchesSelector)
    }(window, function(u, e, c) {
        var i, h = {
                extend: function(e, t) {
                    for (var i in t) e[i] = t[i];
                    return e
                },
                modulo: function(e, t) {
                    return (e % t + t) % t
                }
            },
            t = Object.prototype.toString;
        h.isArray = function(e) {
            return "[object Array]" == t.call(e)
        }, h.makeArray = function(e) {
            var t = [];
            if (h.isArray(e)) t = e;
            else if (e && "number" == typeof e.length)
                for (var i = 0, s = e.length; i < s; i++) t.push(e[i]);
            else t.push(e);
            return t
        }, h.indexOf = Array.prototype.indexOf ? function(e, t) {
            return e.indexOf(t)
        } : function(e, t) {
            for (var i = 0, s = e.length; i < s; i++)
                if (e[i] === t) return i;
            return -1
        }, h.removeFrom = function(e, t) {
            var i = h.indexOf(e, t); - 1 != i && e.splice(i, 1)
        }, h.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(e) {
            return e instanceof HTMLElement
        } : function(e) {
            return e && "object" == typeof e && 1 == e.nodeType && "string" == typeof e.nodeName
        }, h.setText = function(e, t) {
            e[i = i || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText")] = t
        }, h.getParent = function(e, t) {
            for (; e != document.body;)
                if (e = e.parentNode, c(e, t)) return e
        }, h.getQueryElement = function(e) {
            return "string" == typeof e ? document.querySelector(e) : e
        }, h.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, h.filterFindElements = function(e, t) {
            for (var i = [], s = 0, o = (e = h.makeArray(e)).length; s < o; s++) {
                var r = e[s];
                if (h.isElement(r))
                    if (t) {
                        c(r, t) && i.push(r);
                        for (var n = r.querySelectorAll(t), a = 0, l = n.length; a < l; a++) i.push(n[a])
                    } else i.push(r)
            }
            return i
        }, h.debounceMethod = function(e, t, s) {
            var o = e.prototype[t],
                r = t + "Timeout";
            e.prototype[t] = function() {
                var e = this[r];
                e && clearTimeout(e);
                var t = arguments,
                    i = this;
                this[r] = setTimeout(function() {
                    o.apply(i, t), delete i[r]
                }, s || 100)
            }
        }, h.toDashed = function(e) {
            return e.replace(/(.)([A-Z])/g, function(e, t, i) {
                return t + "-" + i
            }).toLowerCase()
        };
        var f = u.console;
        return h.htmlInit = function(d, p) {
            e(function() {
                for (var e = h.toDashed(p), t = document.querySelectorAll(".js-" + e), i = "data-" + e + "-options", s = 0, o = t.length; s < o; s++) {
                    var r, n = t[s],
                        a = n.getAttribute(i);
                    try {
                        r = a && JSON.parse(a)
                    } catch (e) {
                        f && f.error("Error parsing " + i + " on " + n.nodeName.toLowerCase() + (n.id ? "#" + n.id : "") + ": " + e);
                        continue
                    }
                    var l = new d(n, r),
                        c = u.jQuery;
                    c && c.data(n, p, l)
                }
            })
        }, h
    }),
    function(o, r) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(e, t, i, s) {
            return r(o, e, t, i, s)
        }) : "object" == typeof exports ? module.exports = r(o, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (o.Outlayer = {}, o.Outlayer.Item = r(o, o.EventEmitter, o.getSize, o.getStyleProperty, o.fizzyUIUtils))
    }(window, function(e, t, i, r, s) {
        "use strict";

        function o(e, t) {
            e && (this.element = e, this.layout = t, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var n = e.getComputedStyle,
            c = n ? function(e) {
                return n(e, null)
            } : function(e) {
                return e.currentStyle
            },
            a = r("transition"),
            l = r("transform"),
            d = a && l,
            p = !!r("perspective"),
            u = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[a],
            h = ["transform", "transition", "transitionDuration", "transitionProperty"],
            f = function() {
                for (var e = {}, t = 0, i = h.length; t < i; t++) {
                    var s = h[t],
                        o = r(s);
                    o && o !== s && (e[s] = o)
                }
                return e
            }();
        s.extend(o.prototype, t.prototype), o.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, o.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, o.prototype.getSize = function() {
            this.size = i(this.element)
        }, o.prototype.css = function(e) {
            var t = this.element.style;
            for (var i in e) {
                t[f[i] || i] = e[i]
            }
        }, o.prototype.getPosition = function() {
            var e = c(this.element),
                t = this.layout.options,
                i = t.isOriginLeft,
                s = t.isOriginTop,
                o = e[i ? "left" : "right"],
                r = e[s ? "top" : "bottom"],
                n = this.layout.size,
                a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * n.width : parseInt(o, 10),
                l = -1 != r.indexOf("%") ? parseFloat(r) / 100 * n.height : parseInt(r, 10);
            a = isNaN(a) ? 0 : a, l = isNaN(l) ? 0 : l, a -= i ? n.paddingLeft : n.paddingRight, l -= s ? n.paddingTop : n.paddingBottom, this.position.x = a, this.position.y = l
        }, o.prototype.layoutPosition = function() {
            var e = this.layout.size,
                t = this.layout.options,
                i = {},
                s = t.isOriginLeft ? "paddingLeft" : "paddingRight",
                o = t.isOriginLeft ? "left" : "right",
                r = t.isOriginLeft ? "right" : "left",
                n = this.position.x + e[s];
            i[o] = this.getXValue(n), i[r] = "";
            var a = t.isOriginTop ? "paddingTop" : "paddingBottom",
                l = t.isOriginTop ? "top" : "bottom",
                c = t.isOriginTop ? "bottom" : "top",
                d = this.position.y + e[a];
            i[l] = this.getYValue(d), i[c] = "", this.css(i), this.emitEvent("layout", [this])
        }, o.prototype.getXValue = function(e) {
            var t = this.layout.options;
            return t.percentPosition && !t.isHorizontal ? e / this.layout.size.width * 100 + "%" : e + "px"
        }, o.prototype.getYValue = function(e) {
            var t = this.layout.options;
            return t.percentPosition && t.isHorizontal ? e / this.layout.size.height * 100 + "%" : e + "px"
        }, o.prototype._transitionTo = function(e, t) {
            this.getPosition();
            var i = this.position.x,
                s = this.position.y,
                o = parseInt(e, 10),
                r = parseInt(t, 10),
                n = o === this.position.x && r === this.position.y;
            if (this.setPosition(e, t), !n || this.isTransitioning) {
                var a = e - i,
                    l = t - s,
                    c = {};
                c.transform = this.getTranslate(a, l), this.transition({
                    to: c,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            } else this.layoutPosition()
        }, o.prototype.getTranslate = function(e, t) {
            var i = this.layout.options;
            return e = i.isOriginLeft ? e : -e, t = i.isOriginTop ? t : -t, p ? "translate3d(" + e + "px, " + t + "px, 0)" : "translate(" + e + "px, " + t + "px)"
        }, o.prototype.goTo = function(e, t) {
            this.setPosition(e, t), this.layoutPosition()
        }, o.prototype.moveTo = d ? o.prototype._transitionTo : o.prototype.goTo, o.prototype.setPosition = function(e, t) {
            this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
        }, o.prototype._nonTransition = function(e) {
            for (var t in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) e.onTransitionEnd[t].call(this)
        }, o.prototype._transition = function(e) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var t = this._transn;
                for (var i in e.onTransitionEnd) t.onEnd[i] = e.onTransitionEnd[i];
                for (i in e.to) t.ingProperties[i] = !0, e.isCleaning && (t.clean[i] = !0);
                if (e.from) {
                    this.css(e.from);
                    this.element.offsetHeight;
                    null
                }
                this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
            } else this._nonTransition(e)
        };
        var m = "opacity," + (f.transform || "transform").replace(/([A-Z])/g, function(e) {
            return "-" + e.toLowerCase()
        });
        o.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: m,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(u, this, !1))
        }, o.prototype.transition = o.prototype[a ? "_transition" : "_nonTransition"], o.prototype.onwebkitTransitionEnd = function(e) {
            this.ontransitionend(e)
        }, o.prototype.onotransitionend = function(e) {
            this.ontransitionend(e)
        };
        var g = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        o.prototype.ontransitionend = function(e) {
            if (e.target === this.element) {
                var t = this._transn,
                    i = g[e.propertyName] || e.propertyName;
                if (delete t.ingProperties[i], function(e) {
                        for (var t in e) return !1;
                        return !0
                    }(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[i]), i in t.onEnd) t.onEnd[i].call(this), delete t.onEnd[i];
                this.emitEvent("transitionEnd", [this])
            }
        }, o.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
        }, o.prototype._removeStyles = function(e) {
            var t = {};
            for (var i in e) t[i] = "";
            this.css(t)
        };
        var v = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return o.prototype.removeTransitionStyles = function() {
            this.css(v)
        }, o.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, o.prototype.remove = function() {
            if (a && parseFloat(this.layout.options.transitionDuration)) {
                var e = this;
                this.once("transitionEnd", function() {
                    e.removeElem()
                }), this.hide()
            } else this.removeElem()
        }, o.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var e = this.layout.options,
                t = {};
            t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                from: e.hiddenStyle,
                to: e.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: t
            })
        }, o.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, o.prototype.getHideRevealTransitionEndProperty = function(e) {
            var t = this.layout.options[e];
            if (t.opacity) return "opacity";
            for (var i in t) return i
        }, o.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var e = this.layout.options,
                t = {};
            t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                from: e.visibleStyle,
                to: e.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: t
            })
        }, o.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, o.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, o
    }),
    function(r, n) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(e, t, i, s, o) {
            return n(r, e, t, i, s, o)
        }) : "object" == typeof exports ? module.exports = n(r, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : r.Outlayer = n(r, r.eventie, r.EventEmitter, r.getSize, r.fizzyUIUtils, r.Outlayer.Item)
    }(window, function(e, t, i, o, n, s) {
        "use strict";

        function r(e, t) {
            var i = n.getQueryElement(e);
            if (i) {
                this.element = i, l && (this.$element = l(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(t);
                var s = ++d;
                this.element.outlayerGUID = s, (p[s] = this)._create(), this.options.isInitLayout && this.layout()
            } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || e))
        }
        var a = e.console,
            l = e.jQuery,
            c = function() {},
            d = 0,
            p = {};
        return r.namespace = "outlayer", r.Item = s, r.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, n.extend(r.prototype, i.prototype), r.prototype.option = function(e) {
            n.extend(this.options, e)
        }, r.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, r.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, r.prototype._itemize = function(e) {
            for (var t = this._filterFindItemElements(e), i = this.constructor.Item, s = [], o = 0, r = t.length; o < r; o++) {
                var n = new i(t[o], this);
                s.push(n)
            }
            return s
        }, r.prototype._filterFindItemElements = function(e) {
            return n.filterFindElements(e, this.options.itemSelector)
        }, r.prototype.getItemElements = function() {
            for (var e = [], t = 0, i = this.items.length; t < i; t++) e.push(this.items[t].element);
            return e
        }, r.prototype._init = r.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, r.prototype._resetLayout = function() {
            this.getSize()
        }, r.prototype.getSize = function() {
            this.size = o(this.element)
        }, r.prototype._getMeasurement = function(e, t) {
            var i, s = this.options[e];
            s ? ("string" == typeof s ? i = this.element.querySelector(s) : n.isElement(s) && (i = s), this[e] = i ? o(i)[t] : s) : this[e] = 0
        }, r.prototype.layoutItems = function(e, t) {
            e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
        }, r.prototype._getItemsForLayout = function(e) {
            for (var t = [], i = 0, s = e.length; i < s; i++) {
                var o = e[i];
                o.isIgnored || t.push(o)
            }
            return t
        }, r.prototype._layoutItems = function(e, t) {
            if (this._emitCompleteOnItems("layout", e), e && e.length) {
                for (var i = [], s = 0, o = e.length; s < o; s++) {
                    var r = e[s],
                        n = this._getItemLayoutPosition(r);
                    n.item = r, n.isInstant = t || r.isLayoutInstant, i.push(n)
                }
                this._processLayoutQueue(i)
            }
        }, r.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, r.prototype._processLayoutQueue = function(e) {
            for (var t = 0, i = e.length; t < i; t++) {
                var s = e[t];
                this._positionItem(s.item, s.x, s.y, s.isInstant)
            }
        }, r.prototype._positionItem = function(e, t, i, s) {
            s ? e.goTo(t, i) : e.moveTo(t, i)
        }, r.prototype._postLayout = function() {
            this.resizeContainer()
        }, r.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }
        }, r.prototype._getContainerSize = c, r.prototype._setContainerMeasure = function(e, t) {
            if (void 0 !== e) {
                var i = this.size;
                i.isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
            }
        }, r.prototype._emitCompleteOnItems = function(e, t) {
            function i() {
                o.dispatchEvent(e + "Complete", null, [t])
            }

            function s() {
                ++n === r && i()
            }
            var o = this,
                r = t.length;
            if (t && r)
                for (var n = 0, a = 0, l = t.length; a < l; a++) {
                    t[a].once(e, s)
                } else i()
        }, r.prototype.dispatchEvent = function(e, t, i) {
            var s = t ? [t].concat(i) : i;
            if (this.emitEvent(e, s), l)
                if (this.$element = this.$element || l(this.element), t) {
                    var o = l.Event(t);
                    o.type = e, this.$element.trigger(o, i)
                } else this.$element.trigger(e, i)
        }, r.prototype.ignore = function(e) {
            var t = this.getItem(e);
            t && (t.isIgnored = !0)
        }, r.prototype.unignore = function(e) {
            var t = this.getItem(e);
            t && delete t.isIgnored
        }, r.prototype.stamp = function(e) {
            if (e = this._find(e)) {
                this.stamps = this.stamps.concat(e);
                for (var t = 0, i = e.length; t < i; t++) {
                    var s = e[t];
                    this.ignore(s)
                }
            }
        }, r.prototype.unstamp = function(e) {
            if (e = this._find(e))
                for (var t = 0, i = e.length; t < i; t++) {
                    var s = e[t];
                    n.removeFrom(this.stamps, s), this.unignore(s)
                }
        }, r.prototype._find = function(e) {
            return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = n.makeArray(e)) : void 0
        }, r.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var e = 0, t = this.stamps.length; e < t; e++) {
                    var i = this.stamps[e];
                    this._manageStamp(i)
                }
            }
        }, r.prototype._getBoundingRect = function() {
            var e = this.element.getBoundingClientRect(),
                t = this.size;
            this._boundingRect = {
                left: e.left + t.paddingLeft + t.borderLeftWidth,
                top: e.top + t.paddingTop + t.borderTopWidth,
                right: e.right - (t.paddingRight + t.borderRightWidth),
                bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
            }
        }, r.prototype._manageStamp = c, r.prototype._getElementOffset = function(e) {
            var t = e.getBoundingClientRect(),
                i = this._boundingRect,
                s = o(e);
            return {
                left: t.left - i.left - s.marginLeft,
                top: t.top - i.top - s.marginTop,
                right: i.right - t.right - s.marginRight,
                bottom: i.bottom - t.bottom - s.marginBottom
            }
        }, r.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, r.prototype.bindResize = function() {
            this.isResizeBound || (t.bind(e, "resize", this), this.isResizeBound = !0)
        }, r.prototype.unbindResize = function() {
            this.isResizeBound && t.unbind(e, "resize", this), this.isResizeBound = !1
        }, r.prototype.onresize = function() {
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(function() {
                e.resize(), delete e.resizeTimeout
            }, 100)
        }, r.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, r.prototype.needsResizeLayout = function() {
            var e = o(this.element);
            return this.size && e && e.innerWidth !== this.size.innerWidth
        }, r.prototype.addItems = function(e) {
            var t = this._itemize(e);
            return t.length && (this.items = this.items.concat(t)), t
        }, r.prototype.appended = function(e) {
            var t = this.addItems(e);
            t.length && (this.layoutItems(t, !0), this.reveal(t))
        }, r.prototype.prepended = function(e) {
            var t = this._itemize(e);
            if (t.length) {
                var i = this.items.slice(0);
                this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i)
            }
        }, r.prototype.reveal = function(e) {
            this._emitCompleteOnItems("reveal", e);
            for (var t = e && e.length, i = 0; t && i < t; i++) {
                e[i].reveal()
            }
        }, r.prototype.hide = function(e) {
            this._emitCompleteOnItems("hide", e);
            for (var t = e && e.length, i = 0; t && i < t; i++) {
                e[i].hide()
            }
        }, r.prototype.revealItemElements = function(e) {
            var t = this.getItems(e);
            this.reveal(t)
        }, r.prototype.hideItemElements = function(e) {
            var t = this.getItems(e);
            this.hide(t)
        }, r.prototype.getItem = function(e) {
            for (var t = 0, i = this.items.length; t < i; t++) {
                var s = this.items[t];
                if (s.element === e) return s
            }
        }, r.prototype.getItems = function(e) {
            for (var t = [], i = 0, s = (e = n.makeArray(e)).length; i < s; i++) {
                var o = e[i],
                    r = this.getItem(o);
                r && t.push(r)
            }
            return t
        }, r.prototype.remove = function(e) {
            var t = this.getItems(e);
            if (this._emitCompleteOnItems("remove", t), t && t.length)
                for (var i = 0, s = t.length; i < s; i++) {
                    var o = t[i];
                    o.remove(), n.removeFrom(this.items, o)
                }
        }, r.prototype.destroy = function() {
            var e = this.element.style;
            e.height = "", e.position = "", e.width = "";
            for (var t = 0, i = this.items.length; t < i; t++) {
                this.items[t].destroy()
            }
            this.unbindResize();
            var s = this.element.outlayerGUID;
            delete p[s], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, r.data = function(e) {
            var t = (e = n.getQueryElement(e)) && e.outlayerGUID;
            return t && p[t]
        }, r.create = function(e, t) {
            function i() {
                r.apply(this, arguments)
            }
            return Object.create ? i.prototype = Object.create(r.prototype) : n.extend(i.prototype, r.prototype), (i.prototype.constructor = i).defaults = n.extend({}, r.defaults), n.extend(i.defaults, t), i.prototype.settings = {}, i.namespace = e, i.data = r.data, (i.Item = function() {
                s.apply(this, arguments)
            }).prototype = new s, n.htmlInit(i, e), l && l.bridget && l.bridget(e, i), i
        }, r.Item = s, r
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], t) : "object" == typeof exports ? module.exports = t(require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = t(e.Outlayer))
    }(window, function(e) {
        "use strict";

        function t() {
            e.Item.apply(this, arguments)
        }(t.prototype = new e.Item)._create = function() {
            this.id = this.layout.itemGUID++, e.Item.prototype._create.call(this), this.sortData = {}
        }, t.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var e = this.layout.options.getSortData,
                    t = this.layout._sorters;
                for (var i in e) {
                    var s = t[i];
                    this.sortData[i] = s(this.element, this)
                }
            }
        };
        var i = t.prototype.destroy;
        return t.prototype.destroy = function() {
            i.apply(this, arguments), this.css({
                display: ""
            })
        }, t
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof exports ? module.exports = t(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
    }(window, function(t, r) {
        "use strict";

        function n(e) {
            (this.isotope = e) && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
        }
        return function() {
            function e(e) {
                return function() {
                    return r.prototype[e].apply(this.isotope, arguments)
                }
            }
            for (var t = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], i = 0, s = t.length; i < s; i++) {
                var o = t[i];
                n.prototype[o] = e(o)
            }
        }(), n.prototype.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element);
            return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
        }, n.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, n.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, n.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, n.prototype.getSegmentSize = function(e, t) {
            var i = e + t,
                s = "outer" + t;
            if (this._getMeasurement(i, s), !this[i]) {
                var o = this.getFirstItemSize();
                this[i] = o && o[s] || this.isotope.size["inner" + t]
            }
        }, n.prototype.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, n.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, n.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, n.modes = {}, n.create = function(e, t) {
            function i() {
                n.apply(this, arguments)
            }
            return i.prototype = new n, t && (i.options = t), n.modes[i.prototype.namespace = e] = i
        }, n
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], t) : "object" == typeof exports ? module.exports = t(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : e.Masonry = t(e.Outlayer, e.getSize, e.fizzyUIUtils)
    }(window, function(e, c, d) {
        var t = e.create("masonry");
        return t.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var e = this.cols;
            for (this.colYs = []; e--;) this.colYs.push(0);
            this.maxY = 0
        }, t.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var e = this.items[0],
                    t = e && e.element;
                this.columnWidth = t && c(t).outerWidth || this.containerWidth
            }
            var i = this.columnWidth += this.gutter,
                s = this.containerWidth + this.gutter,
                o = s / i,
                r = i - s % i;
            o = Math[r && r < 1 ? "round" : "floor"](o), this.cols = Math.max(o, 1)
        }, t.prototype.getContainerWidth = function() {
            var e = this.options.isFitWidth ? this.element.parentNode : this.element,
                t = c(e);
            this.containerWidth = t && t.innerWidth
        }, t.prototype._getItemLayoutPosition = function(e) {
            e.getSize();
            var t = e.size.outerWidth % this.columnWidth,
                i = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
            i = Math.min(i, this.cols);
            for (var s = this._getColGroup(i), o = Math.min.apply(Math, s), r = d.indexOf(s, o), n = {
                    x: this.columnWidth * r,
                    y: o
                }, a = o + e.size.outerHeight, l = this.cols + 1 - s.length, c = 0; c < l; c++) this.colYs[r + c] = a;
            return n
        }, t.prototype._getColGroup = function(e) {
            if (e < 2) return this.colYs;
            for (var t = [], i = this.cols + 1 - e, s = 0; s < i; s++) {
                var o = this.colYs.slice(s, s + e);
                t[s] = Math.max.apply(Math, o)
            }
            return t
        }, t.prototype._manageStamp = function(e) {
            var t = c(e),
                i = this._getElementOffset(e),
                s = this.options.isOriginLeft ? i.left : i.right,
                o = s + t.outerWidth,
                r = Math.floor(s / this.columnWidth);
            r = Math.max(0, r);
            var n = Math.floor(o / this.columnWidth);
            n -= o % this.columnWidth ? 0 : 1, n = Math.min(this.cols - 1, n);
            for (var a = (this.options.isOriginTop ? i.top : i.bottom) + t.outerHeight, l = r; l <= n; l++) this.colYs[l] = Math.max(a, this.colYs[l])
        }, t.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var e = {
                height: this.maxY
            };
            return this.options.isFitWidth && (e.width = this._getContainerFitWidth()), e
        }, t.prototype._getContainerFitWidth = function() {
            for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
            return (this.cols - e) * this.columnWidth - this.gutter
        }, t.prototype.needsResizeLayout = function() {
            var e = this.containerWidth;
            return this.getContainerWidth(), e !== this.containerWidth
        }, t
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(e.Isotope.LayoutMode, e.Masonry)
    }(window, function(e, t) {
        "use strict";
        var i = e.create("masonry"),
            s = i.prototype._getElementOffset,
            o = i.prototype.layout,
            r = i.prototype._getMeasurement;
        (function(e, t) {
            for (var i in t) e[i] = t[i]
        })(i.prototype, t.prototype), i.prototype._getElementOffset = s, i.prototype.layout = o, i.prototype._getMeasurement = r;
        var n = i.prototype.measureColumns;
        i.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, n.call(this)
        };
        var a = i.prototype._manageStamp;
        return i.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, a.apply(this, arguments)
        }, i
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
    }(window, function(e) {
        "use strict";
        var t = e.create("fitRows");
        return t.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, t.prototype._getItemLayoutPosition = function(e) {
            e.getSize();
            var t = e.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && t + this.x > i && (this.x = 0, this.y = this.maxY);
            var s = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight), this.x += t, s
        }, t.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, t
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
    }(window, function(e) {
        "use strict";
        var t = e.create("vertical", {
            horizontalAlignment: 0
        });
        return t.prototype._resetLayout = function() {
            this.y = 0
        }, t.prototype._getItemLayoutPosition = function(e) {
            e.getSize();
            var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += e.size.outerHeight, {
                x: t,
                y: i
            }
        }, t.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, t
    }),
    function(n, a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(e, t, i, s, o, r) {
            return a(n, e, t, i, s, o, r)
        }) : "object" == typeof exports ? module.exports = a(n, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : n.Isotope = a(n, n.Outlayer, n.getSize, n.matchesSelector, n.fizzyUIUtils, n.Isotope.Item, n.Isotope.LayoutMode)
    }(window, function(e, s, t, i, r, o, n) {
        var a = e.jQuery,
            c = String.prototype.trim ? function(e) {
                return e.trim()
            } : function(e) {
                return e.replace(/^\s+|\s+$/g, "")
            },
            d = document.documentElement.textContent ? function(e) {
                return e.textContent
            } : function(e) {
                return e.innerText
            },
            p = s.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        p.Item = o, p.LayoutMode = n, p.prototype._create = function() {
            for (var e in this.itemGUID = 0, this._sorters = {}, this._getSorters(), s.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], n.modes) this._initLayoutMode(e)
        }, p.prototype.reloadItems = function() {
            this.itemGUID = 0, s.prototype.reloadItems.call(this)
        }, p.prototype._itemize = function() {
            for (var e = s.prototype._itemize.apply(this, arguments), t = 0, i = e.length; t < i; t++) {
                e[t].id = this.itemGUID++
            }
            return this._updateItemsSortData(e), e
        }, p.prototype._initLayoutMode = function(e) {
            var t = n.modes[e],
                i = this.options[e] || {};
            this.options[e] = t.options ? r.extend(t.options, i) : i, this.modes[e] = new t(this)
        }, p.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, p.prototype._layout = function() {
            var e = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), this._isLayoutInited = !0
        }, p.prototype.arrange = function(e) {
            function t() {
                s.reveal(i.needReveal), s.hide(i.needHide)
            }
            this.option(e), this._getIsInstant();
            var i = this._filter(this.items);
            this.filteredItems = i.matches;
            var s = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(t) : t(), this._sort(), this._layout()
        }, p.prototype._init = p.prototype.arrange, p.prototype._getIsInstant = function() {
            var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = e
        }, p.prototype._bindArrangeComplete = function() {
            function e() {
                t && i && s && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
            }
            var t, i, s, o = this;
            this.once("layoutComplete", function() {
                t = !0, e()
            }), this.once("hideComplete", function() {
                i = !0, e()
            }), this.once("revealComplete", function() {
                s = !0, e()
            })
        }, p.prototype._filter = function(e) {
            var t = this.options.filter;
            t = t || "*";
            for (var i = [], s = [], o = [], r = this._getFilterTest(t), n = 0, a = e.length; n < a; n++) {
                var l = e[n];
                if (!l.isIgnored) {
                    var c = r(l);
                    c && i.push(l), c && l.isHidden ? s.push(l) : c || l.isHidden || o.push(l)
                }
            }
            return {
                matches: i,
                needReveal: s,
                needHide: o
            }
        }, p.prototype._getFilterTest = function(t) {
            return a && this.options.isJQueryFiltering ? function(e) {
                return a(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return i(e.element, t)
            }
        }, p.prototype.updateSortData = function(e) {
            var t;
            e ? (e = r.makeArray(e), t = this.getItems(e)) : t = this.items, this._getSorters(), this._updateItemsSortData(t)
        }, p.prototype._getSorters = function() {
            var e = this.options.getSortData;
            for (var t in e) {
                var i = e[t];
                this._sorters[t] = l(i)
            }
        }, p.prototype._updateItemsSortData = function(e) {
            for (var t = e && e.length, i = 0; t && i < t; i++) {
                e[i].updateSortData()
            }
        };
        var l = function(e) {
            if ("string" != typeof e) return e;
            var t, i, s = c(e).split(" "),
                o = s[0],
                r = o.match(/^\[(.+)\]$/),
                n = r && r[1],
                a = (i = o, (t = n) ? function(e) {
                    return e.getAttribute(t)
                } : function(e) {
                    var t = e.querySelector(i);
                    return t && d(t)
                }),
                l = p.sortDataParsers[s[1]];
            return l ? function(e) {
                return e && l(a(e))
            } : function(e) {
                return e && a(e)
            }
        };
        p.sortDataParsers = {
            parseInt: function(e) {
                return parseInt(e, 10)
            },
            parseFloat: function(e) {
                return parseFloat(e)
            }
        }, p.prototype._sort = function() {
            var a, l, e = this.options.sortBy;
            if (e) {
                var t = [].concat.apply(e, this.sortHistory),
                    i = (a = t, l = this.options.sortAscending, function(e, t) {
                        for (var i = 0, s = a.length; i < s; i++) {
                            var o = a[i],
                                r = e.sortData[o],
                                n = t.sortData[o];
                            if (n < r || r < n) return (n < r ? 1 : -1) * ((void 0 !== l[o] ? l[o] : l) ? 1 : -1)
                        }
                        return 0
                    });
                this.filteredItems.sort(i), e != this.sortHistory[0] && this.sortHistory.unshift(e)
            }
        }, p.prototype._mode = function() {
            var e = this.options.layoutMode,
                t = this.modes[e];
            if (!t) throw new Error("No layout mode: " + e);
            return t.options = this.options[e], t
        }, p.prototype._resetLayout = function() {
            s.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, p.prototype._getItemLayoutPosition = function(e) {
            return this._mode()._getItemLayoutPosition(e)
        }, p.prototype._manageStamp = function(e) {
            this._mode()._manageStamp(e)
        }, p.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, p.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, p.prototype.appended = function(e) {
            var t = this.addItems(e);
            if (t.length) {
                var i = this._filterRevealAdded(t);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, p.prototype.prepended = function(e) {
            var t = this._itemize(e);
            if (t.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(t);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = t.concat(this.items)
            }
        }, p.prototype._filterRevealAdded = function(e) {
            var t = this._filter(e);
            return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
        }, p.prototype.insert = function(e) {
            var t = this.addItems(e);
            if (t.length) {
                var i, s, o = t.length;
                for (i = 0; i < o; i++) s = t[i], this.element.appendChild(s.element);
                var r = this._filter(t).matches;
                for (i = 0; i < o; i++) t[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; i < o; i++) delete t[i].isLayoutInstant;
                this.reveal(r)
            }
        };
        var u = p.prototype.remove;
        return p.prototype.remove = function(e) {
            e = r.makeArray(e);
            var t = this.getItems(e);
            u.call(this, e);
            var i = t && t.length;
            if (i)
                for (var s = 0; s < i; s++) {
                    var o = t[s];
                    r.removeFrom(this.filteredItems, o)
                }
        }, p.prototype.shuffle = function() {
            for (var e = 0, t = this.items.length; e < t; e++) {
                this.items[e].sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, p.prototype._noTransition = function(e) {
            var t = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = e.call(this);
            return this.options.transitionDuration = t, i
        }, p.prototype.getFilteredItemElements = function() {
            for (var e = [], t = 0, i = this.filteredItems.length; t < i; t++) e.push(this.filteredItems[t].element);
            return e
        }, p
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
    }(this, function() {
        function e() {}
        var t = e.prototype;
        return t.on = function(e, t) {
            if (e && t) {
                var i = this._events = this._events || {},
                    s = i[e] = i[e] || [];
                return -1 == s.indexOf(t) && s.push(t), this
            }
        }, t.once = function(e, t) {
            if (e && t) {
                this.on(e, t);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[e] = i[e] || [])[t] = !0, this
            }
        }, t.off = function(e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                var s = i.indexOf(t);
                return -1 != s && i.splice(s, 1), this
            }
        }, t.emitEvent = function(e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                var s = 0,
                    o = i[s];
                t = t || [];
                for (var r = this._onceEvents && this._onceEvents[e]; o;) {
                    var n = r && r[o];
                    n && (this.off(e, o), delete r[o]), o.apply(this, t), o = i[s += n ? 0 : 1]
                }
                return this
            }
        }, e
    }),
    function(t, i) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(e) {
            return i(t, e)
        }) : "object" == typeof module && module.exports ? module.exports = i(t, require("ev-emitter")) : t.imagesLoaded = i(t, t.EvEmitter)
    }(window, function(t, e) {
        function s(e, t) {
            for (var i in t) e[i] = t[i];
            return e
        }

        function o(e, t, i) {
            return this instanceof o ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = function(e) {
                var t = [];
                if (Array.isArray(e)) t = e;
                else if ("number" == typeof e.length)
                    for (var i = 0; i < e.length; i++) t.push(e[i]);
                else t.push(e);
                return t
            }(e), this.options = s({}, this.options), "function" == typeof t ? i = t : s(this.options, t), i && this.on("always", i), this.getImages(), n && (this.jqDeferred = new n.Deferred), void setTimeout(function() {
                this.check()
            }.bind(this))) : new o(e, t, i)
        }

        function i(e) {
            this.img = e
        }

        function r(e, t) {
            this.url = e, this.element = t, this.img = new Image
        }
        var n = t.jQuery,
            a = t.console;
        (o.prototype = Object.create(e.prototype)).options = {}, o.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, o.prototype.addElementImages = function(e) {
            "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
            var t = e.nodeType;
            if (t && l[t]) {
                for (var i = e.querySelectorAll("img"), s = 0; s < i.length; s++) {
                    var o = i[s];
                    this.addImage(o)
                }
                if ("string" == typeof this.options.background) {
                    var r = e.querySelectorAll(this.options.background);
                    for (s = 0; s < r.length; s++) {
                        var n = r[s];
                        this.addElementBackgroundImages(n)
                    }
                }
            }
        };
        var l = {
            1: !0,
            9: !0,
            11: !0
        };
        return o.prototype.addElementBackgroundImages = function(e) {
            var t = getComputedStyle(e);
            if (t)
                for (var i = /url\((['"])?(.*?)\1\)/gi, s = i.exec(t.backgroundImage); null !== s;) {
                    var o = s && s[2];
                    o && this.addBackground(o, e), s = i.exec(t.backgroundImage)
                }
        }, o.prototype.addImage = function(e) {
            var t = new i(e);
            this.images.push(t)
        }, o.prototype.addBackground = function(e, t) {
            var i = new r(e, t);
            this.images.push(i)
        }, o.prototype.check = function() {
            function t(e, t, i) {
                setTimeout(function() {
                    s.progress(e, t, i)
                })
            }
            var s = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
                e.once("progress", t), e.check()
            }) : void this.complete()
        }, o.prototype.progress = function(e, t, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
        }, o.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var t = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[t](this)
            }
        }, (i.prototype = Object.create(e.prototype)).check = function() {
            return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, i.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, i.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
        }, i.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, i.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, i.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, i.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, (r.prototype = Object.create(i.prototype)).check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, r.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, r.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
        }, o.makeJQueryPlugin = function(e) {
            (e = e || t.jQuery) && ((n = e).fn.imagesLoaded = function(e, t) {
                return new o(this, e, t).jqDeferred.promise(n(this))
            })
        }, o.makeJQueryPlugin(), o
    }),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : jQuery && !jQuery.fn.hoverIntent && e(jQuery)
    }(function(l) {
        "use strict";
        var o, r, n = {
                interval: 100,
                sensitivity: 6,
                timeout: 0
            },
            c = 0,
            d = function(e) {
                o = e.pageX, r = e.pageY
            },
            p = function(e, t, i, s) {
                return Math.sqrt((i.pX - o) * (i.pX - o) + (i.pY - r) * (i.pY - r)) < s.sensitivity ? (t.off("mousemove.hoverIntent" + i.namespace, d), delete i.timeoutId, i.isActive = !0, delete i.pX, delete i.pY, s.over.apply(t[0], [e])) : (i.pX = o, i.pY = r, void(i.timeoutId = setTimeout(function() {
                    p(e, t, i, s)
                }, s.interval)))
            };
        l.fn.hoverIntent = function(e, t, i) {
            var s = c++,
                a = l.extend({}, n);
            a = l.isPlainObject(e) ? l.extend(a, e) : l.isFunction(t) ? l.extend(a, {
                over: e,
                out: t,
                selector: i
            }) : l.extend(a, {
                over: e,
                out: e,
                selector: t
            });
            var o = function(e) {
                var o = l.extend({}, e),
                    r = l(this),
                    t = r.data("hoverIntent");
                t || r.data("hoverIntent", t = {});
                var n = t[s];
                n || (t[s] = n = {
                    id: s
                }), n.timeoutId && (n.timeoutId = clearTimeout(n.timeoutId));
                var i = n.namespace = ".hoverIntent" + s;
                if ("mouseenter" === e.type) {
                    if (n.isActive) return;
                    n.pX = o.pageX, n.pY = o.pageY, r.on("mousemove.hoverIntent" + i, d), n.timeoutId = setTimeout(function() {
                        p(o, r, n, a)
                    }, a.interval)
                } else {
                    if (!n.isActive) return;
                    r.off("mousemove.hoverIntent" + i, d), n.timeoutId = setTimeout(function() {
                        var e, t, i, s;
                        e = o, t = r, i = n, s = a.out, delete t.data("hoverIntent")[i.id], s.apply(t[0], [e])
                    }, a.timeout)
                }
            };
            return this.on({
                "mouseenter.hoverIntent": o,
                "mouseleave.hoverIntent": o
            }, a.selector)
        }
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
    }(function(u) {
        function t(e) {
            var t = e || window.event,
                i = v.call(arguments, 1),
                s = 0,
                o = 0,
                r = 0,
                n = 0,
                a = 0,
                l = 0;
            if ((e = u.event.fix(t)).type = "mousewheel", "detail" in t && (r = -1 * t.detail), "wheelDelta" in t && (r = t.wheelDelta), "wheelDeltaY" in t && (r = t.wheelDeltaY), "wheelDeltaX" in t && (o = -1 * t.wheelDeltaX), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (o = -1 * r, r = 0), s = 0 === r ? o : r, "deltaY" in t && (s = r = -1 * t.deltaY), "deltaX" in t && (o = t.deltaX, 0 === r && (s = -1 * o)), 0 !== r || 0 !== o) {
                if (1 === t.deltaMode) {
                    var c = u.data(this, "mousewheel-line-height");
                    s *= c, r *= c, o *= c
                } else if (2 === t.deltaMode) {
                    var d = u.data(this, "mousewheel-page-height");
                    s *= d, r *= d, o *= d
                }
                if (n = Math.max(Math.abs(r), Math.abs(o)), (!g || n < g) && (f(t, g = n) && (g /= 40)), f(t, n) && (s /= 40, o /= 40, r /= 40), s = Math[1 <= s ? "floor" : "ceil"](s / g), o = Math[1 <= o ? "floor" : "ceil"](o / g), r = Math[1 <= r ? "floor" : "ceil"](r / g), y.settings.normalizeOffset && this.getBoundingClientRect) {
                    var p = this.getBoundingClientRect();
                    a = e.clientX - p.left, l = e.clientY - p.top
                }
                return e.deltaX = o, e.deltaY = r, e.deltaFactor = g, e.offsetX = a, e.offsetY = l, e.deltaMode = 0, i.unshift(e, s, o, r), m && clearTimeout(m), m = setTimeout(h, 200), (u.event.dispatch || u.event.handle).apply(this, i)
            }
        }

        function h() {
            g = null
        }

        function f(e, t) {
            return y.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
        }
        var m, g, e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            i = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            v = Array.prototype.slice;
        if (u.event.fixHooks)
            for (var s = e.length; s;) u.event.fixHooks[e[--s]] = u.event.mouseHooks;
        var y = u.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var e = i.length; e;) this.addEventListener(i[--e], t, !1);
                else this.onmousewheel = t;
                u.data(this, "mousewheel-line-height", y.getLineHeight(this)), u.data(this, "mousewheel-page-height", y.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var e = i.length; e;) this.removeEventListener(i[--e], t, !1);
                else this.onmousewheel = null;
                u.removeData(this, "mousewheel-line-height"), u.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(e) {
                var t = u(e),
                    i = t["offsetParent" in u.fn ? "offsetParent" : "parent"]();
                return i.length || (i = u("body")), parseInt(i.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
            },
            getPageHeight: function(e) {
                return u(e).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        u.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e)
            }
        })
    }),
    function(S, _, x, P, e) {
        S.fn.multiscroll = function(u) {
            var s = S.fn.multiscroll;
            u = S.extend({
                verticalCentered: !0,
                scrollingSpeed: 700,
                easing: "easeInQuart",
                menu: !1,
                sectionsColor: [],
                anchors: [],
                navigation: !1,
                navigationPosition: "right",
                navigationColor: "#000",
                navigationTooltips: [],
                loopBottom: !1,
                loopTop: !1,
                css3: !1,
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                normalScrollElements: null,
                keyboardScrolling: !0,
                touchSensitivity: 5,
                sectionSelector: ".ms-section",
                leftSelector: ".ms-left",
                rightSelector: ".ms-right",
                afterLoad: null,
                onLeave: null,
                afterRender: null,
                afterResize: null
            }, u);
            var h = 600,
                i = "ontouchstart" in _ || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints;
            ".ms-right" !== u.rightSelector && S(u.rightSelector).addClass("ms-right"), ".ms-left" !== u.leftSelector && S(u.leftSelector).addClass("ms-left");
            var f, o, m = S(".ms-left").find(".ms-section").length,
                g = !1;
            S(_).height();

            function e() {
                t(), S.isFunction(u.afterResize) && u.afterResize.call(this)
            }

            function t() {
                if (S(".multiscroll").hasClass("split")) {
                    var e = S(".ms-right").find(".ms-section.active").position().top - S(".ms-right-container").position().top;
                    v(S(".ms-left"), "translate3d(0px, -" + S(".ms-left").find(".ms-section.active").position().top + "px, 0px)", !1), v(S(".ms-right"), "translate3d(0px, -" + e + "px, 0px)", !1)
                } else v(S(".ms-left"), "translate3d(0px, -" + S(".ms-left").find(".ms-section.active").position().top + "px, 0px)", !1), v(S(".ms-right"), "translate3d(0px, -" + S(".ms-right").find(".ms-section.active").position().top + "px, 0px)", !1)
            }

            function r(e) {
                var t = e.index(),
                    i = S(".ms-right").find(".ms-section").eq(m - 1 - t),
                    s = e.data("anchor"),
                    o = S(".ms-left .ms-section.active").index() + 1,
                    r = function(e) {
                        var t = S(".ms-left .ms-section.active").index(),
                            i = e.index();
                        if (i < t) return "up";
                        return "down"
                    }(e);
                g = !0;
                var n = e.position().top,
                    a = i.position().top;
                i.addClass("active").siblings().removeClass("active"), e.addClass("active").siblings().removeClass("active"),
                    function(e) {
                        u.anchors.length && (location.hash = e);
                        y()
                    }(s), S.isFunction(u.onLeave) && u.onLeave.call(this, o, 1 == o && "down" == r ? m : o == m && "up" == r ? 1 : t + 1, r);
                var l, c, d = "translate3d(0px, -" + n + "px, 0px)",
                    p = "translate3d(0px, -" + a + "px, 0px)";
                v(S(".ms-left"), d, !0), v(S(".ms-right"), p, !0), setTimeout(function() {
                    S.isFunction(u.afterLoad) && u.afterLoad.call(this, s, t + 1), setTimeout(function() {
                        g = !1
                    }, h)
                }, u.scrollingSpeed), lastScrolledDestiny = s, l = s, u.menu && (S(u.menu).find(".active").removeClass("active"), S(u.menu).find('[data-menuanchor="' + l + '"]').addClass("active")), c = t, f && (S("#multiscroll-nav").find(".active").removeClass("active"), S("#multiscroll-nav").find("a:eq(" + c + ")").addClass("active"))
            }

            function n() {
                x.addEventListener ? (x.addEventListener("mousewheel", a, !1), x.addEventListener("wheel", a, !1)) : x.attachEvent("onmousewheel", a)
            }

            function a(e) {
                e = _.event || e;
                var t = P.max(-1, P.min(1, e.wheelDelta || -e.deltaY || -e.detail));
                return g || (t < 0 ? s.moveSectionDown() : s.moveSectionUp()), !1
            }

            function v(e, t, i) {
                var s;
                e.toggleClass("ms-easing", i), e.css({
                    "-webkit-transform": s = t,
                    "-moz-transform": s,
                    "-ms-transform": s,
                    transform: s
                })
            }

            function y() {
                var e = S(".ms-left .ms-section.active"),
                    t = e.data("anchor"),
                    i = e.index(),
                    s = String(i);
                u.anchors.length && (s = t), s = s.replace("/", "-").replace("#", "");
                var o = new RegExp("\\b\\s?ms-viewing-[^\\s]+\\b", "g");
                S("body")[0].className = S("body")[0].className.replace(o, "")
            }
            n(), i && (MSPointer = b(), S(x).off("touchstart " + MSPointer.down).on("touchstart " + MSPointer.down, T), S(x).off("touchmove " + MSPointer.move).on("touchmove " + MSPointer.move, d)), f = S("#multiscroll-nav"), S(".ms-left .ms-section, .ms-right .ms-section").each(function() {
                var e = S(this),
                    t = e.index();
                if (void 0 !== u.anchors[t] && e.attr("data-anchor", u.anchors[t]), e.closest(".ms-left").length && u.navigation) {
                    var i = "";
                    u.anchors.length && (i = u.anchors[t]);
                    u.navigationTooltips[t];
                    f && (e.data("title") ? f.append('<a href="#' + i + '"><em>' + e.data("title") + "</em></a>") : f.append('<a href="#' + i + '"><em></em></a>'))
                }
            }), f && f.find("a:eq(0)").addClass("active"), S(".multiscroll").hasClass("split") || S(".ms-right").html(S(".ms-right").find(".ms-section").get().reverse()), !S(".multiscroll").hasClass("split") || 780 < S(_).width() ? S(".ms-right").find(".ms-section").last().addClass("active") : S(".ms-right").find(".ms-section").first().addClass("active"), S(".ms-left").find(".ms-section").first().addClass("active"), S.isFunction(u.afterRender) && u.afterRender.call(this), t(), y(), S(x).keydown(function(e) {
                clearTimeout(o);
                var t = S(x.activeElement);
                if (!t.is("textarea") && !t.is("input") && !t.is("select") && u.keyboardScrolling) {
                    var i = e.which; - 1 < S.inArray(i, [40, 38, 32, 33, 34]) && e.preventDefault(), o = setTimeout(function() {
                        ! function(e) {
                            var t = e.shiftKey;
                            switch (e.which) {
                                case 38:
                                case 33:
                                    s.moveSectionUp();
                                    break;
                                case 32:
                                    if (t) {
                                        s.moveSectionUp();
                                        break
                                    }
                                case 40:
                                case 34:
                                    s.moveSectionDown();
                                    break;
                                case 36:
                                    s.moveTo(1);
                                    break;
                                case 35:
                                    s.moveTo(S(".ms-left .ms-section").length);
                                    break;
                                default:
                                    ;
                            }
                        }(e)
                    }, 150)
                }
            }), S(x).mousedown(function(e) {
                if (1 == e.button) return e.preventDefault(), !1
            }), f && S(x).on("click", "#multiscroll-nav a", function(e) {
                e.preventDefault();
                var t = S(this).index();
                r(S(".ms-left .ms-section").eq(t))
            }), u.normalScrollElements && (S(x).on("mouseenter", u.normalScrollElements, function() {
                s.setMouseWheelScrolling(!1)
            }), S(x).on("mouseleave", u.normalScrollElements, function() {
                s.setMouseWheelScrolling(!0)
            })), S(_).on("resize", e), s.moveSectionUp = function() {
                var e = S(".ms-left .ms-section.active").prev(".ms-section");
                !e.length && u.loopTop && (e = S(".ms-left .ms-section").last()), e.length && r(e)
            }, s.moveSectionDown = function() {
                var e = S(".ms-left .ms-section.active").next(".ms-section");
                !e.length && u.loopBottom && (e = S(".ms-left .ms-section").first()), e.length && r(e)
            }, s.moveTo = function(e) {
                r(isNaN(e) ? S('.ms-left [data-anchor="' + e + '"]') : S(".ms-left .ms-section").eq(e - 1))
            }, s.setKeyboardScrolling = function(e) {
                u.keyboardScrolling = e
            }, s.setMouseWheelScrolling = function(e) {
                e ? n() : x.addEventListener ? (x.removeEventListener("mousewheel", a, !1), x.removeEventListener("wheel", a, !1)) : x.detachEvent("onmousewheel", a)
            }, s.setScrollingSpeed = function(e) {
                u.scrollingSpeed = e
            };
            var l = 0,
                c = 0;

            function d(e) {
                var t = e.originalEvent;
                if (p(t)) {
                    e.preventDefault();
                    S(".ms-left .ms-section.active");
                    if (!g) {
                        var i = w(t);
                        c = i.y, i.x, P.abs(l - c) > S(_).height() / 100 * u.touchSensitivity && (c < l ? s.moveSectionDown() : l < c && s.moveSectionUp())
                    }
                }
            }

            function p(e) {
                return void 0 === e.pointerType || "mouse" != e.pointerType
            }

            function T(e) {
                var t = e.originalEvent;
                if (p(t)) {
                    var i = w(t);
                    l = i.y, i.x
                }
            }

            function b() {
                return _.PointerEvent ? {
                    down: "pointerdown",
                    move: "pointermove"
                } : {
                    down: "MSPointerDown",
                    move: "MSPointerMove"
                }
            }

            function w(e) {
                var t = [];
                return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, i && p(e) && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
            }
            s.destroy = function() {
                s.setKeyboardScrolling(!1), s.setMouseWheelScrolling(!1), S(_).off("hashchange", hashChangeHandler).off("resize", e), f && S(x).off("mouseenter", "#multiscroll-nav").off("mouseleave", "#multiscroll-nav").off("click", "#multiscroll-nav a")
            }, s.build = function() {
                s.setKeyboardScrolling(!0), s.setMouseWheelScrolling(!0), S(_).on("hashchange", hashChangeHandler).on("resize", e), f && S(x).on("mouseenter", "#multiscroll-nav").on("mouseleave", "#multiscroll-nav").on("click", "#multiscroll-nav a")
            }
        }
    }(jQuery, window, document, Math),
    function(u, e, t, i) {
        var s = "panr",
            o = {
                moveTarget: !1,
                sensitivity: 20,
                scale: !1,
                scaleOnHover: !0,
                scaleTo: 1.05,
                scaleDuration: .25,
                panY: !0,
                panX: !0,
                panDuration: 1.25,
                resetPanOnMouseLeave: !0,
                onEnter: function() {},
                onLeave: function() {}
            };

        function r(e, t) {
            this.element = e, this.settings = u.extend({}, o, t), this._defaults = o, this._name = s, this.init()
        }
        r.prototype = {
            init: function() {
                var t, i, s, o, r, n, a = this.settings,
                    l = u(this.element),
                    c = l.width(),
                    d = l.height(),
                    e = l.width() - a.sensitivity,
                    p = (l.height(), a.sensitivity, (c - e) / e);
                (a.scale || !a.scaleOnHover && a.scale) && TweenMax.set(l, {
                    scale: a.scaleTo,
                    ease: Quart.easeOut
                }), "string" === jQuery.type(a.moveTarget) && (a.moveTarget = u(this.element).parent(a.moveTarget)), a.moveTarget || (a.moveTarget = u(this.element)), a.moveTarget.on("mousemove", function(e) {
                    t = e.pageX - l.offset().left - c / 2, i = e.pageY - l.offset().top - d / 2, a.panX && (o = {
                        x: -p * t
                    }), a.panY && (r = {
                        y: -p * i
                    }), s = u.extend({}, o, r, {
                        ease: new BezierEasing(.77, 0, .175, 1)
                    }), TweenMax.to(l, a.panDuration, s)
                }), a.moveTarget.on("mouseenter", function(e) {
                    a.scaleOnHover && TweenMax.to(l, a.scaleDuration, {
                        scale: a.scaleTo,
                        ease: new BezierEasing(.77, 0, .175, 1)
                    }), a.onEnter(l)
                }), a.scale && (a.scaleOnHover || a.scale) ? a.resetPanOnMouseLeave && (n = {
                    scale: 1,
                    x: 0,
                    y: 0,
                    ease: new BezierEasing(.77, 0, .175, 1)
                }) : n = {
                    scale: 1,
                    x: 0,
                    y: 0,
                    ease: new BezierEasing(.77, 0, .175, 1)
                }, a.moveTarget.on("mouseleave", function(e) {
                    TweenMax.to(l, a.scaleDuration, n), a.onLeave(l)
                })
            }
        }, u.fn[s] = function(e) {
            return this.each(function() {
                u.data(this, "plugin_" + s) || u.data(this, "plugin_" + s, new r(this, e))
            })
        }
    }(jQuery, window, document),
    function(z) {
        "use strict";
        var O = "selectric",
            B = "Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive Above Scroll Group GroupLabel",
            L = ".sl",
            R = {
                onChange: function(e) {
                    z(e).change()
                },
                maxHeight: 300,
                keySearchTimeout: 500,
                arrowButtonMarkup: '<b class="button">&#x25be;</b>',
                disableOnMobile: !0,
                openOnHover: !1,
                hoverIntentTimeout: 500,
                expandToItemText: !1,
                responsive: !1,
                preventWindowScroll: !0,
                inheritOriginalWidth: !1,
                allowWrap: !0,
                customClass: {
                    prefix: O,
                    camelCase: !1,
                    overwrite: !0
                },
                optionsItemBuilder: "{text}",
                labelBuilder: "{text}"
            },
            o = {
                add: function(e, t, i) {
                    this[e] || (this[e] = {}), this[e][t] = i
                },
                remove: function(e, t) {
                    delete this[e][t]
                }
            },
            $ = {
                replaceDiacritics: function(e) {
                    for (var t = "40-46 50-53 54-57 62-70 71-74 61 47 77".replace(/\d+/g, "\\3$&").split(" "), i = t.length; i--;) e = e.toLowerCase().replace(RegExp("[" + t[i] + "]", "g"), "aeiouncy".charAt(i));
                    return e
                },
                format: function(e) {
                    var s = arguments;
                    return ("" + e).replace(/{(\d+|(\w+))}/g, function(e, t, i) {
                        return i && s[1] ? s[1][i] : s[t]
                    })
                },
                nextEnabledItem: function(e, t) {
                    for (; e[t = (t + 1) % e.length].disabled;);
                    return t
                },
                previousEnabledItem: function(e, t) {
                    for (; e[t = (0 < t ? t : e.length) - 1].disabled;);
                    return t
                },
                toDash: function(e) {
                    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                },
                triggerCallback: function(e, t) {
                    var i = t.element,
                        s = t.options["on" + e];
                    z.isFunction(s) && s.call(i, i, t), o[e] && z.each(o[e], function() {
                        this.call(i, i, t)
                    }), z(i).trigger(O + "-" + $.toDash(e), t)
                }
            },
            N = z(document),
            t = z(window),
            i = function(r, e) {
                function n() {
                    k.items = [];
                    var e = E.children(),
                        o = "<ul>",
                        t = E.find("option"),
                        i = t.index(t.filter(":selected")),
                        r = 0;
                    S = w = ~i ? i : 0, (C = e.length) && (e.each(function() {
                        function e() {
                            var e = z(this),
                                t = e.html(),
                                i = e.prop("disabled"),
                                s = k.options.optionsItemBuilder;
                            k.items[r] = {
                                element: e,
                                value: e.val(),
                                text: t,
                                slug: $.replaceDiacritics(t),
                                disabled: i
                            }, o += $.format('<li data-index="{1}" class="{2}">{3}</li>', r, z.trim([r == S ? "selected" : "", r == C - 1 ? "last" : "", i ? "disabled" : ""].join(" ")), z.isFunction(s) ? s(k.items[r], e, r) : $.format(s, k.items[r])), r++
                        }
                        var t = z(this);
                        if (t.is("optgroup")) {
                            var i = t.prop("disabled"),
                                s = t.children();
                            o += $.format('<ul class="{1}"><li class="{2}">{3}</li>', z.trim([k.classes.group, i ? "disabled" : "", t.prop("class")].join(" ")), k.classes.grouplabel, t.prop("label")), i && s.prop("disabled", !0), s.each(e), o += "</ul>"
                        } else e.call(t)
                    }), m.append(g.html(o + "</ul>")), y.html(z.isFunction(A) ? A(k.items[S]) : $.format(A, k.items[S]))), v.add(E).add(T).add(f).off(L), T.prop("class", [k.classes.wrapper, k.options.customClass.overwrite ? E.prop("class").replace(/\S+/g, k.options.customClass.prefix + "-$&") : E.prop("class"), k.options.responsive ? k.classes.responsive : ""].join(" ")), E.prop("disabled") ? (T.addClass(k.classes.disabled), f.prop("disabled", !0)) : (D = !0, T.removeClass(k.classes.disabled).on("mouseenter" + L + " mouseleave" + L, function(e) {
                        z(this).toggleClass(k.classes.hover), k.options.openOnHover && (clearTimeout(k.closeTimer), "mouseleave" == e.type ? k.closeTimer = setTimeout(d, k.options.hoverIntentTimeout) : l())
                    }), v.on("click" + L, function(e) {
                        I ? d() : l(e)
                    }), f.prop({
                        tabindex: H,
                        disabled: !1
                    }).on("keypress" + L, s).on("keydown" + L, function(e) {
                        s(e), clearTimeout(k.resetStr), k.resetStr = setTimeout(function() {
                            f.val("")
                        }, k.options.keySearchTimeout);
                        var t = e.keyCode || e.which;
                        if (36 < t && t < 41) {
                            if (!k.options.allowWrap && (t < 39 && 0 == w || 38 < t && w + 1 == k.items.length)) return;
                            p($[(t < 39 ? "previous" : "next") + "EnabledItem"](k.items, w))
                        }
                    }).on("focusin" + L, function(e) {
                        f.one("blur", function() {
                            f.blur()
                        }), I || l(e)
                    }).on("oninput" in f[0] ? "input" : "keyup", function() {
                        f.val().length && z.each(k.items, function(e, t) {
                            return RegExp("^" + f.val(), "i").test(t.slug) && !t.disabled ? (p(e), !1) : void 0
                        })
                    }), E.prop("tabindex", !1), b = z("li", m.removeAttr("style")).on({
                        mousedown: function(e) {
                            e.preventDefault(), e.stopPropagation()
                        },
                        click: function() {
                            return p(z(this).data("index"), !0), !1
                        }
                    }).filter("[data-index]")), $.triggerCallback("Init", k)
                }

                function a() {
                    $.triggerCallback("Refresh", k), n()
                }

                function s(e) {
                    var t = e.keyCode || e.which;
                    13 == t && e.preventDefault(), /^(9|13|27)$/.test(t) && (e.stopPropagation(), p(w, !0))
                }

                function l(e) {
                    var t, i, s, o;
                    $.triggerCallback("BeforeOpen", k), e && (e.preventDefault(), e.stopPropagation()), D && (t = m.closest(":visible").children(":hidden").addClass(k.classes.tempshow), i = k.options.maxHeight, s = m.outerWidth(), o = v.outerWidth() - (s - m.width()), !k.options.expandToItemText || s < o ? P = o : (m.css("overflow", "scroll"), T.width(9e4), P = m.width(), m.css("overflow", ""), T.width("")), m.width(P).height() > i && m.height(i), t.removeClass(k.classes.tempshow), z("." + k.classes.hideselect, "." + k.classes.open).children()[O]("close"), I = !0, _ = m.outerHeight(), x = m.height(), T.addClass(k.classes.open), f.val("").is(":focus") || f.focus(), N.on("click" + L, d).on("scroll" + L, c), c(), k.options.preventWindowScroll && N.on("mousewheel" + L + " DOMMouseScroll" + L, "." + k.classes.scroll, function(e) {
                        var t = e.originalEvent,
                            i = z(this).scrollTop(),
                            s = 0;
                        "detail" in t && (s = -1 * t.detail), "wheelDelta" in t && (s = t.wheelDelta), "wheelDeltaY" in t && (s = t.wheelDeltaY), "deltaY" in t && (s = -1 * t.deltaY), (i == this.scrollHeight - x && s < 0 || 0 == i && 0 < s) && e.preventDefault()
                    }), u(w), $.triggerCallback("Open", k))
                }

                function c() {
                    T.toggleClass(k.classes.above, T.offset().top + T.outerHeight() + _ > t.scrollTop() + t.height())
                }

                function d() {
                    if ($.triggerCallback("BeforeClose", k), S != w) {
                        $.triggerCallback("BeforeChange", k);
                        var e = k.items[w].text;
                        E.prop("selectedIndex", S = w).data("value", e), y.html(z.isFunction(A) ? A(k.items[w]) : $.format(A, k.items[w])), $.triggerCallback("Change", k)
                    }
                    N.off(L), T.removeClass(k.classes.open), I = !1, $.triggerCallback("Close", k)
                }

                function p(e, t) {
                    null != e && (k.items[e].disabled || (b.removeClass("selected").eq(w = e).addClass("selected"), u(e), t && d()))
                }

                function u(e) {
                    var t = b.eq(e).outerHeight(),
                        i = b[e].offsetTop,
                        s = g.scrollTop(),
                        o = i + 2 * t;
                    g.scrollTop(s + _ < o ? o - _ : i - t < s ? i - t : s)
                }

                function h(e) {
                    D && (m.add(v).add(f).remove(), !e && E.removeData(O).removeData("value"), E.prop("tabindex", H).off(L).off(M).unwrap().unwrap(), D = !1)
                }
                var f, m, g, v, y, T, b, w, S, _, x, P, C, M, A, k = this,
                    E = z(r),
                    I = !1,
                    D = !1,
                    G = /android|ip(hone|od|ad)/i.test(navigator.userAgent),
                    H = E.prop("tabindex");
                ! function e(t) {
                    if (k.options = z.extend(!0, {}, R, k.options, t), k.classes = {}, k.element = r, $.triggerCallback("BeforeInit", k), k.options.disableOnMobile && G) k.disableOnMobile = !0;
                    else {
                        h(!0);
                        var s = k.options.customClass,
                            i = B.split(" "),
                            o = E.width();
                        z.each(i, function(e, t) {
                            var i = s.prefix + t;
                            k.classes[t.toLowerCase()] = s.camelCase ? i : $.toDash(i)
                        }), f = z("<input/>", {
                            class: k.classes.input,
                            readonly: G
                        }), m = z("<div/>", {
                            class: k.classes.items,
                            tabindex: -1
                        }), g = z("<div/>", {
                            class: k.classes.scroll
                        }), v = z("<div/>", {
                            class: s.prefix,
                            html: k.options.arrowButtonMarkup
                        }), y = z('<p class="label"/>'), T = E.wrap("<div>").parent().append(v.prepend(y), m, f), M = {
                            open: l,
                            close: d,
                            destroy: h,
                            refresh: a,
                            init: e
                        }, E.on(M).wrap('<div class="' + k.classes.hideselect + '">'), z.extend(k, M), A = k.options.labelBuilder, k.options.inheritOriginalWidth && 0 < o && T.width(o), n()
                    }
                }(e)
            };
        z.fn[O] = function(t) {
            return this.each(function() {
                var e = z.data(this, O);
                e && !e.disableOnMobile ? "" + t === t && e[t] ? e[t]() : e.init(t) : z.data(this, O, new i(this, t))
            })
        }, z.fn[O].hooks = o
    }(jQuery),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(e.jQuery)
    }(this, function(h) {
        "use strict";
        var f = "vide",
            o = {
                volume: 1,
                playbackRate: 1,
                muted: !0,
                loop: !0,
                playsinline: "",
                autoplay: !0,
                position: "50% 50%",
                posterType: "detect",
                resizing: !0,
                bgColor: "transparent",
                className: ""
            },
            m = "Not implemented";

        function r(e) {
            var t, i, s, o, r, n, a, l = {};
            for (a = 0, n = (r = e.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(",")).length; a < n && (-1 === (i = r[a]).search(/^(http|https|ftp):\/\//) && -1 !== i.search(":")); a++) t = i.indexOf(":"), s = i.substring(0, t), (o = i.substring(t + 1)) || (o = void 0), "string" == typeof o && (o = "true" === o || "false" !== o && o), "string" == typeof o && (o = isNaN(o) ? o : +o), l[s] = o;
            return null == s && null == o ? e : l
        }

        function s(e, t, i) {
            if (this.$element = h(e), "string" == typeof t && (t = r(t)), i ? "string" == typeof i && (i = r(i)) : i = {}, "string" == typeof t) t = t.replace(/\.\w*$/, "");
            else if ("object" == typeof t)
                for (var s in t) t.hasOwnProperty(s) && (t[s] = t[s].replace(/\.\w*$/, ""));
            this.settings = h.extend({}, o, i), this.path = t;
            try {
                this.init()
            } catch (e) {
                if (e.message !== m) throw e
            }
        }
        s.prototype.init = function() {
            var e, t, i, s, o, r = this,
                n = r.path,
                a = n,
                l = "",
                c = r.$element,
                d = r.settings,
                p = function(e) {
                    var t, i, s, o = (e = "" + e).split(/\s+/),
                        r = "50%",
                        n = "50%";
                    for (s = 0, t = o.length; s < t; s++) "left" === (i = o[s]) ? r = "0%" : "right" === i ? r = "100%" : "top" === i ? n = "0%" : "bottom" === i ? n = "100%" : "center" === i ? 0 === s ? r = "50%" : n = "50%" : 0 === s ? r = i : n = i;
                    return {
                        x: r,
                        y: n
                    }
                }(d.position),
                u = d.posterType;
            t = r.$wrapper = h("<div>").addClass(d.className).css({
                position: "absolute",
                "z-index": 0,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                overflow: "hidden",
                "-webkit-background-size": "cover",
                "-moz-background-size": "cover",
                "-o-background-size": "cover",
                "background-size": "cover",
                "background-color": d.bgColor,
                "background-repeat": "no-repeat",
                "background-position": p.x + " " + p.y
            }), "object" == typeof n && (n.poster ? a = n.poster : n.mp4 ? a = n.mp4 : n.webm ? a = n.webm : n.ogv && (a = n.ogv)), "detect" === u ? (s = function(e) {
                t.css("background-image", "url(" + e + ")")
            }, o = function() {
                s(this.src)
            }, h('<img src="' + (i = a) + '.gif">').on("load", o), h('<img src="' + i + '.jpg">').on("load", o), h('<img src="' + i + '.jpeg">').on("load", o), h('<img src="' + i + '.png">').on("load", o)) : "none" !== u && t.css("background-image", "url(" + a + "." + u + ")"), "static" === c.css("position") && c.css("position", "relative"), c.prepend(t), "object" == typeof n ? (n.mp4 && (l += '<source src="' + n.mp4 + '.mp4" type="video/mp4">'), n.webm && (l += '<source src="' + n.webm + '.webm" type="video/webm">'), n.ogv && (l += '<source src="' + n.ogv + '.ogv" type="video/ogg">'), e = r.$video = h("<video>" + l + "</video>")) : e = r.$video = h('<video><source src="' + n + '.mp4" type="video/mp4"><source src="' + n + '.webm" type="video/webm"><source src="' + n + '.ogv" type="video/ogg"></video>');
            try {
                e.prop({
                    autoplay: d.autoplay,
                    loop: d.loop,
                    volume: d.volume,
                    muted: d.muted,
                    defaultMuted: d.muted,
                    playbackRate: d.playbackRate,
                    defaultPlaybackRate: d.playbackRate
                })
            } catch (e) {
                throw new Error(m)
            }
            e.attr("playsinline", d.playsinline), e.css({
                margin: "auto",
                position: "absolute",
                "z-index": 0,
                top: p.y,
                left: p.x,
                "-webkit-transform": "translate(-" + p.x + ", -" + p.y + ")",
                "-ms-transform": "translate(-" + p.x + ", -" + p.y + ")",
                "-moz-transform": "translate(-" + p.x + ", -" + p.y + ")",
                transform: "translate(-" + p.x + ", -" + p.y + ")",
                visibility: "hidden",
                opacity: 0
            }).one("canplaythrough." + f, function() {
                r.resize()
            }).one("canplay playing." + f, function() {
                e.css({
                    visibility: "visible"
                }).animate({
                    opacity: 1
                }), t.css("background-image", "none")
            }), c.on("resize." + f, function() {
                d.resizing && r.resize()
            }), t.append(e)
        }, s.prototype.getVideoObject = function() {
            return this.$video[0]
        }, s.prototype.resize = function() {
            if (this.$video) {
                var e = this.$wrapper,
                    t = this.$video,
                    i = t[0],
                    s = i.videoHeight,
                    o = i.videoWidth,
                    r = e.height(),
                    n = e.width();
                r / s < n / o ? t.css({
                    width: n + 2,
                    height: "auto"
                }) : t.css({
                    width: "auto",
                    height: r + 2
                })
            }
        }, s.prototype.destroy = function() {
            delete h[f].lookup[this.index], this.$video && this.$video.off(f), this.$element.off(f).removeData(f), this.$wrapper.remove()
        }, h[f] = {
            lookup: []
        }, h.fn[f] = function(e, t) {
            var i;
            return this.each(function() {
                (i = h.data(this, f)) && i.destroy(), (i = new s(this, e, t)).index = h[f].lookup.push(i) - 1, h.data(this, f, i)
            }), this
        }, h(document).ready(function() {
            var e = h(window);
            e.on("resize." + f, function() {
                for (var e, t = h[f].lookup.length, i = 0; i < t; i++)(e = h[f].lookup[i]) && e.settings.resizing && e.resize()
            }), e.on("unload." + f, function() {
                return !1
            }), h(document).find("[data-vide-bg]").each(function(e, t) {
                var i = h(t),
                    s = i.data(f + "-options"),
                    o = i.data(f + "-bg");
                i[f](o, s)
            })
        })
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e)
        }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(e.jQuery)
    }(this, function(m) {
        ! function() {
            "use strict";

            function t(e, t) {
                if (this.el = e, this.$el = m(e), this.s = m.extend({}, i, t), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = m(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(m(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
            }
            var i = {
                mode: "lg-slide",
                cssEasing: "ease",
                easing: "linear",
                speed: 600,
                height: "100%",
                width: "100%",
                addClass: "",
                startClass: "lg-start-zoom",
                backdropDuration: 150,
                hideBarsDelay: 6e3,
                useLeft: !1,
                closable: !0,
                loop: !0,
                escKey: !0,
                keyPress: !0,
                controls: !0,
                slideEndAnimatoin: !0,
                hideControlOnEnd: !1,
                mousewheel: !0,
                getCaptionFromTitleOrAlt: !0,
                appendSubHtmlTo: ".lg-sub-html",
                subHtmlSelectorRelative: !1,
                preload: 1,
                showAfterLoad: !0,
                selector: "",
                selectWithin: "",
                nextHtml: "",
                prevHtml: "",
                index: !1,
                iframeMaxWidth: "100%",
                download: !0,
                counter: !0,
                appendCounterTo: ".lg-toolbar",
                swipeThreshold: 50,
                enableSwipe: !0,
                enableDrag: !0,
                dynamic: !1,
                dynamicEl: [],
                galleryId: 1
            };
            t.prototype.init = function() {
                var e = this;
                e.s.preload > e.$items.length && (e.s.preload = e.$items.length);
                var t = window.location.hash;
                0 < t.indexOf("lg=" + this.s.galleryId) && (e.index = parseInt(t.split("&slide=")[1], 10), m("body").addClass("lg-from-hash"), m("body").hasClass("lg-on") || (setTimeout(function() {
                    e.build(e.index)
                }), m("body").addClass("lg-on"))), e.s.dynamic ? (e.$el.trigger("onBeforeOpen.lg"), e.index = e.s.index || 0, m("body").hasClass("lg-on") || setTimeout(function() {
                    e.build(e.index), m("body").addClass("lg-on")
                })) : e.$items.on("click.lgcustom", function(t) {
                    try {
                        t.preventDefault(), t.preventDefault()
                    } catch (e) {
                        t.returnValue = !1
                    }
                    e.$el.trigger("onBeforeOpen.lg"), e.index = e.s.index || e.$items.index(this), m("body").hasClass("lg-on") || (e.build(e.index), m("body").addClass("lg-on"))
                })
            }, t.prototype.build = function(e) {
                var t = this;
                t.structure(), m.each(m.fn.lightGallery.modules, function(e) {
                    t.modules[e] = new m.fn.lightGallery.modules[e](t.el)
                }), t.slide(e, !1, !1, !1), t.s.keyPress && t.keyPress(), 1 < t.$items.length ? (t.arrow(), setTimeout(function() {
                    t.enableDrag(), t.enableSwipe()
                }, 50), t.s.mousewheel && t.mousewheel()) : t.$slide.on("click.lg", function() {
                    t.$el.trigger("onSlideClick.lg")
                }), t.counter(), t.closeGallery(), t.$el.trigger("onAfterOpen.lg"), t.$outer.on("mousemove.lg click.lg touchstart.lg", function() {
                    t.$outer.removeClass("lg-hide-items"), clearTimeout(t.hideBartimeout), t.hideBartimeout = setTimeout(function() {
                        t.$outer.addClass("lg-hide-items")
                    }, t.s.hideBarsDelay)
                }), t.$outer.trigger("mousemove.lg")
            }, t.prototype.structure = function() {
                var e, t = "",
                    i = "",
                    s = 0,
                    o = "",
                    r = this;
                for (m("body").append('<div class="lg-backdrop"></div>'), m(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), s = 0; s < this.$items.length; s++) t += '<div class="lg-item"></div>';
                if (this.s.controls && 1 < this.$items.length && (i = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (o = '<div class="lg-sub-html"></div>'), e = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + t + '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' + i + o + "</div></div>", m("body").append(e), this.$outer = m(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), r.setTop(), m(window).on("resize.lg orientationchange.lg", function() {
                        setTimeout(function() {
                            r.setTop()
                        }, 100)
                    }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && 1 < this.$items.length && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
                    var n = this.$outer.find(".lg-inner");
                    n.css("transition-timing-function", this.s.cssEasing), n.css("transition-duration", this.s.speed + "ms")
                }
                setTimeout(function() {
                    m(".lg-backdrop").addClass("in")
                }), setTimeout(function() {
                    r.$outer.addClass("lg-visible")
                }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = m(window).scrollTop()
            }, t.prototype.setTop = function() {
                if ("100%" !== this.s.height) {
                    var e = m(window).height(),
                        t = (e - parseInt(this.s.height, 10)) / 2,
                        i = this.$outer.find(".lg");
                    e >= parseInt(this.s.height, 10) ? i.css("top", t + "px") : i.css("top", "0px")
                }
            }, t.prototype.doCss = function() {
                return !! function() {
                    var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                        t = document.documentElement,
                        i = 0;
                    for (i = 0; i < e.length; i++)
                        if (e[i] in t.style) return !0
                }()
            }, t.prototype.isVideo = function(e, t) {
                var i;
                if (i = this.s.dynamic ? this.s.dynamicEl[t].html : this.$items.eq(t).attr("data-html"), !e) return i ? {
                    html5: !0
                } : (console.error("lightGallery :- data-src is not pvovided on slide item " + (t + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"), !1);
                var s = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
                    o = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                    r = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                    n = e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
                return s ? {
                    youtube: s
                } : o ? {
                    vimeo: o
                } : r ? {
                    dailymotion: r
                } : n ? {
                    vk: n
                } : void 0
            }, t.prototype.counter = function() {
                this.s.counter && m(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
            }, t.prototype.addHtml = function(e) {
                var t, i, s = null;
                if (this.s.dynamic ? this.s.dynamicEl[e].subHtmlUrl ? t = this.s.dynamicEl[e].subHtmlUrl : s = this.s.dynamicEl[e].subHtml : (i = this.$items.eq(e)).attr("data-sub-html-url") ? t = i.attr("data-sub-html-url") : (s = i.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !s && (s = i.attr("title") || i.find("img").first().attr("alt"))), !t)
                    if (null != s) {
                        var o = s.substring(0, 1);
                        "." !== o && "#" !== o || (s = this.s.subHtmlSelectorRelative && !this.s.dynamic ? i.find(s).html() : m(s).html())
                    } else s = "";
                    ".lg-sub-html" === this.s.appendSubHtmlTo ? t ? this.$outer.find(this.s.appendSubHtmlTo).load(t) : this.$outer.find(this.s.appendSubHtmlTo).html(s) : t ? this.$slide.eq(e).load(t) : this.$slide.eq(e).append(s), null != s && ("" === s ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [e])
            }, t.prototype.preload = function(e) {
                var t = 1,
                    i = 1;
                for (t = 1; t <= this.s.preload && !(t >= this.$items.length - e); t++) this.loadContent(e + t, !1, 0);
                for (i = 1; i <= this.s.preload && !(e - i < 0); i++) this.loadContent(e - i, !1, 0)
            }, t.prototype.loadContent = function(t, e, i) {
                var s, a, o, r, n, l, c = this,
                    d = !1,
                    p = function(e) {
                        for (var t = [], i = [], s = 0; s < e.length; s++) {
                            var o = e[s].split(" ");
                            "" === o[0] && o.splice(0, 1), i.push(o[0]), t.push(o[1])
                        }
                        for (var r = m(window).width(), n = 0; n < t.length; n++)
                            if (parseInt(t[n], 10) > r) {
                                a = i[n];
                                break
                            }
                    };
                if (c.s.dynamic) {
                    if (c.s.dynamicEl[t].poster && (d = !0, o = c.s.dynamicEl[t].poster), l = c.s.dynamicEl[t].html, a = c.s.dynamicEl[t].src, c.s.dynamicEl[t].responsive) p(c.s.dynamicEl[t].responsive.split(","));
                    r = c.s.dynamicEl[t].srcset, n = c.s.dynamicEl[t].sizes
                } else {
                    if (c.$items.eq(t).attr("data-poster") && (d = !0, o = c.$items.eq(t).attr("data-poster")), l = c.$items.eq(t).attr("data-html"), a = c.$items.eq(t).attr("href") || c.$items.eq(t).attr("data-src"), c.$items.eq(t).attr("data-responsive")) p(c.$items.eq(t).attr("data-responsive").split(","));
                    r = c.$items.eq(t).attr("data-srcset"), n = c.$items.eq(t).attr("data-sizes")
                }
                var u = !1;
                c.s.dynamic ? c.s.dynamicEl[t].iframe && (u = !0) : "true" === c.$items.eq(t).attr("data-iframe") && (u = !0);
                var h = c.isVideo(a, t);
                if (!c.$slide.eq(t).hasClass("lg-loaded")) {
                    if (u) c.$slide.eq(t).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + c.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + a + '"  allowfullscreen="true"></iframe></div></div>');
                    else if (d) {
                        var f;
                        f = h && h.youtube ? "lg-has-youtube" : h && h.vimeo ? "lg-has-vimeo" : "lg-has-html5", c.$slide.eq(t).prepend('<div class="lg-video-cont ' + f + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + o + '" /></div></div>')
                    } else h ? (c.$slide.eq(t).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), c.$el.trigger("hasVideo.lg", [t, a, l])) : c.$slide.eq(t).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + a + '" /></div>');
                    if (c.$el.trigger("onAferAppendSlide.lg", [t]), s = c.$slide.eq(t).find(".lg-object"), n && s.attr("sizes", n), r) {
                        s.attr("srcset", r);
                        try {
                            picturefill({
                                elements: [s[0]]
                            })
                        } catch (e) {
                            console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")
                        }
                    }
                    ".lg-sub-html" !== this.s.appendSubHtmlTo && c.addHtml(t), c.$slide.eq(t).addClass("lg-loaded")
                }
                c.$slide.eq(t).find(".lg-object").on("load.lg error.lg", function() {
                    var e = 0;
                    i && !m("body").hasClass("lg-from-hash") && (e = i), setTimeout(function() {
                        c.$slide.eq(t).addClass("lg-complete"), c.$el.trigger("onSlideItemLoad.lg", [t, i || 0])
                    }, e)
                }), h && h.html5 && !d && c.$slide.eq(t).addClass("lg-complete"), !0 === e && (c.$slide.eq(t).hasClass("lg-complete") ? c.preload(t) : c.$slide.eq(t).find(".lg-object").on("load.lg error.lg", function() {
                    c.preload(t)
                }))
            }, t.prototype.slide = function(e, t, i, s) {
                var o = this.$outer.find(".lg-current").index(),
                    r = this;
                if (!r.lGalleryOn || o !== e) {
                    var n = this.$slide.length,
                        a = r.lGalleryOn ? this.s.speed : 0;
                    if (!r.lgBusy) {
                        var l, c, d;
                        if (this.s.download)(l = r.s.dynamic ? !1 !== r.s.dynamicEl[e].downloadUrl && (r.s.dynamicEl[e].downloadUrl || r.s.dynamicEl[e].src) : "false" !== r.$items.eq(e).attr("data-download-url") && (r.$items.eq(e).attr("data-download-url") || r.$items.eq(e).attr("href") || r.$items.eq(e).attr("data-src"))) ? (m("#lg-download").attr("href", l), r.$outer.removeClass("lg-hide-download")) : r.$outer.addClass("lg-hide-download");
                        if (this.$el.trigger("onBeforeSlide.lg", [o, e, t, i]), r.lgBusy = !0, clearTimeout(r.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
                                r.addHtml(e)
                            }, a), this.arrowDisable(e), s || (e < o ? s = "prev" : o < e && (s = "next")), t) this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), 2 < n ? (c = e - 1, d = e + 1, 0 === e && o === n - 1 ? (d = 0, c = n - 1) : e === n - 1 && 0 === o && (d = 0, c = n - 1)) : (c = 0, d = 1), "prev" === s ? r.$slide.eq(d).addClass("lg-next-slide") : r.$slide.eq(c).addClass("lg-prev-slide"), r.$slide.eq(e).addClass("lg-current");
                        else r.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), "prev" === s ? (this.$slide.eq(e).addClass("lg-prev-slide"), this.$slide.eq(o).addClass("lg-next-slide")) : (this.$slide.eq(e).addClass("lg-next-slide"), this.$slide.eq(o).addClass("lg-prev-slide")), setTimeout(function() {
                            r.$slide.removeClass("lg-current"), r.$slide.eq(e).addClass("lg-current"), r.$outer.removeClass("lg-no-trans")
                        }, 50);
                        r.lGalleryOn ? (setTimeout(function() {
                            r.loadContent(e, !0, 0)
                        }, this.s.speed + 50), setTimeout(function() {
                            r.lgBusy = !1, r.$el.trigger("onAfterSlide.lg", [o, e, t, i])
                        }, this.s.speed)) : (r.loadContent(e, !0, r.s.backdropDuration), r.lgBusy = !1, r.$el.trigger("onAfterSlide.lg", [o, e, t, i])), r.lGalleryOn = !0, this.s.counter && m("#lg-counter-current").text(e + 1)
                    }
                    r.index = e
                }
            }, t.prototype.goToNextSlide = function(e) {
                var t = this,
                    i = t.s.loop;
                e && t.$slide.length < 3 && (i = !1), t.lgBusy || (t.index + 1 < t.$slide.length ? (t.index++, t.$el.trigger("onBeforeNextSlide.lg", [t.index]), t.slide(t.index, e, !1, "next")) : i ? (t.index = 0, t.$el.trigger("onBeforeNextSlide.lg", [t.index]), t.slide(t.index, e, !1, "next")) : t.s.slideEndAnimatoin && !e && (t.$outer.addClass("lg-right-end"), setTimeout(function() {
                    t.$outer.removeClass("lg-right-end")
                }, 400)))
            }, t.prototype.goToPrevSlide = function(e) {
                var t = this,
                    i = t.s.loop;
                e && t.$slide.length < 3 && (i = !1), t.lgBusy || (0 < t.index ? (t.index--, t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]), t.slide(t.index, e, !1, "prev")) : i ? (t.index = t.$items.length - 1, t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]), t.slide(t.index, e, !1, "prev")) : t.s.slideEndAnimatoin && !e && (t.$outer.addClass("lg-left-end"), setTimeout(function() {
                    t.$outer.removeClass("lg-left-end")
                }, 400)))
            }, t.prototype.keyPress = function() {
                var t = this;
                1 < this.$items.length && m(window).on("keyup.lg", function(e) {
                    1 < t.$items.length && (37 === e.keyCode && (e.preventDefault(), t.goToPrevSlide()), 39 === e.keyCode && (e.preventDefault(), t.goToNextSlide()))
                }), m(window).on("keydown.lg", function(e) {
                    !0 === t.s.escKey && 27 === e.keyCode && (e.preventDefault(), t.$outer.hasClass("lg-thumb-open") ? t.$outer.removeClass("lg-thumb-open") : t.destroy())
                })
            }, t.prototype.arrow = function() {
                var e = this;
                this.$outer.find(".lg-prev").on("click.lg", function() {
                    e.goToPrevSlide()
                }), this.$outer.find(".lg-next").on("click.lg", function() {
                    e.goToNextSlide()
                })
            }, t.prototype.arrowDisable = function(e) {
                !this.s.loop && this.s.hideControlOnEnd && (e + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), 0 < e ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
            }, t.prototype.setTranslate = function(e, t, i) {
                this.s.useLeft ? e.css("left", t) : e.css({
                    transform: "translate3d(" + t + "px, " + i + "px, 0px)"
                })
            }, t.prototype.touchMove = function(e, t) {
                var i = t - e;
                15 < Math.abs(i) && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), i, 0), this.setTranslate(m(".lg-prev-slide"), -this.$slide.eq(this.index).width() + i, 0), this.setTranslate(m(".lg-next-slide"), this.$slide.eq(this.index).width() + i, 0))
            }, t.prototype.touchEnd = function(e) {
                var t = this;
                "lg-slide" !== t.s.mode && t.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function() {
                    t.$outer.removeClass("lg-dragging"), e < 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToNextSlide(!0) : 0 < e && Math.abs(e) > t.s.swipeThreshold ? t.goToPrevSlide(!0) : Math.abs(e) < 5 && t.$el.trigger("onSlideClick.lg"), t.$slide.removeAttr("style")
                }), setTimeout(function() {
                    t.$outer.hasClass("lg-dragging") || "lg-slide" === t.s.mode || t.$outer.removeClass("lg-slide")
                }, t.s.speed + 100)
            }, t.prototype.enableSwipe = function() {
                var t = this,
                    i = 0,
                    s = 0,
                    o = !1;
                t.s.enableSwipe && t.doCss() && (t.$slide.on("touchstart.lg", function(e) {
                    t.$outer.hasClass("lg-zoomed") || t.lgBusy || (e.preventDefault(), t.manageSwipeClass(), i = e.originalEvent.targetTouches[0].pageX)
                }), t.$slide.on("touchmove.lg", function(e) {
                    t.$outer.hasClass("lg-zoomed") || (e.preventDefault(), s = e.originalEvent.targetTouches[0].pageX, t.touchMove(i, s), o = !0)
                }), t.$slide.on("touchend.lg", function() {
                    t.$outer.hasClass("lg-zoomed") || (o ? (o = !1, t.touchEnd(s - i)) : t.$el.trigger("onSlideClick.lg"))
                }))
            }, t.prototype.enableDrag = function() {
                var t = this,
                    i = 0,
                    s = 0,
                    o = !1,
                    r = !1;
                t.s.enableDrag && t.doCss() && (t.$slide.on("mousedown.lg", function(e) {
                    t.$outer.hasClass("lg-zoomed") || (m(e.target).hasClass("lg-object") || m(e.target).hasClass("lg-video-play")) && (e.preventDefault(), t.lgBusy || (t.manageSwipeClass(), i = e.pageX, o = !0, t.$outer.scrollLeft += 1, t.$outer.scrollLeft -= 1, t.$outer.removeClass("lg-grab").addClass("lg-grabbing"), t.$el.trigger("onDragstart.lg")))
                }), m(window).on("mousemove.lg", function(e) {
                    o && (r = !0, s = e.pageX, t.touchMove(i, s), t.$el.trigger("onDragmove.lg"))
                }), m(window).on("mouseup.lg", function(e) {
                    r ? (r = !1, t.touchEnd(s - i), t.$el.trigger("onDragend.lg")) : (m(e.target).hasClass("lg-object") || m(e.target).hasClass("lg-video-play")) && t.$el.trigger("onSlideClick.lg"), o && (o = !1, t.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
                }))
            }, t.prototype.manageSwipeClass = function() {
                var e = this.index + 1,
                    t = this.index - 1;
                this.s.loop && 2 < this.$slide.length && (0 === this.index ? t = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (e = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), -1 < t && this.$slide.eq(t).addClass("lg-prev-slide"), this.$slide.eq(e).addClass("lg-next-slide")
            }, t.prototype.mousewheel = function() {
                var t = this;
                t.$outer.on("mousewheel.lg", function(e) {
                    e.deltaY && (0 < e.deltaY ? t.goToPrevSlide() : t.goToNextSlide(), e.preventDefault())
                })
            }, t.prototype.closeGallery = function() {
                var t = this,
                    i = !1;
                this.$outer.find(".lg-close").on("click.lg", function() {
                    t.destroy()
                }), t.s.closable && (t.$outer.on("mousedown.lg", function(e) {
                    i = !!(m(e.target).is(".lg-outer") || m(e.target).is(".lg-item ") || m(e.target).is(".lg-img-wrap"))
                }), t.$outer.on("mouseup.lg", function(e) {
                    (m(e.target).is(".lg-outer") || m(e.target).is(".lg-item ") || m(e.target).is(".lg-img-wrap") && i) && (t.$outer.hasClass("lg-dragging") || t.destroy())
                }))
            }, t.prototype.destroy = function(e) {
                var t = this;
                e || (t.$el.trigger("onBeforeClose.lg"), m(window).scrollTop(t.prevScrollTop)), e && (t.s.dynamic || this.$items.off("click.lg click.lgcustom"), m.removeData(t.el, "lightGallery")), this.$el.off(".lg.tm"), m.each(m.fn.lightGallery.modules, function(e) {
                    t.modules[e] && t.modules[e].destroy()
                }), this.lGalleryOn = !1, clearTimeout(t.hideBartimeout), this.hideBartimeout = !1, m(window).off(".lg"), m("body").removeClass("lg-on lg-from-hash"), t.$outer && t.$outer.removeClass("lg-visible"), m(".lg-backdrop").removeClass("in"), setTimeout(function() {
                    t.$outer && t.$outer.remove(), m(".lg-backdrop").remove(), e || t.$el.trigger("onCloseAfter.lg")
                }, t.s.backdropDuration + 50)
            }, m.fn.lightGallery = function(e) {
                return this.each(function() {
                    if (m.data(this, "lightGallery")) try {
                        m(this).data("lightGallery").init()
                    } catch (e) {
                        console.error("lightGallery has not initiated properly")
                    } else m.data(this, "lightGallery", new t(this, e))
                })
            }, m.fn.lightGallery.modules = {}
        }()
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e)
        }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(0, function(i) {
        ! function() {
            "use strict";
            var t = {
                    autoplay: !1,
                    pause: 5e3,
                    progressBar: !0,
                    fourceAutoplay: !1,
                    autoplayControls: !0,
                    appendAutoplayControlsTo: ".lg-toolbar"
                },
                e = function(e) {
                    return this.core = i(e).data("lightGallery"), this.$el = i(e), !(this.core.$items.length < 2) && (this.core.s = i.extend({}, t, this.core.s), this.interval = !1, this.fromAuto = !0, this.canceledOnTouch = !1, this.fourceAutoplayTemp = this.core.s.fourceAutoplay, this.core.doCss() || (this.core.s.progressBar = !1), this.init(), this)
                };
            e.prototype.init = function() {
                var e = this;
                e.core.s.autoplayControls && e.controls(), e.core.s.progressBar && e.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'), e.progress(), e.core.s.autoplay && e.$el.one("onSlideItemLoad.lg.tm", function() {
                    e.startlAuto()
                }), e.$el.on("onDragstart.lg.tm touchstart.lg.tm", function() {
                    e.interval && (e.cancelAuto(), e.canceledOnTouch = !0)
                }), e.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", function() {
                    !e.interval && e.canceledOnTouch && (e.startlAuto(), e.canceledOnTouch = !1)
                })
            }, e.prototype.progress = function() {
                var e, t, i = this;
                i.$el.on("onBeforeSlide.lg.tm", function() {
                    i.core.s.progressBar && i.fromAuto && (e = i.core.$outer.find(".lg-progress-bar"), t = i.core.$outer.find(".lg-progress"), i.interval && (t.removeAttr("style"), e.removeClass("lg-start"), setTimeout(function() {
                        t.css("transition", "width " + (i.core.s.speed + i.core.s.pause) + "ms ease 0s"), e.addClass("lg-start")
                    }, 20))), i.fromAuto || i.core.s.fourceAutoplay || i.cancelAuto(), i.fromAuto = !1
                })
            }, e.prototype.controls = function() {
                var e = this;
                i(this.core.s.appendAutoplayControlsTo).append('<span class="lg-autoplay-button lg-icon"></span>'), e.core.$outer.find(".lg-autoplay-button").on("click.lg", function() {
                    i(e.core.$outer).hasClass("lg-show-autoplay") ? (e.cancelAuto(), e.core.s.fourceAutoplay = !1) : e.interval || (e.startlAuto(), e.core.s.fourceAutoplay = e.fourceAutoplayTemp)
                })
            }, e.prototype.startlAuto = function() {
                var e = this;
                e.core.$outer.find(".lg-progress").css("transition", "width " + (e.core.s.speed + e.core.s.pause) + "ms ease 0s"), e.core.$outer.addClass("lg-show-autoplay"), e.core.$outer.find(".lg-progress-bar").addClass("lg-start"), e.interval = setInterval(function() {
                    e.core.index + 1 < e.core.$items.length ? e.core.index++ : e.core.index = 0, e.fromAuto = !0, e.core.slide(e.core.index, !1, !1, "next")
                }, e.core.s.speed + e.core.s.pause)
            }, e.prototype.cancelAuto = function() {
                clearInterval(this.interval), this.interval = !1, this.core.$outer.find(".lg-progress").removeAttr("style"), this.core.$outer.removeClass("lg-show-autoplay"), this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")
            }, e.prototype.destroy = function() {
                this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove()
            }, i.fn.lightGallery.modules.autoplay = e
        }()
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e)
        }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(0, function(i) {
        ! function() {
            "use strict";
            var t = {
                    fullScreen: !0
                },
                e = function(e) {
                    return this.core = i(e).data("lightGallery"), this.$el = i(e), this.core.s = i.extend({}, t, this.core.s), this.init(), this
                };
            e.prototype.init = function() {
                var e = "";
                if (this.core.s.fullScreen) {
                    if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) return;
                    e = '<span class="lg-fullscreen lg-icon"></span>', this.core.$outer.find(".lg-toolbar").append(e), this.fullScreen()
                }
            }, e.prototype.requestFullscreen = function() {
                var e = document.documentElement;
                e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen()
            }, e.prototype.exitFullscreen = function() {
                document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
            }, e.prototype.fullScreen = function() {
                var e = this;
                i(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", function() {
                    e.core.$outer.toggleClass("lg-fullscreen-on")
                }), this.core.$outer.find(".lg-fullscreen").on("click.lg", function() {
                    document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? e.exitFullscreen() : e.requestFullscreen()
                })
            }, e.prototype.destroy = function() {
                this.exitFullscreen(), i(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")
            }, i.fn.lightGallery.modules.fullscreen = e
        }()
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e)
        }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(0, function(n) {
        ! function() {
            "use strict";
            var t = {
                    pager: !1
                },
                e = function(e) {
                    return this.core = n(e).data("lightGallery"), this.$el = n(e), this.core.s = n.extend({}, t, this.core.s), this.core.s.pager && 1 < this.core.$items.length && this.init(), this
                };
            e.prototype.init = function() {
                var s, e, t, i = this,
                    o = "";
                if (i.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'), i.core.s.dynamic)
                    for (var r = 0; r < i.core.s.dynamicEl.length; r++) o += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + i.core.s.dynamicEl[r].thumb + '" /></div></span>';
                else i.core.$items.each(function() {
                    o += i.core.s.exThumbImage ? '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + n(this).attr(i.core.s.exThumbImage) + '" /></div></span>' : '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + n(this).find("img").attr("src") + '" /></div></span>'
                });
                (e = i.core.$outer.find(".lg-pager-outer")).html(o), (s = i.core.$outer.find(".lg-pager-cont")).on("click.lg touchend.lg", function() {
                    var e = n(this);
                    i.core.index = e.index(), i.core.slide(i.core.index, !1, !0, !1)
                }), e.on("mouseover.lg", function() {
                    clearTimeout(t), e.addClass("lg-pager-hover")
                }), e.on("mouseout.lg", function() {
                    t = setTimeout(function() {
                        e.removeClass("lg-pager-hover")
                    })
                }), i.core.$el.on("onBeforeSlide.lg.tm", function(e, t, i) {
                    s.removeClass("lg-pager-active"), s.eq(i).addClass("lg-pager-active")
                })
            }, e.prototype.destroy = function() {}, n.fn.lightGallery.modules.pager = e
        }()
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e)
        }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(0, function(c) {
        ! function() {
            "use strict";
            var t = {
                    thumbnail: !0,
                    animateThumb: !0,
                    currentPagerPosition: "middle",
                    thumbWidth: 100,
                    thumbHeight: "80px",
                    thumbContHeight: 100,
                    thumbMargin: 5,
                    exThumbImage: !1,
                    showThumbByDefault: !0,
                    toogleThumb: !0,
                    pullCaptionUp: !0,
                    enableThumbDrag: !0,
                    enableThumbSwipe: !0,
                    swipeThreshold: 50,
                    loadYoutubeThumbnail: !0,
                    youtubeThumbSize: 1,
                    loadVimeoThumbnail: !0,
                    vimeoThumbSize: "thumbnail_small",
                    loadDailymotionThumbnail: !0
                },
                e = function(e) {
                    return this.core = c(e).data("lightGallery"), this.core.s = c.extend({}, t, this.core.s), this.$el = c(e), this.$thumbOuter = null, this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin), this.thumbIndex = this.core.index, this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"), this.left = 0, this.init(), this
                };
            e.prototype.init = function() {
                var e = this;
                this.core.s.thumbnail && 1 < this.core.$items.length && (this.core.s.showThumbByDefault && setTimeout(function() {
                    e.core.$outer.addClass("lg-thumb-open")
                }, 700), this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"), this.build(), this.core.s.animateThumb && this.core.doCss() ? (this.core.s.enableThumbDrag && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toogle(), this.thumbkeyPress())
            }, e.prototype.build = function() {
                function t(e, t, i) {
                    var s, o = n.core.isVideo(e, i) || {},
                        r = "";
                    o.youtube || o.vimeo || o.dailymotion ? o.youtube ? s = n.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + o.youtube[1] + "/" + n.core.s.youtubeThumbSize + ".jpg" : t : o.vimeo ? n.core.s.loadVimeoThumbnail ? (s = "//i.vimeocdn.com/video/error_" + l + ".jpg", r = o.vimeo[1]) : s = t : o.dailymotion && (s = n.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + o.dailymotion[1] : t) : s = t, a += '<div data-vimeo-id="' + r + '" class="lg-thumb-item" style="width:' + n.core.s.thumbWidth + "px; height: " + n.core.s.thumbHeight + "; margin-right: " + n.core.s.thumbMargin + 'px"><img src="' + s + '" /></div>', r = ""
                }
                var e, n = this,
                    a = "",
                    l = "";
                switch (this.core.s.vimeoThumbSize) {
                    case "thumbnail_large":
                        l = "640";
                        break;
                    case "thumbnail_medium":
                        l = "200x150";
                        break;
                    case "thumbnail_small":
                        l = "100x75"
                }
                if (n.core.$outer.addClass("lg-has-thumb"), n.core.$outer.find(".lg").append('<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>'), n.$thumbOuter = n.core.$outer.find(".lg-thumb-outer"), n.thumbOuterWidth = n.$thumbOuter.width(), n.core.s.animateThumb && n.core.$outer.find(".lg-thumb").css({
                        width: n.thumbTotalWidth + "px",
                        position: "relative"
                    }), this.core.s.animateThumb && n.$thumbOuter.css("height", n.core.s.thumbContHeight + "px"), n.core.s.dynamic)
                    for (var i = 0; i < n.core.s.dynamicEl.length; i++) t(n.core.s.dynamicEl[i].src, n.core.s.dynamicEl[i].thumb, i);
                else n.core.$items.each(function(e) {
                    n.core.s.exThumbImage ? t(c(this).attr("href") || c(this).attr("data-src"), c(this).attr(n.core.s.exThumbImage), e) : t(c(this).attr("href") || c(this).attr("data-src"), c(this).find("img").attr("src"), e)
                });
                n.core.$outer.find(".lg-thumb").html(a), (e = n.core.$outer.find(".lg-thumb-item")).each(function() {
                    var t = c(this),
                        e = t.attr("data-vimeo-id");
                    e && c.getJSON("//www.vimeo.com/api/v2/video/" + e + ".json?callback=?", {
                        format: "json"
                    }, function(e) {
                        t.find("img").attr("src", e[0][n.core.s.vimeoThumbSize])
                    })
                }), e.eq(n.core.index).addClass("active"), n.core.$el.on("onBeforeSlide.lg.tm", function() {
                    e.removeClass("active"), e.eq(n.core.index).addClass("active")
                }), e.on("click.lg touchend.lg", function() {
                    var e = c(this);
                    setTimeout(function() {
                        (n.thumbClickable && !n.core.lgBusy || !n.core.doCss()) && (n.core.index = e.index(), n.core.slide(n.core.index, !1, !0, !1))
                    }, 50)
                }), n.core.$el.on("onBeforeSlide.lg.tm", function() {
                    n.animateThumb(n.core.index)
                }), c(window).on("resize.lg.thumb orientationchange.lg.thumb", function() {
                    setTimeout(function() {
                        n.animateThumb(n.core.index), n.thumbOuterWidth = n.$thumbOuter.width()
                    }, 200)
                })
            }, e.prototype.setTranslate = function(e) {
                this.core.$outer.find(".lg-thumb").css({
                    transform: "translate3d(-" + e + "px, 0px, 0px)"
                })
            }, e.prototype.animateThumb = function(e) {
                var t = this.core.$outer.find(".lg-thumb");
                if (this.core.s.animateThumb) {
                    var i;
                    switch (this.core.s.currentPagerPosition) {
                        case "left":
                            i = 0;
                            break;
                        case "middle":
                            i = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                            break;
                        case "right":
                            i = this.thumbOuterWidth - this.core.s.thumbWidth
                    }
                    this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * e - 1 - i, this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth), this.left < 0 && (this.left = 0), this.core.lGalleryOn ? (t.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || t.animate({
                        left: -this.left + "px"
                    }, this.core.s.speed)) : this.core.doCss() || t.css("left", -this.left + "px"), this.setTranslate(this.left)
                }
            }, e.prototype.enableThumbDrag = function() {
                var t = this,
                    i = 0,
                    s = 0,
                    o = !1,
                    r = !1,
                    n = 0;
                t.$thumbOuter.addClass("lg-grab"), t.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function(e) {
                    t.thumbTotalWidth > t.thumbOuterWidth && (e.preventDefault(), i = e.pageX, o = !0, t.core.$outer.scrollLeft += 1, t.core.$outer.scrollLeft -= 1, t.thumbClickable = !1, t.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
                }), c(window).on("mousemove.lg.thumb", function(e) {
                    o && (n = t.left, r = !0, s = e.pageX, t.$thumbOuter.addClass("lg-dragging"), (n -= s - i) > t.thumbTotalWidth - t.thumbOuterWidth && (n = t.thumbTotalWidth - t.thumbOuterWidth), n < 0 && (n = 0), t.setTranslate(n))
                }), c(window).on("mouseup.lg.thumb", function() {
                    r ? (r = !1, t.$thumbOuter.removeClass("lg-dragging"), t.left = n, Math.abs(s - i) < t.core.s.swipeThreshold && (t.thumbClickable = !0)) : t.thumbClickable = !0, o && (o = !1, t.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))
                })
            }, e.prototype.enableThumbSwipe = function() {
                var t = this,
                    i = 0,
                    s = 0,
                    o = !1,
                    r = 0;
                t.core.$outer.find(".lg-thumb").on("touchstart.lg", function(e) {
                    t.thumbTotalWidth > t.thumbOuterWidth && (e.preventDefault(), i = e.originalEvent.targetTouches[0].pageX, t.thumbClickable = !1)
                }), t.core.$outer.find(".lg-thumb").on("touchmove.lg", function(e) {
                    t.thumbTotalWidth > t.thumbOuterWidth && (e.preventDefault(), s = e.originalEvent.targetTouches[0].pageX, o = !0, t.$thumbOuter.addClass("lg-dragging"), r = t.left, (r -= s - i) > t.thumbTotalWidth - t.thumbOuterWidth && (r = t.thumbTotalWidth - t.thumbOuterWidth), r < 0 && (r = 0), t.setTranslate(r))
                }), t.core.$outer.find(".lg-thumb").on("touchend.lg", function() {
                    t.thumbTotalWidth > t.thumbOuterWidth && o ? (o = !1, t.$thumbOuter.removeClass("lg-dragging"), Math.abs(s - i) < t.core.s.swipeThreshold && (t.thumbClickable = !0), t.left = r) : t.thumbClickable = !0
                })
            }, e.prototype.toogle = function() {
                var e = this;
                e.core.s.toogleThumb && (e.core.$outer.addClass("lg-can-toggle"), e.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), e.core.$outer.find(".lg-toogle-thumb").on("click.lg", function() {
                    e.core.$outer.toggleClass("lg-thumb-open")
                }))
            }, e.prototype.thumbkeyPress = function() {
                var t = this;
                c(window).on("keydown.lg.thumb", function(e) {
                    38 === e.keyCode ? (e.preventDefault(), t.core.$outer.addClass("lg-thumb-open")) : 40 === e.keyCode && (e.preventDefault(), t.core.$outer.removeClass("lg-thumb-open"))
                })
            }, e.prototype.destroy = function() {
                this.core.s.thumbnail && 1 < this.core.$items.length && (c(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"), this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"))
            }, c.fn.lightGallery.modules.Thumbnail = e
        }()
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e)
        }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(0, function(u) {
        ! function() {
            "use strict";
            var t = {
                    videoMaxWidth: "855px",
                    youtubePlayerParams: !1,
                    vimeoPlayerParams: !1,
                    dailymotionPlayerParams: !1,
                    vkPlayerParams: !1,
                    videojs: !1,
                    videojsOptions: {}
                },
                e = function(e) {
                    return this.core = u(e).data("lightGallery"), this.$el = u(e), this.core.s = u.extend({}, t, this.core.s), this.videoLoaded = !1, this.init(), this
                };
            e.prototype.init = function() {
                var p = this;
                p.core.$el.on("hasVideo.lg.tm", function(e, t, i, s) {
                    if (p.core.$slide.eq(t).find(".lg-video").append(p.loadVideo(i, "lg-object", !0, t, s)), s)
                        if (p.core.s.videojs) try {
                            videojs(p.core.$slide.eq(t).find(".lg-html5").get(0), p.core.s.videojsOptions, function() {
                                p.videoLoaded || this.play()
                            })
                        } catch (e) {
                            console.error("Make sure you have included videojs")
                        } else p.videoLoaded || p.core.$slide.eq(t).find(".lg-html5").get(0).play()
                }), p.core.$el.on("onAferAppendSlide.lg.tm", function(e, t) {
                    var i = p.core.$slide.eq(t).find(".lg-video-cont");
                    i.hasClass("lg-has-iframe") || (i.css("max-width", p.core.s.videoMaxWidth), p.videoLoaded = !0)
                });
                var t = function(i) {
                    if (i.find(".lg-object").hasClass("lg-has-poster") && i.find(".lg-object").is(":visible"))
                        if (i.hasClass("lg-has-video")) {
                            var e = i.find(".lg-youtube").get(0),
                                t = i.find(".lg-vimeo").get(0),
                                s = i.find(".lg-dailymotion").get(0),
                                o = i.find(".lg-html5").get(0);
                            if (e) e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                            else if (t) try {
                                    $f(t).api("play")
                                } catch (i) {
                                    console.error("Make sure you have included froogaloop2 js")
                                } else if (s) s.contentWindow.postMessage("play", "*");
                                else if (o)
                                if (p.core.s.videojs) try {
                                    videojs(o).play()
                                } catch (i) {
                                    console.error("Make sure you have included videojs")
                                } else o.play();
                            i.addClass("lg-video-playing")
                        } else {
                            i.addClass("lg-video-playing lg-has-video");
                            var r, n, a = function(e, t) {
                                if (i.find(".lg-video").append(p.loadVideo(e, "", !1, p.core.index, t)), t)
                                    if (p.core.s.videojs) try {
                                        videojs(p.core.$slide.eq(p.core.index).find(".lg-html5").get(0), p.core.s.videojsOptions, function() {
                                            this.play()
                                        })
                                    } catch (e) {
                                        console.error("Make sure you have included videojs")
                                    } else p.core.$slide.eq(p.core.index).find(".lg-html5").get(0).play()
                            };
                            p.core.s.dynamic ? (r = p.core.s.dynamicEl[p.core.index].src, n = p.core.s.dynamicEl[p.core.index].html) : (r = p.core.$items.eq(p.core.index).attr("href") || p.core.$items.eq(p.core.index).attr("data-src"), n = p.core.$items.eq(p.core.index).attr("data-html")), a(r, n);
                            var l = i.find(".lg-object");
                            i.find(".lg-video").append(l), i.find(".lg-video-object").hasClass("lg-html5") || (i.removeClass("lg-complete"), i.find(".lg-video-object").on("load.lg error.lg", function() {
                                i.addClass("lg-complete")
                            }))
                        }
                };
                p.core.doCss() && 1 < p.core.$items.length && (p.core.s.enableSwipe || p.core.s.enableDrag) ? p.core.$el.on("onSlideClick.lg.tm", function() {
                    var e = p.core.$slide.eq(p.core.index);
                    t(e)
                }) : p.core.$slide.on("click.lg", function() {
                    t(u(this))
                }), p.core.$el.on("onBeforeSlide.lg.tm", function(e, t, i) {
                    var s, o = p.core.$slide.eq(t),
                        r = o.find(".lg-youtube").get(0),
                        n = o.find(".lg-vimeo").get(0),
                        a = o.find(".lg-dailymotion").get(0),
                        l = o.find(".lg-vk").get(0),
                        c = o.find(".lg-html5").get(0);
                    if (r) r.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                    else if (n) try {
                            $f(n).api("pause")
                        } catch (e) {
                            console.error("Make sure you have included froogaloop2 js")
                        } else if (a) a.contentWindow.postMessage("pause", "*");
                        else if (c)
                        if (p.core.s.videojs) try {
                            videojs(c).pause()
                        } catch (e) {
                            console.error("Make sure you have included videojs")
                        } else c.pause();
                    l && u(l).attr("src", u(l).attr("src").replace("&autoplay", "&noplay")), s = p.core.s.dynamic ? p.core.s.dynamicEl[i].src : p.core.$items.eq(i).attr("href") || p.core.$items.eq(i).attr("data-src");
                    var d = p.core.isVideo(s, i) || {};
                    (d.youtube || d.vimeo || d.dailymotion || d.vk) && p.core.$outer.addClass("lg-hide-download")
                }), p.core.$el.on("onAfterSlide.lg.tm", function(e, t) {
                    p.core.$slide.eq(t).removeClass("lg-video-playing")
                })
            }, e.prototype.loadVideo = function(e, t, i, s, o) {
                var r = "",
                    n = 1,
                    a = "",
                    l = this.core.isVideo(e, s) || {};
                if (i && (n = this.videoLoaded ? 0 : 1), l.youtube) a = "?wmode=opaque&autoplay=" + n + "&enablejsapi=1", this.core.s.youtubePlayerParams && (a = a + "&" + u.param(this.core.s.youtubePlayerParams)), r = '<iframe class="lg-video-object lg-youtube ' + t + '" width="560" height="315" src="//www.youtube.com/embed/' + l.youtube[1] + a + '" frameborder="0" allowfullscreen></iframe>';
                else if (l.vimeo) a = "?autoplay=" + n + "&api=1", this.core.s.vimeoPlayerParams && (a = a + "&" + u.param(this.core.s.vimeoPlayerParams)), r = '<iframe class="lg-video-object lg-vimeo ' + t + '" width="560" height="315"  src="//player.vimeo.com/video/' + l.vimeo[1] + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
                else if (l.dailymotion) a = "?wmode=opaque&autoplay=" + n + "&api=postMessage", this.core.s.dailymotionPlayerParams && (a = a + "&" + u.param(this.core.s.dailymotionPlayerParams)), r = '<iframe class="lg-video-object lg-dailymotion ' + t + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + l.dailymotion[1] + a + '" frameborder="0" allowfullscreen></iframe>';
                else if (l.html5) {
                    var c = o.substring(0, 1);
                    "." !== c && "#" !== c || (o = u(o).html()), r = o
                } else l.vk && (a = "&autoplay=" + n, this.core.s.vkPlayerParams && (a = a + "&" + u.param(this.core.s.vkPlayerParams)), r = '<iframe class="lg-video-object lg-vk ' + t + '" width="560" height="315" src="http://vk.com/video_ext.php?' + l.vk[1] + a + '" frameborder="0" allowfullscreen></iframe>');
                return r
            }, e.prototype.destroy = function() {
                this.videoLoaded = !1
            }, u.fn.lightGallery.modules.video = e
        }()
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e)
        }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(0, function(p) {
        ! function() {
            "use strict";
            var e, t, i = {
                    scale: 1,
                    zoom: !0,
                    actualSize: !0,
                    enableZoomAfter: 300,
                    useLeftForZoom: (e = !1, t = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./), t && parseInt(t[2], 10) < 54 && (e = !0), e)
                },
                s = function(e) {
                    return this.core = p(e).data("lightGallery"), this.core.s = p.extend({}, i, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = p(window).width() / 2, this.pageY = p(window).height() / 2 + p(window).scrollTop()), this
                };
            s.prototype.init = function() {
                var n = this,
                    e = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
                n.core.s.actualSize && (e += '<span id="lg-actual-size" class="lg-icon"></span>'), n.core.s.useLeftForZoom ? n.core.$outer.addClass("lg-use-left-for-zoom") : n.core.$outer.addClass("lg-use-transition-for-zoom"), this.core.$outer.find(".lg-toolbar").append(e), n.core.$el.on("onSlideItemLoad.lg.tm.zoom", function(e, t, i) {
                    var s = n.core.s.enableZoomAfter + i;
                    p("body").hasClass("lg-from-hash") && i ? s = 0 : p("body").removeClass("lg-from-hash"), n.zoomabletimeout = setTimeout(function() {
                        n.core.$slide.eq(t).addClass("lg-zoomable")
                    }, s + 30)
                });
                var a = 1,
                    t = function(e) {
                        var t = n.core.$outer.find(".lg-current .lg-image"),
                            i = (p(window).width() - t.prop("offsetWidth")) / 2,
                            s = (p(window).height() - t.prop("offsetHeight")) / 2 + p(window).scrollTop(),
                            o = (e - 1) * (n.pageX - i),
                            r = (e - 1) * (n.pageY - s);
                        t.css("transform", "scale3d(" + e + ", " + e + ", 1)").attr("data-scale", e), n.core.s.useLeftForZoom ? t.parent().css({
                            left: -o + "px",
                            top: -r + "px"
                        }).attr("data-x", o).attr("data-y", r) : t.parent().css("transform", "translate3d(-" + o + "px, -" + r + "px, 0)").attr("data-x", o).attr("data-y", r)
                    },
                    l = function() {
                        1 < a ? n.core.$outer.addClass("lg-zoomed") : n.resetZoom(), a < 1 && (a = 1), t(a)
                    },
                    s = function(e, t, i, s) {
                        var o, r = t.prop("offsetWidth");
                        o = n.core.s.dynamic ? n.core.s.dynamicEl[i].width || t[0].naturalWidth || r : n.core.$items.eq(i).attr("data-width") || t[0].naturalWidth || r, n.core.$outer.hasClass("lg-zoomed") ? a = 1 : r < o && (a = o / r || 2), s ? (n.pageX = p(window).width() / 2, n.pageY = p(window).height() / 2 + p(window).scrollTop()) : (n.pageX = e.pageX || e.originalEvent.targetTouches[0].pageX, n.pageY = e.pageY || e.originalEvent.targetTouches[0].pageY), l(), setTimeout(function() {
                            n.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
                        }, 10)
                    },
                    o = !1;
                n.core.$el.on("onAferAppendSlide.lg.tm.zoom", function(e, t) {
                    var i = n.core.$slide.eq(t).find(".lg-image");
                    i.on("dblclick", function(e) {
                        s(e, i, t)
                    }), i.on("touchstart", function(e) {
                        o ? (clearTimeout(o), o = null, s(e, i, t)) : o = setTimeout(function() {
                            o = null
                        }, 300), e.preventDefault()
                    })
                }), p(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function() {
                    n.pageX = p(window).width() / 2, n.pageY = p(window).height() / 2 + p(window).scrollTop(), t(a)
                }), p("#lg-zoom-out").on("click.lg", function() {
                    n.core.$outer.find(".lg-current .lg-image").length && (a -= n.core.s.scale, l())
                }), p("#lg-zoom-in").on("click.lg", function() {
                    n.core.$outer.find(".lg-current .lg-image").length && (a += n.core.s.scale, l())
                }), p("#lg-actual-size").on("click.lg", function(e) {
                    s(e, n.core.$slide.eq(n.core.index).find(".lg-image"), n.core.index, !0)
                }), n.core.$el.on("onBeforeSlide.lg.tm", function() {
                    a = 1, n.resetZoom()
                }), n.zoomDrag(), n.zoomSwipe()
            }, s.prototype.resetZoom = function() {
                this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = p(window).width() / 2, this.pageY = p(window).height() / 2 + p(window).scrollTop()
            }, s.prototype.zoomSwipe = function() {
                var o = this,
                    r = {},
                    n = {},
                    a = !1,
                    l = !1,
                    c = !1;
                o.core.$slide.on("touchstart.lg", function(e) {
                    if (o.core.$outer.hasClass("lg-zoomed")) {
                        var t = o.core.$slide.eq(o.core.index).find(".lg-object");
                        c = t.prop("offsetHeight") * t.attr("data-scale") > o.core.$outer.find(".lg").height(), ((l = t.prop("offsetWidth") * t.attr("data-scale") > o.core.$outer.find(".lg").width()) || c) && (e.preventDefault(), r = {
                            x: e.originalEvent.targetTouches[0].pageX,
                            y: e.originalEvent.targetTouches[0].pageY
                        })
                    }
                }), o.core.$slide.on("touchmove.lg", function(e) {
                    if (o.core.$outer.hasClass("lg-zoomed")) {
                        var t, i, s = o.core.$slide.eq(o.core.index).find(".lg-img-wrap");
                        e.preventDefault(), a = !0, n = {
                            x: e.originalEvent.targetTouches[0].pageX,
                            y: e.originalEvent.targetTouches[0].pageY
                        }, o.core.$outer.addClass("lg-zoom-dragging"), i = c ? -Math.abs(s.attr("data-y")) + (n.y - r.y) : -Math.abs(s.attr("data-y")), t = l ? -Math.abs(s.attr("data-x")) + (n.x - r.x) : -Math.abs(s.attr("data-x")), (15 < Math.abs(n.x - r.x) || 15 < Math.abs(n.y - r.y)) && (o.core.s.useLeftForZoom ? s.css({
                            left: t + "px",
                            top: i + "px"
                        }) : s.css("transform", "translate3d(" + t + "px, " + i + "px, 0)"))
                    }
                }), o.core.$slide.on("touchend.lg", function() {
                    o.core.$outer.hasClass("lg-zoomed") && a && (a = !1, o.core.$outer.removeClass("lg-zoom-dragging"), o.touchendZoom(r, n, l, c))
                })
            }, s.prototype.zoomDrag = function() {
                var o = this,
                    r = {},
                    n = {},
                    a = !1,
                    l = !1,
                    c = !1,
                    d = !1;
                o.core.$slide.on("mousedown.lg.zoom", function(e) {
                    var t = o.core.$slide.eq(o.core.index).find(".lg-object");
                    d = t.prop("offsetHeight") * t.attr("data-scale") > o.core.$outer.find(".lg").height(), c = t.prop("offsetWidth") * t.attr("data-scale") > o.core.$outer.find(".lg").width(), o.core.$outer.hasClass("lg-zoomed") && p(e.target).hasClass("lg-object") && (c || d) && (e.preventDefault(), r = {
                        x: e.pageX,
                        y: e.pageY
                    }, a = !0, o.core.$outer.scrollLeft += 1, o.core.$outer.scrollLeft -= 1, o.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
                }), p(window).on("mousemove.lg.zoom", function(e) {
                    if (a) {
                        var t, i, s = o.core.$slide.eq(o.core.index).find(".lg-img-wrap");
                        l = !0, n = {
                            x: e.pageX,
                            y: e.pageY
                        }, o.core.$outer.addClass("lg-zoom-dragging"), i = d ? -Math.abs(s.attr("data-y")) + (n.y - r.y) : -Math.abs(s.attr("data-y")), t = c ? -Math.abs(s.attr("data-x")) + (n.x - r.x) : -Math.abs(s.attr("data-x")), o.core.s.useLeftForZoom ? s.css({
                            left: t + "px",
                            top: i + "px"
                        }) : s.css("transform", "translate3d(" + t + "px, " + i + "px, 0)")
                    }
                }), p(window).on("mouseup.lg.zoom", function(e) {
                    a && (a = !1, o.core.$outer.removeClass("lg-zoom-dragging"), !l || r.x === n.x && r.y === n.y || (n = {
                        x: e.pageX,
                        y: e.pageY
                    }, o.touchendZoom(r, n, c, d)), l = !1), o.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
                })
            }, s.prototype.touchendZoom = function(e, t, i, s) {
                var o = this.core.$slide.eq(this.core.index).find(".lg-img-wrap"),
                    r = this.core.$slide.eq(this.core.index).find(".lg-object"),
                    n = -Math.abs(o.attr("data-x")) + (t.x - e.x),
                    a = -Math.abs(o.attr("data-y")) + (t.y - e.y),
                    l = (this.core.$outer.find(".lg").height() - r.prop("offsetHeight")) / 2,
                    c = Math.abs(r.prop("offsetHeight") * Math.abs(r.attr("data-scale")) - this.core.$outer.find(".lg").height() + l),
                    d = (this.core.$outer.find(".lg").width() - r.prop("offsetWidth")) / 2,
                    p = Math.abs(r.prop("offsetWidth") * Math.abs(r.attr("data-scale")) - this.core.$outer.find(".lg").width() + d);
                (15 < Math.abs(t.x - e.x) || 15 < Math.abs(t.y - e.y)) && (s && (a <= -c ? a = -c : -l <= a && (a = -l)), i && (n <= -p ? n = -p : -d <= n && (n = -d)), s ? o.attr("data-y", Math.abs(a)) : a = -Math.abs(o.attr("data-y")), i ? o.attr("data-x", Math.abs(n)) : n = -Math.abs(o.attr("data-x")), this.core.s.useLeftForZoom ? o.css({
                    left: n + "px",
                    top: a + "px"
                }) : o.css("transform", "translate3d(" + n + "px, " + a + "px, 0)"))
            }, s.prototype.destroy = function() {
                this.core.$el.off(".lg.zoom"), p(window).off(".lg.zoom"), this.core.$slide.off(".lg.zoom"), this.core.$el.off(".lg.tm.zoom"), this.resetZoom(), clearTimeout(this.zoomabletimeout), this.zoomabletimeout = !1
            }, p.fn.lightGallery.modules.zoom = s
        }()
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e)
        }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(0, function(i) {
        ! function() {
            "use strict";
            var t = {
                    hash: !0
                },
                e = function(e) {
                    return this.core = i(e).data("lightGallery"), this.core.s = i.extend({}, t, this.core.s), this.core.s.hash && (this.oldHash = window.location.hash, this.init()), this
                };
            e.prototype.init = function() {
                var t, s = this;
                s.core.$el.on("onAfterSlide.lg.tm", function(e, t, i) {
                    history.replaceState ? history.replaceState(null, null, "#lg=" + s.core.s.galleryId + "&slide=" + i) : window.location.hash = "lg=" + s.core.s.galleryId + "&slide=" + i
                }), i(window).on("hashchange.lg.hash", function() {
                    t = window.location.hash;
                    var e = parseInt(t.split("&slide=")[1], 10); - 1 < t.indexOf("lg=" + s.core.s.galleryId) ? s.core.slide(e, !1, !1) : s.core.lGalleryOn && s.core.destroy()
                })
            }, e.prototype.destroy = function() {
                this.core.s.hash && (this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0 ? history.replaceState ? history.replaceState(null, null, this.oldHash) : window.location.hash = this.oldHash : history.replaceState ? history.replaceState(null, document.title, window.location.pathname + window.location.search) : window.location.hash = "", this.core.$el.off(".lg.hash"))
            }, i.fn.lightGallery.modules.hash = e
        }()
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e)
        }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(0, function(o) {
        ! function() {
            "use strict";
            var t = {
                    share: !0,
                    facebook: !0,
                    facebookDropdownText: "Facebook",
                    twitter: !0,
                    twitterDropdownText: "Twitter",
                    googlePlus: !0,
                    googlePlusDropdownText: "GooglePlus",
                    pinterest: !0,
                    pinterestDropdownText: "Pinterest"
                },
                e = function(e) {
                    return this.core = o(e).data("lightGallery"), this.core.s = o.extend({}, t, this.core.s), this.core.s.share && this.init(), this
                };
            e.prototype.init = function() {
                var s = this,
                    e = '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
                e += s.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + "</span></a></li>" : "", e += s.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + "</span></a></li>" : "", e += s.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + "</span></a></li>" : "", e += s.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + "</span></a></li>" : "", e += "</ul></span>", this.core.$outer.find(".lg-toolbar").append(e), this.core.$outer.find(".lg").append('<div id="lg-dropdown-overlay"></div>'), o("#lg-share").on("click.lg", function() {
                    s.core.$outer.toggleClass("lg-dropdown-active")
                }), o("#lg-dropdown-overlay").on("click.lg", function() {
                    s.core.$outer.removeClass("lg-dropdown-active")
                }), s.core.$el.on("onAfterSlide.lg.tm", function(e, t, i) {
                    setTimeout(function() {
                        o("#lg-share-facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(s.getSahreProps(i, "facebookShareUrl") || window.location.href)), o("#lg-share-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + s.getSahreProps(i, "tweetText") + "&url=" + encodeURIComponent(s.getSahreProps(i, "twitterShareUrl") || window.location.href)), o("#lg-share-googleplus").attr("href", "https://plus.google.com/share?url=" + encodeURIComponent(s.getSahreProps(i, "googleplusShareUrl") || window.location.href)), o("#lg-share-pinterest").attr("href", "http://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(s.getSahreProps(i, "pinterestShareUrl") || window.location.href) + "&media=" + encodeURIComponent(s.getSahreProps(i, "src")) + "&description=" + s.getSahreProps(i, "pinterestText"))
                    }, 100)
                })
            }, e.prototype.getSahreProps = function(e, t) {
                var i = "";
                if (this.core.s.dynamic) i = this.core.s.dynamicEl[e][t];
                else {
                    var s = this.core.$items.eq(e).attr("href"),
                        o = this.core.$items.eq(e).data(t);
                    i = "src" === t && s || o
                }
                return i
            }, e.prototype.destroy = function() {}, o.fn.lightGallery.modules.share = e
        }()
    }),
    function(e, p) {
        (function(e) {
            if ("undefined" != typeof module && module.exports) return function(e) {
                module.exports = e()
            };
            if ("function" == typeof define && define.amd) return define;
            if ("undefined" != typeof window) return function(e) {
                window.MobileDetect = e()
            };
            throw new Error("unknown environment")
        })()(function() {
            "use strict";

            function t(e, t) {
                return null != e && null != t && e.toLowerCase() === t.toLowerCase()
            }

            function i(e, t) {
                var i, s, o = e.length;
                if (!o || !t) return !1;
                for (i = t.toLowerCase(), s = 0; s < o; ++s)
                    if (i === e[s].toLowerCase()) return !0;
                return !1
            }

            function a(e) {
                for (var t in e) d.call(e, t) && (e[t] = new RegExp(e[t], "i"))
            }

            function n(e, t) {
                this.ua = e || "", this._cache = {}, this.maxPhoneWidth = t || 600
            }
            var l, c = {
                    mobileDetectRules: {
                        phones: {
                            iPhone: "\\biPhone\\b|\\biPod\\b",
                            BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                            HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
                            Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                            Dell: "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                            Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
                            Samsung: "\\bSamsung\\b|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C",
                            LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
                            Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                            Asus: "Asus.*Galaxy|PadFone.*Mobile",
                            NokiaLumia: "Lumia [0-9]{3,4}",
                            Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                            Palm: "PalmSource|Palm",
                            Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                            Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                            Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                            Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                            iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                            SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                            Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                            Alcatel: "Alcatel",
                            Nintendo: "Nintendo 3DS",
                            Amoi: "Amoi",
                            INQ: "INQ",
                            GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                        },
                        tablets: {
                            iPad: "iPad|iPad.*Mobile",
                            NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                            SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y",
                            Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                            SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                            HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                            AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b",
                            BlackBerryTablet: "PlayBook|RIM Tablet",
                            HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                            MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                            NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                            AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                            ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                            LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                            FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                            PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                            LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
                            DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                            YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                            MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                            ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                            IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                            IRUTablet: "M702pro",
                            MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                            EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                            AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                            ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                            AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                            NokiaLumiaTablet: "Lumia 2520",
                            SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
                            PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                            CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                            CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                            MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                            MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                            SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                            RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                            FlyTablet: "IQ310|Fly Vision",
                            bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris [E|M]10)|Maxwell.*Lite|Maxwell.*Plus",
                            HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
                            NecTablet: "\\bN-06D|\\bN-08D",
                            PantechTablet: "Pantech.*P4100",
                            BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                            VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                            ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                            PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                            NabiTablet: "Android.*\\bNabi",
                            KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                            DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                            TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                            PlaystationTablet: "Playstation.*(Portable|Vita)",
                            TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                            PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                            AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                            DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                            GalapadTablet: "Android.*\\bG1\\b",
                            MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                            KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                            AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                            PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                            YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                            ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                            GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                            PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                            OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
                            HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                            DPSTablet: "DPS Dream 9|DPS Dual 7",
                            VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                            CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                            MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                            ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                            GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                            ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                            VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                            ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                            StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                            VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
                            EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                            RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                            iMobileTablet: "i-mobile i-note",
                            TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                            AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                            AMPETablet: "Android.* A78 ",
                            SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                            TecnoTablet: "TECNO P9",
                            JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                            iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                            FX2Tablet: "FX2 PAD7|FX2 PAD10",
                            XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                            ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                            OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                            CaptivaTablet: "CAPTIVA PAD",
                            IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                            TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                            OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
                            JaytechTablet: "TPC-PA762",
                            BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                            DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                            EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                            LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                            AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                            MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                            CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                            WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                            MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                            NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                            NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                            LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                            UbislateTablet: "UbiSlate[\\s]?7C",
                            PocketBookTablet: "Pocketbook",
                            KocasoTablet: "\\b(TB-1207)\\b",
                            HisenseTablet: "\\b(F5281|E2371)\\b",
                            Hudl: "Hudl HT7S3|Hudl 2",
                            TelstraTablet: "T-Hub2",
                            GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b"
                        },
                        oss: {
                            AndroidOS: "Android",
                            BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                            PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                            SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                            WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                            WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                            iOS: "\\biPhone.*Mobile|\\biPod|\\biPad",
                            MeeGoOS: "MeeGo",
                            MaemoOS: "Maemo",
                            JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                            webOS: "webOS|hpwOS",
                            badaOS: "\\bBada\\b",
                            BREWOS: "BREW"
                        },
                        uas: {
                            Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                            Dolfin: "\\bDolfin\\b",
                            Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
                            Skyfire: "Skyfire",
                            Edge: "Mobile Safari/[.0-9]* Edge",
                            IE: "IEMobile|MSIEMobile",
                            Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                            Bolt: "bolt",
                            TeaShark: "teashark",
                            Blazer: "Blazer",
                            Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                            UCBrowser: "UC.*Browser|UCWEB",
                            baiduboxapp: "baiduboxapp",
                            baidubrowser: "baidubrowser",
                            DiigoBrowser: "DiigoBrowser",
                            Puffin: "Puffin",
                            Mercury: "\\bMercury\\b",
                            ObigoBrowser: "Obigo",
                            NetFront: "NF-Browser",
                            GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                            PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
                        },
                        props: {
                            Mobile: "Mobile/[VER]",
                            Build: "Build/[VER]",
                            Version: "Version/[VER]",
                            VendorID: "VendorID/[VER]",
                            iPad: "iPad.*CPU[a-z ]+[VER]",
                            iPhone: "iPhone.*CPU[a-z ]+[VER]",
                            iPod: "iPod.*CPU[a-z ]+[VER]",
                            Kindle: "Kindle/[VER]",
                            Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                            Coast: ["Coast/[VER]"],
                            Dolfin: "Dolfin/[VER]",
                            Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                            Fennec: "Fennec/[VER]",
                            Edge: "Edge/[VER]",
                            IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                            NetFront: "NetFront/[VER]",
                            NokiaBrowser: "NokiaBrowser/[VER]",
                            Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                            "Opera Mini": "Opera Mini/[VER]",
                            "Opera Mobi": "Version/[VER]",
                            "UC Browser": "UC Browser[VER]",
                            MQQBrowser: "MQQBrowser/[VER]",
                            MicroMessenger: "MicroMessenger/[VER]",
                            baiduboxapp: "baiduboxapp/[VER]",
                            baidubrowser: "baidubrowser/[VER]",
                            SamsungBrowser: "SamsungBrowser/[VER]",
                            Iron: "Iron/[VER]",
                            Safari: ["Version/[VER]", "Safari/[VER]"],
                            Skyfire: "Skyfire/[VER]",
                            Tizen: "Tizen/[VER]",
                            Webkit: "webkit[ /][VER]",
                            PaleMoon: "PaleMoon/[VER]",
                            Gecko: "Gecko/[VER]",
                            Trident: "Trident/[VER]",
                            Presto: "Presto/[VER]",
                            Goanna: "Goanna/[VER]",
                            iOS: " \\bi?OS\\b [VER][ ;]{1}",
                            Android: "Android [VER]",
                            BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                            BREW: "BREW [VER]",
                            Java: "Java/[VER]",
                            "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                            "Windows Phone": "Windows Phone [VER]",
                            "Windows CE": "Windows CE/[VER]",
                            "Windows NT": "Windows NT [VER]",
                            Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                            webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                        },
                        utils: {
                            Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                            MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                            DesktopMode: "WPDesktop",
                            TV: "SonyDTV|HbbTV",
                            WebKit: "(webkit)[ /]([\\w.]+)",
                            Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
                            Watch: "SM-V700"
                        }
                    },
                    detectMobileBrowsers: {
                        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                        tabletPattern: /android|ipad|playbook|silk/i
                    }
                },
                d = Object.prototype.hasOwnProperty;
            return c.FALLBACK_PHONE = "UnknownPhone", c.FALLBACK_TABLET = "UnknownTablet", c.FALLBACK_MOBILE = "UnknownMobile", l = "isArray" in Array ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                function() {
                    var e, t, i, s, o, r, n = c.mobileDetectRules;
                    for (e in n.props)
                        if (d.call(n.props, e)) {
                            for (t = n.props[e], l(t) || (t = [t]), o = t.length, s = 0; s < o; ++s) 0 <= (r = (i = t[s]).indexOf("[VER]")) && (i = i.substring(0, r) + "([\\w._\\+]+)" + i.substring(r + 5)), t[s] = new RegExp(i, "i");
                            n.props[e] = t
                        }
                    a(n.oss), a(n.phones), a(n.tablets), a(n.uas), a(n.utils), n.oss0 = {
                        WindowsPhoneOS: n.oss.WindowsPhoneOS,
                        WindowsMobileOS: n.oss.WindowsMobileOS
                    }
                }(), c.findMatch = function(e, t) {
                    for (var i in e)
                        if (d.call(e, i) && e[i].test(t)) return i;
                    return null
                }, c.findMatches = function(e, t) {
                    var i = [];
                    for (var s in e) d.call(e, s) && e[s].test(t) && i.push(s);
                    return i
                }, c.getVersionStr = function(e, t) {
                    var i, s, o, r, n = c.mobileDetectRules.props;
                    if (d.call(n, e))
                        for (o = (i = n[e]).length, s = 0; s < o; ++s)
                            if (null !== (r = i[s].exec(t))) return r[1];
                    return null
                }, c.getVersion = function(e, t) {
                    var i = c.getVersionStr(e, t);
                    return i ? c.prepareVersionNo(i) : NaN
                }, c.prepareVersionNo = function(e) {
                    var t;
                    return 1 === (t = e.split(/[a-z._ \/\-]/i)).length && (e = t[0]), 1 < t.length && (e = t[0] + ".", t.shift(), e += t.join("")), Number(e)
                }, c.isMobileFallback = function(e) {
                    return c.detectMobileBrowsers.fullPattern.test(e) || c.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
                }, c.isTabletFallback = function(e) {
                    return c.detectMobileBrowsers.tabletPattern.test(e)
                }, c.prepareDetectionCache = function(e, t, i) {
                    var s, o, r;
                    if (e.mobile === p) return (o = c.findMatch(c.mobileDetectRules.tablets, t)) ? (e.mobile = e.tablet = o, void(e.phone = null)) : (s = c.findMatch(c.mobileDetectRules.phones, t)) ? (e.mobile = e.phone = s, void(e.tablet = null)) : void(c.isMobileFallback(t) ? (r = n.isPhoneSized(i)) === p ? (e.mobile = c.FALLBACK_MOBILE, e.tablet = e.phone = null) : r ? (e.mobile = e.phone = c.FALLBACK_PHONE, e.tablet = null) : (e.mobile = e.tablet = c.FALLBACK_TABLET, e.phone = null) : c.isTabletFallback(t) ? (e.mobile = e.tablet = c.FALLBACK_TABLET, e.phone = null) : e.mobile = e.tablet = e.phone = null)
                }, c.mobileGrade = function(e) {
                    var t = null !== e.mobile();
                    return e.os("iOS") && 4.3 <= e.version("iPad") || e.os("iOS") && 3.1 <= e.version("iPhone") || e.os("iOS") && 3.1 <= e.version("iPod") || 2.1 < e.version("Android") && e.is("Webkit") || 7 <= e.version("Windows Phone OS") || e.is("BlackBerry") && 6 <= e.version("BlackBerry") || e.match("Playbook.*Tablet") || 1.4 <= e.version("webOS") && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && 12 <= e.version("Firefox") || e.is("Chrome") && e.is("AndroidOS") && 4 <= e.version("Android") || e.is("Skyfire") && 4.1 <= e.version("Skyfire") && e.is("AndroidOS") && 2.3 <= e.version("Android") || e.is("Opera") && 11 < e.version("Opera Mobi") && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && 2 <= e.version("Bada") || (e.is("UC Browser") || e.is("Dolfin")) && 2.3 <= e.version("Android") || e.match("Kindle Fire") || e.is("Kindle") && 3 <= e.version("Kindle") || e.is("AndroidOS") && e.is("NookTablet") || 11 <= e.version("Chrome") && !t || 5 <= e.version("Safari") && !t || 4 <= e.version("Firefox") && !t || 7 <= e.version("MSIE") && !t || 10 <= e.version("Opera") && !t ? "A" : e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && 5 <= e.version("BlackBerry") && e.version("BlackBerry") < 6 || 5 <= e.version("Opera Mini") && e.version("Opera Mini") <= 6.5 && (2.3 <= e.version("Android") || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || 11 <= e.version("Opera Mobi") && e.is("SymbianOS") ? "B" : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile"), "C")
                }, c.detectOS = function(e) {
                    return c.findMatch(c.mobileDetectRules.oss0, e) || c.findMatch(c.mobileDetectRules.oss, e)
                }, c.getDeviceSmallerSide = function() {
                    return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
                }, n.prototype = {
                    constructor: n,
                    mobile: function() {
                        return c.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                    },
                    phone: function() {
                        return c.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                    },
                    tablet: function() {
                        return c.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                    },
                    userAgent: function() {
                        return this._cache.userAgent === p && (this._cache.userAgent = c.findMatch(c.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                    },
                    userAgents: function() {
                        return this._cache.userAgents === p && (this._cache.userAgents = c.findMatches(c.mobileDetectRules.uas, this.ua)), this._cache.userAgents
                    },
                    os: function() {
                        return this._cache.os === p && (this._cache.os = c.detectOS(this.ua)), this._cache.os
                    },
                    version: function(e) {
                        return c.getVersion(e, this.ua)
                    },
                    versionStr: function(e) {
                        return c.getVersionStr(e, this.ua)
                    },
                    is: function(e) {
                        return i(this.userAgents(), e) || t(e, this.os()) || t(e, this.phone()) || t(e, this.tablet()) || i(c.findMatches(c.mobileDetectRules.utils, this.ua), e)
                    },
                    match: function(e) {
                        return e instanceof RegExp || (e = new RegExp(e, "i")), e.test(this.ua)
                    },
                    isPhoneSized: function(e) {
                        return n.isPhoneSized(e || this.maxPhoneWidth)
                    },
                    mobileGrade: function() {
                        return this._cache.grade === p && (this._cache.grade = c.mobileGrade(this)), this._cache.grade
                    }
                }, n.isPhoneSized = "undefined" != typeof window && window.screen ? function(e) {
                    return e < 0 ? p : c.getDeviceSmallerSide() <= e
                } : function() {}, n._impl = c, n.version = "1.3.7 2017-09-06", n
        })
    }(), window.Modernizr = function(e, p, r) {
        function t(e) {
            d.cssText = e
        }

        function n(e, t) {
            return typeof e === t
        }

        function a(e, t) {
            for (var i in e) {
                var s = e[i];
                if (!~("" + s).indexOf("-") && d[s] !== r) return "pfx" != t || s
            }
            return !1
        }

        function s(e, t, i) {
            var s = e.charAt(0).toUpperCase() + e.slice(1),
                o = (e + " " + g.join(s + " ") + s).split(" ");
            return n(t, "string") || n(t, "undefined") ? a(o, t) : function(e, t, i) {
                for (var s in e) {
                    var o = t[e[s]];
                    if (o !== r) return !1 === i ? e[s] : n(o, "function") ? o.bind(i || t) : o
                }
                return !1
            }(o = (e + " " + v.join(s + " ") + s).split(" "), t, i)
        }
        var i, o, l = {},
            u = p.documentElement,
            h = "modernizr",
            c = p.createElement(h),
            d = c.style,
            f = " -webkit- -moz- -o- -ms- ".split(" "),
            m = "Webkit Moz O ms",
            g = m.split(" "),
            v = m.toLowerCase().split(" "),
            y = {},
            T = [],
            b = T.slice,
            w = function(e, t, i, s) {
                var o, r, n, a, l = p.createElement("div"),
                    c = p.body,
                    d = c || p.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;)(n = p.createElement("div")).id = s ? s[i] : h + (i + 1), l.appendChild(n);
                return o = ["&#173;", '<style id="s', h, '">', e, "</style>"].join(""), l.id = h, (c ? l : d).innerHTML += o, d.appendChild(l), c || (d.style.background = "", d.style.overflow = "hidden", a = u.style.overflow, u.style.overflow = "hidden", u.appendChild(d)), r = t(l, e), c ? l.parentNode.removeChild(l) : (d.parentNode.removeChild(d), u.style.overflow = a), !!r
            },
            S = {}.hasOwnProperty;
        for (var _ in o = n(S, "undefined") || n(S.call, "undefined") ? function(e, t) {
                return t in e && n(e.constructor.prototype[t], "undefined")
            } : function(e, t) {
                return S.call(e, t)
            }, Function.prototype.bind || (Function.prototype.bind = function(s) {
                var o = this;
                if ("function" != typeof o) throw new TypeError;
                var r = b.call(arguments, 1),
                    n = function() {
                        if (this instanceof n) {
                            var e = function() {};
                            e.prototype = o.prototype;
                            var t = new e,
                                i = o.apply(t, r.concat(b.call(arguments)));
                            return Object(i) === i ? i : t
                        }
                        return o.apply(s, r.concat(b.call(arguments)))
                    };
                return n
            }), y.touch = function() {
                var t;
                return "ontouchstart" in e || e.DocumentTouch && p instanceof DocumentTouch ? t = !0 : w(["@media (", f.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                    t = 9 === e.offsetTop
                }), t
            }, y.csstransitions = function() {
                return s("transition")
            }, y) o(y, _) && (i = _.toLowerCase(), l[i] = y[_](), T.push((l[i] ? "" : "no-") + i));
        return l.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var i in e) o(e, i) && l.addTest(i, e[i]);
                else {
                    if (e = e.toLowerCase(), l[e] !== r) return l;
                    t = "function" == typeof t ? t() : t, u.className += " " + (t ? "" : "no-") + e, l[e] = t
                }
                return l
            }, t(""), c = null,
            function(e, l) {
                function c() {
                    var e = f.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function d(e) {
                    var t = a[e[s]];
                    return t || (t = {}, n++, e[s] = n, a[n] = t), t
                }

                function p(e, t, i) {
                    return t || (t = l), h ? t.createElement(e) : (i || (i = d(t)), !(s = i.cache[e] ? i.cache[e].cloneNode() : r.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e)).canHaveChildren || o.test(e) || s.tagUrn ? s : i.frag.appendChild(s));
                    var s
                }

                function t(e) {
                    e || (e = l);
                    var t, i, s, o, r, n, a = d(e);
                    return f.shivCSS && !u && !a.hasCSS && (a.hasCSS = (o = "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}", r = (s = e).createElement("p"), n = s.getElementsByTagName("head")[0] || s.documentElement, r.innerHTML = "x<style>" + o + "</style>", !!n.insertBefore(r.lastChild, n.firstChild))), h || (t = e, (i = a).cache || (i.cache = {}, i.createElem = t.createElement, i.createFrag = t.createDocumentFragment, i.frag = i.createFrag()), t.createElement = function(e) {
                        return f.shivMethods ? p(e, t, i) : i.createElem(e)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/[\w\-]+/g, function(e) {
                        return i.createElem(e), i.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(f, i.frag)), e
                }
                var u, h, i = e.html5 || {},
                    o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    r = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    s = "_html5shiv",
                    n = 0,
                    a = {};
                ! function() {
                    try {
                        var e = l.createElement("a");
                        e.innerHTML = "<xyz></xyz>", u = "hidden" in e, h = 1 == e.childNodes.length || function() {
                            l.createElement("a");
                            var e = l.createDocumentFragment();
                            return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                        }()
                    } catch (e) {
                        h = u = !0
                    }
                }();
                var f = {
                    elements: i.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: "3.7.0",
                    shivCSS: !1 !== i.shivCSS,
                    supportsUnknownElements: h,
                    shivMethods: !1 !== i.shivMethods,
                    type: "default",
                    shivDocument: t,
                    createElement: p,
                    createDocumentFragment: function(e, t) {
                        if (e || (e = l), h) return e.createDocumentFragment();
                        for (var i = (t = t || d(e)).frag.cloneNode(), s = 0, o = c(), r = o.length; s < r; s++) i.createElement(o[s]);
                        return i
                    }
                };
                e.html5 = f, t(l)
            }(this, p), l._version = "2.8.2", l._prefixes = f, l._domPrefixes = v, l._cssomPrefixes = g, l.testProp = function(e) {
                return a([e])
            }, l.testAllProps = s, l.testStyles = w, l.prefixed = function(e, t, i) {
                return t ? s(e, t, i) : s(e, "pfx")
            }, u.className = u.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + T.join(" "), l
    }(this, this.document),
    function(e, u, a) {
        function p(e) {
            return "[object Function]" == o.call(e)
        }

        function h(e) {
            return "string" == typeof e
        }

        function f() {}

        function m(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function g() {
            var e = b.shift();
            w = 1, e ? e.t ? y(function() {
                ("c" == e.t ? v.injectCss : v.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), g()) : w = 0
        }

        function t(e, t, i, s, o) {
            return w = 0, t = t || "j", h(e) ? function(i, s, e, t, o, r, n) {
                function a(e) {
                    if (!c && m(l.readyState) && (p.r = c = 1, !w && g(), l.onload = l.onreadystatechange = null, e))
                        for (var t in "img" != i && y(function() {
                                _.removeChild(l)
                            }, 50), C[s]) C[s].hasOwnProperty(t) && C[s][t].onload()
                }
                n = n || v.errorTimeout;
                var l = u.createElement(i),
                    c = 0,
                    d = 0,
                    p = {
                        t: e,
                        s: s,
                        e: o,
                        a: r,
                        x: n
                    };
                1 === C[s] && (d = 1, C[s] = []), "object" == i ? l.data = s : (l.src = s, l.type = i), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                    a.call(this, d)
                }, b.splice(t, 0, p), "img" != i && (d || 2 === C[s] ? (_.insertBefore(l, S ? null : T), y(a, n)) : C[s].push(l))
            }("c" == t ? c : n, e, t, this.i++, i, s, o) : (b.splice(this.i++, 0, e), 1 == b.length && g()), this
        }

        function l() {
            var e = v;
            return e.loader = {
                load: t,
                i: 0
            }, e
        }
        var i, v, s = u.documentElement,
            y = e.setTimeout,
            T = u.getElementsByTagName("script")[0],
            o = {}.toString,
            b = [],
            w = 0,
            r = "MozAppearance" in s.style,
            S = r && !!u.createRange().compareNode,
            _ = S ? s : T.parentNode,
            n = (s = e.opera && "[object Opera]" == o.call(e.opera), s = !!u.attachEvent && !s, r ? "object" : s ? "script" : "img"),
            c = s ? "script" : n,
            x = Array.isArray || function(e) {
                return "[object Array]" == o.call(e)
            },
            P = [],
            C = {},
            M = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        (v = function(e) {
            function d(e, t, i, s, o) {
                var r = function(e) {
                        e = e.split("!");
                        var t, i, s, o = P.length,
                            r = e.pop(),
                            n = e.length;
                        for (r = {
                                url: r,
                                origUrl: r,
                                prefixes: e
                            }, i = 0; i < n; i++) s = e[i].split("="), (t = M[s.shift()]) && (r = t(r, s));
                        for (i = 0; i < o; i++) r = P[i](r);
                        return r
                    }(e),
                    n = r.autoCallback;
                r.url.split(".").pop().split("?").shift(), r.bypass || (t && (t = p(t) ? t : t[e] || t[s] || t[e.split("/").pop().split("?")[0]]), r.instead ? r.instead(e, t, i, s, o) : (C[r.url] ? r.noexec = !0 : C[r.url] = 1, i.load(r.url, r.forceCSS || !r.forceJS && "css" == r.url.split(".").pop().split("?").shift() ? "c" : a, r.noexec, r.attrs, r.timeout), (p(t) || p(n)) && i.load(function() {
                    l(), t && t(r.origUrl, o, s), n && n(r.origUrl, o, s), C[r.url] = 2
                })))
            }

            function t(e, t) {
                function i(i, e) {
                    if (i) {
                        if (h(i)) e || (a = function() {
                            var e = [].slice.call(arguments);
                            l.apply(this, e), c()
                        }), d(i, a, t, 0, r);
                        else if (Object(i) === i)
                            for (o in s = function() {
                                    var e, t = 0;
                                    for (e in i) i.hasOwnProperty(e) && t++;
                                    return t
                                }(), i) i.hasOwnProperty(o) && (!e && !--s && (p(a) ? a = function() {
                                var e = [].slice.call(arguments);
                                l.apply(this, e), c()
                            } : a[o] = function(t) {
                                return function() {
                                    var e = [].slice.call(arguments);
                                    t && t.apply(this, e), c()
                                }
                            }(l[o])), d(i[o], a, t, o, r))
                    } else !e && c()
                }
                var s, o, r = !!e.test,
                    n = e.load || e.both,
                    a = e.callback || f,
                    l = a,
                    c = e.complete || f;
                i(r ? e.yep : e.nope, !!n), n && i(n)
            }
            var i, s, o = this.yepnope.loader;
            if (h(e)) d(e, 0, o, 0);
            else if (x(e))
                for (i = 0; i < e.length; i++) h(s = e[i]) ? d(s, 0, o, 0) : x(s) ? v(s) : Object(s) === s && t(s, o);
            else Object(e) === e && t(e, o)
        }).addPrefix = function(e, t) {
            M[e] = t
        }, v.addFilter = function(e) {
            P.push(e)
        }, v.errorTimeout = 1e4, null == u.readyState && u.addEventListener && (u.readyState = "loading", u.addEventListener("DOMContentLoaded", i = function() {
            u.removeEventListener("DOMContentLoaded", i, 0), u.readyState = "complete"
        }, 0)), e.yepnope = l(), e.yepnope.executeStack = g, e.yepnope.injectJs = function(e, t, i, s, o, r) {
            var n, a, l = u.createElement("script");
            s = s || v.errorTimeout;
            for (a in l.src = e, i) l.setAttribute(a, i[a]);
            t = r ? g : t || f, l.onreadystatechange = l.onload = function() {
                !n && m(l.readyState) && (n = 1, t(), l.onload = l.onreadystatechange = null)
            }, y(function() {
                n || t(n = 1)
            }, s), o ? l.onload() : T.parentNode.insertBefore(l, T)
        }, e.yepnope.injectCss = function(e, t, i, s, o, r) {
            var n;
            s = u.createElement("link"), t = r ? g : t || f;
            for (n in s.href = e, s.rel = "stylesheet", s.type = "text/css", i) s.setAttribute(n, i[n]);
            o || (T.parentNode.insertBefore(s, T), y(t, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(s, n) {
        "use strict";
        var a = n("body"),
            o = s.document.documentElement,
            l = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                msTransition: "MSTransitionEnd",
                transition: "transitionend"
            }[Modernizr.prefixed("transition")],
            c = Modernizr.csstransitions;

        function e(e) {
            var t, i;
            return "x" === e ? (t = o.clientWidth, i = s.innerWidth) : "y" === e && (t = o.clientHeight, i = s.innerHeight), t < i ? i : t
        }
        var t = {
            width: e("x"),
            height: e("y")
        };

        function r(e, t) {
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            return e
        }

        function i(e, t, i, s) {
            this.el = e, this.arrow_ani = t, this.autotimer = 0, this.autoplay = i, this.options = r({}, this.options), r(this.options, s), this._init()
        }
        i.prototype.options = {}, i.prototype._init = function() {
            this._setTransforms(), this.effect = this.el.getAttribute("data-effect") || "effect-1", this.isAnimating = !1, this.panels = [].slice.call(this.el.querySelectorAll(".panel")), this.panelsCount = this.panels.length, this.current = 0, classie.add(this.panels[0], "current"), this.panels.forEach(function(e) {
                for (var t = e.querySelector("img"), i = "", s = 0; s < 4; ++s) i += '<div class="bg-tile"><div class="bg-img"><img src="' + t.src + '" /></div></div>';
                e.removeChild(t), e.innerHTML = i + e.innerHTML
            }), a.hasClass("thb-full-menu-left-enabled") || a.addClass(n(this.panels[0]).data("color")), this._autoplay(), this._initEvents()
        }, i.prototype._setTransforms = function() {
            this.transforms = {
                "effect-1": {
                    next: ["translate3d(0, " + (t.height / 2 + 10) + "px, 0)", "translate3d(-" + (t.width / 2 + 10) + "px, 0, 0)", "translate3d(" + (t.width / 2 + 10) + "px, 0, 0)", "translate3d(0, -" + (t.height / 2 + 10) + "px, 0)"],
                    prev: ["translate3d(" + (t.width / 2 + 10) + "px, 0, 0)", "translate3d(0, " + (t.height / 2 + 10) + "px, 0)", "translate3d(0, -" + (t.height / 2 + 10) + "px, 0)", "translate3d(-" + (t.width / 2 + 10) + "px, 0, 0)"]
                },
                "effect-2": {
                    next: ["translate3d(-" + (t.width / 2 + 10) + "px, 0, 0)", "translate3d(" + (t.width / 2 + 10) + "px, 0, 0)", "translate3d(-" + (t.width / 2 + 10) + "px, 0, 0)", "translate3d(" + (t.width / 2 + 10) + "px, 0, 0)"],
                    prev: ["translate3d(0,-" + (t.height / 2 + 10) + "px, 0)", "translate3d(0,-" + (t.height / 2 + 10) + "px, 0)", "translate3d(0," + (t.height / 2 + 10) + "px, 0)", "translate3d(0," + (t.height / 2 + 10) + "px, 0)"]
                },
                "effect-3": {
                    next: ["translate3d(0," + (t.height / 2 + 10) + "px, 0)", "translate3d(0," + (t.height / 2 + 10) + "px, 0)", "translate3d(0," + (t.height / 2 + 10) + "px, 0)", "translate3d(0," + (t.height / 2 + 10) + "px, 0)"],
                    prev: ["translate3d(0,-" + (t.height / 2 + 10) + "px, 0)", "translate3d(0,-" + (t.height / 2 + 10) + "px, 0)", "translate3d(0,-" + (t.height / 2 + 10) + "px, 0)", "translate3d(0,-" + (t.height / 2 + 10) + "px, 0)"]
                }
            }
        }, i.prototype._initEvents = function() {
            var e = this;
            n(".swiper-button-prev").on("click", function() {
                e._navigate("prev")
            }), n(".swiper-button-next").on("click", function() {
                e._navigate("next")
            }), s.addEventListener("resize", function() {
                e._resizeHandler()
            })
        }, i.prototype._autoplay = function(e) {
            var t = this;
            t.autoplay && (t.arrow_ani.play(), t.autotimer = setInterval(function() {
                t._navigate("next")
            }, t.autoplay))
        }, i.prototype._stopAutoplay = function() {
            this.autoplay && (this.arrow_ani.reverse(), clearInterval(this.autotimer))
        }, i.prototype._navigate = function(e) {
            if (this._stopAutoplay(), this.isAnimating) return !1;
            this.isAnimating = !0;
            var t = this,
                i = this.panels[this.current];
            this.current = "next" === e ? this.current < this.panelsCount - 1 ? this.current + 1 : 0 : 0 < this.current ? this.current - 1 : this.panelsCount - 1;
            var s = this.panels[this.current];
            classie.add(s, "active"), this._applyTransforms(i, e), t._autoplay(), a.hasClass("thb-full-menu-left-enabled") || a.removeClass("logo-light logo-dark").addClass(n(s).data("color"));
            var o = 0,
                r = function(e) {
                    return !(e && !classie.has(e.target, "bg-img")) && (!(++o < t.panelsCount) && (c && this.removeEventListener(l, r), classie.remove(i, "current"), classie.add(s, "current"), t._resetTransforms(i), classie.remove(s, "active"), void(t.isAnimating = !1)))
                };
            t.arrow_ani.restart(), c ? i.addEventListener(l, r) : r()
        }, i.prototype._applyTransforms = function(e, i) {
            var s = this;
            [].slice.call(e.querySelectorAll("div.bg-img")).forEach(function(e, t) {
                e.style.WebkitTransform = s.transforms[s.effect][i][t], e.style.transform = s.transforms[s.effect][i][t]
            })
        }, i.prototype._resetTransforms = function(e) {
            [].slice.call(e.querySelectorAll("div.bg-img")).forEach(function(e) {
                e.style.WebkitTransform = "none", e.style.transform = "none"
            })
        }, i.prototype._resizeHandler = function() {
            var e = this;
            this._resizeTimeout && clearTimeout(this._resizeTimeout), this._resizeTimeout = setTimeout(function() {
                e._resize(), e._resizeTimeout = null
            }, 50)
        }, i.prototype._resize = function() {
            t.width = e("x"), t.height = e("y"), this._setTransforms()
        }, s.BoxesFx = i
    }(window, jQuery), window.paceOptions = {
        restartOnPushState: !1
    },
    function() {
        var l, c, e, t, r, i, s, o, n, y, a, d, T, p, u, h, f, b, w, m, g, v, S, _, x, P, C, M, A, k, E, I, D, G, H, z, O, B, L, R, $, N, X, W, F, V, Y, j, q = [].slice,
            U = {}.hasOwnProperty,
            K = function(e, t) {
                function i() {
                    this.constructor = e
                }
                for (var s in t) U.call(t, s) && (e[s] = t[s]);
                return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
            },
            Q = [].indexOf || function(e) {
                for (var t = 0, i = this.length; t < i; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        for (g = {
                catchupTime: 100,
                initialRate: .03,
                minTime: 250,
                ghostTime: 100,
                maxProgressPerFrame: 20,
                easeFactor: 1.25,
                startOnPageLoad: !0,
                restartOnPushState: !1,
                restartOnRequestAfter: 500,
                target: "body",
                elements: {
                    checkInterval: 100,
                    selectors: ["body"]
                },
                eventLag: {
                    minSamples: 10,
                    sampleCount: 3,
                    lagThreshold: 3
                },
                ajax: {
                    trackMethods: ["GET"],
                    trackWebSockets: !0,
                    ignoreURLs: []
                }
            }, A = function() {
                var e;
                return null != (e = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? e : +new Date
            }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, m = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function(e) {
                return setTimeout(e, 50)
            }, m = function(e) {
                return clearTimeout(e)
            }), D = function(t) {
                var i, s;
                return i = A(), (s = function() {
                    var e;
                    return 33 <= (e = A() - i) ? (i = A(), t(e, function() {
                        return E(s)
                    })) : setTimeout(s, 33 - e)
                })()
            }, I = function() {
                var e, t, i;
                return i = arguments[0], t = arguments[1], e = 3 <= arguments.length ? q.call(arguments, 2) : [], "function" == typeof i[t] ? i[t].apply(i, e) : i[t]
            }, v = function() {
                var e, t, i, s, o, r, n;
                for (t = arguments[0], r = 0, n = (s = 2 <= arguments.length ? q.call(arguments, 1) : []).length; r < n; r++)
                    if (i = s[r])
                        for (e in i) U.call(i, e) && (o = i[e], null != t[e] && "object" == typeof t[e] && null != o && "object" == typeof o ? v(t[e], o) : t[e] = o);
                return t
            }, f = function(e) {
                var t, i, s, o, r;
                for (i = t = 0, o = 0, r = e.length; o < r; o++) s = e[o], i += Math.abs(s), t++;
                return i / t
            }, _ = function(e, t) {
                var i, s, o;
                if (null == e && (e = "options"), null == t && (t = !0), o = document.querySelector("[data-pace-" + e + "]")) {
                    if (i = o.getAttribute("data-pace-" + e), !t) return i;
                    try {
                        return JSON.parse(i)
                    } catch (e) {
                        return s = e, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", s) : void 0
                    }
                }
            }, s = function() {
                function e() {}
                return e.prototype.on = function(e, t, i, s) {
                    var o;
                    return null == s && (s = !1), null == this.bindings && (this.bindings = {}), null == (o = this.bindings)[e] && (o[e] = []), this.bindings[e].push({
                        handler: t,
                        ctx: i,
                        once: s
                    })
                }, e.prototype.once = function(e, t, i) {
                    return this.on(e, t, i, !0)
                }, e.prototype.off = function(e, t) {
                    var i, s, o;
                    if (null != (null != (s = this.bindings) ? s[e] : void 0)) {
                        if (null == t) return delete this.bindings[e];
                        for (i = 0, o = []; i < this.bindings[e].length;) o.push(this.bindings[e][i].handler === t ? this.bindings[e].splice(i, 1) : i++);
                        return o
                    }
                }, e.prototype.trigger = function() {
                    var e, t, i, s, o, r, n, a, l;
                    if (i = arguments[0], e = 2 <= arguments.length ? q.call(arguments, 1) : [], null != (n = this.bindings) ? n[i] : void 0) {
                        for (o = 0, l = []; o < this.bindings[i].length;) s = (a = this.bindings[i][o]).handler, t = a.ctx, r = a.once, s.apply(null != t ? t : this, e), l.push(r ? this.bindings[i].splice(o, 1) : o++);
                        return l
                    }
                }, e
            }(), y = window.Pace || {}, window.Pace = y, v(y, s.prototype), k = y.options = v({}, g, window.paceOptions, _()), X = 0, F = (Y = ["ajax", "document", "eventLag", "elements"]).length; X < F; X++) !0 === k[O = Y[X]] && (k[O] = g[O]);
        n = function(e) {
            function t() {
                return t.__super__.constructor.apply(this, arguments)
            }
            return K(t, e), t
        }(Error), c = function() {
            function e() {
                this.progress = 0
            }
            return e.prototype.getElement = function() {
                var e;
                if (null == this.el) {
                    if (!(e = document.querySelector(k.target))) throw new n;
                    this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != e.firstChild ? e.insertBefore(this.el, e.firstChild) : e.appendChild(this.el)
                }
                return this.el
            }, e.prototype.finish = function() {
                var e;
                return (e = this.getElement()).className = e.className.replace("pace-active", ""), e.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
            }, e.prototype.update = function(e) {
                return this.progress = e, this.render()
            }, e.prototype.destroy = function() {
                try {
                    this.getElement().parentNode.removeChild(this.getElement())
                } catch (e) {
                    n = e
                }
                return this.el = void 0
            }, e.prototype.render = function() {
                var e, t, i, s, o, r, n;
                if (null == document.querySelector(k.target)) return !1;
                for (e = this.getElement(), s = "translate3d(" + this.progress + "%, 0, 0)", o = 0, r = (n = ["webkitTransform", "msTransform", "transform"]).length; o < r; o++) t = n[o], e.children[0].style[t] = s;
                return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (e.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"), 100 <= this.progress ? i = "99" : (i = this.progress < 10 ? "0" : "", i += 0 | this.progress), e.children[0].setAttribute("data-progress", "" + i)), this.lastRenderedProgress = this.progress
            }, e.prototype.done = function() {
                return 100 <= this.progress
            }, e
        }(), o = function() {
            function e() {
                this.bindings = {}
            }
            return e.prototype.trigger = function(e, t) {
                var i, s, o, r, n;
                if (null != this.bindings[e]) {
                    for (n = [], s = 0, o = (r = this.bindings[e]).length; s < o; s++) i = r[s], n.push(i.call(this, t));
                    return n
                }
            }, e.prototype.on = function(e, t) {
                var i;
                return null == (i = this.bindings)[e] && (i[e] = []), this.bindings[e].push(t)
            }, e
        }(), N = window.XMLHttpRequest, $ = window.XDomainRequest, R = window.WebSocket, S = function(e, t) {
            var i, s;
            for (i in s = [], t.prototype) try {
                s.push(null == e[i] && "function" != typeof t[i] ? "function" == typeof Object.defineProperty ? Object.defineProperty(e, i, {
                    get: function() {
                        return t.prototype[i]
                    },
                    configurable: !0,
                    enumerable: !0
                }) : e[i] = t.prototype[i] : void 0)
            } catch (e) {
                e
            }
            return s
        }, C = [], y.ignore = function() {
            var e, t, i;
            return t = arguments[0], e = 2 <= arguments.length ? q.call(arguments, 1) : [], C.unshift("ignore"), i = t.apply(null, e), C.shift(), i
        }, y.track = function() {
            var e, t, i;
            return t = arguments[0], e = 2 <= arguments.length ? q.call(arguments, 1) : [], C.unshift("track"), i = t.apply(null, e), C.shift(), i
        }, z = function(e) {
            var t;
            if (null == e && (e = "GET"), "track" === C[0]) return "force";
            if (!C.length && k.ajax) {
                if ("socket" === e && k.ajax.trackWebSockets) return !0;
                if (t = e.toUpperCase(), 0 <= Q.call(k.ajax.trackMethods, t)) return !0
            }
            return !1
        }, a = function(e) {
            function t() {
                var i, o = this;
                t.__super__.constructor.apply(this, arguments), i = function(i) {
                    var s;
                    return s = i.open, i.open = function(e, t) {
                        return z(e) && o.trigger("request", {
                            type: e,
                            url: t,
                            request: i
                        }), s.apply(i, arguments)
                    }
                }, window.XMLHttpRequest = function(e) {
                    var t;
                    return t = new N(e), i(t), t
                };
                try {
                    S(window.XMLHttpRequest, N)
                } catch (e) {}
                if (null != $) {
                    window.XDomainRequest = function() {
                        var e;
                        return e = new $, i(e), e
                    };
                    try {
                        S(window.XDomainRequest, $)
                    } catch (e) {}
                }
                if (null != R && k.ajax.trackWebSockets) {
                    window.WebSocket = function(e, t) {
                        var i;
                        return i = null != t ? new R(e, t) : new R(e), z("socket") && o.trigger("request", {
                            type: "socket",
                            url: e,
                            protocols: t,
                            request: i
                        }), i
                    };
                    try {
                        S(window.WebSocket, R)
                    } catch (e) {}
                }
            }
            return K(t, o), t
        }(), W = null, H = function(e) {
            var t, i, s, o;
            for (i = 0, s = (o = k.ajax.ignoreURLs).length; i < s; i++)
                if ("string" == typeof(t = o[i])) {
                    if (-1 !== e.indexOf(t)) return !0
                } else if (t.test(e)) return !0;
            return !1
        }, (x = function() {
            return null == W && (W = new a), W
        })().on("request", function(e) {
            var t, r, n, a, i;
            return a = e.type, n = e.request, i = e.url, H(i) ? void 0 : y.running || !1 === k.restartOnRequestAfter && "force" !== z(a) ? void 0 : (r = arguments, "boolean" == typeof(t = k.restartOnRequestAfter || 0) && (t = 0), setTimeout(function() {
                var e, t, i, s, o;
                if ("socket" === a ? n.readyState < 2 : 0 < (i = n.readyState) && i < 4) {
                    for (y.restart(), o = [], e = 0, t = (s = y.sources).length; e < t; e++) {
                        if ((O = s[e]) instanceof l) {
                            O.watch.apply(O, r);
                            break
                        }
                        o.push(void 0)
                    }
                    return o
                }
            }, t))
        }), l = function() {
            function e() {
                var e = this;
                this.elements = [], x().on("request", function() {
                    return e.watch.apply(e, arguments)
                })
            }
            return e.prototype.watch = function(e) {
                var t, i, s, o;
                return s = e.type, t = e.request, o = e.url, H(o) ? void 0 : (i = "socket" === s ? new p(t) : new u(t), this.elements.push(i))
            }, e
        }(), u = function(t) {
            var e, i, s, o, r, n = this;
            if (this.progress = 0, null != window.ProgressEvent)
                for (t.addEventListener("progress", function(e) {
                        return n.progress = e.lengthComputable ? 100 * e.loaded / e.total : n.progress + (100 - n.progress) / 2
                    }, !1), i = 0, s = (r = ["load", "abort", "timeout", "error"]).length; i < s; i++) e = r[i], t.addEventListener(e, function() {
                    return n.progress = 100
                }, !1);
            else o = t.onreadystatechange, t.onreadystatechange = function() {
                var e;
                return 0 === (e = t.readyState) || 4 === e ? n.progress = 100 : 3 === t.readyState && (n.progress = 50), "function" == typeof o ? o.apply(null, arguments) : void 0
            }
        }, p = function(e) {
            var t, i, s, o, r = this;
            for (i = this.progress = 0, s = (o = ["error", "open"]).length; i < s; i++) t = o[i], e.addEventListener(t, function() {
                return r.progress = 100
            }, !1)
        }, t = function(e) {
            var t, i, s, o;
            for (null == e && (e = {}), this.elements = [], null == e.selectors && (e.selectors = []), i = 0, s = (o = e.selectors).length; i < s; i++) t = o[i], this.elements.push(new r(t))
        }, r = function() {
            function e(e) {
                this.selector = e, this.progress = 0, this.check()
            }
            return e.prototype.check = function() {
                var e = this;
                return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                    return e.check()
                }, k.elements.checkInterval)
            }, e.prototype.done = function() {
                return this.progress = 100
            }, e
        }(), e = function() {
            function e() {
                var e, t, i = this;
                this.progress = null != (t = this.states[document.readyState]) ? t : 100, e = document.onreadystatechange, document.onreadystatechange = function() {
                    return null != i.states[document.readyState] && (i.progress = i.states[document.readyState]), "function" == typeof e ? e.apply(null, arguments) : void 0
                }
            }
            return e.prototype.states = {
                loading: 0,
                interactive: 50,
                complete: 100
            }, e
        }(), i = function() {
            var t, i, s, o, r, n = this;
            this.progress = 0, r = [], o = t = 0, s = A(), i = setInterval(function() {
                var e;
                return e = A() - s - 50, s = A(), r.push(e), r.length > k.eventLag.sampleCount && r.shift(), t = f(r), ++o >= k.eventLag.minSamples && t < k.eventLag.lagThreshold ? (n.progress = 100, clearInterval(i)) : n.progress = 3 / (t + 3) * 100
            }, 50)
        }, T = function() {
            function e(e) {
                this.source = e, this.last = this.sinceLastUpdate = 0, this.rate = k.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = I(this.source, "progress"))
            }
            return e.prototype.tick = function(e, t) {
                var i;
                return null == t && (t = I(this.source, "progress")), 100 <= t && (this.done = !0), t === this.last ? this.sinceLastUpdate += e : (this.sinceLastUpdate && (this.rate = (t - this.last) / this.sinceLastUpdate), this.catchup = (t - this.progress) / k.catchupTime, this.sinceLastUpdate = 0, this.last = t), t > this.progress && (this.progress += this.catchup * e), i = 1 - Math.pow(this.progress / 100, k.easeFactor), this.progress += i * this.rate * e, this.progress = Math.min(this.lastProgress + k.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
            }, e
        }(), w = h = L = b = G = B = null, y.running = !1, P = function() {
            return k.restartOnPushState ? y.restart() : void 0
        }, null != window.history.pushState && (V = window.history.pushState, window.history.pushState = function() {
            return P(), V.apply(window.history, arguments)
        }), null != window.history.replaceState && (j = window.history.replaceState, window.history.replaceState = function() {
            return P(), j.apply(window.history, arguments)
        }), d = {
            ajax: l,
            elements: t,
            document: e,
            eventLag: i
        }, (M = function() {
            var e, t, i, s, o, r, n, a;
            for (y.sources = B = [], t = 0, s = (r = ["ajax", "elements", "document", "eventLag"]).length; t < s; t++) !1 !== k[e = r[t]] && B.push(new d[e](k[e]));
            for (i = 0, o = (a = null != (n = k.extraSources) ? n : []).length; i < o; i++) O = a[i], B.push(new O(k));
            return y.bar = b = new c, G = [], L = new T
        })(), y.stop = function() {
            return y.trigger("stop"), y.running = !1, b.destroy(), w = !0, null != h && ("function" == typeof m && m(h), h = null), M()
        }, y.restart = function() {
            return y.trigger("restart"), y.stop(), y.start()
        }, y.go = function() {
            var v;
            return y.running = !0, b.render(), v = A(), w = !1, h = D(function(e, t) {
                var i, s, o, r, n, a, l, c, d, p, u, h, f, m, g;
                for (100 - b.progress, s = p = 0, o = !0, a = u = 0, f = B.length; u < f; a = ++u)
                    for (O = B[a], d = null != G[a] ? G[a] : G[a] = [], l = h = 0, m = (n = null != (g = O.elements) ? g : [O]).length; h < m; l = ++h) r = n[l], o &= (c = null != d[l] ? d[l] : d[l] = new T(r)).done, c.done || (s++, p += c.tick(e));
                return i = p / s, b.update(L.tick(e, i)), b.done() || o || w ? (b.update(100), y.trigger("done"), setTimeout(function() {
                    return b.finish(), y.running = !1, y.trigger("hide")
                }, Math.max(k.ghostTime, Math.max(k.minTime - (A() - v), 0)))) : t()
            })
        }, y.start = function(e) {
            v(k, e), y.running = !0;
            try {
                b.render()
            } catch (e) {
                n = e
            }
            return document.querySelector(".pace") ? (y.trigger("start"), y.go()) : setTimeout(y.start, 50)
        }, "function" == typeof define && define.amd ? define(["pace"], function() {
            return y
        }) : "object" == typeof exports ? module.exports = y : k.startOnPageLoad && y.start()
    }.call(this),
    function(e) {
        function i(e) {
            return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
        }

        function t(e, t) {
            (s(e, t) ? r : o)(e, t)
        }
        var s, o, r;
        "classList" in document.documentElement ? (s = function(e, t) {
            return e.classList.contains(t)
        }, o = function(e, t) {
            e.classList.add(t)
        }, r = function(e, t) {
            e.classList.remove(t)
        }) : (s = function(e, t) {
            return i(t).test(e.className)
        }, o = function(e, t) {
            s(e, t) || (e.className = e.className + " " + t)
        }, r = function(e, t) {
            e.className = e.className.replace(i(t), " ")
        });
        var n = {
            hasClass: s,
            addClass: o,
            removeClass: r,
            toggleClass: t,
            has: s,
            add: o,
            remove: r,
            toggle: t
        };
        "function" == typeof define && define.amd ? define("classie/classie", n) : "object" == typeof exports ? module.exports = n : e.classie = n
    }(window),
    function(e, t) {
        "function" == typeof define && define.amd ? define("packery/js/rect", t) : "object" == typeof exports ? module.exports = t() : (e.Packery = e.Packery || {}, e.Packery.Rect = t())
    }(window, function() {
        function a(e) {
            for (var t in a.defaults) this[t] = a.defaults[t];
            for (t in e) this[t] = e[t]
        }
        return ((window.Packery = function() {}).Rect = a).defaults = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, a.prototype.contains = function(e) {
            var t = e.width || 0,
                i = e.height || 0;
            return this.x <= e.x && this.y <= e.y && this.x + this.width >= e.x + t && this.y + this.height >= e.y + i
        }, a.prototype.overlaps = function(e) {
            var t = this.x + this.width,
                i = this.y + this.height,
                s = e.x + e.width,
                o = e.y + e.height;
            return this.x < s && t > e.x && this.y < o && i > e.y
        }, a.prototype.getMaximalFreeRects = function(e) {
            if (!this.overlaps(e)) return !1;
            var t, i = [],
                s = this.x + this.width,
                o = this.y + this.height,
                r = e.x + e.width,
                n = e.y + e.height;
            return this.y < e.y && (t = new a({
                x: this.x,
                y: this.y,
                width: this.width,
                height: e.y - this.y
            }), i.push(t)), r < s && (t = new a({
                x: r,
                y: this.y,
                width: s - r,
                height: this.height
            }), i.push(t)), n < o && (t = new a({
                x: this.x,
                y: n,
                width: this.width,
                height: o - n
            }), i.push(t)), this.x < e.x && (t = new a({
                x: this.x,
                y: this.y,
                width: e.x - this.x,
                height: this.height
            }), i.push(t)), i
        }, a.prototype.canFit = function(e) {
            return this.width >= e.width && this.height >= e.height
        }, a
    }),
    function(e, t) {
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], t);
        else if ("object" == typeof exports) module.exports = t(require("./rect"));
        else {
            var i = e.Packery = e.Packery || {};
            i.Packer = t(i.Rect)
        }
    }(window, function(t) {
        function e(e, t, i) {
            this.width = e || 0, this.height = t || 0, this.sortDirection = i || "downwardLeftToRight", this.reset()
        }
        e.prototype.reset = function() {
            this.spaces = [], this.newSpaces = [];
            var e = new t({
                x: 0,
                y: 0,
                width: this.width,
                height: this.height
            });
            this.spaces.push(e), this.sorter = i[this.sortDirection] || i.downwardLeftToRight
        }, e.prototype.pack = function(e) {
            for (var t = 0, i = this.spaces.length; t < i; t++) {
                var s = this.spaces[t];
                if (s.canFit(e)) {
                    this.placeInSpace(e, s);
                    break
                }
            }
        }, e.prototype.placeInSpace = function(e, t) {
            e.x = t.x, e.y = t.y, this.placed(e)
        }, e.prototype.placed = function(e) {
            for (var t = [], i = 0, s = this.spaces.length; i < s; i++) {
                var o = this.spaces[i],
                    r = o.getMaximalFreeRects(e);
                r ? t.push.apply(t, r) : t.push(o)
            }
            this.spaces = t, this.mergeSortSpaces()
        }, e.prototype.mergeSortSpaces = function() {
            e.mergeRects(this.spaces), this.spaces.sort(this.sorter)
        }, e.prototype.addSpace = function(e) {
            this.spaces.push(e), this.mergeSortSpaces()
        }, e.mergeRects = function(e) {
            for (var t = 0, i = e.length; t < i; t++) {
                var s = e[t];
                if (s) {
                    var o = e.slice(0);
                    o.splice(t, 1);
                    for (var r = 0, n = 0, a = o.length; n < a; n++) {
                        var l = o[n],
                            c = n < t ? 0 : 1;
                        s.contains(l) && (e.splice(n + c - r, 1), r++)
                    }
                }
            }
            return e
        };
        var i = {
            downwardLeftToRight: function(e, t) {
                return e.y - t.y || e.x - t.x
            },
            rightwardTopToBottom: function(e, t) {
                return e.x - t.x || e.y - t.y
            }
        };
        return e
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], t) : "object" == typeof exports ? module.exports = t(require("desandro-get-style-property"), require("outlayer"), require("./rect")) : e.Packery.Item = t(e.getStyleProperty, e.Outlayer, e.Packery.Rect)
    }(window, function(e, t, i) {
        var s = e("transform"),
            o = function() {
                t.Item.apply(this, arguments)
            },
            r = (o.prototype = new t.Item)._create;
        return o.prototype._create = function() {
            r.call(this), this.rect = new i, this.placeRect = new i
        }, o.prototype.dragStart = function() {
            this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && s && (this.element.style[s] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
        }, o.prototype.dragMove = function(e, t) {
            this.didDrag = !0;
            var i = this.layout.size;
            e -= i.paddingLeft, t -= i.paddingTop, this.positionPlaceRect(e, t)
        }, o.prototype.dragStop = function() {
            this.getPosition();
            var e = this.position.x != this.placeRect.x,
                t = this.position.y != this.placeRect.y;
            this.needsPositioning = e || t, this.didDrag = !1
        }, o.prototype.positionPlaceRect = function(e, t, i) {
            this.placeRect.x = this.getPlaceRectCoord(e, !0), this.placeRect.y = this.getPlaceRectCoord(t, !1, i)
        }, o.prototype.getPlaceRectCoord = function(e, t, i) {
            var s, o = t ? "Width" : "Height",
                r = this.size["outer" + o],
                n = this.layout[t ? "columnWidth" : "rowHeight"],
                a = this.layout.size["inner" + o];
            if (t || (a = Math.max(a, this.layout.maxY), this.layout.rowHeight || (a -= this.layout.gutter)), n) {
                var l;
                n += this.layout.gutter, a += t ? this.layout.gutter : 0, e = Math.round(e / n), l = this.layout.options.isHorizontal ? t ? "ceil" : "floor" : t ? "floor" : "ceil";
                var c = Math[l](a / n);
                s = c -= Math.ceil(r / n)
            } else s = a - r;
            return e = i ? e : Math.min(e, s), e *= n || 1, Math.max(0, e)
        }, o.prototype.copyPlaceRectPosition = function() {
            this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
        }, o.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
        }, o
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("packery/js/packery", ["classie/classie", "get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], t) : "object" == typeof exports ? module.exports = t(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : e.Packery = t(e.classie, e.getSize, e.Outlayer, e.Packery.Rect, e.Packery.Packer, e.Packery.Item)
    }(window, function(n, r, e, o, t, i) {
        function s(e, t) {
            return e.position.y - t.position.y || e.position.x - t.position.x
        }

        function a(e, t) {
            return e.position.x - t.position.x || e.position.y - t.position.y
        }
        o.prototype.canFit = function(e) {
            return this.width >= e.width - 1 && this.height >= e.height - 1
        };
        var l = e.create("packery");
        return l.Item = i, l.prototype._create = function() {
            e.prototype._create.call(this), this.packer = new t, this.stamp(this.options.stamped);
            var i = this;
            this.handleDraggabilly = {
                dragStart: function() {
                    i.itemDragStart(this.element)
                },
                dragMove: function() {
                    i.itemDragMove(this.element, this.position.x, this.position.y)
                },
                dragEnd: function() {
                    i.itemDragEnd(this.element)
                }
            }, this.handleUIDraggable = {
                start: function(e) {
                    i.itemDragStart(e.currentTarget)
                },
                drag: function(e, t) {
                    i.itemDragMove(e.currentTarget, t.position.left, t.position.top)
                },
                stop: function(e) {
                    i.itemDragEnd(e.currentTarget)
                }
            }
        }, l.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurements();
            var e = this.packer;
            this.options.isHorizontal ? (e.width = Number.POSITIVE_INFINITY, e.height = this.size.innerHeight + this.gutter, e.sortDirection = "rightwardTopToBottom") : (e.width = this.size.innerWidth + this.gutter, e.height = Number.POSITIVE_INFINITY, e.sortDirection = "downwardLeftToRight"), e.reset(), this.maxY = 0, this.maxX = 0
        }, l.prototype._getMeasurements = function() {
            this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
        }, l.prototype._getItemLayoutPosition = function(e) {
            return this._packItem(e), e.rect
        }, l.prototype._packItem = function(e) {
            this._setRectSize(e.element, e.rect), this.packer.pack(e.rect), this._setMaxXY(e.rect)
        }, l.prototype._setMaxXY = function(e) {
            this.maxX = Math.max(e.x + e.width, this.maxX), this.maxY = Math.max(e.y + e.height, this.maxY)
        }, l.prototype._setRectSize = function(e, t) {
            var i = r(e),
                s = i.outerWidth,
                o = i.outerHeight;
            (s || o) && (s = this._applyGridGutter(s, this.columnWidth), o = this._applyGridGutter(o, this.rowHeight)), t.width = Math.min(s, this.packer.width), t.height = Math.min(o, this.packer.height)
        }, l.prototype._applyGridGutter = function(e, t) {
            if (!t) return e + this.gutter;
            var i = e % (t += this.gutter);
            return Math[i && i < 1 ? "round" : "ceil"](e / t) * t
        }, l.prototype._getContainerSize = function() {
            return this.options.isHorizontal ? {
                width: this.maxX - this.gutter
            } : {
                height: this.maxY - this.gutter
            }
        }, l.prototype._manageStamp = function(e) {
            var t, i = this.getItem(e);
            if (i && i.isPlacing) t = i.placeRect;
            else {
                var s = this._getElementOffset(e);
                t = new o({
                    x: this.options.isOriginLeft ? s.left : s.right,
                    y: this.options.isOriginTop ? s.top : s.bottom
                })
            }
            this._setRectSize(e, t), this.packer.placed(t), this._setMaxXY(t)
        }, l.prototype.sortItemsByPosition = function() {
            var e = this.options.isHorizontal ? a : s;
            this.items.sort(e)
        }, l.prototype.fit = function(e, t, i) {
            var s = this.getItem(e);
            s && (this._getMeasurements(), this.stamp(s.element), s.getSize(), s.isPlacing = !0, t = void 0 === t ? s.rect.x : t, i = void 0 === i ? s.rect.y : i, s.positionPlaceRect(t, i, !0), this._bindFitEvents(s), s.moveTo(s.placeRect.x, s.placeRect.y), this.layout(), this.unstamp(s.element), this.sortItemsByPosition(), s.isPlacing = !1, s.copyPlaceRectPosition())
        }, l.prototype._bindFitEvents = function(e) {
            function t() {
                2 == ++s && i.emitEvent("fitComplete", [e])
            }
            var i = this,
                s = 0;
            e.on("layout", function() {
                return t(), !0
            }), this.on("layoutComplete", function() {
                return t(), !0
            })
        }, l.prototype.resize = function() {
            var e = r(this.element),
                t = this.size && e,
                i = this.options.isHorizontal ? "innerHeight" : "innerWidth";
            t && e[i] == this.size[i] || this.layout()
        }, l.prototype.itemDragStart = function(e) {
            this.stamp(e);
            var t = this.getItem(e);
            t && t.dragStart()
        }, l.prototype.itemDragMove = function(e, t, i) {
            var s = this.getItem(e);
            s && s.dragMove(t, i);
            var o = this;
            this.clearDragTimeout(), this.dragTimeout = setTimeout(function() {
                o.layout(), delete o.dragTimeout
            }, 40)
        }, l.prototype.clearDragTimeout = function() {
            this.dragTimeout && clearTimeout(this.dragTimeout)
        }, l.prototype.itemDragEnd = function(e) {
            var t, i = this.getItem(e);
            if (i && (t = i.didDrag, i.dragStop()), i && (t || i.needsPositioning)) {
                n.add(i.element, "is-positioning-post-drag");
                var s = this._getDragEndLayoutComplete(e, i);
                i.needsPositioning ? (i.on("layout", s), i.moveTo(i.placeRect.x, i.placeRect.y)) : i && i.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", s), this.layout()
            } else this.unstamp(e)
        }, l.prototype._getDragEndLayoutComplete = function(e, t) {
            var i = t && t.needsPositioning,
                s = 0,
                o = i ? 2 : 1,
                r = this;
            return function() {
                return ++s != o || (t && (n.remove(t.element, "is-positioning-post-drag"), t.isPlacing = !1, t.copyPlaceRectPosition()), r.unstamp(e), r.sortItemsByPosition(), i && r.emitEvent("dragItemPositioned", [t])), !0
            }
        }, l.prototype.bindDraggabillyEvents = function(e) {
            e.on("dragStart", this.handleDraggabilly.dragStart), e.on("dragMove", this.handleDraggabilly.dragMove), e.on("dragEnd", this.handleDraggabilly.dragEnd)
        }, l.prototype.bindUIDraggableEvents = function(e) {
            e.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
        }, l.Rect = o, l.Packer = t, l
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["isotope/js/layout-mode", "packery/js/packery", "get-size/get-size"], t) : "object" == typeof exports ? module.exports = t(require("isotope-layout/js/layout-mode"), require("packery"), require("get-size")) : t(e.Isotope.LayoutMode, e.Packery, e.getSize)
    }(window, function(e, t, s) {
        var i = e.create("packery"),
            o = i.prototype._getElementOffset,
            r = i.prototype._getMeasurement;
        (function(e, t) {
            for (var i in t) e[i] = t[i]
        })(i.prototype, t.prototype), i.prototype._getElementOffset = o, i.prototype._getMeasurement = r;
        var n = i.prototype._resetLayout;
        i.prototype._resetLayout = function() {
            this.packer = this.packer || new t.Packer, n.apply(this, arguments)
        };
        var a = i.prototype._getItemLayoutPosition;
        i.prototype._getItemLayoutPosition = function(e) {
            return e.rect = e.rect || new t.Rect, a.call(this, e)
        };
        var l = i.prototype._manageStamp;
        return i.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments)
        }, i.prototype.needsResizeLayout = function() {
            var e = s(this.element),
                t = this.size && e,
                i = this.options.isHorizontal ? "innerHeight" : "innerWidth";
            return t && e[i] != this.size[i]
        }, i
    }),
    function r(n, a, l) {
        function c(i, e) {
            if (!a[i]) {
                if (!n[i]) {
                    var t = "function" == typeof require && require;
                    if (!e && t) return t(i, !0);
                    if (d) return d(i, !0);
                    var s = new Error("Cannot find module '" + i + "'");
                    throw s.code = "MODULE_NOT_FOUND", s
                }
                var o = a[i] = {
                    exports: {}
                };
                n[i][0].call(o.exports, function(e) {
                    var t = n[i][1][e];
                    return c(t || e)
                }, o, o.exports, r, n, a, l)
            }
            return a[i].exports
        }
        for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) c(l[e]);
        return c
    }({
        1: [function(e, t, i) {
            "use strict";

            function s(e) {
                e.fn.perfectScrollbar = function(i) {
                    return this.each(function() {
                        if ("object" == typeof i || void 0 === i) {
                            var e = i;
                            r.get(this) || o.initialize(this, e)
                        } else {
                            var t = i;
                            "update" === t ? o.update(this) : "destroy" === t && o.destroy(this)
                        }
                    })
                }
            }
            var o = e("../main"),
                r = e("../plugin/instances");
            if ("function" == typeof define && define.amd) define(["jquery"], s);
            else {
                var n = window.jQuery ? window.jQuery : window.$;
                void 0 !== n && s(n)
            }
            t.exports = s
        }, {
            "../main": 7,
            "../plugin/instances": 18
        }],
        2: [function(e, t, i) {
            "use strict";
            i.add = function(e, t) {
                var i, s, o;
                e.classList ? e.classList.add(t) : (s = t, (o = (i = e).className.split(" ")).indexOf(s) < 0 && o.push(s), i.className = o.join(" "))
            }, i.remove = function(e, t) {
                var i, s, o, r;
                e.classList ? e.classList.remove(t) : (s = t, o = (i = e).className.split(" "), 0 <= (r = o.indexOf(s)) && o.splice(r, 1), i.className = o.join(" "))
            }, i.list = function(e) {
                return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
            }
        }, {}],
        3: [function(e, t, i) {
            "use strict";
            var s = {
                e: function(e, t) {
                    var i = document.createElement(e);
                    return i.className = t, i
                },
                appendTo: function(e, t) {
                    return t.appendChild(e), e
                }
            };
            s.css = function(e, t, i) {
                return "object" == typeof t ? function(e, t) {
                    for (var i in t) {
                        var s = t[i];
                        "number" == typeof s && (s = s.toString() + "px"), e.style[i] = s
                    }
                    return e
                }(e, t) : void 0 === i ? (n = e, a = t, window.getComputedStyle(n)[a]) : (s = e, o = t, "number" == typeof(r = i) && (r = r.toString() + "px"), s.style[o] = r, s);
                var s, o, r, n, a
            }, s.matches = function(e, t) {
                return void 0 !== e.matches ? e.matches(t) : void 0 !== e.matchesSelector ? e.matchesSelector(t) : void 0 !== e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : void 0 !== e.mozMatchesSelector ? e.mozMatchesSelector(t) : void 0 !== e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
            }, s.remove = function(e) {
                void 0 !== e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
            }, s.queryChildren = function(e, t) {
                return Array.prototype.filter.call(e.childNodes, function(e) {
                    return s.matches(e, t)
                })
            }, t.exports = s
        }, {}],
        4: [function(e, t, i) {
            "use strict";
            var s = function(e) {
                this.element = e, this.events = {}
            };
            s.prototype.bind = function(e, t) {
                void 0 === this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
            }, s.prototype.unbind = function(t, i) {
                var s = void 0 !== i;
                this.events[t] = this.events[t].filter(function(e) {
                    return !(!s || e === i) || (this.element.removeEventListener(t, e, !1), !1)
                }, this)
            }, s.prototype.unbindAll = function() {
                for (var e in this.events) this.unbind(e)
            };
            var o = function() {
                this.eventElements = []
            };
            o.prototype.eventElement = function(t) {
                var e = this.eventElements.filter(function(e) {
                    return e.element === t
                })[0];
                return void 0 === e && (e = new s(t), this.eventElements.push(e)), e
            }, o.prototype.bind = function(e, t, i) {
                this.eventElement(e).bind(t, i)
            }, o.prototype.unbind = function(e, t, i) {
                this.eventElement(e).unbind(t, i)
            }, o.prototype.unbindAll = function() {
                for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
            }, o.prototype.once = function(e, t, i) {
                var s = this.eventElement(e),
                    o = function(e) {
                        s.unbind(t, o), i(e)
                    };
                s.bind(t, o)
            }, t.exports = o
        }, {}],
        5: [function(e, t, i) {
            "use strict";
            t.exports = function() {
                function e() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return function() {
                    return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                }
            }()
        }, {}],
        6: [function(e, t, i) {
            "use strict";

            function s(i) {
                return function(e, t) {
                    i(e, "ps--in-scrolling"), void 0 !== t ? i(e, "ps--" + t) : (i(e, "ps--x"), i(e, "ps--y"))
                }
            }
            var o = e("./class"),
                r = e("./dom"),
                n = i.toInt = function(e) {
                    return parseInt(e, 10) || 0
                },
                a = i.clone = function(e) {
                    if (e) {
                        if (Array.isArray(e)) return e.map(a);
                        if ("object" == typeof e) {
                            var t = {};
                            for (var i in e) t[i] = a(e[i]);
                            return t
                        }
                        return e
                    }
                    return null
                };
            i.extend = function(e, t) {
                var i = a(e);
                for (var s in t) i[s] = a(t[s]);
                return i
            }, i.isEditable = function(e) {
                return r.matches(e, "input,[contenteditable]") || r.matches(e, "select,[contenteditable]") || r.matches(e, "textarea,[contenteditable]") || r.matches(e, "button,[contenteditable]")
            }, i.removePsClasses = function(e) {
                for (var t = o.list(e), i = 0; i < t.length; i++) {
                    var s = t[i];
                    0 === s.indexOf("ps-") && o.remove(e, s)
                }
            }, i.outerWidth = function(e) {
                return n(r.css(e, "width")) + n(r.css(e, "paddingLeft")) + n(r.css(e, "paddingRight")) + n(r.css(e, "borderLeftWidth")) + n(r.css(e, "borderRightWidth"))
            }, i.startScrolling = s(o.add), i.stopScrolling = s(o.remove), i.env = {
                isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
            }
        }, {
            "./class": 2,
            "./dom": 3
        }],
        7: [function(e, t, i) {
            "use strict";
            var s = e("./plugin/destroy"),
                o = e("./plugin/initialize"),
                r = e("./plugin/update");
            t.exports = {
                initialize: o,
                update: r,
                destroy: s
            }
        }, {
            "./plugin/destroy": 9,
            "./plugin/initialize": 17,
            "./plugin/update": 21
        }],
        8: [function(e, t, i) {
            "use strict";
            t.exports = {
                handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
                maxScrollbarLength: null,
                minScrollbarLength: null,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0,
                suppressScrollX: !1,
                suppressScrollY: !1,
                swipePropagation: !0,
                swipeEasing: !0,
                useBothWheelAxes: !1,
                wheelPropagation: !1,
                wheelSpeed: 1,
                theme: "default"
            }
        }, {}],
        9: [function(e, t, i) {
            "use strict";
            var s = e("../lib/helper"),
                o = e("../lib/dom"),
                r = e("./instances");
            t.exports = function(e) {
                var t = r.get(e);
                t && (t.event.unbindAll(), o.remove(t.scrollbarX), o.remove(t.scrollbarY), o.remove(t.scrollbarXRail), o.remove(t.scrollbarYRail), s.removePsClasses(e), r.remove(e))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18
        }],
        10: [function(e, t, i) {
            "use strict";
            var s = e("../instances"),
                r = e("../update-geometry"),
                n = e("../update-scroll");
            t.exports = function(e) {
                ! function(i, s) {
                    function o(e) {
                        return e.getBoundingClientRect()
                    }
                    var e = function(e) {
                        e.stopPropagation()
                    };
                    s.event.bind(s.scrollbarY, "click", e), s.event.bind(s.scrollbarYRail, "click", function(e) {
                        var t = e.pageY - window.pageYOffset - o(s.scrollbarYRail).top > s.scrollbarYTop ? 1 : -1;
                        n(i, "top", i.scrollTop + t * s.containerHeight), r(i), e.stopPropagation()
                    }), s.event.bind(s.scrollbarX, "click", e), s.event.bind(s.scrollbarXRail, "click", function(e) {
                        var t = e.pageX - window.pageXOffset - o(s.scrollbarXRail).left > s.scrollbarXLeft ? 1 : -1;
                        n(i, "left", i.scrollLeft + t * s.containerWidth), r(i), e.stopPropagation()
                    })
                }(e, s.get(e))
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        11: [function(e, t, i) {
            "use strict";

            function s(o, r) {
                var n = null,
                    t = null,
                    i = function(e) {
                        (function(e) {
                            var t = n + e * r.railXRatio,
                                i = Math.max(0, r.scrollbarXRail.getBoundingClientRect().left) + r.railXRatio * (r.railXWidth - r.scrollbarXWidth);
                            r.scrollbarXLeft = t < 0 ? 0 : i < t ? i : t;
                            var s = a.toInt(r.scrollbarXLeft * (r.contentWidth - r.containerWidth) / (r.containerWidth - r.railXRatio * r.scrollbarXWidth)) - r.negativeScrollAdjustment;
                            d(o, "left", s)
                        })(e.pageX - t), c(o), e.stopPropagation(), e.preventDefault()
                    },
                    s = function() {
                        a.stopScrolling(o, "x"), r.event.unbind(r.ownerDocument, "mousemove", i)
                    };
                r.event.bind(r.scrollbarX, "mousedown", function(e) {
                    t = e.pageX, n = a.toInt(l.css(r.scrollbarX, "left")) * r.railXRatio, a.startScrolling(o, "x"), r.event.bind(r.ownerDocument, "mousemove", i), r.event.once(r.ownerDocument, "mouseup", s), e.stopPropagation(), e.preventDefault()
                })
            }

            function o(o, r) {
                var n = null,
                    t = null,
                    i = function(e) {
                        (function(e) {
                            var t = n + e * r.railYRatio,
                                i = Math.max(0, r.scrollbarYRail.getBoundingClientRect().top) + r.railYRatio * (r.railYHeight - r.scrollbarYHeight);
                            r.scrollbarYTop = t < 0 ? 0 : i < t ? i : t;
                            var s = a.toInt(r.scrollbarYTop * (r.contentHeight - r.containerHeight) / (r.containerHeight - r.railYRatio * r.scrollbarYHeight));
                            d(o, "top", s)
                        })(e.pageY - t), c(o), e.stopPropagation(), e.preventDefault()
                    },
                    s = function() {
                        a.stopScrolling(o, "y"), r.event.unbind(r.ownerDocument, "mousemove", i)
                    };
                r.event.bind(r.scrollbarY, "mousedown", function(e) {
                    t = e.pageY, n = a.toInt(l.css(r.scrollbarY, "top")) * r.railYRatio, a.startScrolling(o, "y"), r.event.bind(r.ownerDocument, "mousemove", i), r.event.once(r.ownerDocument, "mouseup", s), e.stopPropagation(), e.preventDefault()
                })
            }
            var a = e("../../lib/helper"),
                l = e("../../lib/dom"),
                r = e("../instances"),
                c = e("../update-geometry"),
                d = e("../update-scroll");
            t.exports = function(e) {
                var t = r.get(e);
                s(e, t), o(e, t)
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        12: [function(e, t, i) {
            "use strict";

            function s(r, n) {
                var a = !1;
                n.event.bind(r, "mouseenter", function() {
                    a = !0
                }), n.event.bind(r, "mouseleave", function() {
                    a = !1
                });
                n.event.bind(n.ownerDocument, "keydown", function(e) {
                    if (!(e.isDefaultPrevented && e.isDefaultPrevented() || e.defaultPrevented)) {
                        var t = c.matches(n.scrollbarX, ":focus") || c.matches(n.scrollbarY, ":focus");
                        if (a || t) {
                            var i = document.activeElement ? document.activeElement : n.ownerDocument.activeElement;
                            if (i) {
                                if ("IFRAME" === i.tagName) i = i.contentDocument.activeElement;
                                else
                                    for (; i.shadowRoot;) i = i.shadowRoot.activeElement;
                                if (l.isEditable(i)) return
                            }
                            var s = 0,
                                o = 0;
                            switch (e.which) {
                                case 37:
                                    s = e.metaKey ? -n.contentWidth : e.altKey ? -n.containerWidth : -30;
                                    break;
                                case 38:
                                    o = e.metaKey ? n.contentHeight : e.altKey ? n.containerHeight : 30;
                                    break;
                                case 39:
                                    s = e.metaKey ? n.contentWidth : e.altKey ? n.containerWidth : 30;
                                    break;
                                case 40:
                                    o = e.metaKey ? -n.contentHeight : e.altKey ? -n.containerHeight : -30;
                                    break;
                                case 33:
                                    o = 90;
                                    break;
                                case 32:
                                    o = e.shiftKey ? 90 : -90;
                                    break;
                                case 34:
                                    o = -90;
                                    break;
                                case 35:
                                    o = e.ctrlKey ? -n.contentHeight : -n.containerHeight;
                                    break;
                                case 36:
                                    o = e.ctrlKey ? r.scrollTop : n.containerHeight;
                                    break;
                                default:
                                    return
                            }
                            p(r, "top", r.scrollTop - o), p(r, "left", r.scrollLeft + s), d(r),
                                function(e, t) {
                                    var i = r.scrollTop;
                                    if (0 === e) {
                                        if (!n.scrollbarYActive) return !1;
                                        if (0 === i && 0 < t || i >= n.contentHeight - n.containerHeight && t < 0) return !n.settings.wheelPropagation
                                    }
                                    var s = r.scrollLeft;
                                    if (0 === t) {
                                        if (!n.scrollbarXActive) return !1;
                                        if (0 === s && e < 0 || s >= n.contentWidth - n.containerWidth && 0 < e) return !n.settings.wheelPropagation
                                    }
                                    return !0
                                }(s, o) && e.preventDefault()
                        }
                    }
                })
            }
            var l = e("../../lib/helper"),
                c = e("../../lib/dom"),
                o = e("../instances"),
                d = e("../update-geometry"),
                p = e("../update-scroll");
            t.exports = function(e) {
                s(e, o.get(e))
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        13: [function(e, t, i) {
            "use strict";

            function s(a, l) {
                function e(e) {
                    var t, i, s, o = (i = (t = e).deltaX, s = -1 * t.deltaY, void 0 !== i && void 0 !== s || (i = -1 * t.wheelDeltaX / 6, s = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (i *= 10, s *= 10), i != i && s != s && (i = 0, s = t.wheelDelta), t.shiftKey ? [-s, -i] : [i, s]),
                        r = o[0],
                        n = o[1];
                    (function(e, t) {
                        var i = a.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                        if (i) {
                            var s = window.getComputedStyle(i);
                            if (![s.overflow, s.overflowX, s.overflowY].join("").match(/(scroll|auto)/)) return !1;
                            var o = i.scrollHeight - i.clientHeight;
                            if (0 < o && !(0 === i.scrollTop && 0 < t || i.scrollTop === o && t < 0)) return !0;
                            var r = i.scrollLeft - i.clientWidth;
                            if (0 < r && !(0 === i.scrollLeft && e < 0 || i.scrollLeft === r && 0 < e)) return !0
                        }
                        return !1
                    })(r, n) || (c = !1, l.settings.useBothWheelAxes ? l.scrollbarYActive && !l.scrollbarXActive ? (p(a, "top", n ? a.scrollTop - n * l.settings.wheelSpeed : a.scrollTop + r * l.settings.wheelSpeed), c = !0) : l.scrollbarXActive && !l.scrollbarYActive && (p(a, "left", r ? a.scrollLeft + r * l.settings.wheelSpeed : a.scrollLeft - n * l.settings.wheelSpeed), c = !0) : (p(a, "top", a.scrollTop - n * l.settings.wheelSpeed), p(a, "left", a.scrollLeft + r * l.settings.wheelSpeed)), d(a), (c = c || function(e, t) {
                        var i = a.scrollTop;
                        if (0 === e) {
                            if (!l.scrollbarYActive) return !1;
                            if (0 === i && 0 < t || i >= l.contentHeight - l.containerHeight && t < 0) return !l.settings.wheelPropagation
                        }
                        var s = a.scrollLeft;
                        if (0 === t) {
                            if (!l.scrollbarXActive) return !1;
                            if (0 === s && e < 0 || s >= l.contentWidth - l.containerWidth && 0 < e) return !l.settings.wheelPropagation
                        }
                        return !0
                    }(r, n)) && (e.stopPropagation(), e.preventDefault()))
                }
                var c = !1;
                void 0 !== window.onwheel ? l.event.bind(a, "wheel", e) : void 0 !== window.onmousewheel && l.event.bind(a, "mousewheel", e)
            }
            var o = e("../instances"),
                d = e("../update-geometry"),
                p = e("../update-scroll");
            t.exports = function(e) {
                s(e, o.get(e))
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        14: [function(e, t, i) {
            "use strict";
            var s = e("../instances"),
                o = e("../update-geometry");
            t.exports = function(e) {
                var t, i = s.get(e);
                t = e, i.event.bind(t, "scroll", function() {
                    o(t)
                })
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19
        }],
        15: [function(e, t, i) {
            "use strict";

            function s(a, e) {
                function l() {
                    c && (clearInterval(c), c = null), u.stopScrolling(a)
                }
                var c = null,
                    d = {
                        top: 0,
                        left: 0
                    },
                    p = !1;
                e.event.bind(e.ownerDocument, "selectionchange", function() {
                    var e;
                    a.contains(0 === (e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "").toString().length ? null : e.getRangeAt(0).commonAncestorContainer) ? p = !0 : (p = !1, l())
                }), e.event.bind(window, "mouseup", function() {
                    p && (p = !1, l())
                }), e.event.bind(window, "keyup", function() {
                    p && (p = !1, l())
                }), e.event.bind(window, "mousemove", function(e) {
                    if (p) {
                        var t = e.pageX,
                            i = e.pageY,
                            s = a.offsetLeft,
                            o = a.offsetLeft + a.offsetWidth,
                            r = a.offsetTop,
                            n = a.offsetTop + a.offsetHeight;
                        t < s + 3 ? (d.left = -5, u.startScrolling(a, "x")) : o - 3 < t ? (d.left = 5, u.startScrolling(a, "x")) : d.left = 0, i < r + 3 ? (d.top = r + 3 - i < 5 ? -5 : -20, u.startScrolling(a, "y")) : n - 3 < i ? (d.top = i - n + 3 < 5 ? 5 : 20, u.startScrolling(a, "y")) : d.top = 0, 0 === d.top && 0 === d.left ? l() : c || (c = setInterval(function() {
                            return h.get(a) ? (m(a, "top", a.scrollTop + d.top), m(a, "left", a.scrollLeft + d.left), void f(a)) : void clearInterval(c)
                        }, 50))
                    }
                })
            }
            var u = e("../../lib/helper"),
                h = e("../instances"),
                f = e("../update-geometry"),
                m = e("../update-scroll");
            t.exports = function(e) {
                s(e, h.get(e))
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        16: [function(e, t, i) {
            "use strict";

            function s(a, l, e, t) {
                function c(e, t) {
                    b(a, "top", a.scrollTop - t), b(a, "left", a.scrollLeft - e), T(a)
                }

                function i() {
                    g = !0
                }

                function s() {
                    g = !1
                }

                function d(e) {
                    return e.targetTouches ? e.targetTouches[0] : e
                }

                function p(e) {
                    return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
                }

                function u(e) {
                    if (p(e)) {
                        v = !0;
                        var t = d(e);
                        h.pageX = t.pageX, h.pageY = t.pageY, f = (new Date).getTime(), null !== n && clearInterval(n), e.stopPropagation()
                    }
                }

                function o(e) {
                    if (!v && l.settings.swipePropagation && u(e), !g && v && p(e)) {
                        var t = d(e),
                            i = {
                                pageX: t.pageX,
                                pageY: t.pageY
                            },
                            s = i.pageX - h.pageX,
                            o = i.pageY - h.pageY;
                        c(s, o), h = i;
                        var r = (new Date).getTime(),
                            n = r - f;
                        0 < n && (m.x = s / n, m.y = o / n, f = r),
                            function(e, t) {
                                var i = a.scrollTop,
                                    s = a.scrollLeft,
                                    o = Math.abs(e),
                                    r = Math.abs(t);
                                if (o < r) {
                                    if (t < 0 && i === l.contentHeight - l.containerHeight || 0 < t && 0 === i) return !l.settings.swipePropagation
                                } else if (r < o && (e < 0 && s === l.contentWidth - l.containerWidth || 0 < e && 0 === s)) return !l.settings.swipePropagation;
                                return !0
                            }(s, o) && (e.stopPropagation(), e.preventDefault())
                    }
                }

                function r() {
                    !g && v && (v = !1, l.settings.swipeEasing && (clearInterval(n), n = setInterval(function() {
                        return y.get(a) && (m.x || m.y) ? Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(n) : (c(30 * m.x, 30 * m.y), m.x *= .8, void(m.y *= .8)) : void clearInterval(n)
                    }, 10)))
                }
                var h = {},
                    f = 0,
                    m = {},
                    n = null,
                    g = !1,
                    v = !1;
                e ? (l.event.bind(window, "touchstart", i), l.event.bind(window, "touchend", s), l.event.bind(a, "touchstart", u), l.event.bind(a, "touchmove", o), l.event.bind(a, "touchend", r)) : t && (window.PointerEvent ? (l.event.bind(window, "pointerdown", i), l.event.bind(window, "pointerup", s), l.event.bind(a, "pointerdown", u), l.event.bind(a, "pointermove", o), l.event.bind(a, "pointerup", r)) : window.MSPointerEvent && (l.event.bind(window, "MSPointerDown", i), l.event.bind(window, "MSPointerUp", s), l.event.bind(a, "MSPointerDown", u), l.event.bind(a, "MSPointerMove", o), l.event.bind(a, "MSPointerUp", r)))
            }
            var o = e("../../lib/helper"),
                y = e("../instances"),
                T = e("../update-geometry"),
                b = e("../update-scroll");
            t.exports = function(e) {
                (o.env.supportsTouch || o.env.supportsIePointer) && s(e, y.get(e), o.env.supportsTouch, o.env.supportsIePointer)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        17: [function(e, t, i) {
            "use strict";
            var s = e("../lib/helper"),
                o = e("../lib/class"),
                r = e("./instances"),
                n = e("./update-geometry"),
                a = {
                    "click-rail": e("./handler/click-rail"),
                    "drag-scrollbar": e("./handler/drag-scrollbar"),
                    keyboard: e("./handler/keyboard"),
                    wheel: e("./handler/mouse-wheel"),
                    touch: e("./handler/touch"),
                    selection: e("./handler/selection")
                },
                l = e("./handler/native-scroll");
            t.exports = function(t, e) {
                e = "object" == typeof e ? e : {}, o.add(t, "ps");
                var i = r.add(t);
                i.settings = s.extend(i.settings, e), o.add(t, "ps--theme_" + i.settings.theme), i.settings.handlers.forEach(function(e) {
                    a[e](t)
                }), l(t), n(t)
            }
        }, {
            "../lib/class": 2,
            "../lib/helper": 6,
            "./handler/click-rail": 10,
            "./handler/drag-scrollbar": 11,
            "./handler/keyboard": 12,
            "./handler/mouse-wheel": 13,
            "./handler/native-scroll": 14,
            "./handler/selection": 15,
            "./handler/touch": 16,
            "./instances": 18,
            "./update-geometry": 19
        }],
        18: [function(e, t, i) {
            "use strict";

            function s(e) {
                return e.getAttribute("data-ps-id")
            }
            var n = e("../lib/helper"),
                a = e("../lib/class"),
                l = e("./default-setting"),
                c = e("../lib/dom"),
                d = e("../lib/event-manager"),
                o = e("../lib/guid"),
                r = {};
            i.add = function(e) {
                var t, i = o();
                return t = i, e.setAttribute("data-ps-id", t), r[i] = new function(e) {
                    function t() {
                        a.add(e, "ps--focus")
                    }

                    function i() {
                        a.remove(e, "ps--focus")
                    }
                    var s, o, r = this;
                    r.settings = n.clone(l), r.containerWidth = null, r.containerHeight = null, r.contentWidth = null, r.contentHeight = null, r.isRtl = "rtl" === c.css(e, "direction"), r.isNegativeScroll = (o = e.scrollLeft, e.scrollLeft = -1, s = e.scrollLeft < 0, e.scrollLeft = o, s), r.negativeScrollAdjustment = r.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, r.event = new d, r.ownerDocument = e.ownerDocument || document, r.scrollbarXRail = c.appendTo(c.e("div", "ps__scrollbar-x-rail"), e), r.scrollbarX = c.appendTo(c.e("div", "ps__scrollbar-x"), r.scrollbarXRail), r.scrollbarX.setAttribute("tabindex", 0), r.event.bind(r.scrollbarX, "focus", t), r.event.bind(r.scrollbarX, "blur", i), r.scrollbarXActive = null, r.scrollbarXWidth = null, r.scrollbarXLeft = null, r.scrollbarXBottom = n.toInt(c.css(r.scrollbarXRail, "bottom")), r.isScrollbarXUsingBottom = r.scrollbarXBottom == r.scrollbarXBottom, r.scrollbarXTop = r.isScrollbarXUsingBottom ? null : n.toInt(c.css(r.scrollbarXRail, "top")), r.railBorderXWidth = n.toInt(c.css(r.scrollbarXRail, "borderLeftWidth")) + n.toInt(c.css(r.scrollbarXRail, "borderRightWidth")), c.css(r.scrollbarXRail, "display", "block"), r.railXMarginWidth = n.toInt(c.css(r.scrollbarXRail, "marginLeft")) + n.toInt(c.css(r.scrollbarXRail, "marginRight")), c.css(r.scrollbarXRail, "display", ""), r.railXWidth = null, r.railXRatio = null, r.scrollbarYRail = c.appendTo(c.e("div", "ps__scrollbar-y-rail"), e), r.scrollbarY = c.appendTo(c.e("div", "ps__scrollbar-y"), r.scrollbarYRail), r.scrollbarY.setAttribute("tabindex", 0), r.event.bind(r.scrollbarY, "focus", t), r.event.bind(r.scrollbarY, "blur", i), r.scrollbarYActive = null, r.scrollbarYHeight = null, r.scrollbarYTop = null, r.scrollbarYRight = n.toInt(c.css(r.scrollbarYRail, "right")), r.isScrollbarYUsingRight = r.scrollbarYRight == r.scrollbarYRight, r.scrollbarYLeft = r.isScrollbarYUsingRight ? null : n.toInt(c.css(r.scrollbarYRail, "left")), r.scrollbarYOuterWidth = r.isRtl ? n.outerWidth(r.scrollbarY) : null, r.railBorderYWidth = n.toInt(c.css(r.scrollbarYRail, "borderTopWidth")) + n.toInt(c.css(r.scrollbarYRail, "borderBottomWidth")), c.css(r.scrollbarYRail, "display", "block"), r.railYMarginHeight = n.toInt(c.css(r.scrollbarYRail, "marginTop")) + n.toInt(c.css(r.scrollbarYRail, "marginBottom")), c.css(r.scrollbarYRail, "display", ""), r.railYHeight = null, r.railYRatio = null
                }(e), r[i]
            }, i.remove = function(e) {
                delete r[s(e)], e.removeAttribute("data-ps-id")
            }, i.get = function(e) {
                return r[s(e)]
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/event-manager": 4,
            "../lib/guid": 5,
            "../lib/helper": 6,
            "./default-setting": 8
        }],
        19: [function(e, t, i) {
            "use strict";

            function s(e, t) {
                return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
            }
            var o = e("../lib/helper"),
                r = e("../lib/class"),
                n = e("../lib/dom"),
                a = e("./instances"),
                l = e("./update-scroll");
            t.exports = function(e) {
                var t, i = a.get(e);
                i.containerWidth = e.clientWidth, i.containerHeight = e.clientHeight, i.contentWidth = e.scrollWidth, i.contentHeight = e.scrollHeight, e.contains(i.scrollbarXRail) || (0 < (t = n.queryChildren(e, ".ps__scrollbar-x-rail")).length && t.forEach(function(e) {
                        n.remove(e)
                    }), n.appendTo(i.scrollbarXRail, e)), e.contains(i.scrollbarYRail) || (0 < (t = n.queryChildren(e, ".ps__scrollbar-y-rail")).length && t.forEach(function(e) {
                        n.remove(e)
                    }), n.appendTo(i.scrollbarYRail, e)), !i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth ? (i.scrollbarXActive = !0, i.railXWidth = i.containerWidth - i.railXMarginWidth, i.railXRatio = i.containerWidth / i.railXWidth, i.scrollbarXWidth = s(i, o.toInt(i.railXWidth * i.containerWidth / i.contentWidth)), i.scrollbarXLeft = o.toInt((i.negativeScrollAdjustment + e.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth))) : i.scrollbarXActive = !1, !i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight ? (i.scrollbarYActive = !0, i.railYHeight = i.containerHeight - i.railYMarginHeight, i.railYRatio = i.containerHeight / i.railYHeight, i.scrollbarYHeight = s(i, o.toInt(i.railYHeight * i.containerHeight / i.contentHeight)), i.scrollbarYTop = o.toInt(e.scrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight))) : i.scrollbarYActive = !1, i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth && (i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth), i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight && (i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight),
                    function(e, t) {
                        var i = {
                            width: t.railXWidth
                        };
                        t.isRtl ? i.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : i.left = e.scrollLeft, t.isScrollbarXUsingBottom ? i.bottom = t.scrollbarXBottom - e.scrollTop : i.top = t.scrollbarXTop + e.scrollTop, n.css(t.scrollbarXRail, i);
                        var s = {
                            top: e.scrollTop,
                            height: t.railYHeight
                        };
                        t.isScrollbarYUsingRight ? t.isRtl ? s.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : s.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? s.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : s.left = t.scrollbarYLeft + e.scrollLeft, n.css(t.scrollbarYRail, s), n.css(t.scrollbarX, {
                            left: t.scrollbarXLeft,
                            width: t.scrollbarXWidth - t.railBorderXWidth
                        }), n.css(t.scrollbarY, {
                            top: t.scrollbarYTop,
                            height: t.scrollbarYHeight - t.railBorderYWidth
                        })
                    }(e, i), i.scrollbarXActive ? r.add(e, "ps--active-x") : (r.remove(e, "ps--active-x"), i.scrollbarXWidth = 0, i.scrollbarXLeft = 0, l(e, "left", 0)), i.scrollbarYActive ? r.add(e, "ps--active-y") : (r.remove(e, "ps--active-y"), i.scrollbarYHeight = 0, i.scrollbarYTop = 0, l(e, "top", 0))
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-scroll": 20
        }],
        20: [function(e, t, i) {
            "use strict";
            var o = e("./instances"),
                r = function(e) {
                    var t = document.createEvent("Event");
                    return t.initEvent(e, !0, !0), t
                };
            t.exports = function(e, t, i) {
                if (void 0 === e) throw "You must provide an element to the update-scroll function";
                if (void 0 === t) throw "You must provide an axis to the update-scroll function";
                if (void 0 === i) throw "You must provide a value to the update-scroll function";
                "top" === t && i <= 0 && (e.scrollTop = i = 0, e.dispatchEvent(r("ps-y-reach-start"))), "left" === t && i <= 0 && (e.scrollLeft = i = 0, e.dispatchEvent(r("ps-x-reach-start")));
                var s = o.get(e);
                "top" === t && i >= s.contentHeight - s.containerHeight && ((i = s.contentHeight - s.containerHeight) - e.scrollTop <= 1 ? i = e.scrollTop : e.scrollTop = i, e.dispatchEvent(r("ps-y-reach-end"))), "left" === t && i >= s.contentWidth - s.containerWidth && ((i = s.contentWidth - s.containerWidth) - e.scrollLeft <= 1 ? i = e.scrollLeft : e.scrollLeft = i, e.dispatchEvent(r("ps-x-reach-end"))), void 0 === s.lastTop && (s.lastTop = e.scrollTop), void 0 === s.lastLeft && (s.lastLeft = e.scrollLeft), "top" === t && i < s.lastTop && e.dispatchEvent(r("ps-scroll-up")), "top" === t && i > s.lastTop && e.dispatchEvent(r("ps-scroll-down")), "left" === t && i < s.lastLeft && e.dispatchEvent(r("ps-scroll-left")), "left" === t && i > s.lastLeft && e.dispatchEvent(r("ps-scroll-right")), "top" === t && i !== s.lastTop && (e.scrollTop = s.lastTop = i, e.dispatchEvent(r("ps-scroll-y"))), "left" === t && i !== s.lastLeft && (e.scrollLeft = s.lastLeft = i, e.dispatchEvent(r("ps-scroll-x")))
            }
        }, {
            "./instances": 18
        }],
        21: [function(e, t, i) {
            "use strict";
            var s = e("../lib/helper"),
                o = e("../lib/dom"),
                r = e("./instances"),
                n = e("./update-geometry"),
                a = e("./update-scroll");
            t.exports = function(e) {
                var t = r.get(e);
                t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, o.css(t.scrollbarXRail, "display", "block"), o.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = s.toInt(o.css(t.scrollbarXRail, "marginLeft")) + s.toInt(o.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = s.toInt(o.css(t.scrollbarYRail, "marginTop")) + s.toInt(o.css(t.scrollbarYRail, "marginBottom")), o.css(t.scrollbarXRail, "display", "none"), o.css(t.scrollbarYRail, "display", "none"), n(e), a(e, "top", e.scrollTop), a(e, "left", e.scrollLeft), o.css(t.scrollbarXRail, "display", ""), o.css(t.scrollbarYRail, "display", ""))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-geometry": 19,
            "./update-scroll": 20
        }]
    }, {}, [1]),
    function(c, _, x) {
        "use strict";

        function t(e) {
            if (w = _.documentElement, s = _.body, b(), Z = this, se = (e = e || {}).constants || {}, e.easing)
                for (var t in e.easing) N[t] = e.easing[t];
            de = e.edgeStrategy || "set", te = {
                beforerender: e.beforerender,
                render: e.render,
                keyframe: e.keyframe
            }, (ie = !1 !== e.forceHeight) && (Me = e.scale || 1), oe = e.mobileDeceleration || d, ne = !1 !== e.smoothScrolling, ae = e.smoothScrollingDuration || p, le = {
                targetTop: Z.getScrollTop()
            }, (ze = (e.mobileCheck || function() {
                return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || c.opera)
            })()) ? ((ee = _.getElementById("skrollr-body")) && Q(), X(), we(w, [r, l], [n])) : we(w, [r, a], [n]), Z.refresh(), he(c, "resize orientationchange", function() {
                var e = w.clientWidth,
                    t = w.clientHeight;
                (t !== De || e !== Ie) && (De = t, Ie = e, Ge = !0)
            });
            var i = $();
            return function e() {
                W(), ue = i(e)
            }(), Z
        }
        var w, s, P = {
                get: function() {
                    return Z
                },
                init: function(e) {
                    return Z || new t(e)
                },
                VERSION: "0.6.26"
            },
            C = Object.prototype.hasOwnProperty,
            S = c.Math,
            o = c.getComputedStyle,
            M = "touchstart",
            A = "touchmove",
            k = "touchcancel",
            E = "touchend",
            I = "skrollable",
            D = I + "-before",
            G = I + "-between",
            H = I + "-after",
            r = "skrollr",
            n = "no-" + r,
            a = r + "-desktop",
            l = r + "-mobile",
            d = .004,
            p = 200,
            z = "___skrollable_id",
            O = /^(?:input|textarea|button|select)$/i,
            i = /^\s+|\s+$/g,
            B = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
            u = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
            h = /^(@?[a-z\-]+)\[(\w+)\]$/,
            L = /-([a-z0-9_])/g,
            R = function(e, t) {
                return t.toUpperCase()
            },
            f = /[\-+]?[\d]*\.?[\d]+/g,
            m = /\{\?\}/g,
            g = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
            v = /[a-z\-]+-gradient/g,
            y = "",
            T = "",
            b = function() {
                var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
                if (o) {
                    var t = o(s, null);
                    for (var i in t)
                        if (y = i.match(e) || +i == i && t[i].match(e)) break;
                    if (!y) return y = T = "", x;
                    "-" === (y = y[0]).slice(0, 1) ? y = {
                        "-webkit-": "webkit",
                        "-moz-": "Moz",
                        "-ms-": "ms",
                        "-o-": "O"
                    }[T = y] : T = "-" + y.toLowerCase() + "-"
                }
            },
            $ = function() {
                var e = c.requestAnimationFrame || c[y.toLowerCase() + "RequestAnimationFrame"],
                    s = xe();
                return (ze || !e) && (e = function(e) {
                    var t = xe() - s,
                        i = S.max(0, 1e3 / 60 - t);
                    return c.setTimeout(function() {
                        s = xe(), e()
                    }, i)
                }), e
            },
            N = {
                begin: function() {
                    return 0
                },
                end: function() {
                    return 1
                },
                linear: function(e) {
                    return e
                },
                quadratic: function(e) {
                    return e * e
                },
                cubic: function(e) {
                    return e * e * e
                },
                swing: function(e) {
                    return -S.cos(e * S.PI) / 2 + .5
                },
                sqrt: function(e) {
                    return S.sqrt(e)
                },
                outCubic: function(e) {
                    return S.pow(e - 1, 3) + 1
                },
                bounce: function(e) {
                    var t;
                    if (e <= .5083) t = 3;
                    else if (e <= .8489) t = 9;
                    else if (e <= .96208) t = 27;
                    else {
                        if (!(e <= .99981)) return 1;
                        t = 91
                    }
                    return 1 - S.abs(3 * S.cos(1.028 * e * t) / t)
                }
            };
        t.prototype.refresh = function(e) {
            var t, i, s = !1;
            for (e === x ? (s = !0, J = [], He = 0, e = _.getElementsByTagName("*")) : e.length === x && (e = [e]), t = 0, i = e.length; t < i; t++) {
                var o = e[t],
                    r = o,
                    n = [],
                    a = ne,
                    l = de,
                    c = !1;
                if (s && z in o && delete o[z], o.attributes) {
                    for (var d = 0, p = o.attributes.length; d < p; d++) {
                        var u = o.attributes[d];
                        if ("data-anchor-target" !== u.name)
                            if ("data-smooth-scrolling" !== u.name)
                                if ("data-edge-strategy" !== u.name)
                                    if ("data-emit-events" !== u.name) {
                                        var h = u.name.match(B);
                                        if (null !== h) {
                                            var f = {
                                                props: u.value,
                                                element: o,
                                                eventType: u.name.replace(L, R)
                                            };
                                            n.push(f);
                                            var m = h[1];
                                            m && (f.constant = m.substr(1));
                                            var g = h[2];
                                            /p$/.test(g) ? (f.isPercentage = !0, f.offset = (0 | g.slice(0, -1)) / 100) : f.offset = 0 | g;
                                            var v = h[3],
                                                y = h[4] || v;
                                            v && "start" !== v && "end" !== v ? (f.mode = "relative", f.anchors = [v, y]) : (f.mode = "absolute", "end" === v ? f.isEnd = !0 : f.isPercentage || (f.offset = f.offset * Me))
                                        }
                                    } else c = !0;
                        else l = u.value;
                        else a = "off" !== u.value;
                        else if (null === (r = _.querySelector(u.value))) throw 'Unable to find anchor target "' + u.value + '"'
                    }
                    var T, b, w;
                    if (n.length) !s && z in o ? (w = o[z], T = J[w].styleAttr, b = J[w].classAttr) : (w = o[z] = He++, T = o.style.cssText, b = be(o)), J[w] = {
                        element: o,
                        styleAttr: T,
                        classAttr: b,
                        anchorTarget: r,
                        keyFrames: n,
                        smoothScrolling: a,
                        edgeStrategy: l,
                        emitEvents: c,
                        lastFrameIndex: -1
                    }, we(o, [I], [])
                }
            }
            for (ve(), t = 0, i = e.length; t < i; t++) {
                var S = J[e[t][z]];
                S !== x && (F(S), Y(S))
            }
            return Z
        }, t.prototype.relativeToAbsolute = function(e, t, i) {
            var s = w.clientHeight,
                o = e.getBoundingClientRect(),
                r = o.top,
                n = o.bottom - o.top;
            return "bottom" === t ? r -= s : "center" === t && (r -= s / 2), "bottom" === i ? r += n : "center" === i && (r += n / 2), 0 | (r += Z.getScrollTop()) + .5
        }, t.prototype.animateTo = function(e, t) {
            t = t || {};
            var i = xe(),
                s = Z.getScrollTop();
            return (re = {
                startTop: s,
                topDiff: e - s,
                targetTop: e,
                duration: t.duration || 1e3,
                startTime: i,
                endTime: i + (t.duration || 1e3),
                easing: N[t.easing || "linear"],
                done: t.done
            }).topDiff || (re.done && re.done.call(Z, !1), re = x), Z
        }, t.prototype.stopAnimateTo = function() {
            re && re.done && re.done.call(Z, !0), re = x
        }, t.prototype.isAnimatingTo = function() {
            return !!re
        }, t.prototype.isMobile = function() {
            return ze
        }, t.prototype.setScrollTop = function(e, t) {
            return ce = !0 === t, ze ? Oe = S.min(S.max(e, 0), Ce) : c.scrollTo(0, e), Z
        }, t.prototype.getScrollTop = function() {
            return ze ? Oe : c.pageYOffset || w.scrollTop || s.scrollTop || 0
        }, t.prototype.getMaxScrollTop = function() {
            return Ce
        }, t.prototype.on = function(e, t) {
            return te[e] = t, Z
        }, t.prototype.off = function(e) {
            return delete te[e], Z
        }, t.prototype.destroy = function() {
            var e;
            (e = c.cancelAnimationFrame || c[y.toLowerCase() + "CancelAnimationFrame"], (ze || !e) && (e = function(e) {
                return c.clearTimeout(e)
            }), e)(ue), me(), we(w, [n], [r, a, l]);
            for (var t = 0, i = J.length; t < i; t++) K(J[t].element);
            w.style.overflow = s.style.overflow = "", w.style.height = s.style.height = "", ee && P.setStyle(ee, "transform", "none"), Ae = "down", ke = -(Me = 1), ze = Ge = !1, Oe = He = De = Ie = Ce = 0, pe = de = ce = le = ae = ne = re = oe = se = ie = te = ee = Z = x
        };
        var X = function() {
                var d, p, u, h, f, m, g, v, y, T, b;
                he(w, [M, A, k, E].join(" "), function(e) {
                    var t = e.changedTouches[0];
                    for (h = e.target; 3 === h.nodeType;) h = h.parentNode;
                    switch (f = t.clientY, m = t.clientX, y = e.timeStamp, O.test(h.tagName) || e.preventDefault(), e.type) {
                        case M:
                            d && d.blur(), Z.stopAnimateTo(), d = h, p = g = f, u = m, y;
                            break;
                        case A:
                            O.test(h.tagName) && _.activeElement !== h && e.preventDefault(), v = f - g, b = y - T, Z.setScrollTop(Oe - v, !0), g = f, T = y;
                            break;
                        default:
                        case k:
                        case E:
                            var i = p - f,
                                s = u - m;
                            if (s * s + i * i < 49) {
                                if (!O.test(d.tagName)) {
                                    d.focus();
                                    var o = _.createEvent("MouseEvents");
                                    o.initMouseEvent("click", !0, !0, e.view, 1, t.screenX, t.screenY, t.clientX, t.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), d.dispatchEvent(o)
                                }
                                return
                            }
                            d = x;
                            var r = v / b;
                            r = S.max(S.min(r, 3), -3);
                            var n = S.abs(r / oe),
                                a = r * n + .5 * oe * n * n,
                                l = Z.getScrollTop() - a,
                                c = 0;
                            Ce < l ? (c = (Ce - l) / a, l = Ce) : l < 0 && (c = -l / a, l = 0), n *= 1 - c, Z.animateTo(0 | l + .5, {
                                easing: "outCubic",
                                duration: n
                            })
                    }
                }), c.scrollTo(0, 0), w.style.overflow = s.style.overflow = "hidden"
            },
            W = function() {
                Ge && (Ge = !1, ve());
                var e, t, i = Z.getScrollTop(),
                    s = xe();
                if (re) s >= re.endTime ? (i = re.targetTop, e = re.done, re = x) : (t = re.easing((s - re.startTime) / re.duration), i = 0 | re.startTop + t * re.topDiff), Z.setScrollTop(i, !0);
                else if (!ce) {
                    le.targetTop - i && (le = {
                        startTop: ke,
                        topDiff: i - ke,
                        targetTop: i,
                        startTime: Ee,
                        endTime: Ee + ae
                    }), le.endTime >= s && (t = N.sqrt((s - le.startTime) / ae), i = 0 | le.startTop + t * le.topDiff)
                }
                if (ze && ee && P.setStyle(ee, "transform", "translate(0, " + -Oe + "px) " + pe), ce || ke !== i) {
                    var o = {
                        curTop: i,
                        lastTop: ke,
                        maxTop: Ce,
                        direction: Ae = ke < i ? "down" : i < ke ? "up" : Ae
                    };
                    (ce = !1) !== (te.beforerender && te.beforerender.call(Z, o)) && (function(e, t) {
                        for (var i = 0, s = J.length; i < s; i++) {
                            var o, r, n = J[i],
                                a = n.element,
                                l = n.smoothScrolling ? e : t,
                                c = n.keyFrames,
                                d = c.length,
                                p = c[0],
                                u = c[c.length - 1],
                                h = p.frame > l,
                                f = l > u.frame,
                                m = h ? p : u,
                                g = n.emitEvents,
                                v = n.lastFrameIndex;
                            if (h || f) {
                                if (h && -1 === n.edge || f && 1 === n.edge) continue;
                                switch (h ? (we(a, [D], [H, G]), g && -1 < v && (ge(a, p.eventType, Ae), n.lastFrameIndex = -1)) : (we(a, [H], [D, G]), g && v < d && (ge(a, u.eventType, Ae), n.lastFrameIndex = d)), n.edge = h ? -1 : 1, n.edgeStrategy) {
                                    case "reset":
                                        K(a);
                                        continue;
                                    case "ease":
                                        l = m.frame;
                                        break;
                                    default:
                                    case "set":
                                        var y = m.props;
                                        for (o in y) C.call(y, o) && (r = U(y[o].value), 0 === o.indexOf("@") ? a.setAttribute(o.substr(1), r) : P.setStyle(a, o, r));
                                        continue
                                }
                            } else 0 !== n.edge && (we(a, [I, G], [D, H]), n.edge = 0);
                            for (var T = 0; T < d - 1; T++)
                                if (l >= c[T].frame && c[T + 1].frame >= l) {
                                    var b = c[T],
                                        w = c[T + 1];
                                    for (o in b.props)
                                        if (C.call(b.props, o)) {
                                            var S = (l - b.frame) / (w.frame - b.frame);
                                            S = b.props[o].easing(S), r = q(b.props[o].value, w.props[o].value, S), r = U(r), 0 === o.indexOf("@") ? a.setAttribute(o.substr(1), r) : P.setStyle(a, o, r)
                                        }
                                    g && v !== T && (ge(a, "down" === Ae ? b.eventType : w.eventType, Ae), n.lastFrameIndex = T);
                                    break
                                }
                        }
                    }(i, Z.getScrollTop()), ke = i, te.render && te.render.call(Z, o)), e && e.call(Z, !1)
                }
                Ee = s
            },
            F = function(e) {
                for (var t = 0, i = e.keyFrames.length; t < i; t++) {
                    for (var s, o, r, n, a = e.keyFrames[t], l = {}; null !== (n = u.exec(a.props));) r = n[1], o = n[2], null !== (s = r.match(h)) ? (r = s[1], s = s[2]) : s = "linear", o = o.indexOf("!") ? V(o) : [o.slice(1)], l[r] = {
                        value: o,
                        easing: N[s]
                    };
                    a.props = l
                }
            },
            V = function(e) {
                var t = [];
                return g.lastIndex = 0, e = e.replace(g, function(e) {
                    return e.replace(f, function(e) {
                        return e / 255 * 100 + "%"
                    })
                }), T && (v.lastIndex = 0, e = e.replace(v, function(e) {
                    return T + e
                })), e = e.replace(f, function(e) {
                    return t.push(+e), "{?}"
                }), t.unshift(e), t
            },
            Y = function(e) {
                var t, i, s = {};
                for (t = 0, i = e.keyFrames.length; t < i; t++) j(e.keyFrames[t], s);
                for (s = {}, t = e.keyFrames.length - 1; 0 <= t; t--) j(e.keyFrames[t], s)
            },
            j = function(e, t) {
                var i;
                for (i in t) C.call(e.props, i) || (e.props[i] = t[i]);
                for (i in e.props) t[i] = e.props[i]
            },
            q = function(e, t, i) {
                var s, o = e.length;
                if (o !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
                var r = [e[0]];
                for (s = 1; s < o; s++) r[s] = e[s] + (t[s] - e[s]) * i;
                return r
            },
            U = function(e) {
                var t = 1;
                return m.lastIndex = 0, e[0].replace(m, function() {
                    return e[t++]
                })
            },
            K = function(e, t) {
                for (var i, s, o = 0, r = (e = [].concat(e)).length; o < r; o++) s = e[o], (i = J[s[z]]) && (t ? (s.style.cssText = i.dirtyStyleAttr, we(s, i.dirtyClassAttr)) : (i.dirtyStyleAttr = s.style.cssText, i.dirtyClassAttr = be(s), s.style.cssText = i.styleAttr, we(s, i.classAttr)))
            },
            Q = function() {
                pe = "translateZ(0)", P.setStyle(ee, "transform", pe);
                var e = o(ee),
                    t = e.getPropertyValue("transform"),
                    i = e.getPropertyValue(T + "transform");
                t && "none" !== t || i && "none" !== i || (pe = "")
            };
        P.setStyle = function(e, t, i) {
            var s = e.style;
            if ("zIndex" === (t = t.replace(L, R).replace("-", ""))) s[t] = isNaN(i) ? i : "" + (0 | i);
            else if ("float" === t) s.styleFloat = s.cssFloat = i;
            else try {
                y && (s[y + t.slice(0, 1).toUpperCase() + t.slice(1)] = i), s[t] = i
            } catch (e) {}
        };
        var Z, J, ee, te, ie, se, oe, re, ne, ae, le, ce, de, pe, ue, he = P.addEvent = function(e, t, i) {
                for (var s, o = function(e) {
                        return (e = e || c.event).target || (e.target = e.srcElement), e.preventDefault || (e.preventDefault = function() {
                            e.returnValue = !1, e.defaultPrevented = !0
                        }), i.call(this, e)
                    }, r = 0, n = (t = t.split(" ")).length; r < n; r++) s = t[r], e.addEventListener ? e.addEventListener(s, i, !1) : e.attachEvent("on" + s, o), Be.push({
                    element: e,
                    name: s,
                    listener: i
                })
            },
            fe = P.removeEvent = function(e, t, i) {
                for (var s = 0, o = (t = t.split(" ")).length; s < o; s++) e.removeEventListener ? e.removeEventListener(t[s], i, !1) : e.detachEvent("on" + t[s], i)
            },
            me = function() {
                for (var e, t = 0, i = Be.length; t < i; t++) e = Be[t], fe(e.element, e.name, e.listener);
                Be = []
            },
            ge = function(e, t, i) {
                te.keyframe && te.keyframe.call(Z, e, t, i)
            },
            ve = function() {
                var e = Z.getScrollTop();
                Ce = 0, ie && !ze && (s.style.height = ""),
                    function() {
                        var e, t, i, s, o, r, n, a, l, c, d, p = w.clientHeight,
                            u = ye();
                        for (a = 0, l = J.length; a < l; a++)
                            for (t = (e = J[a]).element, i = e.anchorTarget, o = 0, r = (s = e.keyFrames).length; o < r; o++) c = (n = s[o]).offset, d = u[n.constant] || 0, n.frame = c, n.isPercentage && (c *= p, n.frame = c), "relative" === n.mode && (K(t), n.frame = Z.relativeToAbsolute(i, n.anchors[0], n.anchors[1]) - c, K(t, !0)), n.frame += d, ie && !n.isEnd && n.frame > Ce && (Ce = n.frame);
                        for (Ce = S.max(Ce, Te()), a = 0, l = J.length; a < l; a++) {
                            for (o = 0, r = (s = (e = J[a]).keyFrames).length; o < r; o++) d = u[(n = s[o]).constant] || 0, n.isEnd && (n.frame = Ce - n.offset + d);
                            e.keyFrames.sort(Pe)
                        }
                    }(), ie && !ze && (s.style.height = Ce + w.clientHeight + "px"), ze ? Z.setScrollTop(S.min(Z.getScrollTop(), Ce)) : Z.setScrollTop(e, !0), ce = !0
            },
            ye = function() {
                var e, t, i = w.clientHeight,
                    s = {};
                for (e in se) "function" == typeof(t = se[e]) ? t = t.call(Z) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * i), s[e] = t;
                return s
            },
            Te = function() {
                var e = ee && ee.offsetHeight || 0;
                return S.max(e, s.scrollHeight, s.offsetHeight, w.scrollHeight, w.offsetHeight, w.clientHeight) - w.clientHeight
            },
            be = function(e) {
                var t = "className";
                return c.SVGElement && e instanceof c.SVGElement && (e = e[t], t = "baseVal"), e[t]
            },
            we = function(e, t, i) {
                var s = "className";
                if (c.SVGElement && e instanceof c.SVGElement && (e = e[s], s = "baseVal"), i === x) return e[s] = t, x;
                for (var o = e[s], r = 0, n = i.length; r < n; r++) o = _e(o).replace(_e(i[r]), " ");
                o = Se(o);
                for (var a = 0, l = t.length; a < l; a++) - 1 === _e(o).indexOf(_e(t[a])) && (o += " " + t[a]);
                e[s] = Se(o)
            },
            Se = function(e) {
                return e.replace(i, "")
            },
            _e = function(e) {
                return " " + e + " "
            },
            xe = Date.now || function() {
                return +new Date
            },
            Pe = function(e, t) {
                return e.frame - t.frame
            },
            Ce = 0,
            Me = 1,
            Ae = "down",
            ke = -1,
            Ee = xe(),
            Ie = 0,
            De = 0,
            Ge = !1,
            He = 0,
            ze = !1,
            Oe = 0,
            Be = [];
        "function" == typeof define && define.amd ? define([], function() {
            return P
        }) : "undefined" != typeof module && module.exports ? module.exports = P : c.skrollr = P
    }(window, document),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(c) {
        "use strict";
        var o, r = window.Slick || {};
        (o = 0, r = function(e, t) {
            var i, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: c(e),
                appendDots: c(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return c('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, c.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = c(e), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, i = c(e).data("slick") || {}, s.options = c.extend({}, s.defaults, t, i), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = c.proxy(s.autoPlay, s), s.autoPlayClear = c.proxy(s.autoPlayClear, s), s.autoPlayIterator = c.proxy(s.autoPlayIterator, s), s.changeSlide = c.proxy(s.changeSlide, s), s.clickHandler = c.proxy(s.clickHandler, s), s.selectHandler = c.proxy(s.selectHandler, s), s.setPosition = c.proxy(s.setPosition, s), s.swipeHandler = c.proxy(s.swipeHandler, s), s.dragHandler = c.proxy(s.dragHandler, s), s.keyHandler = c.proxy(s.keyHandler, s), s.instanceUid = o++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
        }).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, r.prototype.addSlide = r.prototype.slickAdd = function(e, t, i) {
            var s = this;
            if ("boolean" == typeof t) i = t, t = null;
            else if (t < 0 || t >= s.slideCount) return !1;
            s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? c(e).appendTo(s.$slideTrack) : i ? c(e).insertBefore(s.$slides.eq(t)) : c(e).insertAfter(s.$slides.eq(t)) : !0 === i ? c(e).prependTo(s.$slideTrack) : c(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
                c(t).attr("data-slick-index", e)
            }), s.$slidesCache = s.$slides, s.reinit()
        }, r.prototype.animateHeight = function() {
            if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
                var e = this.$slides.eq(this.currentSlide).outerHeight(!0);
                this.$list.animate({
                    height: e
                }, this.options.speed)
            }
        }, r.prototype.animateSlide = function(e, t) {
            var i = {},
                s = this;
            s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                left: e
            }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
                top: e
            }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), c({
                animStart: s.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === s.options.vertical ? i[s.animType] = "translate(" + e + "px, 0px)" : i[s.animType] = "translate(0px," + e + "px)", s.$slideTrack.css(i)
                },
                complete: function() {
                    t && t.call()
                }
            })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? i[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(i), t && setTimeout(function() {
                s.disableTransition(), t.call()
            }, s.options.speed))
        }, r.prototype.getNavTarget = function() {
            var e = this.options.asNavFor;
            return e && null !== e && (e = c(e).not(this.$slider)), e
        }, r.prototype.asNavFor = function(t) {
            var e = this.getNavTarget();
            null !== e && "object" == typeof e && e.each(function() {
                var e = c(this).slick("getSlick");
                e.unslicked || e.slideHandler(t, !0)
            })
        }, r.prototype.applyTransition = function(e) {
            var t = this,
                i = {};
            !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, r.prototype.autoPlay = function() {
            this.autoPlayClear(), this.slideCount > this.options.slidesToShow && (this.autoPlayTimer = setInterval(this.autoPlayIterator, this.options.autoplaySpeed))
        }, r.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, r.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, r.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, r.prototype.buildDots = function() {
            var e, t;
            if (!0 === this.options.dots) {
                for (this.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(this.options.dotsClass), e = 0; e <= this.getDotCount(); e += 1) t.append(c("<li />").append(this.options.customPaging.call(this, this, e)));
                this.$dots = t.appendTo(this.options.appendDots), this.$dots.find("li").first().addClass("slick-active")
            }
        }, r.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
                c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, r.prototype.buildRows = function() {
            var e, t, i, s, o, r, n, a = this;
            if (s = document.createDocumentFragment(), r = a.$slider.children(), 1 < a.options.rows) {
                for (n = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / n), e = 0; e < o; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var d = e * n + (t * a.options.slidesPerRow + i);
                            r.get(d) && c.appendChild(r.get(d))
                        }
                        l.appendChild(c)
                    }
                    s.appendChild(l)
                }
                a.$slider.empty().append(s), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, r.prototype.checkResponsive = function(e, t) {
            var i, s, o, r = this,
                n = !1,
                a = r.$slider.width(),
                l = window.innerWidth || c(window).width();
            if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = a : "min" === r.respondTo && (o = Math.min(l, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                for (i in s = null, r.breakpoints) r.breakpoints.hasOwnProperty(i) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[i] && (s = r.breakpoints[i]) : o > r.breakpoints[i] && (s = r.breakpoints[i]));
                null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), n = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), n = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), n = s), e || !1 === n || r.$slider.trigger("breakpoint", [r, n])
            }
        }, r.prototype.changeSlide = function(e, t) {
            var i, s, o = this,
                r = c(e.currentTarget);
            switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
                case "previous":
                    s = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - s, !1, t);
                    break;
                case "next":
                    s = 0 === i ? o.options.slidesToScroll : i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + s, !1, t);
                    break;
                case "index":
                    var n = 0 === e.data.index ? 0 : e.data.index || r.index() * o.options.slidesToScroll;
                    o.slideHandler(o.checkNavigable(n), !1, t), r.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, r.prototype.checkNavigable = function(e) {
            var t, i;
            if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
            else
                for (var s in t) {
                    if (e < t[s]) {
                        e = i;
                        break
                    }
                    i = t[s]
                }
            return e
        }, r.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }, r.prototype.cleanUpSlideEvents = function() {
            this.$list.off("mouseenter.slick", c.proxy(this.interrupt, this, !0)), this.$list.off("mouseleave.slick", c.proxy(this.interrupt, this, !1))
        }, r.prototype.cleanUpRows = function() {
            var e;
            1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
        }, r.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, r.prototype.destroy = function(e) {
            var t = this;
            t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                c(this).attr("style", c(this).data("originalStyling"))
            }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
        }, r.prototype.disableTransition = function(e) {
            var t = {};
            t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
        }, r.prototype.fadeSlide = function(e, t) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(e).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), t && setTimeout(function() {
                i.disableTransition(e), t.call()
            }, i.options.speed))
        }, r.prototype.fadeSlideOut = function(e) {
            !1 === this.cssTransitions ? this.$slides.eq(e).animate({
                opacity: 0,
                zIndex: this.options.zIndex - 2
            }, this.options.speed, this.options.easing) : (this.applyTransition(e), this.$slides.eq(e).css({
                opacity: 0,
                zIndex: this.options.zIndex - 2
            }))
        }, r.prototype.filterSlides = r.prototype.slickFilter = function(e) {
            null !== e && (this.$slidesCache = this.$slides, this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.filter(e).appendTo(this.$slideTrack), this.reinit())
        }, r.prototype.focusHandler = function() {
            var i = this;
            i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
                e.stopImmediatePropagation();
                var t = c(this);
                setTimeout(function() {
                    i.options.pauseOnFocus && (i.focussed = t.is(":focus"), i.autoPlay())
                }, 0)
            })
        }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, r.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                i = 0,
                s = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++s;
                else
                    for (; t < e.slideCount;) ++s, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) s = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++s, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else s = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return s - 1
        }, r.prototype.getLeft = function(e) {
            var t, i, s, o, r = this,
                n = 0;
            return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), n = i * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, n = (r.options.slidesToShow - (e - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, n = r.slideCount % r.options.slidesToScroll * i * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, n = (e + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (n = r.slideOffset = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * i * -1 + n, !0 === r.options.variableWidth && (s = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? s[0] ? -1 * (r.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, !0 === r.options.centerMode && (s = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? s[0] ? -1 * (r.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, t += (r.$list.width() - s.outerWidth()) / 2)), t
        }, r.prototype.getOption = r.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, r.prototype.getNavigableIndexes = function() {
            var e, t = this,
                i = 0,
                s = 0,
                o = [];
            for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, s = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) o.push(i), i = s + t.options.slidesToScroll, s += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return o
        }, r.prototype.getSlick = function() {
            return this
        }, r.prototype.getSlideCount = function() {
            var i, s, o = this;
            return s = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(e, t) {
                if (t.offsetLeft - s + c(t).outerWidth() / 2 > -1 * o.swipeLeft) return i = t, !1
            }), Math.abs(c(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, r.prototype.goTo = r.prototype.slickGoTo = function(e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, r.prototype.init = function(e) {
            var t = this;
            c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
        }, r.prototype.initADA = function() {
            var i = this,
                s = Math.ceil(i.slideCount / i.options.slidesToShow),
                o = i.getNavigableIndexes().filter(function(e) {
                    return 0 <= e && e < i.slideCount
                });
            i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== i.$dots && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(e) {
                var t = o.indexOf(e);
                c(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + i.instanceUid + e,
                    tabindex: -1
                }), -1 !== t && c(this).attr({
                    "aria-describedby": "slick-slide-control" + i.instanceUid + t
                })
            }), i.$dots.attr("role", "tablist").find("li").each(function(e) {
                var t = o[e];
                c(this).attr({
                    role: "presentation"
                }), c(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + i.instanceUid + e,
                    "aria-controls": "slick-slide" + i.instanceUid + t,
                    "aria-label": e + 1 + " of " + s,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(i.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var e = i.currentSlide, t = e + i.options.slidesToShow; e < t; e++) i.$slides.eq(e).attr("tabindex", 0);
            i.activateADA()
        }, r.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, r.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && (c("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
        }, r.prototype.initSlideEvents = function() {
            this.options.pauseOnHover && (this.$list.on("mouseenter.slick", c.proxy(this.interrupt, this, !0)), this.$list.on("mouseleave.slick", c.proxy(this.interrupt, this, !1)))
        }, r.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(e.setPosition)
        }, r.prototype.initUI = function() {
            !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(), this.$nextArrow.show()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show()
        }, r.prototype.keyHandler = function(e) {
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === this.options.accessibility ? this.changeSlide({
                data: {
                    message: !0 === this.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === this.options.accessibility && this.changeSlide({
                data: {
                    message: !0 === this.options.rtl ? "previous" : "next"
                }
            }))
        }, r.prototype.lazyLoad = function() {
            function e(e) {
                c("img[data-lazy]", e).each(function() {
                    var e = c(this),
                        t = c(this).attr("data-lazy"),
                        i = c(this).attr("data-srcset"),
                        s = c(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                        o = document.createElement("img");
                    o.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            i && (e.attr("srcset", i), s && e.attr("sizes", s)), e.attr("src", t).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), r.$slider.trigger("lazyLoaded", [r, e, t])
                        })
                    }, o.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t])
                    }, o.src = t
                })
            }
            var t, i, s, r = this;
            if (!0 === r.options.centerMode ? !0 === r.options.infinite ? s = (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = Math.ceil(i + r.options.slidesToShow), !0 === r.options.fade && (0 < i && i--, s <= r.slideCount && s++)), t = r.$slider.find(".slick-slide").slice(i, s), "anticipated" === r.options.lazyLoad)
                for (var o = i - 1, n = s, a = r.$slider.find(".slick-slide"), l = 0; l < r.options.slidesToScroll; l++) o < 0 && (o = r.slideCount - 1), t = (t = t.add(a.eq(o))).add(a.eq(n)), o--, n++;
            e(t), r.slideCount <= r.options.slidesToShow ? e(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? e(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && e(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
        }, r.prototype.loadSlider = function() {
            this.setPosition(), this.$slideTrack.css({
                opacity: 1
            }), this.$slider.removeClass("slick-loading"), this.initUI(), "progressive" === this.options.lazyLoad && this.progressiveLazyLoad()
        }, r.prototype.next = r.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, r.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, r.prototype.pause = r.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, r.prototype.play = r.prototype.slickPlay = function() {
            this.autoPlay(), this.options.autoplay = !0, this.paused = !1, this.focussed = !1, this.interrupted = !1
        }, r.prototype.postSlide = function(e) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
        }, r.prototype.prev = r.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, r.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, r.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var t, i, s, o, r, n = this,
                a = c("img[data-lazy]", n.$slider);
            a.length ? (t = a.first(), i = t.attr("data-lazy"), s = t.attr("data-srcset"), o = t.attr("data-sizes") || n.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
                s && (t.attr("srcset", s), o && t.attr("sizes", o)), t.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === n.options.adaptiveHeight && n.setPosition(), n.$slider.trigger("lazyLoaded", [n, t, i]), n.progressiveLazyLoad()
            }, r.onerror = function() {
                e < 3 ? setTimeout(function() {
                    n.progressiveLazyLoad(e + 1)
                }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, t, i]), n.progressiveLazyLoad())
            }, r.src = i) : n.$slider.trigger("allImagesLoaded", [n])
        }, r.prototype.refresh = function(e) {
            var t, i, s = this;
            i = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > i && (s.currentSlide = i), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), c.extend(s, s.initials, {
                currentSlide: t
            }), s.init(), e || s.changeSlide({
                data: {
                    message: "index",
                    index: t
                }
            }, !1)
        }, r.prototype.registerBreakpoints = function() {
            var e, t, i, s = this,
                o = s.options.responsive || null;
            if ("array" === c.type(o) && o.length) {
                for (e in s.respondTo = s.options.respondTo || "window", o)
                    if (i = s.breakpoints.length - 1, o.hasOwnProperty(e)) {
                        for (t = o[e].breakpoint; 0 <= i;) s.breakpoints[i] && s.breakpoints[i] === t && s.breakpoints.splice(i, 1), i--;
                        s.breakpoints.push(t), s.breakpointSettings[t] = o[e].settings
                    }
                s.breakpoints.sort(function(e, t) {
                    return s.options.mobileFirst ? e - t : t - e
                })
            }
        }, r.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, r.prototype.resize = function() {
            var e = this;
            c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, r.prototype.removeSlide = r.prototype.slickRemove = function(e, t, i) {
            var s = this;
            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : s.slideCount - 1 : !0 === t ? --e : e, s.slideCount < 1 || e < 0 || e > s.slideCount - 1) return !1;
            s.unload(), !0 === i ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(e).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, s.reinit()
        }, r.prototype.setCSS = function(e) {
            var t, i, s = this,
                o = {};
            !0 === s.options.rtl && (e = -e), t = "left" == s.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == s.positionProp ? Math.ceil(e) + "px" : "0px", o[s.positionProp] = e, !1 === s.transformsEnabled || (o = {}, !1 === s.cssTransitions ? o[s.animType] = "translate(" + t + ", " + i + ")" : o[s.animType] = "translate3d(" + t + ", " + i + ", 0px)"), s.$slideTrack.css(o)
        }, r.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, r.prototype.setFade = function() {
            var i, s = this;
            s.$slides.each(function(e, t) {
                i = s.slideWidth * e * -1, !0 === s.options.rtl ? c(t).css({
                    position: "relative",
                    right: i,
                    top: 0,
                    zIndex: s.options.zIndex - 2,
                    opacity: 0
                }) : c(t).css({
                    position: "relative",
                    left: i,
                    top: 0,
                    zIndex: s.options.zIndex - 2,
                    opacity: 0
                })
            }), s.$slides.eq(s.currentSlide).css({
                zIndex: s.options.zIndex - 1,
                opacity: 1
            })
        }, r.prototype.setHeight = function() {
            if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
                var e = this.$slides.eq(this.currentSlide).outerHeight(!0);
                this.$list.css("height", e)
            }
        }, r.prototype.setOption = r.prototype.slickSetOption = function() {
            var e, t, i, s, o, r = this,
                n = !1;
            if ("object" === c.type(arguments[0]) ? (i = arguments[0], n = arguments[1], o = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[0], s = arguments[1], n = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[i] = s;
            else if ("multiple" === o) c.each(i, function(e, t) {
                r.options[e] = t
            });
            else if ("responsive" === o)
                for (t in s)
                    if ("array" !== c.type(r.options.responsive)) r.options.responsive = [s[t]];
                    else {
                        for (e = r.options.responsive.length - 1; 0 <= e;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                        r.options.responsive.push(s[t])
                    }
            n && (r.unload(), r.reinit())
        }, r.prototype.setPosition = function() {
            this.setDimensions(), this.setHeight(), !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(), this.$slider.trigger("setPosition", [this])
        }, r.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, r.prototype.setSlideClasses = function(e) {
            var t, i, s, o, r = this;
            if (i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
                var n = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (t <= e && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + n, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = r.options.slidesToShow + e, i.slice(s - t + 1 + n, s + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
            } else 0 <= e && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, s = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? i.slice(s - (r.options.slidesToShow - o), s + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(s, s + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
        }, r.prototype.setupInfinite = function() {
            var e, t, i, s = this;
            if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
                for (i = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - i; e -= 1) t = e - 1, c(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < i + s.slideCount; e += 1) t = e, c(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    c(this).attr("id", "")
                })
            }
        }, r.prototype.interrupt = function(e) {
            e || this.autoPlay(), this.interrupted = e
        }, r.prototype.selectHandler = function(e) {
            var t = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
                i = parseInt(t.attr("data-slick-index"));
            i || (i = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(i, !1, !0) : this.slideHandler(i)
        }, r.prototype.slideHandler = function(e, t, i) {
            var s, o, r, n, a, l = null,
                c = this;
            if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
                if (!1 === t && c.asNavFor(e), s = e, l = c.getLeft(s), n = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? n : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (s = c.currentSlide, !0 !== i ? c.animateSlide(n, function() {
                    c.postSlide(s)
                }) : c.postSlide(s));
                else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (s = c.currentSlide, !0 !== i ? c.animateSlide(n, function() {
                c.postSlide(s)
            }) : c.postSlide(s));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = s < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + s : s >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : s - c.slideCount : s, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(r), c.fadeSlide(o, function() {
                    c.postSlide(o)
                })) : c.postSlide(o), void c.animateHeight();
                !0 !== i ? c.animateSlide(l, function() {
                    c.postSlide(o)
                }) : c.postSlide(o)
            }
        }, r.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, r.prototype.swipeDirection = function() {
            var e, t, i, s;
            return e = this.touchObject.startX - this.touchObject.curX, t = this.touchObject.startY - this.touchObject.curY, i = Math.atan2(t, e), (s = Math.round(180 * i / Math.PI)) < 0 && (s = 360 - Math.abs(s)), s <= 45 && 0 <= s ? !1 === this.options.rtl ? "left" : "right" : s <= 360 && 315 <= s ? !1 === this.options.rtl ? "left" : "right" : 135 <= s && s <= 225 ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? 35 <= s && s <= 135 ? "down" : "up" : "vertical"
        }, r.prototype.swipeEnd = function(e) {
            var t, i, s = this;
            if (s.dragging = !1, s.swiping = !1, s.scrolling) return s.scrolling = !1;
            if (s.interrupted = !1, s.shouldClick = !(10 < s.touchObject.swipeLength), void 0 === s.touchObject.curX) return !1;
            if (!0 === s.touchObject.edgeHit && s.$slider.trigger("edge", [s, s.swipeDirection()]), s.touchObject.swipeLength >= s.touchObject.minSwipe) {
                switch (i = s.swipeDirection()) {
                    case "left":
                    case "down":
                        t = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(), s.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(), s.currentDirection = 1
                }
                "vertical" != i && (s.slideHandler(t), s.touchObject = {}, s.$slider.trigger("swipe", [s, i]))
            } else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), s.touchObject = {})
        }, r.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, r.prototype.swipeMove = function(e) {
            var t, i, s, o, r, n, a = this;
            return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), n = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && 4 < n ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = n), i = a.swipeDirection(), void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), s = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (s = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + s * o : a.swipeLeft = t + s * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + s * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
        }, r.prototype.swipeStart = function(e) {
            var t, i = this;
            if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
        }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
            null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.appendTo(this.$slideTrack), this.reinit())
        }, r.prototype.unload = function() {
            var e = this;
            c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, r.prototype.unslick = function(e) {
            this.$slider.trigger("unslick", [this, e]), this.destroy()
        }, r.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, r.prototype.updateDots = function() {
            null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").end(), this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active"))
        }, r.prototype.visibility = function() {
            this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
        }, c.fn.slick = function() {
            var e, t, i = arguments[0],
                s = Array.prototype.slice.call(arguments, 1),
                o = this.length;
            for (e = 0; e < o; e++)
                if ("object" == typeof i || void 0 === i ? this[e].slick = new r(this[e], i) : t = this[e].slick[i].apply(this[e].slick, s), void 0 !== t) return t;
            return this
        }
    }),
    function() {
        var k, E;
        k = this.jQuery || window.jQuery, E = k(window), k.fn.stick_in_parent = function(e) {
            var w, S, _, x, P, C, i, M, A, t, s, o;
            for (null == e && (e = {}), A = e.sticky_class, _ = e.inner_scrolling, M = e.recalc_every, i = e.parent, P = e.offset_top, x = e.spacer, S = e.bottoming, null == P && (P = 0), null == i && (i = void 0), null == _ && (_ = !0), null == A && (A = "is_stuck"), w = k(document), null == S && (S = !0), C = function(e) {
                    var t;
                    return window.getComputedStyle ? (e = window.getComputedStyle(e[0]), t = parseFloat(e.getPropertyValue("width")) + parseFloat(e.getPropertyValue("margin-left")) + parseFloat(e.getPropertyValue("margin-right")), "border-box" !== e.getPropertyValue("box-sizing") && (t += parseFloat(e.getPropertyValue("border-left-width")) + parseFloat(e.getPropertyValue("border-right-width")) + parseFloat(e.getPropertyValue("padding-left")) + parseFloat(e.getPropertyValue("padding-right"))), t) : e.outerWidth(!0)
                }, t = function(o, r, n, a, l, c, d, p) {
                    var u, e, h, f, m, g, v, y, t, T, b, s;
                    if (!o.data("sticky_kit")) {
                        if (o.data("sticky_kit", !0), m = w.height(), v = o.parent(), null != i && (v = v.closest(i)), !v.length) throw "failed to find stick parent";
                        if (u = h = !1, (b = null != x ? x && o.closest(x) : k("<div />")) && b.css("position", o.css("position")), (y = function() {
                                var e, t, i;
                                if (!p && (m = w.height(), e = parseInt(v.css("border-top-width"), 10), t = parseInt(v.css("padding-top"), 10), r = parseInt(v.css("padding-bottom"), 10), n = v.offset().top + e + t, a = v.height(), h && (u = h = !1, null == x && (o.insertAfter(b), b.detach()), o.css({
                                        position: "",
                                        top: "",
                                        width: "",
                                        bottom: ""
                                    }).removeClass(A), i = !0), l = o.offset().top - (parseInt(o.css("margin-top"), 10) || 0) - P, c = o.outerHeight(!0), d = o.css("float"), b && b.css({
                                        width: C(o),
                                        height: c,
                                        display: o.css("display"),
                                        "vertical-align": o.css("vertical-align"),
                                        float: d
                                    }), i)) return s()
                            })(), c !== a) return f = void 0, g = P, T = M, s = function() {
                            var e, t, i, s;
                            if (!p && (i = !1, null != T && (--T <= 0 && (T = M, y(), i = !0)), i || w.height() === m || y(), i = E.scrollTop(), null != f && (t = i - f), f = i, h ? (S && (s = a + n < i + c + g, u && !s && (u = !1, o.css({
                                    position: "fixed",
                                    bottom: "",
                                    top: g
                                }).trigger("sticky_kit:unbottom"))), i < l && (h = !1, g = P, null == x && ("left" !== d && "right" !== d || o.insertAfter(b), b.detach()), e = {
                                    position: "",
                                    width: "",
                                    top: ""
                                }, o.css(e).removeClass(A).trigger("sticky_kit:unstick")), _ && ((e = E.height()) < c + P && !u && (g -= t, g = Math.max(e - c, g), g = Math.min(P, g), h && o.css({
                                    top: g + "px"
                                })))) : l < i && (h = !0, (e = {
                                    position: "fixed",
                                    top: g
                                }).width = "border-box" === o.css("box-sizing") ? o.outerWidth() + "px" : o.width() + "px", o.css(e).addClass(A), null == x && (o.after(b), "left" !== d && "right" !== d || b.append(o)), o.trigger("sticky_kit:stick")), h && S && (null == s && (s = a + n < i + c + g), !u && s))) return u = !0, "static" === v.css("position") && v.css({
                                position: "relative"
                            }), o.css({
                                position: "absolute",
                                bottom: r,
                                top: "auto"
                            }).trigger("sticky_kit:bottom")
                        }, t = function() {
                            return y(), s()
                        }, e = function() {
                            if (p = !0, E.off("touchmove", s), E.off("scroll", s), E.off("resize", t), k(document.body).off("sticky_kit:recalc", t), o.off("sticky_kit:detach", e), o.removeData("sticky_kit"), o.css({
                                    position: "",
                                    bottom: "",
                                    top: "",
                                    width: ""
                                }), v.position("position", ""), h) return null == x && ("left" !== d && "right" !== d || o.insertAfter(b), b.remove()), o.removeClass(A)
                        }, E.on("touchmove", s), E.on("scroll", s), E.on("resize", t), k(document.body).on("sticky_kit:recalc", t), o.on("sticky_kit:detach", e), setTimeout(s, 0)
                    }
                }, s = 0, o = this.length; s < o; s++) e = this[s], t(k(e));
            return this
        }
    }.call(this),
    function() {
        "use strict";
        var O, e, t, i, s, o, r, n, a, l, B = function(e, l) {
            function m(e) {
                return Math.floor(e)
            }

            function t() {
                var e = b.params.autoplay,
                    t = b.slides.eq(b.activeIndex);
                t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || b.params.autoplay), b.autoplayTimeoutId = setTimeout(function() {
                    b.params.loop ? (b.fixLoop(), b._slideNext(), b.emit("onAutoplay", b)) : b.isEnd ? l.autoplayStopOnLast ? b.stopAutoplay() : (b._slideTo(0), b.emit("onAutoplay", b)) : (b._slideNext(), b.emit("onAutoplay", b))
                }, e)
            }

            function a(e, i) {
                var t = O(e.target);
                if (!t.is(i))
                    if ("string" == typeof i) t = t.parents(i);
                    else if (i.nodeType) {
                    var s;
                    return t.parents().each(function(e, t) {
                        t === i && (s = i)
                    }), s ? i : void 0
                }
                if (0 !== t.length) return t[0]
            }

            function i(e, t) {
                t = t || {};
                var i = new(window.MutationObserver || window.WebkitMutationObserver)(function(e) {
                    e.forEach(function(e) {
                        b.onResize(!0), b.emit("onObserverUpdate", b, e)
                    })
                });
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), b.observers.push(i)
            }

            function s(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = e.keyCode || e.charCode;
                if (!b.params.allowSwipeToNext && (b.isHorizontal() && 39 === t || !b.isHorizontal() && 40 === t)) return !1;
                if (!b.params.allowSwipeToPrev && (b.isHorizontal() && 37 === t || !b.isHorizontal() && 38 === t)) return !1;
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === t || 39 === t || 38 === t || 40 === t) {
                        var i = !1;
                        if (0 < b.container.parents("." + b.params.slideClass).length && 0 === b.container.parents("." + b.params.slideActiveClass).length) return;
                        var s = window.pageXOffset,
                            o = window.pageYOffset,
                            r = window.innerWidth,
                            n = window.innerHeight,
                            a = b.container.offset();
                        b.rtl && (a.left = a.left - b.container[0].scrollLeft);
                        for (var l = [
                                [a.left, a.top],
                                [a.left + b.width, a.top],
                                [a.left, a.top + b.height],
                                [a.left + b.width, a.top + b.height]
                            ], c = 0; c < l.length; c++) {
                            var d = l[c];
                            d[0] >= s && d[0] <= s + r && d[1] >= o && d[1] <= o + n && (i = !0)
                        }
                        if (!i) return
                    }
                    b.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !b.rtl || 37 === t && b.rtl) && b.slideNext(), (37 === t && !b.rtl || 39 === t && b.rtl) && b.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && b.slideNext(), 38 === t && b.slidePrev()), b.emit("onKeyPress", b, t)
                }
            }

            function o(e) {
                e.originalEvent && (e = e.originalEvent);
                var t, i, s, o, r, n = 0,
                    a = b.rtl ? -1 : 1,
                    l = (r = o = s = i = 0, "detail" in (t = e) && (s = t.detail), "wheelDelta" in t && (s = -t.wheelDelta / 120), "wheelDeltaY" in t && (s = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (i = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (i = s, s = 0), o = 10 * i, r = 10 * s, "deltaY" in t && (r = t.deltaY), "deltaX" in t && (o = t.deltaX), (o || r) && t.deltaMode && (1 === t.deltaMode ? (o *= 40, r *= 40) : (o *= 800, r *= 800)), o && !i && (i = o < 1 ? -1 : 1), r && !s && (s = r < 1 ? -1 : 1), {
                        spinX: i,
                        spinY: s,
                        pixelX: o,
                        pixelY: r
                    });
                if (b.params.mousewheelForceToAxis)
                    if (b.isHorizontal()) {
                        if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return;
                        n = l.pixelX * a
                    } else {
                        if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return;
                        n = l.pixelY
                    } else n = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * a : -l.pixelY;
                if (0 !== n) {
                    if (b.params.mousewheelInvert && (n = -n), b.params.freeMode) {
                        var c = b.getWrapperTranslate() + n * b.params.mousewheelSensitivity,
                            d = b.isBeginning,
                            p = b.isEnd;
                        if (c >= b.minTranslate() && (c = b.minTranslate()), c <= b.maxTranslate() && (c = b.maxTranslate()), b.setWrapperTransition(0), b.setWrapperTranslate(c), b.updateProgress(), b.updateActiveIndex(), (!d && b.isBeginning || !p && b.isEnd) && b.updateClasses(), b.params.freeModeSticky ? (clearTimeout(b.mousewheel.timeout), b.mousewheel.timeout = setTimeout(function() {
                                b.slideReset()
                            }, 300)) : b.params.lazyLoading && b.lazy && b.lazy.load(), b.emit("onScroll", b, e), b.params.autoplay && b.params.autoplayDisableOnInteraction && b.stopAutoplay(), 0 === c || c === b.maxTranslate()) return
                    } else {
                        if (60 < (new window.Date).getTime() - b.mousewheel.lastScrollTime)
                            if (n < 0)
                                if (b.isEnd && !b.params.loop || b.animating) {
                                    if (b.params.mousewheelReleaseOnEdges) return !0
                                } else b.slideNext(), b.emit("onScroll", b, e);
                        else if (b.isBeginning && !b.params.loop || b.animating) {
                            if (b.params.mousewheelReleaseOnEdges) return !0
                        } else b.slidePrev(), b.emit("onScroll", b, e);
                        b.mousewheel.lastScrollTime = (new window.Date).getTime()
                    }
                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
                }
            }

            function r(e, t) {
                e = O(e);
                var i, s, o, r = b.rtl ? -1 : 1;
                i = e.attr("data-swiper-parallax") || "0", s = e.attr("data-swiper-parallax-x"), o = e.attr("data-swiper-parallax-y"), s || o ? (s = s || "0", o = o || "0") : b.isHorizontal() ? (s = i, o = "0") : (o = i, s = "0"), s = 0 <= s.indexOf("%") ? parseInt(s, 10) * t * r + "%" : s * t * r + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", e.transform("translate3d(" + s + ", " + o + ",0px)")
            }

            function n(e) {
                return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
            }
            if (!(this instanceof B)) return new B(e, l);
            var c = {
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    autoplay: !1,
                    autoplayDisableOnInteraction: !0,
                    autoplayStopOnLast: !1,
                    iOSEdgeSwipeDetection: !1,
                    iOSEdgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeMomentumVelocityRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: .02,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    },
                    flip: {
                        slideShadows: !0,
                        limitRotation: !0
                    },
                    cube: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    },
                    fade: {
                        crossFade: !1
                    },
                    parallax: !1,
                    zoom: !1,
                    zoomMax: 3,
                    zoomMin: 1,
                    zoomToggle: !0,
                    scrollbar: null,
                    scrollbarHide: !0,
                    scrollbarDraggable: !1,
                    scrollbarSnapOnRelease: !1,
                    keyboardControl: !1,
                    mousewheelControl: !1,
                    mousewheelReleaseOnEdges: !1,
                    mousewheelInvert: !1,
                    mousewheelForceToAxis: !1,
                    mousewheelSensitivity: 1,
                    mousewheelEventsTarged: "container",
                    hashnav: !1,
                    hashnavWatchState: !1,
                    history: !1,
                    replaceState: !1,
                    breakpoints: void 0,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: .5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    onlyExternal: !1,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    pagination: null,
                    paginationElement: "span",
                    paginationClickable: !1,
                    paginationHide: !1,
                    paginationBulletRender: null,
                    paginationProgressRender: null,
                    paginationFractionRender: null,
                    paginationCustomRender: null,
                    paginationType: "bullets",
                    resistance: !0,
                    resistanceRatio: .85,
                    nextButton: null,
                    prevButton: null,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    lazyLoading: !1,
                    lazyLoadingInPrevNext: !1,
                    lazyLoadingInPrevNextAmount: 1,
                    lazyLoadingOnTransitionStart: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    control: void 0,
                    controlInverse: !1,
                    controlBy: "slide",
                    normalizeSlideIndex: !0,
                    allowSwipeToPrev: !0,
                    allowSwipeToNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    passiveListeners: !0,
                    containerModifierClass: "swiper-container-",
                    slideClass: "swiper-slide",
                    slideActiveClass: "swiper-slide-active",
                    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slideDuplicateNextClass: "swiper-slide-duplicate-next",
                    slidePrevClass: "swiper-slide-prev",
                    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                    wrapperClass: "swiper-wrapper",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    buttonDisabledClass: "swiper-button-disabled",
                    paginationCurrentClass: "swiper-pagination-current",
                    paginationTotalClass: "swiper-pagination-total",
                    paginationHiddenClass: "swiper-pagination-hidden",
                    paginationProgressbarClass: "swiper-pagination-progressbar",
                    paginationClickableClass: "swiper-pagination-clickable",
                    paginationModifierClass: "swiper-pagination-",
                    lazyLoadingClass: "swiper-lazy",
                    lazyStatusLoadingClass: "swiper-lazy-loading",
                    lazyStatusLoadedClass: "swiper-lazy-loaded",
                    lazyPreloaderClass: "swiper-lazy-preloader",
                    notificationClass: "swiper-notification",
                    preloaderClass: "preloader",
                    zoomContainerClass: "swiper-zoom-container",
                    observer: !1,
                    observeParents: !1,
                    a11y: !1,
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    runCallbacksOnInit: !0
                },
                d = l && l.virtualTranslate;
            l = l || {};
            var p = {};
            for (var u in l)
                if ("object" != typeof l[u] || null === l[u] || l[u].nodeType || l[u] === window || l[u] === document || "undefined" != typeof Dom7 && l[u] instanceof Dom7 || "undefined" != typeof jQuery && l[u] instanceof jQuery) p[u] = l[u];
                else
                    for (var h in p[u] = {}, l[u]) p[u][h] = l[u][h];
            for (var f in c)
                if (void 0 === l[f]) l[f] = c[f];
                else if ("object" == typeof l[f])
                for (var g in c[f]) void 0 === l[f][g] && (l[f][g] = c[f][g]);
            var b = this;
            if (b.params = l, b.originalParams = p, b.classNames = [], void 0 !== O && "undefined" != typeof Dom7 && (O = Dom7), (void 0 !== O || (O = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (b.$ = O, b.currentBreakpoint = void 0, b.getActiveBreakpoint = function() {
                    if (!b.params.breakpoints) return !1;
                    var e, t = !1,
                        i = [];
                    for (e in b.params.breakpoints) b.params.breakpoints.hasOwnProperty(e) && i.push(e);
                    i.sort(function(e, t) {
                        return parseInt(e, 10) > parseInt(t, 10)
                    });
                    for (var s = 0; s < i.length; s++)(e = i[s]) >= window.innerWidth && !t && (t = e);
                    return t || "max"
                }, b.setBreakpoint = function() {
                    var e = b.getActiveBreakpoint();
                    if (e && b.currentBreakpoint !== e) {
                        var t = e in b.params.breakpoints ? b.params.breakpoints[e] : b.originalParams,
                            i = b.params.loop && t.slidesPerView !== b.params.slidesPerView;
                        for (var s in t) b.params[s] = t[s];
                        b.currentBreakpoint = e, i && b.destroyLoop && b.reLoop(!0)
                    }
                }, b.params.breakpoints && b.setBreakpoint(), b.container = O(e), 0 !== b.container.length)) {
                if (1 < b.container.length) {
                    var v = [];
                    return b.container.each(function() {
                        v.push(new B(this, l))
                    }), v
                }(b.container[0].swiper = b).container.data("swiper", b), b.classNames.push(b.params.containerModifierClass + b.params.direction), b.params.freeMode && b.classNames.push(b.params.containerModifierClass + "free-mode"), b.support.flexbox || (b.classNames.push(b.params.containerModifierClass + "no-flexbox"), b.params.slidesPerColumn = 1), b.params.autoHeight && b.classNames.push(b.params.containerModifierClass + "autoheight"), (b.params.parallax || b.params.watchSlidesVisibility) && (b.params.watchSlidesProgress = !0), b.params.touchReleaseOnEdges && (b.params.resistanceRatio = 0), 0 <= ["cube", "coverflow", "flip"].indexOf(b.params.effect) && (b.support.transforms3d ? (b.params.watchSlidesProgress = !0, b.classNames.push(b.params.containerModifierClass + "3d")) : b.params.effect = "slide"), "slide" !== b.params.effect && b.classNames.push(b.params.containerModifierClass + b.params.effect), "cube" === b.params.effect && (b.params.resistanceRatio = 0, b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.centeredSlides = !1, b.params.spaceBetween = 0, b.params.virtualTranslate = !0), "fade" !== b.params.effect && "flip" !== b.params.effect || (b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.watchSlidesProgress = !0, void(b.params.spaceBetween = 0) === d && (b.params.virtualTranslate = !0)), b.params.grabCursor && b.support.touch && (b.params.grabCursor = !1), b.wrapper = b.container.children("." + b.params.wrapperClass), b.params.pagination && (b.paginationContainer = O(b.params.pagination), b.params.uniqueNavElements && "string" == typeof b.params.pagination && 1 < b.paginationContainer.length && 1 === b.container.find(b.params.pagination).length && (b.paginationContainer = b.container.find(b.params.pagination)), "bullets" === b.params.paginationType && b.params.paginationClickable ? b.paginationContainer.addClass(b.params.paginationModifierClass + "clickable") : b.params.paginationClickable = !1, b.paginationContainer.addClass(b.params.paginationModifierClass + b.params.paginationType)), (b.params.nextButton || b.params.prevButton) && (b.params.nextButton && (b.nextButton = O(b.params.nextButton), b.params.uniqueNavElements && "string" == typeof b.params.nextButton && 1 < b.nextButton.length && 1 === b.container.find(b.params.nextButton).length && (b.nextButton = b.container.find(b.params.nextButton))), b.params.prevButton && (b.prevButton = O(b.params.prevButton), b.params.uniqueNavElements && "string" == typeof b.params.prevButton && 1 < b.prevButton.length && 1 === b.container.find(b.params.prevButton).length && (b.prevButton = b.container.find(b.params.prevButton)))), b.isHorizontal = function() {
                    return "horizontal" === b.params.direction
                }, b.rtl = b.isHorizontal() && ("rtl" === b.container[0].dir.toLowerCase() || "rtl" === b.container.css("direction")), b.rtl && b.classNames.push(b.params.containerModifierClass + "rtl"), b.rtl && (b.wrongRTL = "-webkit-box" === b.wrapper.css("display")), 1 < b.params.slidesPerColumn && b.classNames.push(b.params.containerModifierClass + "multirow"), b.device.android && b.classNames.push(b.params.containerModifierClass + "android"), b.container.addClass(b.classNames.join(" ")), b.translate = 0, b.progress = 0, b.velocity = 0, b.lockSwipeToNext = function() {
                    (b.params.allowSwipeToNext = !1) === b.params.allowSwipeToPrev && b.params.grabCursor && b.unsetGrabCursor()
                }, b.lockSwipeToPrev = function() {
                    (b.params.allowSwipeToPrev = !1) === b.params.allowSwipeToNext && b.params.grabCursor && b.unsetGrabCursor()
                }, b.lockSwipes = function() {
                    b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !1, b.params.grabCursor && b.unsetGrabCursor()
                }, b.unlockSwipeToNext = function() {
                    (b.params.allowSwipeToNext = !0) === b.params.allowSwipeToPrev && b.params.grabCursor && b.setGrabCursor()
                }, b.unlockSwipeToPrev = function() {
                    (b.params.allowSwipeToPrev = !0) === b.params.allowSwipeToNext && b.params.grabCursor && b.setGrabCursor()
                }, b.unlockSwipes = function() {
                    b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !0, b.params.grabCursor && b.setGrabCursor()
                }, b.setGrabCursor = function(e) {
                    b.container[0].style.cursor = "move", b.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", b.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", b.container[0].style.cursor = e ? "grabbing" : "grab"
                }, b.unsetGrabCursor = function() {
                    b.container[0].style.cursor = ""
                }, b.params.grabCursor && b.setGrabCursor(), b.imagesToLoad = [], b.imagesLoaded = 0, b.loadImage = function(e, t, i, s, o, r) {
                    function n() {
                        r && r()
                    }
                    var a;
                    e.complete && o ? n() : t ? ((a = new window.Image).onload = n, a.onerror = n, s && (a.sizes = s), i && (a.srcset = i), t && (a.src = t)) : n()
                }, b.preloadImages = function() {
                    function e() {
                        null != b && b && (void 0 !== b.imagesLoaded && b.imagesLoaded++, b.imagesLoaded === b.imagesToLoad.length && (b.params.updateOnImagesReady && b.update(), b.emit("onImagesReady", b)))
                    }
                    b.imagesToLoad = b.container.find("img");
                    for (var t = 0; t < b.imagesToLoad.length; t++) b.loadImage(b.imagesToLoad[t], b.imagesToLoad[t].currentSrc || b.imagesToLoad[t].getAttribute("src"), b.imagesToLoad[t].srcset || b.imagesToLoad[t].getAttribute("srcset"), b.imagesToLoad[t].sizes || b.imagesToLoad[t].getAttribute("sizes"), !0, e)
                }, b.autoplayTimeoutId = void 0, b.autoplaying = !1, b.autoplayPaused = !1, b.startAutoplay = function() {
                    return void 0 === b.autoplayTimeoutId && !!b.params.autoplay && !b.autoplaying && (b.autoplaying = !0, b.emit("onAutoplayStart", b), void t())
                }, b.stopAutoplay = function(e) {
                    b.autoplayTimeoutId && (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplaying = !1, b.autoplayTimeoutId = void 0, b.emit("onAutoplayStop", b))
                }, b.pauseAutoplay = function(e) {
                    b.autoplayPaused || (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplayPaused = !0, 0 === e ? (b.autoplayPaused = !1, t()) : b.wrapper.transitionEnd(function() {
                        b && (b.autoplayPaused = !1, b.autoplaying ? t() : b.stopAutoplay())
                    }))
                }, b.minTranslate = function() {
                    return -b.snapGrid[0]
                }, b.maxTranslate = function() {
                    return -b.snapGrid[b.snapGrid.length - 1]
                }, b.updateAutoHeight = function() {
                    var e, t = [],
                        i = 0;
                    if ("auto" !== b.params.slidesPerView && 1 < b.params.slidesPerView)
                        for (e = 0; e < Math.ceil(b.params.slidesPerView); e++) {
                            var s = b.activeIndex + e;
                            if (s > b.slides.length) break;
                            t.push(b.slides.eq(s)[0])
                        } else t.push(b.slides.eq(b.activeIndex)[0]);
                    for (e = 0; e < t.length; e++)
                        if (void 0 !== t[e]) {
                            var o = t[e].offsetHeight;
                            i = i < o ? o : i
                        }
                    i && b.wrapper.css("height", i + "px")
                }, b.updateContainerSize = function() {
                    var e, t;
                    e = void 0 !== b.params.width ? b.params.width : b.container[0].clientWidth, t = void 0 !== b.params.height ? b.params.height : b.container[0].clientHeight, 0 === e && b.isHorizontal() || 0 === t && !b.isHorizontal() || (e = e - parseInt(b.container.css("padding-left"), 10) - parseInt(b.container.css("padding-right"), 10), t = t - parseInt(b.container.css("padding-top"), 10) - parseInt(b.container.css("padding-bottom"), 10), b.width = e, b.height = t, b.size = b.isHorizontal() ? b.width : b.height)
                }, b.updateSlidesSize = function() {
                    b.slides = b.wrapper.children("." + b.params.slideClass), b.snapGrid = [], b.slidesGrid = [], b.slidesSizesGrid = [];
                    var e, t = b.params.spaceBetween,
                        i = -b.params.slidesOffsetBefore,
                        s = 0,
                        o = 0;
                    if (void 0 !== b.size) {
                        var r;
                        "string" == typeof t && 0 <= t.indexOf("%") && (t = parseFloat(t.replace("%", "")) / 100 * b.size), b.virtualSize = -t, b.rtl ? b.slides.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : b.slides.css({
                            marginRight: "",
                            marginBottom: ""
                        }), 1 < b.params.slidesPerColumn && (r = Math.floor(b.slides.length / b.params.slidesPerColumn) === b.slides.length / b.params.slidesPerColumn ? b.slides.length : Math.ceil(b.slides.length / b.params.slidesPerColumn) * b.params.slidesPerColumn, "auto" !== b.params.slidesPerView && "row" === b.params.slidesPerColumnFill && (r = Math.max(r, b.params.slidesPerView * b.params.slidesPerColumn)));
                        var n, a, l = b.params.slidesPerColumn,
                            c = r / l,
                            d = c - (b.params.slidesPerColumn * c - b.slides.length);
                        for (e = 0; e < b.slides.length; e++) {
                            n = 0;
                            var p, u, h, f = b.slides.eq(e);
                            if (1 < b.params.slidesPerColumn) "column" === b.params.slidesPerColumnFill ? (h = e - (u = Math.floor(e / l)) * l, (d < u || u === d && h === l - 1) && ++h >= l && (h = 0, u++), p = u + h * r / l, f.css({
                                "-webkit-box-ordinal-group": p,
                                "-moz-box-ordinal-group": p,
                                "-ms-flex-order": p,
                                "-webkit-order": p,
                                order: p
                            })) : u = e - (h = Math.floor(e / c)) * c, f.css("margin-" + (b.isHorizontal() ? "top" : "left"), 0 !== h && b.params.spaceBetween && b.params.spaceBetween + "px").attr("data-swiper-column", u).attr("data-swiper-row", h);
                            "none" !== f.css("display") && ("auto" === b.params.slidesPerView ? (n = b.isHorizontal() ? f.outerWidth(!0) : f.outerHeight(!0), b.params.roundLengths && (n = m(n))) : (n = (b.size - (b.params.slidesPerView - 1) * t) / b.params.slidesPerView, b.params.roundLengths && (n = m(n)), b.isHorizontal() ? b.slides[e].style.width = n + "px" : b.slides[e].style.height = n + "px"), b.slides[e].swiperSlideSize = n, b.slidesSizesGrid.push(n), b.params.centeredSlides ? (i = i + n / 2 + s / 2 + t, 0 === s && 0 !== e && (i = i - b.size / 2 - t), 0 === e && (i = i - b.size / 2 - t), Math.abs(i) < .001 && (i = 0), o % b.params.slidesPerGroup == 0 && b.snapGrid.push(i), b.slidesGrid.push(i)) : (o % b.params.slidesPerGroup == 0 && b.snapGrid.push(i), b.slidesGrid.push(i), i = i + n + t), b.virtualSize += n + t, s = n, o++)
                        }
                        if (b.virtualSize = Math.max(b.virtualSize, b.size) + b.params.slidesOffsetAfter, b.rtl && b.wrongRTL && ("slide" === b.params.effect || "coverflow" === b.params.effect) && b.wrapper.css({
                                width: b.virtualSize + b.params.spaceBetween + "px"
                            }), b.support.flexbox && !b.params.setWrapperSize || (b.isHorizontal() ? b.wrapper.css({
                                width: b.virtualSize + b.params.spaceBetween + "px"
                            }) : b.wrapper.css({
                                height: b.virtualSize + b.params.spaceBetween + "px"
                            })), 1 < b.params.slidesPerColumn && (b.virtualSize = (n + b.params.spaceBetween) * r, b.virtualSize = Math.ceil(b.virtualSize / b.params.slidesPerColumn) - b.params.spaceBetween, b.isHorizontal() ? b.wrapper.css({
                                width: b.virtualSize + b.params.spaceBetween + "px"
                            }) : b.wrapper.css({
                                height: b.virtualSize + b.params.spaceBetween + "px"
                            }), b.params.centeredSlides)) {
                            for (a = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] < b.virtualSize + b.snapGrid[0] && a.push(b.snapGrid[e]);
                            b.snapGrid = a
                        }
                        if (!b.params.centeredSlides) {
                            for (a = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] <= b.virtualSize - b.size && a.push(b.snapGrid[e]);
                            b.snapGrid = a, 1 < Math.floor(b.virtualSize - b.size) - Math.floor(b.snapGrid[b.snapGrid.length - 1]) && b.snapGrid.push(b.virtualSize - b.size)
                        }
                        0 === b.snapGrid.length && (b.snapGrid = [0]), 0 !== b.params.spaceBetween && (b.isHorizontal() ? b.rtl ? b.slides.css({
                            marginLeft: t + "px"
                        }) : b.slides.css({
                            marginRight: t + "px"
                        }) : b.slides.css({
                            marginBottom: t + "px"
                        })), b.params.watchSlidesProgress && b.updateSlidesOffset()
                    }
                }, b.updateSlidesOffset = function() {
                    for (var e = 0; e < b.slides.length; e++) b.slides[e].swiperSlideOffset = b.isHorizontal() ? b.slides[e].offsetLeft : b.slides[e].offsetTop
                }, b.currentSlidesPerView = function() {
                    var e, t, i = 1;
                    if (b.params.centeredSlides) {
                        var s, o = b.slides[b.activeIndex].swiperSlideSize;
                        for (e = b.activeIndex + 1; e < b.slides.length; e++) b.slides[e] && !s && (i++, (o += b.slides[e].swiperSlideSize) > b.size && (s = !0));
                        for (t = b.activeIndex - 1; 0 <= t; t--) b.slides[t] && !s && (i++, (o += b.slides[t].swiperSlideSize) > b.size && (s = !0))
                    } else
                        for (e = b.activeIndex + 1; e < b.slides.length; e++) b.slidesGrid[e] - b.slidesGrid[b.activeIndex] < b.size && i++;
                    return i
                }, b.updateSlidesProgress = function(e) {
                    if (void 0 === e && (e = b.translate || 0), 0 !== b.slides.length) {
                        void 0 === b.slides[0].swiperSlideOffset && b.updateSlidesOffset();
                        var t = -e;
                        b.rtl && (t = e), b.slides.removeClass(b.params.slideVisibleClass);
                        for (var i = 0; i < b.slides.length; i++) {
                            var s = b.slides[i],
                                o = (t + (b.params.centeredSlides ? b.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + b.params.spaceBetween);
                            if (b.params.watchSlidesVisibility) {
                                var r = -(t - s.swiperSlideOffset),
                                    n = r + b.slidesSizesGrid[i];
                                (0 <= r && r < b.size || 0 < n && n <= b.size || r <= 0 && n >= b.size) && b.slides.eq(i).addClass(b.params.slideVisibleClass)
                            }
                            s.progress = b.rtl ? -o : o
                        }
                    }
                }, b.updateProgress = function(e) {
                    void 0 === e && (e = b.translate || 0);
                    var t = b.maxTranslate() - b.minTranslate(),
                        i = b.isBeginning,
                        s = b.isEnd;
                    0 === t ? (b.progress = 0, b.isBeginning = b.isEnd = !0) : (b.progress = (e - b.minTranslate()) / t, b.isBeginning = b.progress <= 0, b.isEnd = 1 <= b.progress), b.isBeginning && !i && b.emit("onReachBeginning", b), b.isEnd && !s && b.emit("onReachEnd", b), b.params.watchSlidesProgress && b.updateSlidesProgress(e), b.emit("onProgress", b, b.progress)
                }, b.updateActiveIndex = function() {
                    var e, t, i, s = b.rtl ? b.translate : -b.translate;
                    for (t = 0; t < b.slidesGrid.length; t++) void 0 !== b.slidesGrid[t + 1] ? s >= b.slidesGrid[t] && s < b.slidesGrid[t + 1] - (b.slidesGrid[t + 1] - b.slidesGrid[t]) / 2 ? e = t : s >= b.slidesGrid[t] && s < b.slidesGrid[t + 1] && (e = t + 1) : s >= b.slidesGrid[t] && (e = t);
                    b.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), (i = Math.floor(e / b.params.slidesPerGroup)) >= b.snapGrid.length && (i = b.snapGrid.length - 1), e !== b.activeIndex && (b.snapIndex = i, b.previousIndex = b.activeIndex, b.activeIndex = e, b.updateClasses(), b.updateRealIndex())
                }, b.updateRealIndex = function() {
                    b.realIndex = parseInt(b.slides.eq(b.activeIndex).attr("data-swiper-slide-index") || b.activeIndex, 10)
                }, b.updateClasses = function() {
                    b.slides.removeClass(b.params.slideActiveClass + " " + b.params.slideNextClass + " " + b.params.slidePrevClass + " " + b.params.slideDuplicateActiveClass + " " + b.params.slideDuplicateNextClass + " " + b.params.slideDuplicatePrevClass);
                    var e = b.slides.eq(b.activeIndex);
                    e.addClass(b.params.slideActiveClass), l.loop && (e.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-swiper-slide-index="' + b.realIndex + '"]').addClass(b.params.slideDuplicateActiveClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + b.realIndex + '"]').addClass(b.params.slideDuplicateActiveClass));
                    var t = e.next("." + b.params.slideClass).addClass(b.params.slideNextClass);
                    b.params.loop && 0 === t.length && (t = b.slides.eq(0)).addClass(b.params.slideNextClass);
                    var i = e.prev("." + b.params.slideClass).addClass(b.params.slidePrevClass);
                    if (b.params.loop && 0 === i.length && (i = b.slides.eq(-1)).addClass(b.params.slidePrevClass), l.loop && (t.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicateNextClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicateNextClass), i.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicatePrevClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicatePrevClass)), b.paginationContainer && 0 < b.paginationContainer.length) {
                        var s, o = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length;
                        if (b.params.loop ? ((s = Math.ceil((b.activeIndex - b.loopedSlides) / b.params.slidesPerGroup)) > b.slides.length - 1 - 2 * b.loopedSlides && (s -= b.slides.length - 2 * b.loopedSlides), o - 1 < s && (s -= o), s < 0 && "bullets" !== b.params.paginationType && (s = o + s)) : s = void 0 !== b.snapIndex ? b.snapIndex : b.activeIndex || 0, "bullets" === b.params.paginationType && b.bullets && 0 < b.bullets.length && (b.bullets.removeClass(b.params.bulletActiveClass), 1 < b.paginationContainer.length ? b.bullets.each(function() {
                                O(this).index() === s && O(this).addClass(b.params.bulletActiveClass)
                            }) : b.bullets.eq(s).addClass(b.params.bulletActiveClass)), "fraction" === b.params.paginationType && (b.paginationContainer.find("." + b.params.paginationCurrentClass).text(s + 1), b.paginationContainer.find("." + b.params.paginationTotalClass).text(o)), "progress" === b.params.paginationType) {
                            var r = (s + 1) / o,
                                n = r,
                                a = 1;
                            b.isHorizontal() || (a = r, n = 1), b.paginationContainer.find("." + b.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + n + ") scaleY(" + a + ")").transition(b.params.speed)
                        }
                        "custom" === b.params.paginationType && b.params.paginationCustomRender && (b.paginationContainer.html(b.params.paginationCustomRender(b, s + 1, o)), b.emit("onPaginationRendered", b, b.paginationContainer[0]))
                    }
                    b.params.loop || (b.params.prevButton && b.prevButton && 0 < b.prevButton.length && (b.isBeginning ? (b.prevButton.addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(b.prevButton)) : (b.prevButton.removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(b.prevButton))), b.params.nextButton && b.nextButton && 0 < b.nextButton.length && (b.isEnd ? (b.nextButton.addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(b.nextButton)) : (b.nextButton.removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(b.nextButton))))
                }, b.updatePagination = function() {
                    if (b.params.pagination && b.paginationContainer && 0 < b.paginationContainer.length) {
                        var e = "";
                        if ("bullets" === b.params.paginationType) {
                            for (var t = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length, i = 0; i < t; i++) e += b.params.paginationBulletRender ? b.params.paginationBulletRender(b, i, b.params.bulletClass) : "<" + b.params.paginationElement + ' class="' + b.params.bulletClass + '"></' + b.params.paginationElement + ">";
                            b.paginationContainer.html(e), b.bullets = b.paginationContainer.find("." + b.params.bulletClass), b.params.paginationClickable && b.params.a11y && b.a11y && b.a11y.initPagination()
                        }
                        "fraction" === b.params.paginationType && (e = b.params.paginationFractionRender ? b.params.paginationFractionRender(b, b.params.paginationCurrentClass, b.params.paginationTotalClass) : '<span class="' + b.params.paginationCurrentClass + '"></span> / <span class="' + b.params.paginationTotalClass + '"></span>', b.paginationContainer.html(e)), "progress" === b.params.paginationType && (e = b.params.paginationProgressRender ? b.params.paginationProgressRender(b, b.params.paginationProgressbarClass) : '<span class="' + b.params.paginationProgressbarClass + '"></span>', b.paginationContainer.html(e)), "custom" !== b.params.paginationType && b.emit("onPaginationRendered", b, b.paginationContainer[0])
                    }
                }, b.update = function(e) {
                    function t() {
                        b.rtl, b.translate, i = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate()), b.setWrapperTranslate(i), b.updateActiveIndex(), b.updateClasses()
                    }
                    var i;
                    b && (b.updateContainerSize(), b.updateSlidesSize(), b.updateProgress(), b.updatePagination(), b.updateClasses(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), e ? (b.controller && b.controller.spline && (b.controller.spline = void 0), b.params.freeMode ? (t(), b.params.autoHeight && b.updateAutoHeight()) : (("auto" === b.params.slidesPerView || 1 < b.params.slidesPerView) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0)) || t()) : b.params.autoHeight && b.updateAutoHeight())
                }, b.onResize = function(e) {
                    b.params.onBeforeResize && b.params.onBeforeResize(b), b.params.breakpoints && b.setBreakpoint();
                    var t = b.params.allowSwipeToPrev,
                        i = b.params.allowSwipeToNext;
                    b.params.allowSwipeToPrev = b.params.allowSwipeToNext = !0, b.updateContainerSize(), b.updateSlidesSize(), ("auto" === b.params.slidesPerView || b.params.freeMode || e) && b.updatePagination(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), b.controller && b.controller.spline && (b.controller.spline = void 0);
                    var s = !1;
                    if (b.params.freeMode) {
                        var o = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate());
                        b.setWrapperTranslate(o), b.updateActiveIndex(), b.updateClasses(), b.params.autoHeight && b.updateAutoHeight()
                    } else b.updateClasses(), s = ("auto" === b.params.slidesPerView || 1 < b.params.slidesPerView) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0);
                    b.params.lazyLoading && !s && b.lazy && b.lazy.load(), b.params.allowSwipeToPrev = t, b.params.allowSwipeToNext = i, b.params.onAfterResize && b.params.onAfterResize(b)
                }, b.touchEventsDesktop = {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                }, window.navigator.pointerEnabled ? b.touchEventsDesktop = {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled && (b.touchEventsDesktop = {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }), b.touchEvents = {
                    start: b.support.touch || !b.params.simulateTouch ? "touchstart" : b.touchEventsDesktop.start,
                    move: b.support.touch || !b.params.simulateTouch ? "touchmove" : b.touchEventsDesktop.move,
                    end: b.support.touch || !b.params.simulateTouch ? "touchend" : b.touchEventsDesktop.end
                }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === b.params.touchEventsTarget ? b.container : b.wrapper).addClass("swiper-wp8-" + b.params.direction), b.initEvents = function(e) {
                    var t = e ? "off" : "on",
                        i = e ? "removeEventListener" : "addEventListener",
                        s = "container" === b.params.touchEventsTarget ? b.container[0] : b.wrapper[0],
                        o = b.support.touch ? s : document,
                        r = !!b.params.nested;
                    if (b.browser.ie) s[i](b.touchEvents.start, b.onTouchStart, !1), o[i](b.touchEvents.move, b.onTouchMove, r), o[i](b.touchEvents.end, b.onTouchEnd, !1);
                    else {
                        if (b.support.touch) {
                            var n = !("touchstart" !== b.touchEvents.start || !b.support.passiveListener || !b.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s[i](b.touchEvents.start, b.onTouchStart, n), s[i](b.touchEvents.move, b.onTouchMove, r), s[i](b.touchEvents.end, b.onTouchEnd, n)
                        }(l.simulateTouch && !b.device.ios && !b.device.android || l.simulateTouch && !b.support.touch && b.device.ios) && (s[i]("mousedown", b.onTouchStart, !1), document[i]("mousemove", b.onTouchMove, r), document[i]("mouseup", b.onTouchEnd, !1))
                    }
                    window[i]("resize", b.onResize), b.params.nextButton && b.nextButton && 0 < b.nextButton.length && (b.nextButton[t]("click", b.onClickNext), b.params.a11y && b.a11y && b.nextButton[t]("keydown", b.a11y.onEnterKey)), b.params.prevButton && b.prevButton && 0 < b.prevButton.length && (b.prevButton[t]("click", b.onClickPrev), b.params.a11y && b.a11y && b.prevButton[t]("keydown", b.a11y.onEnterKey)), b.params.pagination && b.params.paginationClickable && (b.paginationContainer[t]("click", "." + b.params.bulletClass, b.onClickIndex), b.params.a11y && b.a11y && b.paginationContainer[t]("keydown", "." + b.params.bulletClass, b.a11y.onEnterKey)), (b.params.preventClicks || b.params.preventClicksPropagation) && s[i]("click", b.preventClicks, !0)
                }, b.attachEvents = function() {
                    b.initEvents()
                }, b.detachEvents = function() {
                    b.initEvents(!0)
                }, b.allowClick = !0, b.preventClicks = function(e) {
                    b.allowClick || (b.params.preventClicks && e.preventDefault(), b.params.preventClicksPropagation && b.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                }, b.onClickNext = function(e) {
                    e.preventDefault(), b.isEnd && !b.params.loop || b.slideNext()
                }, b.onClickPrev = function(e) {
                    e.preventDefault(), b.isBeginning && !b.params.loop || b.slidePrev()
                }, b.onClickIndex = function(e) {
                    e.preventDefault();
                    var t = O(this).index() * b.params.slidesPerGroup;
                    b.params.loop && (t += b.loopedSlides), b.slideTo(t)
                }, b.updateClickedSlide = function(e) {
                    var t = a(e, "." + b.params.slideClass),
                        i = !1;
                    if (t)
                        for (var s = 0; s < b.slides.length; s++) b.slides[s] === t && (i = !0);
                    if (!t || !i) return b.clickedSlide = void 0, void(b.clickedIndex = void 0);
                    if (b.clickedSlide = t, b.clickedIndex = O(t).index(), b.params.slideToClickedSlide && void 0 !== b.clickedIndex && b.clickedIndex !== b.activeIndex) {
                        var o, r = b.clickedIndex,
                            n = "auto" === b.params.slidesPerView ? b.currentSlidesPerView() : b.params.slidesPerView;
                        if (b.params.loop) {
                            if (b.animating) return;
                            o = parseInt(O(b.clickedSlide).attr("data-swiper-slide-index"), 10), b.params.centeredSlides ? r < b.loopedSlides - n / 2 || r > b.slides.length - b.loopedSlides + n / 2 ? (b.fixLoop(), r = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + b.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                b.slideTo(r)
                            }, 0)) : b.slideTo(r) : r > b.slides.length - n ? (b.fixLoop(), r = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + b.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                b.slideTo(r)
                            }, 0)) : b.slideTo(r)
                        } else b.slideTo(r)
                    }
                };
                var w, S, _, x, y, P, C, T, M, A, k, E, I = "input, select, textarea, button, video",
                    D = Date.now(),
                    G = [];
                for (var H in b.animating = !1, b.touches = {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    }, b.onTouchStart = function(e) {
                        if (e.originalEvent && (e = e.originalEvent), (k = "touchstart" === e.type) || !("which" in e) || 3 !== e.which) {
                            if (b.params.noSwiping && a(e, "." + b.params.noSwipingClass)) return void(b.allowClick = !0);
                            if (!b.params.swipeHandler || a(e, b.params.swipeHandler)) {
                                var t = b.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                    i = b.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                                if (!(b.device.ios && b.params.iOSEdgeSwipeDetection && t <= b.params.iOSEdgeSwipeThreshold)) {
                                    if (S = !1, _ = w = !0, E = y = void 0, b.touches.startX = t, b.touches.startY = i, x = Date.now(), b.allowClick = !0, b.updateContainerSize(), b.swipeDirection = void 0, 0 < b.params.threshold && (T = !1), "touchstart" !== e.type) {
                                        var s = !0;
                                        O(e.target).is(I) && (s = !1), document.activeElement && O(document.activeElement).is(I) && document.activeElement.blur(), s && e.preventDefault()
                                    }
                                    b.emit("onTouchStart", b, e)
                                }
                            }
                        }
                    }, b.onTouchMove = function(e) {
                        if (e.originalEvent && (e = e.originalEvent), !k || "mousemove" !== e.type) {
                            if (e.preventedByNestedSwiper) return b.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void(b.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                            if (b.params.onlyExternal) return b.allowClick = !1, void(w && (b.touches.startX = b.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, b.touches.startY = b.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, x = Date.now()));
                            if (k && b.params.touchReleaseOnEdges && !b.params.loop)
                                if (b.isHorizontal()) {
                                    if (b.touches.currentX < b.touches.startX && b.translate <= b.maxTranslate() || b.touches.currentX > b.touches.startX && b.translate >= b.minTranslate()) return
                                } else if (b.touches.currentY < b.touches.startY && b.translate <= b.maxTranslate() || b.touches.currentY > b.touches.startY && b.translate >= b.minTranslate()) return;
                            if (k && document.activeElement && e.target === document.activeElement && O(e.target).is(I)) return S = !0, void(b.allowClick = !1);
                            if (_ && b.emit("onTouchMove", b, e), !(e.targetTouches && 1 < e.targetTouches.length)) {
                                var t;
                                if (b.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, b.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, void 0 === y) b.isHorizontal() && b.touches.currentY === b.touches.startY || !b.isHorizontal() && b.touches.currentX === b.touches.startX ? y = !1 : (t = 180 * Math.atan2(Math.abs(b.touches.currentY - b.touches.startY), Math.abs(b.touches.currentX - b.touches.startX)) / Math.PI, y = b.isHorizontal() ? t > b.params.touchAngle : 90 - t > b.params.touchAngle);
                                if (y && b.emit("onTouchMoveOpposite", b, e), void 0 === E && (b.touches.currentX === b.touches.startX && b.touches.currentY === b.touches.startY || (E = !0)), w) {
                                    if (y) return void(w = !1);
                                    if (E) {
                                        b.allowClick = !1, b.emit("onSliderMove", b, e), e.preventDefault(), b.params.touchMoveStopPropagation && !b.params.nested && e.stopPropagation(), S || (l.loop && b.fixLoop(), C = b.getWrapperTranslate(), b.setWrapperTransition(0), b.animating && b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), b.params.autoplay && b.autoplaying && (b.params.autoplayDisableOnInteraction ? b.stopAutoplay() : b.pauseAutoplay()), A = !1, !b.params.grabCursor || !0 !== b.params.allowSwipeToNext && !0 !== b.params.allowSwipeToPrev || b.setGrabCursor(!0)), S = !0;
                                        var i = b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY;
                                        i *= b.params.touchRatio, b.rtl && (i = -i), b.swipeDirection = 0 < i ? "prev" : "next", P = i + C;
                                        var s = !0;
                                        if (0 < i && P > b.minTranslate() ? (s = !1, b.params.resistance && (P = b.minTranslate() - 1 + Math.pow(-b.minTranslate() + C + i, b.params.resistanceRatio))) : i < 0 && P < b.maxTranslate() && (s = !1, b.params.resistance && (P = b.maxTranslate() + 1 - Math.pow(b.maxTranslate() - C - i, b.params.resistanceRatio))), s && (e.preventedByNestedSwiper = !0), !b.params.allowSwipeToNext && "next" === b.swipeDirection && P < C && (P = C), !b.params.allowSwipeToPrev && "prev" === b.swipeDirection && C < P && (P = C), 0 < b.params.threshold) {
                                            if (!(Math.abs(i) > b.params.threshold || T)) return void(P = C);
                                            if (!T) return T = !0, b.touches.startX = b.touches.currentX, b.touches.startY = b.touches.currentY, P = C, void(b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY)
                                        }
                                        b.params.followFinger && ((b.params.freeMode || b.params.watchSlidesProgress) && b.updateActiveIndex(), b.params.freeMode && (0 === G.length && G.push({
                                            position: b.touches[b.isHorizontal() ? "startX" : "startY"],
                                            time: x
                                        }), G.push({
                                            position: b.touches[b.isHorizontal() ? "currentX" : "currentY"],
                                            time: (new window.Date).getTime()
                                        })), b.updateProgress(P), b.setWrapperTranslate(P))
                                    }
                                }
                            }
                        }
                    }, b.onTouchEnd = function(e) {
                        if (e.originalEvent && (e = e.originalEvent), _ && b.emit("onTouchEnd", b, e), _ = !1, w) {
                            b.params.grabCursor && S && w && (!0 === b.params.allowSwipeToNext || !0 === b.params.allowSwipeToPrev) && b.setGrabCursor(!1);
                            var t, i = Date.now(),
                                s = i - x;
                            if (b.allowClick && (b.updateClickedSlide(e), b.emit("onTap", b, e), s < 300 && 300 < i - D && (M && clearTimeout(M), M = setTimeout(function() {
                                    b && (b.params.paginationHide && 0 < b.paginationContainer.length && !O(e.target).hasClass(b.params.bulletClass) && b.paginationContainer.toggleClass(b.params.paginationHiddenClass), b.emit("onClick", b, e))
                                }, 300)), s < 300 && i - D < 300 && (M && clearTimeout(M), b.emit("onDoubleTap", b, e))), D = Date.now(), setTimeout(function() {
                                    b && (b.allowClick = !0)
                                }, 0), !w || !S || !b.swipeDirection || 0 === b.touches.diff || P === C) return void(w = S = !1);
                            if (w = S = !1, t = b.params.followFinger ? b.rtl ? b.translate : -b.translate : -P, b.params.freeMode) {
                                if (t < -b.minTranslate()) return void b.slideTo(b.activeIndex);
                                if (t > -b.maxTranslate()) return void(b.slides.length < b.snapGrid.length ? b.slideTo(b.snapGrid.length - 1) : b.slideTo(b.slides.length - 1));
                                if (b.params.freeModeMomentum) {
                                    if (1 < G.length) {
                                        var o = G.pop(),
                                            r = G.pop(),
                                            n = o.position - r.position,
                                            a = o.time - r.time;
                                        b.velocity = n / a, b.velocity = b.velocity / 2, Math.abs(b.velocity) < b.params.freeModeMinimumVelocity && (b.velocity = 0), (150 < a || 300 < (new window.Date).getTime() - o.time) && (b.velocity = 0)
                                    } else b.velocity = 0;
                                    b.velocity = b.velocity * b.params.freeModeMomentumVelocityRatio, G.length = 0;
                                    var l = 1e3 * b.params.freeModeMomentumRatio,
                                        c = b.velocity * l,
                                        d = b.translate + c;
                                    b.rtl && (d = -d);
                                    var p, u = !1,
                                        h = 20 * Math.abs(b.velocity) * b.params.freeModeMomentumBounceRatio;
                                    if (d < b.maxTranslate()) b.params.freeModeMomentumBounce ? (d + b.maxTranslate() < -h && (d = b.maxTranslate() - h), p = b.maxTranslate(), A = u = !0) : d = b.maxTranslate();
                                    else if (d > b.minTranslate()) b.params.freeModeMomentumBounce ? (d - b.minTranslate() > h && (d = b.minTranslate() + h), p = b.minTranslate(), A = u = !0) : d = b.minTranslate();
                                    else if (b.params.freeModeSticky) {
                                        var f, m = 0;
                                        for (m = 0; m < b.snapGrid.length; m += 1)
                                            if (b.snapGrid[m] > -d) {
                                                f = m;
                                                break
                                            }
                                        d = Math.abs(b.snapGrid[f] - d) < Math.abs(b.snapGrid[f - 1] - d) || "next" === b.swipeDirection ? b.snapGrid[f] : b.snapGrid[f - 1], b.rtl || (d = -d)
                                    }
                                    if (0 !== b.velocity) l = b.rtl ? Math.abs((-d - b.translate) / b.velocity) : Math.abs((d - b.translate) / b.velocity);
                                    else if (b.params.freeModeSticky) return void b.slideReset();
                                    b.params.freeModeMomentumBounce && u ? (b.updateProgress(p), b.setWrapperTransition(l), b.setWrapperTranslate(d), b.onTransitionStart(), b.animating = !0, b.wrapper.transitionEnd(function() {
                                        b && A && (b.emit("onMomentumBounce", b), b.setWrapperTransition(b.params.speed), b.setWrapperTranslate(p), b.wrapper.transitionEnd(function() {
                                            b && b.onTransitionEnd()
                                        }))
                                    })) : b.velocity ? (b.updateProgress(d), b.setWrapperTransition(l), b.setWrapperTranslate(d), b.onTransitionStart(), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function() {
                                        b && b.onTransitionEnd()
                                    }))) : b.updateProgress(d), b.updateActiveIndex()
                                }
                                return void((!b.params.freeModeMomentum || s >= b.params.longSwipesMs) && (b.updateProgress(), b.updateActiveIndex()))
                            }
                            var g, v = 0,
                                y = b.slidesSizesGrid[0];
                            for (g = 0; g < b.slidesGrid.length; g += b.params.slidesPerGroup) void 0 !== b.slidesGrid[g + b.params.slidesPerGroup] ? t >= b.slidesGrid[g] && t < b.slidesGrid[g + b.params.slidesPerGroup] && (v = g, y = b.slidesGrid[g + b.params.slidesPerGroup] - b.slidesGrid[g]) : t >= b.slidesGrid[g] && (v = g, y = b.slidesGrid[b.slidesGrid.length - 1] - b.slidesGrid[b.slidesGrid.length - 2]);
                            var T = (t - b.slidesGrid[v]) / y;
                            if (s > b.params.longSwipesMs) {
                                if (!b.params.longSwipes) return void b.slideTo(b.activeIndex);
                                "next" === b.swipeDirection && (T >= b.params.longSwipesRatio ? b.slideTo(v + b.params.slidesPerGroup) : b.slideTo(v)), "prev" === b.swipeDirection && (T > 1 - b.params.longSwipesRatio ? b.slideTo(v + b.params.slidesPerGroup) : b.slideTo(v))
                            } else {
                                if (!b.params.shortSwipes) return void b.slideTo(b.activeIndex);
                                "next" === b.swipeDirection && b.slideTo(v + b.params.slidesPerGroup), "prev" === b.swipeDirection && b.slideTo(v)
                            }
                        }
                    }, b._slideTo = function(e, t) {
                        return b.slideTo(e, t, !0, !0)
                    }, b.slideTo = function(e, t, i, s) {
                        void 0 === i && (i = !0), void 0 === e && (e = 0), e < 0 && (e = 0), b.snapIndex = Math.floor(e / b.params.slidesPerGroup), b.snapIndex >= b.snapGrid.length && (b.snapIndex = b.snapGrid.length - 1);
                        var o = -b.snapGrid[b.snapIndex];
                        if (b.params.autoplay && b.autoplaying && (s || !b.params.autoplayDisableOnInteraction ? b.pauseAutoplay(t) : b.stopAutoplay()), b.updateProgress(o), b.params.normalizeSlideIndex)
                            for (var r = 0; r < b.slidesGrid.length; r++) - Math.floor(100 * o) >= Math.floor(100 * b.slidesGrid[r]) && (e = r);
                        return !(!b.params.allowSwipeToNext && o < b.translate && o < b.minTranslate() || !b.params.allowSwipeToPrev && o > b.translate && o > b.maxTranslate() && (b.activeIndex || 0) !== e || (void 0 === t && (t = b.params.speed), b.previousIndex = b.activeIndex || 0, b.activeIndex = e, b.updateRealIndex(), b.rtl && -o === b.translate || !b.rtl && o === b.translate ? (b.params.autoHeight && b.updateAutoHeight(), b.updateClasses(), "slide" !== b.params.effect && b.setWrapperTranslate(o), 1) : (b.updateClasses(), b.onTransitionStart(i), 0 === t || b.browser.lteIE9 ? (b.setWrapperTranslate(o), b.setWrapperTransition(0), b.onTransitionEnd(i)) : (b.setWrapperTranslate(o), b.setWrapperTransition(t), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function() {
                            b && b.onTransitionEnd(i)
                        }))), 0)))
                    }, b.onTransitionStart = function(e) {
                        void 0 === e && (e = !0), b.params.autoHeight && b.updateAutoHeight(), b.lazy && b.lazy.onTransitionStart(), e && (b.emit("onTransitionStart", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeStart", b), b.activeIndex > b.previousIndex ? b.emit("onSlideNextStart", b) : b.emit("onSlidePrevStart", b)))
                    }, b.onTransitionEnd = function(e) {
                        b.animating = !1, b.setWrapperTransition(0), void 0 === e && (e = !0), b.lazy && b.lazy.onTransitionEnd(), e && (b.emit("onTransitionEnd", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeEnd", b), b.activeIndex > b.previousIndex ? b.emit("onSlideNextEnd", b) : b.emit("onSlidePrevEnd", b))), b.params.history && b.history && b.history.setHistory(b.params.history, b.activeIndex), b.params.hashnav && b.hashnav && b.hashnav.setHash()
                    }, b.slideNext = function(e, t, i) {
                        return b.params.loop ? !b.animating && (b.fixLoop(), b.container[0].clientLeft, b.slideTo(b.activeIndex + b.params.slidesPerGroup, t, e, i)) : b.slideTo(b.activeIndex + b.params.slidesPerGroup, t, e, i)
                    }, b._slideNext = function(e) {
                        return b.slideNext(!0, e, !0)
                    }, b.slidePrev = function(e, t, i) {
                        return b.params.loop ? !b.animating && (b.fixLoop(), b.container[0].clientLeft, b.slideTo(b.activeIndex - 1, t, e, i)) : b.slideTo(b.activeIndex - 1, t, e, i)
                    }, b._slidePrev = function(e) {
                        return b.slidePrev(!0, e, !0)
                    }, b.slideReset = function(e, t, i) {
                        return b.slideTo(b.activeIndex, t, e)
                    }, b.disableTouchControl = function() {
                        return b.params.onlyExternal = !0
                    }, b.enableTouchControl = function() {
                        return b.params.onlyExternal = !1, !0
                    }, b.setWrapperTransition = function(e, t) {
                        b.wrapper.transition(e), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTransition(e), b.params.parallax && b.parallax && b.parallax.setTransition(e), b.params.scrollbar && b.scrollbar && b.scrollbar.setTransition(e), b.params.control && b.controller && b.controller.setTransition(e, t), b.emit("onSetTransition", b, e)
                    }, b.setWrapperTranslate = function(e, t, i) {
                        var s = 0,
                            o = 0;
                        b.isHorizontal() ? s = b.rtl ? -e : e : o = e, b.params.roundLengths && (s = m(s), o = m(o)), b.params.virtualTranslate || (b.support.transforms3d ? b.wrapper.transform("translate3d(" + s + "px, " + o + "px, 0px)") : b.wrapper.transform("translate(" + s + "px, " + o + "px)")), b.translate = b.isHorizontal() ? s : o;
                        var r = b.maxTranslate() - b.minTranslate();
                        (0 === r ? 0 : (e - b.minTranslate()) / r) !== b.progress && b.updateProgress(e), t && b.updateActiveIndex(), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTranslate(b.translate), b.params.parallax && b.parallax && b.parallax.setTranslate(b.translate), b.params.scrollbar && b.scrollbar && b.scrollbar.setTranslate(b.translate), b.params.control && b.controller && b.controller.setTranslate(b.translate, i), b.emit("onSetTranslate", b, b.translate)
                    }, b.getTranslate = function(e, t) {
                        var i, s, o, r;
                        return void 0 === t && (t = "x"), b.params.virtualTranslate ? b.rtl ? -b.translate : b.translate : (o = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (6 < (s = o.transform || o.webkitTransform).split(",").length && (s = s.split(", ").map(function(e) {
                            return e.replace(",", ".")
                        }).join(", ")), r = new window.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = window.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = window.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), b.rtl && s && (s = -s), s || 0)
                    }, b.getWrapperTranslate = function(e) {
                        return void 0 === e && (e = b.isHorizontal() ? "x" : "y"), b.getTranslate(b.wrapper[0], e)
                    }, b.observers = [], b.initObservers = function() {
                        if (b.params.observeParents)
                            for (var e = b.container.parents(), t = 0; t < e.length; t++) i(e[t]);
                        i(b.container[0], {
                            childList: !1
                        }), i(b.wrapper[0], {
                            attributes: !1
                        })
                    }, b.disconnectObservers = function() {
                        for (var e = 0; e < b.observers.length; e++) b.observers[e].disconnect();
                        b.observers = []
                    }, b.createLoop = function() {
                        b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove();
                        var s = b.wrapper.children("." + b.params.slideClass);
                        "auto" !== b.params.slidesPerView || b.params.loopedSlides || (b.params.loopedSlides = s.length), b.loopedSlides = parseInt(b.params.loopedSlides || b.params.slidesPerView, 10), b.loopedSlides = b.loopedSlides + b.params.loopAdditionalSlides, b.loopedSlides > s.length && (b.loopedSlides = s.length);
                        var e, o = [],
                            r = [];
                        for (s.each(function(e, t) {
                                var i = O(this);
                                e < b.loopedSlides && r.push(t), e < s.length && e >= s.length - b.loopedSlides && o.push(t), i.attr("data-swiper-slide-index", e)
                            }), e = 0; e < r.length; e++) b.wrapper.append(O(r[e].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
                        for (e = o.length - 1; 0 <= e; e--) b.wrapper.prepend(O(o[e].cloneNode(!0)).addClass(b.params.slideDuplicateClass))
                    }, b.destroyLoop = function() {
                        b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove(), b.slides.removeAttr("data-swiper-slide-index")
                    }, b.reLoop = function(e) {
                        var t = b.activeIndex - b.loopedSlides;
                        b.destroyLoop(), b.createLoop(), b.updateSlidesSize(), e && b.slideTo(t + b.loopedSlides, 0, !1)
                    }, b.fixLoop = function() {
                        var e;
                        b.activeIndex < b.loopedSlides ? (e = b.slides.length - 3 * b.loopedSlides + b.activeIndex, e += b.loopedSlides, b.slideTo(e, 0, !1, !0)) : ("auto" === b.params.slidesPerView && b.activeIndex >= 2 * b.loopedSlides || b.activeIndex > b.slides.length - 2 * b.params.slidesPerView) && (e = -b.slides.length + b.activeIndex + b.loopedSlides, e += b.loopedSlides, b.slideTo(e, 0, !1, !0))
                    }, b.appendSlide = function(e) {
                        if (b.params.loop && b.destroyLoop(), "object" == typeof e && e.length)
                            for (var t = 0; t < e.length; t++) e[t] && b.wrapper.append(e[t]);
                        else b.wrapper.append(e);
                        b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0)
                    }, b.prependSlide = function(e) {
                        b.params.loop && b.destroyLoop();
                        var t = b.activeIndex + 1;
                        if ("object" == typeof e && e.length) {
                            for (var i = 0; i < e.length; i++) e[i] && b.wrapper.prepend(e[i]);
                            t = b.activeIndex + e.length
                        } else b.wrapper.prepend(e);
                        b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), b.slideTo(t, 0, !1)
                    }, b.removeSlide = function(e) {
                        b.params.loop && (b.destroyLoop(), b.slides = b.wrapper.children("." + b.params.slideClass));
                        var t, i = b.activeIndex;
                        if ("object" == typeof e && e.length) {
                            for (var s = 0; s < e.length; s++) t = e[s], b.slides[t] && b.slides.eq(t).remove(), t < i && i--;
                            i = Math.max(i, 0)
                        } else t = e, b.slides[t] && b.slides.eq(t).remove(), t < i && i--, i = Math.max(i, 0);
                        b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), b.params.loop ? b.slideTo(i + b.loopedSlides, 0, !1) : b.slideTo(i, 0, !1)
                    }, b.removeAllSlides = function() {
                        for (var e = [], t = 0; t < b.slides.length; t++) e.push(t);
                        b.removeSlide(e)
                    }, b.effects = {
                        fade: {
                            setTranslate: function() {
                                for (var e = 0; e < b.slides.length; e++) {
                                    var t = b.slides.eq(e),
                                        i = -t[0].swiperSlideOffset;
                                    b.params.virtualTranslate || (i -= b.translate);
                                    var s = 0;
                                    b.isHorizontal() || (s = i, i = 0);
                                    var o = b.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                    t.css({
                                        opacity: o
                                    }).transform("translate3d(" + i + "px, " + s + "px, 0px)")
                                }
                            },
                            setTransition: function(e) {
                                if (b.slides.transition(e), b.params.virtualTranslate && 0 !== e) {
                                    var i = !1;
                                    b.slides.transitionEnd(function() {
                                        if (!i && b) {
                                            i = !0, b.animating = !1;
                                            for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) b.wrapper.trigger(e[t])
                                        }
                                    })
                                }
                            }
                        },
                        flip: {
                            setTranslate: function() {
                                for (var e = 0; e < b.slides.length; e++) {
                                    var t = b.slides.eq(e),
                                        i = t[0].progress;
                                    b.params.flip.limitRotation && (i = Math.max(Math.min(t[0].progress, 1), -1));
                                    var s = -180 * i,
                                        o = 0,
                                        r = -t[0].swiperSlideOffset,
                                        n = 0;
                                    if (b.isHorizontal() ? b.rtl && (s = -s) : (n = r, o = -s, s = r = 0), t[0].style.zIndex = -Math.abs(Math.round(i)) + b.slides.length, b.params.flip.slideShadows) {
                                        var a = b.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                                            l = b.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                        0 === a.length && (a = O('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), t.append(a)), 0 === l.length && (l = O('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), t.append(l)), a.length && (a[0].style.opacity = Math.max(-i, 0)), l.length && (l[0].style.opacity = Math.max(i, 0))
                                    }
                                    t.transform("translate3d(" + r + "px, " + n + "px, 0px) rotateX(" + o + "deg) rotateY(" + s + "deg)")
                                }
                            },
                            setTransition: function(e) {
                                if (b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), b.params.virtualTranslate && 0 !== e) {
                                    var i = !1;
                                    b.slides.eq(b.activeIndex).transitionEnd(function() {
                                        if (!i && b && O(this).hasClass(b.params.slideActiveClass)) {
                                            i = !0, b.animating = !1;
                                            for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) b.wrapper.trigger(e[t])
                                        }
                                    })
                                }
                            }
                        },
                        cube: {
                            setTranslate: function() {
                                var e, t = 0;
                                b.params.cube.shadow && (b.isHorizontal() ? (0 === (e = b.wrapper.find(".swiper-cube-shadow")).length && (e = O('<div class="swiper-cube-shadow"></div>'), b.wrapper.append(e)), e.css({
                                    height: b.width + "px"
                                })) : 0 === (e = b.container.find(".swiper-cube-shadow")).length && (e = O('<div class="swiper-cube-shadow"></div>'), b.container.append(e)));
                                for (var i = 0; i < b.slides.length; i++) {
                                    var s = b.slides.eq(i),
                                        o = 90 * i,
                                        r = Math.floor(o / 360);
                                    b.rtl && (o = -o, r = Math.floor(-o / 360));
                                    var n = Math.max(Math.min(s[0].progress, 1), -1),
                                        a = 0,
                                        l = 0,
                                        c = 0;
                                    i % 4 == 0 ? (a = 4 * -r * b.size, c = 0) : (i - 1) % 4 == 0 ? (a = 0, c = 4 * -r * b.size) : (i - 2) % 4 == 0 ? (a = b.size + 4 * r * b.size, c = b.size) : (i - 3) % 4 == 0 && (a = -b.size, c = 3 * b.size + 4 * b.size * r), b.rtl && (a = -a), b.isHorizontal() || (l = a, a = 0);
                                    var d = "rotateX(" + (b.isHorizontal() ? 0 : -o) + "deg) rotateY(" + (b.isHorizontal() ? o : 0) + "deg) translate3d(" + a + "px, " + l + "px, " + c + "px)";
                                    if (n <= 1 && -1 < n && (t = 90 * i + 90 * n, b.rtl && (t = 90 * -i - 90 * n)), s.transform(d), b.params.cube.slideShadows) {
                                        var p = b.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                                            u = b.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                                        0 === p.length && (p = O('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === u.length && (u = O('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(u)), p.length && (p[0].style.opacity = Math.max(-n, 0)), u.length && (u[0].style.opacity = Math.max(n, 0))
                                    }
                                }
                                if (b.wrapper.css({
                                        "-webkit-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                        "-moz-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                        "-ms-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                        "transform-origin": "50% 50% -" + b.size / 2 + "px"
                                    }), b.params.cube.shadow)
                                    if (b.isHorizontal()) e.transform("translate3d(0px, " + (b.width / 2 + b.params.cube.shadowOffset) + "px, " + -b.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + b.params.cube.shadowScale + ")");
                                    else {
                                        var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                                            f = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                                            m = b.params.cube.shadowScale,
                                            g = b.params.cube.shadowScale / f,
                                            v = b.params.cube.shadowOffset;
                                        e.transform("scale3d(" + m + ", 1, " + g + ") translate3d(0px, " + (b.height / 2 + v) + "px, " + -b.height / 2 / g + "px) rotateX(-90deg)")
                                    }
                                var y = b.isSafari || b.isUiWebView ? -b.size / 2 : 0;
                                b.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (b.isHorizontal() ? 0 : t) + "deg) rotateY(" + (b.isHorizontal() ? -t : 0) + "deg)")
                            },
                            setTransition: function(e) {
                                b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), b.params.cube.shadow && !b.isHorizontal() && b.container.find(".swiper-cube-shadow").transition(e)
                            }
                        },
                        coverflow: {
                            setTranslate: function() {
                                for (var e = b.translate, t = b.isHorizontal() ? -e + b.width / 2 : -e + b.height / 2, i = b.isHorizontal() ? b.params.coverflow.rotate : -b.params.coverflow.rotate, s = b.params.coverflow.depth, o = 0, r = b.slides.length; o < r; o++) {
                                    var n = b.slides.eq(o),
                                        a = b.slidesSizesGrid[o],
                                        l = (t - n[0].swiperSlideOffset - a / 2) / a * b.params.coverflow.modifier,
                                        c = b.isHorizontal() ? i * l : 0,
                                        d = b.isHorizontal() ? 0 : i * l,
                                        p = -s * Math.abs(l),
                                        u = b.isHorizontal() ? 0 : b.params.coverflow.stretch * l,
                                        h = b.isHorizontal() ? b.params.coverflow.stretch * l : 0;
                                    Math.abs(h) < .001 && (h = 0), Math.abs(u) < .001 && (u = 0), Math.abs(p) < .001 && (p = 0), Math.abs(c) < .001 && (c = 0), Math.abs(d) < .001 && (d = 0);
                                    var f = "translate3d(" + h + "px," + u + "px," + p + "px)  rotateX(" + d + "deg) rotateY(" + c + "deg)";
                                    if (n.transform(f), n[0].style.zIndex = 1 - Math.abs(Math.round(l)), b.params.coverflow.slideShadows) {
                                        var m = b.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                                            g = b.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                        0 === m.length && (m = O('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), n.append(m)), 0 === g.length && (g = O('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(g)), m.length && (m[0].style.opacity = 0 < l ? l : 0), g.length && (g[0].style.opacity = 0 < -l ? -l : 0)
                                    }
                                }
                                b.browser.ie && (b.wrapper[0].style.perspectiveOrigin = t + "px 50%")
                            },
                            setTransition: function(e) {
                                b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                            }
                        }
                    }, b.lazy = {
                        initialImageLoaded: !1,
                        loadImageInSlide: function(e, l) {
                            if (void 0 !== e && (void 0 === l && (l = !0), 0 !== b.slides.length)) {
                                var c = b.slides.eq(e),
                                    t = c.find("." + b.params.lazyLoadingClass + ":not(." + b.params.lazyStatusLoadedClass + "):not(." + b.params.lazyStatusLoadingClass + ")");
                                !c.hasClass(b.params.lazyLoadingClass) || c.hasClass(b.params.lazyStatusLoadedClass) || c.hasClass(b.params.lazyStatusLoadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function() {
                                    var s = O(this);
                                    s.addClass(b.params.lazyStatusLoadingClass);
                                    var o = s.attr("data-background"),
                                        r = s.attr("data-src"),
                                        n = s.attr("data-srcset"),
                                        a = s.attr("data-sizes");
                                    b.loadImage(s[0], r || o, n, a, !1, function() {
                                        if (null != b && b) {
                                            if (o ? (s.css("background-image", 'url("' + o + '")'), s.removeAttr("data-background")) : (n && (s.attr("srcset", n), s.removeAttr("data-srcset")), a && (s.attr("sizes", a), s.removeAttr("data-sizes")), r && (s.attr("src", r), s.removeAttr("data-src"))), s.addClass(b.params.lazyStatusLoadedClass).removeClass(b.params.lazyStatusLoadingClass), c.find("." + b.params.lazyPreloaderClass + ", ." + b.params.preloaderClass).remove(), b.params.loop && l) {
                                                var e = c.attr("data-swiper-slide-index");
                                                if (c.hasClass(b.params.slideDuplicateClass)) {
                                                    var t = b.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + b.params.slideDuplicateClass + ")");
                                                    b.lazy.loadImageInSlide(t.index(), !1)
                                                } else {
                                                    var i = b.wrapper.children("." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                    b.lazy.loadImageInSlide(i.index(), !1)
                                                }
                                            }
                                            b.emit("onLazyImageReady", b, c[0], s[0])
                                        }
                                    }), b.emit("onLazyImageLoad", b, c[0], s[0])
                                })
                            }
                        },
                        load: function() {
                            var e, t = b.params.slidesPerView;
                            if ("auto" === t && (t = 0), b.lazy.initialImageLoaded || (b.lazy.initialImageLoaded = !0), b.params.watchSlidesVisibility) b.wrapper.children("." + b.params.slideVisibleClass).each(function() {
                                b.lazy.loadImageInSlide(O(this).index())
                            });
                            else if (1 < t)
                                for (e = b.activeIndex; e < b.activeIndex + t; e++) b.slides[e] && b.lazy.loadImageInSlide(e);
                            else b.lazy.loadImageInSlide(b.activeIndex);
                            if (b.params.lazyLoadingInPrevNext)
                                if (1 < t || b.params.lazyLoadingInPrevNextAmount && 1 < b.params.lazyLoadingInPrevNextAmount) {
                                    var i = b.params.lazyLoadingInPrevNextAmount,
                                        s = t,
                                        o = Math.min(b.activeIndex + s + Math.max(i, s), b.slides.length),
                                        r = Math.max(b.activeIndex - Math.max(s, i), 0);
                                    for (e = b.activeIndex + t; e < o; e++) b.slides[e] && b.lazy.loadImageInSlide(e);
                                    for (e = r; e < b.activeIndex; e++) b.slides[e] && b.lazy.loadImageInSlide(e)
                                } else {
                                    var n = b.wrapper.children("." + b.params.slideNextClass);
                                    0 < n.length && b.lazy.loadImageInSlide(n.index());
                                    var a = b.wrapper.children("." + b.params.slidePrevClass);
                                    0 < a.length && b.lazy.loadImageInSlide(a.index())
                                }
                        },
                        onTransitionStart: function() {
                            b.params.lazyLoading && (b.params.lazyLoadingOnTransitionStart || !b.params.lazyLoadingOnTransitionStart && !b.lazy.initialImageLoaded) && b.lazy.load()
                        },
                        onTransitionEnd: function() {
                            b.params.lazyLoading && !b.params.lazyLoadingOnTransitionStart && b.lazy.load()
                        }
                    }, b.scrollbar = {
                        isTouched: !1,
                        setDragPosition: function(e) {
                            var t = b.scrollbar,
                                i = (b.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - t.track.offset()[b.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                                s = -b.minTranslate() * t.moveDivider,
                                o = -b.maxTranslate() * t.moveDivider;
                            i < s ? i = s : o < i && (i = o), i = -i / t.moveDivider, b.updateProgress(i), b.setWrapperTranslate(i, !0)
                        },
                        dragStart: function(e) {
                            var t = b.scrollbar;
                            t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), b.params.scrollbarHide && t.track.css("opacity", 1), b.wrapper.transition(100), t.drag.transition(100), b.emit("onScrollbarDragStart", b)
                        },
                        dragMove: function(e) {
                            var t = b.scrollbar;
                            t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), b.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), b.emit("onScrollbarDragMove", b))
                        },
                        dragEnd: function(e) {
                            var t = b.scrollbar;
                            t.isTouched && (t.isTouched = !1, b.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function() {
                                t.track.css("opacity", 0), t.track.transition(400)
                            }, 1e3)), b.emit("onScrollbarDragEnd", b), b.params.scrollbarSnapOnRelease && b.slideReset())
                        },
                        draggableEvents: !1 !== b.params.simulateTouch || b.support.touch ? b.touchEvents : b.touchEventsDesktop,
                        enableDraggable: function() {
                            var e = b.scrollbar,
                                t = b.support.touch ? e.track : document;
                            O(e.track).on(e.draggableEvents.start, e.dragStart), O(t).on(e.draggableEvents.move, e.dragMove), O(t).on(e.draggableEvents.end, e.dragEnd)
                        },
                        disableDraggable: function() {
                            var e = b.scrollbar,
                                t = b.support.touch ? e.track : document;
                            O(e.track).off(e.draggableEvents.start, e.dragStart), O(t).off(e.draggableEvents.move, e.dragMove), O(t).off(e.draggableEvents.end, e.dragEnd)
                        },
                        set: function() {
                            if (b.params.scrollbar) {
                                var e = b.scrollbar;
                                e.track = O(b.params.scrollbar), b.params.uniqueNavElements && "string" == typeof b.params.scrollbar && 1 < e.track.length && 1 === b.container.find(b.params.scrollbar).length && (e.track = b.container.find(b.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = O('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = b.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = b.size / b.virtualSize, e.moveDivider = e.divider * (e.trackSize / b.size), e.dragSize = e.trackSize * e.divider, b.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", 1 <= e.divider ? e.track[0].style.display = "none" : e.track[0].style.display = "", b.params.scrollbarHide && (e.track[0].style.opacity = 0)
                            }
                        },
                        setTranslate: function() {
                            if (b.params.scrollbar) {
                                var e, t = b.scrollbar,
                                    i = (b.translate, t.dragSize);
                                e = (t.trackSize - t.dragSize) * b.progress, b.rtl && b.isHorizontal() ? 0 < (e = -e) ? (i = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (i = t.trackSize + e) : e < 0 ? (i = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (i = t.trackSize - e), b.isHorizontal() ? (b.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = i + "px") : (b.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = i + "px"), b.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                                    t.track[0].style.opacity = 0, t.track.transition(400)
                                }, 1e3))
                            }
                        },
                        setTransition: function(e) {
                            b.params.scrollbar && b.scrollbar.drag.transition(e)
                        }
                    }, b.controller = {
                        LinearSpline: function(e, t) {
                            var i, s, o, r, n, a = function(e, t) {
                                for (s = -1, i = e.length; 1 < i - s;) e[o = i + s >> 1] <= t ? s = o : i = o;
                                return i
                            };
                            this.x = e, this.y = t, this.lastIndex = e.length - 1, this.x.length, this.interpolate = function(e) {
                                return e ? (n = a(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                            }
                        },
                        getInterpolateFunction: function(e) {
                            b.controller.spline || (b.controller.spline = b.params.loop ? new b.controller.LinearSpline(b.slidesGrid, e.slidesGrid) : new b.controller.LinearSpline(b.snapGrid, e.snapGrid))
                        },
                        setTranslate: function(t, e) {
                            function i(e) {
                                t = e.rtl && "horizontal" === e.params.direction ? -b.translate : b.translate, "slide" === b.params.controlBy && (b.controller.getInterpolateFunction(e), o = -b.controller.spline.interpolate(-t)), o && "container" !== b.params.controlBy || (s = (e.maxTranslate() - e.minTranslate()) / (b.maxTranslate() - b.minTranslate()), o = (t - b.minTranslate()) * s + e.minTranslate()), b.params.controlInverse && (o = e.maxTranslate() - o), e.updateProgress(o), e.setWrapperTranslate(o, !1, b), e.updateActiveIndex()
                            }
                            var s, o, r = b.params.control;
                            if (Array.isArray(r))
                                for (var n = 0; n < r.length; n++) r[n] !== e && r[n] instanceof B && i(r[n]);
                            else r instanceof B && e !== r && i(r)
                        },
                        setTransition: function(t, e) {
                            function i(e) {
                                e.setWrapperTransition(t, b), 0 !== t && (e.onTransitionStart(), e.wrapper.transitionEnd(function() {
                                    o && (e.params.loop && "slide" === b.params.controlBy && e.fixLoop(), e.onTransitionEnd())
                                }))
                            }
                            var s, o = b.params.control;
                            if (Array.isArray(o))
                                for (s = 0; s < o.length; s++) o[s] !== e && o[s] instanceof B && i(o[s]);
                            else o instanceof B && e !== o && i(o)
                        }
                    }, b.hashnav = {
                        onHashCange: function(e, t) {
                            var i = document.location.hash.replace("#", "");
                            i !== b.slides.eq(b.activeIndex).attr("data-hash") && b.slideTo(b.wrapper.children("." + b.params.slideClass + '[data-hash="' + i + '"]').index())
                        },
                        attachEvents: function(e) {
                            var t = e ? "off" : "on";
                            O(window)[t]("hashchange", b.hashnav.onHashCange)
                        },
                        setHash: function() {
                            if (b.hashnav.initialized && b.params.hashnav)
                                if (b.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + b.slides.eq(b.activeIndex).attr("data-hash") || "");
                                else {
                                    var e = b.slides.eq(b.activeIndex),
                                        t = e.attr("data-hash") || e.attr("data-history");
                                    document.location.hash = t || ""
                                }
                        },
                        init: function() {
                            if (b.params.hashnav && !b.params.history) {
                                b.hashnav.initialized = !0;
                                var e = document.location.hash.replace("#", "");
                                if (e)
                                    for (var t = 0, i = b.slides.length; t < i; t++) {
                                        var s = b.slides.eq(t);
                                        if ((s.attr("data-hash") || s.attr("data-history")) === e && !s.hasClass(b.params.slideDuplicateClass)) {
                                            var o = s.index();
                                            b.slideTo(o, 0, b.params.runCallbacksOnInit, !0)
                                        }
                                    }
                                b.params.hashnavWatchState && b.hashnav.attachEvents()
                            }
                        },
                        destroy: function() {
                            b.params.hashnavWatchState && b.hashnav.attachEvents(!0)
                        }
                    }, b.history = {
                        init: function() {
                            if (b.params.history) {
                                if (!window.history || !window.history.pushState) return b.params.history = !1, void(b.params.hashnav = !0);
                                b.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, b.params.runCallbacksOnInit), b.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                            }
                        },
                        setHistoryPopState: function() {
                            b.history.paths = b.history.getPathValues(), b.history.scrollToSlide(b.params.speed, b.history.paths.value, !1)
                        },
                        getPathValues: function() {
                            var e = window.location.pathname.slice(1).split("http://twofold.fuelthemes.net/"),
                                t = e.length;
                            return {
                                key: e[t - 2],
                                value: e[t - 1]
                            }
                        },
                        setHistory: function(e, t) {
                            if (b.history.initialized && b.params.history) {
                                var i = b.slides.eq(t),
                                    s = this.slugify(i.attr("data-history"));
                                window.location.pathname.includes(e) || (s = e + "/" + s), b.params.replaceState ? window.history.replaceState(null, null, s) : window.history.pushState(null, null, s)
                            }
                        },
                        slugify: function(e) {
                            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                        },
                        scrollToSlide: function(e, t, i) {
                            if (t)
                                for (var s = 0, o = b.slides.length; s < o; s++) {
                                    var r = b.slides.eq(s);
                                    if (this.slugify(r.attr("data-history")) === t && !r.hasClass(b.params.slideDuplicateClass)) {
                                        var n = r.index();
                                        b.slideTo(n, e, i)
                                    }
                                } else b.slideTo(0, e, i)
                        }
                    }, b.disableKeyboardControl = function() {
                        b.params.keyboardControl = !1, O(document).off("keydown", s)
                    }, b.enableKeyboardControl = function() {
                        b.params.keyboardControl = !0, O(document).on("keydown", s)
                    }, b.mousewheel = {
                        event: !1,
                        lastScrollTime: (new window.Date).getTime()
                    }, b.params.mousewheelControl && (b.mousewheel.event = -1 < navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                        var e = "onwheel" in document;
                        if (!e) {
                            var t = document.createElement("div");
                            t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
                        }
                        return !e && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (e = document.implementation.hasFeature("Events.wheel", "3.0")), e
                    }() ? "wheel" : "mousewheel"), b.disableMousewheelControl = function() {
                        if (!b.mousewheel.event) return !1;
                        var e = b.container;
                        return "container" !== b.params.mousewheelEventsTarged && (e = O(b.params.mousewheelEventsTarged)), e.off(b.mousewheel.event, o), b.params.mousewheelControl = !1, !0
                    }, b.enableMousewheelControl = function() {
                        if (!b.mousewheel.event) return !1;
                        var e = b.container;
                        return "container" !== b.params.mousewheelEventsTarged && (e = O(b.params.mousewheelEventsTarged)), e.on(b.mousewheel.event, o), b.params.mousewheelControl = !0
                    }, b.parallax = {
                        setTranslate: function() {
                            b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                r(this, b.progress)
                            }), b.slides.each(function() {
                                var e = O(this);
                                e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                    r(this, Math.min(Math.max(e[0].progress, -1), 1))
                                })
                            })
                        },
                        setTransition: function(i) {
                            void 0 === i && (i = b.params.speed), b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                var e = O(this),
                                    t = parseInt(e.attr("data-swiper-parallax-duration"), 10) || i;
                                0 === i && (t = 0), e.transition(t)
                            })
                        }
                    }, b.zoom = {
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            slide: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            image: void 0,
                            imageWrap: void 0,
                            zoomMax: b.params.zoomMax
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        },
                        getDistanceBetweenTouches: function(e) {
                            if (e.targetTouches.length < 2) return 1;
                            var t = e.targetTouches[0].pageX,
                                i = e.targetTouches[0].pageY,
                                s = e.targetTouches[1].pageX,
                                o = e.targetTouches[1].pageY;
                            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(o - i, 2))
                        },
                        onGestureStart: function(e) {
                            var t = b.zoom;
                            if (!b.support.gestures) {
                                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                                t.gesture.scaleStart = t.getDistanceBetweenTouches(e)
                            }
                            t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = O(this), 0 === t.gesture.slide.length && (t.gesture.slide = b.slides.eq(b.activeIndex)), t.gesture.image = t.gesture.slide.find("img, svg, canvas"), t.gesture.imageWrap = t.gesture.image.parent("." + b.params.zoomContainerClass), t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || b.params.zoomMax, 0 !== t.gesture.imageWrap.length) ? (t.gesture.image.transition(0), t.isScaling = !0) : t.gesture.image = void 0
                        },
                        onGestureChange: function(e) {
                            var t = b.zoom;
                            if (!b.support.gestures) {
                                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                                t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                            }
                            t.gesture.image && 0 !== t.gesture.image.length && (b.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), t.scale < b.params.zoomMin && (t.scale = b.params.zoomMin + 1 - Math.pow(b.params.zoomMin - t.scale + 1, .5)), t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                        },
                        onGestureEnd: function(e) {
                            var t = b.zoom;
                            !b.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), b.params.zoomMin), t.gesture.image.transition(b.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0))
                        },
                        onTouchStart: function(e, t) {
                            var i = e.zoom;
                            i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === e.device.os && t.preventDefault(), i.image.isTouched = !0, i.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, i.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                        },
                        onTouchMove: function(e) {
                            var t = b.zoom;
                            if (t.gesture.image && 0 !== t.gesture.image.length && (b.allowClick = !1, t.image.isTouched && t.gesture.slide)) {
                                t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, t.image.startX = b.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = b.getTranslate(t.gesture.imageWrap[0], "y") || 0, t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, t.gesture.imageWrap.transition(0), b.rtl && (t.image.startX = -t.image.startX), b.rtl && (t.image.startY = -t.image.startY));
                                var i = t.image.width * t.scale,
                                    s = t.image.height * t.scale;
                                if (!(i < t.gesture.slideWidth && s < t.gesture.slideHeight)) {
                                    if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - i / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - s / 2, 0), t.image.maxY = -t.image.minY, t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !t.image.isMoved && !t.isScaling) {
                                        if (b.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x) return void(t.image.isTouched = !1);
                                        if (!b.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y) return void(t.image.isTouched = !1)
                                    }
                                    e.preventDefault(), e.stopPropagation(), t.image.isMoved = !0, t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX, t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY, t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)), t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)), t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)), t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)), t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x), t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y), t.velocity.prevTime || (t.velocity.prevTime = Date.now()), t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2, t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2, Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0), Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0), t.velocity.prevPositionX = t.image.touchesCurrent.x, t.velocity.prevPositionY = t.image.touchesCurrent.y, t.velocity.prevTime = Date.now(), t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                                }
                            }
                        },
                        onTouchEnd: function(e, t) {
                            var i = e.zoom;
                            if (i.gesture.image && 0 !== i.gesture.image.length) {
                                if (!i.image.isTouched || !i.image.isMoved) return i.image.isTouched = !1, void(i.image.isMoved = !1);
                                i.image.isTouched = !1, i.image.isMoved = !1;
                                var s = 300,
                                    o = 300,
                                    r = i.velocity.x * s,
                                    n = i.image.currentX + r,
                                    a = i.velocity.y * o,
                                    l = i.image.currentY + a;
                                0 !== i.velocity.x && (s = Math.abs((n - i.image.currentX) / i.velocity.x)), 0 !== i.velocity.y && (o = Math.abs((l - i.image.currentY) / i.velocity.y));
                                var c = Math.max(s, o);
                                i.image.currentX = n, i.image.currentY = l;
                                var d = i.image.width * i.scale,
                                    p = i.image.height * i.scale;
                                i.image.minX = Math.min(i.gesture.slideWidth / 2 - d / 2, 0), i.image.maxX = -i.image.minX, i.image.minY = Math.min(i.gesture.slideHeight / 2 - p / 2, 0), i.image.maxY = -i.image.minY, i.image.currentX = Math.max(Math.min(i.image.currentX, i.image.maxX), i.image.minX), i.image.currentY = Math.max(Math.min(i.image.currentY, i.image.maxY), i.image.minY), i.gesture.imageWrap.transition(c).transform("translate3d(" + i.image.currentX + "px, " + i.image.currentY + "px,0)")
                            }
                        },
                        onTransitionEnd: function(e) {
                            var t = e.zoom;
                            t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, t.scale = t.currentScale = 1)
                        },
                        toggleZoom: function(e, t) {
                            var i, s, o, r, n, a, l, c, d, p, u, h, f, m, g, v, y = e.zoom;
                            (y.gesture.slide || (y.gesture.slide = e.clickedSlide ? O(e.clickedSlide) : e.slides.eq(e.activeIndex), y.gesture.image = y.gesture.slide.find("img, svg, canvas"), y.gesture.imageWrap = y.gesture.image.parent("." + e.params.zoomContainerClass)), y.gesture.image && 0 !== y.gesture.image.length) && (void 0 === y.image.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, s = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = y.image.touchesStart.x, s = y.image.touchesStart.y), y.scale && 1 !== y.scale ? (y.scale = y.currentScale = 1, y.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), y.gesture.slide = void 0) : (y.scale = y.currentScale = y.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax, t ? (g = y.gesture.slide[0].offsetWidth, v = y.gesture.slide[0].offsetHeight, o = y.gesture.slide.offset().left + g / 2 - i, r = y.gesture.slide.offset().top + v / 2 - s, l = y.gesture.image[0].offsetWidth, c = y.gesture.image[0].offsetHeight, d = l * y.scale, p = c * y.scale, f = -(u = Math.min(g / 2 - d / 2, 0)), m = -(h = Math.min(v / 2 - p / 2, 0)), (n = o * y.scale) < u && (n = u), f < n && (n = f), (a = r * y.scale) < h && (a = h), m < a && (a = m)) : a = n = 0, y.gesture.imageWrap.transition(300).transform("translate3d(" + n + "px, " + a + "px,0)"), y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")")))
                        },
                        attachEvents: function(e) {
                            var i = e ? "off" : "on";
                            if (b.params.zoom) {
                                var t = (b.slides, !("touchstart" !== b.touchEvents.start || !b.support.passiveListener || !b.params.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                });
                                b.support.gestures ? (b.slides[i]("gesturestart", b.zoom.onGestureStart, t), b.slides[i]("gesturechange", b.zoom.onGestureChange, t), b.slides[i]("gestureend", b.zoom.onGestureEnd, t)) : "touchstart" === b.touchEvents.start && (b.slides[i](b.touchEvents.start, b.zoom.onGestureStart, t), b.slides[i](b.touchEvents.move, b.zoom.onGestureChange, t), b.slides[i](b.touchEvents.end, b.zoom.onGestureEnd, t)), b[i]("touchStart", b.zoom.onTouchStart), b.slides.each(function(e, t) {
                                    0 < O(t).find("." + b.params.zoomContainerClass).length && O(t)[i](b.touchEvents.move, b.zoom.onTouchMove)
                                }), b[i]("touchEnd", b.zoom.onTouchEnd), b[i]("transitionEnd", b.zoom.onTransitionEnd), b.params.zoomToggle && b.on("doubleTap", b.zoom.toggleZoom)
                            }
                        },
                        init: function() {
                            b.zoom.attachEvents()
                        },
                        destroy: function() {
                            b.zoom.attachEvents(!0)
                        }
                    }, b._plugins = [], b.plugins) {
                    var z = b.plugins[H](b, b.params[H]);
                    z && b._plugins.push(z)
                }
                return b.callPlugins = function(e) {
                    for (var t = 0; t < b._plugins.length; t++) e in b._plugins[t] && b._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, b.emitterEventListeners = {}, b.emit = function(e) {
                    var t;
                    if (b.params[e] && b.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), b.emitterEventListeners[e])
                        for (t = 0; t < b.emitterEventListeners[e].length; t++) b.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    b.callPlugins && b.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, b.on = function(e, t) {
                    return e = n(e), b.emitterEventListeners[e] || (b.emitterEventListeners[e] = []), b.emitterEventListeners[e].push(t), b
                }, b.off = function(e, t) {
                    var i;
                    if (e = n(e), void 0 === t) return b.emitterEventListeners[e] = [], b;
                    if (b.emitterEventListeners[e] && 0 !== b.emitterEventListeners[e].length) {
                        for (i = 0; i < b.emitterEventListeners[e].length; i++) b.emitterEventListeners[e][i] === t && b.emitterEventListeners[e].splice(i, 1);
                        return b
                    }
                }, b.once = function(e, t) {
                    e = n(e);
                    var i = function() {
                        t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), b.off(e, i)
                    };
                    return b.on(e, i), b
                }, b.a11y = {
                    makeFocusable: function(e) {
                        return e.attr("tabIndex", "0"), e
                    },
                    addRole: function(e, t) {
                        return e.attr("role", t), e
                    },
                    addLabel: function(e, t) {
                        return e.attr("aria-label", t), e
                    },
                    disable: function(e) {
                        return e.attr("aria-disabled", !0), e
                    },
                    enable: function(e) {
                        return e.attr("aria-disabled", !1), e
                    },
                    onEnterKey: function(e) {
                        13 === e.keyCode && (O(e.target).is(b.params.nextButton) ? (b.onClickNext(e), b.isEnd ? b.a11y.notify(b.params.lastSlideMessage) : b.a11y.notify(b.params.nextSlideMessage)) : O(e.target).is(b.params.prevButton) && (b.onClickPrev(e), b.isBeginning ? b.a11y.notify(b.params.firstSlideMessage) : b.a11y.notify(b.params.prevSlideMessage)), O(e.target).is("." + b.params.bulletClass) && O(e.target)[0].click())
                    },
                    liveRegion: O('<span class="' + b.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function(e) {
                        var t = b.a11y.liveRegion;
                        0 !== t.length && (t.html(""), t.html(e))
                    },
                    init: function() {
                        b.params.nextButton && b.nextButton && 0 < b.nextButton.length && (b.a11y.makeFocusable(b.nextButton), b.a11y.addRole(b.nextButton, "button"), b.a11y.addLabel(b.nextButton, b.params.nextSlideMessage)), b.params.prevButton && b.prevButton && 0 < b.prevButton.length && (b.a11y.makeFocusable(b.prevButton), b.a11y.addRole(b.prevButton, "button"), b.a11y.addLabel(b.prevButton, b.params.prevSlideMessage)), O(b.container).append(b.a11y.liveRegion)
                    },
                    initPagination: function() {
                        b.params.pagination && b.params.paginationClickable && b.bullets && b.bullets.length && b.bullets.each(function() {
                            var e = O(this);
                            b.a11y.makeFocusable(e), b.a11y.addRole(e, "button"), b.a11y.addLabel(e, b.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                        })
                    },
                    destroy: function() {
                        b.a11y.liveRegion && 0 < b.a11y.liveRegion.length && b.a11y.liveRegion.remove()
                    }
                }, b.init = function() {
                    b.params.loop && b.createLoop(), b.updateContainerSize(), b.updateSlidesSize(), b.updatePagination(), b.params.scrollbar && b.scrollbar && (b.scrollbar.set(), b.params.scrollbarDraggable && b.scrollbar.enableDraggable()), "slide" !== b.params.effect && b.effects[b.params.effect] && (b.params.loop || b.updateProgress(), b.effects[b.params.effect].setTranslate()), b.params.loop ? b.slideTo(b.params.initialSlide + b.loopedSlides, 0, b.params.runCallbacksOnInit) : (b.slideTo(b.params.initialSlide, 0, b.params.runCallbacksOnInit), 0 === b.params.initialSlide && (b.parallax && b.params.parallax && b.parallax.setTranslate(), b.lazy && b.params.lazyLoading && (b.lazy.load(), b.lazy.initialImageLoaded = !0))), b.attachEvents(), b.params.observer && b.support.observer && b.initObservers(), b.params.preloadImages && !b.params.lazyLoading && b.preloadImages(), b.params.zoom && b.zoom && b.zoom.init(), b.params.autoplay && b.startAutoplay(), b.params.keyboardControl && b.enableKeyboardControl && b.enableKeyboardControl(), b.params.mousewheelControl && b.enableMousewheelControl && b.enableMousewheelControl(), b.params.hashnavReplaceState && (b.params.replaceState = b.params.hashnavReplaceState), b.params.history && b.history && b.history.init(), b.params.hashnav && b.hashnav && b.hashnav.init(), b.params.a11y && b.a11y && b.a11y.init(), b.emit("onInit", b)
                }, b.cleanupStyles = function() {
                    b.container.removeClass(b.classNames.join(" ")).removeAttr("style"), b.wrapper.removeAttr("style"), b.slides && b.slides.length && b.slides.removeClass([b.params.slideVisibleClass, b.params.slideActiveClass, b.params.slideNextClass, b.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), b.paginationContainer && b.paginationContainer.length && b.paginationContainer.removeClass(b.params.paginationHiddenClass), b.bullets && b.bullets.length && b.bullets.removeClass(b.params.bulletActiveClass), b.params.prevButton && O(b.params.prevButton).removeClass(b.params.buttonDisabledClass), b.params.nextButton && O(b.params.nextButton).removeClass(b.params.buttonDisabledClass), b.params.scrollbar && b.scrollbar && (b.scrollbar.track && b.scrollbar.track.length && b.scrollbar.track.removeAttr("style"), b.scrollbar.drag && b.scrollbar.drag.length && b.scrollbar.drag.removeAttr("style"))
                }, b.destroy = function(e, t) {
                    b.detachEvents(), b.stopAutoplay(), b.params.scrollbar && b.scrollbar && b.params.scrollbarDraggable && b.scrollbar.disableDraggable(), b.params.loop && b.destroyLoop(), t && b.cleanupStyles(), b.disconnectObservers(), b.params.zoom && b.zoom && b.zoom.destroy(), b.params.keyboardControl && b.disableKeyboardControl && b.disableKeyboardControl(), b.params.mousewheelControl && b.disableMousewheelControl && b.disableMousewheelControl(), b.params.a11y && b.a11y && b.a11y.destroy(), b.params.history && !b.params.replaceState && window.removeEventListener("popstate", b.history.setHistoryPopState), b.params.hashnav && b.hashnav && b.hashnav.destroy(), b.emit("onDestroy"), !1 !== e && (b = null)
                }, b.init(), b
            }
        };
        B.prototype = {
            isSafari: (a = window.navigator.userAgent.toLowerCase(), 0 <= a.indexOf("safari") && a.indexOf("chrome") < 0 && a.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
            isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.apply(e)
            },
            browser: {
                ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && 1 < window.navigator.msMaxTouchPoints || window.navigator.pointerEnabled && 1 < window.navigator.maxTouchPoints,
                lteIE9: (n = document.createElement("div"), n.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e", 1 === n.getElementsByTagName("i").length)
            },
            device: (t = window.navigator.userAgent, i = t.match(/(Android);?[\s\/]+([\d.]+)?/), s = t.match(/(iPad).*OS\s([\d_]+)/), o = t.match(/(iPod)(.*OS\s([\d_]+))?/), r = !s && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/), {
                ios: s || r || o,
                android: i
            }),
            support: {
                touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
                transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || (e = document.createElement("div").style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
                flexbox: function() {
                    for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i++)
                        if (t[i] in e) return !0
                }(),
                observer: "MutationObserver" in window || "WebkitMutationObserver" in window,
                passiveListener: function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        window.addEventListener("testPassiveListener", null, t)
                    } catch (e) {}
                    return e
                }(),
                gestures: "ongesturestart" in window
            },
            plugins: {}
        };
        for (var c = ["jQuery", "Zepto", "Dom7"], d = 0; d < c.length; d++) window[c[d]] && function(e) {
            e.fn.swiper = function(t) {
                var i;
                return e(this).each(function() {
                    var e = new B(this, t);
                    i || (i = e)
                }), i
            }
        }(window[c[d]]);
        (l = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7) && ("transitionEnd" in l.fn || (l.fn.transitionEnd = function(t) {
            function i(e) {
                if (e.target === this)
                    for (t.call(this, e), s = 0; s < o.length; s++) r.off(o[s], i)
            }
            var s, o = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                r = this;
            if (t)
                for (s = 0; s < o.length; s++) r.on(o[s], i);
            return this
        }), "transform" in l.fn || (l.fn.transform = function(e) {
            for (var t = 0; t < this.length; t++) {
                var i = this[t].style;
                i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
            }
            return this
        }), "transition" in l.fn || (l.fn.transition = function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t++) {
                var i = this[t].style;
                i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
            }
            return this
        }), "outerWidth" in l.fn || (l.fn.outerWidth = function(e) {
            return 0 < this.length ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
        })), window.Swiper = B
    }(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
        "use strict";
        return window.Swiper
    });