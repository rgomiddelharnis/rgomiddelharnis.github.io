/*! For license information please see 4249.1e5474dd649c722b8777.js.LICENSE.txt */
(self.webpackChunk_basthon_basthon_notebook =
  self.webpackChunk_basthon_basthon_notebook || []).push([
  [4249],
  {
    89316: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { GUI: () => b });
      var n = o(15861),
        r = o(15671),
        i = o(43144),
        s = o(97326),
        a = o(11752),
        l = o(79340),
        c = o(6215),
        d = o(61120),
        u = o(4942),
        p = o(64687),
        h = o.n(p),
        _ = o(19755),
        m = o(94722),
        f = o(72467);
      var g = o(46013),
        b = (function (e) {
          (0, l.Z)(S, e);
          var t,
            p,
            m,
            b,
            v,
            y,
            k,
            w,
            x,
            C,
            j,
            E =
              ((C = S),
              (j = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  t = (0, d.Z)(C);
                if (j) {
                  var o = (0, d.Z)(this).constructor;
                  e = Reflect.construct(t, arguments, o);
                } else e = t.apply(this, arguments);
                return (0, c.Z)(this, e);
              });
          function S(e) {
            var t;
            (0, r.Z)(this, S),
              (t = E.call(this, ((e.uiName = "notebook"), e))),
              (0, u.Z)((0, s.Z)(t), "_notebookAccessible", new f.I()),
              (t._urlKey = "ipynb");
            var i = (function () {
              var e = (0, n.Z)(
                h().mark(function e() {
                  var t, n;
                  return h().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = o(30970)),
                            (e.next = 3),
                            o.e(165).then(o.bind(o, 80165))
                          );
                        case 3:
                          (n = e.sent.default),
                            o.e(5478).then(o.bind(o, 5478)),
                            t.use(n);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            return (
              t.registerExtension("admonition", i),
              t.registerExtension("admonitions", i),
              t.registerExtension(
                "sequenced",
                (0, n.Z)(
                  h().mark(function e() {
                    return h().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            t.notebookAccessible().then(function (e) {
                              e.set_sequenced(!0);
                            });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )
              ),
              t.registerExtension(
                "linenumbers",
                (0, n.Z)(
                  h().mark(function e() {
                    return h().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            t.notebookAccessible().then(function (e) {
                              e.keyboard_manager.actions.call(
                                "jupyter-notebook:show-all-line-numbers"
                              );
                            });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )
              ),
              t.registerExtension(
                "romd",
                (0, n.Z)(
                  h().mark(function e() {
                    return h().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            t.notebookAccessible().then(function (e) {
                              return e.set_romd(!0);
                            });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )
              ),
              t
            );
          }
          return (
            (0, i.Z)(S, [
              {
                key: "notebookAccessible",
                value: function () {
                  return this._notebookAccessible.promise;
                },
              },
              {
                key: "content",
                value: function () {
                  return JSON.stringify(this._notebook.toJSON());
                },
              },
              {
                key: "setContent",
                value: function (e) {
                  if (e) {
                    var t;
                    try {
                      t = JSON.parse(e);
                    } catch (e) {
                      throw new Error(
                        "Impossible d'ouvrir le notebook : l'ipynb est corrompu.\n".concat(
                          e.toString()
                        )
                      );
                    }
                    try {
                      this._notebook.fromJSON(t);
                    } catch (e) {
                      throw new Error(
                        "Het notebook kan niet worden geopend: het ipynb-bestand is niet geldig.\n".concat(
                          e.toString()
                        )
                      );
                    }
                  }
                },
              },
              {
                key: "_contentFilename",
                get: function () {
                  var e;
                  return null !== (e = this._notebook.notebook_name) &&
                    void 0 !== e
                    ? e
                    : "Untitled.ipynb";
                },
                set: function (e) {},
              },
              {
                key: "error",
                value: function (e, t) {
                  var o;
                  g.modal({
                    notebook: this._notebook,
                    keyboard_manager:
                      null === (o = this._notebook) || void 0 === o
                        ? void 0
                        : o.keyboard_manager,
                    title: e,
                    body: _("<div>").html(t),
                    buttons: { OK: { class: "btn-danger" } },
                  });
                },
              },
              {
                key: "info",
                value: function (e, t) {
                  var o;
                  g.modal({
                    notebook: this._notebook,
                    keyboard_manager:
                      null === (o = this._notebook) || void 0 === o
                        ? void 0
                        : o.keyboard_manager,
                    title: e,
                    body: _("<div>").html(t),
                    buttons: { OK: { class: "btn-primary" } },
                  });
                },
              },
              {
                key: "confirm",
                value: function (e, t, o, n, r, i) {
                  var s;
                  g.modal({
                    notebook: this._notebook,
                    keyboard_manager: this._notebook.keyboard_manager,
                    title: e,
                    body: _("<div>").html(t),
                    buttons:
                      ((s = {}),
                      (0, u.Z)(s, o, { class: "btn-primary", click: n }),
                      (0, u.Z)(s, r, { click: i }),
                      s),
                  });
                },
              },
              {
                key: "select",
                value: function (e, t, o, n, r) {
                  var i = 0,
                    s = _(
                      '<div class="list-group" style="max-width: 200px; margin: auto; margin-top: 10px;">'
                    );
                  o.forEach(function (e, t) {
                    var o = _('<a href="#">').text(e.text);
                    o.addClass("list-group-item"),
                      o.addClass("list-group-item-action"),
                      0 == t && o.addClass("active"),
                      o.click(function () {
                        o.parent().find("a").removeClass("active"),
                          o.addClass("active"),
                          (i = t);
                      }),
                      s.append(o);
                  });
                  var a = _("<div>").append(_("<p>").html(t)).append(s);
                  g.modal({
                    notebook: this._notebook,
                    keyboard_manager: this._notebook.keyboard_manager,
                    title: e,
                    body: a,
                    buttons: (0, u.Z)(
                      {
                        OK: {
                          class: "btn-primary",
                          click: function () {
                            var e = o[i].handler;
                            null != e && e();
                          },
                        },
                      },
                      n,
                      { click: r || function () {} }
                    ),
                  });
                },
              },
              {
                key: "_getDarkmode",
                value:
                  ((x = (0, n.Z)(
                    h().mark(function e() {
                      return h().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.getState("darkmode", !1)
                                );
                              case 2:
                                return e.abrupt("return", e.sent);
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return x.apply(this, arguments);
                  }),
              },
              {
                key: "theme",
                value:
                  ((w = (0, n.Z)(
                    h().mark(function e() {
                      var t;
                      return h().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this._getDarkmode();
                              case 2:
                                return (
                                  (t = e.sent),
                                  e.abrupt("return", t ? "dark" : "light")
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return w.apply(this, arguments);
                  }),
              },
              {
                key: "switchDarkLight",
                value:
                  ((k = (0, n.Z)(
                    h().mark(function e() {
                      var t;
                      return h().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this._getDarkmode();
                              case 2:
                                return (
                                  (t = e.sent),
                                  (e.next = 5),
                                  this.setState("darkmode", !t)
                                );
                              case 5:
                                return (e.next = 7), this.updateDarkLight();
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return k.apply(this, arguments);
                  }),
              },
              {
                key: "updateDarkLight",
                value:
                  ((y = (0, n.Z)(
                    h().mark(function e() {
                      var t, o, n;
                      return h().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this._getDarkmode();
                              case 2:
                                (o = e.sent),
                                  (n = o ? "dark" : "light"),
                                  null === (t = this._notebook) ||
                                    void 0 === t ||
                                    t.set_theme(n);
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return y.apply(this, arguments);
                  }),
              },
              {
                key: "setupUI",
                value:
                  ((v = (0, n.Z)(
                    h().mark(function e(t) {
                      var o,
                        n = this;
                      return h().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._notebook =
                                    null == t ? void 0 : t.notebook),
                                  this._notebookAccessible.resolve(
                                    this._notebook
                                  ),
                                  (e.next = 4),
                                  (0, a.Z)(
                                    (0, d.Z)(S.prototype),
                                    "setupUI",
                                    this
                                  ).call(this, t)
                                );
                              case 4:
                                return (e.next = 6), this.updateDarkLight();
                              case 6:
                                if (
                                  (this._notebook || location.reload(),
                                  (this._events = this._notebook.events),
                                  this._notebook._fully_loaded)
                                ) {
                                  e.next = 11;
                                  break;
                                }
                                return (
                                  (e.next = 11),
                                  new Promise(function (e, t) {
                                    return n._events.on(
                                      "notebook_loaded.Notebook",
                                      e
                                    );
                                  })
                                );
                              case 11:
                                "python3-old" === this.language &&
                                  ((o = function () {
                                    var e = new URL(window.location.href);
                                    e.searchParams.set("kernel", "python3"),
                                      (window.location.href = e.toString());
                                  }),
                                  this.confirm(
                                    "Openen met de laatste versie van Basthon?",
                                    "Dit notebook gebruikt een oude versie van de Basthon-kernel (Python 3.8) die binnenkort niet meer wordt onderhouden. Wilt u de laatste versie van de kernel gebruiken (Python 3.10)?",
                                    "Gebruik Python 3.10",
                                    o,
                                    "Blijf bij Python 3.8",
                                    function () {}
                                  ));
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function (e) {
                    return v.apply(this, arguments);
                  }),
              },
              {
                key: "share",
                value:
                  ((b = (0, n.Z)(
                    h().mark(function e() {
                      return h().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this._events.trigger("before_share.Notebook"),
                                  (0, a.Z)(
                                    (0, d.Z)(S.prototype),
                                    "share",
                                    this
                                  ).call(this),
                                  this._events.trigger(
                                    "notebook_shared.Notebook"
                                  );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return b.apply(this, arguments);
                  }),
              },
              {
                key: "loadPythonInCell",
                value:
                  ((m = (0, n.Z)(
                    h().mark(function e(t) {
                      var o = this;
                      return h().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                new Promise(function (e, r) {
                                  var i = new FileReader();
                                  i.readAsText(t),
                                    (i.onload = (function () {
                                      var t = (0, n.Z)(
                                        h().mark(function t(n) {
                                          var r;
                                          return h().wrap(function (t) {
                                            for (;;)
                                              switch ((t.prev = t.next)) {
                                                case 0:
                                                  o._notebook
                                                    .insert_cell_above(
                                                      "code",
                                                      0
                                                    )
                                                    .set_text(
                                                      null == n ||
                                                        null ===
                                                          (r = n.target) ||
                                                        void 0 === r
                                                        ? void 0
                                                        : r.result
                                                    ),
                                                    e();
                                                case 3:
                                                case "end":
                                                  return t.stop();
                                              }
                                          }, t);
                                        })
                                      );
                                      return function (e) {
                                        return t.apply(this, arguments);
                                      };
                                    })()),
                                    (i.onerror = r);
                                })
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  function (e) {
                    return m.apply(this, arguments);
                  }),
              },
              {
                key: "openPythonFile",
                value:
                  ((p = (0, n.Z)(
                    h().mark(function e(t) {
                      var o,
                        n = this;
                      return h().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (o = _("<div>").text(
                                  "Que faire de " + t.name + " ?"
                                )),
                                  this.confirm(
                                    "Que faire du fichier ?",
                                    o,
                                    "Charger dans le notebook",
                                    function () {
                                      n.loadPythonInCell(t);
                                    },
                                    "Installer le module",
                                    function () {
                                      n.putFSRessource(t);
                                    }
                                  );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function (e) {
                    return p.apply(this, arguments);
                  }),
              },
              {
                key: "openFile",
                value:
                  ((t = (0, n.Z)(
                    h().mark(function e() {
                      return h().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this._openFile({
                                    py: this.openPythonFile.bind(this),
                                    ipynb: this.open.bind(this),
                                  })
                                );
                              case 2:
                                return e.abrupt("return", e.sent);
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return t.apply(this, arguments);
                  }),
              },
            ]),
            S
          );
        })(m.N);
    },
    99016: (e, t, o) => {
      "use strict";
      o.r(t),
        o.d(t, { BasthonWebSocket: () => h, CLOSED: () => u, OPEN: () => p });
      var n = o(15861),
        r = o(15671),
        i = o(43144),
        s = o(4942),
        a = o(64687),
        l = o.n(a),
        c = (function () {
          function e() {
            (0, r.Z)(this, e), (0, s.Z)(this, "_bus", new Map());
          }
          return (
            (0, i.Z)(e, [
              {
                key: "push",
                value: function (e) {
                  for (var t = 0; t < this._bus.size && this._bus.has(t); t++);
                  return this._bus.set(t, e), t;
                },
              },
              {
                key: "pop",
                value: function (e) {
                  var t = this._bus.get(e);
                  return this._bus.delete(e), t;
                },
              },
            ]),
            e
          );
        })(),
        d = (function () {
          function e(t) {
            (0, r.Z)(this, e),
              (0, s.Z)(this, "_queue", []),
              (0, s.Z)(this, "ready", !1),
              (this.ws = t);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "push",
                value: function (e) {
                  return this._queue.push(e), this.ready && this.popAndRun(), e;
                },
              },
              {
                key: "pop",
                value: function () {
                  return this._queue.shift();
                },
              },
              {
                key: "popAndRun",
                value: function () {
                  var e = this,
                    t = this.pop();
                  return (
                    t
                      ? ((this.ready = !1),
                        this.ws._send_busy(t.parent_msg),
                        this.ws._send(
                          this.ws._format_msg(
                            t.parent_msg,
                            "execute_input",
                            { code: t.code, execution_count: t.execution_cout },
                            "iopub"
                          )
                        ),
                        window.setTimeout(function () {
                          var o;
                          null === (o = e.ws.kernelSafe) ||
                            void 0 === o ||
                            o.dispatchEvent("eval.request", t);
                        }, 1))
                      : (this.ready = !0),
                    t
                  );
                },
              },
            ]),
            e
          );
        })(),
        u = 0,
        p = 1,
        h = (function () {
          function e(t, o) {
            var n = this;
            (0, r.Z)(this, e),
              (0, s.Z)(this, "onerror", null),
              (0, s.Z)(this, "readyState", p),
              (0, s.Z)(this, "message_count", 0),
              (0, s.Z)(this, "domNodeBus", new c()),
              (0, s.Z)(this, "_input_resolver", void 0),
              (this.url = t),
              (this.eval_queue = new d(this)),
              (window._basthonDomNodeBus = this.domNodeBus),
              setTimeout(function () {
                var e;
                null === (e = n.onopen) || void 0 === e || e.call(n);
              }, 500),
              o.then(this._connectEvents.bind(this));
          }
          return (
            (0, i.Z)(e, [
              {
                key: "kernelSafe",
                get: function () {
                  var e;
                  return null !== (e = this.kernel) && void 0 !== e && e.ready
                    ? this.kernel
                    : null;
                },
              },
              {
                key: "_connectEvents",
                value: function (e) {
                  var t = this;
                  this.kernel = e;
                  var o = function (e) {
                    var o = e.parent_msg;
                    t._send_idle(o),
                      t._send(
                        t._format_msg(
                          o,
                          "execute_reply",
                          { execution_count: e.execution_count, metadata: {} },
                          "shell"
                        )
                      ),
                      t.eval_queue.popAndRun();
                  };
                  this.kernel.addEventListener("eval.finished", function (e) {
                    "result" in e &&
                      t._send(
                        t._format_msg(
                          e.parent_msg,
                          "execute_result",
                          {
                            execution_count: e.execution_count,
                            data: e.result,
                            metadata: {},
                          },
                          "iopub"
                        )
                      ),
                      o(e);
                  }),
                    this.kernel.addEventListener("eval.error", function (e) {
                      t._send(
                        t._format_msg(
                          e.parent_msg,
                          "error",
                          { execution_count: e.execution_count, metadata: {} },
                          "iopub"
                        )
                      ),
                        o(e);
                    }),
                    this.kernel.addEventListener("eval.output", function (e) {
                      t._send(
                        t._format_msg(
                          e.parent_msg,
                          "stream",
                          { name: e.stream, text: e.content },
                          "iopub"
                        )
                      );
                    }),
                    this.kernel.addEventListener("eval.input", function (e) {
                      (t._input_resolver = e.resolve),
                        t._send(
                          t._format_msg(
                            e.parent_msg,
                            "input_request",
                            e.content,
                            "stdin"
                          )
                        );
                    }),
                    this.kernel.addEventListener("eval.display", function (e) {
                      var o;
                      switch (e.display_type) {
                        case "sympy":
                          o = { "text/latex": e.content };
                          break;
                        case "turtle":
                          var n = e.content;
                          n.setAttribute("width", "50%"),
                            n.setAttribute("height", "auto"),
                            (o = { "image/svg+xml": n.outerHTML });
                          break;
                        case "ocaml-canvas":
                        case "matplotlib":
                        case "p5":
                          var r = t.domNodeBus.push(e.content);
                          o = {
                            "application/javascript":
                              "element.append(window._basthonDomNodeBus.pop(".concat(
                                r,
                                "));"
                              ),
                          };
                          break;
                        case "multiple":
                          o = e.content;
                          break;
                        case "tutor":
                          o = { "text/html": e.content };
                          break;
                        default:
                          console.error(
                            "Not recognized display_type: " + e.display_type
                          );
                      }
                      t._send(
                        t._format_msg(
                          e.parent_msg,
                          "display_data",
                          { data: o, metadata: {}, transcient: {} },
                          "iopub"
                        )
                      );
                    }),
                    (0, n.Z)(
                      l().mark(function e() {
                        var o, n, r, i;
                        return l().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  null === (o = t.kernel) || void 0 === o
                                    ? void 0
                                    : o.loaded()
                                );
                              case 2:
                                return (
                                  (e.next = 4),
                                  null === (n = Jupyter) ||
                                  void 0 === n ||
                                  null === (r = n.notebook) ||
                                  void 0 === r ||
                                  null === (i = r.basthonGUI) ||
                                  void 0 === i
                                    ? void 0
                                    : i.loaded()
                                );
                              case 4:
                                (t.eval_queue.ready = !0),
                                  t.eval_queue.popAndRun();
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )();
                },
              },
              {
                key: "_send",
                value: function (e) {
                  var t;
                  null === (t = this.onmessage) ||
                    void 0 === t ||
                    t.call(this, { data: JSON.stringify(e) });
                },
              },
              {
                key: "_format_msg",
                value: function (e, t, o, n) {
                  var r,
                    i,
                    s,
                    a,
                    l,
                    c =
                      null !== (r = null == e ? void 0 : e.header) &&
                      void 0 !== r
                        ? r
                        : {},
                    d = null !== (i = c.session) && void 0 !== i ? i : "",
                    u = d + "_" + String(this.message_count);
                  return (
                    this.message_count++,
                    {
                      header: {
                        msg_id: u,
                        msg_type: t,
                        username:
                          null !== (s = c.username) && void 0 !== s
                            ? s
                            : "username",
                        session: d,
                        date: new Date().toISOString(),
                        version:
                          null !== (a = c.version) && void 0 !== a ? a : "5.2",
                      },
                      msg_id: u,
                      msg_type: t,
                      parent_header: c,
                      metadata: {},
                      content: o,
                      buffers: [],
                      channel: (n =
                        null !== (l = n) && void 0 !== l
                          ? l
                          : null == e
                          ? void 0
                          : e.channel),
                    }
                  );
                },
              },
              {
                key: "_send_busy",
                value: function (e) {
                  var t = this._format_msg(
                    e,
                    "status",
                    { execution_state: "busy" },
                    "iopub"
                  );
                  this._send(t);
                },
              },
              {
                key: "_send_idle",
                value: function (e) {
                  var t = this._format_msg(
                    e,
                    "status",
                    { execution_state: "idle" },
                    "iopub"
                  );
                  this._send(t);
                },
              },
              {
                key: "send",
                value: function (e) {
                  var t,
                    o,
                    n,
                    r = (e = JSON.parse(e)).header,
                    i = e.channel,
                    s = r.msg_type;
                  switch (i) {
                    case "shell":
                      switch (s) {
                        case "kernel_info_request":
                          this._send_busy(e),
                            this._send_idle(e),
                            this._send(
                              this._format_msg(
                                e,
                                "kernel_info_reply",
                                { status: "ok" },
                                "shell"
                              )
                            );
                          break;
                        case "execute_request":
                          var a = e.content.code;
                          this.eval_queue.push({ code: a, parent_msg: e });
                          break;
                        case "complete_request":
                          this._send_busy(e);
                          var l = e.content.code.slice(0, e.content.cursor_pos),
                            c =
                              null === (t = this.kernelSafe) || void 0 === t
                                ? void 0
                                : t.complete(l);
                          if (null == c || !c.length) return;
                          var d = c[1],
                            u = c[0];
                          this._send_busy(e),
                            this._send(
                              this._format_msg(
                                e,
                                "complete_reply",
                                {
                                  status: "ok",
                                  matches: u,
                                  cursor_start: d,
                                  cursor_end: null,
                                },
                                "shell"
                              )
                            ),
                            this._send_idle(e);
                      }
                      break;
                    case "iopub":
                      break;
                    case "stdin":
                      "input_reply" === s &&
                        null != this._input_resolver &&
                        this._input_resolver(
                          null === (o = e) ||
                            void 0 === o ||
                            null === (n = o.content) ||
                            void 0 === n
                            ? void 0
                            : n.value
                        );
                  }
                },
              },
              {
                key: "close",
                value: function () {
                  var e;
                  null === (e = this.onclose) || void 0 === e || e.call(this);
                },
              },
            ]),
            e
          );
        })();
    },
    46013: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(4631), o(57915), o(34960)]),
        void 0 ===
          (r = function (e, t, o, n) {
            "use strict";
            var r = function (t) {
              var o = e("<div/>")
                  .addClass("modal")
                  .addClass("fade")
                  .attr("role", "dialog"),
                r = e("<div/>").addClass("modal-dialog").appendTo(o),
                i = e("<div/>").addClass("modal-content").appendTo(r);
              "string" == typeof t.body &&
                !1 !== t.sanitize &&
                (t.body = e("<p/>").text(t.body)),
                i
                  .append(
                    e("<div/>")
                      .addClass("modal-header")
                      .mousedown(function () {
                        e(".modal").draggable({ handle: ".modal-header" });
                      })
                      .append(
                        e("<button>")
                          .attr("type", "button")
                          .attr("aria-label", n.msg._("close"))
                          .addClass("close")
                          .attr("data-dismiss", "modal")
                          .attr("aria-hidden", "true")
                          .html("&times;")
                      )
                      .append(
                        e("<h4/>")
                          .addClass("modal-title")
                          .text(t.title || "")
                      )
                  )
                  .append(
                    e("<div/>")
                      .addClass("modal-body")
                      .append(t.body || e("<p/>"))
                  );
              var s,
                a = e("<div/>").addClass("modal-footer");
              for (var l in t.buttons) {
                var c = t.buttons[l],
                  d = e("<button/>")
                    .addClass("btn btn-default btn-sm")
                    .attr("data-dismiss", "modal")
                    .text(n.msg.translate(l).fetch());
                c.id && d.attr("id", c.id),
                  c.click && d.click(e.proxy(c.click, i)),
                  c.class && d.addClass(c.class),
                  a.append(d),
                  t.default_button && l === t.default_button && (s = d);
              }
              return (
                t.default_button || (s = a.find("button").last()),
                i.append(a),
                o.on("shown.bs.modal", function () {
                  setTimeout(function () {
                    s.focus(), t.open && e.proxy(t.open, o)();
                  }, 0);
                }),
                (void 0 === t.destroy || t.destroy) &&
                  o.on("hidden.bs.modal", function () {
                    o.remove();
                  }),
                o.on("hidden.bs.modal", function () {
                  if (t.notebook) {
                    var o = t.notebook.get_selected_cell();
                    o && o.select();
                  }
                  t.keyboard_manager &&
                    (t.keyboard_manager.enable(),
                    t.keyboard_manager.command_mode()),
                    t.focus_button && e(t.focus_button).focus();
                }),
                t.keyboard_manager && t.keyboard_manager.disable(),
                void 0 === t.backdrop && (t.backdrop = "static"),
                o.modal(t)
              );
            };
            return {
              modal: r,
              kernel_modal: function (t) {
                e(".kernel-modal").modal("hide");
                var o = r(t);
                return o.addClass("kernel-modal"), o;
              },
              edit_metadata: function (o) {
                o.name = o.name || "Cell";
                var i,
                  s = e("<div/>").css("color", "red"),
                  a = n.msg._(
                    "Manually edit the JSON below to manipulate the metadata for this cell."
                  ),
                  l = n.msg._(
                    "Manually edit the JSON below to manipulate the metadata for this notebook."
                  ),
                  c = n.msg._(
                    " We recommend putting custom metadata attributes in an appropriately named substructure, so they don't conflict with those of others."
                  );
                i = "Notebook" === o.name ? l + c : a + c;
                var d,
                  u = e("<textarea/>")
                    .attr("rows", "13")
                    .attr("cols", "80")
                    .attr("name", "metadata")
                    .text(JSON.stringify(o.md || {}, null, 2)),
                  p = e("<div/>")
                    .attr("title", n.msg._("Edit the metadata"))
                    .append(
                      e("<form/>").append(
                        e("<fieldset/>")
                          .append(e("<label/>").attr("for", "metadata").text(i))
                          .append(s)
                          .append(e("<br/>"))
                          .append(u)
                      )
                    ),
                  h = t.fromTextArea(u[0], {
                    theme:
                      "dark" === o.notebook.theme() ? "darcula" : "ipython",
                    lineNumbers: !0,
                    matchBrackets: !0,
                    indentUnit: 2,
                    autoIndent: !0,
                    mode: "application/json",
                  });
                (d =
                  "Notebook" === o.name
                    ? n.msg._("Edit Notebook Metadata")
                    : n.msg._("Edit Cell Metadata")),
                  n.msg._("Cancel"),
                  n.msg._("Edit"),
                  n.msg._("OK"),
                  n.msg._("Apply");
                var _ = r({
                  title: d,
                  body: p,
                  default_button: "Cancel",
                  buttons: {
                    Cancel: {},
                    Edit: {
                      class: "btn-primary",
                      click: function () {
                        var e;
                        try {
                          e = JSON.parse(h.getValue());
                        } catch (e) {
                          return (
                            console.log(e),
                            s.text(
                              n.msg._("WARNING: Could not save invalid JSON.")
                            ),
                            !1
                          );
                        }
                        o.callback(e);
                      },
                    },
                  },
                  notebook: o.notebook,
                  keyboard_manager: o.keyboard_manager,
                });
                _.on("shown.bs.modal", function () {
                  h.refresh();
                }),
                  _.on("hide.bs.modal", function () {
                    o.edit_metadata_button && o.edit_metadata_button.focus();
                  });
              },
              edit_attachments: function (t) {
                var o, i;
                if (0 == Object.keys(t.attachments).length)
                  (o = n.msg._("There are no attachments for this cell.")),
                    (i = e("<div>"));
                else {
                  (o = n.msg._("Current cell attachments")),
                    (i = e("<div>")
                      .addClass("list_container")
                      .append(
                        e("<div>")
                          .addClass("row list_header")
                          .append(e("<div>").text(n.msg._("Attachments")))
                      ));
                  var s = {};
                  !(function o() {
                    for (var r in (e(i).find(".row").remove(), t.attachments)) {
                      var a,
                        l = Object.keys(t.attachments[r])[0],
                        c = r in s;
                      !(function () {
                        var t = r;
                        (a = e("<button>")
                          .addClass("btn btn-default btn-xs")
                          .css("display", "inline-block")),
                          c
                            ? (a
                                .attr("title", n.msg._("Restore"))
                                .append(e("<i>").addClass("fa fa-plus")),
                              a.click(function () {
                                delete s[t], o();
                              }))
                            : (a
                                .attr("title", n.msg._("Delete"))
                                .addClass("btn-danger")
                                .append(e("<i>").addClass("fa fa-trash")),
                              a.click(function () {
                                (s[t] = !0), o();
                              }));
                      })();
                      var d = e("<div>")
                        .addClass("col-md-12 att_row")
                        .append(
                          e("<div>")
                            .addClass("row")
                            .append(
                              e("<div>").addClass("att-name col-xs-4").text(r)
                            )
                            .append(
                              e("<div>").addClass("col-xs-4 text-muted").text(l)
                            )
                            .append(
                              e("<div>")
                                .addClass("item-buttons pull-right")
                                .append(a)
                            )
                        );
                      c &&
                        d
                          .find(".att-name")
                          .css("text-decoration", "line-through"),
                        i.append(
                          e("<div>").addClass("list_item row").append(d)
                        );
                    }
                  })();
                }
                var a,
                  l = e("<div/>")
                    .attr("title", n.msg._("Edit attachments"))
                    .append(o)
                    .append("<br />")
                    .append(i);
                (a =
                  "Notebook" === t.name
                    ? n.msg._("Edit Notebook Attachments")
                    : n.msg._("Edit Cell Attachments")),
                  r({
                    title: a,
                    body: l,
                    buttons: {
                      Apply: {
                        class: "btn-primary",
                        click: function () {
                          for (var e in s) delete t.attachments[e];
                          t.callback(t.attachments);
                        },
                      },
                      Cancel: {},
                    },
                    notebook: t.notebook,
                    keyboard_manager: t.keyboard_manager,
                  });
              },
              insert_image: function (t) {
                var o = n.msg._("Select a file to insert."),
                  i = e("<input/>")
                    .attr("type", "file")
                    .attr("accept", "image/*")
                    .attr("name", "file")
                    .on("change", function (t) {
                      var o = e(a).find("#btn_ok");
                      this.files.length > 0
                        ? o.removeClass("disabled")
                        : o.addClass("disabled");
                    }),
                  s = e("<div/>")
                    .attr("title", n.msg._("Edit attachments"))
                    .append(
                      e('<form id="insert-image-form" />').append(
                        e("<fieldset/>")
                          .append(e("<label/>").attr("for", "file").text(o))
                          .append(e("<br/>"))
                          .append(i)
                      )
                    ),
                  a = r({
                    title: n.msg._("Select a file"),
                    body: s,
                    buttons: {
                      OK: {
                        id: "btn_ok",
                        class: "btn-primary disabled",
                        click: function () {
                          t.callback(i[0].files[0]);
                        },
                      },
                      Cancel: {},
                    },
                    notebook: t.notebook,
                    keyboard_manager: t.keyboard_manager,
                  });
              },
            };
          }.apply(t, n)) || (e.exports = r);
    },
    10267: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(3574)]),
        void 0 ===
          (r = function (e, t) {
            "use strict";
            window._Events ||
              ((window._Events = function () {}),
              (window._events = new window._Events())),
              (t.Events = window._Events),
              (t.events = window._events);
            var o = e([window._events]);
            return (
              (o._original_trigger = o.trigger),
              (o.trigger = function (e, t) {
                try {
                  this._original_trigger.apply(this, arguments);
                } catch (t) {
                  console.error(
                    "Exception in event handler for " + e,
                    t,
                    arguments
                  );
                }
              }),
              o
            );
          }.apply(t, n)) || (e.exports = r);
    },
    34960: (e, t, o) => {
      var n, r;
      (n = [o(42353)]),
        void 0 ===
          (r = function (e) {
            "use strict";
            var t = new e(o(16920));
            return (t._ = t.gettext), (t.msg = t), t;
          }.apply(t, n)) || (e.exports = r);
    },
    58812: (e, t, o) => {
      var n, r;
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          i(e)
        );
      }
      (n = [o(19755), o(54499), o(59050)]),
        void 0 ===
          (r = function (e, t, o) {
            "use strict";
            var n = {
                a: 65,
                b: 66,
                c: 67,
                d: 68,
                e: 69,
                f: 70,
                g: 71,
                h: 72,
                i: 73,
                j: 74,
                k: 75,
                l: 76,
                m: 77,
                n: 78,
                o: 79,
                p: 80,
                q: 81,
                r: 82,
                s: 83,
                t: 84,
                u: 85,
                v: 86,
                w: 87,
                x: 88,
                y: 89,
                z: 90,
                "1 !": 49,
                "2 @": 50,
                "3 #": 51,
                "4 $": 52,
                "5 %": 53,
                "6 ^": 54,
                "7 &": 55,
                "8 *": 56,
                "9 (": 57,
                "0 )": 48,
                "[ {": 219,
                "] }": 221,
                "` ~": 192,
                ", <": 188,
                ". >": 190,
                "/ ?": 191,
                "\\ |": 220,
                "' \"": 222,
                numpad0: 96,
                numpad1: 97,
                numpad2: 98,
                numpad3: 99,
                numpad4: 100,
                numpad5: 101,
                numpad6: 102,
                numpad7: 103,
                numpad8: 104,
                numpad9: 105,
                multiply: 106,
                add: 107,
                subtract: 109,
                decimal: 110,
                divide: 111,
                f1: 112,
                f2: 113,
                f3: 114,
                f4: 115,
                f5: 116,
                f6: 117,
                f7: 118,
                f8: 119,
                f9: 120,
                f10: 121,
                f11: 122,
                f12: 123,
                f13: 124,
                f14: 125,
                f15: 126,
                backspace: 8,
                tab: 9,
                enter: 13,
                shift: 16,
                ctrl: 17,
                alt: 18,
                meta: 91,
                capslock: 20,
                esc: 27,
                space: 32,
                pageup: 33,
                pagedown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                insert: 45,
                delete: 46,
                numlock: 144,
              },
              r = t.browser[0],
              s = t.platform;
            "Firefox" === r || "Opera" === r || "Netscape" === r
              ? e.extend(n, {
                  "; :": 59,
                  "= +": 61,
                  "- _": 173,
                  meta: 224,
                  minus: 173,
                })
              : ("Safari" !== r && "Chrome" !== r && "MSIE" !== r) ||
                e.extend(n, { "; :": 186, "= +": 187, "- _": 189, minus: 189 });
            var a = {},
              l = {};
            for (var c in n) {
              var d = c.split(" ");
              if (1 === d.length) {
                var u = d[0];
                (a[u] = n[u]), (l[n[u]] = u);
              } else {
                var p = d[0],
                  h = d[1];
                (a[p] = n[c]), (a[h] = n[c]), (l[n[c]] = p);
              }
            }
            var _ = function (e) {
                return l[a[e]];
              },
              m = function e(t) {
                if (
                  -1 !==
                  (t = (t = (t = (t =
                    "MacOS" === s
                      ? t.toLowerCase().replace("cmdtrl-", "cmd-")
                      : t.toLowerCase().replace("cmdtrl-", "ctrl-"))
                    .toLowerCase()
                    .replace("cmd", "meta")).replace(/-$/, "minus")).replace(
                    /,$/,
                    "comma"
                  )).indexOf(",")
                ) {
                  var n = t.split(",");
                  return (n = o.map(n, e)), t;
                }
                var r = (t = t.replace(/comma/g, ",")).split("-");
                if (1 === r.length) return _(r[0]);
                var i = r.slice(0, -1),
                  a = _(r[r.length - 1]);
                return i.sort(), i.join("-") + "-" + a;
              },
              f = function (e) {
                var t = "",
                  o = l[e.which];
                return (
                  e.altKey && "alt" !== o && (t += "alt-"),
                  e.ctrlKey && "ctrl" !== o && (t += "ctrl-"),
                  e.metaKey && "meta" !== o && (t += "meta-"),
                  e.shiftKey && "shift" !== o && (t += "shift-"),
                  t + o
                );
              },
              g = function (e, t, o, n, r, i) {
                (i = i || "command"),
                  (this._shortcuts = {}),
                  (this._defaults_bindings = []),
                  (this.delay = e || 800),
                  (this.events = t),
                  (this.actions = o),
                  this.actions.extend_env(n),
                  (this._queue = []),
                  (this._cleartimeout = null),
                  (this._config = r),
                  (this._mode = i),
                  Object.seal(this);
              };
            (g.prototype.clearsoon = function () {
              var e = this;
              clearTimeout(this._cleartimeout),
                (this._cleartimeout = setTimeout(function () {
                  e.clearqueue();
                }, this.delay));
            }),
              (g.prototype.clearqueue = function () {
                (this._queue = []), clearTimeout(this._cleartimeout);
              });
            var b = function e(t) {
              var n = {};
              return (
                o.forEach(t, function (t, r) {
                  if ("string" == typeof t) n[r] = t;
                  else {
                    var i = e(t);
                    o.forEach(i, function (e, t) {
                      n[r + "," + t] = i[t];
                    });
                  }
                }),
                n
              );
            };
            return (
              (g.prototype.get_action_shortcuts = function (e) {
                var t = b(this._shortcuts),
                  n = [];
                return (
                  o.forEach(t, function (t, o) {
                    t === e && n.push(o);
                  }),
                  n
                );
              }),
              (g.prototype.get_action_shortcut = function (e) {
                var t = this.get_action_shortcuts(e);
                if (t.length > 0) return t[0];
              }),
              (g.prototype.help = function () {
                var e = this,
                  t = [],
                  n = b(this._shortcuts);
                return (
                  o.forEach(n, function (o, n) {
                    var r = e.actions.get(o),
                      i = r.help || "== no help ==",
                      s = r.help_index;
                    if (i) {
                      var a = r.shortstring || n;
                      t.push({ shortcut: a, help: i, help_index: s });
                    }
                  }),
                  t.sort(function (e, t) {
                    return e.help_index === t.help_index
                      ? e.shortcut === t.shortcut
                        ? 0
                        : e.shortcut > t.shortcut
                        ? 1
                        : -1
                      : void 0 === e.help_index || e.help_index > t.help_index
                      ? 1
                      : -1;
                  }),
                  t
                );
              }),
              (g.prototype.clear_shortcuts = function () {
                this._shortcuts = {};
              }),
              (g.prototype.get_shortcut = function (e) {
                return (
                  "string" == typeof e && (e = e.split(",")),
                  this._get_leaf(e, this._shortcuts)
                );
              }),
              (g.prototype._get_leaf = function (e, t) {
                return 1 === e.length
                  ? t[e[0]]
                  : "string" != typeof t[e[0]]
                  ? this._get_leaf(e.slice(1), t[e[0]])
                  : null;
              }),
              (g.prototype.set_shortcut = function (e, t) {
                if ("string" != typeof t)
                  throw new Error("action is not a string", t);
                return (
                  "string" == typeof e && (e = e.split(",")),
                  this._set_leaf(e, t, this._shortcuts)
                );
              }),
              (g.prototype._is_leaf = function (e, t) {
                if (1 === e.length) return "string" == typeof t[e[0]];
                var o = t[e[0]];
                return this._is_leaf(e.slice(1), o);
              }),
              (g.prototype._remove_leaf = function (e, t, n) {
                if (1 === e.length) {
                  if ("string" != typeof t[e[0]])
                    throw new Error("try to delete non-leaf");
                  delete t[e[0]];
                } else
                  this._remove_leaf(e.slice(1), t[e[0]], n),
                    0 === o.keys(t[e[0]]).length && delete t[e[0]];
              }),
              (g.prototype.is_available_shortcut = function (e) {
                var t = e.split(",");
                return this._is_available_shortcut(t, this._shortcuts);
              }),
              (g.prototype._is_available_shortcut = function (e, t) {
                var o = t[e[0]];
                return (
                  !!e[0] &&
                  (void 0 === o ||
                    ("string" != typeof o &&
                      this._is_available_shortcut(e.slice(1), o)))
                );
              }),
              (g.prototype._set_leaf = function (e, t, o) {
                var n = o[e[0]];
                return 1 === e.length
                  ? (void 0 !== n &&
                      "string" != typeof n &&
                      console.warn(
                        "[warning], you are overriting a long shortcut with a shorter one"
                      ),
                    (o[e[0]] = t),
                    !0)
                  : "string" == typeof n
                  ? (console.warn(
                      "you are trying to set a shortcut that will be shadowedby a more specific one. Aborting for :",
                      t,
                      "the following will take precedence",
                      n
                    ),
                    !1)
                  : ((o[e[0]] = o[e[0]] || {}),
                    this._set_leaf(e.slice(1), t, o[e[0]]),
                    !0);
              }),
              (g.prototype._persist_shortcut = function (e, t) {
                (e = e.toLowerCase()), this.add_shortcut(e, t);
                var o = { keys: {} };
                (o.keys[this._mode] = { bind: {} }),
                  (o.keys[this._mode].bind[e] = t),
                  this._config.update(o);
              }),
              (g.prototype._persist_remove_shortcut = function (e) {
                (e = e.toLowerCase()), this.remove_shortcut(e);
                var t = { keys: {} };
                if (
                  ((t.keys[this._mode] = { bind: {} }),
                  (t.keys[this._mode].bind[e] = null),
                  this._config.update(t),
                  -1 !== this._defaults_bindings.indexOf(e))
                ) {
                  var o =
                    (this._config.data.keys || {})[this._mode].unbind || [];
                  if (-1 === o.indexOf(e)) {
                    var n = o.concat(e),
                      r = { keys: {} };
                    (r.keys[this._mode] = { unbind: n }),
                      console.warn("up:", r),
                      this._config.update(r);
                  }
                }
              }),
              (g.prototype.add_shortcut = function (e, t, o) {
                var n = this.actions.get_name(t);
                if (!n) {
                  if ("string" != typeof t)
                    throw new Error("does not know how to deal with : " + t);
                  console.log(
                    "Unknown action '" +
                      t +
                      "' for shortcut " +
                      e +
                      "; it may be defined by an extension which is not yet loaded."
                  ),
                    (n = t);
                }
                var r = m(e);
                this.set_shortcut(r, n),
                  o || this.events.trigger("rebuild.QuickHelp");
              }),
              (g.prototype.add_shortcuts = function (e) {
                var t = this;
                o.forEach(e, function (e, o) {
                  t.add_shortcut(o, e, !0);
                }),
                  this.events.trigger("rebuild.QuickHelp");
              }),
              (g.prototype._add_default_shortcuts = function (e) {
                (this._defaults_bindings = this._defaults_bindings.concat(
                  Object.keys(e)
                )),
                  this.add_shortcuts(e);
              }),
              (g.prototype.remove_shortcut = function (e, t) {
                if (e) {
                  "string" == typeof (e = m(e)) && (e = e.split(","));
                  try {
                    this._remove_leaf(e, this._shortcuts),
                      t || this.events.trigger("rebuild.QuickHelp");
                  } catch (t) {
                    throw new Error(
                      "trying to remove a non-existent shortcut",
                      e,
                      i(e)
                    );
                  }
                } else console.warn("trying to remove empty shortcut");
              }),
              (g.prototype.call_handler = function (e) {
                if (
                  (this.clearsoon(),
                  (function (e) {
                    var t = l[e.which];
                    return (
                      (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) &&
                      ("alt" === t ||
                        "ctrl" === t ||
                        "meta" === t ||
                        "shift" === t)
                    );
                  })(e))
                )
                  return !0;
                var t = f(e);
                this._queue.push(t);
                var o = this.get_shortcut(this._queue);
                return null == o
                  ? (this.clearqueue(), !0)
                  : !!this.actions.exists(o) &&
                      (e.preventDefault(),
                      this.clearqueue(),
                      this.actions.call(o, e));
              }),
              (g.prototype.handles = function (e) {
                var t = f(e);
                return void 0 !== this.get_shortcut(this._queue.concat(t));
              }),
              {
                keycodes: a,
                inv_keycodes: l,
                ShortcutManager: g,
                normalize_key: _,
                normalize_shortcut: m,
                shortcut_to_event: function (t, o) {
                  o = o || "keydown";
                  var n = (t = (t = m(t)).replace(/-$/, "minus")).split("-"),
                    r = n.slice(0, -1),
                    i = n[n.length - 1],
                    s = { which: a[i] };
                  return (
                    -1 !== r.indexOf("alt") && (s.altKey = !0),
                    -1 !== r.indexOf("ctrl") && (s.ctrlKey = !0),
                    -1 !== r.indexOf("meta") && (s.metaKey = !0),
                    -1 !== r.indexOf("shift") && (s.shiftKey = !0),
                    e.Event(o, s)
                  );
                },
                event_to_shortcut: f,
              }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    3574: (e, t, o) => {
      var n,
        r = r || {};
      window.Jupyter = r;
      var i = function (e, t) {
          Object.defineProperty(r, e, {
            get: function () {
              return (
                console.warn(
                  "accessing `" +
                    e +
                    '` is deprecated. Use `requirejs("' +
                    t +
                    '")`'
                ),
                requirejs(t)
              );
            },
            enumerable: !0,
            configurable: !1,
          });
        },
        s = function (e, t) {
          Object.defineProperty(r, e, {
            get: function () {
              return (
                console.warn(
                  "accessing `" +
                    e +
                    '` is deprecated. Use `requirejs("' +
                    t +
                    '").' +
                    e +
                    "`"
                ),
                requirejs(t)[e]
              );
            },
            enumerable: !0,
            configurable: !1,
          });
        };
      void 0 ===
        (n = function () {
          "use strict";
          return (
            i("utils", "base/js/utils"),
            i("security", "base/js/security"),
            i("keyboard", "base/js/keyboard"),
            i("dialog", "base/js/dialog"),
            i("mathjaxutils", "notebook/js/mathjaxutils"),
            s("CommManager", "services/kernels/comm"),
            s("Comm", "services/kernels/comm"),
            s("NotificationWidget", "base/js/notificationwidget"),
            s("Kernel", "services/kernels/kernel"),
            s("Session", "services/sessions/session"),
            s("LoginWidget", "auth/js/loginwidget"),
            s("Page", "base/js/page"),
            s("TextCell", "notebook/js/textcell"),
            s("OutputArea", "notebook/js/outputarea"),
            s("KeyboardManager", "notebook/js/keyboardmanager"),
            s("Completer", "notebook/js/completer"),
            s("Notebook", "notebook/js/notebook"),
            s("Tooltip", "notebook/js/tooltip"),
            s("Toolbar", "notebook/js/toolbar"),
            s("SaveWidget", "notebook/js/savewidget"),
            s("Pager", "notebook/js/pager"),
            s("QuickHelp", "notebook/js/quickhelp"),
            s("MarkdownCell", "notebook/js/textcell"),
            s("RawCell", "notebook/js/textcell"),
            s("Cell", "notebook/js/cell"),
            s("MainToolBar", "notebook/js/maintoolbar"),
            s("NotebookNotificationArea", "notebook/js/notificationarea"),
            s("NotebookTour", "notebook/js/tour"),
            s("MenuBar", "notebook/js/menubar"),
            s("SessionList", "tree/js/sessionlist"),
            (r.version = "7.0.0.dev0"),
            (r._target = "_blank"),
            r
          );
        }.call(t, o, t, e)) || (e.exports = n);
    },
    45697: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(4215)]),
        void 0 ===
          (r = function (e, t) {
            "use strict";
            var o = t.NotificationWidget,
              n = function (t, o) {
                (this.selector = t),
                  (this.events = o.events),
                  void 0 !== this.selector && (this.element = e(t)),
                  (this.widget_dict = {});
              };
            return (
              (n.prototype.widget = function (e) {
                return void 0 === this.widget_dict[e]
                  ? this.new_notification_widget(e)
                  : this.get_widget(e);
              }),
              (n.prototype.get_widget = function (e) {
                if (void 0 === this.widget_dict[e])
                  throw new Error("no widgets with this name");
                return this.widget_dict[e];
              }),
              (n.prototype.new_notification_widget = function (t) {
                if (void 0 !== this.widget_dict[t])
                  throw new Error("widget with that name already exists!");
                var n = e("<div/>").attr("id", "notification_" + t);
                return (
                  e(this.selector).append(n),
                  (this.widget_dict[t] = new o("#notification_" + t)),
                  this.widget_dict[t]
                );
              }),
              { NotificationArea: n }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    4215: (e, t, o) => {
      var n, r;
      (n = [o(19755)]),
        void 0 ===
          (r = function (e) {
            "use strict";
            var t = function (t) {
              (this.selector = t),
                (this.timeout = null),
                (this.busy = !1),
                void 0 !== this.selector &&
                  ((this.element = e(t)), this.style()),
                this.element.hide(),
                (this.inner = e("<span/>")),
                this.element.append(this.inner);
            };
            return (
              (t.prototype.style = function () {
                this.element.addClass(
                  "notification_widget btn btn-xs navbar-btn"
                );
              }),
              (t.prototype.hide = function () {
                var e = this;
                this.element.fadeOut(100, function () {
                  e.inner.text("");
                });
              }),
              (t.prototype.set_message = function (e, t, o, n) {
                (n = n || {}),
                  this.element.unbind("click"),
                  this.inner.attr("class", n.icon),
                  this.inner.attr("title", n.title),
                  this.inner.text(e),
                  this.element.fadeIn(100),
                  this.element.removeClass(),
                  this.style(),
                  n.class && this.element.addClass(n.class),
                  null !== this.timeout &&
                    (clearTimeout(this.timeout), (this.timeout = null));
                var r = this;
                void 0 !== t &&
                  t >= 0 &&
                  (this.timeout = setTimeout(function () {
                    r.element.fadeOut(100, function () {
                      r.inner.text("");
                    }),
                      r.element.unbind("click"),
                      (r.timeout = null);
                  }, t)),
                  void 0 === o &&
                    (o = function () {
                      return !0;
                    }),
                  this.element.click(function () {
                    !1 !== o() &&
                      (r.element.fadeOut(100, function () {
                        r.inner.text("");
                      }),
                      r.element.unbind("click")),
                      null !== r.timeout &&
                        (clearTimeout(r.timeout), (r.timeout = null));
                  });
              }),
              (t.prototype.info = function (e, t, o, n) {
                ((n = n || {}).class = n.class + " info"),
                  (t = t || 3500),
                  this.set_message(e, t, o, n);
              }),
              (t.prototype.warning = function (e, t, o, n) {
                ((n = n || {}).class = n.class + " warning"),
                  this.set_message(e, t, o, n);
              }),
              (t.prototype.danger = function (e, t, o, n) {
                ((n = n || {}).class = n.class + " danger"),
                  this.set_message(e, t, o, n);
              }),
              (t.prototype.get_message = function () {
                return this.inner.html();
              }),
              { NotificationWidget: t }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    65566: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(10267)]),
        void 0 ===
          (r = function (e, t) {
            "use strict";
            var o = function (t, o) {
              (this.header_div_element = e(t || "div#header")),
                (this.site_div_element = e(o || "div#site")),
                this.bind_events();
            };
            return (
              (o.prototype.bind_events = function () {
                var o = e.proxy(this._resize_site, this);
                e(window).resize(o),
                  e(document).ready(o),
                  t.on("resize-header.Page", o);
              }),
              (o.prototype.show = function () {
                this.show_header(), this.show_site();
              }),
              (o.prototype.show_header = function () {
                this.header_div_element.css("display", "block");
              }),
              (o.prototype.show_site = function () {
                this.site_div_element.css("display", "block"),
                  this._resize_site();
              }),
              (o.prototype._resize_site = function (t) {
                (t && t.target && t.target.tagName) ||
                  e("div#site").height(
                    e(window).height() - e("#header").height()
                  );
              }),
              { Page: o }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    57263: (e, t, o) => {
      var n, r;
      (n = [o(10267), o(3574)]),
        void 0 ===
          (r = function (e, t) {
            "use strict";
            var o = {
              app_initialized: new Promise(function (t, o) {
                e.on("app_initialized.NotebookApp", function () {
                  t("NotebookApp");
                }),
                  e.on("app_initialized.DashboardApp", function () {
                    t("DashboardApp");
                  });
              }),
            };
            return (t.promises = o), o;
          }.apply(t, n)) || (e.exports = r);
    },
    55131: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(69619)]),
        void 0 ===
          (r = function (e, t) {
            "use strict";
            var o,
              n = function (e) {
                return e;
              };
            t &&
              (((o = t.html).html4 = t.html4),
              (o.sanitizeStylesheet = t.sanitizeStylesheet));
            var r = function (e, t, n, r, i) {
                for (var s = o.html4.ATTRIBS, a = 0; a < t.length; a += 2) {
                  var l = t[a];
                  if ("data-" == l.substr(0, 5)) {
                    var c = "*::" + l;
                    s.hasOwnProperty(c) || (s[c] = 0);
                  }
                }
                return (s["img::src"] = 0), o.sanitizeAttribs(e, t, n, r, i);
              },
              i = function (t, i) {
                var s = o.html4;
                i
                  ? ((s.ELEMENTS.style &= ~s.eflags.UNSAFE),
                    (s.ATTRIBS.style = s.atype.STYLE))
                  : ((s.ELEMENTS.style |= s.eflags.UNSAFE),
                    (s.ATTRIBS.style = s.atype.SCRIPT));
                var a = function (e, t) {
                    console.log("HTML Sanitizer", e, t);
                  },
                  l = function (e, t) {
                    if (!(s.ELEMENTS[e] & s.eflags.UNSAFE))
                      return { attribs: r(e, t, n, n, a) };
                    a(e + " removed", { change: "removed", tagName: e });
                  },
                  c = o.sanitizeWithPolicy(t, l);
                return (
                  i &&
                    (c = (function (t, r) {
                      var i = e("<div/>").append(t),
                        s = i.find("style");
                      return s.length
                        ? (s.each(function (e, t) {
                            t.innerHTML = (function (e, t) {
                              return o.sanitizeStylesheet(
                                window.location.pathname,
                                e,
                                {
                                  containerClass: null,
                                  idSuffix: "",
                                  tagPolicy: t,
                                  virtualizeAttrName: n,
                                },
                                n
                              );
                            })(t.innerHTML, r);
                          }),
                          i.html())
                        : t;
                    })(c, l)),
                  c
                );
              };
            return {
              caja: o,
              sanitize_html_and_parse: function (t, o) {
                var n = i(t, o),
                  r = e.htmlPrefilter;
                e.htmlPrefilter = function (e) {
                  return e;
                };
                try {
                  return e.parseHTML(n);
                } finally {
                  e.htmlPrefilter = r;
                }
              },
              sanitize_html: i,
            };
          }.apply(t, n)) || (e.exports = r);
    },
    54499: (e, t, o) => {
      var n, r;
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          i(e)
        );
      }
      (n = [o(19755), o(71302), o(4631), o(30381), o(59050), o(52539)]),
        (r = function (e, t, n, r, s) {
          "use strict";
          t.requirejs.config({ baseUrl: "static/" });
          var a = [],
            l = function (e) {
              var t = "nbextensions/" + e;
              return a.indexOf(t) >= 0;
            },
            c = function (e) {
              return new Promise(function (o, n) {
                var r = "nbextensions/" + e;
                t.requirejs(
                  [r],
                  function (t) {
                    l(e)
                      ? (console.log("Loaded extension already: " + e), o(t))
                      : (console.log("Loading extension: " + e),
                        t &&
                          t.load_ipython_extension &&
                          Promise.resolve(t.load_ipython_extension())
                            .then(function () {
                              o(t);
                            })
                            .catch(n),
                        a.push(r));
                  },
                  function (e) {
                    n(e);
                  }
                );
              });
            },
            d = function () {
              return (
                console.log("load_extensions", arguments),
                Promise.all(Array.prototype.map.call(arguments, c)).catch(
                  function (e) {
                    console.error(
                      "Failed to load extension" +
                        (e.requireModules.length > 1 ? "s" : "") +
                        ":",
                      e.requireModules,
                      e
                    );
                  }
                )
              );
            };
          function u(e) {
            var t = [];
            return (
              Object.keys(e).forEach(function (o) {
                e[o] && t.push(o);
              }),
              t
            );
          }
          var p = [
            "ansi-black",
            "ansi-red",
            "ansi-green",
            "ansi-yellow",
            "ansi-blue",
            "ansi-magenta",
            "ansi-cyan",
            "ansi-white",
            "ansi-black-intense",
            "ansi-red-intense",
            "ansi-green-intense",
            "ansi-yellow-intense",
            "ansi-blue-intense",
            "ansi-magenta-intense",
            "ansi-cyan-intense",
            "ansi-white-intense",
          ];
          function h(e, t, o, n, r, i, s) {
            if (e) {
              var a = [],
                l = [];
              if (
                (n && "number" == typeof t && 0 <= t && t < 8 && (t += 8), i)
              ) {
                var c = [o, t];
                (t = c[0]), (o = c[1]);
              }
              "number" == typeof t
                ? a.push(p[t] + "-fg")
                : t.length
                ? l.push("color: rgb(" + t + ")")
                : i && a.push("ansi-default-inverse-fg"),
                "number" == typeof o
                  ? a.push(p[o] + "-bg")
                  : o.length
                  ? l.push("background-color: rgb(" + o + ")")
                  : i && a.push("ansi-default-inverse-bg"),
                n && a.push("ansi-bold"),
                r && a.push("ansi-underline"),
                a.length || l.length
                  ? (s.push("<span"),
                    a.length && s.push(' class="' + a.join(" ") + '"'),
                    l.length && s.push(' style="' + l.join("; ") + '"'),
                    s.push(">"),
                    s.push(e),
                    s.push("</span>"))
                  : s.push(e);
            }
          }
          function _(e) {
            var t,
              o,
              n,
              r = e.shift();
            if (2 === r && e.length >= 3) {
              if (
                [(t = e.shift()), (o = e.shift()), (n = e.shift())].some(
                  function (e) {
                    return e < 0 || 255 < e;
                  }
                )
              )
                throw new RangeError("Invalid range for RGB colors");
            } else {
              if (!(5 === r && e.length >= 1))
                throw new RangeError("Invalid extended color specification");
              var i = e.shift();
              if (i < 0) throw new RangeError("Color index must be >= 0");
              if (i < 16) return i;
              if (i < 232)
                (t = (t = Math.floor((i - 16) / 36)) > 0 ? 55 + 40 * t : 0),
                  (o =
                    (o = Math.floor(((i - 16) % 36) / 6)) > 0
                      ? 55 + 40 * o
                      : 0),
                  (n = (n = (i - 16) % 6) > 0 ? 55 + 40 * n : 0);
              else {
                if (!(i < 256))
                  throw new RangeError("Color index must be < 256");
                t = o = n = 10 * (i - 232) + 8;
              }
            }
            return [t, o, n];
          }
          function m(e) {
            var t,
              o = /\x1b\[(.*?)([@-~])/g,
              n = [],
              r = [],
              i = !1,
              s = !1,
              a = !1,
              l = [],
              c = [],
              d = 0;
            for (e += "[m"; (t = o.exec(e)); ) {
              if ("m" === t[2])
                for (var u = t[1].split(";"), p = 0; p < u.length; p++) {
                  var m = u[p];
                  if ("" === m) c.push(0);
                  else {
                    if (-1 === m.search(/^\d+$/)) {
                      c.length = 0;
                      break;
                    }
                    c.push(parseInt(m));
                  }
                }
              for (
                h(e.substring(d, t.index), n, r, i, s, a, l), d = o.lastIndex;
                c.length;

              ) {
                var f = c.shift();
                switch (f) {
                  case 0:
                    (n = r = []), (i = !1), (s = !1), (a = !1);
                    break;
                  case 1:
                  case 5:
                    i = !0;
                    break;
                  case 4:
                    s = !0;
                    break;
                  case 7:
                    a = !0;
                    break;
                  case 21:
                  case 22:
                    i = !1;
                    break;
                  case 24:
                    s = !1;
                    break;
                  case 27:
                    a = !1;
                    break;
                  case 30:
                  case 31:
                  case 32:
                  case 33:
                  case 34:
                  case 35:
                  case 36:
                  case 37:
                    n = f - 30;
                    break;
                  case 38:
                    try {
                      n = _(c);
                    } catch (e) {
                      c.length = 0;
                    }
                    break;
                  case 39:
                    n = [];
                    break;
                  case 40:
                  case 41:
                  case 42:
                  case 43:
                  case 44:
                  case 45:
                  case 46:
                  case 47:
                    r = f - 40;
                    break;
                  case 48:
                    try {
                      r = _(c);
                    } catch (e) {
                      c.length = 0;
                    }
                    break;
                  case 49:
                    r = [];
                    break;
                  case 90:
                  case 91:
                  case 92:
                  case 93:
                  case 94:
                  case 95:
                  case 96:
                  case 97:
                    n = f - 90 + 8;
                    break;
                  case 100:
                  case 101:
                  case 102:
                  case 103:
                  case 104:
                  case 105:
                  case 106:
                  case 107:
                    r = f - 100 + 8;
                }
              }
            }
            return l.join("");
          }
          function f(e) {
            for (e = e.replace(/\r+\n/gm, "\n"); e.search(/\r[^$]/g) > -1; ) {
              var t = e.match(/^(.*)\r+/m)[1],
                o = e.match(/\r+(.*)$/m)[1];
              (o += t.slice(o.length, t.length)),
                (e = e.replace(/\r+.*$/m, "\r").replace(/^.*\r/m, o));
            }
            return e;
          }
          function g(e) {
            var t = e;
            do {
              t = (e = t).replace(/[^\n]\x08/gm, "");
            } while (t.length < e.length);
            return e;
          }
          var b = function () {
              for (var e = "", t = 0; t < arguments.length; t++)
                "" !== arguments[t] &&
                  (e.length > 0 && "/" != e[e.length - 1]
                    ? (e = e + "/" + arguments[t])
                    : (e += arguments[t]));
              return e.replace(/\/\/+/, "/");
            },
            v = function (e) {
              return e.split("/").map(encodeURIComponent).join("/");
            },
            y = (function () {
              if ("undefined" == typeof navigator) return "None";
              var e,
                t = navigator.appName,
                o = navigator.userAgent,
                n = o.match(
                  /(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i
                );
              return (
                n &&
                  null !== (e = o.match(/version\/([\.\d]+)/i)) &&
                  (n[2] = e[1]),
                n ? [n[1], n[2]] : [t, navigator.appVersion, "-?"]
              );
            })(),
            k = (function () {
              if ("undefined" == typeof navigator) return "None";
              var e = "None";
              return (
                -1 != navigator.appVersion.indexOf("Win") && (e = "Windows"),
                -1 != navigator.appVersion.indexOf("Mac") && (e = "MacOS"),
                -1 != navigator.appVersion.indexOf("X11") && (e = "UNIX"),
                -1 != navigator.appVersion.indexOf("Linux") && (e = "Linux"),
                e
              );
            })(),
            w = function (e, t) {
              return 0 !== e.has(t).length || e.is(t);
            },
            x = function (e) {
              return e.responseJSON && e.responseJSON.traceback
                ? e.responseJSON.traceback
                : e.responseJSON && e.responseJSON.message
                ? e.responseJSON.message
                : e.statusText;
            },
            C = function (e, t, o) {
              var n = "API request failed (" + e.status + "): ";
              console.log(e), (n += x(e)), console.log(n);
            },
            j = "XhrError",
            E = function (e, t, o) {
              var n = new Error(x(e));
              return (
                (n.name = j),
                (n.xhr = e),
                (n.xhr_status = t),
                (n.xhr_error = o),
                n
              );
            },
            S = function (t, o) {
              "object" === i(t) && ((t = (o = t).url), delete o.url),
                (o.cache = !0);
              var n = o.data || {};
              return (
                (n.v = window.BASTHON_CACHE_BUSTING_TIMESTAMP),
                (o.data = n),
                (o = N(o)),
                e.ajax(t, o)
              );
            },
            N = function (e) {
              if (
                ((e = e || {}).headers || (e.headers = {}),
                !e.headers.Authorization)
              ) {
                var t =
                  ("_xsrf",
                  (o = document.cookie.match("\\b_xsrf=([^;]*)\\b"))
                    ? o[1]
                    : void 0);
                t && (e.headers["X-XSRFToken"] = t);
              }
              var o;
              return e;
            },
            O = function e(t, o) {
              for (
                var n = Error.apply(this, [t]),
                  r = Object.getOwnPropertyNames(n),
                  i = 0;
                i < r.length;
                i++
              )
                this[r[i]] = n[r[i]];
              return (
                (this.error_stack = o instanceof e ? o.error_stack : [o]),
                this.error_stack.push(n),
                this
              );
            };
          O.prototype = Object.create(Error.prototype, {});
          var M = { milliseconds: {} };
          (M.milliseconds.s = 1e3),
            (M.milliseconds.m = 60 * M.milliseconds.s),
            (M.milliseconds.h = 60 * M.milliseconds.m),
            (M.milliseconds.d = 24 * M.milliseconds.h),
            (M.thresholds = {
              s: r.relativeTimeThreshold("s") * M.milliseconds.s,
              m: r.relativeTimeThreshold("m") * M.milliseconds.m,
              h: r.relativeTimeThreshold("h") * M.milliseconds.h,
              d: r.relativeTimeThreshold("d") * M.milliseconds.d,
            }),
            (M.timeout_from_dt = function (e) {
              return e < M.thresholds.s
                ? 10 * M.milliseconds.s
                : e < M.thresholds.m
                ? M.milliseconds.m
                : M.milliseconds.h;
            });
          var T = {
            throttle: function (e, t) {
              var o = null;
              return function () {
                if (!o)
                  return (
                    (o = setTimeout(n, t)),
                    function () {
                      clearTimeout(o), (o = null);
                    }
                  );
              };
              function n() {
                (o = null), e();
              }
            },
            is_loaded: l,
            load_extension: c,
            load_extensions: d,
            filter_extensions: u,
            load_extensions_from_config: function (e) {
              return e.loaded
                .then(function () {
                  if (e.data.load_extensions) {
                    var t = u(e.data.load_extensions);
                    return d.apply(this, t);
                  }
                })
                .catch(
                  T.reject(
                    "Could not load nbextensions from " +
                      e.section_name +
                      " config file"
                  )
                );
            },
            regex_split: function (e, t, o) {
              var n,
                r,
                i,
                s,
                a = [],
                l =
                  (t.ignoreCase ? "i" : "") +
                  (t.multiline ? "m" : "") +
                  (t.extended ? "x" : "") +
                  (t.sticky ? "y" : ""),
                c = 0;
              t = new RegExp(t.source, l + "g");
              var d = void 0 === /()??/.exec("")[1];
              for (
                d || (n = new RegExp("^" + t.source + "$(?!\\s)", l)),
                  o = void 0 === o ? -1 >>> 0 : o >>> 0,
                  r = t.exec(e);
                r &&
                !(
                  (i = r.index + r[0].length) > c &&
                  (a.push(e.slice(c, r.index)),
                  !d &&
                    r.length > 1 &&
                    r[0].replace(n, function () {
                      for (var e = 1; e < arguments.length - 2; e++)
                        void 0 === arguments[e] && (r[e] = void 0);
                    }),
                  r.length > 1 &&
                    r.index < e.length &&
                    Array.prototype.push.apply(a, r.slice(1)),
                  (s = r[0].length),
                  (c = i),
                  a.length >= o)
                );
                r = t.exec(e)
              )
                t.lastIndex === r.index && t.lastIndex++;
              return (
                c === e.length
                  ? (!s && t.test("")) || a.push("")
                  : a.push(e.slice(c)),
                a.length > o ? a.slice(0, o) : a
              );
            },
            uuid: function () {
              for (var e = [], t = "0123456789abcdef", o = 0; o < 32; o++)
                e[o] = t.substr(Math.floor(16 * Math.random()), 1);
              return (
                (e[12] = "4"),
                (e[16] = t.substr((3 & e[16]) | 8, 1)),
                e.join("")
              );
            },
            fixConsole: function (e) {
              return m((e = s.escape(e)));
            },
            fixCarriageReturn: f,
            fixBackspace: g,
            fixOverwrittenChars: function (e) {
              return f(g(e));
            },
            autoLinkUrls: function (e) {
              return e.replace(
                /(^|\s)(https?|ftp)(:[^'"<>\s]+)/gi,
                '$1<a target="_blank" href="$2$3">$2$3</a>'
              );
            },
            points_to_pixels: function (t) {
              var o = e(
                '<div style="display: none; width: 10000pt; padding:0; border:0;"></div>'
              );
              e("body").append(o);
              var n = o.width() / 1e4;
              return o.remove(), Math.floor(t * n);
            },
            get_body_data: function (t) {
              var o = e("body").data(t);
              if (void 0 === o)
                switch (t) {
                  case "wsUrl":
                  case "baseUrl":
                    o = "";
                    break;
                  case "notebookPath":
                    o = "".concat(window.basthonLanguage, "/Untitled.ipynb");
                    break;
                  case "notebookName":
                    o = "Untitled.ipynb";
                    break;
                  default:
                    return o;
                }
              return decodeURIComponent(o);
            },
            parse_url: function (e) {
              var t = document.createElement("a");
              return (t.href = e), t;
            },
            url_path_split: function (e) {
              var t = e.lastIndexOf("/");
              return -1 === t ? ["", e] : [e.slice(0, t), e.slice(t + 1)];
            },
            url_path_join: b,
            url_join_encode: function () {
              return v(b.apply(null, arguments));
            },
            encode_uri_components: v,
            splitext: function (e) {
              var t = e.lastIndexOf(".");
              return t > 0 ? [e.slice(0, t), e.slice(t)] : [e, ""];
            },
            escape_html: function (t) {
              return e("<div/>").text(t).html();
            },
            always_new: function (e) {
              return function () {
                var t = Object.create(e.prototype);
                return e.apply(t, arguments), t;
              };
            },
            to_absolute_cursor_pos: function (e, t) {
              return (
                console.warn(
                  "`utils.to_absolute_cursor_pos(cm, pos)` is deprecated. Use `cm.indexFromPos(cursor)`"
                ),
                e.indexFromPos(t)
              );
            },
            from_absolute_cursor_pos: function (e, t) {
              return (
                console.warn(
                  "`utils.from_absolute_cursor_pos(cm, pos)` is deprecated. Use `cm.posFromIndex(index)`"
                ),
                e.posFromIndex(t)
              );
            },
            browser: y,
            platform: k,
            get_url_param: function (e) {
              var t = new RegExp("[?&]" + e + "=([^&]*)").exec(
                window.location.search
              );
              if (t) return decodeURIComponent(t[1] || "");
            },
            is_or_has: w,
            is_focused: function (t) {
              t = e(t);
              var o = e(document.activeElement);
              return o.length > 0 && !!w(t, o);
            },
            mergeopt: function (t, o, n) {
              return (
                (o = o || {}),
                (n = n || {}),
                e.extend(!0, {}, t.options_default, o, n)
              );
            },
            requireCodeMirrorMode: function (e, t, r) {
              var i = "string" == typeof e ? e : e.mode || e.name;
              if (n.modes.hasOwnProperty(i)) t(e.name ? e : i);
              else {
                var s = (e && e.mode && e.mime && e) ||
                  n.findModeByName(i) ||
                  n.findModeByExtension(i.split(".").pop()) ||
                  n.findModeByMIME(i) || { mode: i, mime: i };
                o(24259)("./".concat(s.mode, "/").concat(s.mode, ".js")).then(
                  function () {
                    t(e.name ? e : s.mime);
                  },
                  r
                );
              }
            },
            XHR_ERROR: j,
            ajax: S,
            ajax_error_msg: x,
            log_ajax_error: C,
            wrap_ajax_error: E,
            promising_ajax: function (e, t) {
              return (
                (t = t || {}),
                new Promise(function (o, n) {
                  (t.success = function (e, t, n) {
                    o(e);
                  }),
                    (t.error = function (e, t, o) {
                      C(e), n(E(e, t, o));
                    }),
                    S(e, t);
                })
              );
            },
            WrappedError: O,
            load_class: function (e, o, n) {
              return new Promise(function (r, i) {
                o
                  ? t.requirejs(
                      [o],
                      function (t) {
                        void 0 === t[e]
                          ? i(
                              new Error(
                                "Class " + e + " not found in module " + o
                              )
                            )
                          : r(t[e]);
                      },
                      i
                    )
                  : n && n[e]
                  ? r(n[e])
                  : i(new Error("Class " + e + " not found in registry "));
              });
            },
            resolve_promises_dict: function (e) {
              var t = Object.keys(e),
                o = [];
              return (
                t.forEach(function (t) {
                  o.push(e[t]);
                }),
                Promise.all(o).then(function (o) {
                  e = {};
                  for (var n = 0; n < t.length; n++) e[t[n]] = o[n];
                  return e;
                })
              );
            },
            reject: function (e, t) {
              return function (o) {
                var n = new O(e, o);
                return t && console.error(e, " -- ", o), Promise.reject(n);
              };
            },
            typeset: function (t, o) {
              var n = t.jquery ? t : e(t);
              arguments.length > 1 && n.text(o),
                window.MathJax &&
                  n.map(function () {
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, this]);
                    try {
                      MathJax.Hub.Queue(
                        [
                          "Require",
                          MathJax.Ajax,
                          "[MathJax]/extensions/TeX/AMSmath.js",
                        ],
                        function () {
                          MathJax.InputJax.TeX.resetEquationNumbers();
                        }
                      );
                    } catch (e) {
                      console.error("Error queueing resetEquationNumbers:", e);
                    }
                  });
            },
            parse_b64_data_uri: function (e) {
              var t = e.match(/^data:(.+?\/.+?);base64,/);
              return [t[1], e.slice(t[0].length)];
            },
            time: M,
            format_datetime: function (e) {
              var t = r(e).fromNow();
              return "a few seconds ago" === t ? "seconds ago" : t;
            },
            format_filesize: function (e) {
              if (null != e) {
                var t = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
                Number.isFinite(e) ||
                  console.error(
                    "Expected finite number, got ",
                    i(e) + ": " + e
                  );
                var o = e < 0;
                if ((o && (e = -e), e < 1)) return (o ? "-" : "") + e + " B";
                var n = Math.min(Math.floor(Math.log10(e) / 3), t.length - 1);
                return (
                  (o ? "-" : "") +
                  Number((e / Math.pow(1e3, n)).toPrecision(3)) +
                  " " +
                  t[n]
                );
              }
            },
            datetime_sort_helper: function (e, t, o) {
              return r(e).isBefore(r(t))
                ? 1 == o
                  ? -1
                  : 1
                : r(e).isSame(r(t))
                ? 0
                : 1 == o
                ? 1
                : -1;
            },
            dnd_contain_file: function (e) {
              if (e.dataTransfer.types)
                for (var t = 0; t < e.dataTransfer.types.length; t++)
                  if ("Files" == e.dataTransfer.types[t]) return !0;
              return !1;
            },
            js_idx_to_char_idx: function (e, t) {
              for (var o = e, n = 0; n + 1 < t.length && n < e; n++) {
                var r = t.charCodeAt(n);
                if (r >= 55296 && r <= 56319) {
                  var i = t.charCodeAt(n + 1);
                  i >= 56320 && i <= 57343 && (o--, n++);
                }
              }
              return o;
            },
            char_idx_to_js_idx: function (e, t) {
              for (var o = e, n = 0; n + 1 < t.length && n < o; n++) {
                var r = t.charCodeAt(n);
                if (r >= 55296 && r <= 56319) {
                  var i = t.charCodeAt(n + 1);
                  i >= 56320 && i <= 57343 && (o++, n++);
                }
              }
              return o;
            },
            _ansispan: m,
            change_favicon: function (e) {
              var t = document.createElement("link"),
                o = document.getElementById("favicon");
              (t.id = "favicon"),
                (t.type = "image/x-icon"),
                (t.rel = "shortcut icon"),
                (t.href = T.url_path_join(T.get_body_data("baseUrl"), e)),
                (o && t.href === o.href) ||
                  (o && document.head.removeChild(o),
                  document.head.appendChild(t));
            },
          };
          return T;
        }.apply(t, n)),
        void 0 === r || (e.exports = r);
    },
    56782: (e, t, o) => {
      var n, r;
      (n = [o(82359), o(30381)]),
        void 0 ===
          (r = function (e, t) {
            "use strict";
            var o = "",
              n = function () {
                return navigator.language.toLowerCase();
              },
              r = function () {
                return new RegExp("^(ar|he)").test(n());
              };
            return {
              applyBidi: function (t) {
                return e.shapeNumerals(t, o);
              },
              isMirroringEnabled: r,
              loadLocale: function () {
                r() && (document.body.dir = "rtl"),
                  console.log("Loaded moment locale", t.locale(n())),
                  (o =
                    "ar" == n().split("-")[0] ? "national" : "defaultNumeral");
              },
            };
          }.apply(t, n)) || (e.exports = r);
    },
    82359: (e, t) => {
      var o;
      void 0 ===
        (o = function (e) {
          "use strict";
          return {
            shapeNumerals: function (e, t) {
              if (!(e = e.toString())) return e;
              switch (t) {
                case "defaultNumeral":
                  return (function (e) {
                    return e.replace(/[\u0660-\u0669]/g, function (e) {
                      return e.charCodeAt(0) - 1632;
                    });
                  })(e);
                case "national":
                  return (function (e) {
                    return e.replace(/[0-9]/g, function (e) {
                      return String.fromCharCode(parseInt(e) + 1632);
                    });
                  })(e);
                default:
                  return e;
              }
            },
          };
        }.apply(t, [])) || (e.exports = o);
    },
    62512: (e, t, o) => {
      var n, r;
      function i(e, t) {
        var o =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!o) {
          if (
            Array.isArray(e) ||
            (o = s(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            o && (e = o);
            var n = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          a = !0,
          l = !1;
        return {
          s: function () {
            o = o.call(e);
          },
          n: function () {
            var e = o.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (l = !0), (i = e);
          },
          f: function () {
            try {
              a || null == o.return || o.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      function s(e, t) {
        if (e) {
          if ("string" == typeof e) return a(e, t);
          var o = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === o && e.constructor && (o = e.constructor.name),
            "Map" === o || "Set" === o
              ? Array.from(e)
              : "Arguments" === o ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
              ? a(e, t)
              : void 0
          );
        }
      }
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
        return n;
      }
      (n = [o(3838), o(19755), o(3574), o(54499), o(51475), o(46013)]),
        (r = function (e, t, n, r, a, l) {
          "use strict";
          window.Reveal = e = e.default;
          var c = {};
          function d(e) {
            var t,
              o = i(e.get_cells());
            try {
              for (o.s(); !(t = o.n()).done; ) {
                var n = t.value;
                if (p(n) || h(n)) return !0;
              }
            } catch (e) {
              o.e(e);
            } finally {
              o.f();
            }
            return !1;
          }
          function u(e) {
            var t = (e.metadata.slideshow || {}).slide_type;
            return void 0 === t || "-" == t ? "" : t;
          }
          function p(e) {
            return "slide" == u(e);
          }
          function h(e) {
            return "subslide" == u(e);
          }
          function _(e) {
            return "fragment" == u(e);
          }
          function m(e) {
            return "skip" == u(e);
          }
          function f(e) {
            return "notes" == u(e);
          }
          function g() {
            if (!0 === c.scroll) {
              var e = 0.95 * t(".reveal").height();
              t("section.present")
                .find("section")
                .filter(function () {
                  return t(this).height() > e;
                })
                .css("height", "calc(95vh)")
                .css("overflow-y", "scroll")
                .css("margin-top", "20px");
            }
          }
          function b() {
            c.autolaunch && d(n.notebook) && A();
            var e =
              window.location != window.parent.location
                ? document.referrer
                : document.location.href;
            "notes.html" === e.substr(e.lastIndexOf("/") + 1) && A();
          }
          Object.getPrototypeOf(n.notebook).get_cell_elements = function () {
            return this.container.find("div.cell");
          };
          var v = null;
          function y() {
            t("#help_b,#exit_b,#toggle-chalkboard,#toggle-notes").fadeToggle();
          }
          function k() {
            var e,
              t = i(n.notebook.get_cells());
            try {
              for (t.s(); !(e = t.n()).done; ) e.value.unselect();
            } catch (e) {
              t.e(e);
            } finally {
              t.f();
            }
          }
          function w() {
            var e = n.notebook.get_selected_cell().smart_exec;
            if ("smart_exec_slide" == e) n.notebook.execute_selected_cells();
            else if ("smart_exec_fragment" == e) {
              var o = n.notebook.get_selected_cell().smart_exec_next_fragment;
              t(o).hasClass("visible")
                ? n.notebook.execute_cell_and_select_below()
                : n.notebook.execute_selected_cells();
            } else n.notebook.execute_cell_and_select_below();
          }
          var x = {
              main: {
                firstSlide: function () {
                  return e.slide(0);
                },
                lastSlide: function () {
                  return e.slide(Number.MAX_VALUE);
                },
                toggleOverview: function () {
                  return e.toggleOverview();
                },
                toggleAllRiseButtons: y,
                fullscreenHelp: function () {
                  var e = t("<div/>").append(
                    t("<p/></p>")
                      .addClass("dialog")
                      .html(
                        "<b>Entering Fullscreen mode from inside RISE is disabled.</b><br><b>Exit RISE, make you browser Fullscreen and re-enter RISE</b><br>That will help Reveal.js to perform the correct transformations at the time to interact with code cells."
                      )
                  );
                  l.modal({
                    title: "Fullscreen Help",
                    body: e,
                    buttons: { OK: { class: "btn-danger" } },
                  });
                },
                riseHelp: O,
              },
              chalkboard: {
                clear: function () {
                  return RevealChalkboard.clear();
                },
                reset: function () {
                  return RevealChalkboard.reset();
                },
                toggleChalkboard: function () {
                  return RevealChalkboard.toggleChalkboard();
                },
                toggleNotesCanvas: function () {
                  return RevealChalkboard.toggleNotesCanvas();
                },
                colorNext: function () {
                  return RevealChalkboard.colorNext();
                },
                colorPrev: function () {
                  return RevealChalkboard.colorPrev();
                },
                download: function () {
                  return RevealChalkboard.download();
                },
              },
              notes: {
                openNotes: function () {
                  return RevealNotes.open();
                },
              },
            },
            C = {
              main: {
                firstSlide: "jump to first slide",
                lastSlide: "jump to last slide",
                toggleOverview: "toggle overview",
                toggleAllRiseButtons: "show/hide buttons",
                fullscreenHelp: "show fullscreen help",
                riseHelp: "show this help dialog",
              },
              chalkboard: {
                clear: "clear full size chalkboard",
                reset: "reset chalkboard data on current slide",
                toggleChalkboard: "toggle full size chalkboard",
                toggleNotesCanvas: "toggle notes (slide-local)",
                colorNext: "cycle to next pen color",
                colorPrev: "cycle to previous pen color",
                download: "download recorded chalkboard drawing",
              },
              notes: { openNotes: "open speaker notes window" },
            },
            j = {
              main: {
                firstSlide: "home",
                lastSlide: "end",
                toggleOverview: "w",
                fullscreenHelp: "f",
                riseHelp: "?",
              },
              chalkboard: {
                clear: "t,c",
                reset: "d,c",
                toggleChalkboard: "t,t",
                toggleNotesCanvas: "d,d",
                colorPrev: "q",
                colorNext: "s",
                download: "d,g",
              },
              notes: { openNotes: "n,n" },
            };
          function E(e) {
            var t = c.reveal_shortcuts;
            if (t)
              for (var o = 0, n = Object.keys(t); o < n.length; o++)
                for (
                  var r = n[o], i = 0, s = Object.keys(t[r]);
                  i < s.length;
                  i++
                ) {
                  var a = s[i];
                  e[r][a] = t[r][a];
                }
            return e;
          }
          function S(e) {
            var t,
              o = E(j);
            if ("reveal_mode" === e) {
              n.keyboard_manager.command_shortcuts.set_shortcut(
                "shift-enter",
                "RISE:smart-exec"
              ),
                n.keyboard_manager.edit_shortcuts.set_shortcut(
                  "shift-enter",
                  "RISE:smart-exec"
                );
              for (var r = 0, i = Object.keys(o); r < i.length; r++)
                for (
                  var s = i[r], a = 0, l = Object.keys(o[s]);
                  a < l.length;
                  a++
                ) {
                  var c = l[a];
                  (t = o[s][c]),
                    n.keyboard_manager.command_shortcuts.set_shortcut(
                      t,
                      "RISE:".concat(c)
                    );
                }
              try {
                n.keyboard_manager.command_shortcuts.remove_shortcut("f"),
                  n.keyboard_manager.command_shortcuts.set_shortcut(
                    "shift-f",
                    "jupyter-notebook:find-and-replace"
                  );
              } catch (e) {
                console.log(
                  "entering RISE : could not remove shortcut 'f' - ignored"
                );
              }
            } else if ("notebook_mode" === e) {
              n.keyboard_manager.command_shortcuts.set_shortcut(
                "shift-enter",
                "jupyter-notebook:run-cell-and-select-next"
              ),
                n.keyboard_manager.edit_shortcuts.set_shortcut(
                  "shift-enter",
                  "jupyter-notebook:run-cell-and-select-next"
                );
              try {
                n.keyboard_manager.command_shortcuts.remove_shortcut("shift-f"),
                  n.keyboard_manager.command_shortcuts.set_shortcut(
                    "f",
                    "jupyter-notebook:find-and-replace"
                  );
              } catch (e) {
                console.log(
                  "exiting RISE : could not remove shortcut 'shift-f' - ignored"
                );
              }
            }
          }
          function N(e, t) {
            return "<li>"
              .concat(
                (function (e) {
                  var t = "",
                    o = !0;
                  if (e.length > 0) {
                    var n,
                      r = i(e.split(","));
                    try {
                      for (r.s(); !(n = r.n()).done; ) {
                        var s = n.value;
                        o
                          ? ((t += "<kbd>" + s + "</kbd>"), (o = !1))
                          : (t += ",<kbd>" + s + "</kbd>");
                      }
                    } catch (e) {
                      r.e(e);
                    } finally {
                      r.f();
                    }
                  } else t += "<kbd>" + default_str + "</kbd>";
                  return t;
                })(e),
                " : "
              )
              .concat(t, "</li>");
          }
          function O() {
            var e, o, n;
            void 0 !== c.shortcuts && c.shortcuts;
            var r = E(j);
            (e = r.main), (o = r.chalkboard), (n = r.notes);
            var i = C.main,
              s = C.chalkboard,
              a = C.notes,
              d = t("<div/>").append(
                t("<p/></p>")
                  .addClass("dialog")
                  .html(
                    "<ul>" +
                      N(e.riseHelp, i.riseHelp) +
                      "<li><kbd>Alt</kbd>+<kbd>r</kbd>: enter/exit RISE</li><li><kbd>Space</kbd>: next</li><li><kbd>Shift</kbd>+<kbd>Space</kbd>: previous</li><li><kbd>Shift</kbd>+<kbd>Enter</kbd>: eval and select next cell if visible</li>" +
                      N(e.firstSlide, i.firstSlide) +
                      N(e.lastSlide, i.lastSlide) +
                      N(e.toggleOverview, i.toggleOverview) +
                      N(n.openNotes, a.openNotes) +
                      "<li><kbd>,</kbd>: ".concat(
                        i.toggleAllRiseButtons,
                        "</li>"
                      ) +
                      "<li><kbd>/</kbd>: black screen</li><li><strong>less useful:</strong><ul><li><kbd>PgUp</kbd>: up</li><li><kbd>PgDn</kbd>: down</li><li><kbd>Left Arrow</kbd>: left <em>(note: Space preferred)</em></li><li><kbd>Right Arrow</kbd>: right <em>(note: Shift Space preferred)</em></li></ul><li><strong>with chalkboard enabled:</strong><ul>" +
                      N(o.toggleChalkboard, s.toggleChalkboard) +
                      N(o.toggleNotesCanvas, s.toggleNotesCanvaas) +
                      N(o.colorNext, s.colorNext) +
                      N(o.colorPrev, s.colorPrev) +
                      N(o.download, s.download) +
                      N(o.reset, s.reset) +
                      N(o.clear, s.clear) +
                      "</ul></ul><b>NOTE</b>: of course you have to use these shortcuts <b>in command mode.</b>"
                  )
              );
            l.modal({
              title: "Reveal Shortcuts Help",
              body: d,
              buttons: { OK: { class: "btn-danger" } },
            });
          }
          function M(o) {
            var n,
              r,
              i,
              a,
              l =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              c =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              d =
                ((r = (n = e.getCurrentSlide()).id.split("-")),
                (i = [
                  Number(r[1]),
                  Number(r[2]),
                  t(n).find("div.fragment.visible").length,
                ]),
                (a = 3),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(i) ||
                  (function (e, t) {
                    var o =
                      null == e
                        ? null
                        : ("undefined" != typeof Symbol &&
                            e[Symbol.iterator]) ||
                          e["@@iterator"];
                    if (null != o) {
                      var n,
                        r,
                        i = [],
                        s = !0,
                        a = !1;
                      try {
                        for (
                          o = o.call(e);
                          !(s = (n = o.next()).done) &&
                          (i.push(n.value), !t || i.length !== t);
                          s = !0
                        );
                      } catch (e) {
                        (a = !0), (r = e);
                      } finally {
                        try {
                          s || null == o.return || o.return();
                        } finally {
                          if (a) throw r;
                        }
                      }
                      return i;
                    }
                  })(i, a) ||
                  s(i, a) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()),
              u = d[0],
              g = d[1],
              b = d[2],
              v = -1,
              y = 0,
              k = 0,
              w = o.get_cells();
            for (var x in w) {
              var C = w[x];
              if (
                !m(C) &&
                !f(C) &&
                !(p(C) && ((v += 1), (y = 0)),
                (v = Math.max(v, 0)),
                h(C) && (y += 1),
                v != u ||
                  y != g ||
                  (_(C) && (k += 1),
                  (c && k != b) || (null !== l && C.cell_type != l)))
              )
                return x;
            }
            return null;
          }
          function T() {
            var e = n.notebook.keyboard_manager.actions;
            function t(e) {
              var t,
                o =
                  (void 0 ===
                    (t = n.notebook.get_selected_cell().metadata).slideshow &&
                    (t.slideshow = {}),
                  t.slideshow);
              (o.slide_type = o.slide_type == e ? "" : e),
                n.CellToolbar.rebuild_all();
            }
            e.register(
              { help: "Enter/Exit RISE Slideshow", handler: A },
              "slideshow",
              "RISE"
            ),
              e.register(
                {
                  help: "execute cell, and move to the next if on the same slide",
                  handler: w,
                },
                "smart-exec",
                "RISE"
              ),
              e.register(
                {
                  help: "(un)set current cell as a Slide cell",
                  handler: function () {
                    return t("slide");
                  },
                },
                "toggle-slide",
                "RISE"
              ),
              e.register(
                {
                  help: "(un)set current cell as a Sub-slide cell",
                  handler: function () {
                    return t("subslide");
                  },
                },
                "toggle-subslide",
                "RISE"
              ),
              e.register(
                {
                  help: "(un)set current cell as a Fragment cell",
                  handler: function () {
                    return t("fragment");
                  },
                },
                "toggle-fragment",
                "RISE"
              ),
              e.register(
                {
                  help: "(un)set current cell as a Note cell",
                  handler: function () {
                    return t("notes");
                  },
                },
                "toggle-notes",
                "RISE"
              ),
              e.register(
                {
                  help: "(un)set current cell as a Skip cell",
                  handler: function () {
                    return t("skip");
                  },
                },
                "toggle-skip",
                "RISE"
              ),
              e.register(
                {
                  help: "render all cells (all cells go to command mode)",
                  handler: function () {
                    return n.notebook.get_cells().forEach(function (e) {
                      return e.render();
                    });
                  },
                },
                "render-all-cells",
                "RISE"
              ),
              e.register(
                {
                  help: "edit all cells (all cells go to edit mode)",
                  handler: function () {
                    return n.notebook.get_cells().forEach(function (e) {
                      return e.unrender();
                    });
                  },
                },
                "edit-all-cells",
                "RISE"
              ),
              e.register(
                {
                  help: "open the nbconfigurator page for RISE",
                  handler: function () {
                    window.open(
                      "/nbextensions/?nbextension=rise/main",
                      "_blank"
                    );
                  },
                },
                "rise-nbconfigurator",
                "RISE"
              ),
              e.register(
                {
                  help: "output RISE configuration in console, for debugging mostly",
                  handler: R,
                },
                "rise-dump-config",
                "RISE"
              );
            for (var o = E(j), r = 0, i = Object.keys(o); r < i.length; r++)
              for (
                var s = i[r], a = 0, l = Object.keys(o[s]);
                a < l.length;
                a++
              ) {
                var c = l[a],
                  d = x[s][c];
                e.register({ help: C[s][c], handler: d }, c, "RISE");
              }
          }
          function A() {
            var r, s;
            if (
              (o.e(6550).then(o.bind(o, 26550)),
              t("#ribbon").toggle(),
              t("#life-ring").toggle(),
              t("#maintoolbar").hasClass("reveal_tagging"))
            ) {
              var a = n.notebook.get_selected_index() || M(n.notebook);
              (function () {
                e.configure({ minScale: 1 }),
                  e.removeEventListeners(),
                  t("body").removeClass("rise-enabled");
                var o = c.theme;
                t("body").removeClass("theme-".concat(o)),
                  t("div#header").show(),
                  t("div#notebook").removeClass("reveal"),
                  t("div#notebook").hasClass("fade") &&
                    t("div#notebook").removeClass("fade"),
                  t("div#notebook-container").removeClass("slides"),
                  t("div#notebook-container").css("width", ""),
                  t("div#notebook-container").css("height", ""),
                  t("div#notebook-container").css("zoom", ""),
                  t("#theme").remove(),
                  t("#revealcss").remove(),
                  t("#rise-custom-css").remove(),
                  t("#rise-notebook-css").remove(),
                  t(".backgrounds").hide(),
                  t(".progress").hide(),
                  t(".controls").hide(),
                  t(".slide-number").hide(),
                  t(".speaker-notes").hide(),
                  t(".pause-overlay").hide(),
                  t("div#aria-status-div").hide();
                var r = n.notebook.get_cells();
                for (var i in r)
                  t(".cell:nth(" + i + ")").removeClass("reveal-skip"),
                    t("div#notebook-container").append(r[i].element);
                t("div#notebook-container").children("section").remove(),
                  t(".end_space").show(),
                  null !== v && v.disconnect(),
                  history.pushState(
                    "",
                    document.title,
                    window.location.pathname + window.location.search
                  ),
                  t("div#rise-overlay").remove();
              })(),
                S("notebook_mode"),
                t("#exit_b").remove(),
                t("#help_b").remove(),
                t("#maintoolbar").removeClass("reveal_tagging"),
                (function () {
                  n.notebook.get_selected_cell().unselect();
                  var e,
                    t = i(n.notebook.get_cells());
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      var o = e.value;
                      "code" === o.cell_type && (o.select(), o.unselect());
                    }
                  } catch (e) {
                    t.e(e);
                  } finally {
                    t.f();
                  }
                })(),
                t(".reveal-viewport").removeClass("reveal-viewport"),
                n.notebook.select(a),
                setTimeout(function () {
                  return n.notebook.get_selected_cell().ensure_focused();
                }, c.restore_timeout);
            } else {
              (function (r) {
                t("body").addClass("rise-enabled"),
                  t("div#header").hide(),
                  t(".end_space").hide(),
                  t("div#notebook").addClass("reveal"),
                  t("div#notebook-container").addClass("slides");
                var i = c.theme;
                t("body").addClass("theme-".concat(i)),
                  o(2577)("./".concat(i, ".css")),
                  o.e(8619).then(o.bind(o, 98619));
                var s = n.notebook.notebook_name,
                  a = s.lastIndexOf("."),
                  l = -1 == a ? s : s.substr(0, a),
                  d = "".concat(l, ".css");
                t("head").append(
                  '<link rel="stylesheet" href="rise.css" id="rise-custom-css" />'
                ),
                  t("head").append(
                    '<link rel="stylesheet" href="'.concat(
                      d,
                      '" id="rise-notebook-css" />'
                    )
                  );
                for (
                  var u = {
                      help: !1,
                      keyboard: {
                        13: null,
                        27: null,
                        35: null,
                        36: null,
                        38: null,
                        40: null,
                        66: null,
                        70: null,
                        72: null,
                        74: null,
                        75: null,
                        76: null,
                        78: null,
                        79: null,
                        80: null,
                        84: null,
                        87: null,
                        188: y,
                      },
                      dependencies: [{ src: o(63407), async: !0 }],
                    },
                    p = 0,
                    h = [
                      "controls",
                      "progress",
                      "history",
                      "width",
                      "height",
                      "margin",
                      "minScale",
                      "transition",
                      "slideNumber",
                      "center",
                      "help",
                    ];
                  p < h.length;
                  p++
                ) {
                  var _ = h[p];
                  u[_] = c[_];
                }
                var m = c.enable_leap_motion;
                m && (u.leap = m),
                  c.enable_chalkboard &&
                    ("chalkboard" in c && (u.chalkboard = c.chalkboard),
                    u.dependencies.push({ src: o(6182), async: !0 }));
                var f = Promise.resolve();
                e.initialized
                  ? e.configure(u)
                  : ((f = e.initialize(u)), (e.initialized = !0)),
                  e.addEventListener("ready", function (e) {
                    k(), g(), I();
                  }),
                  e.addEventListener("slidechanged", function (e) {
                    k(), g(), I();
                  }),
                  e.addEventListener("fragmentshown", function (e) {
                    I();
                  }),
                  e.addEventListener("fragmenthidden", function (e) {
                    I();
                  }),
                  f.then(function (o) {
                    var n;
                    !(function () {
                      var o = t(".output"),
                        n =
                          window.MutationObserver ||
                          window.WebKitMutationObserver;
                      v = new n(function (t) {
                        t.forEach(function (t) {
                          t.addedNodes &&
                            t.addedNodes.length &&
                            (e.sync(), g());
                        });
                      });
                      var r = {
                        childList: !0,
                        characterData: !1,
                        attributes: !1,
                        subtree: !1,
                      };
                      o.each(function () {
                        v.observe(this, r);
                      });
                    })(),
                      (n = r),
                      "selected" === c.start_slideshow_at
                        ? e.slide(n[0], n[1])
                        : e.slide(0, 0),
                      g(),
                      setTimeout(function () {
                        return e.sync();
                      }, c.sync_timeout),
                      (function () {
                        var e = c.overlay,
                          o = c.header,
                          n = c.footer,
                          r = c.backimage,
                          i = "";
                        e
                          ? (i = e)
                          : (o &&
                              (i += "<div id='rise-header' style='"
                                .concat("position: absolute; top: 0px;", "'>")
                                .concat(o, "</div>")),
                            r &&
                              (i += "<img id='rise-backimage' style='"
                                .concat("width: 100%; height: 100%;", "' src='")
                                .concat(r, "' />")),
                            n &&
                              (i += "<div id='rise-footer' style='"
                                .concat(
                                  "position: absolute; bottom: 0px;",
                                  "'>"
                                )
                                .concat(n, "</div>")));
                        var s = "<div id='rise-overlay'>".concat(i, "</div>");
                        t("div.reveal").append(s);
                      })();
                  }),
                  c.show_buttons_on_startup || setTimeout(y, 2e3);
              })(
                (function (e) {
                  var o,
                    r,
                    i = -1,
                    s = -1;
                  function a() {
                    return i++, (s = -1), t("<section>").appendTo(e);
                  }
                  function l() {
                    return (
                      s++,
                      t("<section>")
                        .attr("id", "slide-" + i + "-" + s)
                        .appendTo(o)
                    );
                  }
                  o = a();
                  for (
                    var c = (r = l()),
                      d = n.notebook.get_selected_index(),
                      p = [0, 0],
                      h = !1,
                      _ = n.notebook.get_cells(),
                      m = 0;
                    m < _.length;
                    m++
                  ) {
                    var f = _[m],
                      g = u(f);
                    h
                      ? "slide" === g
                        ? ((o = a()), (c = r = l()))
                        : "subslide" === g
                        ? (c = r = l())
                        : "fragment" === g &&
                          (f.fragment_div = c =
                            t("<div>").addClass("fragment").appendTo(r))
                      : "notes" !== g && "skip" !== g && (h = !0),
                      m === d && (p = [i, s]),
                      "notes" === g
                        ? r.append(
                            t("<aside>").addClass("notes").append(f.element)
                          )
                        : c.append(f.element),
                      "skip" === g && f.element.addClass("reveal-skip");
                  }
                  for (var b = 0; b < _.length; b++) {
                    for (
                      var v = _[b], y = "smart_exec_slide", k = b + 1;
                      k < _.length;
                      k++
                    ) {
                      var w = _[k],
                        x = u(w);
                      if ("slide" == x || "subslide" == x) {
                        y = "smart_exec_slide";
                        break;
                      }
                      if ("fragment" == x) {
                        (y = "smart_exec_fragment"),
                          (v.smart_exec_next_fragment = w.fragment_div);
                        break;
                      }
                      if ("" == x) {
                        y = "smart_exec_next";
                        break;
                      }
                    }
                    v.smart_exec = y;
                  }
                  return p;
                })(t("div#notebook-container"))
              ),
                S("reveal_mode"),
                (s = t("<i/>")
                  .attr("id", "exit_b")
                  .attr("title", "Exit RISE")
                  .addClass("fa-times-circle fa-4x fa")
                  .addClass("my-main-tool-bar")
                  .click(A)),
                t(".reveal").after(s),
                (r = t("<i/>")
                  .attr("id", "help_b")
                  .attr("title", "Reveal Shortcuts Help")
                  .addClass("fa-question fa-4x fa")
                  .addClass("my-main-tool-bar")
                  .click(O)),
                t(".reveal").after(r),
                t("#maintoolbar").addClass("reveal_tagging");
            }
          }
          function I() {
            var e = c.auto_select,
              t = "code" == e ? "code" : "first" == e ? null : void 0;
            if (void 0 !== t) {
              var o = c.auto_select_fragment;
              setTimeout(function () {
                var e = M(n.notebook, t, o);
                e && n.notebook.select(e);
              }, c.auto_select_timeout);
            }
          }
          function L() {
            n.toolbar.add_buttons_group([
              { action: "RISE:slideshow", icon: c.toolbar_icon, id: "RISE" },
            ]);
            var e = c.shortcuts;
            for (var t in c.shortcuts) {
              var o = e[t];
              o &&
                n.notebook.keyboard_manager.command_shortcuts.add_shortcut(
                  o,
                  "RISE:".concat(t)
                );
            }
          }
          function R() {
            console.log("RISE configuration", c),
              console.log(
                "Current notebook ".concat(
                  d(n.notebook) ? "is" : "not",
                  " a slideshow"
                )
              );
          }
          function P() {
            (function () {
              var e = {
                  autolaunch: !1,
                  start_slideshow_at: "selected",
                  auto_select: "code",
                  auto_select_fragment: !0,
                  show_buttons_on_startup: !0,
                  header: void 0,
                  footer: void 0,
                  backimage: void 0,
                  overlay: void 0,
                  restore_timeout: 500,
                  auto_select_timeout: 450,
                  sync_timeout: 250,
                  toolbar_icon: "fa-bar-chart",
                  shortcuts: {
                    slideshow: "alt-r",
                    "toggle-slide": "shift-i",
                    "toggle-subslide": "shift-b",
                    "toggle-fragment": "shift-g",
                    "rise-nbconfigurator": "shift-c",
                    "toggle-notes": "",
                    "toggle-skip": "",
                  },
                  theme: "simple",
                  transition: "linear",
                  slideNumber: !0,
                  width: "100%",
                  height: "100%",
                  controls: !0,
                  progress: !0,
                  history: !0,
                  scroll: !1,
                  center: !0,
                  margin: 0.1,
                  minScale: 1,
                  help: !1,
                  enable_chalkboard: !1,
                  enable_leap_motion: !1,
                },
                o = new a.ConfigSection("livereveal", {
                  base_url: r.get_body_data("baseUrl"),
                });
              o.load();
              var i = new a.ConfigSection("rise", {
                base_url: r.get_body_data("baseUrl"),
              });
              i.load();
              var s = n.notebook.config;
              return (
                s.load(),
                Promise.all([o.loaded, i.loaded, s.loaded]).then(function () {
                  t.extend(!0, c, e),
                    t.extend(!0, c, o.data),
                    t.extend(!0, c, i.data),
                    t.extend(!0, c, s.data.rise);
                  var r = n.notebook.metadata.livereveal;
                  t.extend(!0, c, r);
                  var a = n.notebook.metadata.rise;
                  t.extend(!0, c, a);
                })
              );
            })()
              .then(T)
              .then(L)
              .then(b);
          }
          return (
            (P.load_ipython_extension = P), (P.load_jupyter_extension = P), P
          );
        }.apply(t, n)),
        void 0 === r || (e.exports = r);
    },
    18167: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(46013), o(34960), o(59050), o(3574)]),
        void 0 ===
          (r = function (e, t, o, n, r) {
            "use strict";
            e("#notebook_about").click(function () {
              var n = window.sys_info,
                r = "Vous utilisez le Notebook de <b>Basthon</b>";
              (r += "<br>"),
                (r += "Identifiant de commit : <code>".concat(
                  n["commit-hash"],
                  "</code>"
                )),
                (r += "<br>"),
                (r += "Date du commit : <code>".concat(
                  n["commit-date"],
                  "</code>"
                ));
              var i = "Vous utilisez le noyau <b>Basthon</b>";
              (i += "<br>"),
                (i += "Langage du noyau : <code>".concat(
                  window.basthonLanguage,
                  "</code>"
                )),
                (i += "<br>"),
                (i += "Version du noyau : <code>".concat(
                  n["kernel-version"],
                  "</code>"
                ));
              var s = e("<div/>");
              s.append(
                e("<h4/>").text(o.msg._("Current Notebook Information:"))
              ),
                s.append(e("<p/>").html(r)),
                s.append(
                  e("<h4/>").text(o.msg._("Current Kernel Information:"))
                ),
                s.append(e("<p/>").html(i)),
                t.modal({
                  title: o.msg._("About Jupyter Notebook"),
                  body: s,
                  buttons: { OK: {} },
                });
            });
          }.apply(t, n)) || (e.exports = r);
    },
    50044: (e, t, o) => {
      var n, r;
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          i(e)
        );
      }
      function s() {
        "use strict";
        s = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          o = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          a = n.asyncIterator || "@@asyncIterator",
          l = n.toStringTag || "@@toStringTag";
        function c(e, t, o) {
          return (
            Object.defineProperty(e, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (e) {
          c = function (e, t, o) {
            return (e[t] = o);
          };
        }
        function d(e, t, o, n) {
          var r = t && t.prototype instanceof h ? t : h,
            i = Object.create(r.prototype),
            s = new j(n || []);
          return (
            (i._invoke = (function (e, t, o) {
              var n = "suspendedStart";
              return function (r, i) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === r) throw i;
                  return { value: void 0, done: !0 };
                }
                for (o.method = r, o.arg = i; ; ) {
                  var s = o.delegate;
                  if (s) {
                    var a = w(s, o);
                    if (a) {
                      if (a === p) continue;
                      return a;
                    }
                  }
                  if ("next" === o.method) o.sent = o._sent = o.arg;
                  else if ("throw" === o.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), o.arg);
                    o.dispatchException(o.arg);
                  } else "return" === o.method && o.abrupt("return", o.arg);
                  n = "executing";
                  var l = u(e, t, o);
                  if ("normal" === l.type) {
                    if (
                      ((n = o.done ? "completed" : "suspendedYield"),
                      l.arg === p)
                    )
                      continue;
                    return { value: l.arg, done: o.done };
                  }
                  "throw" === l.type &&
                    ((n = "completed"), (o.method = "throw"), (o.arg = l.arg));
                }
              };
            })(e, o, s)),
            i
          );
        }
        function u(e, t, o) {
          try {
            return { type: "normal", arg: e.call(t, o) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = d;
        var p = {};
        function h() {}
        function _() {}
        function m() {}
        var f = {};
        c(f, r, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(E([])));
        b && b !== t && o.call(b, r) && (f = b);
        var v = (m.prototype = h.prototype = Object.create(f));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function k(e, t) {
          function n(r, s, a, l) {
            var c = u(e[r], e, s);
            if ("throw" !== c.type) {
              var d = c.arg,
                p = d.value;
              return p && "object" == i(p) && o.call(p, "__await")
                ? t.resolve(p.__await).then(
                    function (e) {
                      n("next", e, a, l);
                    },
                    function (e) {
                      n("throw", e, a, l);
                    }
                  )
                : t.resolve(p).then(
                    function (e) {
                      (d.value = e), a(d);
                    },
                    function (e) {
                      return n("throw", e, a, l);
                    }
                  );
            }
            l(c.arg);
          }
          var r;
          this._invoke = function (e, o) {
            function i() {
              return new t(function (t, r) {
                n(e, o, t, r);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function w(e, t) {
          var o = e.iterator[t.method];
          if (void 0 === o) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                w(e, t),
                "throw" === t.method)
              )
                return p;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return p;
          }
          var n = u(o, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), p
            );
          var r = n.arg;
          return r
            ? r.done
              ? ((t[e.resultName] = r.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                p)
              : r
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              p);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function C(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function E(e) {
          if (e) {
            var t = e[r];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                i = function t() {
                  for (; ++n < e.length; )
                    if (o.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (i.next = i);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (_.prototype = m),
          c(v, "constructor", m),
          c(m, "constructor", _),
          (_.displayName = c(m, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === _ || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), c(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(v)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(k.prototype),
          c(k.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = k),
          (e.async = function (t, o, n, r, i) {
            void 0 === i && (i = Promise);
            var s = new k(d(t, o, n, r), i);
            return e.isGeneratorFunction(o)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          y(v),
          c(v, l, "Generator"),
          c(v, r, function () {
            return this;
          }),
          c(v, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var o in e) t.push(o);
            return (
              t.reverse(),
              function o() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (o.value = n), (o.done = !1), o;
                }
                return (o.done = !0), o;
              }
            );
          }),
          (e.values = E),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(C),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    o.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(o, n) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = o),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  s = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var a = o.call(i, "catchLoc"),
                    l = o.call(i, "finallyLoc");
                  if (a && l) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (a) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  o.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var s = i ? i.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), p)
                  : this.complete(s)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                p
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var o = this.tryEntries[t];
                if (o.finallyLoc === e)
                  return this.complete(o.completion, o.afterLoc), C(o), p;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var o = this.tryEntries[t];
                if (o.tryLoc === e) {
                  var n = o.completion;
                  if ("throw" === n.type) {
                    var r = n.arg;
                    C(o);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, o) {
              return (
                (this.delegate = { iterator: E(e), resultName: t, nextLoc: o }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          e
        );
      }
      function a(e, t, o, n, r, i, s) {
        try {
          var a = e[i](s),
            l = a.value;
        } catch (e) {
          return void o(e);
        }
        a.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      function l(e, t) {
        var o =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!o) {
          if (
            Array.isArray(e) ||
            (o = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return c(e, t);
                var o = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === o && e.constructor && (o = e.constructor.name),
                  "Map" === o || "Set" === o
                    ? Array.from(e)
                    : "Arguments" === o ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                    ? c(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            o && (e = o);
            var n = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          s = !0,
          a = !1;
        return {
          s: function () {
            o = o.call(e);
          },
          n: function () {
            var e = o.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (a = !0), (i = e);
          },
          f: function () {
            try {
              s || null == o.return || o.return();
            } finally {
              if (a) throw i;
            }
          },
        };
      }
      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
        return n;
      }
      (n = [o(19755), o(10267), o(34960)]),
        void 0 ===
          (r = function (e, t, o) {
            "use strict";
            var n = function (e) {
                "" === e ||
                  e.match(/:/) ||
                  console.warn(
                    'You are trying to use an action/command name, where the separator between prefix and name is not `:`\n"' +
                      e +
                      '"\nYou are likely to not use the API in a correct way. Typically use the following:\n`var key = actions.register(<object>, "<name>", "<prefix>");` and reuse the `key` variableinstead of re-generating the key yourself.'
                  );
              },
              r = function (e) {
                (this.env = e || {}), Object.seal(this);
              },
              i = {
                "toggle-rtl-layout": {
                  cmd: o.msg._("toggle rtl layout"),
                  help: o.msg._(
                    "Toggle the screen directionality between left-to-right and right-to-left"
                  ),
                  handler: function () {
                    "rtl" == document.body.getAttribute("dir")
                      ? document.body.setAttribute("dir", "ltr")
                      : document.body.setAttribute("dir", "rtl");
                  },
                },
                "edit-command-mode-keyboard-shortcuts": {
                  cmd: o.msg._("edit command mode keyboard shortcuts"),
                  help: o.msg._(
                    "Open a dialog to edit the command mode keyboard shortcuts"
                  ),
                  handler: function (e) {
                    e.notebook.show_shortcuts_editor();
                  },
                },
                "shutdown-kernel": {
                  help: "Shutdown the kernel (no confirmation dialog)",
                  handler: function (e) {
                    e.notebook.shutdown_kernel({ confirm: !1 });
                  },
                },
                "confirm-shutdown-kernel": {
                  icon: "fa-repeat",
                  help_index: "hb",
                  help: "Shutdown the kernel (with confirmation dialog)",
                  handler: function (e) {
                    e.notebook.shutdown_kernel();
                  },
                },
                "restart-kernel": {
                  cmd: o.msg._("restart kernel"),
                  help: o.msg._("restart the kernel (no confirmation dialog)"),
                  handler: function (e) {
                    e.notebook.restart_kernel({ confirm: !1 });
                  },
                },
                "confirm-restart-kernel": {
                  icon: "fa-repeat",
                  help_index: "hb",
                  cmd: o.msg._("confirm restart kernel"),
                  help: o.msg._("restart the kernel (with dialog)"),
                  handler: function (e) {
                    e.notebook.restart_kernel();
                  },
                },
                "restart-kernel-and-run-all-cells": {
                  cmd: o.msg._("restart kernel and run all cells"),
                  help: o.msg._(
                    "restart the kernel, then re-run the whole notebook (no confirmation dialog)"
                  ),
                  handler: function (e) {
                    e.notebook.restart_run_all({ confirm: !1 });
                  },
                },
                "confirm-restart-kernel-and-run-all-cells": {
                  icon: "fa-forward",
                  cmd: o.msg._("confirm restart kernel and run all cells"),
                  help: o.msg._(
                    "restart the kernel, then re-run the whole notebook (with dialog)"
                  ),
                  handler: function (e) {
                    e.notebook.restart_run_all();
                  },
                },
                "restart-kernel-and-clear-output": {
                  cmd: o.msg._("restart kernel and clear output"),
                  help: o.msg._(
                    "restart the kernel and clear all output (no confirmation dialog)"
                  ),
                  handler: function (e) {
                    e.notebook.restart_clear_output({ confirm: !1 });
                  },
                },
                "confirm-restart-kernel-and-clear-output": {
                  cmd: o.msg._("confirm restart kernel and clear output"),
                  help: o.msg._(
                    "restart the kernel and clear all output (with dialog)"
                  ),
                  handler: function (e) {
                    e.notebook.restart_clear_output();
                  },
                },
                "interrupt-kernel": {
                  icon: "fa-stop",
                  cmd: o.msg._("interrupt the kernel"),
                  help: o.msg._("interrupt the kernel"),
                  help_index: "ha",
                  handler: function (e) {
                    e.notebook.kernel.interrupt();
                  },
                },
                "run-cell-and-select-next": {
                  cmd: o.msg._("run cell and select next"),
                  icon: "fa-step-forward",
                  help: o.msg._("run cell, select below"),
                  help_index: "ba",
                  handler: function (e) {
                    e.notebook.execute_cell_and_select_below();
                  },
                },
                "run-cell": {
                  cmd: o.msg._("run selected cells"),
                  help: o.msg._("run selected cells"),
                  help_index: "bb",
                  handler: function (e) {
                    e.notebook.execute_selected_cells();
                  },
                },
                "run-cell-and-insert-below": {
                  cmd: o.msg._("run cell and insert below"),
                  help: o.msg._("run cell and insert below"),
                  help_index: "bc",
                  handler: function (e) {
                    e.notebook.execute_cell_and_insert_below();
                  },
                },
                "run-all-cells": {
                  cmd: o.msg._("run all cells"),
                  help: o.msg._("run all cells"),
                  help_index: "bd",
                  handler: function (e) {
                    e.notebook.execute_all_cells();
                  },
                },
                "run-all-cells-above": {
                  cmd: o.msg._("run all cells above"),
                  help: o.msg._("run all cells above"),
                  handler: function (e) {
                    e.notebook.execute_cells_above();
                  },
                },
                "run-all-cells-below": {
                  cmd: o.msg._("run all cells below"),
                  help: o.msg._("run all cells below"),
                  handler: function (e) {
                    e.notebook.execute_cells_below();
                  },
                },
                "enter-command-mode": {
                  cmd: o.msg._("enter command mode"),
                  help: o.msg._("enter command mode"),
                  help_index: "aa",
                  handler: function (e) {
                    e.notebook.command_mode();
                  },
                },
                "insert-image": {
                  cmd: o.msg._("insert image"),
                  help: o.msg._("insert image"),
                  help_index: "dz",
                  handler: function (e) {
                    e.notebook.insert_image();
                  },
                },
                "cut-cell-attachments": {
                  cmd: o.msg._("cut cell attachments"),
                  help: o.msg._("cut cell attachments"),
                  help_index: "dza",
                  handler: function (e) {
                    e.notebook.cut_cell_attachments();
                  },
                },
                "copy-cell-attachments": {
                  cmd: o.msg._("copy cell attachments"),
                  help: o.msg._("copy cell attachments"),
                  help_index: "dzb",
                  handler: function (e) {
                    e.notebook.copy_cell_attachments();
                  },
                },
                "paste-cell-attachments": {
                  cmd: o.msg._("paste cell attachments"),
                  help: o.msg._("paste cell attachments"),
                  help_index: "dzc",
                  handler: function (e) {
                    e.notebook.paste_cell_attachments();
                  },
                },
                "split-cell-at-cursor": {
                  cmd: o.msg._("split cell at cursor"),
                  help: o.msg._("split cell at cursor"),
                  help_index: "ea",
                  handler: function (e) {
                    var t = e.notebook;
                    t.is_breakpoint_cell(t.get_selected_cell()) ||
                      e.notebook.split_cell();
                  },
                },
                "enter-edit-mode": {
                  cmd: o.msg._("enter edit mode"),
                  help: o.msg._("enter edit mode"),
                  help_index: "aa",
                  handler: function (e) {
                    e.notebook.edit_mode();
                  },
                },
                "select-previous-cell": {
                  cmd: o.msg._("select previous cell"),
                  help: o.msg._("select cell above"),
                  help_index: "da",
                  handler: function (e) {
                    var t = e.notebook.get_selected_index();
                    0 !== t &&
                      null !== t &&
                      (e.notebook.select_prev(!0), e.notebook.focus_cell());
                  },
                },
                "select-next-cell": {
                  cmd: o.msg._("select next cell"),
                  help: o.msg._("select cell below"),
                  help_index: "db",
                  handler: function (e) {
                    var t = e.notebook.get_selected_index();
                    t !== e.notebook.ncells() - 1 &&
                      null !== t &&
                      (e.notebook.select_next(!0), e.notebook.focus_cell());
                  },
                },
                "extend-selection-above": {
                  cmd: o.msg._("extend selection above"),
                  help: o.msg._("extend selected cells above"),
                  help_index: "dc",
                  handler: function (e) {
                    e.notebook.extend_selection_by(-1),
                      e.notebook.get_selected_cell().element.focus();
                  },
                },
                "extend-selection-below": {
                  cmd: o.msg._("extend selection below"),
                  help: o.msg._("extend selected cells below"),
                  help_index: "dd",
                  handler: function (e) {
                    e.notebook.extend_selection_by(1),
                      e.notebook.get_selected_cell().element.focus();
                  },
                },
                "select-all": {
                  cmd: o.msg._("select all"),
                  help: o.msg._("select all cells"),
                  help_index: "de",
                  handler: function (e) {
                    e.notebook.select_all(),
                      e.notebook.get_selected_cell().element.focus();
                  },
                },
                "cut-cell": {
                  cmd: o.msg._("cut selected cells"),
                  help: o.msg._("cut selected cells"),
                  icon: "fa-cut",
                  help_index: "ee",
                  handler: function (e) {
                    var t = e.notebook.get_selected_index();
                    e.notebook.is_breakpoint_index(t) ||
                      (e.notebook.cut_cell(), e.notebook.select(t));
                  },
                },
                "copy-cell": {
                  cmd: o.msg._("copy selected cells"),
                  help: o.msg._("copy selected cells"),
                  icon: "fa-copy",
                  help_index: "ef",
                  handler: function (e) {
                    e.notebook.copy_cell();
                  },
                },
                "paste-cell-replace": {
                  help: "paste cells replace",
                  handler: function (e) {
                    e.notebook.paste_cell_replace();
                  },
                },
                "paste-cell-above": {
                  cmd: o.msg._("paste cells above"),
                  help: o.msg._("paste cells above"),
                  help_index: "eg",
                  handler: function (e) {
                    e.notebook.paste_cell_above();
                  },
                },
                "paste-cell-below": {
                  cmd: o.msg._("paste cells below"),
                  help: o.msg._("paste cells below"),
                  icon: "fa-paste",
                  help_index: "eh",
                  handler: function (e) {
                    var t = e.notebook,
                      o = t.get_selected_cell(),
                      n = t.find_cell_index(o) === t.ncells() - 1;
                    (t.is_breakpoint_cell(o) && n) ||
                      e.notebook.paste_cell_below();
                  },
                },
                "insert-cell-above": {
                  cmd: o.msg._("insert cell above"),
                  help: o.msg._("insert cell above"),
                  help_index: "ec",
                  handler: function (e) {
                    e.notebook.insert_cell_above(),
                      e.notebook.select_prev(!0),
                      e.notebook.focus_cell();
                  },
                },
                "insert-cell-below": {
                  cmd: o.msg._("insert cell below"),
                  help: o.msg._("insert cell below"),
                  icon: "fa-plus",
                  help_index: "ed",
                  handler: function (e) {
                    var t = e.notebook,
                      o = t.get_selected_cell(),
                      n = t.find_cell_index(o) === t.ncells() - 1;
                    (t.is_breakpoint_cell(o) && n) ||
                      (e.notebook.insert_cell_below(),
                      e.notebook.select_next(!0),
                      e.notebook.focus_cell());
                  },
                },
                "change-cell-to-code": {
                  cmd: o.msg._("change cell to code"),
                  help: o.msg._("change cell to code"),
                  help_index: "ca",
                  handler: function (e) {
                    var t = e.notebook;
                    t.is_breakpoint_cell(t.get_selected_cell()) ||
                      e.notebook.cells_to_code();
                  },
                },
                "change-cell-to-markdown": {
                  cmd: o.msg._("change cell to markdown"),
                  help: o.msg._("change cell to markdown"),
                  help_index: "cb",
                  handler: function (e) {
                    var t = e.notebook;
                    t.is_breakpoint_cell(t.get_selected_cell()) ||
                      e.notebook.cells_to_markdown();
                  },
                },
                "change-cell-to-raw": {
                  cmd: o.msg._("change cell to raw"),
                  help: o.msg._("change cell to raw"),
                  help_index: "cc",
                  handler: function (e) {
                    var t = e.notebook;
                    t.is_breakpoint_cell(t.get_selected_cell()) ||
                      e.notebook.cells_to_raw();
                  },
                },
                "change-cell-to-heading-1": {
                  cmd: o.msg._("change cell to heading 1"),
                  help: o.msg._("change cell to heading 1"),
                  help_index: "cd",
                  handler: function (e) {
                    e.notebook.to_heading(void 0, 1);
                  },
                },
                "change-cell-to-heading-2": {
                  cmd: o.msg._("change cell to heading 2"),
                  help: o.msg._("change cell to heading 2"),
                  help_index: "ce",
                  handler: function (e) {
                    e.notebook.to_heading(void 0, 2);
                  },
                },
                "change-cell-to-heading-3": {
                  cmd: o.msg._("change cell to heading 3"),
                  help: o.msg._("change cell to heading 3"),
                  help_index: "cf",
                  handler: function (e) {
                    e.notebook.to_heading(void 0, 3);
                  },
                },
                "change-cell-to-heading-4": {
                  cmd: o.msg._("change cell to heading 4"),
                  help: o.msg._("change cell to heading 4"),
                  help_index: "cg",
                  handler: function (e) {
                    e.notebook.to_heading(void 0, 4);
                  },
                },
                "change-cell-to-heading-5": {
                  cmd: o.msg._("change cell to heading 5"),
                  help: o.msg._("change cell to heading 5"),
                  help_index: "ch",
                  handler: function (e) {
                    e.notebook.to_heading(void 0, 5);
                  },
                },
                "change-cell-to-heading-6": {
                  cmd: o.msg._("change cell to heading 6"),
                  help: o.msg._("change cell to heading 6"),
                  help_index: "ci",
                  handler: function (e) {
                    e.notebook.to_heading(void 0, 6);
                  },
                },
                "toggle-cell-output-collapsed": {
                  cmd: o.msg._("toggle cell output"),
                  help: o.msg._("toggle output of selected cells"),
                  help_index: "gb",
                  handler: function (e) {
                    e.notebook.toggle_cells_outputs();
                  },
                },
                "toggle-cell-output-scrolled": {
                  cmd: o.msg._("toggle cell scrolling"),
                  help: o.msg._("toggle output scrolling of selected cells"),
                  help_index: "gc",
                  handler: function (e) {
                    e.notebook.toggle_cells_outputs_scroll();
                  },
                },
                "clear-cell-output": {
                  cmd: o.msg._("clear cell output"),
                  help: o.msg._("clear output of selected cells"),
                  handler: function (e) {
                    e.notebook.clear_cells_outputs();
                  },
                },
                "move-cell-down": {
                  cmd: o.msg._("move cells down"),
                  help: o.msg._("move selected cells down"),
                  icon: "fa-arrow-down",
                  help_index: "eb",
                  handler: function (e) {
                    var t = e.notebook,
                      o = t.get_selected_cell();
                    if (!t.is_breakpoint_cell(o)) {
                      var n = t.find_cell_index(o);
                      (n === t.ncells() - 2 && t.is_breakpoint_index(n + 1)) ||
                        e.notebook.move_cell_down();
                    }
                  },
                },
                "move-cell-up": {
                  cmd: o.msg._("move cells up"),
                  help: o.msg._("move selected cells up"),
                  icon: "fa-arrow-up",
                  help_index: "ea",
                  handler: function (e) {
                    var t = e.notebook,
                      o = t.get_selected_cell();
                    t.is_breakpoint_cell(o) || e.notebook.move_cell_up();
                  },
                },
                "toggle-cell-line-numbers": {
                  cmd: o.msg._("toggle line numbers"),
                  help: o.msg._("toggle line numbers"),
                  help_index: "ga",
                  handler: function (e) {
                    e.notebook.cell_toggle_line_numbers();
                  },
                },
                "show-keyboard-shortcuts": {
                  cmd: o.msg._("show keyboard shortcuts"),
                  help: o.msg._("show keyboard shortcuts"),
                  help_index: "ge",
                  handler: function (e) {
                    e.quick_help.show_keyboard_shortcuts();
                  },
                },
                "delete-cell": {
                  cmd: o.msg._("delete cells"),
                  help: o.msg._("delete selected cells"),
                  help_index: "ej",
                  handler: function (e) {
                    var t = e.notebook;
                    t.is_breakpoint_cell(t.get_selected_cell()) ||
                      e.notebook.delete_cell();
                  },
                },
                "undo-cell-deletion": {
                  cmd: o.msg._("undo cell deletion"),
                  help: o.msg._("undo cell deletion"),
                  help_index: "ei",
                  handler: function (e) {
                    e.notebook.undelete_cell();
                  },
                },
                "merge-cell-with-previous-cell": {
                  cmd: o.msg._("merge cell with previous cell"),
                  help: o.msg._("merge cell above"),
                  handler: function (e) {
                    var t = e.notebook,
                      o = t.get_selected_index();
                    t.is_breakpoint_index(o) ||
                      t.is_breakpoint_index(o - 1) ||
                      e.notebook.merge_cell_above();
                  },
                },
                "merge-cell-with-next-cell": {
                  cmd: o.msg._("merge cell with next cell"),
                  help: o.msg._("merge cell below"),
                  help_index: "ek",
                  handler: function (e) {
                    var t = e.notebook,
                      o = t.get_selected_index();
                    t.is_breakpoint_index(o) ||
                      t.is_breakpoint_index(o + 1) ||
                      e.notebook.merge_cell_below();
                  },
                },
                "merge-selected-cells": {
                  cmd: o.msg._("merge selected cells"),
                  help: o.msg._("merge selected cells"),
                  help_index: "el",
                  handler: function (e) {
                    var t,
                      o = e.notebook,
                      n = l(o.get_selected_cells_indices());
                    try {
                      for (n.s(); !(t = n.n()).done; ) {
                        var r = t.value;
                        if (o.is_breakpoint_index(r)) return;
                      }
                    } catch (e) {
                      n.e(e);
                    } finally {
                      n.f();
                    }
                    e.notebook.merge_selected_cells();
                  },
                },
                "merge-cells": {
                  cmd: o.msg._("merge cells"),
                  help: o.msg._(
                    "merge selected cells, or current cell with cell below if only one cell is selected"
                  ),
                  help_index: "el",
                  handler: function (e) {
                    var t,
                      o = e.notebook,
                      n = o.get_selected_cells_indices(),
                      r = l(n);
                    try {
                      for (r.s(); !(t = r.n()).done; ) {
                        var i = t.value;
                        if (o.is_breakpoint_index(i)) return;
                      }
                    } catch (e) {
                      r.e(e);
                    } finally {
                      r.f();
                    }
                    if (1 === n.length) {
                      var s = n[0];
                      if (o.is_breakpoint_index(s + 1)) return;
                      e.notebook.merge_cell_below();
                    } else e.notebook.merge_selected_cells();
                  },
                },
                "show-command-palette": {
                  help_index: "aa",
                  cmd: o.msg._("show command pallette"),
                  help: o.msg._("open the command palette"),
                  icon: "fa-keyboard-o",
                  handler: function (e) {
                    e.notebook.show_command_palette();
                  },
                },
                "toggle-all-line-numbers": {
                  cmd: o.msg._("toggle all line numbers"),
                  help: o.msg._(
                    "toggles line numbers in all cells, and persist the setting"
                  ),
                  icon: "fa-list-ol",
                  handler: function (e) {
                    var t = !e.notebook.line_numbers;
                    e.notebook.get_cells().map(function (e) {
                      e.code_mirror.setOption("lineNumbers", t);
                    }),
                      (e.notebook.line_numbers = t);
                  },
                },
                "show-all-line-numbers": {
                  cmd: o.msg._("show all line numbers"),
                  help: o.msg._(
                    "show line numbers in all cells, and persist the setting"
                  ),
                  handler: function (e) {
                    e.notebook.get_cells().map(function (e) {
                      e.code_mirror.setOption("lineNumbers", !0);
                    }),
                      (e.notebook.line_numbers = !0);
                  },
                },
                "hide-all-line-numbers": {
                  cmd: o.msg._("hide all line numbers"),
                  help: o.msg._(
                    "hide line numbers in all cells, and persist the setting"
                  ),
                  handler: function (e) {
                    e.notebook.get_cells().map(function (e) {
                      e.code_mirror.setOption("lineNumbers", !1);
                    }),
                      (e.notebook.line_numbers = !1);
                  },
                },
                "toggle-header": {
                  cmd: o.msg._("toggle header"),
                  help: o.msg._("switch between showing and hiding the header"),
                  handler: function (o) {
                    e("#header-container").toggle(),
                      e(".header-bar").toggle(),
                      t.trigger("resize-header.Page");
                  },
                },
                "show-header": {
                  cmd: o.msg._("show the header"),
                  help: o.msg._("show the header"),
                  handler: function (o) {
                    e("#header-container").show(),
                      e(".header-bar").show(),
                      t.trigger("resize-header.Page");
                  },
                },
                "hide-header": {
                  cmd: o.msg._("hide the header"),
                  help: o.msg._("hide the header"),
                  handler: function (o) {
                    e("#header-container").hide(),
                      e(".header-bar").hide(),
                      t.trigger("resize-header.Page");
                  },
                },
                "toggle-menubar": {
                  help: "hide/show the menu bar",
                  handler: function (o) {
                    e("#menubar-container").toggle(),
                      t.trigger("resize-header.Page");
                  },
                },
                "show-menubar": {
                  help: "show the menu bar",
                  handler: function (o) {
                    e("#menubar-container").show(),
                      t.trigger("resize-header.Page");
                  },
                },
                "hide-menubar": {
                  help: "hide the menu bar",
                  handler: function (o) {
                    e("#menubar-container").hide(),
                      t.trigger("resize-header.Page");
                  },
                },
                "toggle-toolbar": {
                  cmd: o.msg._("toggle toolbar"),
                  help: o.msg._(
                    "switch between showing and hiding the toolbar"
                  ),
                  handler: function (o) {
                    e("div#maintoolbar").toggle(),
                      t.trigger("resize-header.Page");
                  },
                },
                "show-toolbar": {
                  cmd: o.msg._("show the toolbar"),
                  help: o.msg._("show the toolbar"),
                  handler: function (o) {
                    e("div#maintoolbar").show(),
                      t.trigger("resize-header.Page");
                  },
                },
                "hide-toolbar": {
                  cmd: o.msg._("hide the toolbar"),
                  help: o.msg._("hide the toolbar"),
                  handler: function (o) {
                    e("div#maintoolbar").hide(),
                      t.trigger("resize-header.Page");
                  },
                },
                "close-pager": {
                  cmd: o.msg._("close the pager"),
                  help: o.msg._("close the pager"),
                  handler: function (e) {
                    e.pager && e.pager.expanded && e.pager.collapse();
                  },
                },
                "auto-indent": {
                  cmd: o.msg._("automatically indent selection"),
                  help: o.msg._("automatically indent selection"),
                  handler: function (e) {
                    e.notebook
                      .get_selected_cell()
                      .code_mirror.execCommand("indentAuto");
                  },
                },
                "close-and-halt": {
                  cmd: o.msg._("shutdown kernel and close window"),
                  help: o.msg._("shutdown kernel and close window"),
                  handler: function (e) {
                    e.notebook.close_and_halt();
                  },
                },
              },
              c = {
                ignore: {
                  cmd: o.msg._("ignore"),
                  handler: function () {
                    return !0;
                  },
                },
                "move-cursor-up": {
                  cmd: o.msg._("move cursor up"),
                  help: o.msg._("move cursor up"),
                  handler: function (e, t) {
                    var o = e.notebook.get_selected_index(),
                      n = e.notebook.get_cell(o),
                      r = e.notebook.get_selected_cell().code_mirror,
                      i = r.getCursor();
                    return (
                      n &&
                        n.at_top() &&
                        0 !== o &&
                        0 === i.ch &&
                        (t && t.preventDefault(),
                        e.notebook.command_mode(),
                        e.notebook.select_prev(!0),
                        e.notebook.edit_mode(),
                        (r =
                          e.notebook.get_selected_cell().code_mirror).setCursor(
                          r.lastLine(),
                          0
                        )),
                      !1
                    );
                  },
                },
                "move-cursor-down": {
                  cmd: o.msg._("move cursor down"),
                  help: o.msg._("move cursor down"),
                  handler: function (e, t) {
                    var o = e.notebook.get_selected_index();
                    return (
                      e.notebook.get_cell(o).at_bottom() &&
                        o !== e.notebook.ncells() - 1 &&
                        (t && t.preventDefault(),
                        e.notebook.command_mode(),
                        e.notebook.select_next(!0),
                        e.notebook.edit_mode(),
                        e.notebook
                          .get_selected_cell()
                          .code_mirror.setCursor(0, 0)),
                      !1
                    );
                  },
                },
                "scroll-notebook-down": {
                  cmd: o.msg._("scroll notebook down"),
                  help: o.msg._("scroll notebook down"),
                  handler: function (e, t) {
                    return (
                      t && t.preventDefault(),
                      e.notebook.scroll_manager.scroll(1)
                    );
                  },
                },
                "scroll-notebook-up": {
                  cmd: o.msg._("scroll notebook up"),
                  help: o.msg._("scroll notebook up"),
                  handler: function (e, t) {
                    return (
                      t && t.preventDefault(),
                      e.notebook.scroll_manager.scroll(-1)
                    );
                  },
                },
                "scroll-cell-center": {
                  cmd: o.msg._("scroll cell center"),
                  help: o.msg._("Scroll the current cell to the center"),
                  handler: function (e, t) {
                    t && t.preventDefault();
                    var o = e.notebook.get_selected_index();
                    return e.notebook.scroll_cell_percent(o, 50, 0);
                  },
                },
                "scroll-cell-top": {
                  cmd: o.msg._("scroll cell top"),
                  help: o.msg._("Scroll the current cell to the top"),
                  handler: function (e, t) {
                    t && t.preventDefault();
                    var o = e.notebook.get_selected_index();
                    return e.notebook.scroll_cell_percent(o, 0, 0);
                  },
                },
                "duplicate-notebook": {
                  cmd: o.msg._("duplicate notebook"),
                  help: o.msg._(
                    "Create and open a copy of the current notebook"
                  ),
                  handler: function (e, t) {
                    e.notebook.copy_notebook();
                  },
                },
                "trust-notebook": {
                  cmd: o.msg._("trust notebook"),
                  help: o.msg._("Trust the current notebook"),
                  handler: function (e, t) {
                    e.notebook.trust_notebook();
                  },
                },
                "rename-notebook": {
                  cmd: o.msg._("rename notebook"),
                  help: o.msg._("Rename the current notebook"),
                  handler: function (e, t) {
                    e.notebook.save_widget.rename_notebook({
                      notebook: e.notebook,
                    });
                  },
                },
                "toggle-all-cells-output-collapsed": {
                  cmd: o.msg._("toggle all cells output collapsed"),
                  help: o.msg._("Toggle the hidden state of all output areas"),
                  handler: function (e, t) {
                    e.notebook.toggle_all_output();
                  },
                },
                "toggle-all-cells-output-scrolled": {
                  cmd: o.msg._("toggle all cells output scrolled"),
                  help: o.msg._(
                    "Toggle the scrolling state of all output areas"
                  ),
                  handler: function (e, t) {
                    e.notebook.toggle_all_output_scroll();
                  },
                },
                "clear-all-cells-output": {
                  cmd: o.msg._("clear all cells output"),
                  help: o.msg._("Clear the content of all the outputs"),
                  handler: function (e, t) {
                    e.notebook.clear_all_output();
                  },
                },
                "save-notebook": {
                  cmd: o.msg._("save notebook"),
                  help: o.msg._("Save and Checkpoint"),
                  help_index: "fb",
                  icon: "fa-save",
                  handler: function (e, t) {
                    return (
                      e.notebook.save_checkpoint(), t && t.preventDefault(), !1
                    );
                  },
                },
                "download-notebook": {
                  cmd: o.msg._("download notebook"),
                  help: o.msg._("Download dit notebook"),
                  help_index: "fc",
                  icon: "fa-save",
                  handler: function (e, t) {
                    return (
                      e.notebook.basthonGUI.download(),
                      t && t.preventDefault(),
                      !1
                    );
                  },
                },
                "open-notebook": {
                  cmd: o.msg._("open notebook, module or file"),
                  help: o.msg._("Open een notebook, laad een module of file"),
                  help_index: "fd",
                  icon: "fa-folder-open-o",
                  handler: function (e, t) {
                    return (
                      e.notebook.basthonGUI.openFile(),
                      t && t.preventDefault(),
                      !1
                    );
                  },
                },
                "share-notebook": {
                  cmd: o.msg._("share notebook"),
                  help: o.msg._("Deel deze notebook"),
                  icon: "fa-share-alt-square",
                  help_index: "fz",
                  handler: function (e, t) {
                    return (
                      e.notebook.basthonGUI.share(), t && t.preventDefault(), !1
                    );
                  },
                },
                rollback: {
                  cmd: o.msg._("rollback notebook"),
                  help: o.msg._("Notebook terugrollen"),
                  icon: "fa-undo",
                  help_index: "fzz",
                  handler: function (e, t) {
                    var o;
                    return (
                      ((o = s().mark(function t() {
                        var o;
                        return s().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  e.notebook.basthonGUI.selectCheckpoint()
                                );
                              case 2:
                                null != (o = t.sent) &&
                                  e.notebook.basthonGUI.setContent(o);
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })),
                      function () {
                        var e = this,
                          t = arguments;
                        return new Promise(function (n, r) {
                          var i = o.apply(e, t);
                          function s(e) {
                            a(i, n, r, s, l, "next", e);
                          }
                          function l(e) {
                            a(i, n, r, s, l, "throw", e);
                          }
                          s(void 0);
                        });
                      })(),
                      t && t.preventDefault(),
                      !1
                    );
                  },
                },
                "switch-theme": {
                  cmd: o.msg._("switch theme"),
                  help: o.msg._("Verander notebook thema (dark/light)"),
                  icon: "fa-adjust",
                  help_index: "fzz",
                  handler: function (e, t) {
                    return (
                      e.notebook.basthonGUI.switchDarkLight(),
                      t && t.preventDefault(),
                      !1
                    );
                  },
                },
              },
              d = function (e, t, o) {
                return (
                  (e["jupyter-notebook:" + t] = {}),
                  (e["jupyter-notebook:" + t].cmd = o[t].cmd),
                  (e["jupyter-notebook:" + t].help =
                    o[t].help || t.replace(/-/g, " ")),
                  (e["jupyter-notebook:" + t].help_index = o[t].help_index),
                  (e["jupyter-notebook:" + t].icon = o[t].icon),
                  o[t].handler
                );
              };
            return (
              (r.prototype._actions = (function () {
                var e,
                  t = {};
                for (e in i)
                  if (i.hasOwnProperty(e)) {
                    var o = d(t, e, i);
                    !(function (e, o) {
                      t["jupyter-notebook:" + e].handler = function (e, t) {
                        return o(e), t && t.preventDefault(), !1;
                      };
                    })(e, o);
                  }
                for (e in c)
                  c.hasOwnProperty(e) &&
                    (function (e, o) {
                      t["jupyter-notebook:" + e].handler = function (e, t) {
                        return o(e, t);
                      };
                    })(e, (o = d(t, e, c)));
                return t;
              })()),
              (r.prototype.extend_env = function (e) {
                for (var t in e) this.env[t] = e[t];
              }),
              (r.prototype.register = function (e, t, o) {
                (e = this.normalise(e)),
                  t || (t = "autogenerated-" + String(e.handler));
                var n = (o = o || "auto") + ":" + t;
                return (this._actions[n] = e), n;
              }),
              (r.prototype.normalise = function (e) {
                if (
                  ("function" == typeof e && (e = { handler: e }),
                  "function" != typeof e.handler)
                )
                  throw new Error("unknown datatype, cannot register");
                var t = e;
                return (
                  ((e = {}).handler = t.handler),
                  (e.help = t.help || ""),
                  (e.icon = t.icon || ""),
                  (e.help_index = t.help_index || ""),
                  e
                );
              }),
              (r.prototype.get_name = function (e) {
                return "string" == typeof e
                  ? (n(e), this.exists(e) ? e : null)
                  : this.register(e);
              }),
              (r.prototype.get = function (e) {
                return n(e), this._actions[e];
              }),
              (r.prototype.call = function (e, t, o) {
                return this._actions[e].handler(o || this.env, t);
              }),
              (r.prototype.exists = function (e) {
                return void 0 !== this._actions[e];
              }),
              { init: r }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    42142: (e, t, o) => {
      var n, r;
      (n = [
        o(19755),
        o(54499),
        o(34960),
        o(4631),
        o(4328),
        o(82801),
        o(14504),
        o(51475),
      ]),
        void 0 ===
          (r = function (e, t, o, n, r, i, s, a) {
            "use strict";
            var l = n.scrollbarModel.native.prototype.overlayHack;
            n.scrollbarModel.native.prototype.overlayHack = function () {
              l.apply(this, arguments),
                /Mac/.test(navigator.platform) &&
                  (this.horiz.style.minHeight = "");
            };
            var c = function e(n) {
              (n = n || {}),
                (this.keyboard_manager = n.keyboard_manager),
                (this.events = n.events),
                n.config,
                (this.selected = !1),
                (this.anchor = !1),
                (this.rendered = !1),
                (this.mode = "command");
              var r = this;
              (this._metadata = {}),
                Object.defineProperty(this, "metadata", {
                  get: function () {
                    return r._metadata;
                  },
                  set: function (e) {
                    (r._metadata = e), r.celltoolbar && r.celltoolbar.rebuild();
                  },
                }),
                Object.defineProperty(this, "cm_config", {
                  get: function () {
                    return (
                      console.warn(
                        o.msg._(
                          "Warning: accessing Cell.cm_config directly is deprecated."
                        )
                      ),
                      r._options.cm_config
                    );
                  },
                }),
                (this.user_highlight = "auto");
              var i = {};
              this.class_config && (i = this.class_config.get_sync());
              var s = new a.ConfigWithDefaults(
                n.config,
                e.options_default,
                "Cell"
              ).get_sync();
              (this._options = t.mergeopt({}, s, i)),
                (this.placeholder = this._options.placeholder || ""),
                (this.cell_id = t.uuid()),
                (this.element = null),
                (this.cell_type = this.cell_type || null),
                (this.code_mirror = null),
                (this.attachments = {}),
                this.create_element(),
                null !== this.element &&
                  (this.element.data("cell", this),
                  this.bind_events(),
                  this.init_classes());
            };
            (c.options_default = {
              cm_config: {
                indentUnit: 4,
                readOnly: !1,
                theme: "default",
                extraKeys: {
                  "Cmd-Right": "goLineRight",
                  End: "goLineRight",
                  "Cmd-Left": "goLineLeft",
                  Tab: "indentMore",
                  "Shift-Tab": "indentLess",
                  "Cmd-/": "toggleComment",
                  "Ctrl-/": "toggleComment",
                },
              },
            }),
              "Safari" == t.browser[0] &&
                (c.options_default.cm_config.dragDrop = !1),
              (c.prototype.create_element = function () {}),
              (c.prototype.init_classes = function () {
                this.selected
                  ? this.element.addClass("selected")
                  : this.element.addClass("unselected"),
                  this.rendered
                    ? this.element.addClass("rendered")
                    : this.element.addClass("unrendered");
              }),
              (c.prototype._on_click = function (e) {
                this.selected
                  ? this.events.trigger("select.Cell", { cell: this })
                  : this.events.trigger("select.Cell", {
                      cell: this,
                      extendSelection: e.shiftKey,
                    });
              }),
              (c.prototype.bind_events = function () {
                var e = this;
                e.element.click(function (t) {
                  e._on_click(t);
                }),
                  this.code_mirror &&
                    this.code_mirror.on("change", function (t, o) {
                      e.events.trigger("change.Cell", { cell: e, change: o }),
                        e.events.trigger("set_dirty.Notebook", { value: !0 });
                    }),
                  this.code_mirror &&
                    this.code_mirror.on("focus", function (t, o) {
                      e.selected ||
                        e.events.trigger("select.Cell", { cell: e }),
                        e.events.trigger("edit_mode.Cell", { cell: e });
                    }),
                  this.code_mirror &&
                    this.code_mirror.on("blur", function (t, o) {
                      e.events.trigger("command_mode.Cell", { cell: e });
                    }),
                  this.element.dblclick(function () {
                    !1 === e.selected &&
                      this.events.trigger("select.Cell", { cell: e });
                  });
              }),
              (c.prototype.handle_codemirror_keyevent = function (e, t) {
                var o = this.keyboard_manager.edit_shortcuts,
                  n = e.getCursor();
                (0 === n.line && 0 === n.ch) ||
                  38 !== t.keyCode ||
                  (t._ipkmIgnore = !0);
                var r = e.lastLine();
                return (
                  40 !== t.keyCode ||
                    (n.line === r && n.ch === e.getLineHandle(r).text.length) ||
                    (t._ipkmIgnore = !0),
                  !!o.handles(t)
                );
              }),
              (c.prototype.typeset = function () {
                t.typeset(this.element);
              }),
              (c.prototype.select = function (e) {
                return (
                  (e = void 0 === e || e) && (this.anchor = !0),
                  !this.selected &&
                    (this.element.addClass("selected"),
                    this.element.removeClass("unselected"),
                    (this.selected = !0),
                    this.notebook.set_insert_image_enabled(!1),
                    !0)
                );
              }),
              (c.prototype.unselect = function (e) {
                return (
                  (e = void 0 === e || e) && (this.anchor = !1),
                  !!this.selected &&
                    (this.element.addClass("unselected"),
                    this.element.removeClass("selected"),
                    (this.selected = !1),
                    !0)
                );
              }),
              (c.prototype.execute = function () {}),
              (c.prototype.render = function () {
                return (
                  !this.rendered &&
                  (this.element.addClass("rendered"),
                  this.element.removeClass("unrendered"),
                  (this.rendered = !0),
                  !0)
                );
              }),
              (c.prototype.unrender = function () {
                return (
                  !!this.rendered &&
                  (this.element.addClass("unrendered"),
                  this.element.removeClass("rendered"),
                  (this.rendered = !1),
                  !0)
                );
              }),
              (c.prototype.handle_keyevent = function (e, t) {
                return (
                  "command" === this.mode ||
                  ("edit" === this.mode
                    ? this.handle_codemirror_keyevent(e, t)
                    : void 0)
                );
              }),
              (c.prototype.at_top = function () {
                var e = this.code_mirror.getCursor();
                return 0 === e.line && 0 === e.ch;
              }),
              (c.prototype.at_bottom = function () {
                var e = this.code_mirror,
                  t = e.getCursor();
                return (
                  t.line === e.lineCount() - 1 &&
                  t.ch === e.getLine(t.line).length
                );
              }),
              (c.prototype.command_mode = function () {
                return "command" !== this.mode && ((this.mode = "command"), !0);
              }),
              (c.prototype.edit_mode = function () {
                return "edit" !== this.mode && ((this.mode = "edit"), !0);
              }),
              (c.prototype.ensure_focused = function () {
                this.element === document.activeElement ||
                  this.code_mirror.hasFocus() ||
                  this.focus_cell();
              }),
              (c.prototype.focus_cell = function () {
                this.element.focus(), this._on_click({});
              }),
              (c.prototype.focus_editor = function () {
                this.refresh(), this.code_mirror.focus();
              }),
              (c.prototype.refresh = function () {
                this.code_mirror && this.code_mirror.refresh();
              }),
              (c.prototype.get_text = function () {}),
              (c.prototype.set_text = function (e) {}),
              (c.prototype.toJSON = function () {
                var e = {};
                return (
                  (e.metadata = JSON.parse(JSON.stringify(this.metadata))),
                  e.metadata.deletable && delete e.metadata.deletable,
                  e.metadata.editable && delete e.metadata.editable,
                  !1 === e.metadata.collapsed && delete e.metadata.collapsed,
                  (e.cell_type = this.cell_type),
                  e
                );
              }),
              (c.prototype.fromJSON = function (e) {
                void 0 !== e.metadata && (this.metadata = e.metadata);
              }),
              (c.prototype.is_splittable = function () {
                return this.is_deletable();
              }),
              (c.prototype.is_mergeable = function () {
                return this.is_deletable();
              }),
              (c.prototype.is_editable = function () {
                return !1 !== this.metadata.editable;
              }),
              (c.prototype.is_deletable = function () {
                return !(!1 === this.metadata.deletable || !this.is_editable());
              }),
              (c.prototype.get_pre_cursor = function () {
                var e = this.code_mirror.getCursor(),
                  t = this.code_mirror.getRange({ line: 0, ch: 0 }, e);
                return t.replace(/^\n+/, "").replace(/\n+$/, "");
              }),
              (c.prototype.get_post_cursor = function () {
                var e = this.code_mirror.getCursor(),
                  t = this.code_mirror.lineCount() - 1,
                  o = { line: t, ch: this.code_mirror.getLine(t).length },
                  n = this.code_mirror.getRange(e, o);
                return n.replace(/^\n+/, "").replace(/\n+$/, "");
              }),
              (c.prototype.show_line_numbers = function (e) {
                this.code_mirror.setOption("lineNumbers", e),
                  this.code_mirror.refresh();
              }),
              (c.prototype.toggle_line_numbers = function () {
                var e = this.code_mirror.getOption("lineNumbers");
                this.show_line_numbers(!e);
              }),
              (c.prototype.force_highlight = function (e) {
                (this.user_highlight = e), this.auto_highlight();
              }),
              (c.prototype.auto_highlight = function () {
                this._auto_highlight(
                  this.class_config.get_sync("highlight_modes")
                );
              }),
              (c.prototype._auto_highlight = function (e) {
                var o,
                  r = this;
                if (
                  void 0 !== this.user_highlight &&
                  "auto" != this.user_highlight
                )
                  return (
                    (o = this.user_highlight),
                    n.autoLoadMode(this.code_mirror, o),
                    void this.code_mirror.setOption("mode", o)
                  );
                var i,
                  s = this.code_mirror.getOption("mode", o),
                  a = this.code_mirror.getLine(0);
                for (o in e)
                  for (var l = e[o].reg, c = 0; c < l.length; c++) {
                    var d = l[c];
                    if (
                      ("string" == typeof d && (d = new RegExp(d)),
                      null !== a.match(d))
                    ) {
                      if (s == o) return;
                      if (0 !== o.search("magic_"))
                        return void t.requireCodeMirrorMode(o, function (e) {
                          r.code_mirror.setOption("mode", e);
                        });
                      var u = o;
                      if (((o = u.substr(6)), s == u)) return;
                      return void t.requireCodeMirrorMode(o, function (e) {
                        n.defineMode(u, function (t) {
                          return n.overlayMode(n.getMode(t, e), {
                            startState: function () {
                              return { firstMatched: !1, inMagicLine: !1 };
                            },
                            token: function (e, t) {
                              return (
                                t.firstMatched ||
                                  ((t.firstMatched = !0),
                                  e.match("%%", !1) && (t.inMagicLine = !0)),
                                t.inMagicLine
                                  ? (e.eat(function (e) {
                                      return !0;
                                    }),
                                    e.eol() && (t.inMagicLine = !1),
                                    "magic")
                                  : (e.skipToEnd(), null)
                              );
                            },
                          });
                        }),
                          r.code_mirror.setOption("mode", u);
                      });
                    }
                  }
                try {
                  i = this._options.cm_config.mode;
                } catch (e) {
                  i = "text/plain";
                }
                s !== i && this.code_mirror.setOption("mode", i);
              });
            var d = function (e) {
              c.apply(this, arguments),
                (this.cell_type = "unrecognized"),
                (this.celltoolbar = null),
                (this.data = {}),
                Object.seal(this);
            };
            return (
              ((d.prototype = Object.create(c.prototype)).is_mergeable =
                function () {
                  return !1;
                }),
              (d.prototype.is_splittable = function () {
                return !1;
              }),
              (d.prototype.toJSON = function () {
                return JSON.parse(JSON.stringify(this.data));
              }),
              (d.prototype.fromJSON = function (e) {
                (this.data = e),
                  void 0 !== e.metadata
                    ? (this.metadata = e.metadata)
                    : (e.metadata = this.metadata),
                  this.element
                    .find(".inner_cell")
                    .find("a")
                    .text(
                      o.msg.sprintf(
                        o.msg._("Unrecognized cell type: %s"),
                        e.cell_type
                      )
                    );
              }),
              (d.prototype.create_element = function () {
                c.prototype.create_element.apply(this, arguments);
                var t = (this.element = e("<div>").addClass(
                  "cell unrecognized_cell"
                ));
                t.attr("tabindex", "2");
                var n = e("<div/>").addClass("prompt input_prompt");
                t.append(n);
                var r = e("<div/>").addClass("inner_cell");
                r.append(
                  e("<a>")
                    .attr("href", "#")
                    .text(o.msg._("Unrecognized cell type"))
                ),
                  t.append(r),
                  (this.element = t);
              }),
              (d.prototype.bind_events = function () {
                c.prototype.bind_events.apply(this, arguments);
                var e = this;
                this.element
                  .find(".inner_cell")
                  .find("a")
                  .click(function () {
                    e.events.trigger("unrecognized_cell.Cell", { cell: e });
                  });
              }),
              { Cell: c, UnrecognizedCell: d }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    27148: (e, t, o) => {
      var n, r;
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          i(e)
        );
      }
      (n = [o(19755), o(3574), o(10267), o(34960)]),
        void 0 ===
          (r = function (e, t, o, n) {
            "use strict";
            var r = function e(t) {
              return (
                e._instances.push(this),
                (this.notebook = t.notebook),
                (this.cell = t.cell),
                this.create_element(),
                this.rebuild(),
                this
              );
            };
            return (
              (r.prototype.create_element = function () {
                (this.inner_element = e("<div/>").addClass("celltoolbar")),
                  (this.element = e("<div/>")
                    .addClass("ctb_hideshow")
                    .append(this.inner_element));
              }),
              (r.global_hide = function () {
                e("body").removeClass("ctb_global_show");
              }),
              (r.global_show = function () {
                e("body").addClass("ctb_global_show");
              }),
              (r.prototype.hide = function () {
                this.element.removeClass("ctb_show");
              }),
              (r.prototype.show = function () {
                this.element.addClass("ctb_show");
              }),
              (r._callback_dict = {}),
              (r._ui_controls_list = []),
              (r._instances = []),
              (r._presets = {}),
              (r.register_callback = function (e, t, o) {
                r._callback_dict[e] = o ? { callback: t, cell_types: o } : t;
              }),
              (r.register_preset = function (e, t, n) {
                (r._presets[e] = t),
                  o.trigger("preset_added.CellToolbar", { name: e }),
                  n &&
                    n.metadata &&
                    n.metadata.celltoolbar === e &&
                    r.activate_preset(e);
              }),
              (r.unregister_preset = function (e) {
                return (
                  !!r._presets[e] &&
                  (delete r._presets[e],
                  o.trigger("unregistered_preset.CellToolbar", { name: e }),
                  !0)
                );
              }),
              (r.list_presets = function () {
                var e = [];
                for (var t in r._presets) e.push(t);
                return e;
              }),
              (r.activate_preset = function (e) {
                var t = r._presets[e];
                void 0 !== t && ((r._ui_controls_list = t), r.rebuild_all()),
                  o.trigger("preset_activated.CellToolbar", { name: e });
              }),
              (r.rebuild_all = function () {
                for (var e = 0; e < r._instances.length; e++)
                  r._instances[e].rebuild();
              }),
              (r.prototype.rebuild = function () {
                this.inner_element.empty(), (this.ui_controls_list = []);
                for (
                  var t = r._callback_dict, o = r._ui_controls_list, s = 0;
                  s < o.length;
                  s++
                ) {
                  var a = o[s],
                    l = t[a];
                  if (l) {
                    if ("object" === i(l)) {
                      if (-1 === l.cell_types.indexOf(this.cell.cell_type))
                        continue;
                      l = l.callback;
                    }
                    var c = e("<div/>").addClass("button_container");
                    try {
                      l(c, this.cell, this), this.ui_controls_list.push(a);
                    } catch (e) {
                      console.log(
                        n.msg.sprintf(
                          n.msg._("Error in cell toolbar callback %s"),
                          a
                        ),
                        e
                      );
                      continue;
                    }
                    this.inner_element.append(c);
                  }
                }
                this.ui_controls_list.length ? this.show() : this.hide();
              }),
              ((r.utils = {}).checkbox_ui_generator = function (t, o, n) {
                return function (r, i, s) {
                  var a = e(r),
                    l = e("<input/>").attr("type", "checkbox"),
                    c = e("<label/>").append(e("<span/>").text(t));
                  l.attr("checked", n(i)),
                    l.click(function () {
                      var e = n(i);
                      o(i, !e), l.attr("checked", !e);
                    }),
                    a.append(e("<span/>").append(c).append(l));
                };
              }),
              (r.utils.input_ui_generator = function (o, n, r) {
                return function (i, s, a) {
                  var l = e(i),
                    c = e("<input/>").attr("type", "text"),
                    d = e("<label/>").append(e("<span/>").text(o));
                  c.attr("value", r(s)),
                    c.keyup(function () {
                      n(s, c.val());
                    }),
                    l.append(e("<span/>").append(d).append(c)),
                    t.keyboard_manager.register_events(c);
                };
              }),
              (r.utils.select_ui_generator = function (t, o, n, r) {
                return (
                  (r = r || ""),
                  function (i, s, a) {
                    var l = e(i),
                      c = e("<label/>").append(e("<span/>").text(r)),
                      d = e("<select/>");
                    s.is_editable() || d.attr("disabled", "disabled");
                    for (var u = 0; u < t.length; u++) {
                      var p = e("<option/>")
                        .attr("value", t[u][1])
                        .text(t[u][0]);
                      d.append(p);
                    }
                    d.val(n(s)),
                      d.change(function () {
                        o(s, d.val());
                      }),
                      l.append(e("<span/>").append(c).append(d));
                  }
                );
              }),
              (t.CellToolbar = r),
              { CellToolbar: r }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    47704: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(27148), o(46013), o(34960)]),
        void 0 ===
          (r = function (e, t, o, n) {
            "use strict";
            var r = t.CellToolbar,
              i = function (t, r) {
                var i = e(t),
                  s = e("<button />")
                    .addClass("btn btn-default btn-xs")
                    .text(n.msg._("Edit Attachments"))
                    .click(function () {
                      return (
                        (function (e) {
                          o.edit_attachments({
                            attachments: e.attachments,
                            callback: function (t) {
                              (e.attachments = t), e.unrender(), e.render();
                            },
                            name: "Cell",
                            notebook: e.notebook,
                            keyboard_manager: e.keyboard_manager,
                          });
                        })(r),
                        !1
                      );
                    });
                i.append(s);
              };
            return {
              register: function (e) {
                r.register_callback("attachments.edit", i);
                var t = [];
                t.push("attachments.edit"),
                  r.register_preset(n.msg._("Attachments"), t, e);
              },
            };
          }.apply(t, n)) || (e.exports = r);
    },
    47524: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(27148), o(46013), o(34960)]),
        void 0 ===
          (r = function (e, t, o, n) {
            "use strict";
            var r = t.CellToolbar,
              i = function (e, t) {
                o.edit_metadata({
                  md: e.metadata,
                  callback: function (t) {
                    e.metadata = t;
                  },
                  name: n.msg._("Cell"),
                  notebook: this.notebook,
                  keyboard_manager: this.keyboard_manager,
                  edit_metadata_button: t,
                });
              },
              s = function (t, o) {
                var r = e(t),
                  s = e("<button/>")
                    .addClass("btn btn-default btn-xs")
                    .text(n.msg._("Edit Metadata"))
                    .click(function () {
                      return i(o, this), !1;
                    });
                r.append(s);
              };
            return {
              register: function (t) {
                r.register_callback("default.rawedit", s),
                  (i = e.proxy(i, {
                    notebook: t,
                    keyboard_manager: t.keyboard_manager,
                  }));
                var o = [];
                o.push("default.rawedit"),
                  r.register_preset(n.msg._("Edit Metadata"), o, t);
              },
            };
          }.apply(t, n)) || (e.exports = r);
    },
    68262: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(27148), o(46013), o(58812), o(34960)]),
        void 0 ===
          (r = function (e, t, o, n, r) {
            "use strict";
            var i = t.CellToolbar,
              s = [],
              a = i.utils.select_ui_generator(
                [
                  [r.msg._("None"), "-"],
                  ["LaTeX", "text/latex"],
                  ["reST", "text/restructuredtext"],
                  ["HTML", "text/html"],
                  ["Markdown", "text/markdown"],
                  ["Python", "text/x-python"],
                  [r.msg._("Custom"), "dialog"],
                ],
                function (t, o) {
                  if ("-" === o) delete t.metadata.raw_mimetype;
                  else if ("dialog" === o) {
                    var i = e("<div/>")
                      .append(
                        e("<p/>").text(
                          r.msg._("Set the MIME type of the raw cell:")
                        )
                      )
                      .append(e("<br/>"))
                      .append(
                        e("<input/>")
                          .attr("type", "text")
                          .attr("size", "25")
                          .val(t.metadata.raw_mimetype || "-")
                      );
                    i.modal({
                      title: r.msg._("Raw Cell MIME Type"),
                      body: i,
                      buttons: {
                        Cancel: {},
                        OK: {
                          class: "btn-primary",
                          click: function () {
                            console.log(t),
                              (t.metadata.raw_mimetype = e(this)
                                .find("input")
                                .val()),
                              console.log(t.metadata);
                          },
                        },
                      },
                      open: function (t, o) {
                        var r = e(this);
                        r.find('input[type="text"]').keydown(function (e, t) {
                          if (e.which === n.keycodes.enter)
                            return r.find(".btn-primary").first().click(), !1;
                        }),
                          r.find('input[type="text"]').focus().select();
                      },
                    });
                  } else t.metadata.raw_mimetype = o;
                },
                function (e) {
                  return e.metadata.raw_mimetype || "";
                },
                r.msg._("Raw NBConvert Format")
              );
            return {
              register: function (e) {
                i.register_callback("raw_cell.select", a, ["raw"]),
                  s.push("raw_cell.select"),
                  i.register_preset(r.msg._("Raw Cell Format"), s, e);
              },
            };
          }.apply(t, n)) || (e.exports = r);
    },
    39903: (e, t, o) => {
      var n, r;
      (n = [o(27148), o(34960)]),
        void 0 ===
          (r = function (e, t) {
            "use strict";
            var o = e.CellToolbar,
              n = [],
              r = o.utils.select_ui_generator(
                [
                  ["-", "-"],
                  [t.msg._("Slide"), "slide"],
                  [t.msg._("Sub-Slide"), "subslide"],
                  [t.msg._("Fragment"), "fragment"],
                  [t.msg._("Skip"), "skip"],
                  [t.msg._("Notes"), "notes"],
                ],
                function (e, t) {
                  void 0 === e.metadata.slideshow &&
                    (e.metadata.slideshow = {}),
                    (e.metadata.slideshow.slide_type = t);
                },
                function (e) {
                  var t = e.metadata.slideshow;
                  return void 0 === t ? void 0 : t.slide_type;
                },
                t.msg._("Slide Type")
              );
            return {
              register: function (e) {
                o.register_callback("slideshow.select", r),
                  n.push("slideshow.select"),
                  o.register_preset(t.msg._("Slideshow"), n, e);
              },
            };
          }.apply(t, n)) || (e.exports = r);
    },
    33211: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(27148), o(3574), o(46013), o(34960)]),
        void 0 ===
          (r = function (e, t, o, n, r) {
            "use strict";
            var i = t.CellToolbar,
              s = function (e, t) {
                return e.filter(function (e) {
                  return -1 === t.indexOf(e);
                });
              },
              a = function (e, t, o) {
                if (o) {
                  if (void 0 === e.metadata.tags) e.metadata.tags = [];
                  else if (-1 !== e.metadata.tags.indexOf(t)) return !1;
                  e.metadata.tags.push(t);
                } else {
                  if (!e.metadata || !e.metadata.tags) return !1;
                  var n = e.metadata.tags.indexOf(t);
                  -1 !== n && e.metadata.tags.splice(n, 1),
                    0 === e.metadata.tags.length && delete e.metadata.tags;
                }
                return (
                  e.events.trigger("set_dirty.Notebook", { value: !0 }), !0
                );
              },
              l = function (e) {
                return e.split(/[,\s]+/);
              },
              c = function (t, o, n) {
                var r = e("<span/>").addClass("cell-tag").text(t);
                if (n) {
                  var i = e("<i/>")
                    .addClass("remove-tag-btn")
                    .addClass("fa fa-times")
                    .click(function () {
                      return o(t), !1;
                    });
                  r.append(i);
                }
                return r;
              },
              d = function (t, i) {
                var d = e(t);
                d.addClass("tags_button_container");
                var u = e("<span/>").addClass("tag-container"),
                  p = (function (e, t) {
                    return function (o) {
                      if (a(e, o, !1)) {
                        var n = jQuery.data(t, "tag_map") || {},
                          r = n[o];
                        delete n[o], r.remove();
                      }
                    };
                  })(i, u),
                  h = (function (e, t, o) {
                    var n = e.metadata.tags || [];
                    if (!Array.isArray(n)) return !1;
                    for (var r = {}, i = 0; i < n.length; ++i) {
                      var s = n[i];
                      if ("string" != typeof s) return !1;
                      var a = c(s, o, e.is_editable());
                      t.append(a), (r[s] = a);
                    }
                    return jQuery.data(t, "tag_map", r), !0;
                  })(i, u, p);
                if (h) {
                  d.append(u);
                  var _ = (function (e, t, o) {
                    return function (n) {
                      if ("" !== n && a(e, n, !0)) {
                        var r = c(n, o, e.is_editable());
                        t.append(r);
                        var i = jQuery.data(t, "tag_map") || {};
                        (i[n] = r), jQuery.data(t, "tag_map", i);
                      }
                    };
                  })(i, u, p);
                  i.is_editable() &&
                    (function (t, i, a, c) {
                      var d = e(t),
                        u = e("<input/>").attr("type", "text"),
                        p = e("<button />")
                          .addClass("btn btn-default btn-xs")
                          .text(r.msg._("Add tag"))
                          .click(function () {
                            for (
                              var e = l(u[0].value), t = 0;
                              t < e.length;
                              ++t
                            )
                              a(e[t]);
                            return (u[0].value = ""), !1;
                          });
                      u.keyup(function (e) {
                        13 == e.keyCode && p.click();
                      });
                      var h = e("<span/>").addClass("tags-input");
                      (function (t, o, i, a) {
                        var c = e("<button />")
                          .addClass("btn btn-default btn-xs tags-dialog-btn")
                          .text("...")
                          .click(function () {
                            return (
                              (function (t, o, i) {
                                var a = t.metadata.tags || [],
                                  c = r.msg._(
                                    "Edit the list of tags below. All whitespace is treated as tag separators."
                                  ),
                                  d = e("<textarea/>")
                                    .attr(
                                      "aria-label",
                                      r.msg._("Edit the tags in the text area")
                                    )
                                    .attr("rows", "13")
                                    .attr("cols", "80")
                                    .attr("name", "tags")
                                    .text(a.join("\n")),
                                  u = e("<div/>")
                                    .attr("title", r.msg._("Edit the tags"))
                                    .append(
                                      e("<form/>").append(
                                        e("<fieldset/>")
                                          .append(
                                            e("<label/>")
                                              .attr("for", "tags")
                                              .text(c)
                                          )
                                          .append(e("<br/>"))
                                          .append(d)
                                      )
                                    );
                                n.modal({
                                  title: r.msg._("Edit Tags"),
                                  body: u,
                                  default_button: "Cancel",
                                  buttons: {
                                    Cancel: {},
                                    Edit: {
                                      class: "btn-primary",
                                      click: function () {
                                        for (
                                          var e = t.metadata.tags || [],
                                            n = l(d[0].value),
                                            r = s(n, e),
                                            a = s(e, n),
                                            c = 0;
                                          c < r.length;
                                          ++c
                                        )
                                          o(r[c]);
                                        for (c = 0; c < a.length; ++c) i(a[c]);
                                      },
                                    },
                                  },
                                  notebook: t.notebook,
                                  keyboard_manager: t.keyboard_manager,
                                });
                              })(o, i, a),
                              !1
                            );
                          });
                        t.append(c);
                      })(h, i, a, c),
                        d.append(h.append(u).append(p)),
                        o.keyboard_manager.register_events(u);
                    })(t, i, _, p);
                }
              };
            return {
              register: function (e) {
                i.register_callback("tags.edit", d);
                var t = [];
                t.push("tags.edit"), i.register_preset("Tags", t, e);
              },
            };
          }.apply(t, n)) || (e.exports = r);
    },
    14397: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(3574), o(54499), o(34960), o(46013)]),
        void 0 ===
          (r = function (e, t, o, n, r) {
            var i = '<pre class="jupyter-nb-cells-json">',
              s = "</pre>";
            function a(e) {
              "command" === t.notebook.mode &&
                window.getSelection().isCollapsed &&
                !(function (e) {
                  return (
                    void 0 !== e.target.selectionStart &&
                    void 0 !== e.target.selectionEnd &&
                    e.target.selectionEnd - e.target.selectionStart > 0
                  );
                })(e) &&
                ((function (e, t) {
                  var o = JSON.stringify(e),
                    n = e
                      .map(function (e) {
                        return e.source;
                      })
                      .join("\n\n");
                  t.setData("text/plain", n),
                    t.setData("text/html", i + o + s),
                    t.setData("application/json", o);
                })(
                  t.notebook.get_selected_cells().map(function (e) {
                    return e.toJSON();
                  }),
                  e.clipboardData
                ),
                e.preventDefault());
            }
            function l(e) {
              if ("command" === t.notebook.mode) {
                var o, r, a;
                if (
                  (console.log(
                    n.msg.sprintf(
                      n.msg._("Clipboard types: %s"),
                      e.clipboardData.types
                    )
                  ),
                  (cells =
                    ((r = (o = e.clipboardData.getData("text/html")).indexOf(
                      i
                    )),
                    (a = o.lastIndexOf(s)),
                    -1 === r || -1 === a
                      ? null
                      : JSON.parse(o.slice(r + 35, a)))),
                  Array.isArray(cells) &&
                    cells.length > 0 &&
                    cells[0].cell_type &&
                    cells[0].source)
                ) {
                  for (var l = null, c = 0; c < cells.length; c++) {
                    var d = cells[c],
                      u = t.notebook.insert_cell_above(d.cell_type);
                    u.fromJSON(d), null === l && (l = u);
                  }
                  l.focus_cell();
                }
                e.preventDefault();
              }
            }
            function c(e) {
              return function () {
                t.keyboard_manager.enabled && e.apply(this, arguments);
              };
            }
            return {
              setup_clipboard_events: function () {
                var i, s;
                document.addEventListener("copy", c(a)),
                  -1 !== navigator.userAgent.indexOf("Firefox")
                    ? ((i = {
                        icon: "fa-clipboard",
                        help: n.msg._("Dialog for paste from system clipboard"),
                        help_index: "zz",
                        handler: function () {
                          var i = e('<input type="text"/>');
                          i.css("opacity", 0),
                            document.addEventListener("paste", function e(t) {
                              l(t),
                                c.find(".close").click(),
                                document.removeEventListener("paste", e);
                            });
                          var s = n.msg._("Ctrl-V");
                          "MacOS" === o.platform && (s = n.msg._("Cmd-V"));
                          var a = e("<div/>")
                              .append("<p>")
                              .append(
                                n.msg.sprintf(
                                  n.msg._("Press %s again to paste"),
                                  s
                                )
                              )
                              .append("<br/>")
                              .append("<p><b>")
                              .append(n.msg._("Why is this needed? "))
                              .append("</b>")
                              .append(
                                n.msg._(
                                  "We can't get paste events in this browser without a text box. "
                                )
                              )
                              .append(
                                n.msg._(
                                  "There's an invisible text box focused in this dialog."
                                )
                              )
                              .append(e("<form/>").append(i)),
                            c = r.modal({
                              notebook: t.notebook,
                              keyboard_manager: t.keyboard_manager,
                              title: n.msg.sprintf(n.msg._("%s to paste"), s),
                              body: a,
                              open: function () {
                                i.focus();
                              },
                              buttons: { Cancel: {} },
                            });
                        },
                      }),
                      (s = t.actions.register(
                        i,
                        "paste-dialog",
                        "system-clipboard"
                      )),
                      t.keyboard_manager.command_shortcuts.add_shortcut(
                        "Cmdtrl-V",
                        s
                      ))
                    : document.addEventListener("paste", c(l));
              },
            };
          }.apply(t, n)) || (e.exports = r);
    },
    57017: (e, t, o) => {
      var n, r;
      (n = [
        o(19755),
        o(3574),
        o(54499),
        o(34960),
        o(58812),
        o(51475),
        o(42142),
        o(825),
        o(11341),
        o(27148),
        o(4631),
        o(5321),
        o(72103),
      ]),
        void 0 ===
          (r = function (e, t, o, n, r, i, s, a, l, c, d, u, p) {
            "use strict";
            var h = s.Cell;
            d.commands.delSpaceToPrevTabStop = function (e) {
              var t,
                o,
                n = e.getCursor(!0);
              if (
                ((o = e.getCursor(!1)),
                (t = n).line !== o.line || t.ch !== o.ch)
              )
                for (
                  var r = e.listSelections(), i = r.length - 1;
                  i >= 0;
                  i--
                ) {
                  var s = r[i].head,
                    a = r[i].anchor;
                  e.replaceRange("", d.Pos(s.line, s.ch), d.Pos(a.line, a.ch));
                }
              else {
                var l = e.getCursor(),
                  c = (e.getLine(l.line), e.getOption("tabSize")),
                  u = l.ch - (Math.ceil(l.ch / c) - 1) * c;
                (n = { ch: l.ch - u, line: l.line }),
                  null !== e.getRange(n, l).match(/^\ +$/)
                    ? e.replaceRange("", n, l)
                    : e.deleteH(-1, "char");
              }
            };
            var _ = r.keycodes,
              m = function e(t, o) {
                (this.kernel = t || null),
                  (this.notebook = o.notebook),
                  (this.collapsed = !1),
                  (this.events = o.events),
                  (this.tooltip = o.tooltip),
                  (this.config = o.config),
                  (this.class_config = new i.ConfigWithDefaults(
                    this.config,
                    e.options_default,
                    "CodeCell"
                  )),
                  (this.input_prompt_number = null),
                  (this.celltoolbar = null),
                  (this.output_area = null),
                  (this.last_msg_id = null),
                  (this.completer = null),
                  h.apply(this, [
                    {
                      config: o.config,
                      keyboard_manager: o.keyboard_manager,
                      events: this.events,
                    },
                  ]),
                  (this.cell_type = "code");
                var n = this;
                this.element.focusout(function () {
                  n.auto_highlight();
                });
              };
            return (
              (m.options_default = {
                cm_config: {
                  extraKeys: { Backspace: "delSpaceToPrevTabStop" },
                  mode: "text",
                  theme: "ipython",
                  matchBrackets: !0,
                  autoCloseBrackets: !0,
                },
                highlight_modes: {
                  magic_javascript: { reg: ["^%%javascript"] },
                  magic_perl: { reg: ["^%%perl"] },
                  magic_ruby: { reg: ["^%%ruby"] },
                  magic_python: { reg: ["^%%python3?"] },
                  magic_shell: { reg: ["^%%bash"] },
                  magic_r: { reg: ["^%%R"] },
                  "magic_text/x-cython": { reg: ["^%%cython"] },
                },
              }),
              (m.msg_cells = {}),
              ((m.prototype = Object.create(h.prototype)).create_element =
                function () {
                  h.prototype.create_element.apply(this, arguments);
                  var t = this,
                    o = e("<div></div>").addClass("cell code_cell");
                  o.attr("tabindex", "2");
                  var r = e("<div></div>").addClass("input");
                  this.input = r;
                  var i = e("<div/>").addClass("prompt_container"),
                    s = e("<div></div>").addClass("run_this_cell");
                  s.prop("title", "Run this cell"),
                    s.append('<i class="fa-step-forward fa"></i>'),
                    s.click(function (e) {
                      e.stopImmediatePropagation(), t.execute();
                    });
                  var u = e("<div/>").addClass("prompt input_prompt"),
                    p = e("<div/>").addClass("inner_cell");
                  (this.celltoolbar = new c.CellToolbar({
                    cell: this,
                    notebook: this.notebook,
                  })),
                    p.append(this.celltoolbar.element);
                  var _ = e("<div/>")
                    .addClass("input_area")
                    .attr("aria-label", n.msg._("Edit code here"));
                  (this.code_mirror = new d(_.get(0), this._options.cm_config)),
                    this.code_mirror.on("focus", function () {
                      t.keyboard_manager && t.keyboard_manager.enable(),
                        t.code_mirror.setOption("readOnly", !t.is_editable());
                    }),
                    this.code_mirror.on(
                      "keydown",
                      e.proxy(this.handle_keyevent, this)
                    ),
                    e(this.code_mirror.getInputField()).attr(
                      "spellcheck",
                      "false"
                    ),
                    p.append(_),
                    i.append(u).append(s),
                    r.append(i).append(p);
                  var m = e("<div></div>");
                  o.append(r).append(m),
                    (this.element = o),
                    (this.output_area = new a.OutputArea({
                      config: this.config,
                      selector: m,
                      prompt_area: !0,
                      events: this.events,
                      keyboard_manager: this.keyboard_manager,
                    })),
                    (this.completer = new l.Completer(this, this.events));
                }),
              (m.prototype.bind_events = function () {
                h.prototype.bind_events.apply(this, arguments);
                var e = this;
                this.element.focusout(function () {
                  e.auto_highlight();
                }),
                  this.events.on("kernel_restarting.Kernel", function () {
                    "*" === e.input_prompt_number && e.set_input_prompt();
                  });
              }),
              (m.prototype.handle_codemirror_keyevent = function (e, t) {
                var o = null;
                "keydown" === t.type &&
                  t.which !== _.tab &&
                  (o = this.tooltip.remove_and_cancel_tooltip());
                var n = e.getCursor();
                if (
                  (t.keyCode === _.enter && this.auto_highlight(),
                  t.which === _.down &&
                    "keypress" === t.type &&
                    this.tooltip.time_before_tooltip >= 0)
                )
                  this.tooltip.pending(this, !0);
                else {
                  if (o && t.which === _.esc && "keydown" === t.type)
                    return (
                      this.tooltip._hidden ||
                        this.tooltip.remove_and_cancel_tooltip(!0),
                      (t.codemirrorIgnore = !0),
                      (t._ipkmIgnore = !0),
                      t.preventDefault(),
                      !0
                    );
                  if (
                    t.keyCode === _.tab &&
                    "keydown" === t.type &&
                    t.shiftKey
                  ) {
                    if (
                      e.somethingSelected() ||
                      1 !== e.getSelections().length
                    ) {
                      var r = e.getCursor("anchor"),
                        i = e.getCursor("head");
                      if (r.line !== i.line) return !1;
                    }
                    return (
                      "" !== e.getRange({ line: n.line, ch: 0 }, n).trim() &&
                      (this.tooltip.request(this),
                      (t.codemirrorIgnore = !0),
                      t.preventDefault(),
                      !0)
                    );
                  }
                  if (t.keyCode === _.tab && "keydown" === t.type)
                    return (
                      this.tooltip.remove_and_cancel_tooltip(),
                      !(
                        e.somethingSelected() ||
                        e.getSelections().length > 1 ||
                        "" === e.getRange({ line: n.line, ch: 0 }, n).trim() ||
                        ((t.codemirrorIgnore = !0),
                        t.preventDefault(),
                        this.completer.startCompletion(),
                        0)
                      )
                    );
                }
                return h.prototype.handle_codemirror_keyevent.apply(this, [
                  e,
                  t,
                ]);
              }),
              (m.prototype.set_kernel = function (e) {
                this.kernel = e;
              }),
              (m.prototype.execute = function (e) {
                if (this.kernel) {
                  void 0 === e &&
                    (e =
                      void 0 === this.metadata ||
                      void 0 === this.metadata.tags ||
                      -1 === this.metadata.tags.indexOf("raises-exception")),
                    this.clear_output(!1, !0);
                  var t = this.last_msg_id;
                  if (
                    (t &&
                      (this.kernel.clear_callbacks_for_msg(t),
                      delete m.msg_cells[t],
                      (this.last_msg_id = null)),
                    0 !== this.get_text().trim().length)
                  ) {
                    this.set_input_prompt("*"),
                      this.element.addClass("running");
                    var o = this.get_callbacks();
                    (this.last_msg_id = this.kernel.execute(
                      this.get_text(),
                      o,
                      { silent: !1, store_history: !0, stop_on_error: e }
                    )),
                      (m.msg_cells[this.last_msg_id] = this),
                      this.render(),
                      this.events.trigger("execute.CodeCell", { cell: this });
                    var r = this;
                    this.events.on("finished_iopub.Kernel", function e(t, o) {
                      r.kernel.id === o.kernel.id &&
                        r.last_msg_id === o.msg_id &&
                        (r.events.trigger("finished_execute.CodeCell", {
                          cell: r,
                        }),
                        r.events.off("finished_iopub.Kernel", e));
                    });
                  } else this.set_input_prompt(null);
                } else
                  console.log(
                    n.msg._("Can't execute cell since kernel is not set.")
                  );
              }),
              (m.prototype.get_callbacks = function () {
                var t = this;
                return {
                  clear_on_done: !1,
                  shell: {
                    reply: e.proxy(this._handle_execute_reply, this),
                    payload: {
                      set_next_input: e.proxy(
                        this._handle_set_next_input,
                        this
                      ),
                      page: e.proxy(this._open_with_pager, this),
                    },
                  },
                  iopub: {
                    output: function () {
                      t.events.trigger("set_dirty.Notebook", { value: !0 }),
                        t.output_area.handle_output.apply(
                          t.output_area,
                          arguments
                        );
                    },
                    clear_output: function () {
                      t.events.trigger("set_dirty.Notebook", { value: !0 }),
                        t.output_area.handle_clear_output.apply(
                          t.output_area,
                          arguments
                        );
                    },
                  },
                  input: e.proxy(this._handle_input_request, this),
                };
              }),
              (m.prototype._open_with_pager = function (e) {
                this.events.trigger("open_with_text.Pager", e);
              }),
              (m.prototype._handle_execute_reply = function (e) {
                this.set_input_prompt(e.content.execution_count),
                  this.element.removeClass("running"),
                  this.events.trigger("set_dirty.Notebook", { value: !0 });
              }),
              (m.prototype._handle_set_next_input = function (e) {
                var t = {
                  cell: this,
                  text: e.text,
                  replace: e.replace,
                  clear_output: e.clear_output,
                };
                this.events.trigger("set_next_input.Notebook", t);
              }),
              (m.prototype._handle_input_request = function (e) {
                this.output_area.append_raw_input(e);
              }),
              (m.prototype.select = function () {
                var e = h.prototype.select.apply(this, arguments);
                return (
                  e && (this.code_mirror.refresh(), this.auto_highlight()), e
                );
              }),
              (m.prototype.render = function () {
                return h.prototype.render.apply(this, arguments);
              }),
              (m.prototype.select_all = function () {
                var e = this.code_mirror.lineCount(),
                  t = {
                    line: e - 1,
                    ch: this.code_mirror.getLine(e - 1).length,
                  };
                this.code_mirror.setSelection({ line: 0, ch: 0 }, t);
              }),
              (m.prototype.collapse_output = function () {
                this.output_area.collapse();
              }),
              (m.prototype.expand_output = function () {
                this.output_area.expand(), this.output_area.unscroll_area();
              }),
              (m.prototype.scroll_output = function () {
                this.output_area.expand(), this.output_area.scroll_if_long();
              }),
              (m.prototype.toggle_output = function () {
                this.output_area.toggle_output();
              }),
              (m.prototype.toggle_output_scroll = function () {
                this.output_area.toggle_scroll();
              }),
              (m.input_prompt_classical = function (e, t) {
                var o;
                return (
                  (o = null == e ? "&nbsp;" : encodeURIComponent(e)),
                  "<bdi>" + n.msg._("In") + "</bdi>[" + o + "]:"
                );
              }),
              (m.input_prompt_continuation = function (e, t) {
                for (
                  var o = [m.input_prompt_classical(e, t)], n = 1;
                  n < t;
                  n++
                )
                  o.push(["...:"]);
                return o.join("<br/>");
              }),
              (m.input_prompt_function = m.input_prompt_classical),
              (m.prototype.set_input_prompt = function (e) {
                var t = 1;
                void 0 !== this.code_mirror &&
                  (t = this.code_mirror.lineCount()),
                  (this.input_prompt_number = e);
                var o = m.input_prompt_function(this.input_prompt_number, t);
                this.element.find("div.input_prompt").html(o),
                  this.events.trigger("set_dirty.Notebook", { value: !0 });
              }),
              (m.prototype.clear_input = function () {
                this.code_mirror.setValue("");
              }),
              (m.prototype.get_text = function () {
                return this.code_mirror.getValue();
              }),
              (m.prototype.set_text = function (e) {
                return this.code_mirror.setValue(e);
              }),
              (m.prototype.clear_output = function (e, t) {
                this.events.trigger("clear_output.CodeCell", { cell: this }),
                  this.output_area.clear_output(e, t),
                  this.set_input_prompt();
              }),
              (m.prototype.fromJSON = function (e) {
                h.prototype.fromJSON.apply(this, arguments),
                  "code" === e.cell_type &&
                    (void 0 !== e.source &&
                      (Array.isArray(e.source) &&
                        (e.source = e.source.join("")),
                      this.set_text(e.source),
                      this.code_mirror.clearHistory(),
                      this.auto_highlight()),
                    this.set_input_prompt(e.execution_count),
                    (this.output_area.trusted = !1),
                    this.output_area.fromJSON(e.outputs, e.metadata));
              }),
              (m.prototype.toJSON = function () {
                var e = h.prototype.toJSON.apply(this);
                (e.source = this.get_text()),
                  isFinite(this.input_prompt_number)
                    ? (e.execution_count = this.input_prompt_number)
                    : (e.execution_count = null);
                var t = this.output_area.toJSON();
                return (
                  (e.outputs = t),
                  (e.metadata.trusted = this.output_area.trusted),
                  this.output_area.collapsed
                    ? (e.metadata.collapsed = this.output_area.collapsed)
                    : delete e.metadata.collapsed,
                  "auto" === this.output_area.scroll_state
                    ? delete e.metadata.scrolled
                    : (e.metadata.scrolled = this.output_area.scroll_state),
                  e
                );
              }),
              (m.prototype.unselect = function () {
                var e = h.prototype.unselect.apply(this, arguments);
                return (
                  e &&
                    (this.tooltip.remove_and_cancel_tooltip(!0),
                    null !== this.completer && this.completer.close()),
                  e
                );
              }),
              (t.CodeCell = m),
              { CodeCell: m }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    72103: (e, t, o) => {
      var n, r;
      (n = [o(4631), o(5321)]),
        void 0 ===
          (r = function (e) {
            "use strict";
            e.defineMode(
              "ipython",
              function (t, o) {
                var n = {};
                for (var r in o) o.hasOwnProperty(r) && (n[r] = o[r]);
                return (
                  (n.name = "python"),
                  (n.singleOperators = new RegExp(
                    "^[\\+\\-\\*/%&|@\\^~<>!\\?]"
                  )),
                  3 === n.version
                    ? (n.identifiers = new RegExp(
                        "^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*"
                      ))
                    : 2 === n.version &&
                      (n.identifiers = new RegExp("^[_A-Za-z][_A-Za-z0-9]*")),
                  e.getMode(t, n)
                );
              },
              "python"
            ),
              e.defineMIME("text/x-ipython", "ipython");
          }.apply(t, n)) || (e.exports = r);
    },
    75303: (e, t, o) => {
      var n, r;
      (n = [o(4631), o(87093), o(5321), o(80785)]),
        void 0 ===
          (r = function (e) {
            "use strict";
            e.defineMode(
              "ipythongfm",
              function (t, o) {
                var n = e.getMode(t, "gfm"),
                  r = e.getMode(t, "stex");
                return e.multiplexingMode(
                  n,
                  { open: "$$", close: "$$", mode: r, delimStyle: "delimit" },
                  { open: "$", close: "$", mode: r, delimStyle: "delimit" },
                  { open: "\\(", close: "\\)", mode: r, delimStyle: "delimit" },
                  { open: "\\[", close: "\\]", mode: r, delimStyle: "delimit" }
                );
              },
              "gfm"
            ),
              e.defineMIME("text/x-ipythongfm", "ipythongfm");
          }.apply(t, n)) || (e.exports = r);
    },
    2899: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(69373), o(34960), o(8773)]),
        void 0 ===
          (r = function (e, t, o, n) {
            "use strict";
            var r = function (e, t) {
              var o =
                t.keyboard_manager.command_shortcuts.get_action_shortcut(e);
              return o
                ? "command-shortcut"
                : (o = t.keyboard_manager.edit_shortcuts.get_action_shortcut(e))
                ? "edit-shortcut"
                : "no-shortcut";
            };
            return {
              CommandPalette: function (t) {
                if (!t)
                  throw new Error(
                    "CommandPalette takes a notebook non-null mandatory argument"
                  );
                var i = e("<form/>"),
                  s = e("<div/>").addClass("typeahead__container"),
                  a = e("<div/>").addClass("typeahead__field"),
                  l = e("<input/>").attr("type", "search");
                a
                  .append(e("<span>").addClass("typeahead__query").append(l))
                  .append(
                    e("<span/>")
                      .addClass("typeahead__button")
                      .append(
                        e("<button/>")
                          .attr("type", "submit")
                          .append(
                            e("<span/>").addClass("typeahead__search-icon")
                          )
                      )
                  ),
                  s.append(a),
                  i.append(s);
                var c = e("<div/>")
                  .addClass("modal cmd-palette")
                  .append(
                    e("<div/>")
                      .addClass("modal-dialog")
                      .append(
                        e("<div/>")
                          .addClass("modal-content")
                          .append(e("<div/>").addClass("modal-body").append(i))
                      )
                  )
                  .modal({ show: !1, backdrop: !0 })
                  .on("shown.bs.modal", function () {
                    setTimeout(function () {
                      l.focus();
                    }, 100);
                  });
                t.keyboard_manager.disable();
                var d = function e() {
                  if (!e.ok) {
                    var o = t.get_selected_cell();
                    o && o.select(),
                      t.keyboard_manager &&
                        (t.keyboard_manager.enable(),
                        t.keyboard_manager.command_mode()),
                      (e.ok = !0);
                  }
                };
                c.on("hide.bs.modal", d);
                for (
                  var u = function (e, o, n, r) {
                      h.indexOf(n.key) >= 0
                        ? (d(), t.keyboard_manager.actions.call(n.key))
                        : console.warning("No command " + n.key),
                        c.modal("hide");
                    },
                    p = {},
                    h = Object.keys(t.keyboard_manager.actions._actions),
                    _ = 0;
                  _ < h.length;
                  _++
                ) {
                  var m = h[_],
                    f = t.keyboard_manager.actions.get(m),
                    g = m.split(":")[0];
                  p[g] = p[g] || { data: [], display: "display" };
                  var b,
                    v =
                      t.keyboard_manager.command_shortcuts.get_action_shortcut(
                        m
                      ) ||
                      t.keyboard_manager.edit_shortcuts.get_action_shortcut(m);
                  v && (v = n.humanize_sequence(v)),
                    (b = f.cmd
                      ? o.msg._(f.cmd)
                      : m.split(":")[1].replace(/-/g, " ").replace(/_/g, "-"));
                  var y = null;
                  f.help && (y = o.msg._(f.help)),
                    p[g].data.push({
                      display: b,
                      shortcut: v,
                      mode_shortcut: r(m, t),
                      group: g,
                      icon: f.icon,
                      help: y,
                      key: m,
                    });
                }
                l.typeahead({
                  emptyTemplate: function (t) {
                    return e("<div>")
                      .text("No results found for ")
                      .append(e("<code>").text(t));
                  },
                  maxItem: 1e3,
                  minLength: 0,
                  hint: !0,
                  group: { template: "{{group}} command group" },
                  searchOnFocus: !0,
                  mustSelectItem: !0,
                  template:
                    '<i class="fa fa-icon {{icon}}"></i>{{display}}  <div title={{key}} class="pull-right {{mode_shortcut}}">{{shortcut}}</div>',
                  order: "asc",
                  source: p,
                  callback: {
                    onSubmit: u,
                    onClickAfter: u,
                    onResult: function (t, o, n, r) {
                      1 == r &&
                        requestAnimationFrame(function () {
                          e(".typeahead-list > li:nth-child(2)").addClass(
                            "active"
                          );
                        });
                    },
                  },
                  debug: !1,
                }),
                  c.modal("show");
              },
            };
          }.apply(t, n)) || (e.exports = r);
    },
    11341: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(54499), o(58812), o(93731), o(4631)]),
        void 0 ===
          (r = function (e, t, o, n) {
            "use strict";
            var r = o.keycodes,
              i = function (e, t) {
                for (var o = 0; o < t; o++) e = "%" + e;
                return e;
              },
              s = function (e, t) {
                for (var o = 0; o < t.length; o++)
                  if (t[o].trim().substr(-e.length) == e) return !0;
                return !1;
              },
              a = function (e, t) {
                (this.cell = e), (this.editor = e.code_mirror);
                var o = this;
                t.on("kernel_busy.Kernel", function () {
                  o.skip_kernel_completion = !0;
                }),
                  t.on("kernel_idle.Kernel", function () {
                    o.skip_kernel_completion = !1;
                  });
              };
            return (
              (a.prototype.startCompletion = function () {
                this.editor.somethingSelected() ||
                  this.editor.getSelections().length > 1 ||
                  ((this.done = !1), this.carry_on_completion(!0));
              }),
              (a.reinvoke_re = /[%0-9a-z._/\\:~-]/i),
              (a.prototype.reinvoke = function (e, t, o) {
                return a.reinvoke_re.test(e);
              }),
              (a.prototype.carry_on_completion = function (o) {
                var n = this.editor.getCursor(),
                  r =
                    (this.editor.getLine(n.line),
                    this.editor.getRange({ line: n.line, ch: n.ch - 1 }, n));
                if (this.reinvoke(r) || o) {
                  if (
                    ((this.autopick = !1),
                    o && (this.autopick = !0),
                    !(
                      this.editor.somethingSelected() ||
                      this.editor.getSelections().length > 1
                    ))
                  ) {
                    var i = this.editor.indexFromPos(n),
                      s = this.editor.getValue();
                    (i = t.js_idx_to_char_idx(i, s)),
                      this.skip_kernel_completion
                        ? this.finish_completing({
                            content: {
                              matches: [],
                              cursor_start: i,
                              cursor_end: i,
                            },
                          })
                        : this.cell.kernel.complete(
                            s,
                            i,
                            e.proxy(this.finish_completing, this)
                          );
                  }
                } else this.close();
              }),
              (a.prototype.finish_completing = function (o) {
                var r = o.content,
                  i = r.cursor_start,
                  a = r.cursor_end,
                  l = r.matches,
                  c = this.editor.getCursor();
                if (null === a)
                  (a = this.editor.indexFromPos(c)),
                    null === i ? (i = a) : i < 0 && (i = a + i);
                else {
                  var d = this.editor.getValue();
                  (a = t.char_idx_to_js_idx(a, d)),
                    (i = t.char_idx_to_js_idx(i, d));
                }
                var u,
                  p = n.contextHint(this.editor),
                  h = [];
                for (u = 0; u < p.length; u++) s(p[u].str, l) || h.push(p[u]);
                var _ = this.editor.posFromIndex(i),
                  m = this.editor.posFromIndex(a);
                for (u = l.length - 1; u >= 0; --u)
                  h.unshift({
                    str: l[u],
                    type: "introspection",
                    from: _,
                    to: m,
                  });
                if (
                  ((this.raw_result = h),
                  this.raw_result && this.raw_result.length)
                ) {
                  if (!this.autopick || 1 != this.raw_result.length) {
                    if (1 == this.raw_result.length) {
                      var f = this.raw_result[0].str;
                      if (
                        this.editor.getRange(
                          { line: c.line, ch: c.ch - f.length },
                          c
                        ) == f
                      )
                        return void this.close();
                    }
                    if (!this.visible) {
                      (this.complete = e("<div/>").addClass("completions")),
                        this.complete.attr("id", "complete"),
                        (this.sel = e("<select/>")
                          .attr("tabindex", -1)
                          .attr("multiple", "true")),
                        this.complete.append(this.sel),
                        (this.visible = !0),
                        e("body").append(this.complete);
                      var g = this;
                      this.sel.click(function () {
                        g.pick(), g.editor.focus();
                      }),
                        (this._handle_keydown = function (e, t) {
                          g.keydown(t);
                        }),
                        this.editor.on("keydown", this._handle_keydown),
                        (this._handle_keypress = function (e, t) {
                          g.keypress(t);
                        }),
                        this.editor.on("keypress", this._handle_keypress);
                    }
                    this.sel.attr("size", Math.min(10, this.raw_result.length));
                    var b,
                      v = this.editor.cursorCoords(this.editor.posFromIndex(i)),
                      y = v.left - 3,
                      k = this.complete.height(),
                      w = e(window).height();
                    return (
                      (b = v.bottom + k + 5 > w ? v.top - k - 4 : v.bottom + 1),
                      this.complete.css("left", y + "px"),
                      this.complete.css("top", b + "px"),
                      this.sel.text(""),
                      this.build_gui_list(this.raw_result),
                      !0
                    );
                  }
                  this.insert(this.raw_result[0]);
                }
              }),
              (a.prototype.insert = function (e) {
                this.editor.replaceRange(e.str, e.from, e.to);
              }),
              (a.prototype.build_gui_list = function (t) {
                for (var o = 0; o < t.length && o < 1e3; ++o) {
                  var n = e("<option/>").text(t[o].str).addClass(t[o].type);
                  this.sel.append(n);
                }
                this.sel.children().first().attr("selected", "true"),
                  this.sel.scrollTop(0);
              }),
              (a.prototype.close = function () {
                (this.done = !0),
                  e("#complete").remove(),
                  this.editor.off("keydown", this._handle_keydown),
                  this.editor.off("keypress", this._handle_keypress),
                  (this.visible = !1);
              }),
              (a.prototype.pick = function () {
                this.insert(this.raw_result[this.sel[0].selectedIndex]),
                  this.close();
              }),
              (a.prototype.keydown = function (e) {
                var t,
                  o,
                  n = e.keyCode;
                if (n == r.enter)
                  (e.codemirrorIgnore = !0),
                    (e._ipkmIgnore = !0),
                    e.preventDefault(),
                    this.pick();
                else if (n == r.esc || n == r.backspace)
                  (e.codemirrorIgnore = !0),
                    (e._ipkmIgnore = !0),
                    e.preventDefault(),
                    this.close();
                else if (n == r.tab) {
                  var s = (function (e, t) {
                    if (1 == e.length) return e[0];
                    for (var o = [], n = 10, r = 0; r < e.length; r++) {
                      var s = e[r].str,
                        a = 0;
                      for (1; "%" == s.substr(0, 1); )
                        (a += 1), (s = s.substring(1));
                      (n = Math.min(n, a)), o.push(s);
                    }
                    if (o.length > 1) {
                      var l, c, d;
                      for (
                        d = (l = (o = o.slice(0).sort())[0]).length,
                          c = o.pop();
                        d && -1 == c.indexOf(l);

                      )
                        l = l.substring(0, --d);
                      return "" === l || 0 !== c.indexOf(l)
                        ? {
                            str: i("", n),
                            type: "computed",
                            from: e[0].from,
                            to: e[0].to,
                          }
                        : {
                            str: i(l, n),
                            type: "computed",
                            from: e[0].from,
                            to: e[0].to,
                          };
                    }
                    return null;
                  })(this.raw_result);
                  "" !== s.str && this.insert(s),
                    this.close(),
                    this.carry_on_completion();
                } else
                  n == r.up || n == r.down
                    ? ((e.codemirrorIgnore = !0),
                      (e._ipkmIgnore = !0),
                      e.preventDefault(),
                      (t = this.sel.find("option")),
                      (o = this.sel[0].selectedIndex),
                      n == r.up && o--,
                      n == r.down && o++,
                      (o = Math.min(Math.max(o, 0), t.length - 1)),
                      (this.sel[0].selectedIndex = o))
                    : n == r.pageup || n == r.pagedown
                    ? ((e.codemirrorIgnore = !0),
                      (e._ipkmIgnore = !0),
                      (t = this.sel.find("option")),
                      (o = this.sel[0].selectedIndex),
                      n == r.pageup ? (o -= 10) : (o += 10),
                      (o = Math.min(Math.max(o, 0), t.length - 1)),
                      (this.sel[0].selectedIndex = o))
                    : (n != r.left && n != r.right) || this.close();
              }),
              (a.prototype.keypress = function (e) {
                var t = this,
                  o = e.keyCode;
                0 !== e.charCode &&
                  o != r.tab &&
                  o != r.enter &&
                  (this.close(),
                  this.editor.focus(),
                  setTimeout(function () {
                    t.carry_on_completion();
                  }, 50));
              }),
              { Completer: a }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    93731: (e, t, o) => {
      var n, r;
      (n = [o(4631)]),
        void 0 ===
          (r = function (e) {
            "use strict";
            e.contextHint = function (e) {
              for (
                var o = e.getCursor(),
                  n = e.getTokenAt(o),
                  r = [],
                  i = t(n, e),
                  s = 0;
                s < i.length;
                s++
              )
                r.push({
                  str: i[s],
                  type: "context",
                  from: { line: o.line, ch: n.start },
                  to: { line: o.line, ch: n.end },
                });
              return r;
            };
            var t = function (e, t) {
              return (function (e) {
                for (var t, o = [], n = e.lineCount(), r = 0; r < n; r++)
                  for (var i = e.getLine(r), s = 1; s < i.length; s++) {
                    var a = e.getTokenAt({ line: r, ch: s });
                    null !== a.className &&
                      ((function (e, t) {
                        if (!Array.prototype.indexOf) {
                          for (var o = e.length; o--; )
                            if (e[o] === t) return !0;
                          return !1;
                        }
                        return -1 != e.indexOf(t);
                      })(o, (t = a.string)) ||
                        o.push(t)),
                      (s = a.end);
                  }
                return o;
              })(t).filter(function (t) {
                return 0 === t.indexOf(e.string) && t != e.string;
              });
            };
            return { contextHint: e.contextHint };
          }.apply(t, n)) || (e.exports = r);
    },
    88033: (e, t, o) => {
      var n, r;
      (n = [
        o(19755),
        o(71302),
        o(3574),
        o(46013),
        o(54499),
        o(34960),
        o(7765),
      ]),
        void 0 ===
          (r = function (e, t, o, n, r, i, s) {
            "use strict";
            var a = function (t, n) {
              var r = this;
              (this.selector = t),
                (this.notebook = n),
                this.notebook.set_kernelselector(this),
                (this.events = n.events),
                (this.current_selection = null),
                (this.kernelspecs = {}),
                (o.kernelselector = this),
                (this._finish_load = null),
                (this._loaded = !1),
                (this.loaded = new Promise(function (e) {
                  r._finish_load = e;
                })),
                void 0 !== this.selector &&
                  ((this.element = e(t)), this.request_kernelspecs()),
                this.bind_events(),
                Object.seal(this);
            };
            a.prototype.request_kernelspecs = function () {
              return this._got_kernelspecs(s);
            };
            var l = function (e) {
              return Object.keys(e).sort(function (t, o) {
                var n = e[t].spec.display_name,
                  r = e[o].spec.display_name;
                return n === r ? 0 : n > r ? 1 : -1;
              });
            };
            return (
              (a.prototype._got_kernelspecs = function (t) {
                var o = this;
                "string" == typeof t && (t = JSON.parse(t)),
                  (this.kernelspecs = t.kernelspecs);
                var n = e("#menu-change-kernel-submenu"),
                  r = e("#menu-new-notebook-submenu"),
                  i = l(t.kernelspecs),
                  s = new URL(window.location.href),
                  a = s.origin + s.pathname;
                i.map(function (i) {
                  var s = t.kernelspecs[i];
                  n.append(
                    e("<li>")
                      .attr("id", "kernel-submenu-" + s.name)
                      .append(
                        e("<a>")
                          .attr("href", "".concat(a, "?kernel=").concat(s.name))
                          .text(s.spec.display_name)
                      )
                  ),
                    r.append(
                      e("<li>")
                        .attr("id", "new-notebook-submenu-" + s.name)
                        .append(
                          e("<a>")
                            .attr("href", "#")
                            .click(function () {
                              o.new_notebook(s.name);
                            })
                            .text(s.spec.display_name)
                        )
                    );
                }),
                  (this._loaded = !0),
                  this._finish_load();
              }),
              (a.prototype._spec_changed = function (o, n) {
                var r = this;
                this.current_selection = n.name;
                var i = e("#new-notebook-submenu-" + n.name),
                  s = i.parent();
                s.children().length > 1 &&
                  (s.append(
                    s.children("li[class!='divider']").sort(function (t, o) {
                      var n = e("a", t).text(),
                        r = e("a", o).text();
                      return n === r ? 0 : n > r ? 1 : -1;
                    })
                  ),
                  s.children("li[class='divider']").length ||
                    s.prepend(e("<li>").attr("class", "divider")),
                  s.prepend(i));
                var a = this.element.find("img.current_kernel_logo");
                e("#kernel_indicator")
                  .find(".kernel_indicator_name")
                  .text(n.spec.display_name),
                  n.resources["logo-64x64"]
                    ? (a.attr("src", n.resources["logo-64x64"]),
                      a.attr("title", n.spec.display_name),
                      a.show())
                    : a.hide();
                var l = n.resources["kernel.css"];
                l
                  ? e("#kernel-css").attr("href", l)
                  : e("#kernel-css").attr("href", ""),
                  n.resources["kernel.js"] &&
                    (console.info(
                      "Dynamically requiring kernel.js, `requirejs` is ",
                      t
                    ),
                    t.requirejs(
                      [n.resources["kernel.js"]],
                      function (e) {
                        e && e.onload
                          ? e.onload()
                          : console.warn(
                              "Kernel " +
                                n.name +
                                " has a kernel.js file that does not contain any asynchronous module definition. This is undefined behavior and not recommended."
                            );
                      },
                      function (e) {
                        console.warn(
                          "Failed to load kernel.js from ",
                          n.resources["kernel.js"],
                          e
                        );
                      }
                    ),
                    this.events.on("spec_changed.Kernel", function (e, t) {
                      n.name != t.name &&
                        (console.warn(
                          "kernelspec %s had custom kernel.js. Forcing page reload for %s.",
                          n.name,
                          t.name
                        ),
                        r.notebook.save_notebook().then(function () {
                          window.location.reload();
                        }));
                    }));
              }),
              (a.prototype.set_kernel = function (e) {
                var t = this;
                if (("string" == typeof e && (e = { name: e }), !this._loaded))
                  return this.loaded.then(function () {
                    t._set_kernel(e);
                  });
                this._set_kernel(e);
              }),
              (a.prototype._set_kernel = function (e) {
                if (e.name !== this.current_selection) {
                  var t = this.kernelspecs,
                    o = t[e.name];
                  if (void 0 === o) {
                    var n = l(t),
                      r = [];
                    if (
                      (e.language &&
                        e.language.length > 0 &&
                        n.map(function (o) {
                          t[o].spec.language.toLowerCase() ===
                            e.language.toLowerCase() && r.push(o);
                        }),
                      1 === r.length &&
                        ((o = t[r[0]]),
                        console.log(
                          "No exact match found for " +
                            e.name +
                            ", using only kernel that matches language=" +
                            e.language,
                          o
                        ),
                        this.events.trigger("spec_match_found.Kernel", {
                          selected: e,
                          found: o,
                        })),
                      void 0 === o)
                    )
                      return void this.events.trigger("spec_not_found.Kernel", {
                        selected: e,
                        matches: r,
                        available: n,
                      });
                  }
                  this.notebook._session_starting &&
                  this.notebook.session.kernel.name !== o.name
                    ? console.error(
                        "Cannot change kernel while waiting for pending session start."
                      )
                    : ((this.current_selection = o.name),
                      this.events.trigger("spec_changed.Kernel", o));
                }
              }),
              (a.prototype._spec_not_found = function (t, o) {
                var r = this,
                  s = e("<select>").addClass("form-control");
                console.warn("Kernelspec not found:", o),
                  (o.matches.length > 1 ? o.matches : o.available).map(
                    function (t) {
                      var o = r.kernelspecs[t];
                      s.append(
                        e("<option/>")
                          .attr("value", o.name)
                          .text(o.spec.display_name || o.name)
                      );
                    }
                  );
                var a = i.msg.sprintf(
                    i.msg._(
                      "Could not find a kernel matching %s. Please select a kernel:"
                    ),
                    o.selected.display_name || o.selected.name
                  ),
                  l = e("<form>")
                    .addClass("form-inline")
                    .append(e("<span>").text(a))
                    .append(s);
                i.msg._("Continue Without Kernel"),
                  i.msg._("Set Kernel"),
                  i.msg._("OK"),
                  n.modal({
                    title: i.msg._("Kernel not found"),
                    body: l,
                    buttons: {
                      "Continue Without Kernel": {
                        class: "btn-danger",
                        click: function () {
                          r.events.trigger("no_kernel.Kernel");
                        },
                      },
                      "Set Kernel": {
                        class: "btn-primary",
                        click: function () {
                          r.set_kernel(s.val());
                        },
                      },
                    },
                  });
              }),
              (a.prototype.new_notebook = function (e) {
                var t,
                  o = new URL(window.location.href);
                return (
                  o.searchParams.set("kernel", e),
                  ((t = window.open(o.href))._basthonEmptyContent = !0),
                  t
                );
              }),
              (a.prototype.lock_switch = function () {
                console.warn("switching kernel is not guaranteed to work !");
              }),
              (a.prototype.bind_events = function () {
                var t = this;
                this.events.on(
                  "spec_changed.Kernel",
                  e.proxy(this._spec_changed, this)
                ),
                  this.events.on(
                    "spec_not_found.Kernel",
                    e.proxy(this._spec_not_found, this)
                  ),
                  this.events.on("kernel_created.Session", function (e, o) {
                    t.set_kernel(o.kernel.name);
                  });
                var o = this.element.find("img.current_kernel_logo");
                o.on("load", function () {
                  o.show();
                }),
                  o.on("error", function () {
                    o.hide();
                  });
              }),
              { KernelSelector: a }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    17841: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(54499), o(58812)]),
        void 0 ===
          (r = function (e, t, o) {
            "use strict";
            var n = o.keycodes,
              r = function (e) {
                (this.mode = "command"),
                  (this.enabled = !0),
                  (this.pager = e.pager),
                  (this.quick_help = void 0),
                  (this.notebook = void 0),
                  (this.last_mode = void 0),
                  this.bind_events(),
                  (this.env = { pager: this.pager }),
                  (this.actions = e.actions),
                  (this.command_shortcuts = new o.ShortcutManager(
                    void 0,
                    e.events,
                    this.actions,
                    this.env,
                    e.config,
                    "command"
                  )),
                  this.command_shortcuts._add_default_shortcuts(
                    this.get_default_common_shortcuts()
                  ),
                  this.command_shortcuts._add_default_shortcuts(
                    this.get_default_command_shortcuts()
                  ),
                  (this.edit_shortcuts = new o.ShortcutManager(
                    void 0,
                    e.events,
                    this.actions,
                    this.env
                  )),
                  this.edit_shortcuts._add_default_shortcuts(
                    this.get_default_common_shortcuts()
                  ),
                  this.edit_shortcuts._add_default_shortcuts(
                    this.get_default_edit_shortcuts()
                  ),
                  (this.config = e.config);
                var t = this;
                this.config.loaded.then(function () {
                  var e, o;
                  try {
                    e = t.config.data.keys.edit.unbind || [];
                  } catch (t) {
                    if (!(t instanceof TypeError)) throw t;
                    e = [];
                  }
                  e.forEach(function (e) {
                    t.edit_shortcuts.remove_shortcut(e);
                  });
                  try {
                    o = t.config.data.keys.command.unbind || [];
                  } catch (e) {
                    if (!(e instanceof TypeError)) throw e;
                    o = [];
                  }
                  o.forEach(function (e) {
                    t.command_shortcuts.remove_shortcut(e);
                  }),
                    t.command_shortcuts.add_shortcuts(
                      ((t.config.data.keys || {}).command || {}).bind
                    ),
                    t.edit_shortcuts.add_shortcuts(
                      ((t.config.data.keys || {}).edit || {}).bind
                    );
                }),
                  Object.seal(this);
              };
            return (
              (r.prototype.get_default_common_shortcuts = function () {
                return {
                  shift: "jupyter-notebook:ignore",
                  "shift-enter": "jupyter-notebook:run-cell-and-select-next",
                  "ctrl-enter": "jupyter-notebook:run-cell",
                  "alt-enter": "jupyter-notebook:run-cell-and-insert-below",
                  "cmdtrl-s": "jupyter-notebook:save-notebook",
                };
              }),
              (r.prototype.get_default_edit_shortcuts = function () {
                return {
                  "cmdtrl-shift-p": "jupyter-notebook:show-command-palette",
                  "cmdtrl-shift-f": "jupyter-notebook:show-command-palette",
                  esc: "jupyter-notebook:enter-command-mode",
                  "ctrl-m": "jupyter-notebook:enter-command-mode",
                  up: "jupyter-notebook:move-cursor-up",
                  down: "jupyter-notebook:move-cursor-down",
                  "ctrl-shift--": "jupyter-notebook:split-cell-at-cursor",
                };
              }),
              (r.prototype.get_default_command_shortcuts = function () {
                return {
                  "cmdtrl-shift-p": "jupyter-notebook:show-command-palette",
                  "cmdtrl-shift-f": "jupyter-notebook:show-command-palette",
                  "shift-space": "jupyter-notebook:scroll-notebook-up",
                  "shift-v": "jupyter-notebook:paste-cell-above",
                  "shift-m": "jupyter-notebook:merge-cells",
                  "shift-o": "jupyter-notebook:toggle-cell-output-scrolled",
                  enter: "jupyter-notebook:enter-edit-mode",
                  space: "jupyter-notebook:scroll-notebook-down",
                  down: "jupyter-notebook:select-next-cell",
                  "i,i": "jupyter-notebook:interrupt-kernel",
                  "0,0": "jupyter-notebook:confirm-restart-kernel",
                  "d,d": "jupyter-notebook:delete-cell",
                  esc: "jupyter-notebook:close-pager",
                  up: "jupyter-notebook:select-previous-cell",
                  k: "jupyter-notebook:select-previous-cell",
                  j: "jupyter-notebook:select-next-cell",
                  "shift-k": "jupyter-notebook:extend-selection-above",
                  "shift-j": "jupyter-notebook:extend-selection-below",
                  "shift-up": "jupyter-notebook:extend-selection-above",
                  "shift-down": "jupyter-notebook:extend-selection-below",
                  "cmdtrl-a": "jupyter-notebook:select-all",
                  x: "jupyter-notebook:cut-cell",
                  c: "jupyter-notebook:copy-cell",
                  v: "jupyter-notebook:paste-cell-below",
                  a: "jupyter-notebook:insert-cell-above",
                  b: "jupyter-notebook:insert-cell-below",
                  y: "jupyter-notebook:change-cell-to-code",
                  m: "jupyter-notebook:change-cell-to-markdown",
                  r: "jupyter-notebook:change-cell-to-raw",
                  1: "jupyter-notebook:change-cell-to-heading-1",
                  2: "jupyter-notebook:change-cell-to-heading-2",
                  3: "jupyter-notebook:change-cell-to-heading-3",
                  4: "jupyter-notebook:change-cell-to-heading-4",
                  5: "jupyter-notebook:change-cell-to-heading-5",
                  6: "jupyter-notebook:change-cell-to-heading-6",
                  o: "jupyter-notebook:toggle-cell-output-collapsed",
                  s: "jupyter-notebook:save-notebook",
                  w: "jupyter-notebook:share-notebook",
                  l: "jupyter-notebook:toggle-cell-line-numbers",
                  "shift-l": "jupyter-notebook:toggle-all-line-numbers",
                  h: "jupyter-notebook:show-keyboard-shortcuts",
                  z: "jupyter-notebook:undo-cell-deletion",
                  q: "jupyter-notebook:close-pager",
                  p: "jupyter-notebook:show-command-palette",
                };
              }),
              (r.prototype.bind_events = function () {
                var t = this;
                e(document).keydown(function (e) {
                  return (
                    !0 !== e._ipkmIgnore &&
                    !0 !== (e.originalEvent || {})._ipkmIgnore &&
                    t.handle_keydown(e)
                  );
                });
              }),
              (r.prototype.set_notebook = function (e) {
                (this.notebook = e), this.actions.extend_env({ notebook: e });
              }),
              (r.prototype.set_quickhelp = function (e) {
                this.actions.extend_env({ quick_help: e });
              }),
              (r.prototype.handle_keydown = function (e) {
                return (
                  e.which === n.esc && e.preventDefault(),
                  this.enabled
                    ? "edit" === this.mode
                      ? this.edit_shortcuts.call_handler(e)
                      : "command" !== this.mode ||
                        this.command_shortcuts.call_handler(e)
                    : e.which !== n.esc || (this.notebook.command_mode(), !1)
                );
              }),
              (r.prototype.edit_mode = function () {
                (this.last_mode = this.mode), (this.mode = "edit");
              }),
              (r.prototype.command_mode = function () {
                (this.last_mode = this.mode), (this.mode = "command");
              }),
              (r.prototype.enable = function () {
                this.enabled = !0;
              }),
              (r.prototype.disable = function () {
                this.enabled = !1;
              }),
              (r.prototype.register_events = function (o) {
                o = e(o);
                var n = this,
                  r = function () {
                    n.enable();
                  };
                o.on("focusin", function () {
                  n.disable();
                }),
                  o.on("focusout", r),
                  o.find("input").blur(r),
                  o.on("DOMNodeInserted", function (t) {
                    var o = e(t.target);
                    o.is("input") ? o.blur(r) : o.find("input").blur(r);
                  }),
                  o.on("remove", function () {
                    t.is_focused(o[0]) && n.enable();
                  });
              }),
              { KeyboardManager: r }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    3400: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(6682), o(27148), o(34960)]),
        void 0 ===
          (r = function (e, t, o, n) {
            "use strict";
            var r = function (e, o) {
              t.ToolBar.apply(this, [e, o]),
                (this.events = o.events),
                (this.notebook = o.notebook),
                this._make(),
                Object.seal(this);
            };
            return (
              ((r.prototype = Object.create(t.ToolBar.prototype))._make =
                function () {
                  var e = [
                    [
                      [
                        "jupyter-notebook:download-notebook",
                        "jupyter-notebook:open-notebook",
                      ],
                      "download_open_notebook",
                    ],
                    [["jupyter-notebook:share-notebook"], "share_notebook"],
                    [["jupyter-notebook:rollback"], "rollback"],
                    [
                      ["jupyter-notebook:insert-cell-below"],
                      "insert_above_below",
                    ],
                    [
                      [
                        "jupyter-notebook:cut-cell",
                        "jupyter-notebook:copy-cell",
                        "jupyter-notebook:paste-cell-below",
                      ],
                      "cut_copy_paste",
                    ],
                    [
                      [
                        "jupyter-notebook:move-cell-up",
                        "jupyter-notebook:move-cell-down",
                      ],
                      "move_up_down",
                    ],
                    [
                      [
                        new t.Button(
                          "jupyter-notebook:run-cell-and-select-next",
                          { label: n.msg._("Run") }
                        ),
                        "jupyter-notebook:interrupt-kernel",
                        "jupyter-notebook:confirm-restart-kernel",
                        "jupyter-notebook:confirm-restart-kernel-and-run-all-cells",
                      ],
                      "run_int",
                    ],
                    ["<add_celltype_list>"],
                    [["jupyter-notebook:show-command-palette"], "cmd_palette"],
                    [["jupyter-notebook:switch-theme"], "switch-theme"],
                  ];
                  this.construct(e);
                }),
              (r.prototype._pseudo_actions = {}),
              (r.prototype._pseudo_actions.add_celltype_list = function () {
                var t = this,
                  o = e("<option/>")
                    .attr("value", "multiselect")
                    .attr("disabled", "")
                    .text("-"),
                  r = e("<select/>")
                    .attr("id", "cell_type")
                    .attr("aria-label", n.msg._("combobox, select cell type"))
                    .attr("role", "combobox")
                    .addClass("form-control select-xs")
                    .append(
                      e("<option/>").attr("value", "code").text(n.msg._("Code"))
                    )
                    .append(
                      e("<option/>")
                        .attr("value", "markdown")
                        .text(n.msg._("Markdown"))
                    )
                    .append(
                      e("<option/>")
                        .attr("value", "raw")
                        .text(n.msg._("Raw NBConvert"))
                    )
                    .append(
                      e("<option/>")
                        .attr("value", "heading")
                        .text(n.msg._("Heading"))
                    )
                    .append(o);
                return (
                  this.notebook.keyboard_manager.register_events(r),
                  this.events.on(
                    "selected_cell_type_changed.Notebook",
                    function (e, n) {
                      !1 === n.editable
                        ? r.attr("disabled", !0)
                        : r.removeAttr("disabled"),
                        t.notebook.get_selected_cells_indices().length > 1
                          ? (o.show(), r.val("multiselect"))
                          : (o.hide(),
                            "heading" === n.cell_type
                              ? r.val("Markdown")
                              : r.val(n.cell_type));
                    }
                  ),
                  r.change(function () {
                    var o = e(this).val();
                    switch (o) {
                      case "code":
                        t.notebook.cells_to_code();
                        break;
                      case "markdown":
                        t.notebook.cells_to_markdown();
                        break;
                      case "raw":
                        t.notebook.cells_to_raw();
                        break;
                      case "heading":
                        t.notebook._warn_heading(),
                          t.notebook.to_heading(),
                          r.val("markdown");
                        break;
                      case "multiselect":
                        break;
                      default:
                        console.log(n.msg._("unrecognized cell type:"), o);
                    }
                    t.notebook.focus_cell();
                  }),
                  r
                );
              }),
              { MainToolBar: r }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    86817: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(54499), o(34960), o(46013)]),
        void 0 ===
          (r = function (e, t, o, n) {
            "use strict";
            var r =
                /(\$\$?|\\(?:begin|end)\{[a-z]*\*?\}|\\[{}$]|[{}]|(?:\n\s*)+|@@\d+@@|\\\\(?:\(|\)|\[|\]))/i,
              i = function (e, o, n, r, i) {
                var s = i
                  .slice(e, o + 1)
                  .join("")
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;");
                for (
                  "msie" === t.browser &&
                  (s = s.replace(/(%[^\n]*)\n/g, "$1<br/>\n"));
                  o > e;

                )
                  (i[o] = ""), o--;
                return (
                  (i[e] = "@@" + r.length + "@@"), n && (s = n(s)), r.push(s), i
                );
              };
            return {
              init: function () {
                window.MathJax
                  ? (MathJax.Hub.Config({
                      tex2jax: {
                        inlineMath: [
                          ["$", "$"],
                          ["\\(", "\\)"],
                        ],
                        displayMath: [
                          ["$$", "$$"],
                          ["\\[", "\\]"],
                        ],
                        processEscapes: !0,
                        processEnvironments: !0,
                      },
                      MathML: { extensions: ["content-mathml.js"] },
                      displayAlign: "center",
                      "HTML-CSS": {
                        availableFonts: [],
                        imageFont: null,
                        preferredFont: null,
                        webFont: "STIX-Web",
                        styles: { ".MathJax_Display": { margin: 0 } },
                        linebreaks: { automatic: !0 },
                      },
                    }),
                    MathJax.Hub.Configured())
                  : (o.msg._("OK"),
                    n.modal({
                      title: o.msg.sprintf(
                        o.msg._(
                          "Failed to retrieve MathJax from '%s'",
                          window.mathjax_url
                        )
                      ),
                      body: e("<p/>")
                        .addClass("dialog")
                        .text(
                          o.msg._("Math/LaTeX rendering will be disabled.")
                        ),
                      buttons: { OK: { class: "btn-danger" } },
                    }));
              },
              remove_math: function (e) {
                var o,
                  n,
                  s,
                  a,
                  l,
                  c = [];
                if (/`/.test(e)) {
                  var d = function (e) {
                    return e.replace(/\$/g, "~D");
                  };
                  (e = e
                    .replace(/~/g, "~T")
                    .replace(/(^|[^\\])(`+)([^\n]*?[^`\n])\2(?!`)/gm, d)
                    .replace(/^\s{0,3}(`{3,})(.|\n)*?\1/gm, d)),
                    (l = function (e) {
                      return e.replace(/~([TD])/g, function (e, t) {
                        return { T: "~", D: "$" }[t];
                      });
                    });
                } else
                  l = function (e) {
                    return e;
                  };
                for (
                  var u = t.regex_split(e.replace(/\r\n?/g, "\n"), r),
                    p = 1,
                    h = u.length;
                  p < h;
                  p += 2
                ) {
                  var _ = u[p];
                  "@" === _.charAt(0)
                    ? ((u[p] = "@@" + c.length + "@@"), c.push(_))
                    : o
                    ? _ === n
                      ? a
                        ? (s = p)
                        : ((u = i(o, p, l, c, u)),
                          (o = null),
                          (n = null),
                          (s = null))
                      : _.match(/\n.*\n/)
                      ? (s && (u = i(o, (p = s), l, c, u)),
                        (o = null),
                        (n = null),
                        (s = null),
                        (a = 0))
                      : "{" === _
                      ? a++
                      : "}" === _ && a && a--
                    : "$" === _ || "$$" === _
                    ? ((o = p), (n = _), (a = 0))
                    : "\\\\(" === _ || "\\\\[" === _
                    ? ((o = p),
                      (n = "(" === _.slice(-1) ? "\\\\)" : "\\\\]"),
                      (a = 0))
                    : "begin" === _.substr(1, 5) &&
                      ((o = p), (n = "\\end" + _.substr(6)), (a = 0));
                }
                return (
                  s &&
                    ((u = i(o, s, l, c, u)),
                    (o = null),
                    (n = null),
                    (s = null)),
                  [l(u.join("")), c]
                );
              },
              replace_math: function (e, t) {
                return e.replace(/@@(\d+)@@/g, function (e, o) {
                  var n = t[o];
                  return (
                    "\\\\(" === n.substr(0, 3) &&
                    "\\\\)" === n.substr(n.length - 3)
                      ? (n = "\\(" + n.substring(3, n.length - 3) + "\\)")
                      : "\\\\[" === n.substr(0, 3) &&
                        "\\\\]" === n.substr(n.length - 3) &&
                        (n = "\\[" + n.substring(3, n.length - 3) + "\\]"),
                    n
                  );
                });
              },
            };
          }.apply(t, n)) || (e.exports = r);
    },
    81498: (e, t, o) => {
      var n, r;
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          i(e)
        );
      }
      function s() {
        "use strict";
        s = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          o = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          a = n.asyncIterator || "@@asyncIterator",
          l = n.toStringTag || "@@toStringTag";
        function c(e, t, o) {
          return (
            Object.defineProperty(e, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (e) {
          c = function (e, t, o) {
            return (e[t] = o);
          };
        }
        function d(e, t, o, n) {
          var r = t && t.prototype instanceof h ? t : h,
            i = Object.create(r.prototype),
            s = new j(n || []);
          return (
            (i._invoke = (function (e, t, o) {
              var n = "suspendedStart";
              return function (r, i) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === r) throw i;
                  return { value: void 0, done: !0 };
                }
                for (o.method = r, o.arg = i; ; ) {
                  var s = o.delegate;
                  if (s) {
                    var a = w(s, o);
                    if (a) {
                      if (a === p) continue;
                      return a;
                    }
                  }
                  if ("next" === o.method) o.sent = o._sent = o.arg;
                  else if ("throw" === o.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), o.arg);
                    o.dispatchException(o.arg);
                  } else "return" === o.method && o.abrupt("return", o.arg);
                  n = "executing";
                  var l = u(e, t, o);
                  if ("normal" === l.type) {
                    if (
                      ((n = o.done ? "completed" : "suspendedYield"),
                      l.arg === p)
                    )
                      continue;
                    return { value: l.arg, done: o.done };
                  }
                  "throw" === l.type &&
                    ((n = "completed"), (o.method = "throw"), (o.arg = l.arg));
                }
              };
            })(e, o, s)),
            i
          );
        }
        function u(e, t, o) {
          try {
            return { type: "normal", arg: e.call(t, o) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = d;
        var p = {};
        function h() {}
        function _() {}
        function m() {}
        var f = {};
        c(f, r, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(E([])));
        b && b !== t && o.call(b, r) && (f = b);
        var v = (m.prototype = h.prototype = Object.create(f));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function k(e, t) {
          function n(r, s, a, l) {
            var c = u(e[r], e, s);
            if ("throw" !== c.type) {
              var d = c.arg,
                p = d.value;
              return p && "object" == i(p) && o.call(p, "__await")
                ? t.resolve(p.__await).then(
                    function (e) {
                      n("next", e, a, l);
                    },
                    function (e) {
                      n("throw", e, a, l);
                    }
                  )
                : t.resolve(p).then(
                    function (e) {
                      (d.value = e), a(d);
                    },
                    function (e) {
                      return n("throw", e, a, l);
                    }
                  );
            }
            l(c.arg);
          }
          var r;
          this._invoke = function (e, o) {
            function i() {
              return new t(function (t, r) {
                n(e, o, t, r);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function w(e, t) {
          var o = e.iterator[t.method];
          if (void 0 === o) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                w(e, t),
                "throw" === t.method)
              )
                return p;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return p;
          }
          var n = u(o, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), p
            );
          var r = n.arg;
          return r
            ? r.done
              ? ((t[e.resultName] = r.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                p)
              : r
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              p);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function C(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function E(e) {
          if (e) {
            var t = e[r];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                i = function t() {
                  for (; ++n < e.length; )
                    if (o.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (i.next = i);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (_.prototype = m),
          c(v, "constructor", m),
          c(m, "constructor", _),
          (_.displayName = c(m, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === _ || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), c(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(v)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(k.prototype),
          c(k.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = k),
          (e.async = function (t, o, n, r, i) {
            void 0 === i && (i = Promise);
            var s = new k(d(t, o, n, r), i);
            return e.isGeneratorFunction(o)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          y(v),
          c(v, l, "Generator"),
          c(v, r, function () {
            return this;
          }),
          c(v, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var o in e) t.push(o);
            return (
              t.reverse(),
              function o() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (o.value = n), (o.done = !1), o;
                }
                return (o.done = !0), o;
              }
            );
          }),
          (e.values = E),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(C),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    o.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(o, n) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = o),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  s = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var a = o.call(i, "catchLoc"),
                    l = o.call(i, "finallyLoc");
                  if (a && l) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (a) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  o.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var s = i ? i.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), p)
                  : this.complete(s)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                p
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var o = this.tryEntries[t];
                if (o.finallyLoc === e)
                  return this.complete(o.completion, o.afterLoc), C(o), p;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var o = this.tryEntries[t];
                if (o.tryLoc === e) {
                  var n = o.completion;
                  if ("throw" === n.type) {
                    var r = n.arg;
                    C(o);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, o) {
              return (
                (this.delegate = { iterator: E(e), resultName: t, nextLoc: o }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          e
        );
      }
      function a(e, t, o, n, r, i, s) {
        try {
          var a = e[i](s),
            l = a.value;
        } catch (e) {
          return void o(e);
        }
        a.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      (n = [
        o(19755),
        o(3574),
        o(46013),
        o(54499),
        o(34960),
        o(27148),
        o(18916),
        o(30381),
        o(80028),
      ]),
        void 0 ===
          (r = function (e, t, o, n, r, i, l, c, d) {
            "use strict";
            var u = function (t, o) {
              (o = o || {}),
                (this.base_url = o.base_url || n.get_body_data("baseUrl")),
                (this.selector = t),
                (this.notebook = o.notebook),
                (this.actions = this.notebook.keyboard_manager.actions),
                (this.contents = o.contents),
                (this.events = o.events),
                (this.save_widget = o.save_widget),
                (this.quick_help = o.quick_help),
                (this.actions = o.actions),
                (this.config = o.config);
              try {
                this.tour = new l.Tour(this.notebook, this.events);
              } catch (e) {
                (this.tour = void 0),
                  console.log("Failed to instantiate Notebook Tour", e);
              }
              void 0 !== this.selector &&
                ((this.element = e(t)),
                this.style(),
                this.add_bundler_items(),
                this.bind_events());
            };
            return (
              (u.prototype.style = function () {
                var e = this;
                this.element.find("li").click(function (t, o) {
                  var n = e.notebook.get_selected_index();
                  e.notebook.select(n, !1);
                });
              }),
              (u.prototype.add_bundler_items = function () {
                var t = this;
                this.config.loaded.then(function () {
                  var o = t.config.data.bundlerextensions;
                  o &&
                    Object.keys(o)
                      .sort()
                      .forEach(function (n) {
                        var r = o[n],
                          i = t.element.find("#" + r.group + "_menu");
                        if (i.length)
                          if (r.label) {
                            i.parent().removeClass("hidden");
                            var s = e("<li>").appendTo(i);
                            e("<a>")
                              .attr("href", "#")
                              .text(r.label)
                              .appendTo(s)
                              .on("click", t._bundle.bind(t, n))
                              .appendTo(s);
                          } else
                            console.warn(
                              "no label for bundler ID",
                              n,
                              "; skipping"
                            );
                        else
                          console.warn(
                            "unknown group",
                            r.group,
                            "for bundler ID",
                            n,
                            "; skipping"
                          );
                      });
                });
              }),
              (u.prototype._new_window = function (e) {
                var o = window.open("", t._target);
                this.notebook.dirty && this.notebook.writable
                  ? this.notebook.save_notebook().then(function () {
                      o.location = e;
                    })
                  : (o.location = e);
              }),
              (u.prototype._bundle = function (e) {
                var t = n.encode_uri_components(this.notebook.notebook_path),
                  o =
                    n.url_path_join(this.base_url, "bundle", t) +
                    "?bundler=" +
                    n.encode_uri_components(e);
                this._new_window(o);
              }),
              (u.prototype._nbconvert = function (e, t) {
                t = t || !1;
                var o = n.encode_uri_components(this.notebook.notebook_path),
                  r =
                    n.url_path_join(this.base_url, "nbconvert", e, o) +
                    "?download=" +
                    t.toString();
                this._new_window(r);
              }),
              (u.prototype._size_header = function () {
                console.warn(
                  "`_size_header` is deprecated and will be removed in future versions. Please trigger the `resize-header.Page` manually if you rely on it."
                ),
                  this.events.trigger("resize-header.Page");
              }),
              (u.prototype.bind_events = function () {
                var e = this;
                this.element.find("#open_notebook").click(function () {
                  e.notebook.basthonGUI.openFile();
                }),
                  this.element.find("#copy_notebook").click(function () {
                    return e.notebook.copy_notebook(), !1;
                  }),
                  this.element.find("#save_notebook_as").click(function () {
                    return e.notebook.basthonGUI.download(), !1;
                  }),
                  this.element.find("#restore_checkpoint").click(function () {
                    var t;
                    return (
                      ((t = s().mark(function t() {
                        var o;
                        return s().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  e.notebook.basthonGUI.selectCheckpoint()
                                );
                              case 2:
                                null != (o = t.sent) &&
                                  e.notebook.basthonGUI.setContent(o);
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })),
                      function () {
                        var e = this,
                          o = arguments;
                        return new Promise(function (n, r) {
                          var i = t.apply(e, o);
                          function s(e) {
                            a(i, n, r, s, l, "next", e);
                          }
                          function l(e) {
                            a(i, n, r, s, l, "throw", e);
                          }
                          s(void 0);
                        });
                      })(),
                      !1
                    );
                  }),
                  this.element.find("#print_preview").click(function () {
                    e._nbconvert("html", !1);
                  }),
                  this.element.find("#download_menu li").click(function (t) {
                    e._nbconvert(
                      t.target.parentElement.getAttribute("id").substring(9),
                      !0
                    );
                  }),
                  this.events.on("trust_changed.Notebook", function (t, o) {
                    o
                      ? e.element
                          .find("#trust_notebook")
                          .addClass("disabled")
                          .off("click")
                          .find("a")
                          .text(r.msg._("Trusted Notebook"))
                      : e.element
                          .find("#trust_notebook")
                          .removeClass("disabled")
                          .on("click", function () {
                            e.notebook.trust_notebook();
                          })
                          .find("a")
                          .text(r.msg._("Trust Notebook"));
                  }),
                  this._add_celltoolbar_list(),
                  this.element.find("#edit_nb_metadata").click(function () {
                    e.notebook.edit_metadata({
                      notebook: e.notebook,
                      keyboard_manager: e.notebook.keyboard_manager,
                    });
                  });
                var t = {
                  "#trust_notebook": "trust-notebook",
                  "#rename_notebook": "rename-notebook",
                  "#find_and_replace": "find-and-replace",
                  "#save_checkpoint": "save-notebook",
                  "#share_notebook": "share-notebook",
                  "#rollback": "rollback",
                  "#switch_theme": "switch-theme",
                  "#shutdown_kernel": "confirm-shutdown-kernel",
                  "#restart_kernel": "confirm-restart-kernel",
                  "#restart_clear_output":
                    "confirm-restart-kernel-and-clear-output",
                  "#restart_run_all":
                    "confirm-restart-kernel-and-run-all-cells",
                  "#close_and_halt": "close-and-halt",
                  "#int_kernel": "interrupt-kernel",
                  "#cut_cell": "cut-cell",
                  "#copy_cell": "copy-cell",
                  "#delete_cell": "delete-cell",
                  "#undelete_cell": "undo-cell-deletion",
                  "#split_cell": "split-cell-at-cursor",
                  "#merge_cell_above": "merge-cell-with-previous-cell",
                  "#merge_cell_below": "merge-cell-with-next-cell",
                  "#move_cell_up": "move-cell-up",
                  "#move_cell_down": "move-cell-down",
                  "#toggle_header": "toggle-header",
                  "#toggle_toolbar": "toggle-toolbar",
                  "#toggle_line_numbers": "toggle-all-line-numbers",
                  "#insert_cell_above": "insert-cell-above",
                  "#insert_cell_below": "insert-cell-below",
                  "#run_cell": "run-cell",
                  "#run_cell_select_below": "run-cell-and-select-next",
                  "#run_cell_insert_below": "run-cell-and-insert-below",
                  "#run_all_cells": "run-all-cells",
                  "#run_all_cells_above": "run-all-cells-above",
                  "#run_all_cells_below": "run-all-cells-below",
                  "#to_code": "change-cell-to-code",
                  "#to_markdown": "change-cell-to-markdown",
                  "#to_raw": "change-cell-to-raw",
                  "#toggle_current_output": "toggle-cell-output-collapsed",
                  "#toggle_current_output_scroll":
                    "toggle-cell-output-scrolled",
                  "#clear_current_output": "clear-cell-output",
                  "#toggle_all_output": "toggle-all-cells-output-collapsed",
                  "#toggle_all_output_scroll":
                    "toggle-all-cells-output-scrolled",
                  "#clear_all_output": "clear-all-cells-output",
                  "#cut_cell_attachments": "cut-cell-attachments",
                  "#copy_cell_attachments": "copy-cell-attachments",
                  "#paste_cell_attachments": "paste-cell-attachments",
                  "#insert_image": "insert-image",
                  "#edit_keyboard_shortcuts":
                    "edit-command-mode-keyboard-shortcuts",
                };
                for (var o in t)
                  if (t.hasOwnProperty(o)) {
                    var n = "jupyter-notebook:" + t[o];
                    e.actions.exists(n) ||
                      console.warn(
                        "actions",
                        n,
                        "does not exist, still binding it in case it will be defined later..."
                      ),
                      (function (e, t, o) {
                        e.element.find(o).click(function (o) {
                          e.actions.call(t, o);
                        });
                      })(e, n, o);
                  }
                this.element.find("#reconnect_kernel").click(function () {
                  e.notebook.kernel.reconnect();
                }),
                  this.tour
                    ? this.element.find("#notebook_tour").click(function () {
                        e.tour.start();
                      })
                    : this.element.find("#notebook_tour").addClass("disabled"),
                  this.element.find("#keyboard_shortcuts").click(function () {
                    e.quick_help.show_keyboard_shortcuts();
                  }),
                  this.update_restore_checkpoint(null),
                  this.events.on(
                    "checkpoints_listed.Notebook",
                    function (t, o) {
                      e.update_restore_checkpoint(e.notebook.checkpoints);
                    }
                  ),
                  this.events.on(
                    "checkpoint_created.Notebook",
                    function (t, o) {
                      e.update_restore_checkpoint(e.notebook.checkpoints);
                    }
                  ),
                  this.events.on("notebook_loaded.Notebook", function () {
                    var t = e.notebook.metadata.language_info || {};
                    e.update_nbconvert_script(t);
                  }),
                  this.events.on("kernel_ready.Kernel", function (t, o) {
                    var n = o.kernel.info_reply.language_info || {};
                    e.update_nbconvert_script(n),
                      e.add_kernel_help_links(
                        o.kernel.info_reply.help_links || []
                      );
                  });
              }),
              (u.prototype._add_celltoolbar_list = function () {
                var t = this,
                  o = e("#menu-cell-toolbar-submenu");
                function n(n, s) {
                  var a = s.name;
                  o.append(
                    e("<li/>")
                      .attr("data-name", encodeURIComponent(a))
                      .append(
                        e("<a/>")
                          .attr("href", "#")
                          .text(a)
                          .click(function () {
                            a === r.msg._("None")
                              ? (i.CellToolbar.global_hide(),
                                delete t.notebook.metadata.celltoolbar)
                              : (i.CellToolbar.global_show(),
                                i.CellToolbar.activate_preset(a, t.events),
                                (t.notebook.metadata.celltoolbar = a)),
                              t.notebook.focus_cell();
                          })
                      )
                  );
                }
                var s = i.CellToolbar.list_presets();
                n(0, { name: r.msg._("None") }),
                  s.map(function (e) {
                    n(0, { name: e });
                  }),
                  this.events.on("preset_added.CellToolbar", n),
                  this.events.on(
                    "unregistered_preset.CellToolbar",
                    function (e, t) {
                      o.find(
                        "li[data-name='" + encodeURIComponent(t.name) + "']"
                      ).remove();
                    }
                  );
              }),
              (u.prototype.update_restore_checkpoint = function (t) {
                var o = this.element.find("#restore_checkpoint").find("ul");
                if ((o.empty(), t && 0 !== t.length)) {
                  var n = this;
                  t.map(function (t) {
                    var r = new Date(t.last_modified);
                    o.append(
                      e("<li/>").append(
                        e("<a/>")
                          .attr("href", "#")
                          .text(c(r).format("LLLL"))
                          .click(function () {
                            n.notebook.restore_checkpoint_dialog(t);
                          })
                      )
                    );
                  });
                } else
                  o.append(
                    e("<li/>")
                      .addClass("disabled")
                      .append(e("<a/>").text(r.msg._("No checkpoints")))
                  );
              }),
              (u.prototype.update_nbconvert_script = function (e) {
                var t = this.element.find("#download_script"),
                  o = e.name || "Script";
                (o = o.charAt(0).toUpperCase() + o.substr(1)),
                  t
                    .find("a")
                    .text(o + " (" + (e.file_extension || "txt") + ")");
              }),
              (u.prototype.add_kernel_help_links = function (t) {
                var o = e("#kernel-help-links");
                if (0 === o.length) {
                  var n = e("#notebook_about").parent();
                  (o = e("<li>")
                    .attr("id", "kernel-help-links")
                    .addClass("divider")),
                    n.prev().before(o);
                }
                for (; !o.next().hasClass("divider"); ) o.next().remove();
                if (0 !== t.length) {
                  var i = o;
                  t.map(function (t) {
                    i.after(
                      e("<li>").append(
                        e("<a>")
                          .attr("target", "_blank")
                          .attr("title", r.msg._("Opens in a new window"))
                          .attr("href", d.requirejs.toUrl(t.url))
                          .append(
                            e("<i>").addClass(
                              "fa fa-external-link menu-icon pull-right"
                            )
                          )
                          .append(e("<span>").text(t.text))
                      )
                    ),
                      (i = i.next());
                  });
                } else o.remove();
              }),
              { MenuBar: u }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    5004: (e, t, o) => {
      "use strict";
      var n, r;
      function i(e, t) {
        if (e) {
          if ("string" == typeof e) return s(e, t);
          var o = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === o && e.constructor && (o = e.constructor.name),
            "Map" === o || "Set" === o
              ? Array.from(e)
              : "Arguments" === o ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
              ? s(e, t)
              : void 0
          );
        }
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
        return n;
      }
      (n = [
        o(19755),
        o(3574),
        o(59050),
        o(54499),
        o(34960),
        o(46013),
        o(42142),
        o(98448),
        o(57017),
        o(30381),
        o(51475),
        o(73803),
        o(27148),
        o(30970),
        o(4631),
        o(27165),
        o(86817),
        o(58812),
        o(97600),
        o(47524),
        o(68262),
        o(39903),
        o(47704),
        o(33211),
        o(3849),
        o(2899),
        o(55504),
        o(19575),
      ]),
        void 0 ===
          (r = function (
            e,
            t,
            n,
            r,
            a,
            l,
            c,
            d,
            u,
            p,
            h,
            _,
            m,
            f,
            g,
            b,
            v,
            y,
            k,
            w,
            x,
            C,
            j,
            E,
            S,
            N,
            O,
            M
          ) {
            var T = O.ShortcutEditor,
              A = "jupyter-soft-selected";
            function I(e) {
              return e.element.hasClass(A);
            }
            function L(t, o) {
              var n = this;
              (this.basthonGUI = o.basthonGUI),
                (this.config = o.config),
                this.config.loaded.then(this.validate_config.bind(this)),
                (this.class_config = new h.ConfigWithDefaults(
                  this.config,
                  L.options_default,
                  "Notebook"
                )),
                (this.base_url = o.base_url),
                (this.notebook_path = o.notebook_path),
                (this.notebook_name = o.notebook_name),
                (this.events = o.events),
                (this.keyboard_manager = o.keyboard_manager),
                (this.contents = o.contents),
                (this.save_widget = o.save_widget),
                (this.tooltip = new k.Tooltip(this.events)),
                (this.ws_url = o.ws_url),
                (this._sequenced = !1),
                (this.set_sequenced = function (e) {
                  return (n._sequenced = !!e);
                }),
                (this.is_sequenced = function () {
                  return n._sequenced;
                }),
                (this._rest_sequence = []),
                (this._romd = !1),
                (this.set_romd = function (e) {
                  return (n._romd = !!e);
                }),
                (this.is_romd = function () {
                  return n._romd;
                }),
                (this._session_starting = !1),
                (this.last_modified = null),
                (this._last_modified = "init"),
                (this._ff_beforeunload_fired = !1),
                (this.scroll_manager = new S.ScrollManager(this)),
                (this.keyboard_manager.notebook = this),
                (this.save_widget.notebook = this),
                v.init(),
                f &&
                  (f.setOptions({
                    gfm: !0,
                    tables: !0,
                    langPrefix: "cm-s-ipython language-",
                    highlight: function (e, t, o) {
                      if (!t) return o ? void o(null, e) : e;
                      r.requireCodeMirrorMode(
                        t,
                        function (n) {
                          var r = document.createElement("div");
                          if (!g.getMode({}, n))
                            return (
                              console.log("No CodeMirror mode: " + t),
                              void o(null, e)
                            );
                          try {
                            g.runMode(e, n, r), o(null, r.innerHTML);
                          } catch (n) {
                            console.log(
                              "Failed to highlight " + t + " code",
                              n
                            ),
                              o(n, e);
                          }
                        },
                        function (n) {
                          console.log("No CodeMirror mode: " + t),
                            console.log("Require CodeMirror mode error: " + n),
                            o(null, e);
                        }
                      );
                    },
                  }),
                  f.use({
                    walkTokens: function (e) {
                      var t;
                      if (
                        "image" === e.type &&
                        e.href.startsWith("filesystem:/") &&
                        null !== (t = n.basthonGUI.kernelSafe) &&
                        void 0 !== t &&
                        t.ready
                      ) {
                        var o = n.basthonGUI.kernelSafe,
                          r = e.href.slice(12);
                        e.href =
                          "data:image/png;base64," +
                          M.fromUint8Array(o.getFile(r));
                      }
                    },
                  })),
                (this.element = e(t)),
                this.element.scroll(),
                this.element.data("notebook", this),
                (this.session = null),
                (this.kernel = null),
                (this.kernel_busy = !1),
                (this.clipboard = null),
                (this.clipboard_attachments = null),
                (this.undelete_backup_stack = []),
                (this.paste_enabled = !1),
                (this.paste_attachments_enabled = !1),
                (this.writable = !1),
                (this.mode = "command"),
                this.set_dirty(!1),
                (this.metadata = {}),
                (this._checkpoint_after_save = !1),
                (this.last_checkpoint = null),
                (this.checkpoints = []),
                (this.autosave_interval = 0),
                (this.autosave_timer = null),
                (this.minimum_autosave_interval = 12e4),
                (this.notebook_name_blacklist_re = /[\/\\:]/),
                (this.nbformat = 4),
                (this.nbformat_minor = this.current_nbformat_minor = 1),
                (this.codemirror_mode = "text"),
                this.create_elements(),
                this.bind_events(),
                (this.kernel_selector = null),
                (this.dirty = null),
                (this.trusted = null),
                (this._changed_on_disk_dialog = null),
                (this._fully_loaded = !1),
                w.register(this),
                x.register(this),
                C.register(this),
                j.register(this),
                E.register(this);
              var i = this;
              Object.defineProperty(this, "line_numbers", {
                get: function () {
                  return (
                    (((i.config.data || {}).Cell || {}).cm_config || {})
                      .lineNumbers || !1
                  );
                },
                set: function (e) {
                  i.config.update({ Cell: { cm_config: { lineNumbers: e } } });
                },
              }),
                Object.defineProperty(this, "header", {
                  get: function () {
                    return i.class_config.get_sync("Header");
                  },
                  set: function (e) {
                    i.class_config.set("Header", e);
                  },
                }),
                Object.defineProperty(this, "toolbar", {
                  get: function () {
                    return i.class_config.get_sync("Toolbar");
                  },
                  set: function (e) {
                    i.class_config.set("Toolbar", e);
                  },
                }),
                this.class_config.get("Header").then(function (e) {
                  !1 === e &&
                    i.keyboard_manager.actions.call(
                      "jupyter-notebook:hide-header"
                    );
                }),
                this.class_config.get("Toolbar").then(function (e) {
                  !1 === e &&
                    i.keyboard_manager.actions.call(
                      "jupyter-notebook:hide-toolbar"
                    );
                }),
                Object.seal(this);
            }
            (L.options_default = {
              default_cell_type: "code",
              Header: !0,
              Toolbar: !0,
              kill_kernel: !1,
            }),
              (L.prototype.validate_config = function () {
                var e = this.config.data.CodeCell || {},
                  t = (e.cm_config || {}).keyMap;
                t &&
                  void 0 === g.keyMap[t] &&
                  (console.warn("CodeMirror keymap not found, ignoring: " + t),
                  delete e.cm_config.keyMap);
              }),
              (L.prototype.create_elements = function () {
                var t = this;
                this.element.attr("tabindex", "-1"),
                  (this.container = e("<div/>")
                    .addClass("container")
                    .attr("id", "notebook-container"));
                var o = e("<div/>").addClass("end_space");
                o.dblclick(function () {
                  var e = t.ncells();
                  t.insert_cell_below("code", e - 1);
                }),
                  this.element.append(this.container),
                  this.container.after(o);
              }),
              (L.prototype.bind_events = function () {
                var t = this;
                this.events.on("set_next_input.Notebook", function (e, o) {
                  if (o.replace)
                    o.cell.set_text(o.text),
                      !1 !== o.clear_output && o.cell.clear_output();
                  else {
                    var n = t.find_cell_index(o.cell);
                    t.insert_cell_below("code", n).set_text(o.text);
                  }
                  t.dirty = !0;
                }),
                  this.events.on("unrecognized_cell.Cell", function () {
                    t.warn_nbformat_minor();
                  }),
                  this.events.on("unrecognized_output.OutputArea", function () {
                    t.warn_nbformat_minor();
                  }),
                  this.events.on("set_dirty.Notebook", function (e, o) {
                    t.dirty = o.value;
                  }),
                  this.events.on("trust_changed.Notebook", function (e, o) {
                    t.trusted = o;
                  }),
                  this.events.on("select.Cell", function (e, o) {
                    var n = t.find_cell_index(o.cell);
                    t.select(n, !o.extendSelection);
                  }),
                  this.events.on("edit_mode.Cell", function (e, o) {
                    t.handle_edit_mode(o.cell);
                  }),
                  this.events.on("command_mode.Cell", function (e, o) {
                    t.handle_command_mode(o.cell);
                  }),
                  this.events.on("spec_changed.Kernel", function (e, o) {
                    var r = t.metadata.kernelspec;
                    (t.metadata.kernelspec = {
                      name: o.name,
                      display_name: o.spec.display_name,
                      language: o.spec.language,
                    }),
                      (r && n.isEqual(r, t.metadata.kernelspec)) ||
                        t.set_dirty(!0),
                      t.start_session(o.name);
                  }),
                  this.events.on("kernel_ready.Kernel", function (e, o) {
                    var r = o.kernel.info_reply;
                    if (r.language_info) {
                      var i = t.metadata.language_info,
                        s = r.language_info;
                      (t.metadata.language_info = s),
                        (i && n.isEqual(i, s)) || t.set_dirty(!0);
                      var a = s.codemirror_mode || s.name || "null";
                      t.set_codemirror_mode(a);
                    } else delete t.metadata.language_info;
                  }),
                  this.events.on("kernel_idle.Kernel", function () {
                    t.kernel_busy = !1;
                  }),
                  this.events.on("kernel_busy.Kernel", function () {
                    t.kernel_busy = !0;
                  }),
                  this.element.bind("collapse_pager", function (o, n) {
                    var r, i;
                    (r =
                      void 0 !== n && void 0 !== n.duration
                        ? n.duration
                        : "fast"),
                      (i =
                        e("#ipython-main-app").height() -
                        e("div#pager_splitter").outerHeight(!0)),
                      t.element.animate({ height: i + "px" }, r);
                  }),
                  this.element.bind("expand_pager", function (o, n) {
                    var r, i, s, a;
                    (r =
                      void 0 !== n && void 0 !== n.duration
                        ? n.duration
                        : "fast"),
                      (i = e("#ipython-main-app").height()),
                      (s = e("div#pager_splitter").outerHeight(!0)),
                      (a = i - e("div#pager").outerHeight(!0) - s),
                      t.element.animate({ height: a + "px" }, r);
                  }),
                  (window.onbeforeunload = function () {
                    if (
                      (t.class_config.get_sync("kill_kernel") &&
                        t.session.delete(),
                      "Firefox" === r.browser[0])
                    ) {
                      if (t._ff_beforeunload_fired) return;
                      (t._ff_beforeunload_fired = !0),
                        setTimeout(function () {
                          t._ff_beforeunload_fired = !1;
                        }, 1);
                    }
                    t.dirty && t.basthonGUI.backup();
                  });
              }),
              (L.prototype.show_command_palette = function () {
                new N.CommandPalette(this);
              }),
              (L.prototype.show_shortcuts_editor = function () {
                new T(this);
              }),
              (L.prototype.warn_nbformat_minor = function () {
                var e = "v" + this.nbformat + ".",
                  t = e + this.nbformat_minor,
                  o = e + this.current_nbformat_minor,
                  n =
                    a.msg.sprintf(
                      a.msg._(
                        "This notebook is version %1$s, but we only fully support up to %2$s."
                      ),
                      t,
                      o
                    ) +
                    " " +
                    a.msg._(
                      "You can still work with this notebook, but cell and output types introduced in later notebook versions will not be available."
                    );
                a.msg._("OK"),
                  a.msg._("Restart and Run All Cells"),
                  a.msg._("Restart and Clear All Outputs"),
                  a.msg._("Restart"),
                  a.msg._("Continue Running"),
                  a.msg._("Reload"),
                  a.msg._("Cancel"),
                  a.msg._("Overwrite"),
                  a.msg._("Trust"),
                  a.msg._("Revert"),
                  l.modal({
                    notebook: this,
                    keyboard_manager: this.keyboard_manager,
                    title: a.msg._("Newer Notebook"),
                    body: n,
                    buttons: { OK: { class: "btn-danger" } },
                  });
              }),
              (L.prototype.set_dirty = function (e) {
                void 0 === e && (e = !0),
                  this.dirty !== e &&
                    this.events.trigger("set_dirty.Notebook", { value: e });
              }),
              (L.prototype.scroll_to_cell = function (e, t) {
                return this.scroll_cell_percent(e, 0, t);
              }),
              (L.prototype.scroll_cell_percent = function (e, t, o) {
                var n = this.get_cells();
                (o = o || 0),
                  (t = t || 0),
                  (e = Math.min(n.length - 1, e)),
                  (e = Math.max(0, e));
                var r = this.scroll_manager.element,
                  i = r.height(),
                  s = r.scrollTop(),
                  a = r.offset().top,
                  l = s + n[e].element.offset().top - (a + 0.01 * t * i);
                return (
                  this.scroll_manager.element.animate({ scrollTop: l }, o), l
                );
              }),
              (L.prototype.scroll_to_bottom = function () {
                this.scroll_manager.element.animate(
                  { scrollTop: this.element.get(0).scrollHeight },
                  0
                );
              }),
              (L.prototype.scroll_to_top = function () {
                this.scroll_manager.element.animate({ scrollTop: 0 }, 0);
              }),
              (L.prototype.edit_metadata = function () {
                var e = this;
                l.edit_metadata({
                  md: this.metadata,
                  callback: function (t) {
                    n.isEqual(e.metadata, t) || e.set_dirty(!0),
                      (e.metadata = t);
                  },
                  name: "Notebook",
                  notebook: this,
                  keyboard_manager: this.keyboard_manager,
                });
              }),
              (L.prototype.get_cell_elements = function () {
                return (this.container || e("#notebook-container"))
                  .find(".cell")
                  .not(".cell .cell");
              }),
              (L.prototype.get_cell_element = function (e) {
                var t = null,
                  o = this.get_cell_elements().eq(e);
                return 0 !== o.length && (t = o), t;
              }),
              (L.prototype.get_msg_cell = function (e) {
                return u.CodeCell.msg_cells[e] || null;
              }),
              (L.prototype.ncells = function () {
                return this.get_cell_elements().length;
              }),
              (L.prototype.get_cells = function () {
                return this.get_cell_elements()
                  .toArray()
                  .map(function (t) {
                    return e(t).data("cell");
                  });
              }),
              (L.prototype.get_cell = function (e) {
                var t = null,
                  o = this.get_cell_element(e);
                return null !== o && (t = o.data("cell")), t;
              }),
              (L.prototype.get_next_cell = function (e) {
                var t = null,
                  o = this.find_cell_index(e);
                return (
                  this.is_valid_cell_index(o + 1) && (t = this.get_cell(o + 1)),
                  t
                );
              }),
              (L.prototype.toggle_all_line_numbers = function () {
                this.line_numbers = !this.line_numbers;
              }),
              (L.prototype.get_prev_cell = function (e) {
                var t = null,
                  o = this.find_cell_index(e);
                return null !== o && o > 0 && (t = this.get_cell(o - 1)), t;
              }),
              (L.prototype.find_cell_index = function (t) {
                var o = null;
                return (
                  this.get_cell_elements().filter(function (n) {
                    e(this).data("cell") === t && (o = n);
                  }),
                  o
                );
              }),
              (L.prototype.index_or_selected = function (e) {
                var t;
                return (
                  null == e
                    ? null === (t = this.get_selected_index()) && (t = 0)
                    : (t = e),
                  t
                );
              }),
              (L.prototype.get_selected_cells = function () {
                return this.get_cells().filter(function (e, t) {
                  return e.selected || I(e) || e.anchor;
                });
              }),
              (L.prototype.get_selected_cells_indices = function () {
                var e = [];
                return (
                  this.get_cells().filter(function (t, o) {
                    (t.selected || I(t) || t.anchor) && e.push(o);
                  }),
                  e
                );
              }),
              (L.prototype.get_selected_cell = function () {
                var e = this.get_selected_index();
                return this.get_cell(e);
              }),
              (L.prototype.is_valid_cell_index = function (e) {
                return null !== e && e >= 0 && e < this.ncells();
              }),
              (L.prototype.get_anchor_index = function () {
                var t = null;
                return (
                  this.get_cell_elements().filter(function (o) {
                    !0 === e(this).data("cell").anchor && (t = o);
                  }),
                  t
                );
              }),
              (L.prototype.get_selected_index = function () {
                var t = null;
                return (
                  this.get_cell_elements().filter(function (o) {
                    !0 === e(this).data("cell").selected && (t = o);
                  }),
                  t
                );
              }),
              (L.prototype.extend_selection_by = function (e) {
                var t = this.get_selected_index();
                return this.select(t + e, !1);
              }),
              (L.prototype.update_soft_selection = function () {
                var e = this.get_selected_index(),
                  t = this.get_anchor_index(),
                  o = Math.min(e, t),
                  n = Math.max(e, t);
                this.get_cells().map(function (e, t, r) {
                  o <= t && t <= n && o !== n
                    ? e.element.addClass(A)
                    : e.element.removeClass(A);
                });
              }),
              (L.prototype.select_all = function () {
                this.select(0, !0), this.select(this.ncells() - 1, !1);
              }),
              (L.prototype._contract_selection = function () {
                var e = this.get_selected_index();
                this.select(e, !0);
              }),
              (L.prototype.select = function (e, t) {
                if (((t = void 0 === t || t), this.is_valid_cell_index(e))) {
                  var o = this.get_selected_index();
                  null !== o &&
                    e !== o &&
                    ("command" !== this.mode && this.command_mode(),
                    this.get_cell(o).unselect(t)),
                    t && this.get_cell(this.get_anchor_index()).unselect(t);
                  var n = this.get_cell(e);
                  n.select(t),
                    this.update_soft_selection(),
                    "heading" === n.cell_type
                      ? this.events.trigger(
                          "selected_cell_type_changed.Notebook",
                          {
                            cell_type: n.cell_type,
                            level: n.level,
                            editable: n.is_editable(),
                          }
                        )
                      : this.events.trigger(
                          "selected_cell_type_changed.Notebook",
                          { cell_type: n.cell_type, editable: n.is_editable() }
                        );
                }
                return this;
              }),
              (L.prototype.select_next = function (e) {
                var t = this.get_selected_index();
                return this.select(t + 1, e), this;
              }),
              (L.prototype.select_prev = function (e) {
                var t = this.get_selected_index();
                return this.select(t - 1, e), this;
              }),
              (L.prototype.get_edit_index = function () {
                var t = null;
                return (
                  this.get_cell_elements().filter(function (o) {
                    "edit" === e(this).data("cell").mode && (t = o);
                  }),
                  t
                );
              }),
              (L.prototype.handle_command_mode = function (e) {
                "command" !== this.mode &&
                  (e.command_mode(),
                  (this.mode = "command"),
                  this.events.trigger("command_mode.Notebook"),
                  this.keyboard_manager.command_mode());
              }),
              (L.prototype.command_mode = function () {
                var e = this.get_cell(this.get_edit_index());
                e &&
                  "command" !== this.mode &&
                  e.code_mirror.getInputField().blur();
              }),
              (L.prototype.handle_edit_mode = function (e) {
                if ((this._contract_selection(), e && "edit" !== this.mode)) {
                  if (this.is_romd() && "markdown" === e.cell_type) return;
                  e.edit_mode(),
                    (this.mode = "edit"),
                    this.events.trigger("edit_mode.Notebook"),
                    this.keyboard_manager.edit_mode();
                }
              }),
              (L.prototype.edit_mode = function () {
                this._contract_selection();
                var e = this.get_selected_cell();
                if (e && "edit" !== this.mode) {
                  if (this.is_romd() && "markdown" === e.cell_type) return;
                  e.unrender(), e.focus_editor();
                }
              }),
              (L.prototype.ensure_focused = function () {
                var e = this.get_selected_cell();
                null !== e && e.ensure_focused();
              }),
              (L.prototype.focus_cell = function () {
                var e = this.get_selected_cell();
                null !== e && e.focus_cell();
              }),
              (L.prototype.move_selection_up = function () {
                var e = this.get_selected_cells_indices(),
                  t = e[0],
                  o = e[e.length - 1],
                  n = this.get_selected_index(),
                  r = this.get_anchor_index();
                if (0 !== t) {
                  var i = this.get_cell_element(t - 1),
                    s = this.get_cell_element(o);
                  i.detach(),
                    s.after(i),
                    this.get_cell(n - 1).focus_cell(),
                    this.select(r - 1),
                    this.select(n - 1, !1);
                }
              }),
              (L.prototype.move_selection_down = function () {
                var e = this.get_selected_cells_indices(),
                  t = e[0],
                  o = e[e.length - 1],
                  n = this.get_selected_index(),
                  r = this.get_anchor_index();
                if (this.is_valid_cell_index(o + 1)) {
                  var i = this.get_cell_element(o + 1),
                    s = this.get_cell_element(t);
                  i.detach(),
                    s.before(i),
                    this.get_cell(n + 1).focus_cell(),
                    this.select(t),
                    this.select(r + 1),
                    this.select(n + 1, !1);
                }
              }),
              (L.prototype.move_cell_up = function (e) {
                if (
                  (console.warn(
                    "Notebook.move_cell_up is deprecated as of v4.1 and will be removed in v5.0"
                  ),
                  void 0 === e)
                )
                  return this.move_selection_up(), this;
                var t = this.index_or_selected(e);
                if (this.is_valid_cell_index(t) && t > 0) {
                  var o = this.get_cell_element(t - 1),
                    n = this.get_cell_element(t);
                  null !== o &&
                    null !== n &&
                    (n.detach(),
                    o.before(n),
                    this.select(t - 1),
                    this.get_selected_cell().focus_cell()),
                    this.set_dirty(!0);
                }
                return this;
              }),
              (L.prototype.move_cell_down = function (e) {
                if (
                  (console.warn(
                    "Notebook.move_cell_down is deprecated as of v4.1 and will be removed in v5.0"
                  ),
                  void 0 === e)
                )
                  return this.move_selection_down(), this;
                var t = this.index_or_selected(e);
                if (
                  this.is_valid_cell_index(t) &&
                  this.is_valid_cell_index(t + 1)
                ) {
                  var o = this.get_cell_element(t + 1),
                    n = this.get_cell_element(t);
                  null !== o &&
                    null !== n &&
                    (n.detach(),
                    o.after(n),
                    this.select(t + 1),
                    this.get_selected_cell().focus_cell());
                }
                return this.set_dirty(), this;
              }),
              (L.prototype._unsafe_delete_cell = function (t) {
                var o = this.index_or_selected(t);
                return (
                  this.get_cell(o),
                  e("#undelete_cell").addClass("disabled"),
                  e("#undelete_cell > a").attr("aria-disabled", "true"),
                  this.is_valid_cell_index(o) &&
                    (this.ncells(),
                    this.get_cell_element(o).remove(),
                    this.set_dirty(!0)),
                  this
                );
              }),
              (L.prototype.delete_cells = function (t) {
                void 0 === t && (t = this.get_selected_cells_indices());
                for (
                  var o = { cells: [], below: !1, index: 0 },
                    n = this.get_selected_index(),
                    r = 0,
                    i = 0;
                  i < t.length;
                  i++
                ) {
                  if (!this.get_cell(t[i]).is_deletable()) return this;
                  t[i] < n && r++;
                }
                for (
                  t.sort(function (e, t) {
                    return t - e;
                  }),
                    i = 0;
                  i < t.length;
                  i++
                ) {
                  var s = this.get_cell(t[i]);
                  o.cells.push(s.toJSON()),
                    this.get_cell_element(t[i]).remove(),
                    this.events.trigger("delete.Cell", {
                      cell: s,
                      index: t[i],
                    });
                }
                var a = this.ncells();
                0 === a && (this.insert_cell_below("code"), (a = 1));
                var l = this.get_selected_index();
                for (
                  null === l &&
                    ((l = n - r) >= a && ((l = a - 1), (o.below = !0)),
                    this.select(l)),
                    i = 0;
                  i < t.length;
                  i++
                )
                  t[i] > n && (o.below = !0);
                return (
                  (o.index = l),
                  e("#undelete_cell").removeClass("disabled"),
                  e("#undelete_cell > a").attr("aria-disabled", "false"),
                  this.undelete_backup_stack.push(o),
                  this.set_dirty(!0),
                  this
                );
              }),
              (L.prototype.delete_cell = function (e) {
                return void 0 === e
                  ? this.delete_cells()
                  : this.delete_cells([e]);
              }),
              (L.prototype.undelete_cell = function () {
                if (this.undelete_backup_stack.length > 0) {
                  var t,
                    o,
                    n,
                    r = this.undelete_backup_stack.pop();
                  for (
                    n = r.below
                      ? e.proxy(this.insert_cell_below, this)
                      : e.proxy(this.insert_cell_above, this),
                      t = 0;
                    t < r.cells.length;
                    t++
                  )
                    n((o = r.cells[t]).cell_type, r.index).fromJSON(o);
                  this.set_dirty(!0);
                }
                0 === this.undelete_backup_stack.length &&
                  (e("#undelete_cell").addClass("disabled"),
                  e("#undelete_cell > a").attr("aria-disabled", "true"));
              }),
              (L.prototype.insert_cell_at_index = function (e, t) {
                var o = this.ncells();
                (t = Math.min(t, o)), (t = Math.max(t, 0));
                var n = null;
                if (
                  ("above" ===
                  (e = e || this.class_config.get_sync("default_cell_type"))
                    ? (e = t > 0 ? this.get_cell(t - 1).cell_type : "code")
                    : "below" === e
                    ? (e = t < o ? this.get_cell(t).cell_type : "code")
                    : "selected" === e &&
                      (e = this.get_selected_cell().cell_type),
                  0 === o || this.is_valid_cell_index(t) || t === o)
                ) {
                  var r = {
                    events: this.events,
                    config: this.config,
                    keyboard_manager: this.keyboard_manager,
                    notebook: this,
                    tooltip: this.tooltip,
                  };
                  switch (e) {
                    case "code":
                      (n = new u.CodeCell(this.kernel, r)).set_input_prompt();
                      break;
                    case "markdown":
                      n = new d.MarkdownCell(r);
                      break;
                    case "raw":
                      n = new d.RawCell(r);
                      break;
                    default:
                      console.log("Unrecognized cell type: ", e, c),
                        (n = new c.UnrecognizedCell(r));
                  }
                  this._insert_element_at_index(n.element, t) &&
                    (n.render(),
                    this.events.trigger("create.Cell", { cell: n, index: t }),
                    n.refresh(),
                    this.set_dirty(!0));
                }
                return n;
              }),
              (L.prototype._insert_element_at_index = function (e, t) {
                if (void 0 === e) return !1;
                var o = this.ncells();
                if (0 === o) this.container.append(e);
                else if (o === t) this.get_cell_element(t - 1).after(e);
                else {
                  if (!this.is_valid_cell_index(t)) return !1;
                  this.get_cell_element(t).before(e);
                }
                return (
                  this.undelete_backup_stack.map(function (e) {
                    t < e.index && (e.index += 1);
                  }),
                  this.set_dirty(!0),
                  !0
                );
              }),
              (L.prototype.insert_cell_above = function (e, t) {
                return (
                  null == t &&
                    (t = Math.min(
                      this.get_selected_index(t),
                      this.get_anchor_index()
                    )),
                  this.insert_cell_at_index(e, t)
                );
              }),
              (L.prototype.insert_cell_below = function (e, t) {
                return (
                  null == t &&
                    (t = Math.max(
                      this.get_selected_index(t),
                      this.get_anchor_index()
                    )),
                  this.insert_cell_at_index(e, t + 1)
                );
              }),
              (L.prototype.insert_cell_at_bottom = function (e) {
                var t = this.ncells();
                return this.insert_cell_below(e, t - 1);
              }),
              (L.prototype.cells_to_code = function (e) {
                void 0 === e && (e = this.get_selected_cells_indices());
                for (var t = 0; t < e.length; t++) this.to_code(e[t]);
              }),
              (L.prototype.to_code = function (e) {
                var t = this.index_or_selected(e);
                if (this.is_valid_cell_index(t)) {
                  var o = this.get_cell(t);
                  if (this.is_romd() && "markdown" === o.cell_type) return;
                  if (!(o instanceof u.CodeCell) && o.is_editable()) {
                    var n = this.insert_cell_below("code", t),
                      r = o.get_text();
                    r === o.placeholder && (r = ""),
                      (n.metadata = o.metadata),
                      (n.attachments = o.attachments),
                      n.set_text(r),
                      n.code_mirror.clearHistory(),
                      o.element.remove(),
                      this.select(t);
                    var i = o.code_mirror.getCursor();
                    n.code_mirror.setCursor(i), this.set_dirty(!0);
                  }
                }
              }),
              (L.prototype.cells_to_markdown = function (e) {
                void 0 === e && (e = this.get_selected_cells_indices());
                for (var t = 0; t < e.length; t++) this.to_markdown(e[t]);
              }),
              (L.prototype.to_markdown = function (e) {
                if (!this.is_romd()) {
                  var t = this.index_or_selected(e);
                  if (this.is_valid_cell_index(t)) {
                    var o = this.get_cell(t);
                    if (!(o instanceof d.MarkdownCell) && o.is_editable()) {
                      var n = this.insert_cell_below("markdown", t),
                        r = o.get_text();
                      r === o.placeholder && (r = ""),
                        (n.metadata = o.metadata),
                        (n.attachments = o.attachments),
                        n.unrender(),
                        n.set_text(r),
                        n.code_mirror.clearHistory(),
                        o.element.remove(),
                        this.select(t),
                        o instanceof d.TextCell && o.rendered && n.render();
                      var i = o.code_mirror.getCursor();
                      n.code_mirror.setCursor(i), this.set_dirty(!0);
                    }
                  }
                }
              }),
              (L.prototype.cells_to_raw = function (e) {
                void 0 === e && (e = this.get_selected_cells_indices());
                for (var t = 0; t < e.length; t++) this.to_raw(e[t]);
              }),
              (L.prototype.to_raw = function (e) {
                var t = this.index_or_selected(e);
                if (this.is_valid_cell_index(t)) {
                  var o = null,
                    n = this.get_cell(t);
                  if (this.is_romd() && "markdown" === n.cell_type) return;
                  if (!(n instanceof d.RawCell) && n.is_editable()) {
                    o = this.insert_cell_below("raw", t);
                    var r = n.get_text();
                    r === n.placeholder && (r = ""),
                      (o.metadata = n.metadata),
                      (o.attachments = n.attachments),
                      o.unrender(),
                      o.set_text(r),
                      o.code_mirror.clearHistory(),
                      n.element.remove(),
                      this.select(t);
                    var i = n.code_mirror.getCursor();
                    o.code_mirror.setCursor(i), this.set_dirty(!0);
                  }
                }
              }),
              (L.prototype._warn_heading = function () {
                l.modal({
                  notebook: this,
                  keyboard_manager: this.keyboard_manager,
                  title: a.msg._("Use markdown headings"),
                  body: e("<p/>")
                    .text(
                      a.msg._(
                        "Jupyter no longer uses special heading cells. Instead, write your headings in Markdown cells using # characters:"
                      )
                    )
                    .append(
                      e("<pre/>").text(a.msg._("## This is a level 2 heading"))
                    ),
                  buttons: { OK: {} },
                });
              }),
              (L.prototype.to_heading = function (e, t) {
                this.to_markdown(e), (t = t || 1);
                var o = this.index_or_selected(e);
                if (this.is_valid_cell_index(o)) {
                  var n = this.get_cell(o);
                  if (this.is_romd() && "markdown" === source_cell.cell_type)
                    return;
                  n.set_heading_level(t), this.set_dirty(!0);
                }
              }),
              (L.prototype.enable_paste = function () {
                var t = this;
                this.paste_enabled ||
                  (e("#paste_cell_replace")
                    .removeClass("disabled")
                    .on("click", function () {
                      t.keyboard_manager.actions.call(
                        "jupyter-notebook:paste-cell-replace"
                      );
                    }),
                  e("#paste_cell_replace > a").attr("aria-disabled", "false"),
                  e("#paste_cell_above")
                    .removeClass("disabled")
                    .on("click", function () {
                      t.keyboard_manager.actions.call(
                        "jupyter-notebook:paste-cell-above"
                      );
                    }),
                  e("#paste_cell_above > a").attr("aria-disabled", "false"),
                  e("#paste_cell_below")
                    .removeClass("disabled")
                    .on("click", function () {
                      t.keyboard_manager.actions.call(
                        "jupyter-notebook:paste-cell-below"
                      );
                    }),
                  e("#paste_cell_below > a").attr("aria-disabled", "false"),
                  (this.paste_enabled = !0));
              }),
              (L.prototype.disable_paste = function () {
                this.paste_enabled &&
                  (e("#paste_cell_replace").addClass("disabled").off("click"),
                  e("#paste_cell_replace > a").attr("aria-disabled", "true"),
                  e("#paste_cell_above").addClass("disabled").off("click"),
                  e("#paste_cell_above > a").attr("aria-disabled", "true"),
                  e("#paste_cell_below").addClass("disabled").off("click"),
                  e("#paste_cell_below > a").attr("aria-disabled", "true"),
                  (this.paste_enabled = !1));
              }),
              (L.prototype.cut_cell = function () {
                this.copy_cell(), this.delete_cell();
              }),
              (L.prototype.copy_cell = function () {
                var e,
                  t = this.get_selected_cells();
                0 === t.length && (t = [this.get_selected_cell()]),
                  (this.clipboard = []);
                for (var o = 0; o < t.length; o++)
                  void 0 !== (e = t[o].toJSON()).metadata.deletable &&
                    delete e.metadata.deletable,
                    this.clipboard.push(e);
                this.enable_paste();
              }),
              (L.prototype.paste_cell_replace = function () {
                if (null !== this.clipboard && this.paste_enabled) {
                  var e = this.get_selected_cells_indices(),
                    t = e[0];
                  this.delete_cells(e);
                  for (var o = this.clipboard.length - 1; o >= 0; o--) {
                    var n = this.clipboard[o];
                    this.insert_cell_at_index(n.cell_type, t).fromJSON(n);
                  }
                  this.select(t + this.clipboard.length - 1);
                }
              }),
              (L.prototype.paste_cell_above = function () {
                if (null !== this.clipboard && this.paste_enabled) {
                  for (var e = null, t = 0; t < this.clipboard.length; t++) {
                    var o = this.clipboard[t],
                      n = this.insert_cell_above(o.cell_type);
                    n.fromJSON(o), null === e && (e = n);
                  }
                  e.focus_cell();
                }
              }),
              (L.prototype.paste_cell_below = function () {
                if (null !== this.clipboard && this.paste_enabled) {
                  for (
                    var e = null, t = this.clipboard.length - 1;
                    t >= 0;
                    t--
                  ) {
                    var o = this.clipboard[t],
                      n = this.insert_cell_below(o.cell_type);
                    n.fromJSON(o), null === e && (e = n);
                  }
                  e.focus_cell();
                }
              }),
              (L.prototype.render_cell_output = function (e) {
                var t = e.toJSON(),
                  o = this.find_cell_index(e),
                  n = e.output_area.trusted;
                this.clear_output(o),
                  (e.output_area.trusted = n),
                  e.fromJSON(t);
              }),
              (L.prototype.split_cell = function () {
                var e = this.get_selected_cell();
                if (e.is_splittable()) {
                  var t = e.get_pre_cursor(),
                    o = e.get_post_cursor();
                  e.set_text(o);
                  var n = this.insert_cell_above(e.cell_type);
                  n.unrender(),
                    n.set_text(t),
                    (n.metadata = JSON.parse(JSON.stringify(e.metadata)));
                }
              }),
              (L.prototype.merge_cells = function (e, t) {
                if (
                  !(
                    e.length <= 1 ||
                    e.filter(function (e) {
                      return e < 0;
                    }).length > 0
                  )
                ) {
                  for (var o = 0; o < e.length; o++)
                    if (!this.get_cell(e[o]).is_mergeable()) return;
                  var n = this.get_cell(t ? e.pop() : e.shift()),
                    r = [];
                  for (o = 0; o < e.length; o++)
                    r.push(this.get_cell(e[o]).get_text());
                  if (
                    (t ? r.push(n.get_text()) : r.unshift(n.get_text()),
                    n instanceof u.CodeCell)
                  )
                    n.set_text(r.join("\n\n"));
                  else {
                    var i = n.rendered;
                    n.unrender(), n.set_text(r.join("\n\n")), i && n.render();
                  }
                  this.delete_cells(e),
                    n.code_mirror.clearHistory(),
                    this.select(this.find_cell_index(n));
                }
              }),
              (L.prototype.merge_selected_cells = function () {
                this.merge_cells(this.get_selected_cells_indices());
              }),
              (L.prototype.merge_cell_above = function () {
                var e = this.get_selected_index();
                this.merge_cells([e - 1, e], !0);
              }),
              (L.prototype.merge_cell_below = function () {
                var e = this.get_selected_index();
                this.merge_cells([e, e + 1], !1);
              }),
              (L.prototype.set_theme = function (e) {
                var t, n, r, s, a;
                "darcula" ===
                  (e =
                    null !== (t = { dark: "darcula", light: "ipython" }[e]) &&
                    void 0 !== t
                      ? t
                      : e) &&
                  (o.e(136).then(o.bind(o, 60136)),
                  o.e(3724).then(o.bind(o, 83724)));
                var l =
                  null === (n = u.CodeCell) ||
                  void 0 === n ||
                  null === (r = n.options_default) ||
                  void 0 === r
                    ? void 0
                    : r.cm_config;
                null != l && (l.theme = e),
                  null !=
                    (l =
                      null === (s = d.TextCell) ||
                      void 0 === s ||
                      null === (a = s.options_default) ||
                      void 0 === a
                        ? void 0
                        : a.cm_config) &&
                    (l.theme = "ipython" === e ? void 0 : e);
                var c,
                  p = (function (e, t) {
                    var o =
                      ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                    if (!o) {
                      if (Array.isArray(e) || (o = i(e))) {
                        o && (e = o);
                        var n = 0,
                          r = function () {};
                        return {
                          s: r,
                          n: function () {
                            return n >= e.length
                              ? { done: !0 }
                              : { done: !1, value: e[n++] };
                          },
                          e: function (e) {
                            throw e;
                          },
                          f: r,
                        };
                      }
                      throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    }
                    var s,
                      a = !0,
                      l = !1;
                    return {
                      s: function () {
                        o = o.call(e);
                      },
                      n: function () {
                        var e = o.next();
                        return (a = e.done), e;
                      },
                      e: function (e) {
                        (l = !0), (s = e);
                      },
                      f: function () {
                        try {
                          a || null == o.return || o.return();
                        } finally {
                          if (l) throw s;
                        }
                      },
                    };
                  })(this.get_cells());
                try {
                  for (p.s(); !(c = p.n()).done; ) {
                    var h, _, m;
                    null === (h = c.value.code_mirror) ||
                      void 0 === h ||
                      null === (_ = (m = h).setOption) ||
                      void 0 === _ ||
                      _.call(m, "theme", e);
                  }
                } catch (e) {
                  p.e(e);
                } finally {
                  p.f();
                }
                for (
                  var g = "cm-s-".concat(
                      "darcula" === e ? "ipython" : "darcula"
                    ),
                    b = "cm-s-".concat(e),
                    v = 0,
                    y = Array.from(document.getElementsByClassName(g));
                  v < y.length;
                  v++
                ) {
                  var k = y[v].classList;
                  k.add(b), k.remove(g);
                }
                f.setOptions({ langPrefix: "".concat(b, " language-") }),
                  document.documentElement.setAttribute("data-theme", e);
              }),
              (L.prototype.theme = function () {
                return "darcula" ===
                  document.documentElement.getAttribute("data-theme")
                  ? "dark"
                  : "light";
              }),
              (L.prototype.switch_theme = function () {
                var e = "light" === this.theme() ? "dark" : "light";
                this.set_theme(e);
              }),
              (L.prototype.insert_image = function () {
                var e = this.get_selected_cell();
                "markdown" === e.cell_type
                  ? e.rendered
                    ? console.log("Error: insert_image called on rendered cell")
                    : l.insert_image({
                        callback: function (t) {
                          e.edit_mode(), e.insert_inline_image_from_blob(t);
                        },
                        notebook: this,
                        keyboard_manager: this.keyboard_manager,
                      })
                  : console.log(
                      "Error: insert_image called on non-markdown cell"
                    );
              }),
              (L.prototype.cut_cell_attachments = function () {
                var e = this.get_selected_cell();
                void 0 !== e.attachments &&
                  ((this.clipboard_attachments = e.attachments),
                  this.enable_attachments_paste(),
                  delete e.attachments,
                  e.unrender(),
                  e.render());
              }),
              (L.prototype.copy_cell_attachments = function () {
                var t = this.get_selected_cell();
                void 0 !== t.attachments &&
                  ((this.clipboard_attachments = e.extend(
                    !0,
                    {},
                    t.attachments
                  )),
                  this.enable_attachments_paste());
              }),
              (L.prototype.paste_cell_attachments = function () {
                if (
                  null !== this.clipboard_attachments &&
                  this.paste_attachments_enabled
                ) {
                  var t = this.get_selected_cell();
                  void 0 === t.attachments && (t.attachments = {}),
                    e.extend(!0, t.attachments, this.clipboard_attachments),
                    t.unrender(),
                    t.render();
                }
              }),
              (L.prototype.disable_attachments_paste = function () {
                this.paste_attachments_enabled &&
                  (e("#paste_cell_attachments").addClass("disabled"),
                  e("#paste_cell_attachments > a").attr("disabled", "true"),
                  (this.paste_attachments_enabled = !1));
              }),
              (L.prototype.enable_attachments_paste = function () {
                this.paste_attachments_enabled ||
                  (e("#paste_cell_attachments").removeClass("disabled"),
                  e("#paste_cell_attachments > a").attr(
                    "aria-disabled",
                    "false"
                  ),
                  (this.paste_attachments_enabled = !0));
              }),
              (L.prototype.set_insert_image_enabled = function (t) {
                t
                  ? (e("#insert_image").removeClass("disabled"),
                    e("#insert_image > a").attr("aria-disabled", "false"))
                  : (e("#insert_image").addClass("disabled"),
                    e("#insert_image > a").attr("aria-disabled", "true"));
              }),
              (L.prototype.collapse_output = function (e) {
                var t = this.index_or_selected(e),
                  o = this.get_cell(t);
                null !== o &&
                  o instanceof u.CodeCell &&
                  (o.collapse_output(), this.set_dirty(!0));
              }),
              (L.prototype.collapse_all_output = function () {
                this.get_cells().map(function (e) {
                  e instanceof u.CodeCell && e.collapse_output();
                }),
                  this.set_dirty(!0);
              }),
              (L.prototype.expand_output = function (e) {
                var t = this.index_or_selected(e),
                  o = this.get_cell(t);
                null !== o &&
                  o instanceof u.CodeCell &&
                  (o.expand_output(), this.set_dirty(!0));
              }),
              (L.prototype.expand_all_output = function () {
                this.get_cells().map(function (e) {
                  e instanceof u.CodeCell && e.expand_output();
                }),
                  this.set_dirty(!0);
              }),
              (L.prototype.clear_output = function (e) {
                var t = this.index_or_selected(e),
                  o = this.get_cell(t);
                null !== o &&
                  o instanceof u.CodeCell &&
                  (o.clear_output(), this.set_dirty(!0));
              }),
              (L.prototype.clear_cells_outputs = function (e) {
                e || (e = this.get_selected_cells_indices());
                for (var t = 0; t < e.length; t++) this.clear_output(e[t]);
              }),
              (L.prototype.clear_all_output = function () {
                this.get_cells().map(function (e) {
                  e instanceof u.CodeCell && e.clear_output();
                }),
                  this.set_dirty(!0);
              }),
              (L.prototype.scroll_output = function (e) {
                var t = this.index_or_selected(e),
                  o = this.get_cell(t);
                null !== o &&
                  o instanceof u.CodeCell &&
                  (o.scroll_output(), this.set_dirty(!0));
              }),
              (L.prototype.scroll_all_output = function () {
                this.get_cells().map(function (e, t) {
                  e instanceof u.CodeCell && e.scroll_output();
                }),
                  this.set_dirty(!0);
              }),
              (L.prototype.toggle_output = function (e) {
                var t = this.index_or_selected(e),
                  o = this.get_cell(t);
                null !== o &&
                  o instanceof u.CodeCell &&
                  (o.toggle_output(), this.set_dirty(!0));
              }),
              (L.prototype.toggle_cells_outputs = function (e) {
                e || (e = this.get_selected_cells_indices());
                for (var t = 0; t < e.length; t++) this.toggle_output(e[t]);
              }),
              (L.prototype.toggle_all_output = function () {
                this.get_cells().map(function (e) {
                  e instanceof u.CodeCell && e.toggle_output();
                }),
                  this.set_dirty(!0);
              }),
              (L.prototype.toggle_output_scroll = function (e) {
                var t = this.index_or_selected(e),
                  o = this.get_cell(t);
                null !== o &&
                  o instanceof u.CodeCell &&
                  (o.toggle_output_scroll(), this.set_dirty(!0));
              }),
              (L.prototype.toggle_cells_outputs_scroll = function (e) {
                e || (e = this.get_selected_cells_indices());
                for (var t = 0; t < e.length; t++)
                  this.toggle_output_scroll(e[t]);
              }),
              (L.prototype.toggle_all_output_scroll = function () {
                this.get_cells().map(function (e) {
                  e instanceof u.CodeCell && e.toggle_output_scroll();
                }),
                  this.set_dirty(!0);
              }),
              (L.prototype.cell_toggle_line_numbers = function () {
                this.get_selected_cells().map(function (e) {
                  e.toggle_line_numbers();
                });
              }),
              (L.prototype._dispatch_mode = function (e, t) {
                (this.codemirror_mode = t),
                  (u.CodeCell.options_default.cm_config.mode = t),
                  this.get_cells().map(function (t) {
                    "code" === t.cell_type &&
                      (t.code_mirror.setOption("mode", e),
                      (t._options.cm_config.mode = e));
                  });
              });
            var R = function (e, t) {
              return ((e || {}).name || e) === ((t || {}).name || t);
            };
            return (
              (L.prototype.set_codemirror_mode = function (e) {
                if (!R(e, this.codemirror_mode)) {
                  var t = this;
                  r.requireCodeMirrorMode(
                    e,
                    function (o) {
                      t._dispatch_mode(o, e);
                    },
                    function () {
                      R(e, t.codemirror_mode) &&
                        t._dispatch_mode("null", "null");
                    }
                  );
                }
              }),
              (L.prototype.start_session = function (t) {
                if (this._session_starting)
                  throw new _.SessionAlreadyStarting();
                this._session_starting = !0;
                var o = {
                    base_url: this.base_url,
                    ws_url: this.ws_url,
                    notebook_path: this.notebook_path,
                    notebook_name: this.notebook_name,
                    kernel_name: t,
                    notebook: this,
                  },
                  n = e.proxy(this._session_started, this),
                  r = e.proxy(this._session_start_failed, this);
                this.session && this.session.kernel
                  ? this.session.restart(o, n, r)
                  : ((this.session = new _.Session(o)),
                    this.session.start(n, r));
              }),
              (L.prototype._session_started = function () {
                (this._session_starting = !1),
                  (this.kernel = this.session.kernel);
                for (var e = this.ncells(), t = 0; t < e; t++) {
                  var o = this.get_cell(t);
                  o instanceof u.CodeCell && o.set_kernel(this.session.kernel);
                }
                e > 0 && (this.select(0), this.edit_mode());
              }),
              (L.prototype._session_start_failed = function (e, t, o) {
                (this._session_starting = !1), r.log_ajax_error(e, t, o);
              }),
              (L.prototype.restart_run_all = function (t) {
                var o = this,
                  n = {};
                return (
                  (n.confirm = (t || {}).confirm),
                  (n.dialog = {
                    notebook: o,
                    keyboard_manager: o.keyboard_manager,
                    title: a.msg._(
                      "Restart kernel and re-run the whole notebook?"
                    ),
                    body: e("<p/>").text(
                      a.msg._(
                        "Are you sure you want to restart the current kernel and re-execute the whole notebook?  All variables and outputs will be lost."
                      )
                    ),
                    buttons: {
                      "Restart and Run All Cells": {
                        class: "btn-danger",
                        click: function () {
                          o.execute_all_cells();
                        },
                      },
                    },
                  }),
                  this._restart_kernel(n)
                );
              }),
              (L.prototype.restart_clear_output = function (t) {
                var o = this,
                  n = {};
                return (
                  (n.confirm = (t || {}).confirm),
                  (n.dialog = {
                    notebook: o,
                    keyboard_manager: o.keyboard_manager,
                    title: a.msg._("Restart kernel and clear all output?"),
                    body: e("<p/>").text(
                      a.msg._(
                        "Do you want to restart the current kernel and clear all output?  All variables and outputs will be lost."
                      )
                    ),
                    buttons: {
                      "Restart and Clear All Outputs": {
                        class: "btn-danger",
                        click: function () {
                          o.clear_all_output();
                        },
                      },
                    },
                  }),
                  this._restart_kernel(n)
                );
              }),
              (L.prototype.shutdown_kernel = function (t) {
                var o = this,
                  n = {};
                return (
                  (n.confirm = (t || {}).confirm),
                  (n.dialog = {
                    title: "Shutdown kernel?",
                    body: e("<p/>").text(
                      a.msg._(
                        "Do you want to shutdown the current kernel?  All variables will be lost."
                      )
                    ),
                    buttons: {
                      Shutdown: { class: "btn-danger", click: function () {} },
                    },
                  }),
                  (n.kernel_action = function () {
                    o.session.delete();
                  }),
                  this._restart_kernel(n)
                );
              }),
              (L.prototype.restart_kernel = function (t) {
                var o = {};
                return (
                  (o.confirm = (t || {}).confirm),
                  (o.dialog = {
                    title: a.msg._("Restart kernel?"),
                    body: e("<p/>").text(
                      a.msg._(
                        "Do you want to restart the current kernel?  All variables will be lost."
                      )
                    ),
                    buttons: {
                      Restart: { class: "btn-danger", click: function () {} },
                    },
                  }),
                  this._restart_kernel(o)
                );
              }),
              (L.prototype._restart_kernel = function (e) {
                var t,
                  o = this;
                e = e || {};
                var n = new Promise(function (e, o) {
                    (t = e), o;
                  }),
                  r = e.kernel_action;
                if (
                  ((r = function () {
                    o.basthonGUI.kernelRestart(),
                      o.is_sequenced() && o.fromJSON(o.toJSON()),
                      t();
                  }),
                  !1 === e.confirm || !o.kernel.is_connected())
                ) {
                  var i = e.dialog.buttons[Object.keys(e.dialog.buttons)[0]];
                  return n.then(i.click), r(), n;
                }
                (e.dialog.notebook = this),
                  (e.dialog.keyboard_manager = this.keyboard_manager);
                var s = { "Continue Running": {} };
                return (
                  Object.keys(e.dialog.buttons).map(function (t) {
                    var o = (s[t] = e.dialog.buttons[t]),
                      i = o.click;
                    o.click = function () {
                      n.then(i), r();
                    };
                  }),
                  (e.dialog.buttons = s),
                  l.modal(e.dialog),
                  n
                );
              }),
              (L.prototype.close_and_halt = function () {
                var e = function () {
                  window.open("", "_self", ""), window.close();
                };
                this.session.delete(e, e);
              }),
              (L.prototype.execute_cells = function (e) {
                if (0 !== e.length) {
                  for (var t = 0; t < e.length; t++)
                    this.get_cell(e[t]).execute();
                  this.select(e[e.length - 1]),
                    this.command_mode(),
                    this.set_dirty(!0);
                }
              }),
              (L.prototype.execute_selected_cells = function () {
                this.execute_cells(this.get_selected_cells_indices());
              }),
              (L.prototype.execute_cell = function () {
                this.execute_selected_cells();
              }),
              (L.prototype.execute_cell_and_insert_below = function () {
                var e,
                  t = this.get_selected_cells_indices();
                if (t.length > 1)
                  this.execute_cells(t), (e = Math.max.apply(Math, t));
                else {
                  var o = this.get_selected_cell();
                  (e = this.find_cell_index(o)), o.execute();
                }
                if (e === this.ncells() - 1)
                  return (
                    this.command_mode(),
                    this.insert_cell_below(),
                    this.select(e + 1),
                    this.edit_mode(),
                    this.scroll_to_bottom(),
                    void this.set_dirty(!0)
                  );
                this.command_mode(),
                  this.insert_cell_below(),
                  this.select(e + 1),
                  this.edit_mode(),
                  this.set_dirty(!0);
              }),
              (L.prototype.execute_cell_and_select_below = function () {
                var e,
                  t = this.get_selected_cells_indices();
                if (t.length > 1)
                  this.execute_cells(t), (e = Math.max.apply(Math, t));
                else {
                  var o = this.get_selected_cell();
                  (e = this.find_cell_index(o)), o.execute();
                }
                if (e === this.ncells() - 1 && !this.is_breakpoint_cell(o))
                  return (
                    this.command_mode(),
                    this.insert_cell_below(),
                    this.select(e + 1),
                    this.edit_mode(),
                    this.scroll_to_bottom(),
                    void this.set_dirty(!0)
                  );
                this.command_mode(),
                  this.select(e + 1),
                  this.focus_cell(),
                  this.set_dirty(!0);
              }),
              (L.prototype.execute_cells_below = function () {
                this.execute_cell_range(
                  this.get_selected_index(),
                  this.ncells()
                ),
                  this.scroll_to_bottom();
              }),
              (L.prototype.execute_cells_above = function () {
                this.execute_cell_range(0, this.get_selected_index());
              }),
              (L.prototype.execute_all_cells = function () {
                this.execute_cell_range(0, this.ncells()),
                  this.scroll_to_bottom();
              }),
              (L.prototype.execute_cell_range = function (e, t) {
                this.command_mode();
                for (var o = [], n = e; n < t; n++) o.push(n);
                this.execute_cells(o);
              }),
              (L.prototype.get_notebook_name = function () {
                return r.splitext(this.notebook_name)[0];
              }),
              (L.prototype.set_notebook_name = function (e) {
                var t = r.url_path_split(this.notebook_path)[0];
                (this.notebook_name = e),
                  (this.notebook_path = r.url_path_join(t, e));
              }),
              (L.prototype.test_notebook_name = function (e) {
                return (
                  (e = e || "").length > 0 &&
                  !this.notebook_name_blacklist_re.test(e)
                );
              }),
              (L.prototype.fromJSON = function (e) {
                var t,
                  o,
                  n,
                  r,
                  i = e.content;
                void 0 === i && (i = e);
                var s,
                  a = this.ncells();
                for (s = 0; s < a; s++) this._unsafe_delete_cell(0);
                (this.metadata = i.metadata),
                  (this.notebook_name =
                    null !== (t = e.name) && void 0 !== t
                      ? t
                      : "Untitled.ipynb"),
                  (this.notebook_path =
                    null !== (o = e.path) && void 0 !== o
                      ? o
                      : "Untitled.ipynb");
                var l = !0;
                if (void 0 !== this.metadata.language_info) {
                  var c = this.metadata.language_info,
                    d = c.codemirror_mode || c.name || "null";
                  this.set_codemirror_mode(d);
                }
                var u = i.cells;
                a = u.length;
                var p = null,
                  h = null,
                  _ = !1;
                for (this._rest_sequence = [], s = 0; s < a; s++)
                  (p = u[s]),
                    this.is_sequenced() && _
                      ? this._rest_sequence.push(p)
                      : ((h = this.insert_cell_at_index(
                          p.cell_type,
                          s
                        )).fromJSON(p),
                        "code" !== h.cell_type ||
                          h.output_area.trusted ||
                          (l = !1),
                        this.is_breakpoint_cell(h) && (_ = !0));
                l !== this.trusted &&
                  ((this.trusted = l),
                  this.events.trigger("trust_changed.Notebook", l)),
                  (null !==
                    (n =
                      null === (r = this.basthonGUI.kernelSafe) || void 0 === r
                        ? void 0
                        : r.execution_count) && void 0 !== n
                    ? n
                    : 0) > 0 && this.basthonGUI.kernelRestart();
              }),
              (L.prototype.last_msg_id_to_cell_index = function (t) {
                var o = null;
                return (
                  this.get_cell_elements().filter(function (n) {
                    e(this).data("cell").last_msg_id === t && (o = n);
                  }),
                  o
                );
              }),
              (L.prototype.is_breakpoint_cell = function (e) {
                var t, o;
                return (
                  this.is_sequenced() &&
                  ["code", "markdown"].includes(e.cell_type) &&
                  (null !==
                    (t =
                      null == e || null === (o = e.metadata) || void 0 === o
                        ? void 0
                        : o.tags) && void 0 !== t
                    ? t
                    : []
                  ).includes("breakpoint")
                );
              }),
              (L.prototype.is_breakpoint_index = function (e) {
                var t = this.get_cell(e);
                return null != t && this.is_breakpoint_cell(t);
              }),
              (L.prototype.next_breakpoint_cell = function (e) {
                if (
                  this.is_sequenced() &&
                  e === this.ncells() - 1 &&
                  this.is_breakpoint_cell(this.get_cell(e))
                ) {
                  for (var t = !0; this._rest_sequence.length; ) {
                    var o = this._rest_sequence.shift(),
                      n = this.insert_cell_at_bottom(o.cell_type);
                    if (
                      (n.fromJSON(o),
                      "code" !== n.cell_type ||
                        n.output_area.trusted ||
                        (t = !1),
                      this.is_breakpoint_cell(n))
                    )
                      break;
                  }
                  t !== this.trusted &&
                    ((this.trusted = t),
                    this.events.trigger("trust_changed.Notebook", t)),
                    this.get_selected_index() < this.ncells() - 1 &&
                      (this.select(this.get_selected_index() + 1),
                      this.focus_cell());
                }
              }),
              (L.prototype.toJSON = function () {
                delete this.metadata.orig_nbformat,
                  delete this.metadata.orig_nbformat_minor;
                for (
                  var e = this.get_cells(),
                    t = e.length,
                    o = new Array(t),
                    n = !0,
                    r = 0;
                  r < t;
                  r++
                ) {
                  var a = e[r];
                  "code" !== a.cell_type || a.output_area.trusted || (n = !1),
                    (o[r] = a.toJSON(!0));
                }
                var l;
                this.is_sequenced() &&
                  o.push.apply(
                    o,
                    (function (e) {
                      if (Array.isArray(e)) return s(e);
                    })((l = this._rest_sequence)) ||
                      (function (e) {
                        if (
                          ("undefined" != typeof Symbol &&
                            null != e[Symbol.iterator]) ||
                          null != e["@@iterator"]
                        )
                          return Array.from(e);
                      })(l) ||
                      i(l) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()
                  );
                var c = {
                  cells: o,
                  metadata: this.metadata,
                  nbformat: this.nbformat,
                  nbformat_minor: this.nbformat_minor,
                };
                return (
                  n !== this.trusted &&
                    ((this.trusted = n),
                    this.events.trigger("trust_changed.Notebook", n)),
                  c
                );
              }),
              (L.prototype.set_autosave_interval = function (e) {
                var t = this;
                this.autosave_timer && clearInterval(this.autosave_timer),
                  this.writable || (e = 0),
                  (this.autosave_interval = this.minimum_autosave_interval = e),
                  e
                    ? ((this.autosave_timer = setInterval(function () {
                        t.dirty && t.save_notebook();
                      }, e)),
                      this.events.trigger("autosave_enabled.Notebook", e))
                    : ((this.autosave_timer = null),
                      this.events.trigger("autosave_disabled.Notebook"));
              }),
              (L.prototype.save_notebook = function (t) {
                var o;
                if ((void 0 === t && (t = !0), !this._fully_loaded))
                  return (
                    (o = new Error("Load failed, save is disabled")),
                    this.events.trigger("notebook_save_failed.Notebook", o),
                    Promise.reject(o)
                  );
                if (!this.writable)
                  return this.basthonGUI.download(), Promise.resolve();
                this.events.trigger("before_save.Notebook");
                var n = { type: "notebook", content: this.toJSON() },
                  r = new Date().getTime(),
                  i = this,
                  s = function () {
                    return i.contents
                      .save(i.notebook_path, n)
                      .then(
                        e.proxy(i.save_notebook_success, i, r),
                        function (e) {
                          return (
                            i.events.trigger(
                              "notebook_save_failed.Notebook",
                              e
                            ),
                            Promise.reject(e)
                          );
                        }
                      );
                  };
                return t
                  ? this.contents.get(this.notebook_path, { content: !1 }).then(
                      function (e) {
                        var t = new Date(e.last_modified),
                          o =
                            1e3 *
                            (i.config.data.last_modified_check_margin || 0.5);
                        if (!(t.getTime() - i.last_modified.getTime() > o))
                          return s();
                        console.warn(
                          "Last saving was done on `" +
                            i.last_modified +
                            "`(" +
                            i._last_modified +
                            "), while the current file seem to have been saved on `" +
                            e.last_modified +
                            "`"
                        ),
                          null !== i._changed_on_disk_dialog
                            ? (i._changed_on_disk_dialog
                                .find(".save-confirm-btn")
                                .click(s),
                              i._changed_on_disk_dialog
                                .find(".btn-warning")
                                .click(function () {
                                  window.location.reload();
                                }),
                              i._changed_on_disk_dialog.modal("show"))
                            : (i._changed_on_disk_dialog = l.modal({
                                notebook: i,
                                keyboard_manager: i.keyboard_manager,
                                title: a.msg._("Notebook changed"),
                                body: a.msg._(
                                  "The notebook file has changed on disk since the last time we opened or saved it. Do you want to overwrite the file on disk with the version open here, or load the version on disk (reload the page)?"
                                ),
                                buttons: {
                                  Reload: {
                                    class: "btn-warning",
                                    click: function () {
                                      window.location.reload();
                                    },
                                  },
                                  Cancel: {},
                                  Overwrite: {
                                    class: "btn-danger save-confirm-btn",
                                    click: function () {
                                      s();
                                    },
                                  },
                                },
                              }));
                      },
                      function () {
                        return s();
                      }
                    )
                  : s();
              }),
              (L.prototype.save_notebook_success = function (t, o) {
                if (
                  (this.set_dirty(!1),
                  (this.last_modified = new Date(o.last_modified)),
                  (this._last_modified = "save-success:" + o.last_modified),
                  o.message)
                ) {
                  var n = e("<div>"),
                    r = a.msg._("Notebook validation failed");
                  n
                    .append(
                      e("<p>").text(
                        a.msg._(
                          "The save operation succeeded, but the notebook does not appear to be valid. The validation error was:"
                        )
                      )
                    )
                    .append(
                      e("<div>")
                        .addClass("validation-error")
                        .append(e("<pre>").text(o.message))
                    ),
                    l.modal({
                      notebook: this,
                      keyboard_manager: this.keyboard_manager,
                      title: r,
                      body: n,
                      buttons: { OK: { class: "btn-primary" } },
                    });
                }
                return (
                  this.events.trigger("notebook_saved.Notebook"),
                  this._update_autosave_interval(t),
                  this._checkpoint_after_save &&
                    (this.create_checkpoint(),
                    (this._checkpoint_after_save = !1)),
                  o
                );
              }),
              (L.prototype.save_notebook_as = function () {
                var t = this,
                  o = r
                    .get_body_data("notebookPath")
                    .split("/")
                    .slice(0, -1)
                    .join("/");
                o = o ? o + "/" : "";
                var n = e("<div/>")
                    .append(
                      e("<p/>")
                        .addClass("save-message")
                        .text(
                          a.msg._(
                            "Enter a notebook path relative to notebook dir"
                          )
                        )
                    )
                    .append(e("<br/>"))
                    .append(
                      e("<input/>")
                        .attr("type", "text")
                        .attr("size", "25")
                        .attr("data-testid", "save-as")
                        .addClass("form-control")
                    ),
                  i = l.modal({
                    title: "Save As",
                    body: n,
                    keyboard_manager: this.keyboard_manager,
                    notebook: this,
                    buttons: {
                      Cancel: {},
                      Save: {
                        class: "btn-primary",
                        click: function () {
                          var o = i.find("input").val(),
                            n = o.split("/").slice(-1).pop();
                          "" === r.splitext(n)[1] &&
                            ((n += ".ipynb"), (o += ".ipynb"));
                          var s = function () {
                            var r = {
                              type: "notebook",
                              content: t.toJSON(),
                              name: n,
                            };
                            return t.contents.save(o, r).then(
                              function (e) {
                                i.modal("hide"),
                                  (t.notebook_name = e.name),
                                  (t.notebook_path = e.path),
                                  t.session.rename_notebook(e.path),
                                  t.events.trigger(
                                    "notebook_renamed.Notebook",
                                    e
                                  );
                              },
                              function (t) {
                                var o = a.msg._(
                                  t.message || "Unknown error saving notebook"
                                );
                                e(".save-message").html(
                                  e("<span>")
                                    .attr("style", "color:red;")
                                    .text(o)
                                );
                              }
                            );
                          };
                          return (
                            t.contents
                              .get(o, { type: "notebook", content: !1 })
                              .then(
                                function (t) {
                                  var o = e("<div/>").append(
                                    e("<p/>").text(
                                      a.msg._("Notebook with that name exists.")
                                    )
                                  );
                                  l.modal({
                                    title: "Save As",
                                    body: o,
                                    buttons: {
                                      Cancel: {},
                                      Overwrite: {
                                        class: "btn-warning",
                                        click: function () {
                                          return s();
                                        },
                                      },
                                    },
                                  });
                                },
                                function (e) {
                                  return s();
                                }
                              ),
                            !1
                          );
                        },
                      },
                    },
                    open: function () {
                      i.find('input[type="text"]').keydown(function (e) {
                        if (e.which === y.keycodes.enter)
                          return i.find(".btn-primary").first().click(), !1;
                      }),
                        i.find('input[type="text"]').val(o).focus();
                    },
                  });
              }),
              (L.prototype._update_autosave_interval = function (e) {
                var t = new Date().getTime() - e;
                if (this.autosave_interval) {
                  var o = Math.max(10 * t, this.minimum_autosave_interval);
                  (o = 1e4 * Math.ceil(o / 1e4)) !== this.autosave_interval &&
                    this.set_autosave_interval(o);
                }
              }),
              (L.prototype.trust_notebook = function (t) {
                var o = e("<div>").append(
                    e("<p>")
                      .text(
                        a.msg._(
                          "A trusted Jupyter notebook may execute hidden malicious code when you open it. Selecting trust will immediately reload this notebook in a trusted state. For more information, see the Jupyter security documentation: "
                        )
                      )
                      .append(
                        e("<a>")
                          .attr(
                            "href",
                            "https://jupyter-notebook.readthedocs.io/en/latest/security.html"
                          )
                          .text(a.msg._("here"))
                      )
                  ),
                  n = this;
                l.modal({
                  notebook: this,
                  keyboard_manager: this.keyboard_manager,
                  title: a.msg._("Trust this notebook?"),
                  body: o,
                  focus_button: t,
                  buttons: {
                    Cancel: {},
                    Trust: {
                      class: "btn-danger",
                      click: function () {
                        for (var e = n.get_cells(), t = 0; t < e.length; t++) {
                          var o = e[t];
                          "code" === o.cell_type &&
                            (o.output_area.trusted = !0);
                        }
                        return (
                          n.writable && n.dirty
                            ? n.save_notebook()
                            : Promise.resolve()
                        ).then(function () {
                          n.contents.trust(n.notebook_path).then(
                            function () {
                              n.events.trigger("trust_changed.Notebook", !0),
                                window.location.reload();
                            },
                            function (e) {
                              console.log(e);
                            }
                          );
                        });
                      },
                    },
                  },
                });
              }),
              (L.prototype.copy_notebook = function () {
                var e = this,
                  o = this.base_url,
                  n = window.open("", t._target),
                  i = r.url_path_split(this.notebook_path)[0];
                return (
                  this.dirty && this.writable
                    ? this.save_notebook(!0)
                    : Promise.resolve()
                ).then(function () {
                  return e.contents.copy(e.notebook_path, i).then(
                    function (e) {
                      n.location = r.url_path_join(
                        o,
                        "notebooks",
                        r.encode_uri_components(e.path)
                      );
                    },
                    function (t) {
                      n.close(), e.events.trigger("notebook_copy_failed", t);
                    }
                  );
                });
              }),
              (L.prototype.ensure_extension = function (e) {
                var t = r.splitext(this.notebook_path)[1];
                return t.length && e.slice(-t.length) !== t && (e += t), e;
              }),
              (L.prototype.rename = function (e) {
                e = this.ensure_extension(e);
                var t = this,
                  o = r.url_path_split(this.notebook_path)[0],
                  n = r.url_path_join(o, e);
                return this.contents
                  .rename(this.notebook_path, n)
                  .then(function (e) {
                    (t.notebook_name = e.name),
                      (t.notebook_path = e.path),
                      (t.last_modified = new Date(e.last_modified)),
                      (t._last_modified = e.last_modified),
                      t.events.trigger("notebook_renamed.Notebook", e);
                  });
              }),
              (L.prototype.delete = function () {
                this.contents.delete(this.notebook_path);
              }),
              (L.prototype.load_notebook = function (t) {
                (this.notebook_path = t),
                  (this.notebook_name = r.url_path_split(
                    this.notebook_path
                  )[1]),
                  this.events.trigger("notebook_loading.Notebook"),
                  this.contents
                    .get(t, { type: "notebook" })
                    .then(
                      e.proxy(this.load_notebook_success, this),
                      e.proxy(this.load_notebook_error, this)
                    );
              }),
              (L.prototype.load_notebook_success = function (t) {
                var o, n;
                try {
                  this.fromJSON(t);
                } catch (e) {
                  (o = e),
                    console.error("Notebook failed to load from JSON:", e);
                }
                if (o || t.message) {
                  var i,
                    s = e("<div>");
                  o
                    ? ((i = a.msg._("Notebook failed to load")),
                      s
                        .append(e("<p>").text(a.msg._("The error was: ")))
                        .append(
                          e("<div>").addClass("js-error").text(o.toString())
                        )
                        .append(
                          e("<p>").text(
                            a.msg._("See the error console for details.")
                          )
                        ))
                    : (i = a.msg._("Notebook validation failed")),
                    t.message &&
                      ((n = o
                        ? a.msg._("The notebook also failed validation:")
                        : a.msg._(
                            "An invalid notebook may not function properly. The validation error was:"
                          )),
                      s
                        .append(e("<p>").text(n))
                        .append(
                          e("<div>")
                            .addClass("validation-error")
                            .append(e("<pre>").text(t.message))
                        )),
                    l.modal({
                      notebook: this,
                      keyboard_manager: this.keyboard_manager,
                      title: i,
                      body: s,
                      buttons: { OK: { class: "btn-primary" } },
                    });
                }
                0 === this.ncells()
                  ? (this.insert_cell_below("code"), this.edit_mode(0))
                  : (this.select(0),
                    this.handle_command_mode(this.get_cell(0))),
                  this.set_dirty(!1),
                  this.scroll_to_top(),
                  (this.writable = t.writable || !1),
                  (this.last_modified = new Date(t.last_modified)),
                  (this._last_modified = "load-success:" + t.last_modified);
                var c = t.content;
                void 0 === c && (c = t);
                var d = c.metadata.orig_nbformat;
                if (
                  (c.metadata.orig_nbformat_minor,
                  void 0 !== d && c.nbformat !== d)
                ) {
                  var u = a.msg._(
                      "This notebook has been converted from an older notebook format to the current notebook format v(%s)."
                    ),
                    p = a.msg._(
                      "This notebook has been converted from a newer notebook format to the current notebook format v(%s)."
                    );
                  (n =
                    c.nbformat > d
                      ? a.msg.sprintf(u, c.nbformat)
                      : a.msg.sprintf(p, c.nbformat)),
                    (n += " "),
                    (n += a.msg._(
                      "The next time you save this notebook, the current notebook format will be used."
                    )),
                    (n += " "),
                    c.nbformat > d
                      ? (n += a.msg._(
                          "Older versions of Jupyter may not be able to read the new format."
                        ))
                      : (n += a.msg._(
                          "Some features of the original notebook may not be available."
                        )),
                    (n += " "),
                    (n += a.msg._(
                      "To preserve the original version, close the notebook without saving it."
                    )),
                    l.modal({
                      notebook: this,
                      keyboard_manager: this.keyboard_manager,
                      title: a.msg._("Notebook converted"),
                      body: n,
                      buttons: { OK: { class: "btn-primary" } },
                    });
                } else
                  this.nbformat_minor < c.nbformat_minor &&
                    (this.nbformat_minor = c.nbformat_minor);
                if (null === this.session) {
                  var h = r.get_url_param("kernel_name");
                  h
                    ? this.kernel_selector.set_kernel(h)
                    : this.metadata.kernelspec
                    ? this.kernel_selector.set_kernel(this.metadata.kernelspec)
                    : this.metadata.language
                    ? (this.kernel_selector.set_kernel({
                        name: a.msg._("(No name)"),
                        language: this.metadata.language,
                      }),
                      delete this.metadata.language)
                    : this.start_session();
                }
                this.metadata.celltoolbar
                  ? (m.CellToolbar.global_show(),
                    m.CellToolbar.activate_preset(this.metadata.celltoolbar))
                  : m.CellToolbar.global_hide(),
                  this.writable ||
                    (this.set_autosave_interval(0),
                    this.events.trigger("notebook_read_only.Notebook")),
                  (this._fully_loaded = !0),
                  this.events.trigger("notebook_loaded.Notebook");
              }),
              (L.prototype.set_kernelselector = function (e) {
                this.kernel_selector = e;
              }),
              (L.prototype.load_notebook_error = function (e) {
                var t,
                  o = !0;
                this.events.trigger("notebook_load_failed.Notebook", e),
                  e.name === r.XHR_ERROR && 500 === e.xhr.status
                    ? (r.log_ajax_error(e.xhr, e.xhr_status, e.xhr_error),
                      (t = a.msg.sprintf(
                        a.msg._(
                          "An unknown error occurred while loading this notebook. This version can load notebook formats %s or earlier. See the server log for details.",
                          "v" + this.nbformat
                        )
                      )))
                    : ((t = e.message),
                      console.warn(
                        "Error stack trace while loading notebook was:"
                      ),
                      console.warn(e.stack)),
                  0 == navigator.cookieEnabled &&
                    ((t = a.msg._(
                      'Jupyter requires cookies to work; please enable cookies and refresh page. <a href="https://www.wikihow.com/Enable-Cookies-in-Your-Internet-Web-Browser"> Learn more about enabling cookies. </a>'
                    )),
                    (o = !1)),
                  l.modal({
                    notebook: this,
                    keyboard_manager: this.keyboard_manager,
                    title: a.msg._("Error loading notebook"),
                    body: t,
                    buttons: {
                      Close: {
                        class: "btn-danger",
                        click: function () {
                          window.close();
                        },
                      },
                    },
                    sanitize: o,
                  });
              }),
              (L.prototype.save_checkpoint = function () {
                return (
                  (this._checkpoint_after_save = !0), this.save_notebook(!0)
                );
              }),
              (L.prototype.add_checkpoint = function (e) {
                for (var t = !1, o = 0; o < this.checkpoints.length; o++)
                  if (this.checkpoints[o].id === e.id) {
                    (t = !0), (this.checkpoints[o] = e);
                    break;
                  }
                t || this.checkpoints.push(e),
                  (this.last_checkpoint =
                    this.checkpoints[this.checkpoints.length - 1]);
              }),
              (L.prototype.list_checkpoints = function () {
                var t = this;
                this.contents
                  .list_checkpoints(this.notebook_path)
                  .then(
                    e.proxy(this.list_checkpoints_success, this),
                    function (e) {
                      t.events.trigger("list_checkpoints_failed.Notebook", e);
                    }
                  );
              }),
              (L.prototype.list_checkpoints_success = function (e) {
                (this.checkpoints = e),
                  e.length
                    ? (this.last_checkpoint = e[e.length - 1])
                    : (this.last_checkpoint = null),
                  this.events.trigger("checkpoints_listed.Notebook", [e]);
              }),
              (L.prototype.create_checkpoint = function () {
                var t = this;
                this.contents
                  .create_checkpoint(this.notebook_path)
                  .then(
                    e.proxy(this.create_checkpoint_success, this),
                    function (e) {
                      t.events.trigger("checkpoint_failed.Notebook", e);
                    }
                  );
              }),
              (L.prototype.create_checkpoint_success = function (e) {
                this.add_checkpoint(e),
                  this.events.trigger("checkpoint_created.Notebook", e);
              }),
              (L.prototype.restore_checkpoint_dialog = function (t) {
                var o = this;
                if ((t = t || this.last_checkpoint)) {
                  var n = e("<div/>")
                    .append(
                      e("<p/>")
                        .addClass("p-space")
                        .text(
                          a.msg._(
                            "Are you sure you want to revert the notebook to the latest checkpoint?"
                          )
                        )
                        .append(
                          e("<strong/>").text(
                            " " + a.msg._("This cannot be undone.")
                          )
                        )
                    )
                    .append(
                      e("<p/>")
                        .addClass("p-space")
                        .text(a.msg._("The checkpoint was last updated at:"))
                    )
                    .append(
                      e("<p/>")
                        .addClass("p-space")
                        .text(
                          p(t.last_modified).format("LLLL") +
                            " (" +
                            p(t.last_modified).fromNow() +
                            ")"
                        )
                        .css("text-align", "center")
                    );
                  l.modal({
                    notebook: this,
                    keyboard_manager: this.keyboard_manager,
                    title: a.msg._("Revert notebook to checkpoint"),
                    body: n,
                    default_button: "Cancel",
                    buttons: {
                      Cancel: {},
                      Revert: {
                        class: "btn-danger",
                        click: function () {
                          o.restore_checkpoint(t.id);
                        },
                      },
                    },
                  });
                } else
                  console.log(
                    "restore dialog, but no checkpoint to restore to!"
                  );
              }),
              (L.prototype.restore_checkpoint = function (t) {
                this.events.trigger("notebook_restoring.Notebook", t);
                var o = this;
                this.contents
                  .restore_checkpoint(this.notebook_path, t)
                  .then(
                    e.proxy(this.restore_checkpoint_success, this),
                    function (e) {
                      o.events.trigger("checkpoint_restore_failed.Notebook", e);
                    }
                  );
              }),
              (L.prototype.restore_checkpoint_success = function () {
                this.events.trigger("checkpoint_restored.Notebook"),
                  this.load_notebook(this.notebook_path);
              }),
              (L.prototype.delete_checkpoint = function (t) {
                this.events.trigger("notebook_restoring.Notebook", t);
                var o = this;
                this.contents
                  .delete_checkpoint(this.notebook_path, t)
                  .then(
                    e.proxy(this.delete_checkpoint_success, this),
                    function (e) {
                      o.events.trigger("checkpoint_delete_failed.Notebook", e);
                    }
                  );
              }),
              (L.prototype.delete_checkpoint_success = function () {
                this.events.trigger("checkpoint_deleted.Notebook"),
                  this.load_notebook(this.notebook_path);
              }),
              { Notebook: L }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    63132: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(54499), o(34960), o(46013), o(45697), o(30381)]),
        void 0 ===
          (r = function (e, t, o, n, r, i) {
            "use strict";
            var s = r.NotificationArea,
              a = function (e, t) {
                s.apply(this, [e, t]),
                  (this.save_widget = t.save_widget),
                  (this.notebook = t.notebook),
                  (this.keyboard_manager = t.keyboard_manager);
              };
            return (
              ((a.prototype = Object.create(
                s.prototype
              )).init_notification_widgets = function () {}),
              (a.prototype.init_kernel_notification_widget = function () {
                var r = this,
                  i = this.widget("kernel"),
                  s = e("#kernel_indicator_icon"),
                  a = e("#modal_indicator"),
                  l = e("#readonly-indicator"),
                  c = e("body"),
                  d = -1,
                  u = function (e) {
                    e
                      ? (clearTimeout(d),
                        (d = setTimeout(function () {
                          t.change_favicon(
                            "static/base/images/favicon-busy-1.ico"
                          );
                        }, 1e3)))
                      : (clearTimeout(d),
                        t.change_favicon(
                          "static/base/images/favicon-notebook.ico"
                        ));
                  };
                this.events.on("notebook_loaded.Notebook", function () {
                  r.notebook.writable ? l.hide() : l.show();
                }),
                  this.events.on("edit_mode.Notebook", function () {
                    r.save_widget.update_document_title(),
                      c.addClass("edit_mode"),
                      c.removeClass("command_mode"),
                      a.attr("title", o.msg._("Edit Mode"));
                  }),
                  this.events.on("command_mode.Notebook", function () {
                    r.save_widget.update_document_title(),
                      c.removeClass("edit_mode"),
                      c.addClass("command_mode"),
                      a.attr("title", o.msg._("Command Mode"));
                  }),
                  a
                    .addClass("modal_indicator")
                    .attr("title", o.msg._("Command Mode")),
                  c.addClass("command_mode"),
                  this.events.on(
                    "kernel_created.Kernel kernel_created.Session",
                    function () {
                      i.info(o.msg._("Kernel Created"), 500);
                    }
                  ),
                  this.events.on("kernel_reconnecting.Kernel", function () {
                    i.warning(o.msg._("Connecting to kernel"));
                  }),
                  this.events.on(
                    "kernel_connection_dead.Kernel",
                    function (t, n) {
                      i.danger(
                        o.msg._("Not Connected"),
                        void 0,
                        function () {
                          setTimeout(
                            e.proxy(n.kernel.reconnect, n.kernel),
                            500
                          );
                        },
                        { title: o.msg._("click to reconnect") }
                      );
                    }
                  ),
                  this.events.on("kernel_connected.Kernel", function () {
                    i.info("Connected", 500),
                      s
                        .attr("class", "kernel_busy_icon")
                        .attr("title", o.msg._("Kernel Connected"));
                  }),
                  this.events.on("kernel_restarting.Kernel", function () {
                    r.save_widget.update_document_title(),
                      i.set_message(o.msg._("Restarting kernel"), 2e3);
                  }),
                  this.events.on(
                    "kernel_autorestarting.Kernel",
                    function (e, t) {
                      1 === t.attempt &&
                        n.kernel_modal({
                          notebook: r.notebook,
                          keyboard_manager: r.keyboard_manager,
                          title: o.msg._("Kernel Restarting"),
                          body: o.msg._(
                            "The kernel appears to have died. It will restart automatically."
                          ),
                          buttons: { OK: { class: "btn-primary" } },
                        }),
                        r.save_widget.update_document_title(),
                        i.danger(o.msg._("Dead kernel")),
                        s
                          .attr("class", "kernel_dead_icon")
                          .attr("title", o.msg._("Kernel Dead"));
                    }
                  ),
                  this.events.on("kernel_interrupting.Kernel", function () {
                    i.set_message(o.msg._("Interrupting kernel"), 2e3);
                  }),
                  this.events.on("kernel_disconnected.Kernel", function () {
                    s.attr("class", "kernel_disconnected_icon").attr(
                      "title",
                      o.msg._("No Connection to Kernel")
                    );
                  }),
                  this.events.on(
                    "kernel_connection_failed.Kernel",
                    function (e, t) {
                      if (1 === t.attempt) {
                        var i = o.msg._(
                            "A connection to the notebook server could not be established. The notebook will continue trying to reconnect. Check your network connection or notebook server configuration."
                          ),
                          s = n.kernel_modal({
                            title: o.msg._("Connection failed"),
                            body: i,
                            keyboard_manager: r.keyboard_manager,
                            notebook: r.notebook,
                            buttons: { OK: {} },
                          }),
                          a = function () {
                            s.modal("hide");
                          };
                        r.events.on("kernel_connected.Kernel", a),
                          s.on("hidden.bs.modal", function () {
                            r.events.off("kernel_connected.Kernel", a);
                          });
                      }
                    }
                  ),
                  this.events.on(
                    "kernel_killed.Kernel kernel_killed.Session",
                    function () {
                      r.save_widget.update_document_title(),
                        i.warning(o.msg._("No kernel")),
                        s
                          .attr("class", "kernel_busy_icon")
                          .attr("title", o.msg._("Kernel is not running"));
                    }
                  ),
                  this.events.on("kernel_dead.Kernel", function () {
                    o.msg._("Don't Restart"),
                      o.msg._("Try Restarting Now"),
                      o.msg._("OK");
                    var e = function () {
                      var e = o.msg._(
                        "The kernel has died, and the automatic restart has failed. It is possible the kernel cannot be restarted. If you are not able to restart the kernel, you will still be able to save the notebook, but running code will no longer work until the notebook is reopened."
                      );
                      return (
                        n.kernel_modal({
                          title: o.msg._("Dead kernel"),
                          body: e,
                          keyboard_manager: r.keyboard_manager,
                          notebook: r.notebook,
                          default_button: "Don't Restart",
                          buttons: {
                            "Don't Restart": {},
                            "Try Restarting Now": {
                              class: "btn-danger",
                              click: function () {
                                r.notebook.start_session();
                              },
                            },
                          },
                        }),
                        !1
                      );
                    };
                    r.save_widget.update_document_title(),
                      i.danger(o.msg._("Dead kernel"), void 0, e),
                      s
                        .attr("class", "kernel_dead_icon")
                        .attr("title", o.msg._("Kernel Dead")),
                      e();
                  }),
                  this.events.on("no_kernel.Kernel", function (t, n) {
                    e("#kernel_indicator")
                      .find(".kernel_indicator_name")
                      .text(o.msg._("No Kernel"));
                  }),
                  this.events.on("kernel_dead.Session", function (t, a) {
                    var l = a.xhr.responseJSON.message,
                      c = a.xhr.responseJSON.short_message || "Kernel error",
                      d = a.xhr.responseJSON.traceback;
                    r.save_widget.update_document_title(),
                      s
                        .attr("class", "kernel_dead_icon")
                        .attr("title", o.msg._("Kernel Dead")),
                      i.danger(c, void 0, function () {
                        var t,
                          i,
                          s,
                          a = e("<div/>").append(e("<p/>").text(l));
                        return (
                          d &&
                            ((i = e("<div/>")
                              .css("margin-top", "1em")
                              .css("padding", "1em")
                              .addClass("output_scroll")),
                            a.append(i),
                            (t = new CodeMirror(i.get(0), {
                              mode: "python",
                              readOnly: !0,
                            })).setValue(d),
                            (s = e.proxy(t.refresh, t))),
                          n.kernel_modal({
                            title: o.msg._("Failed to start the kernel"),
                            body: a,
                            keyboard_manager: r.keyboard_manager,
                            notebook: r.notebook,
                            open: s,
                            buttons: { OK: { class: "btn-primary" } },
                          }),
                          !1
                        );
                      });
                  }),
                  this.events.on(
                    "kernel_starting.Kernel kernel_created.Session",
                    function () {
                      s
                        .attr("class", "kernel_busy_icon")
                        .attr("title", o.msg._("Kernel Busy")),
                        i.set_message(
                          o.msg._("Kernel starting, please wait...")
                        ),
                        u(!0);
                    }
                  ),
                  this.events.on("kernel_ready.Kernel", function () {
                    s
                      .attr("class", "kernel_idle_icon")
                      .attr("title", o.msg._("Kernel Idle")),
                      i.info(o.msg._("Kernel ready"), 500),
                      u(!1);
                  }),
                  this.events.on("kernel_idle.Kernel", function () {
                    s
                      .attr("class", "kernel_idle_icon")
                      .attr("title", o.msg._("Kernel Idle")),
                      u(!1);
                  }),
                  this.events.on("kernel_busy.Kernel", function () {
                    s
                      .attr("class", "kernel_busy_icon")
                      .attr("title", o.msg._("Kernel Busy")),
                      u(!0);
                  }),
                  this.events.on("spec_match_found.Kernel", function (e, t) {
                    r.widget("kernelspec").info(
                      o.msg._("Using kernel: ") + t.found.spec.display_name,
                      3e3,
                      void 0,
                      {
                        title: o.msg.sprintf(
                          o.msg._(
                            "Only candidate for language: %1$s was %2$s."
                          ),
                          t.selected.language,
                          t.found.spec.display_name
                        ),
                      }
                    );
                  }),
                  s
                    .attr("class", "kernel_busy_icon")
                    .attr("title", o.msg._("Kernel Busy"));
              }),
              (a.prototype.init_notebook_notification_widget = function () {
                var e = this.widget("notebook");
                this.events.on("notebook_loading.Notebook", function () {
                  e.set_message(o.msg._("Loading notebook"), 500);
                }),
                  this.events.on("notebook_loaded.Notebook", function () {
                    e.set_message(o.msg._("Notebook loaded"), 500);
                  }),
                  this.events.on("notebook_saving.Notebook", function () {
                    e.set_message(o.msg._("Saving notebook"), 500);
                  }),
                  this.events.on("notebook_saved.Notebook", function () {
                    e.set_message(o.msg._("Notebook saved"), 2e3);
                  }),
                  this.events.on(
                    "notebook_save_failed.Notebook",
                    function (t, n) {
                      e.warning(n.message || o.msg._("Notebook save failed"));
                    }
                  ),
                  this.events.on(
                    "notebook_copy_failed.Notebook",
                    function (t, n) {
                      e.warning(n.message || o.msg._("Notebook copy failed"));
                    }
                  ),
                  this.events.on(
                    "checkpoint_created.Notebook",
                    function (t, n) {
                      var r = o.msg._("Checkpoint created");
                      if (n.last_modified) {
                        var s = new Date(n.last_modified);
                        r = r + ": " + i(s).format("HH:mm:ss");
                      }
                      e.set_message(r, 2e3);
                    }
                  ),
                  this.events.on("checkpoint_failed.Notebook", function () {
                    e.warning(o.msg._("Checkpoint failed"));
                  }),
                  this.events.on("checkpoint_deleted.Notebook", function () {
                    e.set_message(o.msg._("Checkpoint deleted"), 500);
                  }),
                  this.events.on(
                    "checkpoint_delete_failed.Notebook",
                    function () {
                      e.warning(o.msg._("Checkpoint delete failed"));
                    }
                  ),
                  this.events.on("checkpoint_restoring.Notebook", function () {
                    e.set_message(o.msg._("Restoring to checkpoint..."), 500);
                  }),
                  this.events.on(
                    "checkpoint_restore_failed.Notebook",
                    function () {
                      e.warning(o.msg._("Checkpoint restore failed"));
                    }
                  ),
                  this.events.on("autosave_disabled.Notebook", function () {
                    e.set_message(o.msg._("Autosave disabled"), 2e3);
                  }),
                  this.events.on("autosave_enabled.Notebook", function (t, n) {
                    e.set_message(
                      o.msg.sprintf(o.msg._("Saving every %d sec."), n / 1e3),
                      1e3
                    );
                  });
              }),
              (a.prototype.init_trusted_notebook_notification_widget =
                function () {
                  var t = this,
                    n = this.widget("trusted");
                  this.events.on("trust_changed.Notebook", function (r, i) {
                    i
                      ? (n.set_message(
                          o.msg._("Trusted"),
                          void 0,
                          function () {
                            return !1;
                          },
                          { title: "Javascript enabled for notebook display" }
                        ),
                        e(n.selector).attr("disabled", !0),
                        e(n.selector).css("cursor", "help"))
                      : (n.set_message(
                          o.msg._("Not Trusted"),
                          void 0,
                          function () {
                            return (
                              t.notebook.trust_notebook(
                                "#notification_trusted"
                              ),
                              !1
                            );
                          },
                          { title: "Javascript disabled for notebook display" }
                        ),
                        e(n.selector).attr("role", "button"));
                  });
                }),
              { NotebookNotificationArea: a }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    825: (module, exports, __webpack_require__) => {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      function _typeof(e) {
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          _typeof(e)
        );
      }
      (__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(19755),
        __webpack_require__(54499),
        __webpack_require__(34960),
        __webpack_require__(55131),
        __webpack_require__(58812),
        __webpack_require__(51475),
        __webpack_require__(86817),
        __webpack_require__(30970),
      ]),
        (__WEBPACK_AMD_DEFINE_RESULT__ = function (
          $,
          utils,
          i18n,
          security,
          keyboard,
          configmod,
          mathjaxutils,
          marked
        ) {
          "use strict";
          var OutputArea = function e(t) {
            (this.config = t.config),
              (this.selector = t.selector),
              (this.events = t.events),
              (this.keyboard_manager = t.keyboard_manager),
              (this.wrapper = $(t.selector)),
              (this.outputs = []),
              (this.collapsed = !1),
              (this.scrolled = !1),
              (this.scroll_state = "auto"),
              (this.trusted = !0),
              (this.clear_queued = null),
              void 0 === t.prompt_area
                ? (this.prompt_area = !0)
                : (this.prompt_area = t.prompt_area),
              (this._display_id_targets = {}),
              this.create_elements(),
              this.style(),
              this.bind_events(),
              (this.class_config = new configmod.ConfigWithDefaults(
                this.config,
                e.config_defaults,
                "OutputArea"
              )),
              (this.handle_appended = utils.throttle(
                this.handle_appended.bind(this)
              ));
          };
          (OutputArea.config_defaults = { stream_chunk_size: 8192 }),
            (OutputArea.prototype.create_elements = function () {
              (this.element = $("<div/>")),
                (this.element._original_trigger = this.element.trigger),
                (this.element.trigger = function (e, t) {
                  try {
                    this._original_trigger.apply(this, arguments);
                  } catch (t) {
                    console.error(
                      "Exception in event handler for " + e,
                      t,
                      arguments
                    );
                  }
                }),
                (this.collapse_button = $("<div/>")),
                (this.prompt_overlay = $("<div/>")),
                this.wrapper.append(this.prompt_overlay),
                this.wrapper.append(this.element),
                this.wrapper.append(this.collapse_button);
            }),
            (OutputArea.prototype.style = function () {
              this.collapse_button.hide(),
                this.prompt_area || this.prompt_overlay.hide(),
                this.wrapper.addClass("output_wrapper"),
                this.element.addClass("output"),
                this.collapse_button.addClass(
                  "btn btn-default output_collapsed"
                ),
                this.collapse_button.attr(
                  "title",
                  i18n.msg._("click to expand output")
                ),
                this.collapse_button.text(". . ."),
                this.prompt_overlay.addClass("out_prompt_overlay prompt"),
                this.prompt_overlay.attr(
                  "title",
                  i18n.msg._(
                    "click to expand output; double click to hide output"
                  )
                ),
                this.expand();
            }),
            (OutputArea.prototype._should_scroll = function () {
              var e;
              if (!1 === this.scroll_state) return !1;
              if (
                (e =
                  !0 === this.scroll_state
                    ? OutputArea.minimum_scroll_threshold
                    : OutputArea.auto_scroll_threshold) <= 0
              )
                return !1;
              var t = this.element.css("font-size") || "14px",
                o = Math.floor(1.3 * (parseFloat(t.replace("px", "")) || 14));
              return this.element.height() > e * o;
            }),
            (OutputArea.prototype.bind_events = function () {
              var e = this;
              this.prompt_overlay.dblclick(function () {
                e.toggle_output();
              }),
                this.prompt_overlay.click(function () {
                  e.toggle_scroll();
                }),
                this.element.on("resizeOutput", function () {
                  !e.scrolled && e._should_scroll() && e.scroll_area();
                }),
                this.collapse_button.click(function () {
                  e.expand();
                });
            }),
            (OutputArea.prototype.collapse = function () {
              this.collapsed ||
                (this.element.hide(),
                this.prompt_overlay.hide(),
                this.element.html() && this.collapse_button.show(),
                (this.collapsed = !0),
                (this.scroll_state = "auto"));
            }),
            (OutputArea.prototype.expand = function () {
              this.collapsed &&
                (this.collapse_button.hide(),
                this.element.show(),
                this.prompt_area && this.prompt_overlay.show(),
                (this.collapsed = !1),
                this.scroll_if_long());
            }),
            (OutputArea.prototype.toggle_output = function () {
              this.collapsed ? this.expand() : this.collapse();
            }),
            (OutputArea.prototype.scroll_area = function () {
              this.element.addClass("output_scroll"),
                this.prompt_overlay.attr(
                  "title",
                  i18n.msg._("click to unscroll output; double click to hide")
                ),
                (this.scrolled = !0);
            }),
            (OutputArea.prototype.unscroll_area = function () {
              this.element.removeClass("output_scroll"),
                this.prompt_overlay.attr(
                  "title",
                  i18n.msg._("click to scroll output; double click to hide")
                ),
                (this.scrolled = !1);
            }),
            (OutputArea.prototype.scroll_if_long = function () {
              var e = this._should_scroll();
              !this.scrolled && e
                ? this.scroll_area()
                : this.scrolled && !e && this.unscroll_area();
            }),
            (OutputArea.prototype.toggle_scroll = function () {
              "auto" == this.scroll_state
                ? (this.scroll_state = !this.scrolled)
                : (this.scroll_state = !this.scroll_state),
                this.scrolled ? this.unscroll_area() : this.scroll_if_long();
            }),
            (OutputArea.prototype.typeset = function () {
              utils.typeset(this.element);
            }),
            (OutputArea.prototype.handle_output = function (e) {
              var t = {},
                o = (t.output_type = e.header.msg_type),
                n = e.content;
              switch (o) {
                case "stream":
                  (t.text = n.text), (t.name = n.name);
                  break;
                case "execute_result":
                  t.execution_count = n.execution_count;
                case "update_display_data":
                case "display_data":
                  (t.transient = n.transient),
                    (t.data = n.data),
                    (t.metadata = n.metadata);
                  break;
                case "error":
                  (t.ename = n.ename),
                    (t.evalue = n.evalue),
                    (t.traceback = n.traceback);
                  break;
                default:
                  return void console.error("unhandled output message", e);
              }
              this.append_output(t);
            });
          var MIME_JAVASCRIPT = "application/javascript",
            MIME_HTML = "text/html",
            MIME_MARKDOWN = "text/markdown",
            MIME_LATEX = "text/latex",
            MIME_SVG = "image/svg+xml",
            MIME_PNG = "image/png",
            MIME_JPEG = "image/jpeg",
            MIME_GIF = "image/gif",
            MIME_PDF = "application/pdf",
            MIME_TEXT = "text/plain";
          function _get_metadata_key(e, t, o) {
            var n = e[o];
            return n && void 0 !== n[t] ? n[t] : e[t];
          }
          (OutputArea.output_types = [
            MIME_JAVASCRIPT,
            MIME_HTML,
            MIME_MARKDOWN,
            MIME_LATEX,
            MIME_SVG,
            MIME_PNG,
            MIME_JPEG,
            MIME_GIF,
            MIME_PDF,
            MIME_TEXT,
          ]),
            (OutputArea.prototype.validate_mimebundle = function (e) {
              "object" !== _typeof(e.data) &&
                (console.warn("mimebundle missing data", e), (e.data = {})),
                "object" !== _typeof(e.metadata) &&
                  (console.warn("mimebundle missing metadata", e),
                  (e.metadata = {}));
              var t = e.data;
              return (
                $.map(OutputArea.output_types, function (e) {
                  (-1 !== e.indexOf("application/") &&
                    -1 !== e.indexOf("json")) ||
                    void 0 === t[e] ||
                    "string" == typeof t[e] ||
                    (console.log("Invalid type for " + e, t[e]), delete t[e]);
                }),
                e
              );
            }),
            (OutputArea.prototype.append_output = function (e) {
              this.expand(),
                this.clear_queued &&
                  (this.clear_output(!1), (this._needs_height_reset = !0));
              var t = !0;
              switch (e.output_type) {
                case "update_display_data":
                  return (
                    (t = !1),
                    (e = this.validate_mimebundle(e)),
                    void this.update_display_data(e)
                  );
                case "execute_result":
                  (e = this.validate_mimebundle(e)),
                    this.append_execute_result(e);
                  break;
                case "stream":
                  t = this.append_stream(e);
                  break;
                case "error":
                  this.append_error(e);
                  break;
                case "display_data":
                  e = this.validate_mimebundle(e);
                  break;
                default:
                  console.log("unrecognized output type: " + e.output_type),
                    this.append_unrecognized(e);
              }
              "display_data" === e.output_type
                ? this.append_display_data(e, this.handle_appended)
                : this.handle_appended(),
                t && this.outputs.push(e),
                this.events.trigger("output_added.OutputArea", {
                  output: e,
                  output_area: this,
                });
            }),
            (OutputArea.prototype.handle_appended = function () {
              this._needs_height_reset &&
                (this.element.height(""), (this._needs_height_reset = !1)),
                this.element.trigger("resizeOutput", { output_area: this });
            }),
            (OutputArea.prototype.create_output_area = function () {
              var e = $("<div/>").addClass("output_area");
              return (
                this.prompt_area &&
                  (e.append($("<div/>").addClass("run_this_cell")),
                  e.append($("<div/>").addClass("prompt"))),
                e
              );
            }),
            (OutputArea.prototype.create_output_subarea = function (e, t, o) {
              var n = $("<div/>").addClass("output_subarea").addClass(t);
              if (_get_metadata_key(e, "isolated", o)) {
                var r = $("<iframe/>").addClass("box-flex1");
                return (
                  r.css({ height: 1, width: "100%", display: "block" }),
                  r.attr("frameborder", 0),
                  r.attr("scrolling", "auto"),
                  r.on("load", function () {
                    this.contentDocument.open(),
                      this.contentDocument.write(n.html()),
                      this.contentDocument.close();
                    var e = this.contentDocument.body;
                    r.height(e.scrollHeight + "px");
                  }),
                  (r.append = function (e) {
                    n.append(e);
                  }),
                  r
                );
              }
              return n;
            }),
            (OutputArea.prototype._append_javascript_error = function (e, t) {
              var o = i18n.msg._("Javascript error adding output!");
              void 0 !== t &&
                t
                  .append($("<div/>").text(o).addClass("js-error"))
                  .append($("<div/>").text(e.toString()).addClass("js-error"))
                  .append(
                    $("<div/>")
                      .text(
                        i18n.msg._(
                          "See your browser Javascript console for more details."
                        )
                      )
                      .addClass("js-error")
                  );
            }),
            (OutputArea.prototype._safe_append = function (e, t) {
              try {
                t ? t.replaceWith(e) : this.element.append(e);
              } catch (t) {
                console.error(t), (e = this.create_output_area());
                var o = $("<div/>").addClass("output_subarea");
                e.append(o),
                  this._append_javascript_error(t, o),
                  this.element.append(e);
              }
              this.element.trigger("changed", { output_area: this });
            }),
            (OutputArea.output_prompt_classical = function (e) {
              var t = i18n.msg._("Out") + "[%s]:";
              return $("<bdi>").text(i18n.msg.sprintf(t, e));
            }),
            (OutputArea.output_prompt_function =
              OutputArea.output_prompt_classical),
            (OutputArea.prototype.append_execute_result = function (e) {
              var t = e.execution_count || " ",
                o = this.create_output_area();
              this._record_display_id(e, o),
                this.prompt_area &&
                  o
                    .find("div.prompt")
                    .addClass("output_prompt")
                    .empty()
                    .append(OutputArea.output_prompt_function(t));
              var n = this.append_mime_type(e, o);
              n && n.addClass("output_result"),
                this._safe_append(o),
                (void 0 === e.data[MIME_LATEX] &&
                  void 0 === e.data[MIME_HTML] &&
                  void 0 === e.data[MIME_MARKDOWN]) ||
                  this.typeset();
            }),
            (OutputArea.prototype.append_error = function (e) {
              var t = e.traceback;
              if (void 0 !== t && t.length > 0) {
                for (var o = "", n = t.length, r = 0; r < n; r++)
                  o = o + t[r] + "\n";
                o += "\n";
                var i = this.create_output_area(),
                  s = OutputArea.append_map[MIME_TEXT];
                s && s.apply(this, [o, {}, i]).addClass("output_error"),
                  this._safe_append(i);
              }
            }),
            (OutputArea.prototype.append_stream = function (e) {
              Array.isArray(e.text) && (e.text = e.text.join(""));
              var t = e.text;
              if ("string" != typeof t)
                return (
                  console.error("Stream output is invalid (missing text)", e),
                  !1
                );
              var o = "output_" + e.name;
              if (this.outputs.length > 0) {
                var n = this.outputs[this.outputs.length - 1];
                if ("stream" == n.output_type && e.name == n.name) {
                  if (
                    !(
                      n.text.length >
                      this.class_config.get_sync("stream_chunk_size")
                    )
                  )
                    return (
                      (n.text = utils.fixOverwrittenChars(n.text + e.text)),
                      (s = this.element
                        .find("div." + o)
                        .last()
                        .find("pre")),
                      (a = utils.fixConsole(n.text)),
                      (a = utils.autoLinkUrls(a)),
                      s.html(a),
                      !1
                    );
                  var r = n.text.lastIndexOf("\n");
                  if (-1 !== r && r !== n.text.length - 1) {
                    var i = n.text.slice(r + 1);
                    (n.text = n.text.slice(0, r + 1)),
                      (t = e.text = i + e.text);
                    var s = this.element
                        .find("div." + o)
                        .last()
                        .find("pre"),
                      a = utils.fixConsole(n.text);
                    (a = utils.autoLinkUrls(a)), s.html(a);
                  }
                }
                if (!t.replace("\r", "")) return !0;
              }
              var l = this.create_output_area(),
                c = OutputArea.append_map[MIME_TEXT];
              return (
                c && c.apply(this, [t, {}, l]).addClass("output_stream " + o),
                this._safe_append(l),
                !0
              );
            }),
            (OutputArea.prototype.append_unrecognized = function (e) {
              var t = this,
                o = this.create_output_area(),
                n = $("<div/>").addClass("output_subarea output_unrecognized");
              o.append(n),
                n.append(
                  $("<a>")
                    .attr("href", "#")
                    .text(
                      i18n.msg.sprintf(
                        i18n.msg._("Unrecognized output: %s"),
                        e.output_type
                      )
                    )
                    .click(function () {
                      t.events.trigger("unrecognized_output.OutputArea", {
                        output: e,
                      });
                    })
                ),
                this._safe_append(o);
            }),
            (OutputArea.prototype.update_display_data = function (e, t) {
              var o,
                n = this,
                r = (e.transient || {}).display_id;
              r
                ? (o = this._display_id_targets[r])
                  ? (o.map(function (o) {
                      (n.outputs[o.index].data = e.data),
                        (n.outputs[o.index].metadata = e.metadata);
                      var r = n.create_output_area();
                      n.append_mime_type(e, r, t) &&
                        n._safe_append(r, o.element),
                        (o.element = r);
                    }),
                    (void 0 === e.data[MIME_LATEX] &&
                      void 0 === e.data[MIME_HTML] &&
                      void 0 === e.data[MIME_MARKDOWN]) ||
                      this.typeset(),
                    this.events.trigger("output_updated.OutputArea", {
                      output: e,
                      output_area: this,
                    }))
                  : console.warn("No targets for display_id", r, e)
                : console.warn("Handling update_display with no display_id", e);
            }),
            (OutputArea.prototype._record_display_id = function (e, t) {
              var o = (e.transient || {}).display_id;
              if (o) {
                var n = this._display_id_targets[o];
                n || (n = this._display_id_targets[o] = []),
                  n.push({ index: this.outputs.length, element: t });
              }
            }),
            (OutputArea.prototype.append_display_data = function (e, t) {
              var o = this.create_output_area();
              this._record_display_id(e, o),
                this.append_mime_type(e, o, t) &&
                  (this._safe_append(o),
                  (void 0 === e.data[MIME_LATEX] &&
                    void 0 === e.data[MIME_HTML] &&
                    void 0 === e.data[MIME_MARKDOWN]) ||
                    this.typeset());
            }),
            (OutputArea.safe_outputs = {}),
            (OutputArea.safe_outputs[MIME_TEXT] = !0),
            (OutputArea.safe_outputs[MIME_LATEX] = !0),
            (OutputArea.safe_outputs[MIME_PNG] = !0),
            (OutputArea.safe_outputs[MIME_JPEG] = !0),
            (OutputArea.safe_outputs[MIME_GIF] = !0),
            (OutputArea.prototype.append_mime_type = function (e, t, o) {
              for (var n = 0; n < OutputArea.display_order.length; n++) {
                var r = OutputArea.display_order[n],
                  i = OutputArea.append_map[r];
                if (void 0 !== e.data[r] && i) {
                  var s,
                    a = e.metadata || {},
                    l = e.data[r];
                  if (this.trusted || OutputArea.safe_outputs[r])
                    s = i.apply(this, [l, a, t, o]);
                  else {
                    if (r !== MIME_HTML && "text/svg" !== r) {
                      console.log("Ignoring untrusted " + r + " output.");
                      continue;
                    }
                    var c = $(security.sanitize_html_and_parse(l));
                    s = i.apply(this, [c, a, t, o]);
                  }
                  return (
                    [MIME_PNG, MIME_JPEG, MIME_GIF].indexOf(r) < 0 &&
                      void 0 !== o &&
                      setTimeout(o, 0),
                    this.events.trigger("output_appended.OutputArea", [
                      r,
                      l,
                      a,
                      s,
                    ]),
                    s
                  );
                }
              }
              return null;
            });
          var append_html = function (e, t, o) {
              var n = MIME_HTML,
                r = this.create_output_subarea(
                  t,
                  "output_html rendered_html",
                  n
                );
              return (
                this.keyboard_manager.register_events(r),
                r.append(e),
                dblclick_to_reset_size(r.find("img")),
                o.append(r),
                r
              );
            },
            append_markdown = function (e, t, o) {
              var n = MIME_MARKDOWN,
                r = this.create_output_subarea(
                  t,
                  "output_markdown rendered_html",
                  n
                ),
                i = mathjaxutils.remove_math(e),
                s = i[0],
                a = i[1],
                l = new marked.Renderer();
              return (
                (l.tablecell = function (e, t) {
                  var o = t.header ? "th" : "td";
                  return (
                    "<" +
                    o +
                    (null == t.align
                      ? ""
                      : ' style="text-align: ' + t.align + '"') +
                    ">" +
                    e +
                    "</" +
                    o +
                    ">\n"
                  );
                }),
                marked.parse(s, { renderer: l }, function (e, t) {
                  (t = mathjaxutils.replace_math(t, a)), r.append(t);
                }),
                dblclick_to_reset_size(r.find("img")),
                o.append(r),
                r
              );
            },
            append_javascript = function append_javascript(js, md, element) {
              var type = MIME_JAVASCRIPT,
                toinsert = this.create_output_subarea(
                  md,
                  "output_javascript rendered_html",
                  type
                );
              this.keyboard_manager.register_events(toinsert),
                element.append(toinsert),
                (element = toinsert);
              try {
                eval(js);
              } catch (e) {
                console.log(e), this._append_javascript_error(e, toinsert);
              }
              return toinsert;
            },
            append_text = function (e, t, o) {
              var n = MIME_TEXT,
                r = this.create_output_subarea(t, "output_text", n);
              return (
                (e = utils.fixOverwrittenChars(e)),
                (e = utils.fixConsole(e)),
                (e = utils.autoLinkUrls(e)),
                r.append($("<pre/>").html(e)),
                o.append(r),
                r
              );
            },
            append_svg = function (e, t, o) {
              var n = MIME_SVG,
                r = this.create_output_subarea(t, "output_svg", n),
                i = $($("<div >").html(e).find("svg")[0]),
                s = $("<div />"),
                a = i.attr("width"),
                l = i.attr("height");
              return (
                i.width("100%").height("100%"),
                s.width(a).height(l),
                s.append(i),
                r.append(s),
                o.append(r),
                r
              );
            };
          function dblclick_to_reset_size(e) {
            e.dblclick(function () {
              e.hasClass("unconfined")
                ? e.removeClass("unconfined")
                : e.addClass("unconfined");
            });
          }
          var set_width_height = function (e, t, o) {
              var n = _get_metadata_key(t, "height", o);
              void 0 !== n && e.attr("height", n);
              var r = _get_metadata_key(t, "width", o);
              void 0 !== r && e.attr("width", r),
                _get_metadata_key(t, "unconfined", o) &&
                  e.addClass("unconfined");
            },
            append_png = function (e, t, o, n) {
              var r = MIME_PNG,
                i = this.create_output_subarea(t, "output_png", r),
                s = $("<img/>");
              return (
                void 0 !== n &&
                  s.on("load", function () {
                    n(s);
                  }),
                (s[0].src = "data:image/png;base64," + e),
                set_width_height(s, t, r),
                dblclick_to_reset_size(s),
                i.append(s),
                o.append(i),
                i
              );
            },
            append_jpeg = function (e, t, o, n) {
              var r = MIME_JPEG,
                i = this.create_output_subarea(t, "output_jpeg", r),
                s = $("<img/>");
              return (
                void 0 !== n &&
                  s.on("load", function () {
                    n(s);
                  }),
                (s[0].src = "data:image/jpeg;base64," + e),
                set_width_height(s, t, r),
                dblclick_to_reset_size(s),
                i.append(s),
                o.append(i),
                i
              );
            },
            append_gif = function (e, t, o, n) {
              var r = MIME_GIF,
                i = this.create_output_subarea(t, "output_gif", r),
                s = $("<img/>");
              return (
                void 0 !== n &&
                  s.on("load", function () {
                    n(s);
                  }),
                (s[0].src = "data:image/gif;base64," + e),
                set_width_height(s, t, r),
                dblclick_to_reset_size(s),
                i.append(s),
                o.append(i),
                i
              );
            },
            append_pdf = function (e, t, o) {
              var n = MIME_PDF,
                r = this.create_output_subarea(t, "output_pdf", n),
                i = $("<a/>").attr("href", "data:application/pdf;base64," + e);
              return (
                i.attr("target", "_blank"),
                i.text("View PDF"),
                r.append(i),
                o.append(r),
                r
              );
            },
            append_latex = function (e, t, o) {
              var n = MIME_LATEX,
                r = this.create_output_subarea(t, "output_latex", n);
              return r.text(e), o.append(r), r;
            };
          return (
            (OutputArea.prototype.append_raw_input = function (e) {
              var t = this;
              this.expand();
              var o = e.content,
                n = this.create_output_area();
              $("div.output_subarea.raw_input_container").remove();
              var r = o.password ? "password" : "text";
              n.append(
                $("<div/>")
                  .addClass("box-flex1 output_subarea raw_input_container")
                  .append(
                    $("<pre/>")
                      .addClass("raw_input_prompt")
                      .html(utils.fixConsole(o.prompt))
                      .append(
                        $("<input/>")
                          .addClass("raw_input")
                          .attr("type", r)
                          .attr("enterkeyhint", "done")
                          .attr("size", 47)
                          .keydown(function (e, o) {
                            if (e.which === keyboard.keycodes.enter)
                              return t._submit_raw_input(), !1;
                          })
                      )
                  )
              ),
                this.element.append(n);
              var i = n.find("input.raw_input");
              this.keyboard_manager.register_events(i), i.focus();
            }),
            (OutputArea.prototype._submit_raw_input = function (e) {
              var t = this.element.find("div.raw_input_container"),
                o = t.find("pre.raw_input_prompt"),
                n = t.find("input.raw_input"),
                r = n.val(),
                i = r;
              "password" == n.attr("type") && (i = "········");
              var s = {
                output_type: "stream",
                name: "stdout",
                text: o.text() + i + "\n",
              };
              t.parent().remove(),
                this.append_output(s),
                this.events.trigger("send_input_reply.Kernel", r);
            }),
            (OutputArea.prototype.handle_clear_output = function (e) {
              this.clear_output(e.content.wait || !1);
            }),
            (OutputArea.prototype.clear_output = function (e, t) {
              if (Basthon.pendingInput())
                throw "Impossible d'exécuter l'action : un champ d'entrée est en attente.";
              if (!e) {
                if (!t && this.clear_queued) {
                  var o = this.element[0].getBoundingClientRect().height;
                  this.element.height(o), (this.clear_queued = !1);
                }
                return (
                  this.element.find("img").off("load"),
                  this.element.trigger("clearing", { output_area: this }),
                  this.element.html(""),
                  this.element.trigger("changed", { output_area: this }),
                  this.element.trigger("cleared", { output_area: this }),
                  (this.outputs = []),
                  (this._display_id_targets = {}),
                  (this.trusted = !0),
                  this.unscroll_area(),
                  void this.expand()
                );
              }
              this.clear_queued && this.clear_output(!1),
                (this.clear_queued = !0);
            }),
            (OutputArea.prototype.fromJSON = function (e, t) {
              var o = e.length;
              t = t || {};
              for (var n = 0; n < o; n++) this.append_output(e[n]);
              void 0 !== t.collapsed &&
                (t.collapsed ? this.collapse() : this.expand()),
                void 0 !== t.scrolled &&
                  ((this.scroll_state = t.scrolled),
                  t.scrolled ? this.scroll_if_long() : this.unscroll_area());
            }),
            (OutputArea.prototype.toJSON = function () {
              return this.outputs.map(function (e) {
                var t = {};
                return (
                  Object.keys(e).map(function (o) {
                    "transient" != o && (t[o] = e[o]);
                  }),
                  t
                );
              });
            }),
            (OutputArea.auto_scroll_threshold = 100),
            (OutputArea.minimum_scroll_threshold = 20),
            (OutputArea.display_order = [
              MIME_JAVASCRIPT,
              MIME_HTML,
              MIME_MARKDOWN,
              MIME_LATEX,
              MIME_SVG,
              MIME_PNG,
              MIME_JPEG,
              MIME_GIF,
              MIME_PDF,
              MIME_TEXT,
            ]),
            (OutputArea.append_map = {}),
            (OutputArea.append_map[MIME_TEXT] = append_text),
            (OutputArea.append_map[MIME_HTML] = append_html),
            (OutputArea.append_map[MIME_MARKDOWN] = append_markdown),
            (OutputArea.append_map[MIME_SVG] = append_svg),
            (OutputArea.append_map[MIME_PNG] = append_png),
            (OutputArea.append_map[MIME_JPEG] = append_jpeg),
            (OutputArea.append_map[MIME_GIF] = append_gif),
            (OutputArea.append_map[MIME_LATEX] = append_latex),
            (OutputArea.append_map[MIME_JAVASCRIPT] = append_javascript),
            (OutputArea.append_map[MIME_PDF] = append_pdf),
            (OutputArea.prototype.mime_types = function () {
              return OutputArea.display_order;
            }),
            (OutputArea.prototype.register_mime_type = function (e, t, o) {
              e &&
                "function" == typeof t &&
                (OutputArea.output_types.push(e),
                o.safe && (OutputArea.safe_outputs[e] = !0),
                OutputArea.display_order.splice(o.index || 0, 0, e),
                (OutputArea.append_map[e] = t));
            }),
            { OutputArea }
          );
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
        void 0 === __WEBPACK_AMD_DEFINE_RESULT__ ||
          (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    },
    33242: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(54499), o(34960), o(26891)]),
        void 0 ===
          (r = function (e, t, o) {
            "use strict";
            var n = function (t, o) {
              (this.events = o.events),
                (this.pager_element = e(t)),
                (this.pager_button_area = e("#pager-button-area")),
                (this._default_end_space = 100),
                this.pager_element.resizable({
                  handles: "n",
                  resize: e.proxy(this._resize, this),
                }),
                (this.expanded = !1),
                this.create_button_area(),
                this.bind_events();
            };
            return (
              (n.prototype.create_button_area = function () {
                var t = this;
                this.pager_button_area.append(
                  e("<a>")
                    .attr("role", "button")
                    .attr(
                      "title",
                      o.msg._("Open the pager in an external window")
                    )
                    .addClass("ui-button")
                    .click(function () {
                      t.detach();
                    })
                    .append(e("<span>").addClass("ui-icon ui-icon-extlink"))
                ),
                  this.pager_button_area.append(
                    e("<a>")
                      .attr("role", "button")
                      .attr("title", o.msg._("Close the pager"))
                      .addClass("ui-button")
                      .click(function () {
                        t.collapse();
                      })
                      .append(e("<span>").addClass("ui-icon ui-icon-close"))
                  );
              }),
              (n.prototype.bind_events = function () {
                var t = this;
                this.pager_element.bind("collapse_pager", function (o, n) {
                  var r = n && n.duration ? n.duration : "fast";
                  t.pager_element.animate(
                    { height: "toggle" },
                    {
                      duration: r,
                      done: function () {
                        e(".end_space").css("height", t._default_end_space);
                      },
                    }
                  );
                }),
                  this.pager_element.bind("expand_pager", function (e, o) {
                    t.pager_element.height("initial");
                    var n = o && o.duration ? o.duration : "fast";
                    t.pager_element.show(n, function () {
                      t.pager_element.height(t.pager_element.height()),
                        t._resize(),
                        t.pager_element.css("position", "relative"),
                        window.requestAnimationFrame(function () {
                          t.pager_element.css("position", "");
                        });
                    });
                  }),
                  this.events.on("open_with_text.Pager", function (e, o) {
                    o.data["text/html"] && "" !== o.data["text/html"]
                      ? (t.clear(), t.expand(), t.append(o.data["text/html"]))
                      : o.data["text/plain"] &&
                        "" !== o.data["text/plain"] &&
                        (t.clear(),
                        t.expand(),
                        t.append_text(o.data["text/plain"]));
                  });
              }),
              (n.prototype.collapse = function (e) {
                !0 === this.expanded &&
                  ((this.expanded = !1),
                  this.pager_element.trigger("collapse_pager", e));
              }),
              (n.prototype.expand = function (e) {
                !0 !== this.expanded &&
                  ((this.expanded = !0),
                  this.pager_element.trigger("expand_pager", e));
              }),
              (n.prototype.toggle = function () {
                !0 === this.expanded ? this.collapse() : this.expand();
              }),
              (n.prototype.clear = function (e) {
                this.pager_element.find(".container").empty();
              }),
              (n.prototype.detach = function () {
                var n = window.open("", "_blank");
                e(n.document.head)
                  .append(
                    e("<link>")
                      .attr("rel", "stylesheet")
                      .attr(
                        "href",
                        t.url_path_join(
                          t.get_body_data("baseUrl"),
                          "static/style/style.min.css"
                        )
                      )
                      .attr("type", "text/css")
                  )
                  .append(e("<title>").text(o.msg._("Jupyter Pager")));
                var r = e(n.document.body);
                r.css("overflow", "scroll"),
                  r.append(this.pager_element.clone().children()),
                  n.document.close(),
                  this.collapse();
              }),
              (n.prototype.append_text = function (o) {
                this.pager_element
                  .find(".container")
                  .append(
                    e("<pre/>").html(t.fixConsole(t.fixOverwrittenChars(o)))
                  );
              }),
              (n.prototype.append = function (e) {
                this.pager_element.find(".container").append(e);
              }),
              (n.prototype._resize = function () {
                e(".end_space").css(
                  "height",
                  Math.max(this.pager_element.height(), this._default_end_space)
                );
              }),
              { Pager: n }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    48706: (e, t, o) => {
      var n, r;
      (n = [o(10267), o(57263)]),
        void 0 ===
          (r = function (e, t) {
            "use strict";
            return (
              (t.notebook_loaded = new Promise(function (t, o) {
                e.one("notebook_loaded.Notebook", function () {
                  t();
                }),
                  e.one("notebook_load_failed.Notebook", function () {
                    o();
                  });
              })),
              t
            );
          }.apply(t, n)) || (e.exports = r);
    },
    8773: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(54499), o(34960), o(46013), o(59050)]),
        void 0 ===
          (r = function (e, t, o, n, r) {
            "use strict";
            var i,
              s = t.platform,
              a = function (e) {
                (this.keyboard_manager = e.keyboard_manager),
                  (this.notebook = e.notebook),
                  (this.keyboard_manager.quick_help = this),
                  (this.events = e.events);
              },
              l = "Ctrl-";
            "MacOS" === s
              ? ((l = "Cmd-"),
                (i = [
                  { shortcut: "Cmd-Up", help: o.msg._("go to cell start") },
                  { shortcut: "Cmd-Down", help: o.msg._("go to cell end") },
                  { shortcut: "Alt-Left", help: o.msg._("go one word left") },
                  { shortcut: "Alt-Right", help: o.msg._("go one word right") },
                  {
                    shortcut: "Alt-Backspace",
                    help: o.msg._("delete word before"),
                  },
                  {
                    shortcut: "Alt-Delete",
                    help: o.msg._("delete word after"),
                  },
                  { shortcut: "Cmd-Shift-z", help: o.msg._("redo") },
                  { shortcut: "Cmd-Shift-u", help: o.msg._("redo selection") },
                  {
                    shortcut: "Ctrl-k",
                    help: o.msg._("emacs-style line kill"),
                  },
                  {
                    shortcut: "Cmd-Backspace",
                    help: o.msg._("delete line left of cursor"),
                  },
                  {
                    shortcut: "Cmd-Delete",
                    help: o.msg._("delete line right of cursor"),
                  },
                ]))
              : (i = [
                  { shortcut: "Ctrl-Home", help: o.msg._("go to cell start") },
                  { shortcut: "Ctrl-Up", help: o.msg._("go to cell start") },
                  { shortcut: "Ctrl-End", help: o.msg._("go to cell end") },
                  { shortcut: "Ctrl-Down", help: o.msg._("go to cell end") },
                  { shortcut: "Ctrl-Left", help: o.msg._("go one word left") },
                  {
                    shortcut: "Ctrl-Right",
                    help: o.msg._("go one word right"),
                  },
                  {
                    shortcut: "Ctrl-Backspace",
                    help: o.msg._("delete word before"),
                  },
                  {
                    shortcut: "Ctrl-Delete",
                    help: o.msg._("delete word after"),
                  },
                  { shortcut: "Ctrl-y", help: o.msg._("redo") },
                  { shortcut: "Alt-u", help: o.msg._("redo selection") },
                ]);
            var c,
              d = [
                { shortcut: "Tab", help: o.msg._("code completion or indent") },
                { shortcut: "Shift-Tab", help: o.msg._("tooltip") },
                { shortcut: l + "]", help: o.msg._("indent") },
                { shortcut: l + "[", help: o.msg._("dedent") },
                { shortcut: l + "a", help: o.msg._("select all") },
                { shortcut: l + "z", help: o.msg._("undo") },
                { shortcut: l + "/", help: o.msg._("comment") },
                { shortcut: l + "d", help: o.msg._("delete whole line") },
                { shortcut: l + "u", help: o.msg._("undo selection") },
                { shortcut: "Insert", help: o.msg._("toggle overwrite flag") },
              ].concat(i),
              u = {
                shift: o.msg._("Shift"),
                alt: o.msg._("Alt"),
                up: o.msg._("Up"),
                down: o.msg._("Down"),
                left: o.msg._("Left"),
                right: o.msg._("Right"),
                tab: o.msg._("Tab"),
                capslock: o.msg._("Caps Lock"),
                esc: o.msg._("Esc"),
                ctrl: o.msg._("Ctrl"),
                enter: o.msg._("Enter"),
                pageup: o.msg._("Page Up"),
                pagedown: o.msg._("Page Down"),
                home: o.msg._("Home"),
                end: o.msg._("End"),
                space: o.msg._("Space"),
                backspace: o.msg._("Backspace"),
                "-": o.msg._("Minus"),
              };
            c =
              "MacOS" === s
                ? {
                    cmd: "⌘",
                    shift: "⇧",
                    alt: "⌥",
                    up: "↑",
                    down: "↓",
                    left: "←",
                    right: "→",
                    eject: "⏏",
                    tab: "⇥",
                    backtab: "⇤",
                    capslock: "⇪",
                    esc: "esc",
                    ctrl: "⌃",
                    enter: "↩",
                    pageup: "⇞",
                    pagedown: "⇟",
                    home: "↖",
                    end: "↘",
                    altenter: "⌤",
                    space: "␣",
                    delete: "⌦",
                    backspace: "⌫",
                    apple: "",
                  }
                : u;
            var p = {
              pageup: o.msg._("PageUp"),
              pagedown: o.msg._("Page Down"),
            };
            function h(e) {
              return 1 === e.length
                ? e.toUpperCase()
                : -1 === (e = c[e.toLowerCase()] || e).indexOf(",")
                ? p[e]
                  ? p[e]
                  : e.charAt(0).toUpperCase() + e.slice(1)
                : void 0;
            }
            function _(e) {
              return r.map(e.replace(/meta/g, "cmd").split(","), f).join(",");
            }
            function m(e) {
              var t = "-";
              return "MacOS" === s && (t = ""), r.map(e.split("-"), h).join(t);
            }
            function f(e) {
              return "<kbd>" + m(e) + "</kbd>";
            }
            (a.prototype.show_keyboard_shortcuts = function () {
              var t = this;
              if (
                (this.force_rebuild &&
                  (this.shortcut_dialog.remove(),
                  delete this.shortcut_dialog,
                  (this.force_rebuild = !1)),
                this.shortcut_dialog)
              )
                e(this.shortcut_dialog).modal("toggle");
              else {
                var r = e("<div/>"),
                  i = e("<div/>").addClass("alert alert-info");
                if (
                  (i
                    .append(
                      o.msg._(
                        "The Jupyter Notebook has two different keyboard input modes."
                      )
                    )
                    .append(" ")
                    .append(
                      o.msg._(
                        "<b>Edit mode</b> allows you to type code or text into a cell and is indicated by a green cell border."
                      )
                    )
                    .append(" ")
                    .append(
                      o.msg._(
                        "<b>Command mode</b> binds the keyboard to notebook level commands and is indicated by a grey cell border with a blue left margin."
                      )
                    ),
                  r.append(i),
                  "MacOS" === s)
                ) {
                  i = e("<div/>").addClass("alert alert-info");
                  var a = this.build_key_names();
                  i.append(a), r.append(i);
                }
                var l = this.build_command_help();
                r.append(l);
                var c = this.build_edit_help(d);
                r.append(c),
                  o.msg._("Close"),
                  (this.shortcut_dialog = n.modal({
                    title: o.msg._("Keyboard shortcuts"),
                    body: r,
                    destroy: !1,
                    buttons: { Close: {} },
                    notebook: this.notebook,
                    keyboard_manager: this.keyboard_manager,
                  })),
                  this.shortcut_dialog.addClass("modal_stretch"),
                  this.events.on("rebuild.QuickHelp", function () {
                    t.force_rebuild = !0;
                  });
              }
            }),
              (a.prototype.build_key_names = function () {
                var t,
                  n,
                  r,
                  i = [
                    { shortcut: "⌘", help: o.msg._("Command") },
                    { shortcut: "⌃", help: o.msg._("Control") },
                    { shortcut: "⌥", help: o.msg._("Option") },
                    { shortcut: "⇧", help: o.msg._("Shift") },
                    { shortcut: "↩", help: o.msg._("Return") },
                    { shortcut: "␣", help: o.msg._("Space") },
                    { shortcut: "⇥", help: o.msg._("Tab") },
                  ],
                  s = e("<div/>").append("Mac OS X modifier keys:"),
                  a = e("<div/>").addClass("container-fluid"),
                  l = e("<div/>").addClass("col-md-6"),
                  c = e("<div/>").addClass("col-md-6");
                for (n = ~~((r = i.length) / 2), t = 0; t < n; t++)
                  l.append(g(i[t]));
                for (t = n; t < r; t++) c.append(g(i[t]));
                return a.append(l).append(c), s.append(a), s;
              }),
              (a.prototype.build_command_help = function () {
                var t = this,
                  n = this.keyboard_manager.command_shortcuts.help(),
                  r = "<kbd>" + o.msg._("Esc") + "</kbd>",
                  i = b(
                    "<h4>" +
                      o.msg.sprintf(
                        o.msg._("Command Mode (press %s to enable)"),
                        r
                      ) +
                      "</h4>",
                    n
                  ),
                  s = e("<button/>")
                    .text(o.msg._("Edit Shortcuts"))
                    .addClass("btn btn-xs btn-default pull-right")
                    .attr("href", "#")
                    .attr(
                      "title",
                      o.msg._("edit command-mode keyboard shortcuts")
                    )
                    .click(function () {
                      e(t.shortcut_dialog).modal("toggle"),
                        e(t.shortcut_dialog).on(
                          "hidden.bs.modal",
                          function (e) {
                            t.keyboard_manager.actions.call(
                              "jupyter-notebook:edit-command-mode-keyboard-shortcuts"
                            );
                          }
                        );
                    });
                return i.find("h4").append(s), i;
              }),
              (a.prototype.build_edit_help = function (t) {
                var n = this.keyboard_manager.edit_shortcuts.help(),
                  r = "<kbd>" + o.msg._("Enter") + "</kbd>";
                return (
                  (n = e.merge(e.merge([], t), n)),
                  b(
                    "<h4>" +
                      o.msg.sprintf(
                        o.msg._("Edit Mode (press %s to enable)"),
                        r
                      ) +
                      "</h4>",
                    n
                  )
                );
              });
            var g = function (t) {
                var o = t.help,
                  n = "";
                return (
                  t.shortcut && (n = _(t.shortcut)),
                  e("<div>")
                    .addClass("quickhelp")
                    .append(e("<span/>").addClass("shortcut_key").append(e(n)))
                    .append(
                      e("<span/>")
                        .addClass("shortcut_descr")
                        .text(" : " + o)
                    )
                );
              },
              b = function (t, o) {
                var n, r, i;
                o = o.filter(function (e) {
                  return "ignore" !== e.help;
                });
                var s = e("<div/>").append(e(t)),
                  a = e("<div/>").addClass("container-fluid"),
                  l = e("<div/>").addClass("col-md-6"),
                  c = e("<div/>").addClass("col-md-6");
                for (r = ~~((i = o.length) / 2), n = 0; n < r; n++)
                  l.append(g(o[n]));
                for (n = r; n < i; n++) c.append(g(o[n]));
                return a.append(l).append(c), s.append(a), s;
              };
            return {
              QuickHelp: a,
              humanize_shortcut: f,
              humanize_sequence: _,
              _humanize_sequence: function (e) {
                return r.map(e.replace(/meta/g, "cmd").split(","), m).join(",");
              },
            };
          }.apply(t, n)) || (e.exports = r);
    },
    47288: (e, t, o) => {
      var n, r;
      (n = [
        o(19755),
        o(54499),
        o(34960),
        o(46013),
        o(58812),
        o(30381),
        o(56782),
      ]),
        void 0 ===
          (r = function (e, t, o, n, r, i, s) {
            "use strict";
            var a = function (t, o) {
              (this.notebook = void 0),
                (this.selector = t),
                (this.events = o.events),
                (this._checkpoint_date = void 0),
                (this.keyboard_manager = o.keyboard_manager),
                void 0 !== this.selector &&
                  ((this.element = e(t)), this.bind_events());
            };
            return (
              (a.prototype.bind_events = function () {
                var e = this;
                this.element.find("span.filename").click(function () {
                  e.rename_notebook({ notebook: e.notebook });
                }),
                  this.events.on("notebook_loaded.Notebook", function () {
                    e.update_notebook_name(), e.update_document_title();
                  }),
                  this.events.on("notebook_saved.Notebook", function () {
                    e.update_notebook_name(), e.update_document_title();
                  }),
                  this.events.on("notebook_renamed.Notebook", function () {
                    e.update_notebook_name(), e.update_document_title();
                  }),
                  this.events.on("notebook_save_failed.Notebook", function () {
                    e.set_save_status(o.msg._("Autosave Failed!"));
                  }),
                  this.events.on("notebook_read_only.Notebook", function () {
                    e.set_save_status(""), (e.set_save_status = function () {});
                  }),
                  this.events.on(
                    "checkpoints_listed.Notebook",
                    function (t, o) {
                      e._set_last_checkpoint(o[0]);
                    }
                  ),
                  this.events.on(
                    "checkpoint_created.Notebook",
                    function (t, o) {
                      e._set_last_checkpoint(o);
                    }
                  ),
                  this.events.on("set_dirty.Notebook", function (t, o) {
                    e.set_autosaved(o.value);
                  });
              }),
              o.msg._("Cancel"),
              o.msg._("Rename"),
              o.msg._("OK"),
              (a.prototype.rename_notebook = function (t) {
                t = t || {};
                var i = this,
                  s = e("<div/>")
                    .append(
                      e("<p/>")
                        .addClass("rename-message")
                        .text(o.msg._("Enter a new notebook name:"))
                    )
                    .append(e("<br/>"))
                    .append(
                      e("<input/>")
                        .attr("type", "text")
                        .attr("size", "25")
                        .addClass("form-control")
                        .val(t.notebook.get_notebook_name())
                    ),
                  a = n.modal({
                    title: o.msg._("Rename Notebook"),
                    body: s,
                    notebook: t.notebook,
                    keyboard_manager: this.keyboard_manager,
                    default_button: "Cancel",
                    buttons: {
                      Cancel: {},
                      Rename: {
                        class: "btn-primary",
                        click: function () {
                          var e = a.find("input").val();
                          return t.notebook.test_notebook_name(e)
                            ? (a
                                .find(".rename-message")
                                .text(o.msg._("Renaming...")),
                              a.find('input[type="text"]').prop("disabled", !0),
                              i.notebook.rename(e).then(
                                function () {
                                  a.modal("hide");
                                },
                                function (e) {
                                  a
                                    .find(".rename-message")
                                    .text(
                                      e.message || o.msg._("Unknown error")
                                    ),
                                    a
                                      .find('input[type="text"]')
                                      .prop("disabled", !1)
                                      .focus()
                                      .select();
                                }
                              ),
                              !1)
                            : (a
                                .find(".rename-message")
                                .text(
                                  o.msg._(
                                    "Invalid notebook name. Notebook names must have 1 or more characters and can contain any characters except :/\\. Please enter a new notebook name:"
                                  )
                                ),
                              !1);
                        },
                      },
                    },
                    open: function () {
                      a.find('input[type="text"]').keydown(function (e) {
                        if (e.which === r.keycodes.enter)
                          return a.find(".btn-primary").first().click(), !1;
                      }),
                        a.find('input[type="text"]').focus().select();
                    },
                  });
              }),
              (a.prototype.update_notebook_name = function () {
                var e = this.notebook.get_notebook_name();
                (e = s.applyBidi(e)),
                  this.element.find("span.filename").text(e);
              }),
              (a.prototype.update_document_title = function () {
                var e = this.notebook.get_notebook_name();
                document.title = e + " - Jupyter Notebook";
              }),
              (a.prototype.update_address_bar = function () {
                var e = this.notebook.base_url,
                  o = this.notebook.notebook_path,
                  n = { path: o };
                window.history.replaceState(
                  n,
                  "",
                  t.url_path_join(e, "notebooks", t.encode_uri_components(o))
                );
              }),
              (a.prototype.set_save_status = function (e) {
                this.element.find("span.autosave_status").text(e);
              }),
              (a.prototype._set_last_checkpoint = function (e) {
                (this._checkpoint_date = e ? new Date(e.last_modified) : null),
                  this._render_checkpoint();
              }),
              (a.prototype._render_checkpoint = function () {
                this._schedule_render_checkpoint();
                var e = this.element.find("span.checkpoint_status");
                if (this._checkpoint_date) {
                  var n,
                    r = i(this._checkpoint_date),
                    s = r.format("llll");
                  (n =
                    Math.ceil(new Date() - this._checkpoint_date) <
                    t.time.milliseconds.d
                      ? r.fromNow()
                      : r.calendar()),
                    e
                      .text(o.msg.sprintf(o.msg._("Last Checkpoint: %s"), n))
                      .attr("title", s);
                } else e.text("").attr("title", o.msg._("no checkpoint"));
              }),
              (a.prototype._schedule_render_checkpoint = function () {
                if (this._checkpoint_date) {
                  this._checkpoint_timeout &&
                    clearTimeout(this._checkpoint_timeout);
                  var o = Math.ceil(new Date() - this._checkpoint_date);
                  this._checkpoint_timeout = setTimeout(
                    e.proxy(this._render_checkpoint, this),
                    t.time.timeout_from_dt(o)
                  );
                }
              }),
              (a.prototype.set_autosaved = function (e) {
                e
                  ? this.set_save_status(o.msg._("(unsaved changes)"))
                  : this.set_save_status(o.msg._("(autosaved)"));
              }),
              { SaveWidget: a }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    3849: (e, t, o) => {
      var n, r;
      (n = [o(19755)]),
        void 0 ===
          (r = function (e) {
            "use strict";
            var t = function (t, o) {
              (this.notebook = t),
                (this.element = e("#site")),
                (o = o || {}),
                (this.animation_speed = o.animation_speed || 250);
            };
            (t.prototype.onScroll = function (e, t) {
              (t = t || 100),
                this.element.scroll(function () {
                  clearTimeout(e._timeout), (e._timeout = setTimeout(e, t));
                });
            }),
              (t.prototype.scroll = function (e) {
                return this.scroll_some(e), !1;
              }),
              (t.prototype.scroll_to = function (t) {
                this.element.animate(
                  {
                    scrollTop:
                      e(t).offset().top +
                      this.element.scrollTop() -
                      this.element.offset().top,
                  },
                  this.animation_speed
                );
              }),
              (t.prototype.scroll_some = function (e) {
                this.element.animate(
                  {
                    scrollTop:
                      this.element.scrollTop() + e * this.element.height(),
                  },
                  this.animation_speed
                );
              }),
              (t.prototype.get_first_visible_cell = function () {
                var e = this.notebook.ncells(),
                  t = this.notebook.get_cell(0).element.offset().top,
                  o =
                    (this.notebook.get_cell(e - 1).element.offset().top - t) /
                    e,
                  n = Math.ceil(this.element.scrollTop() / o);
                for (
                  n = Math.min(Math.max(n, 0), e - 1);
                  this.notebook.get_cell(n).element.offset().top - t <
                    this.element.scrollTop() && n < e - 1;

                )
                  n += 1;
                for (
                  ;
                  this.notebook.get_cell(n).element.offset().top - t >
                    this.element.scrollTop() - 50 && n >= 0;

                )
                  n -= 1;
                return Math.min(n + 1, e - 1);
              }),
              (t.prototype.is_cell_visible = function (e) {
                var t = e.element[0].getBoundingClientRect(),
                  o = this.element[0].getBoundingClientRect();
                return t.top <= o.bottom && t.bottom >= o.top;
              });
            var o = function (e, o) {
              t.apply(this, [e, o]);
            };
            ((o.prototype = Object.create(t.prototype)).is_target = function (
              e
            ) {
              return !1;
            }),
              (o.prototype.scroll = function (e) {
                for (
                  var o = this.notebook.ncells(),
                    n = this.get_first_visible_cell() + e;
                  0 <= n && n < o && !this.is_target(n);

                )
                  n += e;
                return n < 0 || o <= n
                  ? t.prototype.scroll.apply(this, [e])
                  : (this.scroll_to(this.notebook.get_cell(n).element), !1);
              });
            var n = function (e, t) {
              o.apply(this, [e, t]);
            };
            (n.prototype = Object.create(o.prototype)).is_target = function (
              e
            ) {
              var t = this.notebook.get_cell(e);
              return (
                t.metadata &&
                t.metadata.slideshow &&
                t.metadata.slideshow.slide_type &&
                ("slide" === t.metadata.slideshow.slide_type ||
                  "subslide" === t.metadata.slideshow.slide_type)
              );
            };
            var r = function (e, o) {
              t.apply(this, [e, o]),
                (o = o || {}),
                (this._level = o.heading_level || 1);
            };
            return (
              ((r.prototype = Object.create(t.prototype)).scroll = function (
                o
              ) {
                var n,
                  r = e();
                for (n = 1; n <= this._level; n++)
                  r = r.add("#notebook-container h" + n);
                var i = this.notebook.get_cell(0).element.offset().top,
                  s = this.element.scrollTop(),
                  a = 0;
                for (n = -1; s >= a && n < r.length; )
                  ++n < r.length && (a = e(r[n]).offset().top - i);
                return (
                  (--n < 0 || s > e(r[n]).offset().top - i + 30) &&
                    o < 0 &&
                    (o += 1),
                  0 <= (n += o) && n < r.length
                    ? (this.scroll_to(r[n]), !1)
                    : t.prototype.scroll.apply(this, [o])
                );
              }),
              {
                ScrollManager: t,
                SlideScrollManager: n,
                HeadingScrollManager: r,
                TargetScrollManager: o,
              }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    35584: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(46013), o(34960)]),
        void 0 ===
          (r = function (e, t, o) {
            "use strict";
            var n = function (e, t) {
                for (t = t || 10; t < 10; ) t += 15;
                return e.length > t + 3 ? e.slice(0, t) + "..." : e;
              },
              r = function (e, t, n, r) {
                try {
                  e = r(e, "g");
                } catch (e) {
                  return [[], !1];
                }
                for (var i, s = [], a = 0, l = !1; null !== (i = e.exec(t)); )
                  if ((s.push([i.index, i.index + i[0].length]), ++a > 100)) {
                    console.warn(o.msg._("More than 100 matches, aborting")),
                      (l = !0);
                    break;
                  }
                return [s, l];
              };
            return {
              load: function (i) {
                var s = {
                  cmd: o.msg._("find and replace"),
                  help: o.msg._("find and replace"),
                  handler: function (i, s) {
                    !(function (i, s) {
                      var a = e("<button/>")
                          .attr("type", "button")
                          .attr("id", "isreg")
                          .addClass("btn btn-default btn-sm")
                          .attr("data-toggle", "button")
                          .css("font-weight", "bold")
                          .attr(
                            "title",
                            o.msg._("Use regex (JavaScript regex syntax)")
                          )
                          .text(".*"),
                        l = e("<button/>")
                          .append(e("<i/>").addClass("fa fa-arrows-v"))
                          .attr("id", "findreplace_allcells_btn")
                          .attr("type", "button")
                          .addClass("btn btn-default btn-sm")
                          .attr("data-toggle", "button")
                          .attr("title", o.msg._("Replace in all cells")),
                        c = e("<button/>")
                          .attr("type", "button")
                          .addClass("btn btn-default btn-sm")
                          .attr("data-toggle", "button")
                          .attr("tabindex", "0")
                          .attr("title", o.msg._("Match case"))
                          .css("font-weight", "bold")
                          .text("Aa"),
                        d = e("<input/>")
                          .addClass("form-control input-sm")
                          .attr("id", "findreplace_find_inp")
                          .attr("placeholder", o.msg._("Find")),
                        u = e("<div/>").addClass("form-group");
                      u.append(
                        e("<div/>")
                          .addClass("input-group")
                          .append(
                            e("<div/>")
                              .addClass("input-group-btn")
                              .append(c)
                              .append(a)
                              .append(l)
                          )
                          .append(d)
                      );
                      var p = e("<input/>")
                          .attr("id", "findreplace_replace_inp")
                          .addClass("form-control input-sm")
                          .attr("placeholder", o.msg._("Replace")),
                        h = e("<div/>").addClass("form-group");
                      h.append(p);
                      var _ = e("<div/>").attr("id", "replace-preview"),
                        m = e("<form/>").attr("id", "find-and-replace");
                      m.append(u), m.append(h), m.append(_);
                      var f = function () {
                          return "true" == c.attr("aria-pressed");
                        },
                        g = function (e, t) {
                          return (
                            f() || (t = (t || "") + "i"),
                            "true" === a.attr("aria-pressed")
                              ? new RegExp(e, t)
                              : new RegExp(
                                  e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                                  t
                                )
                          );
                        },
                        b = function (t) {
                          t.empty(),
                            t.append(
                              e("<p/>").text(
                                o.msg._(
                                  "No matches, invalid or empty regular expression"
                                )
                              )
                            );
                        },
                        v = function (e) {
                          return "true" == l.attr("aria-pressed")
                            ? e.notebook.get_cells()
                            : e.notebook.get_selected_cells();
                        },
                        y = function () {
                          var t = d.val();
                          if (!t) return b(_);
                          try {
                            new g(t);
                          } catch (e) {
                            return b(_);
                          }
                          var s = p.val(),
                            a = (function (e, t, o, i, s) {
                              for (
                                var a = [], l = !1, c = new i(e), d = 0;
                                d < t.length;
                                d++
                              ) {
                                var u = t[d],
                                  p = r(e, u, 0, i);
                                l = l || p[1];
                                for (var h = p[0], _ = 0; _ < h.length; _++) {
                                  var m = h[_][0],
                                    f = h[_][1],
                                    g = u.slice(m, f),
                                    b = g.replace(c, s);
                                  a.push([
                                    ((v = u.slice(0, m)),
                                    v.length > 33 ? "..." + v.slice(-30) : v),
                                    g,
                                    b,
                                    n(u.slice(f), 30 - (f - m)),
                                  ]);
                                }
                              }
                              var v;
                              return [a, l];
                            })(
                              t,
                              (function (e) {
                                for (var t = [], o = 0; o < e.length; o++)
                                  t = t.concat(
                                    e[o].code_mirror.getValue().split("\n")
                                  );
                                return t;
                              })(v(i)),
                              f(),
                              g,
                              s
                            ),
                            l = a[0],
                            c = a[1];
                          return (
                            (function (t, n, r, i) {
                              if ((t.empty(), n)) {
                                var s = o.msg.sprintf(
                                  o.msg._(
                                    "Warning: too many matches (%d). Some changes might not be shown or applied."
                                  ),
                                  r.length
                                );
                                t.append(
                                  e("<p/>").addClass("bg-warning").text(s)
                                );
                              } else {
                                var a = o.msg.sprintf(
                                  o.msg.ngettext(
                                    "%d match",
                                    "%d matches",
                                    r.length
                                  ),
                                  r.length
                                );
                                t.append(e("<p/>").text(a));
                              }
                              for (var l = 0; l < r.length; l++) {
                                var c = e("<pre/>")
                                  .append(r[l][0])
                                  .append(
                                    e("<span/>").addClass("match").text(r[l][1])
                                  );
                                i &&
                                  (c.append(
                                    e("<span/>")
                                      .addClass("insert")
                                      .text(r[l][2])
                                  ),
                                  c.addClass("replace")),
                                  c.append(r[l][3]),
                                  t.append(c);
                              }
                            })(_, c, l, s),
                            !1
                          );
                        },
                        k = function (e) {
                          var t = d.val(),
                            o = p.val();
                          if (!t) return !1;
                          for (
                            var n = g(t, "gm"), r = v(i), s = 0;
                            s < r.length;
                            s++
                          ) {
                            var a = r[s],
                              l = a.code_mirror.getValue().replace(n, o);
                            a.code_mirror.setValue(l),
                              "markdown" === a.cell_type &&
                                ((a.rendered = !1), a.render());
                          }
                        };
                      a.click(function () {
                        d.focus(),
                          setTimeout(function () {
                            y();
                          }, 100);
                      }),
                        c.click(function () {
                          d.focus(),
                            setTimeout(function () {
                              y();
                            }, 100);
                        }),
                        l.click(function () {
                          p.focus(),
                            setTimeout(function () {
                              y();
                            }, 100);
                        }),
                        d.keypress(function (e) {
                          13 == e.which && p.focus();
                        }),
                        d.on("input", y),
                        p.on("input", y),
                        o.msg._("Replace All");
                      var w = t.modal({
                        show: !1,
                        title: o.msg._("Find and Replace"),
                        body: m,
                        keyboard_manager: i.notebook.keyboard_manager,
                        buttons: {
                          "Replace All": {
                            class: "btn-primary",
                            click: function (e) {
                              return k(), !0;
                            },
                            id: "findreplace_replaceall_btn",
                          },
                        },
                        open: function () {
                          d.focus();
                        },
                      });
                      p.keypress(function (e) {
                        13 == e.which && (k(), w.modal("hide"));
                      }),
                        w.modal("show");
                    })(i);
                  },
                };
                i.actions.register(s, "find-and-replace", "jupyter-notebook"),
                  i.command_shortcuts.add_shortcuts({
                    f: "jupyter-notebook:find-and-replace",
                  });
              },
            };
          }.apply(t, n)) || (e.exports = r);
    },
    55504: (e, t, o) => {
      var n, r;
      (n = [
        o(19755),
        o(8773),
        o(46013),
        o(30970),
        o(67294),
        o(20745),
        o(72555),
      ]),
        void 0 ===
          (r = function (e, t, o, n, r, i, s) {
            var a = s({
                displayName: "KeyBindings",
                getInitialState: function () {
                  return { shrt: "" };
                },
                handleShrtChange: function (e) {
                  this.setState({ shrt: e.target.value });
                },
                render: function () {
                  var e = this,
                    t = this.props.available(this.state.shrt),
                    o = "" === this.state.shrt,
                    n = function () {
                      return (
                        t && e.props.onAddBindings(e.state.shrt, e.props.ckey),
                        (e.state.shrt = ""),
                        event.preventDefault(),
                        !1
                      );
                    };
                  return r.createElement(
                    "form",
                    { className: "jupyter-keybindings", onSubmit: n },
                    r.createElement("i", {
                      className: "pull-right fa fa-plus",
                      alt: "add-keyboard-shortcut",
                      onClick: n,
                    }),
                    r.createElement("input", {
                      type: "text",
                      placeholder: "add shortcut",
                      className:
                        "pull-right" + (t || o ? "" : " alert alert-danger"),
                      value: e.state.shrt,
                      onChange: e.handleShrtChange,
                    }),
                    e.props.shortcuts
                      ? e.props.shortcuts.map(function (t, o) {
                          return r.createElement(
                            "span",
                            { className: "pull-right", key: o },
                            r.createElement(
                              "kbd",
                              {},
                              t.h,
                              r.createElement("i", {
                                className: "fa fa-times",
                                alt: "remove " + t.h,
                                onClick: function () {
                                  e.props.unbind(t.raw);
                                },
                              })
                            )
                          );
                        })
                      : null,
                    r.createElement(
                      "div",
                      {
                        title: "(" + e.props.ckey + ")",
                        className: "jupyter-keybindings-text",
                      },
                      e.props.display
                    )
                  );
                },
              }),
              l = s({
                displayName: "KeyBindingList",
                getInitialState: function () {
                  return { data: [] };
                },
                componentDidMount: function () {
                  this.setState({ data: this.props.callback() });
                },
                render: function () {
                  var e = this,
                    t = this.state.data.map(function (t) {
                      return r.createElement(
                        a,
                        Object.assign({}, t, {
                          onAddBindings: function (t, o) {
                            e.props.bind(t, o),
                              e.setState({ data: e.props.callback() });
                          },
                          available: e.props.available,
                          unbind: function (t) {
                            e.props.unbind(t),
                              e.setState({ data: e.props.callback() });
                          },
                        })
                      );
                    });
                  return (
                    t.unshift(
                      r.createElement("div", {
                        className: "well",
                        key: "disclamer1",
                        id: "short-key-binding-intro",
                        dangerouslySetInnerHTML: {
                          __html: n.parse(
                            "Here you can modify the keyboard shortcuts available in command mode. Your changes will be stored for later sessions. See more [**details of defining keyboard shortcuts**](#long-key-binding-intro) below."
                          ),
                        },
                      })
                    ),
                    t.push(
                      r.createElement("div", {
                        className: "well",
                        key: "disclamer2",
                        id: "long-key-binding-intro",
                        dangerouslySetInnerHTML: {
                          __html: n.parse(
                            "This dialog allows you to modify the keyboard shortcuts available in command mode. Any changes will be persisted between sessions and across environments. You can define two kinds of shortcuts: **key combinations** and **key sequences**.\n\n - **Key Combinations**:\n   - Use hyphens `-` to represent keys that should be pressed at the same time.\n   - This is designed for use with *modifier* keys: `Cmd`, `Ctrl`, `Alt` ,`Meta`, `Cmdtrl`, and `Shift`.\n       - `Cmdtrl` acts like `Cmd` on OS X/MacOS and `Ctrl` on Windows/Linux.\n   - At most, one non-modifier key can exist in a key combination.\n   - Multiple modifier keys can exist in a key combination.\n   - Modifier keys need to precede the non-modifier key in a combination.\n   - *Valid Examples*: `Shift-a`, `Ctrl-;`, or `Ctrl-Shift-a`. \n   - *Invalid Example*s: `a-b` and `a-Ctrl-Shift`. \n - **Key Sequences**:\n   - Use commas `,` to represent keys that should be pressed in sequence.\n   - The order in which keys must be pressed exactly matches the left-to-right order of the characters in the sequence, with no interruptions.\n     - E.g., `h,a,l,t` would be triggered by typing <kbd>h</kbd> <kbd>a</kbd> <kbd>l</kbd> <kbd>t</kbd> but not <kbd>h</kbd> <kbd>a</kbd> <kbd>a</kbd> <kbd>l</kbd> <kbd>t</kbd> or <kbd>a</kbd>  <kbd>h</kbd> <kbd>l</kbd> <kbd>t</kbd>.\n   - Sequences can include the same key multiple times (e.g., `d,d`).\n   - You cannot include any pairs of sequences where one is a 'prefix' the other.\n     - E.g., `d,d,d` cannot be used a the same time as `d,d`.\n   - Key combinations are unique elements that can be used in a sequence.\n     - E.g., `Ctrl-d,d` and `d,d` can exist at the same time and are both valid key sequences.\n\n**Additional notes**:\n\nThe case in which elements are written does not change the binding's meaning. E.g., `Ctrl-D` and `cTrl-d` are the same key binding. Thus, `Shift` needs to be explicitly included if it is part of the key binding. So, for example, if you set a command to be activated by `Shift-D,D`, the second `d` cannot be pressed at the same time as the `Shift` modifier key.\n\nValid modifiers are specified by writing out their names explicitly: e.g., `Shift`, `Cmd`, `Ctrl`, `Alt` ,`Meta`, `Cmdtrl`. You cannot use the symbol equivalents (e.g., `⇧`, `⌘`, `⌃`, `⌥`); refer to developer docs for the corresponding keys (the mapping of which depends on the platform you are using).You can hover on the name/description of a command to see its exact internal name and differentiate from actions defined in various plugins. \n\nChanging the keybindings of edit mode is not currently available."
                          ),
                        },
                      })
                    ),
                    r.createElement("div", {}, t)
                  );
                },
              });
            return {
              ShortcutEditor: function (n) {
                if (!n)
                  throw new Error(
                    "CommandPalette takes a notebook non-null mandatory argument"
                  );
                var s = e("<div>"),
                  a = o.modal({
                    notebook: n,
                    keyboard_manager: n.keyboard_manager,
                    title: "Edit Command mode Shortcuts",
                    body: s,
                    buttons: { OK: {} },
                  }),
                  c = (function (e) {
                    for (
                      var o,
                        n = Object.keys(e.keyboard_manager.actions._actions),
                        r = [],
                        i = 0;
                      i < n.length;
                      i++
                    ) {
                      var s = n[i],
                        a =
                          (e.keyboard_manager.actions.get(s),
                          e.keyboard_manager.command_shortcuts.get_action_shortcuts(
                            s
                          )),
                        l = [];
                      a.length > 0 &&
                        (l = a.map(function (e) {
                          return { h: t._humanize_sequence(e), raw: e };
                        })),
                        r.push({
                          display:
                            ((o = s),
                            o
                              .split(":")[1]
                              .replace(/-/g, " ")
                              .replace(/_/g, "-")),
                          shortcuts: l,
                          key: s,
                          ckey: s,
                        });
                    }
                    return r;
                  })(n);
                a.addClass("modal_stretch"),
                  a.modal("show"),
                  i.createRoot(s.get(0)).render(
                    r.createElement(l, {
                      callback: function () {
                        return c;
                      },
                      bind: function (e, t) {
                        return n.keyboard_manager.command_shortcuts._persist_shortcut(
                          e,
                          t
                        );
                      },
                      unbind: function (e) {
                        return n.keyboard_manager.command_shortcuts._persist_remove_shortcut(
                          e
                        );
                      },
                      available: function (e) {
                        return n.keyboard_manager.command_shortcuts.is_available_shortcut(
                          e
                        );
                      },
                    })
                  );
              },
            };
          }.apply(t, n)) || (e.exports = r);
    },
    98448: (e, t, o) => {
      var n, r;
      (n = [
        o(19755),
        o(54499),
        o(34960),
        o(42142),
        o(55131),
        o(51475),
        o(86817),
        o(27148),
        o(30970),
        o(4631),
        o(42425),
        o(75303),
      ]),
        void 0 ===
          (r = function (e, t, o, n, r, i, s, a, l, c, d, u) {
            "use strict";
            var p = n.Cell,
              h = function (e) {
                (e = e || {}),
                  (this.notebook = e.notebook),
                  (this.events = e.events),
                  (this.config = e.config),
                  p.apply(this, [
                    {
                      config: e.config,
                      keyboard_manager: e.keyboard_manager,
                      events: this.events,
                    },
                  ]),
                  (this.cell_type = this.cell_type || "text"),
                  (this.rendered = !1);
              };
            (h.prototype = Object.create(p.prototype)),
              (h.options_default = {
                cm_config: { mode: "htmlmixed", lineWrapping: !0 },
              }),
              (h.prototype.create_element = function () {
                p.prototype.create_element.apply(this, arguments);
                var t = this,
                  n = e("<div>").addClass("cell text_cell");
                n.attr("tabindex", "2");
                var r = e("<div/>").addClass("prompt input_prompt");
                n.append(r);
                var i = e("<div/>").addClass("inner_cell");
                (this.celltoolbar = new a.CellToolbar({
                  cell: this,
                  notebook: this.notebook,
                })),
                  i.append(this.celltoolbar.element);
                var s = e("<div/>")
                  .addClass("input_area")
                  .attr("aria-label", o.msg._("Edit Markup Text here"));
                (this.code_mirror = new c(s.get(0), this._options.cm_config)),
                  this.code_mirror.on("focus", function () {
                    t.keyboard_manager && t.keyboard_manager.enable(),
                      t.code_mirror.setOption("readOnly", !t.is_editable());
                  }),
                  this.code_mirror.on(
                    "keydown",
                    e.proxy(this.handle_keyevent, this)
                  );
                var l = e("<div/>")
                  .addClass("text_cell_render rendered_html")
                  .attr("tabindex", "-1");
                i.append(s).append(l),
                  n.append(i),
                  (this.element = n),
                  (this.inner_cell = i);
              }),
              (h.prototype.add_attachment = function (e, t, o) {
                (this.attachments[e] = {}), (this.attachments[e][t] = o);
              }),
              (h.prototype.select = function () {
                var e = p.prototype.select.apply(this, arguments);
                return (
                  e && "edit" === this.mode && this.code_mirror.refresh(), e
                );
              }),
              (h.prototype.unrender = function () {
                var e = p.prototype.unrender.apply(this);
                return (
                  e &&
                    (this.element,
                    this.get_text() === this.placeholder && this.set_text(""),
                    this.refresh()),
                  e
                );
              }),
              (h.prototype.execute = function () {
                this.render();
              }),
              (h.prototype.get_text = function () {
                return this.code_mirror.getValue();
              }),
              (h.prototype.set_text = function (e) {
                this.code_mirror.setValue(e),
                  this.unrender(),
                  this.code_mirror.refresh();
              }),
              (h.prototype.get_rendered = function () {
                return this.element.find("div.text_cell_render").html();
              }),
              (h.prototype.set_rendered = function (e) {
                this.element.find("div.text_cell_render").html(e);
              }),
              (h.prototype.fromJSON = function (e) {
                p.prototype.fromJSON.apply(this, arguments),
                  e.cell_type === this.cell_type &&
                    (void 0 !== e.attachments &&
                      (this.attachments = e.attachments),
                    void 0 !== e.source &&
                      (Array.isArray(e.source) &&
                        (e.source = e.source.join("")),
                      this.set_text(e.source),
                      this.code_mirror.clearHistory(),
                      this.set_rendered(e.rendered || ""),
                      (this.rendered = !1),
                      this.render()));
              }),
              (h.prototype.toJSON = function (t) {
                void 0 === t && (t = !1);
                var o = p.prototype.toJSON.apply(this);
                if (
                  ((o.source = this.get_text()),
                  o.source == this.placeholder && (o.source = ""),
                  Object.keys(this.attachments).length > 0)
                )
                  if (t) {
                    var n = this;
                    o.attachments = {};
                    var i = this.get_text(),
                      s = new l.Renderer();
                    s.code = function (e, t, o) {
                      return e;
                    };
                    var a = void 0;
                    try {
                      l.parse(i, { renderer: s });
                    } catch (e) {}
                    null != a
                      ? (a = e(r.sanitize_html_and_parse(a)))
                          .find('img[src^="attachment:"]')
                          .each(function (t, r) {
                            var i = (r = e(r))
                              .attr("src")
                              .replace(/^attachment:/, "");
                            n.attachments.hasOwnProperty(i) &&
                              (o.attachments[i] = JSON.parse(
                                JSON.stringify(n.attachments[i])
                              )),
                              r.attr("src", "");
                          })
                      : (o.attachments = JSON.parse(
                          JSON.stringify(this.attachments)
                        )),
                      0 === Object.keys(o.attachments).length &&
                        delete o.attachments;
                  } else
                    o.attachments = JSON.parse(
                      JSON.stringify(this.attachments)
                    );
                return o;
              });
            var _ = function o(n) {
              n = n || {};
              var r = t.mergeopt(h, o.options_default);
              (this.class_config = new i.ConfigWithDefaults(
                n.config,
                r,
                "MarkdownCell"
              )),
                h.apply(this, [e.extend({}, n, { config: n.config })]),
                (this.cell_type = "markdown"),
                (this.drag_counter = 0);
            };
            (_.options_default = {
              cm_config: { mode: "ipythongfm" },
              placeholder: "Type *Markdown* and LaTeX: $\\alpha^2$",
            }),
              ((_.prototype = Object.create(h.prototype)).execute =
                function () {
                  this.render();
                  var e = this.notebook,
                    t = e.find_cell_index(this);
                  e.is_breakpoint_cell(this) && e.next_breakpoint_cell(t);
                }),
              (_.prototype.set_heading_level = function (e) {
                e = e || 1;
                var t = this.get_text();
                (t = t.replace(/^(#*)\s?/, new Array(e + 1).join("#") + " ")),
                  this.set_text(t),
                  this.refresh(),
                  this.rendered && this.render();
              }),
              (_.prototype.select = function () {
                h.prototype.select.apply(this, arguments) &&
                  this.notebook.set_insert_image_enabled(!this.rendered);
              }),
              (_.prototype.unrender = function () {
                h.prototype.unrender.apply(this),
                  this.notebook.set_insert_image_enabled(!0);
              }),
              (_.prototype.insert_inline_image_from_blob = function (e) {
                var o,
                  n,
                  r = this,
                  i = this.code_mirror.getCursor(),
                  s = new FileReader();
                void 0 !== e.name
                  ? ((n = e.name),
                    (o = encodeURI(n).replace("(", "%28").replace(")", "%29")))
                  : (o = "_auto_" + Object.keys(r.attachments).length),
                  (s.onloadend = function () {
                    var n = t.parse_b64_data_uri(s.result);
                    e.type != n[0] &&
                      console.log(
                        "File type (" +
                          e.type +
                          ") != data-uri type (" +
                          n[0] +
                          ")"
                      ),
                      r.add_attachment(o, e.type, n[1]);
                    var a = "![" + o + "](attachment:" + o + ")";
                    r.code_mirror.replaceRange(a, i);
                  }),
                  s.readAsDataURL(e);
              }),
              (_.prototype.render = function () {
                (this.drag_counter = 0),
                  this.inner_cell.removeClass("dropzone");
                var t = h.prototype.render.apply(this);
                if (t) {
                  var o,
                    n = this,
                    i = this.get_text();
                  "" === i && (i = this.placeholder);
                  var a = s.remove_math(i);
                  (i = a[0]), (o = a[1]);
                  var c = new l.Renderer();
                  (c.tablecell = function (e, t) {
                    var o = t.header ? "th" : "td";
                    return (
                      "<" +
                      o +
                      (null == t.align
                        ? ""
                        : ' style="text-align: ' + t.align + '"') +
                      ">" +
                      e +
                      "</" +
                      o +
                      ">\n"
                    );
                  }),
                    l.parse(i, { renderer: c }, function (t, i) {
                      (i = s.replace_math(i, o)),
                        (i = e(r.sanitize_html_and_parse(i)))
                          .find(":header")
                          .addBack(":header")
                          .each(function (t, o) {
                            var r = (o = e(o)).text().replace(/ /g, "-");
                            o.attr("id", r),
                              o.append(
                                e("<a/>")
                                  .addClass("anchor-link")
                                  .attr("href", "#" + r)
                                  .text("¶")
                                  .on("click", function () {
                                    setTimeout(function () {
                                      n.unrender(), n.render();
                                    }, 100);
                                  })
                              );
                          }),
                        i
                          .find("a[href]")
                          .not('[href^="#"]')
                          .attr("target", "_blank"),
                        i.find('img[src^="attachment:"]').each(function (t, o) {
                          var r = (o = e(o))
                            .attr("src")
                            .replace(/^attachment:/, "");
                          if (n.attachments.hasOwnProperty(r)) {
                            var i = n.attachments[r],
                              s = Object.keys(i)[0];
                            o.attr("src", "data:" + s + ";base64," + i[s]);
                          } else o.attr("src", "");
                        }),
                        n.set_rendered(i),
                        n.typeset(),
                        n.events.trigger("rendered.MarkdownCell", { cell: n });
                    });
                }
                return t;
              }),
              (_.prototype.bind_events = function () {
                h.prototype.bind_events.apply(this);
                var o = this;
                this.element.dblclick(function () {
                  o.notebook.is_romd() || (o.unrender() && o.focus_editor());
                });
                var n = /^image\/.*$/,
                  r = o.code_mirror.getWrapperElement();
                e(r).on("paste", function (e) {
                  var t = e.originalEvent.clipboardData,
                    r = t.items;
                  if (void 0 !== t.items)
                    for (var i = 0; i < r.length; ++i) {
                      var s = r[i];
                      "file" == s.kind &&
                        n.test(s.type) &&
                        (e.stopPropagation(),
                        e.preventDefault(),
                        o.insert_inline_image_from_blob(s.getAsFile()));
                    }
                }),
                  this.code_mirror.on("dragover", function (e, o) {
                    t.dnd_contain_file(o) && o.preventDefault();
                  }),
                  this.code_mirror.on("dragenter", function (e, n) {
                    t.dnd_contain_file(n) &&
                      (o.drag_counter++, o.inner_cell.addClass("dropzone")),
                      n.preventDefault(),
                      n.stopPropagation();
                  }),
                  this.code_mirror.on("dragleave", function (e, t) {
                    o.drag_counter--,
                      o.drag_counter <= 0 &&
                        o.inner_cell.removeClass("dropzone"),
                      t.preventDefault(),
                      t.stopPropagation();
                  }),
                  this.code_mirror.on("drop", function (e, t) {
                    (o.drag_counter = 0), o.inner_cell.removeClass("dropzone");
                    for (
                      var r = t.dataTransfer.files, i = 0;
                      i < r.length;
                      ++i
                    ) {
                      var s = r[i];
                      n.test(s.type) &&
                        (t.stopPropagation(),
                        t.preventDefault(),
                        o.insert_inline_image_from_blob(s));
                    }
                  });
              });
            var m = function o(n) {
              n = n || {};
              var r = t.mergeopt(h, o.options_default);
              (this.class_config = new i.ConfigWithDefaults(
                n.config,
                r,
                "RawCell"
              )),
                h.apply(this, [e.extend({}, n, { config: n.config })]),
                (this.cell_type = "raw");
            };
            return (
              (m.options_default = {
                highlight_modes: { diff: { reg: [/^diff/] } },
                placeholder: o.msg._(
                  "Write raw LaTeX or other formats here, for use with nbconvert. It will not be rendered in the notebook. When passing through nbconvert, a Raw Cell's content is added to the output unmodified."
                ),
              }),
              ((m.prototype = Object.create(h.prototype)).bind_events =
                function () {
                  h.prototype.bind_events.apply(this);
                  var e = this;
                  this.element.focusout(function () {
                    e.auto_highlight(), e.render();
                  }),
                    this.code_mirror.on("focus", function () {
                      e.unrender();
                    });
                }),
              (m.prototype.render = function () {
                var e = h.prototype.render.apply(this);
                if (e) {
                  var t = this.get_text();
                  "" === t && (t = this.placeholder),
                    this.set_text(t),
                    this.element.removeClass("rendered"),
                    this.auto_highlight();
                }
                return e;
              }),
              { TextCell: h, MarkdownCell: _, RawCell: m }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    6682: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(34960)]),
        void 0 ===
          (r = function (e, t) {
            "use strict";
            var o = function (t, o) {
              (this.selector = t),
                (this.actions = (o || {}).actions),
                void 0 !== this.selector &&
                  ((this.element = e(t)), this.style());
            };
            return (
              (o.prototype._pseudo_actions = {}),
              (o.prototype.construct = function (e) {
                for (var t = 0; t < e.length; t++)
                  this.add_buttons_group(e[t][0], e[t][1]);
              }),
              (o.prototype.add_buttons_group = function (o, n) {
                if (
                  "string" != typeof o ||
                  "<" !== o.slice(0, 1) ||
                  ">" !== o.slice(-1)
                ) {
                  var r = this,
                    i = e("<div/>").addClass("btn-group");
                  return (
                    void 0 !== n && i.attr("id", n),
                    o.forEach(function (o) {
                      var n, s;
                      "string" == typeof o
                        ? ((s = r.actions.get(o)), (n = o))
                        : o.action &&
                          ((s = r.actions.get(o.action)), (n = o.action));
                      var a = e("<button/>")
                        .addClass("btn btn-default")
                        .attr("title", o.label || t.msg._(s.help))
                        .append(
                          e("<i/>")
                            .addClass(
                              o.icon ||
                                (s || { icon: "fa-exclamation-triangle" }).icon
                            )
                            .addClass("fa")
                        );
                      if (o.label) {
                        var l = e("<span/>")
                          .text(t.msg._(o.label))
                          .addClass("toolbar-btn-label");
                        a.append(l);
                      }
                      var c = o.id;
                      void 0 !== c && a.attr("id", c),
                        a.attr("data-jupyter-action", n);
                      var d =
                        o.callback ||
                        function () {
                          r.actions.call(n);
                        };
                      a.click(d), i.append(a);
                    }),
                    e(this.selector).append(i),
                    i
                  );
                }
                var s;
                try {
                  (s = o.slice(1, -1)),
                    this.element.append(this._pseudo_actions[s].call(this));
                } catch (e) {
                  console.warn(
                    "ouch, calling ",
                    s,
                    "does not seem to work...:",
                    e
                  );
                }
              }),
              (o.prototype.style = function () {
                this.element.addClass("toolbar");
              }),
              (o.prototype.toggle = function () {
                this.element.toggle();
              }),
              {
                ToolBar: o,
                Button: function (e, t) {
                  (this.action = e), (this.label = (t || {}).label);
                },
              }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    97600: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(54499), o(34960)]),
        void 0 ===
          (r = function (e, t, o) {
            "use strict";
            var n = function (t) {
              var n = this;
              (this.events = t),
                (this.time_before_tooltip = 1200),
                (this.tooltip = e("#tooltip")),
                (this._hidden = !0),
                (this._old_cell = null),
                (this._old_request = null),
                (this._consecutive_counter = 0),
                (this._sticky = !1),
                (this._hide_if_no_docstring = !1),
                (this.buttons = e("<div/>").addClass("tooltipbuttons")),
                (this.text = e("<div/>")
                  .addClass("tooltiptext")
                  .addClass("smalltooltip"));
              var r = e("<a/>")
                  .attr("href", "#")
                  .attr("role", "button")
                  .addClass("ui-button")
                  .attr("id", "expanbutton")
                  .attr(
                    "title",
                    o.msg._(
                      "Grow the tooltip vertically (press shift-tab twice)"
                    )
                  )
                  .click(function () {
                    n.expand(), event.preventDefault();
                  })
                  .append(
                    e("<span/>")
                      .text("Expand")
                      .addClass("ui-icon")
                      .addClass("ui-icon-plus")
                  ),
                i = e("<a/>")
                  .attr("href", "#")
                  .attr("role", "button")
                  .addClass("ui-button")
                  .attr(
                    "title",
                    o.msg._(
                      "show the current docstring in pager (press shift-tab 4 times)"
                    )
                  ),
                s = e("<span/>")
                  .text(o.msg._("Open in Pager"))
                  .addClass("ui-icon")
                  .addClass("ui-icon-arrowstop-l-n");
              i.append(s),
                i.click(function () {
                  n.showInPager(n._old_cell), event.preventDefault();
                });
              var a = e("<a/>")
                  .attr("href", "#")
                  .attr("role", "button")
                  .addClass("ui-button"),
                l = e("<span/>")
                  .text(o.msg._("Close"))
                  .addClass("ui-icon")
                  .addClass("ui-icon-close");
              a.append(l),
                a.click(function () {
                  n.remove_and_cancel_tooltip(!0), event.preventDefault();
                }),
                (this._clocklink = e("<a/>").attr("href", "#")),
                this._clocklink.attr("role", "button"),
                this._clocklink.addClass("ui-button"),
                this._clocklink.attr(
                  "title",
                  o.msg._("Tooltip will linger for 10 seconds while you type")
                );
              var c = e("<span/>").text(o.msg._("Close"));
              c.addClass("ui-icon"),
                c.addClass("ui-icon-clock"),
                this._clocklink.append(c),
                this._clocklink.click(function () {
                  n.cancel_stick(), event.preventDefault();
                }),
                this.buttons.append(a),
                this.buttons.append(r),
                this.buttons.append(i),
                this.buttons.append(this._clocklink),
                this._clocklink.hide(),
                (this.arrow = e("<div/>").addClass("pretooltiparrow")),
                this.tooltip.append(this.buttons),
                this.tooltip.append(this.arrow),
                this.tooltip.append(this.text),
                (this.tabs_functions = [
                  function (e, t, o) {
                    n._request_tooltip(e, t, o);
                  },
                  function () {
                    n.expand();
                  },
                  function () {
                    n.stick();
                  },
                  function (e) {
                    n.cancel_stick(), n.showInPager(e);
                  },
                ]),
                (this.reset_tabs_function = function (e, t) {
                  (this._old_cell = e || null),
                    (this._old_request = t || null),
                    (this._consecutive_counter = 0);
                });
            };
            return (
              (n.prototype.is_visible = function () {
                return !this._hidden;
              }),
              (n.prototype.showInPager = function (e) {
                this.events.trigger(
                  "open_with_text.Pager",
                  this._reply.content
                ),
                  this.remove_and_cancel_tooltip();
              }),
              (n.prototype.expand = function () {
                this.text.removeClass("smalltooltip"),
                  this.text.addClass("bigtooltip"),
                  e("#expanbutton").hide("slow");
              }),
              (n.prototype._hide = function () {
                (this._hidden = !0),
                  this.tooltip.fadeOut("fast"),
                  e("#expanbutton").show("slow"),
                  this.text.removeClass("bigtooltip"),
                  this.text.addClass("smalltooltip"),
                  this.text.scrollTop(0),
                  (this.code_mirror = null);
              }),
              (n.prototype.remove_and_cancel_tooltip = function (e) {
                return (
                  this.cancel_pending(),
                  !this._hidden &&
                    ((!e && this._sticky) ||
                      (this.cancel_stick(), this._hide()),
                    this.reset_tabs_function(),
                    !0)
                );
              }),
              (n.prototype.cancel_pending = function () {
                null !== this._tooltip_timeout &&
                  (clearTimeout(this._tooltip_timeout),
                  (this._tooltip_timeout = null));
              }),
              (n.prototype.pending = function (e, t) {
                var o = this;
                this._tooltip_timeout = setTimeout(function () {
                  o.request(e, t);
                }, o.time_before_tooltip);
              }),
              (n.last_token_re = /[a-z_][0-9a-z._]*$/gi),
              (n.prototype._request_tooltip = function (t, o, n) {
                var r = e.proxy(this._show, this);
                t.kernel.inspect(o, n, r);
              }),
              (n.prototype.request = function (e, o) {
                this.cancel_pending();
                var n = e.code_mirror,
                  r = n.getCursor(),
                  i = e.get_text(),
                  s = t.js_idx_to_char_idx(n.indexFromPos(r), i);
                (this._hide_if_no_docstring = o),
                  n.somethingSelected() && (i = n.getSelection()),
                  (this.code_mirror = n),
                  this._old_cell == e &&
                  this._old_request == i &&
                  !1 === this._hidden
                    ? this._consecutive_counter++
                    : (this.cancel_stick(), this.reset_tabs_function(e, i)),
                  this.tabs_functions[this._consecutive_counter](e, i, s),
                  this._consecutive_counter == this.tabs_functions.length &&
                    this.reset_tabs_function(e, i, r);
              }),
              (n.prototype.cancel_stick = function () {
                clearTimeout(this._stick_timeout),
                  (this._stick_timeout = null),
                  this._clocklink.hide("slow"),
                  (this._sticky = !1);
              }),
              (n.prototype.stick = function (e) {
                e = void 0 !== e ? e : 10;
                var t = this;
                (this._sticky = !0),
                  this._clocklink.show("slow"),
                  (this._stick_timeout = setTimeout(function () {
                    (t._sticky = !1), t._clocklink.hide("slow");
                  }, 1e3 * e));
              }),
              (n.prototype._show = function (o) {
                this._reply = o;
                var n = o.content;
                if (n.found) {
                  this.name = n.name;
                  var r = e(this.code_mirror.getWrapperElement()).position(),
                    i = e(
                      this.code_mirror.getWrapperElement().offsetParent
                    ).position(),
                    s = this.code_mirror.cursorCoords(!1, "local"),
                    a = this.code_mirror.cursorCoords(!0, "local"),
                    l = (a.left + s.left) / 2,
                    c = Math.max(l - 450, 0),
                    d = l - c - 24,
                    u = i.left + r.left + c + "px",
                    p = i.top + r.top + a.bottom + 10 + "px";
                  !1 === this._hidden
                    ? this.tooltip.animate({ left: u, top: p })
                    : (this.tooltip.css({ left: u }),
                      this.tooltip.css({ top: p })),
                    this.arrow.animate({ left: d + "px" }),
                    (this._hidden = !1),
                    this.tooltip.fadeIn("fast"),
                    this.text.children().remove();
                  var h = e("<pre/>").html(t.fixConsole(n.data["text/plain"]));
                  this.text.append(h), this.text.scrollTop(0);
                }
              }),
              { Tooltip: n }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    18916: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(14425), o(34960)]),
        void 0 ===
          (r = function (e, t, o) {
            "use strict";
            var n = function (n, r) {
              var i = this;
              (this.notebook = n),
                (this.step_duration = 0),
                (this.events = r),
                (this.tour_steps = [
                  {
                    title: o.msg._("Welcome to the Notebook Tour"),
                    placement: "bottom",
                    orphan: !0,
                    content: o.msg._(
                      "You can use the left and right arrow keys to go backwards and forwards."
                    ),
                  },
                  {
                    element: "#notebook_name",
                    title: o.msg._("Filename"),
                    placement: "bottom",
                    content: o.msg._(
                      "Click here to change the filename for this notebook."
                    ),
                  },
                  {
                    element: e("#menus").parent(),
                    placement: "bottom",
                    title: o.msg._("Notebook Menubar"),
                    content: o.msg._(
                      "The menubar has menus for actions on the notebook, its cells, and the kernel it communicates with."
                    ),
                  },
                  {
                    element: "#maintoolbar",
                    placement: "bottom",
                    title: o.msg._("Notebook Toolbar"),
                    content: o.msg._(
                      "The toolbar has buttons for the most common actions. Hover your mouse over each button for more information."
                    ),
                  },
                  {
                    element: "#modal_indicator",
                    title: o.msg._("Mode Indicator"),
                    placement: "bottom",
                    content: o.msg._(
                      "The Notebook has two modes: Edit Mode and Command Mode. In this area, an indicator can appear to tell you which mode you are in."
                    ),
                    onShow: function (e) {
                      i.command_icon_hack();
                    },
                  },
                  {
                    element: "#modal_indicator",
                    title: o.msg._("Command Mode"),
                    placement: "bottom",
                    onShow: function (e) {
                      n.command_mode(), i.command_icon_hack();
                    },
                    onNext: function (e) {
                      i.edit_mode();
                    },
                    content: o.msg._(
                      "Right now you are in Command Mode, and many keyboard shortcuts are available. In this mode, no icon is displayed in the indicator area."
                    ),
                  },
                  {
                    element: "#modal_indicator",
                    title: o.msg._("Edit Mode"),
                    placement: "bottom",
                    onShow: function (e) {
                      i.edit_mode();
                    },
                    content: o.msg._(
                      "Pressing <code>Enter</code> or clicking in the input text area of the cell switches to Edit Mode."
                    ),
                  },
                  {
                    element: ".selected",
                    title: o.msg._("Edit Mode"),
                    placement: "bottom",
                    onShow: function (e) {
                      i.edit_mode();
                    },
                    content: o.msg._(
                      "Notice that the border around the currently active cell changed color. Typing will insert text into the currently active cell."
                    ),
                  },
                  {
                    element: ".selected",
                    title: o.msg._("Back to Command Mode"),
                    placement: "bottom",
                    onShow: function (e) {
                      n.command_mode();
                    },
                    content: o.msg._(
                      "Pressing <code>Esc</code> or clicking outside of the input text area takes you back to Command Mode."
                    ),
                  },
                  {
                    element: "#keyboard_shortcuts",
                    title: o.msg._("Keyboard Shortcuts"),
                    placement: "bottom",
                    onShow: function (t) {
                      e("#help_menu").parent().addClass("open"),
                        e("#help_menu").parent().addClass("pulse"),
                        e("#keyboard_shortcuts").addClass("pulse");
                    },
                    onHide: function (t) {
                      e("#help_menu").parent().removeClass("open pulse"),
                        e("#keyboard_shortcuts").removeClass("pulse");
                    },
                    content: o.msg._(
                      "You can click here to get a list of all of the keyboard shortcuts."
                    ),
                  },
                  {
                    element: "#kernel_indicator_icon",
                    title: o.msg._("Kernel Indicator"),
                    placement: "bottom",
                    onShow: function (e) {
                      r.trigger("kernel_idle.Kernel");
                    },
                    content: o.msg._(
                      "This is the Kernel indicator. It looks like this when the Kernel is idle."
                    ),
                  },
                  {
                    element: "#kernel_indicator_icon",
                    title: o.msg._("Kernel Indicator"),
                    placement: "bottom",
                    onShow: function (e) {
                      r.trigger("kernel_busy.Kernel");
                    },
                    content: o.msg._(
                      "The Kernel indicator looks like this when the Kernel is busy."
                    ),
                  },
                  {
                    element: ".fa-stop",
                    placement: "bottom",
                    title: o.msg._("Interrupting the Kernel"),
                    onHide: function (e) {
                      r.trigger("kernel_idle.Kernel");
                    },
                    content: o.msg._(
                      "To cancel a computation in progress, you can click here."
                    ),
                  },
                  {
                    element: "#notification_kernel",
                    placement: "bottom",
                    onShow: function (t) {
                      e(".fa-stop").click();
                    },
                    title: o.msg._("Notification Area"),
                    content: o.msg._(
                      "Messages in response to user actions (Save, Interrupt, etc.) appear here."
                    ),
                  },
                  {
                    title: o.msg._("End of Tour"),
                    placement: "bottom",
                    orphan: !0,
                    content: o.msg._(
                      "This concludes the Jupyter Notebook User Interface Tour."
                    ),
                  },
                ]),
                (this.tour = new t({
                  storage: !1,
                  debug: !0,
                  reflex: !0,
                  animation: !1,
                  duration: this.step_duration,
                  onStart: function () {
                    console.log("tour started");
                  },
                  onPause: this.toggle_pause_play,
                  onResume: this.toggle_pause_play,
                  steps: this.tour_steps,
                  template:
                    "<div class='popover tour'>\n<div class='arrow'></div>\n<div style='position:absolute; top:7px; right:7px'>\n<button class='btn btn-default btn-sm fa fa-times' data-role='end'></button>\n</div><h3 class='popover-title'></h3>\n<div class='popover-content'></div>\n<div class='popover-navigation'>\n<button class='btn btn-default fa fa-step-backward' data-role='prev'></button>\n<button class='btn btn-default fa fa-step-forward pull-right' data-role='next'></button>\n<button id='tour-pause' class='btn btn-sm btn-default fa fa-pause' data-resume-text='' data-pause-text='' data-role='pause-resume'></button>\n</div>\n</div>",
                  orphan: !0,
                }));
            };
            return (
              (n.prototype.start = function () {
                console.log("let's start the tour"),
                  this.tour.init(),
                  this.tour.start(),
                  this.tour.ended() && this.tour.restart();
              }),
              (n.prototype.command_icon_hack = function () {
                e("#modal_indicator").css("min-height", "18px");
              }),
              (n.prototype.toggle_pause_play = function () {
                e("#tour-pause").toggleClass("fa-pause fa-play");
              }),
              (n.prototype.edit_mode = function () {
                this.notebook.focus_cell(), this.notebook.edit_mode();
              }),
              { Tour: n }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    51475: (e, t, o) => {
      var n, r;
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          i(e)
        );
      }
      function s() {
        "use strict";
        s = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          o = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          a = n.asyncIterator || "@@asyncIterator",
          l = n.toStringTag || "@@toStringTag";
        function c(e, t, o) {
          return (
            Object.defineProperty(e, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (e) {
          c = function (e, t, o) {
            return (e[t] = o);
          };
        }
        function d(e, t, o, n) {
          var r = t && t.prototype instanceof h ? t : h,
            i = Object.create(r.prototype),
            s = new j(n || []);
          return (
            (i._invoke = (function (e, t, o) {
              var n = "suspendedStart";
              return function (r, i) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === r) throw i;
                  return { value: void 0, done: !0 };
                }
                for (o.method = r, o.arg = i; ; ) {
                  var s = o.delegate;
                  if (s) {
                    var a = w(s, o);
                    if (a) {
                      if (a === p) continue;
                      return a;
                    }
                  }
                  if ("next" === o.method) o.sent = o._sent = o.arg;
                  else if ("throw" === o.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), o.arg);
                    o.dispatchException(o.arg);
                  } else "return" === o.method && o.abrupt("return", o.arg);
                  n = "executing";
                  var l = u(e, t, o);
                  if ("normal" === l.type) {
                    if (
                      ((n = o.done ? "completed" : "suspendedYield"),
                      l.arg === p)
                    )
                      continue;
                    return { value: l.arg, done: o.done };
                  }
                  "throw" === l.type &&
                    ((n = "completed"), (o.method = "throw"), (o.arg = l.arg));
                }
              };
            })(e, o, s)),
            i
          );
        }
        function u(e, t, o) {
          try {
            return { type: "normal", arg: e.call(t, o) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = d;
        var p = {};
        function h() {}
        function _() {}
        function m() {}
        var f = {};
        c(f, r, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(E([])));
        b && b !== t && o.call(b, r) && (f = b);
        var v = (m.prototype = h.prototype = Object.create(f));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function k(e, t) {
          function n(r, s, a, l) {
            var c = u(e[r], e, s);
            if ("throw" !== c.type) {
              var d = c.arg,
                p = d.value;
              return p && "object" == i(p) && o.call(p, "__await")
                ? t.resolve(p.__await).then(
                    function (e) {
                      n("next", e, a, l);
                    },
                    function (e) {
                      n("throw", e, a, l);
                    }
                  )
                : t.resolve(p).then(
                    function (e) {
                      (d.value = e), a(d);
                    },
                    function (e) {
                      return n("throw", e, a, l);
                    }
                  );
            }
            l(c.arg);
          }
          var r;
          this._invoke = function (e, o) {
            function i() {
              return new t(function (t, r) {
                n(e, o, t, r);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function w(e, t) {
          var o = e.iterator[t.method];
          if (void 0 === o) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                w(e, t),
                "throw" === t.method)
              )
                return p;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return p;
          }
          var n = u(o, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), p
            );
          var r = n.arg;
          return r
            ? r.done
              ? ((t[e.resultName] = r.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                p)
              : r
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              p);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function C(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function E(e) {
          if (e) {
            var t = e[r];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                i = function t() {
                  for (; ++n < e.length; )
                    if (o.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (i.next = i);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (_.prototype = m),
          c(v, "constructor", m),
          c(m, "constructor", _),
          (_.displayName = c(m, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === _ || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), c(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(v)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(k.prototype),
          c(k.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = k),
          (e.async = function (t, o, n, r, i) {
            void 0 === i && (i = Promise);
            var s = new k(d(t, o, n, r), i);
            return e.isGeneratorFunction(o)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          y(v),
          c(v, l, "Generator"),
          c(v, r, function () {
            return this;
          }),
          c(v, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var o in e) t.push(o);
            return (
              t.reverse(),
              function o() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (o.value = n), (o.done = !1), o;
                }
                return (o.done = !0), o;
              }
            );
          }),
          (e.values = E),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(C),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    o.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(o, n) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = o),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  s = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var a = o.call(i, "catchLoc"),
                    l = o.call(i, "finallyLoc");
                  if (a && l) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (a) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  o.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var s = i ? i.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), p)
                  : this.complete(s)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                p
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var o = this.tryEntries[t];
                if (o.finallyLoc === e)
                  return this.complete(o.completion, o.afterLoc), C(o), p;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var o = this.tryEntries[t];
                if (o.tryLoc === e) {
                  var n = o.completion;
                  if ("throw" === n.type) {
                    var r = n.arg;
                    C(o);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, o) {
              return (
                (this.delegate = { iterator: E(e), resultName: t, nextLoc: o }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          e
        );
      }
      function a(e, t, o, n, r, i, s) {
        try {
          var a = e[i](s),
            l = a.value;
        } catch (e) {
          return void o(e);
        }
        a.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      function l(e) {
        return function () {
          var t = this,
            o = arguments;
          return new Promise(function (n, r) {
            var i = e.apply(t, o);
            function s(e) {
              a(i, n, r, s, l, "next", e);
            }
            function l(e) {
              a(i, n, r, s, l, "throw", e);
            }
            s(void 0);
          });
        };
      }
      (n = [o(19755), o(54499)]),
        void 0 ===
          (r = function (e, t) {
            "use strict";
            var o = function (e, t) {
              (this.section_name = e),
                (this.base_url = t.base_url),
                (this.data = {});
              var o = this;
              (this._one_load_finished = !1),
                (this.loaded = new Promise(function (e, t) {
                  o._finish_firstload = e;
                }));
            };
            (o.prototype.api_url = function () {
              return t.url_path_join(
                this.base_url,
                "api/config",
                t.encode_uri_components(this.section_name)
              );
            }),
              (o.prototype._load_done = function () {
                this._one_load_finished ||
                  ((this._one_load_finished = !0), this._finish_firstload());
              }),
              (o.prototype.load = l(
                s().mark(function e() {
                  var t;
                  return s().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              ((t = this).data = {}),
                              "api/config/rise" === this.api_url() &&
                                (t.data = {
                                  scroll: !0,
                                  enable_chalkboard: !0,
                                }),
                              t._load_done(),
                              e.abrupt("return", t.data)
                            );
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              (o.prototype.update = function (t) {
                e.extend(!0, this.data, t);
              });
            var n = function (e, t, o) {
              (this.section = e), (this.defaults = t), (this.classname = o);
            };
            return (
              (n.prototype._class_data = function () {
                return this.classname
                  ? this.section.data[this.classname] || {}
                  : this.section.data;
              }),
              (n.prototype.get = function (e) {
                var t = this;
                return this.section.loaded.then(function () {
                  return t.get_sync(e);
                });
              }),
              (n.prototype.get_sync = function (t) {
                var o = this._class_data();
                if (void 0 === t) return e.extend(!0, {}, this.defaults, o);
                var n = o[t];
                return void 0 !== n
                  ? "object" == i(n)
                    ? e.extend(!0, {}, this.defaults[t], n)
                    : n
                  : this.defaults[t];
              }),
              (n.prototype.set = function (e, t) {
                var o = {};
                if (((o[e] = t), this.classname)) {
                  var n = {};
                  return (n[this.classname] = o), this.section.update(n);
                }
                return this.section.update(o);
              }),
              { ConfigSection: o, ConfigWithDefaults: n }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    7041: (e, t, o) => {
      var n, r;
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          i(e)
        );
      }
      function s() {
        "use strict";
        s = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          o = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          a = n.asyncIterator || "@@asyncIterator",
          l = n.toStringTag || "@@toStringTag";
        function c(e, t, o) {
          return (
            Object.defineProperty(e, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (e) {
          c = function (e, t, o) {
            return (e[t] = o);
          };
        }
        function d(e, t, o, n) {
          var r = t && t.prototype instanceof h ? t : h,
            i = Object.create(r.prototype),
            s = new j(n || []);
          return (
            (i._invoke = (function (e, t, o) {
              var n = "suspendedStart";
              return function (r, i) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === r) throw i;
                  return { value: void 0, done: !0 };
                }
                for (o.method = r, o.arg = i; ; ) {
                  var s = o.delegate;
                  if (s) {
                    var a = w(s, o);
                    if (a) {
                      if (a === p) continue;
                      return a;
                    }
                  }
                  if ("next" === o.method) o.sent = o._sent = o.arg;
                  else if ("throw" === o.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), o.arg);
                    o.dispatchException(o.arg);
                  } else "return" === o.method && o.abrupt("return", o.arg);
                  n = "executing";
                  var l = u(e, t, o);
                  if ("normal" === l.type) {
                    if (
                      ((n = o.done ? "completed" : "suspendedYield"),
                      l.arg === p)
                    )
                      continue;
                    return { value: l.arg, done: o.done };
                  }
                  "throw" === l.type &&
                    ((n = "completed"), (o.method = "throw"), (o.arg = l.arg));
                }
              };
            })(e, o, s)),
            i
          );
        }
        function u(e, t, o) {
          try {
            return { type: "normal", arg: e.call(t, o) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = d;
        var p = {};
        function h() {}
        function _() {}
        function m() {}
        var f = {};
        c(f, r, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(E([])));
        b && b !== t && o.call(b, r) && (f = b);
        var v = (m.prototype = h.prototype = Object.create(f));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function k(e, t) {
          function n(r, s, a, l) {
            var c = u(e[r], e, s);
            if ("throw" !== c.type) {
              var d = c.arg,
                p = d.value;
              return p && "object" == i(p) && o.call(p, "__await")
                ? t.resolve(p.__await).then(
                    function (e) {
                      n("next", e, a, l);
                    },
                    function (e) {
                      n("throw", e, a, l);
                    }
                  )
                : t.resolve(p).then(
                    function (e) {
                      (d.value = e), a(d);
                    },
                    function (e) {
                      return n("throw", e, a, l);
                    }
                  );
            }
            l(c.arg);
          }
          var r;
          this._invoke = function (e, o) {
            function i() {
              return new t(function (t, r) {
                n(e, o, t, r);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function w(e, t) {
          var o = e.iterator[t.method];
          if (void 0 === o) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                w(e, t),
                "throw" === t.method)
              )
                return p;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return p;
          }
          var n = u(o, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), p
            );
          var r = n.arg;
          return r
            ? r.done
              ? ((t[e.resultName] = r.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                p)
              : r
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              p);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function C(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function E(e) {
          if (e) {
            var t = e[r];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                i = function t() {
                  for (; ++n < e.length; )
                    if (o.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (i.next = i);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (_.prototype = m),
          c(v, "constructor", m),
          c(m, "constructor", _),
          (_.displayName = c(m, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === _ || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), c(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(v)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(k.prototype),
          c(k.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = k),
          (e.async = function (t, o, n, r, i) {
            void 0 === i && (i = Promise);
            var s = new k(d(t, o, n, r), i);
            return e.isGeneratorFunction(o)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          y(v),
          c(v, l, "Generator"),
          c(v, r, function () {
            return this;
          }),
          c(v, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var o in e) t.push(o);
            return (
              t.reverse(),
              function o() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (o.value = n), (o.done = !1), o;
                }
                return (o.done = !0), o;
              }
            );
          }),
          (e.values = E),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(C),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    o.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(o, n) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = o),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  s = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var a = o.call(i, "catchLoc"),
                    l = o.call(i, "finallyLoc");
                  if (a && l) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (a) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  o.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var s = i ? i.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), p)
                  : this.complete(s)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                p
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var o = this.tryEntries[t];
                if (o.finallyLoc === e)
                  return this.complete(o.completion, o.afterLoc), C(o), p;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var o = this.tryEntries[t];
                if (o.tryLoc === e) {
                  var n = o.completion;
                  if ("throw" === n.type) {
                    var r = n.arg;
                    C(o);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, o) {
              return (
                (this.delegate = { iterator: E(e), resultName: t, nextLoc: o }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          e
        );
      }
      function a(e, t, o, n, r, i, s) {
        try {
          var a = e[i](s),
            l = a.value;
        } catch (e) {
          return void o(e);
        }
        a.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      (n = [o(19755), o(54499)]),
        void 0 ===
          (r = function (e, t) {
            "use strict";
            var o = function (e) {
              this.base_url = e.base_url;
            };
            return (
              (o.DIRECTORY_NOT_EMPTY_ERROR = "DirectoryNotEmptyError"),
              ((o.DirectoryNotEmptyError = function () {
                this.message =
                  "A directory must be empty before being deleted.";
              }).prototype = Object.create(Error.prototype)),
              (o.DirectoryNotEmptyError.prototype.name =
                o.DIRECTORY_NOT_EMPTY_ERROR),
              (o.prototype.api_url = function () {
                var e = [
                  this.base_url,
                  "api/contents",
                  t.url_join_encode.apply(null, arguments),
                ];
                return t.url_path_join.apply(null, e);
              }),
              (o.prototype.create_basic_error_handler = function (e) {
                return e
                  ? function (o, n, r) {
                      e(t.wrap_ajax_error(o, n, r));
                    }
                  : t.log_ajax_error;
              }),
              (o.prototype.get = function (o, n) {
                if ("notebook" === n.type) return this.get_untitled(o, n);
                var r = this.api_url(o),
                  i = {};
                return (
                  n.type && (i.type = n.type),
                  n.format && (i.format = n.format),
                  !1 === n.content && (i.content = "0"),
                  t.promising_ajax(r + "?" + e.param(i), {
                    processData: !1,
                    cache: !1,
                    type: "GET",
                    dataType: "json",
                    beforeSend: function (e) {
                      return e.overrideMimeType("application/json");
                    },
                  })
                );
              }),
              (o.prototype.get_untitled = (function () {
                var e,
                  t =
                    ((e = s().mark(function e(t, o) {
                      var n, r, i, a;
                      return s().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = window.Jupyter.kernelselector),
                                (e.next = 3),
                                n.loaded
                              );
                            case 3:
                              return (
                                (r = window.basthonLanguage),
                                (i =
                                  {
                                    python3: "ipython",
                                    "python3-old": "ipython",
                                    sql: "text/x-sqlite",
                                    javascript: "text/javascript",
                                    ocaml: "text/x-ocaml",
                                  }[r] || r),
                                (a = n.kernelspecs[r].spec),
                                e.abrupt("return", {
                                  cells: [
                                    {
                                      cell_type: "code",
                                      execution_count: null,
                                      metadata: {},
                                      outputs: [],
                                    },
                                  ],
                                  metadata: {
                                    kernelspec: {
                                      display_name: a.display_name,
                                      language: a.language,
                                      name: r,
                                    },
                                    language_info: {
                                      codemirror_mode: { name: i, version: 3 },
                                      name: a.language,
                                      nbconvert_exporter: a.language,
                                    },
                                  },
                                  nbformat: 4,
                                  nbformat_minor: 2,
                                  name: "Untitled.ipynb",
                                  path: "Untitled.ipynb",
                                })
                              );
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })),
                    function () {
                      var t = this,
                        o = arguments;
                      return new Promise(function (n, r) {
                        var i = e.apply(t, o);
                        function s(e) {
                          a(i, n, r, s, l, "next", e);
                        }
                        function l(e) {
                          a(i, n, r, s, l, "throw", e);
                        }
                        s(void 0);
                      });
                    });
                return function (e, o) {
                  return t.apply(this, arguments);
                };
              })()),
              (o.prototype.new_untitled = function (e, t) {}),
              (o.prototype.delete = function (e) {
                var n = this.api_url(e);
                return t
                  .promising_ajax(n, {
                    processData: !1,
                    type: "DELETE",
                    dataType: "json",
                  })
                  .catch(function (e) {
                    if (400 === e.xhr.status)
                      throw new o.DirectoryNotEmptyError();
                    throw e;
                  });
              }),
              (o.prototype.rename = function (e, o) {
                var n = { path: o },
                  r = (JSON.stringify(n), t.url_path_split(o)),
                  i = {
                    path: o,
                    name: r[r.length - 1],
                    last_modified: Date.now(),
                  };
                return Promise.resolve(i);
              }),
              (o.prototype.trust = function (e) {
                var o = this.api_url(e, "trust");
                return t.promising_ajax(o, {
                  processData: !1,
                  type: "POST",
                  contentType: "application/json",
                });
              }),
              (o.prototype.save = function (e, o) {
                var n = {
                    processData: !1,
                    type: "PUT",
                    dataType: "json",
                    data: JSON.stringify(o),
                    contentType: "application/json",
                  },
                  r = this.api_url(e);
                return t.promising_ajax(r, n);
              }),
              (o.prototype.copy = function (e, o) {
                var n = this.api_url(o),
                  r = {
                    processData: !1,
                    type: "POST",
                    data: JSON.stringify({ copy_from: e }),
                    contentType: "application/json",
                    dataType: "json",
                  };
                return t.promising_ajax(n, r);
              }),
              (o.prototype.create_checkpoint = function (e) {
                var o = this.api_url(e, "checkpoints");
                return t.promising_ajax(o, {
                  type: "POST",
                  contentType: !1,
                  dataType: "json",
                });
              }),
              (o.prototype.list_checkpoints = function (e) {
                var o = this.api_url(e, "checkpoints");
                return t.promising_ajax(o, {
                  type: "GET",
                  cache: !1,
                  dataType: "json",
                  beforeSend: function (e) {
                    return e.overrideMimeType("application/json");
                  },
                });
              }),
              (o.prototype.restore_checkpoint = function (e, o) {
                var n = this.api_url(e, "checkpoints", o);
                return t.promising_ajax(n, { type: "POST", contentType: !1 });
              }),
              (o.prototype.delete_checkpoint = function (e, o) {
                var n = this.api_url(e, "checkpoints", o);
                return t.promising_ajax(n, { type: "DELETE" });
              }),
              (o.prototype.list_contents = function (e) {
                return this.get(e, { type: "directory" });
              }),
              { Contents: o }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    95813: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(54499)]),
        void 0 ===
          (r = function (e, t) {
            "use strict";
            var o = function (e) {
              (this.comms = {}),
                (this.targets = {}),
                void 0 !== e && this.init_kernel(e);
            };
            (o.prototype.init_kernel = function (t) {
              this.kernel = t;
              for (
                var o = ["comm_open", "comm_msg", "comm_close"], n = 0;
                n < o.length;
                n++
              ) {
                var r = o[n];
                t.register_iopub_handler(r, e.proxy(this[r], this));
              }
            }),
              (o.prototype.new_comm = function (e, t, o, r, i, s) {
                var a = new n(e, i);
                return this.register_comm(a), a.open(t, o, r, s), a;
              }),
              (o.prototype.register_target = function (e, t) {
                this.targets[e] = t;
              }),
              (o.prototype.unregister_target = function (e, t) {
                delete this.targets[e];
              }),
              (o.prototype.register_comm = function (e) {
                return (
                  (this.comms[e.comm_id] = Promise.resolve(e)),
                  (e.kernel = this.kernel),
                  e.comm_id
                );
              }),
              (o.prototype.unregister_comm = function (e) {
                delete this.comms[e.comm_id];
              }),
              (o.prototype.comm_open = function (e) {
                var o = e.content,
                  r = this,
                  i = o.comm_id;
                return (
                  (this.comms[i] = t
                    .load_class(o.target_name, o.target_module, this.targets)
                    .then(function (s) {
                      var a = new n(o.target_name, i);
                      a.kernel = r.kernel;
                      try {
                        var l = s(a, e);
                      } catch (e) {
                        a.close(), r.unregister_comm(a);
                        var c = new t.WrappedError(
                          "Exception opening new comm",
                          e
                        );
                        return console.error(c), Promise.reject(c);
                      }
                      return Promise.resolve(l).then(function () {
                        return a;
                      });
                    }, t.reject("Could not open comm", !0))),
                  this.comms[i]
                );
              }),
              (o.prototype.comm_close = function (e) {
                var t = e.content;
                if (void 0 !== this.comms[t.comm_id]) {
                  var o = this;
                  return (
                    (this.comms[t.comm_id] = this.comms[t.comm_id].then(
                      function (t) {
                        o.unregister_comm(t);
                        try {
                          t.handle_close(e);
                        } catch (t) {
                          console.log(
                            "Exception closing comm: ",
                            t,
                            t.stack,
                            e
                          );
                        }
                      }
                    )),
                    this.comms[t.comm_id]
                  );
                }
                console.error(
                  "Comm promise not found for comm id " + t.comm_id
                );
              }),
              (o.prototype.comm_msg = function (e) {
                var o = e.content;
                if (void 0 !== this.comms[o.comm_id])
                  return (
                    (this.comms[o.comm_id] = this.comms[o.comm_id].then(
                      function (o) {
                        return Promise.resolve(o.handle_msg(e))
                          .catch(t.reject("Exception handling comm message"))
                          .then(function () {
                            return o;
                          });
                      }
                    )),
                    this.comms[o.comm_id]
                  );
                console.error(
                  "Comm promise not found for comm id " + o.comm_id
                );
              });
            var n = function (e, o) {
              (this.target_name = e),
                (this.comm_id = o || t.uuid()),
                (this._msg_callback = this._close_callback = null);
            };
            return (
              (n.prototype.open = function (e, t, o, n) {
                var r = {
                  comm_id: this.comm_id,
                  target_name: this.target_name,
                  data: e || {},
                };
                return this.kernel.send_shell_message("comm_open", r, t, o, n);
              }),
              (n.prototype.send = function (e, t, o, n) {
                var r = { comm_id: this.comm_id, data: e || {} };
                return this.kernel.send_shell_message("comm_msg", r, t, o, n);
              }),
              (n.prototype.close = function (e, t, o, n) {
                var r = { comm_id: this.comm_id, data: e || {} };
                return this.kernel.send_shell_message("comm_close", r, t, o, n);
              }),
              (n.prototype._register_callback = function (e, t) {
                this["_" + e + "_callback"] = t;
              }),
              (n.prototype.on_msg = function (e) {
                this._register_callback("msg", e);
              }),
              (n.prototype.on_close = function (e) {
                this._register_callback("close", e);
              }),
              (n.prototype._callback = function (e, t) {
                var o = this["_" + e + "_callback"];
                if (o)
                  try {
                    return o(t);
                  } catch (e) {
                    console.log("Exception in Comm callback", e, e.stack, t);
                  }
              }),
              (n.prototype.handle_msg = function (e) {
                return this._callback("msg", e);
              }),
              (n.prototype.handle_close = function (e) {
                this._callback("close", e);
              }),
              { CommManager: o, Comm: n }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    36343: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(54499), o(95813), o(96251), o(10267), o(99016)]),
        void 0 ===
          (r = function (e, t, o, n, r, i) {
            "use strict";
            var s = function (e, n, s, a) {
              (this.events = r),
                (this.basthonKernelAvailable = a),
                (this.id = null),
                (this.name = s),
                (this.ws = null),
                (this._stopping = !1),
                (this.kernel_service_url = e),
                (this.kernel_url = null),
                (this.ws_url = n || t.get_body_data("wsUrl")),
                this.ws_url ||
                  (this.ws_url =
                    location.protocol.replace("http", "ws") +
                    "//" +
                    location.host),
                (this.username = "username"),
                (this.session_id = t.uuid()),
                (this._msg_callbacks = {}),
                (this._msg_callbacks_overrides = {}),
                (this._display_id_to_parent_ids = {}),
                (this._msg_queue = Promise.resolve()),
                (this.info_reply = {}),
                "undefined" != typeof WebSocket
                  ? (this.WebSocket = WebSocket)
                  : "undefined" != typeof MozWebSocket
                  ? (this.WebSocket = MozWebSocket)
                  : alert(
                      "Your browser does not have WebSocket support, please try Chrome, Safari or Firefox ≥ 6. Firefox 4 and 5 are also supported by you have to enable WebSockets in about:config."
                    ),
                (this.WebSocket = i.BasthonWebSocket),
                this.bind_events(),
                this.init_iopub_handlers(),
                (this.comm_manager = new o.CommManager(this)),
                (this.last_msg_id = null),
                (this.last_msg_callbacks = {}),
                (this._autorestart_attempt = 0),
                (this._reconnect_attempt = 0),
                (this.reconnect_limit = 7),
                (this._pending_messages = []);
            };
            return (
              (s.prototype._get_msg = function (e, o, n, r) {
                return {
                  header: {
                    msg_id: t.uuid(),
                    username: this.username,
                    session: this.session_id,
                    msg_type: e,
                    version: "5.2",
                  },
                  metadata: n || {},
                  content: o,
                  buffers: r || [],
                  parent_header: {},
                };
              }),
              (s.prototype.bind_events = function () {
                var e = this;
                this.events.on("send_input_reply.Kernel", function (t, o) {
                  e.send_input_reply(o);
                });
                var t = function (e, t) {
                  console.log("Kernel: " + e.type + " (" + t.kernel.id + ")");
                };
                this.events.on("kernel_created.Kernel", t),
                  this.events.on("kernel_reconnecting.Kernel", t),
                  this.events.on("kernel_connected.Kernel", t),
                  this.events.on("kernel_starting.Kernel", t),
                  this.events.on("kernel_restarting.Kernel", t),
                  this.events.on("kernel_autorestarting.Kernel", t),
                  this.events.on("kernel_interrupting.Kernel", t),
                  this.events.on("kernel_disconnected.Kernel", t),
                  this.events.on("kernel_ready.Kernel", t),
                  this.events.on("kernel_killed.Kernel", t),
                  this.events.on("kernel_dead.Kernel", t),
                  this.events.on("kernel_ready.Kernel", function () {
                    e._autorestart_attempt = 0;
                  }),
                  this.events.on("kernel_connected.Kernel", function () {
                    e._reconnect_attempt = 0;
                  });
              }),
              (s.prototype.init_iopub_handlers = function () {
                var t = [
                  "stream",
                  "display_data",
                  "execute_result",
                  "error",
                  "update_display_data",
                ];
                (this._iopub_handlers = {}),
                  this.register_iopub_handler(
                    "status",
                    e.proxy(this._handle_status_message, this)
                  ),
                  this.register_iopub_handler(
                    "clear_output",
                    e.proxy(this._handle_clear_output, this)
                  ),
                  this.register_iopub_handler(
                    "execute_input",
                    e.proxy(this._handle_input_message, this)
                  );
                for (var o = 0; o < t.length; o++)
                  this.register_iopub_handler(
                    t[o],
                    e.proxy(this._handle_output_message, this)
                  );
              }),
              (s.prototype.list = function (e, o) {
                t.ajax(this.kernel_service_url, {
                  processData: !1,
                  cache: !1,
                  type: "GET",
                  dataType: "json",
                  success: e,
                  error: this._on_error(o),
                });
              }),
              (s.prototype.start = function (o, n, r) {
                var i = this.kernel_service_url,
                  s = e.param(o || {});
                "" !== s && (i = i + "?" + s),
                  this.events.trigger("kernel_starting.Kernel", {
                    kernel: this,
                  });
                var a = this;
                return (
                  t.ajax(i, {
                    processData: !1,
                    cache: !1,
                    type: "POST",
                    data: JSON.stringify({ name: this.name }),
                    contentType: "application/json",
                    dataType: "json",
                    success: this._on_success(function (e, t, o) {
                      a.events.trigger("kernel_created.Kernel", { kernel: a }),
                        a._kernel_created(e),
                        n && n(e, t, o);
                    }),
                    error: this._on_error(r),
                  }),
                  i
                );
              }),
              (s.prototype.get_info = function (e, o) {
                t.ajax(this.kernel_url, {
                  processData: !1,
                  cache: !1,
                  type: "GET",
                  dataType: "json",
                  success: this._on_success(e),
                  error: this._on_error(o),
                });
              }),
              (s.prototype.kill = function (e, o) {
                this.events.trigger("kernel_killed.Kernel", { kernel: this }),
                  this._kernel_dead(),
                  t.ajax(this.kernel_url, {
                    processData: !1,
                    cache: !1,
                    type: "DELETE",
                    dataType: "json",
                    success: this._on_success(e),
                    error: this._on_error(o),
                  });
              }),
              (s.prototype.interrupt = function (e, o) {
                this.events.trigger("kernel_interrupting.Kernel", {
                  kernel: this,
                });
                var n = this,
                  r = t.url_path_join(this.kernel_url, "interrupt");
                t.ajax(r, {
                  processData: !1,
                  cache: !1,
                  type: "POST",
                  contentType: !1,
                  dataType: "json",
                  success: this._on_success(function (t, o, r) {
                    n.kernel_info(), e && e(t, o, r);
                  }),
                  error: this._on_error(o),
                });
              }),
              (s.prototype.restart = function (e, o) {
                this.events.trigger("kernel_restarting.Kernel", {
                  kernel: this,
                }),
                  this.stop_channels(),
                  (this._msg_callbacks = {}),
                  (this._msg_callbacks_overrides = {}),
                  (this._display_id_to_parent_ids = {});
                var n = this,
                  r = t.url_path_join(this.kernel_url, "restart");
                t.ajax(r, {
                  processData: !1,
                  cache: !1,
                  type: "POST",
                  contentType: !1,
                  dataType: "json",
                  success: this._on_success(function (t, o, r) {
                    n.events.trigger("kernel_created.Kernel", { kernel: n }),
                      n._kernel_created(t),
                      e && e(t, o, r);
                  }),
                  error: this._on_error(function (e, t, r) {
                    n.events.trigger("kernel_failed_restart.Kernel", {
                      kernel: n,
                    }),
                      n._kernel_dead(),
                      o && o(e, t, r);
                  }),
                });
              }),
              (s.prototype.reconnect = function () {
                this.is_connected() && this.stop_channels(),
                  (this._reconnect_attempt = this._reconnect_attempt + 1),
                  this.events.trigger("kernel_reconnecting.Kernel", {
                    kernel: this,
                    attempt: this._reconnect_attempt,
                  }),
                  this.start_channels();
              }),
              (s.prototype._on_success = function (e) {
                var o = this;
                return function (n, r, i) {
                  n && ((o.id = n.id), (o.name = n.name)),
                    (o.kernel_url = t.url_path_join(
                      o.kernel_service_url,
                      encodeURIComponent(o.id)
                    )),
                    e && e(n, r, i);
                };
              }),
              (s.prototype._on_error = function (e) {
                return function (o, n, r) {
                  t.log_ajax_error(o, n, r), e && e(o, n, r);
                };
              }),
              (s.prototype._kernel_created = function (e) {
                (this.id = e.id),
                  (this.kernel_url = t.url_path_join(
                    this.kernel_service_url,
                    encodeURIComponent(this.id)
                  )),
                  this.start_channels();
              }),
              (s.prototype._kernel_connected = function () {
                for (
                  this.events.trigger("kernel_connected.Kernel", {
                    kernel: this,
                  });
                  this._pending_messages.length > 0;

                )
                  this.ws.send(this._pending_messages[0]),
                    this._pending_messages.shift();
                var e = this;
                this.kernel_info(function (t) {
                  (e.info_reply = t.content),
                    e.events.trigger("kernel_ready.Kernel", { kernel: e });
                });
              }),
              (s.prototype._kernel_dead = function () {
                this.stop_channels();
              }),
              (s.prototype.start_channels = function () {
                var o = this;
                this.stop_channels();
                var n = this.ws_url + this.kernel_url;
                console.log("Starting WebSockets:", n),
                  (this.ws = new this.WebSocket(
                    [
                      o.ws_url,
                      t.url_path_join(o.kernel_url, "channels"),
                      "?session_id=" + o.session_id,
                    ].join(""),
                    this.basthonKernelAvailable
                  ));
                var r = !1,
                  i = function (e) {
                    console.log("WebSocket closed unexpectedly", e),
                      r || ((r = !0), o._ws_closed(n, !1));
                  };
                (this.ws.onopen = e.proxy(this._ws_opened, this)),
                  (this.ws.onclose = function (e) {
                    console.log("WebSocket closed early", e),
                      r ||
                        ((r = !0),
                        o.get_info(
                          function () {
                            o._ws_closed(n, !1);
                          },
                          function () {
                            o.events.trigger("kernel_dead.Kernel", {
                              kernel: o,
                            }),
                              o._kernel_dead();
                          }
                        ));
                  }),
                  (this.ws.onerror = function (e) {
                    r || ((r = !0), o._ws_closed(n, !0));
                  }),
                  setTimeout(function () {
                    null === o.ws || o._stopping || (o.ws.onclose = i);
                  }, 1e3),
                  (this.ws.onmessage = e.proxy(this._handle_ws_message, this));
              }),
              (s.prototype._ws_opened = function (e) {
                this.is_connected() && this._kernel_connected();
              }),
              (s.prototype._ws_closed = function (e, t) {
                this.stop_channels(),
                  this.events.trigger("kernel_disconnected.Kernel", {
                    kernel: this,
                  }),
                  t &&
                    (console.log("WebSocket connection failed: ", e, t),
                    this.events.trigger("kernel_connection_failed.Kernel", {
                      kernel: this,
                      ws_url: e,
                      attempt: this._reconnect_attempt,
                      error: t,
                    })),
                  this._schedule_reconnect();
              }),
              (s.prototype._schedule_reconnect = function () {
                if (this._reconnect_attempt < this.reconnect_limit) {
                  var t = Math.pow(2, this._reconnect_attempt);
                  console.log(
                    "Connection lost, reconnecting in " + t + " seconds."
                  ),
                    setTimeout(e.proxy(this.reconnect, this), 1e3 * t);
                } else
                  this.events.trigger("kernel_connection_dead.Kernel", {
                    kernel: this,
                    reconnect_attempt: this._reconnect_attempt,
                  }),
                    console.log("Failed to reconnect, giving up.");
              }),
              (s.prototype.stop_channels = function () {
                var e = this,
                  t = function () {
                    (e._stopping = !1),
                      e.ws &&
                        e.ws.readyState === WebSocket.CLOSED &&
                        (e.ws = null);
                  };
                null !== this.ws &&
                  ((this._stopping = !0),
                  this.ws.readyState === WebSocket.OPEN
                    ? ((this.ws.onclose = t), this.ws.close())
                    : t());
              }),
              (s.prototype.is_connected = function () {
                return (
                  null !== this.ws && this.ws.readyState === WebSocket.OPEN
                );
              }),
              (s.prototype.is_fully_disconnected = function () {
                return null === this.ws;
              }),
              (s.prototype._send = function (e) {
                this.is_connected()
                  ? this.ws.send(e)
                  : this._pending_messages.push(e);
              }),
              (s.prototype.send_shell_message = function (e, t, o, r, i) {
                var s = this._get_msg(e, t, r, i);
                return (
                  (s.channel = "shell"),
                  this.set_callbacks_for_msg(s.header.msg_id, o),
                  this._send(n.serialize(s)),
                  s.header.msg_id
                );
              }),
              (s.prototype.kernel_info = function (e) {
                var t;
                return (
                  e && (t = { shell: { reply: e } }),
                  this.send_shell_message("kernel_info_request", {}, t)
                );
              }),
              (s.prototype.comm_info = function (e, t) {
                var o;
                t && (o = { shell: { reply: t } });
                var n = { target_name: e };
                return this.send_shell_message("comm_info_request", n, o);
              }),
              (s.prototype.inspect = function (e, t, o) {
                var n;
                o && (n = { shell: { reply: o } });
                var r = { code: e, cursor_pos: t, detail_level: 0 };
                return this.send_shell_message("inspect_request", r, n);
              }),
              (s.prototype.execute = function (t, o, n) {
                var r = {
                  code: t,
                  silent: !0,
                  store_history: !1,
                  user_expressions: {},
                  allow_stdin: !1,
                };
                return (
                  void 0 !== (o = o || {}).input && (r.allow_stdin = !0),
                  e.extend(!0, r, n),
                  this.events.trigger("execution_request.Kernel", {
                    kernel: this,
                    content: r,
                  }),
                  this.send_shell_message("execute_request", r, o)
                );
              }),
              (s.prototype.complete = function (e, t, o) {
                var n;
                o && (n = { shell: { reply: o } });
                var r = { code: e, cursor_pos: t };
                return this.send_shell_message("complete_request", r, n);
              }),
              (s.prototype.send_input_reply = function (e) {
                var t = { value: e };
                this.events.trigger("input_reply.Kernel", {
                  kernel: this,
                  content: t,
                });
                var o = this._get_msg("input_reply", t);
                return (
                  (o.channel = "stdin"),
                  this._send(n.serialize(o)),
                  o.header.msg_id
                );
              }),
              (s.prototype.register_iopub_handler = function (e, t) {
                this._iopub_handlers[e] = t;
              }),
              (s.prototype.get_iopub_handler = function (e) {
                return this._iopub_handlers[e];
              }),
              (s.prototype.get_callbacks_for_msg = function (e) {
                return e == this.last_msg_id
                  ? this.last_msg_callbacks
                  : this._msg_callbacks[e];
              }),
              (s.prototype.get_output_callbacks_for_msg = function (e) {
                return this.get_callbacks_for_msg(
                  this.get_output_callback_id(e)
                );
              }),
              (s.prototype.get_output_callback_id = function (e) {
                var t = e,
                  o = this._msg_callbacks_overrides[e];
                return o && o.length > 0 && (t = o[o.length - 1]), t;
              }),
              (s.prototype.clear_callbacks_for_msg = function (e) {
                if (void 0 !== this._msg_callbacks[e]) {
                  var t = this._msg_callbacks[e],
                    o = this;
                  if (!t) return;
                  t.display_ids.map(function (t) {
                    var n = o._display_id_to_parent_ids[t];
                    if (n) {
                      var r = n.indexOf(e);
                      if (-1 === r) return;
                      1 === n.length
                        ? delete o._display_id_to_parent_ids[t]
                        : (n.splice(r, 1),
                          (o._display_id_to_parent_ids[t] = n));
                    }
                  }),
                    delete this._msg_callbacks[e];
                }
              }),
              (s.prototype._finish_shell = function (e) {
                var t = this._msg_callbacks[e];
                void 0 !== t &&
                  ((t.shell_done = !0),
                  t.clear_on_done &&
                    t.iopub_done &&
                    this.clear_callbacks_for_msg(e));
              }),
              (s.prototype._finish_iopub = function (e) {
                var t = this._msg_callbacks[e];
                void 0 !== t &&
                  ((t.iopub_done = !0),
                  t.clear_on_done &&
                    t.shell_done &&
                    this.clear_callbacks_for_msg(e)),
                  this.events.trigger("finished_iopub.Kernel", {
                    kernel: this,
                    msg_id: e,
                  });
              }),
              (s.prototype.set_callbacks_for_msg = function (e, t, o) {
                var n = o || !0;
                if ((n && (this.last_msg_id = e), t)) {
                  var r =
                    (this._msg_callbacks[e] =
                    this.last_msg_callbacks =
                      {});
                  (r.shell = t.shell),
                    (r.iopub = t.iopub),
                    (r.input = t.input),
                    (r.clear_on_done = t.clear_on_done),
                    (r.shell_done = !t.shell),
                    (r.iopub_done = !t.iopub),
                    (r.display_ids = []),
                    void 0 === t.clear_on_done && (r.clear_on_done = !0);
                } else n && (this.last_msg_callbacks = {});
              }),
              (s.prototype.output_callback_overrides_push = function (e, t) {
                var o = this._msg_callbacks_overrides[e];
                o || (this._msg_callbacks_overrides[e] = o = []), o.push(t);
              }),
              (s.prototype.output_callback_overrides_pop = function (e) {
                var t = this._msg_callbacks_overrides[e];
                if (t) return t.pop();
                console.error(
                  "Popping callback overrides, but none registered",
                  e
                );
              }),
              (s.prototype._handle_ws_message = function (e) {
                var t = this;
                this._msg_queue = this._msg_queue
                  .then(function () {
                    return n.deserialize(e.data);
                  })
                  .then(function (e) {
                    return t._finish_ws_message(e);
                  })
                  .catch(function (e) {
                    console.error("Couldn't process kernel message", e);
                  });
              }),
              (s.prototype._finish_ws_message = function (e) {
                switch (e.channel) {
                  case "shell":
                    return this._handle_shell_reply(e);
                  case "iopub":
                    return this._handle_iopub_message(e);
                  case "stdin":
                    return this._handle_input_request(e);
                  default:
                    console.error("unrecognized message channel", e.channel, e);
                }
              }),
              (s.prototype._handle_shell_reply = function (e) {
                this.events.trigger("shell_reply.Kernel", {
                  kernel: this,
                  reply: e,
                });
                var t = this,
                  o = e.content,
                  n = (e.metadata, e.parent_header.msg_id),
                  r = this.get_callbacks_for_msg(n),
                  i = Promise.resolve();
                if (r && r.shell) {
                  var s = r.shell;
                  return (
                    this._finish_shell(n),
                    void 0 !== s.reply &&
                      (i = i.then(function () {
                        return s.reply(e);
                      })),
                    o.payload &&
                      s.payload &&
                      (i = i.then(function () {
                        return t._handle_payloads(o.payload, s.payload, e);
                      })),
                    i
                  );
                }
              }),
              (s.prototype._handle_payloads = function (e, t, o) {
                for (var n = [], r = e.length, i = 0; i < r; i++) {
                  var s = e[i],
                    a = t[s.source];
                  a && n.push(a(s, o));
                }
                return Promise.all(n);
              }),
              (s.prototype._handle_status_message = function (e) {
                var t = e.content.execution_state,
                  o = e.parent_header.msg_id,
                  n = this.get_callbacks_for_msg(o);
                if (n && n.iopub && n.iopub.status)
                  try {
                    n.iopub.status(e);
                  } catch (e) {
                    console.log("Exception in status msg handler", e, e.stack);
                  }
                if ("busy" === t)
                  this.events.trigger("kernel_busy.Kernel", { kernel: this });
                else if ("idle" === t)
                  this._finish_iopub(o),
                    this.events.trigger("kernel_idle.Kernel", { kernel: this });
                else if ("starting" === t) {
                  this.events.trigger("kernel_starting.Kernel", {
                    kernel: this,
                  });
                  var r = this;
                  this.kernel_info(function (e) {
                    (r.info_reply = e.content),
                      r.events.trigger("kernel_ready.Kernel", { kernel: r });
                  });
                } else
                  "restarting" === t
                    ? ((this._autorestart_attempt =
                        this._autorestart_attempt + 1),
                      this.events.trigger("kernel_restarting.Kernel", {
                        kernel: this,
                      }),
                      this.events.trigger("kernel_autorestarting.Kernel", {
                        kernel: this,
                        attempt: this._autorestart_attempt,
                      }))
                    : "dead" === t &&
                      (this.events.trigger("kernel_dead.Kernel", {
                        kernel: this,
                      }),
                      this._kernel_dead());
              }),
              (s.prototype._handle_clear_output = function (e) {
                var t = this.get_output_callbacks_for_msg(
                  e.parent_header.msg_id
                );
                if (t && t.iopub) {
                  var o = t.iopub.clear_output;
                  o && o(e);
                }
              }),
              (s.prototype._handle_output_message = function (t) {
                var o = this,
                  n = t.parent_header.msg_id,
                  r = this.get_output_callbacks_for_msg(n);
                if (
                  [
                    "display_data",
                    "update_display_data",
                    "execute_result",
                  ].indexOf(t.header.msg_type) > -1
                ) {
                  var i = (t.content.transient || {}).display_id;
                  if (i) {
                    var s = this._display_id_to_parent_ids[i];
                    if (s) {
                      var a = e.extend(!0, {}, t);
                      (a.header.msg_type = "update_display_data"),
                        s.map(function (e) {
                          var t = o.get_callbacks_for_msg(e);
                          if (t) {
                            var n = t.iopub.output;
                            n && n(a);
                          }
                        });
                    }
                    if ("update_display_data" === t.header.msg_type) return;
                    void 0 === this._display_id_to_parent_ids[i] &&
                      (this._display_id_to_parent_ids[i] = []);
                    var l = this.get_output_callback_id(n);
                    -1 === this._display_id_to_parent_ids[i].indexOf(l) &&
                      this._display_id_to_parent_ids[i].push(l),
                      r &&
                        -1 === r.display_ids.indexOf(i) &&
                        r.display_ids.push(i);
                  }
                }
                if (r && r.iopub) {
                  var c = r.iopub.output;
                  c && c(t);
                } else
                  this.events.trigger("received_unsolicited_message.Kernel", t);
              }),
              (s.prototype._handle_input_message = function (e) {
                this.get_callbacks_for_msg(e.parent_header.msg_id) ||
                  this.events.trigger("received_unsolicited_message.Kernel", e);
              }),
              (s.prototype._handle_iopub_message = function (e) {
                var t = this.get_iopub_handler(e.header.msg_type);
                if (void 0 !== t) return t(e);
              }),
              (s.prototype._handle_input_request = function (e) {
                var t = e.header;
                if ((e.content, e.metadata, "input_request" === t.msg_type)) {
                  var o = this.get_callbacks_for_msg(e.parent_header.msg_id);
                  o && o.input && o.input(e);
                } else console.log("Invalid input request!", e);
              }),
              { Kernel: s }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    96251: (e, t, o) => {
      var n, r;
      (n = [o(59050)]),
        void 0 ===
          (r = function (e) {
            "use strict";
            var t = function (e) {
              var t,
                o = new DataView(e),
                n = o.getUint32(0),
                r = [];
              for (t = 1; t <= n; t++) r.push(o.getUint32(4 * t));
              var i,
                s,
                a = new Uint8Array(e.slice(r[0], r[1])),
                l = JSON.parse(new TextDecoder("utf8").decode(a));
              for (l.buffers = [], t = 1; t < n; t++)
                (i = r[t]),
                  (s = r[t + 1] || e.byteLength),
                  l.buffers.push(new DataView(e.slice(i, s)));
              return l;
            };
            return {
              deserialize: function (e) {
                return "string" == typeof e
                  ? Promise.resolve(JSON.parse(e))
                  : Promise.resolve(
                      (function (e) {
                        if (e instanceof Blob) {
                          var o = new FileReader(),
                            n = new Promise(function (e, n) {
                              o.onload = function () {
                                var o = t(this.result);
                                e(o);
                              };
                            });
                          return o.readAsArrayBuffer(e), n;
                        }
                        return t(e);
                      })(e)
                    );
              },
              serialize: function (t) {
                return t.buffers && t.buffers.length
                  ? (function (t) {
                      t = e.clone(t);
                      var o,
                        n = [],
                        r = [];
                      for (o = 0; o < t.buffers.length; o++) {
                        var i = t.buffers[o];
                        r.push(i.buffer instanceof ArrayBuffer ? i.buffer : i);
                      }
                      delete t.buffers;
                      var s = new TextEncoder("utf8").encode(JSON.stringify(t));
                      r.unshift(s);
                      var a = r.length;
                      for (n.push(4 * (a + 1)), o = 0; o + 1 < r.length; o++)
                        n.push(n[n.length - 1] + r[o].byteLength);
                      var l = new Uint8Array(
                          n[n.length - 1] + r[r.length - 1].byteLength
                        ),
                        c = new DataView(l.buffer);
                      for (c.setUint32(0, a), o = 0; o < n.length; o++)
                        c.setUint32(4 * (o + 1), n[o]);
                      for (o = 0; o < r.length; o++)
                        l.set(new Uint8Array(r[o]), n[o]);
                      return l.buffer;
                    })(t)
                  : JSON.stringify(t);
              },
            };
          }.apply(t, n)) || (e.exports = r);
    },
    73803: (e, t, o) => {
      var n, r;
      (n = [o(19755), o(54499), o(36343)]),
        void 0 ===
          (r = function (e, t, o) {
            "use strict";
            var n = function (e) {
              (this.id = null),
                (this.notebook_model = { path: e.notebook_path }),
                (this.kernel_model = { id: null, name: e.kernel_name }),
                (this.base_url = e.base_url),
                (this.ws_url = e.ws_url),
                (this.session_service_url = t.url_path_join(
                  this.base_url,
                  "api/sessions"
                )),
                (this.session_url = null),
                (this.notebook = e.notebook),
                (this.kernel = null),
                (this.events = e.notebook.events),
                this.bind_events();
            };
            (n.prototype.bind_events = function () {
              var e = this,
                t = function (e, t) {
                  console.log("Session: " + e.type + " (" + t.session.id + ")");
                };
              this.events.on("kernel_created.Session", t),
                this.events.on("kernel_dead.Session", t),
                this.events.on("kernel_killed.Session", t),
                this.events.on("kernel_dead.Kernel", function () {
                  e.delete();
                }),
                this.events.on("kernel_failed_restart.Kernel", function () {
                  e.notebook.start_session();
                });
            }),
              (n.prototype.list = function (e, o) {
                t.ajax(this.session_service_url, {
                  processData: !1,
                  cache: !1,
                  type: "GET",
                  dataType: "json",
                  success: e,
                  error: this._on_error(o),
                });
              }),
              (n.prototype.start = function (e, n) {
                var r = this;
                !(function (n, i, s) {
                  if (r.kernel) r.kernel.name = r.kernel_model.name;
                  else {
                    var a = t.url_path_join(r.base_url, "api/kernels"),
                      l = r.notebook.basthonGUI.kernelLoader.kernelAvailable();
                    r.kernel = new o.Kernel(
                      a,
                      r.ws_url,
                      r.kernel_model.name,
                      l
                    );
                  }
                  r.events.trigger("kernel_created.Session", {
                    session: r,
                    kernel: r.kernel,
                  }),
                    r.kernel._kernel_created(n.kernel),
                    e && e(n, null, null);
                })({ kernel: { id: 0 } });
              }),
              (n.prototype.get_info = function (e, o) {
                t.ajax(this.session_url, {
                  processData: !1,
                  cache: !1,
                  type: "GET",
                  dataType: "json",
                  success: this._on_success(e),
                  error: this._on_error(o),
                });
              }),
              (n.prototype.rename_notebook = function (e, o, n) {
                void 0 !== e && (this.notebook_model.path = e),
                  t.ajax(this.session_url, {
                    processData: !1,
                    cache: !1,
                    type: "PATCH",
                    data: JSON.stringify(this._get_model()),
                    contentType: "application/json",
                    dataType: "json",
                    success: this._on_success(o),
                    error: this._on_error(n),
                  });
              }),
              (n.prototype.delete = function (e, o) {
                this.kernel &&
                  this.kernel.is_connected() &&
                  (this.events.trigger("kernel_killed.Session", {
                    session: this,
                    kernel: this.kernel,
                  }),
                  this.kernel._kernel_dead()),
                  t.ajax(this.session_url, {
                    processData: !1,
                    cache: !1,
                    type: "DELETE",
                    dataType: "json",
                    success: this._on_success(e),
                    error: this._on_error(o),
                  });
              }),
              (n.prototype.restart = function (e, t, o) {
                var n = this,
                  r = function () {
                    e &&
                      e.notebook_path &&
                      (n.notebook_model.path = e.notebook_path),
                      e &&
                        e.kernel_name &&
                        (n.kernel_model.name = e.kernel_name),
                      (n.kernel_model.id = null),
                      n.start(t, o);
                  };
                this.delete(r, r);
              }),
              (n.prototype._get_model = function () {
                return {
                  path: this.notebook_model.path,
                  type: "notebook",
                  name: "",
                  kernel: this.kernel_model,
                };
              }),
              (n.prototype._update_model = function (e) {
                e &&
                  e.id &&
                  ((this.id = e.id),
                  (this.session_url = t.url_path_join(
                    this.session_service_url,
                    this.id
                  ))),
                  e && e.notebook && (this.notebook_model.path = e.path),
                  e &&
                    e.kernel &&
                    ((this.kernel_model.name = e.kernel.name),
                    (this.kernel_model.id = e.kernel.id));
              }),
              (n.prototype._on_success = function (e) {
                var t = this;
                return function (o, n, r) {
                  t._update_model(o), e && e(o, n, r);
                };
              }),
              (n.prototype._on_error = function (e) {
                return function (o, n, r) {
                  t.log_ajax_error(o, n, r), e && e(o, n, r);
                };
              });
            var r = function (e) {
              (this.name = "SessionAlreadyStarting"), (this.message = e || "");
            };
            return (
              (r.prototype = Error.prototype),
              { Session: n, SessionAlreadyStarting: r }
            );
          }.apply(t, n)) || (e.exports = r);
    },
    24259: (e, t, o) => {
      var n = {
        "./apl/apl.js": [29483, 9483],
        "./asciiarmor/asciiarmor.js": [95637, 5637],
        "./asn.1/asn.1.js": [97922, 7922],
        "./asterisk/asterisk.js": [31881, 1881],
        "./brainfuck/brainfuck.js": [9460, 9460],
        "./clike/clike.js": [99762, 9762],
        "./clojure/clojure.js": [63693, 3693],
        "./cmake/cmake.js": [33160, 3160],
        "./cobol/cobol.js": [65542, 5542],
        "./coffeescript/coffeescript.js": [90044, 44],
        "./commonlisp/commonlisp.js": [29073, 9073],
        "./crystal/crystal.js": [76149, 6149],
        "./css/css.js": [36629, 6629],
        "./cypher/cypher.js": [88441, 8441],
        "./d/d.js": [49570, 9570],
        "./dart/dart.js": [20842, 9762, 842],
        "./diff/diff.js": [1715, 1715],
        "./django/django.js": [75288, 6876, 6629, 5288],
        "./dockerfile/dockerfile.js": [75258, 5258],
        "./dtd/dtd.js": [70655, 655],
        "./dylan/dylan.js": [25184, 5184],
        "./ebnf/ebnf.js": [84134, 4134],
        "./ecl/ecl.js": [60427, 427],
        "./eiffel/eiffel.js": [34717, 4717],
        "./elm/elm.js": [78919, 8919],
        "./erlang/erlang.js": [76392, 6392],
        "./factor/factor.js": [27566, 7566],
        "./fcl/fcl.js": [15300, 5300],
        "./forth/forth.js": [88859, 8859],
        "./fortran/fortran.js": [44874, 4874],
        "./gas/gas.js": [28902, 8902],
        "./gfm/gfm.js": [42425],
        "./gherkin/gherkin.js": [85546, 5546],
        "./go/go.js": [94750, 4750],
        "./groovy/groovy.js": [53123, 3123],
        "./haml/haml.js": [20147, 6876, 6629, 147],
        "./handlebars/handlebars.js": [62101, 2101],
        "./haskell-literate/haskell-literate.js": [28510, 8510],
        "./haskell/haskell.js": [18176, 8176],
        "./haxe/haxe.js": [19889, 9889],
        "./htmlembedded/htmlembedded.js": [79820, 6876, 6629, 9820],
        "./htmlmixed/htmlmixed.js": [16531, 6876, 6629, 6531],
        "./http/http.js": [98411, 8411],
        "./idl/idl.js": [41797, 1797],
        "./javascript/javascript.js": [96876, 6876],
        "./jinja2/jinja2.js": [74670, 4670],
        "./jsx/jsx.js": [71548, 6876, 1548],
        "./julia/julia.js": [68059, 8059],
        "./livescript/livescript.js": [14373, 4373],
        "./lua/lua.js": [57745, 7745],
        "./markdown/markdown.js": [49047],
        "./mathematica/mathematica.js": [93672, 3672],
        "./mbox/mbox.js": [94377, 4377],
        "./meta.js": [52539],
        "./mirc/mirc.js": [94268, 4268],
        "./mllike/mllike.js": [52587, 5880],
        "./modelica/modelica.js": [24333, 4333],
        "./mscgen/mscgen.js": [68810, 8810],
        "./mumps/mumps.js": [12875, 2875],
        "./nginx/nginx.js": [10131, 131],
        "./nsis/nsis.js": [42313, 2313],
        "./ntriples/ntriples.js": [82954, 2954],
        "./octave/octave.js": [15734, 5734],
        "./oz/oz.js": [44323, 4323],
        "./pascal/pascal.js": [23057, 3057],
        "./pegjs/pegjs.js": [31472, 6876, 1472],
        "./perl/perl.js": [10024, 24],
        "./php/php.js": [36702, 6876, 6629, 9762, 6702],
        "./pig/pig.js": [54763, 4763],
        "./powershell/powershell.js": [97196, 7196],
        "./properties/properties.js": [7999, 7999],
        "./protobuf/protobuf.js": [72360, 2360],
        "./pug/pug.js": [75354, 6876, 6629, 5354],
        "./puppet/puppet.js": [20673, 673],
        "./python/python.js": [5321],
        "./q/q.js": [97713, 7713],
        "./r/r.js": [85420, 5420],
        "./rpm/rpm.js": [4344, 4344],
        "./rst/rst.js": [22968, 2968],
        "./ruby/ruby.js": [80853, 853],
        "./rust/rust.js": [90911, 911],
        "./sas/sas.js": [16229, 6229],
        "./sass/sass.js": [81201, 6629, 1201],
        "./scheme/scheme.js": [42372, 2372],
        "./shell/shell.js": [31149, 1149],
        "./sieve/sieve.js": [49311, 9311],
        "./slim/slim.js": [32486, 6876, 6629, 2486],
        "./smalltalk/smalltalk.js": [66690, 6690],
        "./smarty/smarty.js": [52889, 2889],
        "./solr/solr.js": [18715, 8715],
        "./soy/soy.js": [61527, 6876, 6629, 1527],
        "./sparql/sparql.js": [63982, 3982],
        "./spreadsheet/spreadsheet.js": [63138, 3138],
        "./sql/sql.js": [54086, 4086],
        "./stex/stex.js": [80785],
        "./stylus/stylus.js": [60742, 742],
        "./swift/swift.js": [37355, 7355],
        "./tcl/tcl.js": [25664, 5664],
        "./textile/textile.js": [43897, 3897],
        "./tiddlywiki/tiddlywiki.js": [91046, 1046],
        "./tiki/tiki.js": [17988, 7988],
        "./toml/toml.js": [47617, 7617],
        "./tornado/tornado.js": [66043, 6876, 6629, 6043],
        "./troff/troff.js": [20800, 800],
        "./ttcn-cfg/ttcn-cfg.js": [68923, 8923],
        "./ttcn/ttcn.js": [71105, 1105],
        "./turtle/turtle.js": [73556, 3556],
        "./twig/twig.js": [54702, 4702],
        "./vb/vb.js": [12660, 2660],
        "./vbscript/vbscript.js": [98073, 8073],
        "./velocity/velocity.js": [15912, 5912],
        "./verilog/verilog.js": [63249, 3249],
        "./vhdl/vhdl.js": [53140, 3140],
        "./vue/vue.js": [2426, 6876, 6629, 742, 5354, 2426],
        "./wast/wast.js": [8632, 8632],
        "./webidl/webidl.js": [11015, 1015],
        "./xml/xml.js": [29589],
        "./xquery/xquery.js": [61484, 1484],
        "./yacas/yacas.js": [65278, 5278],
        "./yaml-frontmatter/yaml-frontmatter.js": [98554, 8554],
        "./yaml/yaml.js": [53631, 3631],
        "./z80/z80.js": [22245, 2245],
      };
      function r(e) {
        if (!o.o(n, e))
          return Promise.resolve().then(() => {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = n[e],
          r = t[0];
        return Promise.all(t.slice(1).map(o.e)).then(() => o.t(r, 23));
      }
      (r.keys = () => Object.keys(n)), (r.id = 24259), (e.exports = r);
    },
    46700: (e, t, o) => {
      var n = {
        "./af": 42786,
        "./af.js": 42786,
        "./ar": 30867,
        "./ar-dz": 14130,
        "./ar-dz.js": 14130,
        "./ar-kw": 96135,
        "./ar-kw.js": 96135,
        "./ar-ly": 56440,
        "./ar-ly.js": 56440,
        "./ar-ma": 47702,
        "./ar-ma.js": 47702,
        "./ar-sa": 16040,
        "./ar-sa.js": 16040,
        "./ar-tn": 37100,
        "./ar-tn.js": 37100,
        "./ar.js": 30867,
        "./az": 31083,
        "./az.js": 31083,
        "./be": 9808,
        "./be.js": 9808,
        "./bg": 68338,
        "./bg.js": 68338,
        "./bm": 67438,
        "./bm.js": 67438,
        "./bn": 8905,
        "./bn-bd": 76225,
        "./bn-bd.js": 76225,
        "./bn.js": 8905,
        "./bo": 11560,
        "./bo.js": 11560,
        "./br": 1278,
        "./br.js": 1278,
        "./bs": 80622,
        "./bs.js": 80622,
        "./ca": 2468,
        "./ca.js": 2468,
        "./cs": 5822,
        "./cs.js": 5822,
        "./cv": 50877,
        "./cv.js": 50877,
        "./cy": 47373,
        "./cy.js": 47373,
        "./da": 24780,
        "./da.js": 24780,
        "./de": 59740,
        "./de-at": 60217,
        "./de-at.js": 60217,
        "./de-ch": 60894,
        "./de-ch.js": 60894,
        "./de.js": 59740,
        "./dv": 5300,
        "./dv.js": 5300,
        "./el": 50837,
        "./el.js": 50837,
        "./en-au": 78348,
        "./en-au.js": 78348,
        "./en-ca": 77925,
        "./en-ca.js": 77925,
        "./en-gb": 22243,
        "./en-gb.js": 22243,
        "./en-ie": 46436,
        "./en-ie.js": 46436,
        "./en-il": 47207,
        "./en-il.js": 47207,
        "./en-in": 44175,
        "./en-in.js": 44175,
        "./en-nz": 76319,
        "./en-nz.js": 76319,
        "./en-sg": 31662,
        "./en-sg.js": 31662,
        "./eo": 92915,
        "./eo.js": 92915,
        "./es": 55655,
        "./es-do": 55251,
        "./es-do.js": 55251,
        "./es-mx": 96112,
        "./es-mx.js": 96112,
        "./es-us": 71146,
        "./es-us.js": 71146,
        "./es.js": 55655,
        "./et": 5603,
        "./et.js": 5603,
        "./eu": 77763,
        "./eu.js": 77763,
        "./fa": 76959,
        "./fa.js": 76959,
        "./fi": 11897,
        "./fi.js": 11897,
        "./fil": 42549,
        "./fil.js": 42549,
        "./fo": 94694,
        "./fo.js": 94694,
        "./fr": 94470,
        "./fr-ca": 63049,
        "./fr-ca.js": 63049,
        "./fr-ch": 52330,
        "./fr-ch.js": 52330,
        "./fr.js": 94470,
        "./fy": 5044,
        "./fy.js": 5044,
        "./ga": 29295,
        "./ga.js": 29295,
        "./gd": 2101,
        "./gd.js": 2101,
        "./gl": 38794,
        "./gl.js": 38794,
        "./gom-deva": 27884,
        "./gom-deva.js": 27884,
        "./gom-latn": 23168,
        "./gom-latn.js": 23168,
        "./gu": 95349,
        "./gu.js": 95349,
        "./he": 24206,
        "./he.js": 24206,
        "./hi": 30094,
        "./hi.js": 30094,
        "./hr": 30316,
        "./hr.js": 30316,
        "./hu": 22138,
        "./hu.js": 22138,
        "./hy-am": 11423,
        "./hy-am.js": 11423,
        "./id": 29218,
        "./id.js": 29218,
        "./is": 90135,
        "./is.js": 90135,
        "./it": 90626,
        "./it-ch": 10150,
        "./it-ch.js": 10150,
        "./it.js": 90626,
        "./ja": 39183,
        "./ja.js": 39183,
        "./jv": 24286,
        "./jv.js": 24286,
        "./ka": 12105,
        "./ka.js": 12105,
        "./kk": 47772,
        "./kk.js": 47772,
        "./km": 18758,
        "./km.js": 18758,
        "./kn": 79282,
        "./kn.js": 79282,
        "./ko": 33730,
        "./ko.js": 33730,
        "./ku": 1408,
        "./ku.js": 1408,
        "./ky": 33291,
        "./ky.js": 33291,
        "./lb": 36841,
        "./lb.js": 36841,
        "./lo": 55466,
        "./lo.js": 55466,
        "./lt": 57010,
        "./lt.js": 57010,
        "./lv": 37595,
        "./lv.js": 37595,
        "./me": 39861,
        "./me.js": 39861,
        "./mi": 35493,
        "./mi.js": 35493,
        "./mk": 95966,
        "./mk.js": 95966,
        "./ml": 87341,
        "./ml.js": 87341,
        "./mn": 5115,
        "./mn.js": 5115,
        "./mr": 10370,
        "./mr.js": 10370,
        "./ms": 9847,
        "./ms-my": 41237,
        "./ms-my.js": 41237,
        "./ms.js": 9847,
        "./mt": 72126,
        "./mt.js": 72126,
        "./my": 56165,
        "./my.js": 56165,
        "./nb": 64924,
        "./nb.js": 64924,
        "./ne": 16744,
        "./ne.js": 16744,
        "./nl": 93901,
        "./nl-be": 59814,
        "./nl-be.js": 59814,
        "./nl.js": 93901,
        "./nn": 83877,
        "./nn.js": 83877,
        "./oc-lnc": 92135,
        "./oc-lnc.js": 92135,
        "./pa-in": 15858,
        "./pa-in.js": 15858,
        "./pl": 64495,
        "./pl.js": 64495,
        "./pt": 89520,
        "./pt-br": 57971,
        "./pt-br.js": 57971,
        "./pt.js": 89520,
        "./ro": 96459,
        "./ro.js": 96459,
        "./ru": 21793,
        "./ru.js": 21793,
        "./sd": 40950,
        "./sd.js": 40950,
        "./se": 10490,
        "./se.js": 10490,
        "./si": 90124,
        "./si.js": 90124,
        "./sk": 64249,
        "./sk.js": 64249,
        "./sl": 14985,
        "./sl.js": 14985,
        "./sq": 51104,
        "./sq.js": 51104,
        "./sr": 49131,
        "./sr-cyrl": 79915,
        "./sr-cyrl.js": 79915,
        "./sr.js": 49131,
        "./ss": 85893,
        "./ss.js": 85893,
        "./sv": 98760,
        "./sv.js": 98760,
        "./sw": 91172,
        "./sw.js": 91172,
        "./ta": 27333,
        "./ta.js": 27333,
        "./te": 23110,
        "./te.js": 23110,
        "./tet": 52095,
        "./tet.js": 52095,
        "./tg": 27321,
        "./tg.js": 27321,
        "./th": 9041,
        "./th.js": 9041,
        "./tk": 19005,
        "./tk.js": 19005,
        "./tl-ph": 75768,
        "./tl-ph.js": 75768,
        "./tlh": 89444,
        "./tlh.js": 89444,
        "./tr": 72397,
        "./tr.js": 72397,
        "./tzl": 28254,
        "./tzl.js": 28254,
        "./tzm": 51106,
        "./tzm-latn": 30699,
        "./tzm-latn.js": 30699,
        "./tzm.js": 51106,
        "./ug-cn": 9288,
        "./ug-cn.js": 9288,
        "./uk": 67691,
        "./uk.js": 67691,
        "./ur": 13795,
        "./ur.js": 13795,
        "./uz": 6791,
        "./uz-latn": 60588,
        "./uz-latn.js": 60588,
        "./uz.js": 6791,
        "./vi": 65666,
        "./vi.js": 65666,
        "./x-pseudo": 14378,
        "./x-pseudo.js": 14378,
        "./yo": 75805,
        "./yo.js": 75805,
        "./zh-cn": 83839,
        "./zh-cn.js": 83839,
        "./zh-hk": 55726,
        "./zh-hk.js": 55726,
        "./zh-mo": 99807,
        "./zh-mo.js": 99807,
        "./zh-tw": 74152,
        "./zh-tw.js": 74152,
      };
      function r(e) {
        var t = i(e);
        return o(t);
      }
      function i(e) {
        if (!o.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (r.keys = function () {
        return Object.keys(n);
      }),
        (r.resolve = i),
        (e.exports = r),
        (r.id = 46700);
    },
    2577: (e, t, o) => {
      var n = {
        "./beige.css": [83179, 3179],
        "./black.css": [38994, 8994],
        "./blood.css": [55945, 5945],
        "./fonts/league-gothic/league-gothic.css": [95482, 5482],
        "./fonts/source-sans-pro/source-sans-pro.css": [62029, 2029],
        "./league.css": [63263, 3263],
        "./moon.css": [56170, 6170],
        "./night.css": [64805, 4805],
        "./serif.css": [38933, 8933],
        "./simple.css": [67657, 7657],
        "./sky.css": [21374, 1374],
        "./solarized.css": [72456, 2456],
        "./white.css": [62481, 2481],
      };
      function r(e) {
        if (!o.o(n, e))
          return Promise.resolve().then(() => {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = n[e],
          r = t[0];
        return o.e(t[1]).then(() => o(r));
      }
      (r.keys = () => Object.keys(n)), (r.id = 2577), (e.exports = r);
    },
    6182: (e, t, o) => {
      "use strict";
      e.exports = o.p + "assets/chalkboard.js";
    },
    16920: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"domain":"messages","locale_data":{"messages":{"":{"domain":"messages","plural_forms":"nplurals=2; plural=(n > 1);","lang":"nl_NL"},"Manually edit the JSON below to manipulate the metadata for this cell.":["Bewerk de JSON-code hieronder om de metadata van deze cel aan te passen."],"Manually edit the JSON below to manipulate the metadata for this notebook.":["Bewerk de JSON-code hieronder om de metadata van dit notebook aan te passen."]," We recommend putting custom metadata attributes in an appropriately named substructure, so they don\'t conflict with those of others.":["We raden aan om aangepaste metagegevensattributen in een passend genoemde substructuur te plaatsen, zodat ze niet conflicteren met die van anderen."],"Edit the metadata":["Bewerk metadata"],"Edit Notebook Metadata":["Bewerk Notebook Metadata"],"Edit Cell Metadata":["Bewerk Cell Metadata"],"Cancel":["Cancel"],"Edit":["Bewerk"],"OK":["OK"],"Apply":["Pas toe"],"WARNING: Could not save invalid JSON.":["WAARSCHUWING: Ongeldige JSON kan niet worden opgeslagen."],"There are no attachments for this cell.":["Deze cel heeft geen aanhangsels."],"Current cell attachments":["Huidige cel-aanhangsels"],"Attachments":["Aanhangsels"],"Restore":["Herstel"],"Delete":["Verwijder"],"Edit attachments":["Edit aanhangsels"],"Edit Notebook Attachments":["Edit notebook aanhangsels"],"Edit Cell Attachments":["Edit cel-aanhangsels"],"Select a file to insert.":["Selecteer een bestand om in te voegen"],"Select a file":["Selecteer een bestand"],"You are using Jupyter notebook.":["Je gebruikt Jupyter notebook."],"The version of the notebook server is: ":["De versie van de notebook-server is: "],"The server is running on this version of Python:":["De server gebruikt deze versie van Python:"],"Waiting for kernel to be available...":["Wacht tot de kernel beschikbaar is..."],"Server Information:":["Server-informatie:"],"Current Kernel Information:":["Kernel-informatie:"],"Current Notebook Information:":["Notebook-informatie:"],"Could not access sys_info variable for version information.":["Kan geen toegang krijgen tot sys_info variabele voor versie-informatie."],"Cannot find sys_info!":["sys_info niet gevonden!"],"About Jupyter Notebook":["Over Jupyter Notebook"],"unable to contact kernel":["geen verbinding met kernel"],"toggle rtl layout":["Wijzig de richting van de interface"],"Toggle the screen directionality between left-to-right and right-to-left":["De richting van het scherm wisselen tussen van links naar rechts en van rechts naar links"],"edit command mode keyboard shortcuts":["Sneltoetsen voor opdrachtmodus bewerken"],"Open a dialog to edit the command mode keyboard shortcuts":["Open een dialoogvenster om de sneltoetsen in de opdrachtmodus te bewerken"],"restart kernel":["herstart kernel"],"restart the kernel (no confirmation dialog)":["herstart de kernel (zonder dialoog)"],"confirm restart kernel":["bevestig de kernel-herstart"],"restart the kernel (with dialog)":["Herstart de kernel (met dialoog)"],"restart kernel and run all cells":["herstart de kernel en voer alle cellen uit"],"restart the kernel, then re-run the whole notebook (no confirmation dialog)":["Herstart de kernel en voer het hele notebook uit (zonder dialoog)"],"confirm restart kernel and run all cells":["bevestig de kernel-herstart en het uitvoeren van alle cellen"],"restart the kernel, then re-run the whole notebook (with dialog)":["Herstart de kernel en voer het hele notebook uit (met dialoog)"],"restart kernel and clear output":["herstart kernel en verwijder uitvoer"],"restart the kernel and clear all output (no confirmation dialog)":["herstart kernel en verwijder alle uitvoer (zonder dialoog)"],"confirm restart kernel and clear output":["bevestig herstarten kernel en verwijderen uitvoer"],"restart the kernel and clear all output (with dialog)":["herstart kernel en verwijder alle uitvoer (met dialoog)"],"interrupt the kernel":["Onderbreek de kernel"],"run cell and select next":["Cel uitvoeren en Volgende selecteren"],"run cell, select below":["Cel uitvoeren, selecteer hieronder"],"run selected cells":["voer de geselecteerde cellen uit"],"run cell and insert below":["voer de cel uit en voeg daaronder in"],"run all cells":["voer alle cellen uit"],"run all cells above":["voer alle bovenstaande cellen uit"],"run all cells below":["voer alle onderstaande cellen uit"],"enter command mode":["open de opdrachtmodus"],"insert image":["voeg figuur in"],"cut cell attachments":["verwijder cel bijlagen"],"copy cell attachments":["kopieer cel bijlagen"],"paste cell attachments":["plak cel bijlagen"],"split cell at cursor":["splits de cel bij de cursor"],"enter edit mode":["activeer edit-mode"],"select previous cell":["selecteer de vorige cell"],"select cell above":["selecteer de cel hierboven "],"select next cell":["selecteer de volgende cel"],"select cell below":["selecteer de cel hieronder"],"extend selection above":["selectie hierboven uitbreiden"],"extend selected cells above":["geselecteerde cellen erboven uitbreiden"],"extend selection below":["selectie hieronder uitbreiden"],"extend selected cells below":["Geselecteerde cellen eronder uitbreiden"],"cut selected cells":["Knip geselecteerde cellen"],"copy selected cells":["Kopieer geselecteerde cellen"],"paste cells above":["Plak de cellen boven"],"paste cells below":["Plak de cellen onder"],"insert cell above":["Voeg een cel hierboven in"],"insert cell below":["Voeg een cel hieronder in"],"change cell to code":["verander de cel in code"],"change cell to markdown":["transformer celllule en markdown"],"change cell to raw":["verander de cel naar Raw"],"change cell to heading 1":["verander de cel in heading 1"],"change cell to heading 2":["verander de cel naar heading 2"],"change cell to heading 3":["verander de cel naar heading 3"],"change cell to heading 4":["verander de cel naar heading 4"],"change cell to heading 5":["verander de cel naar heading 5"],"change cell to heading 6":["verander de cel naar heading 6"],"toggle cell output":["celuitvoer in- en uitschakelen"],"toggle output of selected cells":["geselecteerde celuitvoer in- en uitschakelen"],"toggle cell scrolling":["scrollen door cellen in- en uitschakelen"],"toggle output scrolling of selected cells":["scrollen door geselecteerde cellen in- en uitschakelen"],"clear cell output":["celuitvoer wissen"],"clear output of selected cells":["uitvoer van geselecteerde cellen wissen"],"move cells down":["verplaats cellen omlaag"],"move selected cells down":["Verplaats geselecteerde cellen omlaag"],"move cells up":["verplaats cellen omhoog"],"move selected cells up":["Verplaats geselecteerde cellen omhoog"],"toggle line numbers":["regelnummering aan- en uitschakelen"],"show keyboard shortcuts":["toon toetsenbord shortcuts"],"delete cells":["verwijder cellen"],"delete selected cells":["verwijder geselecteerde cellen"],"undo cell deletion":["annuleer celverwijdering"],"merge cell with previous cell":["voeg deze cel samen met de vorige"],"merge cell above":["voeg deze cel samen met die erboven"],"merge cell with next cell":["voeg deze cel samen met de volgende"],"merge cell below":["voeg deze cel samen met die eronder"],"merge selected cells":["voeg geselecteerde cellen samen"],"merge cells":["voeg cellen samen"],"merge selected cells, or current cell with cell below if only one cell is selected":["Geselecteerde cellen samenvoegen, of huidige cel met onderstaande cel als slechts Ã©Ã©n cel geselecteerd is"],"show command pallette":["het opdracht palet weergegeven"],"open the command palette":["Open het opdrachtpalet"],"toggle all line numbers":["regelnummering aan- en uit schakelen"],"toggles line numbers in all cells, and persist the setting":["schakel regelnummering aan of uit in alle cellen en handhaaf de instellingen"],"show all line numbers":["laat regelnummers zien"],"show line numbers in all cells, and persist the setting":["","Jupyter gebruikt geen speciale heading cellen meer. Schrijf je headings in Markdown cells met # karakters."],"## This is a level 2 heading":["## Dis is een heading op niveau 2"],"Restart kernel and re-run the whole notebook?":["Herstart de kernel en voer het notebook opnieuw uit?"],"Are you sure you want to restart the current kernel and re-execute the whole notebook?  All variables and outputs will be lost.":["Ben je er zeker van om de huidige kernel te herstarten en het hele notebook opnieuw uit te voeren?Alle variabelen en uitvoer zullen verloren gaan."],"Restart kernel and clear all output?":["Herstart kernel en verwijder alle uitvoer ?"],"Do you want to restart the current kernel and clear all output?  All variables and outputs will be lost.":["Ben je er zeker van de huidige kernel opnieuw te starten en alle uitvoer te verwijderen, Alle variabelen en uitvoer zullen verloren gaan"],"Restart kernel?":["De kernel herstarten ?"],"Do you want to restart the current kernel?  All variables will be lost.":["Wil je de huidige kernel herstarten ? Alle variabelen zullen verloren gaan."],"Shutdown kernel?":["De kernel stoppen ?"],"Do you want to shutdown the current kernel?  All variables will be lost.":["Wil je de huidige kernel stoppen ? Alle variabelen zullen verloren gaan."],"Notebook changed":["Notebook veranderd"],"The notebook file has changed on disk since the last time we opened or saved it. Do you want to overwrite the file on disk with the version open here, or load the version on disk (reload the page) ?":["Het notebook bestand op schijf is gewijzigd sinds de laatste keer dat het geopend of bewaard was. Wil je het bestand overschrijven met de huidige versie of wil je de versie op schijf openen ?"],"Notebook validation failed":["Notebook validatie mislukt"],"The save operation succeeded, but the notebook does not appear to be valid. The validation error was:":["Opslag is geslaagd, maar het notebook is niet geldig Validatiefout is :"],"A trusted Jupyter notebook may execute hidden malicious code when you open it. Selecting trust will immediately reload this notebook in a trusted state. For more information, see the Jupyter security documentation: ":["Een vertrouwd Jupyter-notebook kan verborgen schadelijke code uitvoeren wanneer je het opent. Als je Vertrouwen selecteert, wordt dit notekook onmiddellijk opnieuw geladen in een vertrouwde status.Zie de Jupyter-beveiligingsdocumentatie voor meer informatie:"],"here":["hier"],"Trust this notebook?":["Dit notebook vertrouwen ?"],"Notebook failed to load":["Het notebook is niet geladen"],"The error was: ":["De fout is : "],"See the error console for details.":["bekijk het foutenconsole voor details."],"The notebook also failed validation:":["Notebook validatie ook mislukt :"],"An invalid notebook may not function properly. The validation error was:":["Een ongeldig notebook zal niet goed functioneren. De validatiefout is :"],"This notebook has been converted from an older notebook format to the current notebook format v(%s).":["Dit notebook is omgezet van een ouder formaat naar het huidige formaat v(%s)."],"This notebook has been converted from a newer notebook format to the current notebook format v(%s).":["Dit notebook is omgezet van een jonger formaat naar het huidige formaat v(%s)"],"The next time you save this notebook, the current notebook format will be used.":["De volgende keer dat je dit notebook bewaard zal de het in het huidige formaat bewaard worden."],"Older versions of Jupyter may not be able to read the new format.":["Oudere versie van Jupyter kunnen mogelijk dit bestandsformaat niet lezen "],"Some features of the original notebook may not be available.":["Sommige functies van het originele notebook zullen niet werken. "],"To preserve the original version, close the notebook without saving it.":["Om de originele versie te behouden, sluit het notebook zonder te bewaren."],"Notebook converted":["Notebook omgezet"],"(No name)":["(Zonder naam)"],"An unknown error occurred while loading this notebook. This version can load notebook formats %s or earlier. See the server log for details.":["Bij het laden van dit notebook trad een onbekende fout op. Deze versie kan notebook formaten %s (of ouder) laden. Bekijk het serverlog voor details."],"Error loading notebook":["Fout bij het laden van het notebook"],"Are you sure you want to revert the notebook to the latest checkpoint?":["Ben je er zeker van dat het notebook terugkeert naar het laatste checkpoint ?"],"This cannot be undone.":["Dit is definitief."],"The checkpoint was last updated at:":["Het checkpoint is van : "],"Revert notebook to checkpoint":["Herstel het notebook naar checkpoint "],"Edit Mode":["Edit mode"],"Command Mode":["Command mode"],"Kernel Created":["Kernel gemaakt"],"Connecting to kernel":["Verbinden met kernel"],"Not Connected":["Niet verbonden"],"click to reconnect":["Klik om opnieuw te verbinden"],"Restarting kernel":["Kernel herstarten"],"Kernel Restarting":["Kernel is aan het herstarten"],"The kernel appears to have died. It will restart automatically.":["De kernel reageert niet meer. Zal vanzelf herstarten."],"Dead kernel":["Kernel reageert niet"],"Kernel Dead":["Kernel reageert niet"],"Interrupting kernel":["Kernel onderbroken"],"No Connection to Kernel":["Geen verbinding met de kernel"],"A connection to the notebook server could not be established. The notebook will continue trying to reconnect. Check your network connection or notebook server configuration.":["Er kan geen verbinding met de notebookserver tot stand worden gebracht. Het notebook blijft proberen opnieuw verbinding te maken. Controleer de configuratie van uw netwerkverbinding of notebookserver."],"Connection failed":["Verbinding mislukt"],"No kernel":["Geen kernel"],"Kernel is not running":["De kernel is niet actief"],"Don\'t Restart":["Niet herstarten"],"Try Restarting Now":["Probeer te herstarten"],"The kernel has died, and the automatic restart has failed. It is possible the kernel cannot be restarted. If you are not able to restart the kernel, you will still be able to save the notebook, but running code will no longer work until the notebook is reopened.":["De kernel reageert niet meer en de automatische herstart is mislukt. Het is mogelijk dat de kernel niet opnieuw kan worden opgestart. Als u de kernel niet opnieuw kunt opstarten, kunt u het notebook nog steeds opslaan, maar het uitvoeren van code werkt niet meer totdat het notebook opnieuw wordt geopend."],"No Kernel":["Geen kernel"],"Failed to start the kernel":["De kernel is niet gestart"],"Kernel Busy":["Kernel is bezig"],"Kernel starting, please wait...":["Kernel start op, een ogenblik..."],"Kernel Idle":["Kernel inactief"],"Kernel ready":["Kernel klaar"],"Using kernel: ":["Gebruik kernel : "],"Only candidate for language: %1$s was %2$s.":["Enige kandidaat voor taal : %1$s is %2$s."],"Loading notebook":["Notebook wordt geladen"],"Notebook loaded":["Notebook geladen"],"Saving notebook":["Notebook wordt opgeslagen"],"Notebook saved":["Notebook opgeslagen"],"Notebook save failed":["Notebook opslaan is niet gelukt"],"Notebook copy failed":["Het notebook is niet gekopieerd"],"Checkpoint created":["Checkpoint gemaakt"],"Checkpoint failed":["Checkpoint maken mislukt"],"Checkpoint deleted":["Checkpoint verwijderd"],"Checkpoint delete failed":["Checkpoint verwijderen is mislukt"],"Restoring to checkpoint...":["Herstel van checkpoint..."],"Checkpoint restore failed":["Herstel van checkpoint is mislukt"],"Autosave disabled":["Automatisch bewaren is uitgezet"],"Saving every %d sec.":["Opslaan elke %d sec."],"Trusted":["Vertrouwd"],"Not Trusted":["Niet vertrouwd"],"click to expand output":["Klik om uitvoer te vergroten"],"click to expand output; double click to hide output":["Klik om uitvoer te vergroten, dubbelklik om te verbergen "],"click to unscroll output; double click to hide":["Klik om bladeren te stoppen, dubbelklik om te verbergen"],"click to scroll output; double click to hide":["Klik om door uitvoer te bladeren, dubbelklik om te verbergen"],"Javascript error adding output!":["Javascriptfout bij het toevoegen van uitvoer !"],"See your browser Javascript console for more details.":["Bekijk het Javascriptconsole in je browser voor meer details."],"Out[%d]:":["Uit[%d] :"],"Unrecognized output: %s":["Onherkenbare uitvoer: %s"],"Open the pager in an external window":["Open de pager in een extern venster"],"Close the pager":["Sluit de pager"],"Jupyter Pager":["Jupyter pager"],"go to cell start":["Ga naar de start cel"],"go to cell end":["ga naar de eind cel"],"go one word left":["ga een woord naar links"],"go one word right":["ga een woord naar rechts"],"delete word before":["verwijder het vorige woord"],"delete word after":["verwijder het volgende woord"],"code completion or indent":["automatische code-aanvulling of inspringen"],"tooltip":["knopinfo"],"indent":["inspringen"],"dedent":["uitspringen"],"select all":["selecteer alles"],"undo":["ongedaan maken"],"redo":["opnieuw uitvoeren"],"Shift":["Shift"],"Alt":["Alt"],"Up":["Pijltje boven"],"Down":["Pijltje beneden"],"Left":["Pijltje links"],"Right":["Pijltje rechts"],"Tab":["Tab"],"Caps Lock":["Caps Lock"],"Esc":["Esc"],"Ctrl":["Ctrl"],"Enter":["Enter"],"Page Up":["Page Up"],"Page Down":["Page Down"],"Home":["Home"],"End":["End"],"Space":["Spatie"],"Backspace":["Backspace"],"Minus":["Min"],"PageUp":["Page Up"],"The Jupyter Notebook has two different keyboard input modes.":["De Jupyter Notebook heeft twee verschillende toetsenbordinvoermodes."],"<b>Edit mode</b> allows you to type code or text into a cell and is indicated by a green cell border.":["<b>Bewerkingsmodus</b> stelt u in staat om code of tekst in een cel te typen en wordt aangegeven door een groene celrand."],"<b>Command mode</b> binds the keyboard to notebook level commands and is indicated by a grey cell border with a blue left margin.":["<b>Commandomodus</b> koppelt het toetsenbord aan opdrachten op notebookniveau en wordt aangegeven door een grijze celrand met een blauwe linkermarge."],"Close":["Sluiten"],"Keyboard shortcuts":["Sneltoetsen"],"Command":["Opdracht"],"Control":["Besturing"],"Option":["Optie"],"Return":["Terugkeer"],"Command Mode (press %s to enable)":["Commandomodus (druk op %s om in te schakelen)"],"Edit Shortcuts":["Bewerk snelkoppelingen"],"edit command-mode keyboard shortcuts":["bewerk snelkoppelingen van commandomodus"],"Edit Mode (press %s to enable)":["Bewerkingsmodus (druk op %s om in te schakelen)"],"Autosave Failed!":["Automatisch opslaan mislukt!"],"Rename":["Hernoemen"],"Enter a new notebook name:":["Voer een nieuwe naam voor het notebook in:"],"Rename Notebook":["Notebook hernoemen"],"Invalid notebook name. Notebook names must have 1 or more characters and can contain any characters except :/\\\\. Please enter a new notebook name:":["Ongeldige notebooknaam. Notebooknamen moeten 1 of meer karakters bevatten en kunnen elk karakter bevatten, behalve :/. Voer een nieuwe notebooknaam in:"],"Renaming...":["Bezig met hernoemen..."],"Unknown error":["Onbekende fout"],"no checkpoint":["geen controlepunt"],"Last Checkpoint: %s":["Laatste controlepunt: %s"],"(unsaved changes)":["(niet-opgeslagen wijzigingen)"],"(autosaved)":["(automatisch opgeslagen)"],"Warning: too many matches (%d). Some changes might not be shown or applied.":["Waarschuwing: te veel overeenkomsten (%d). Sommige wijzigingen worden mogelijk niet getoond of toegepast."],"%d match":["%d overeenkomst","%d overeenkomsten"],"More than 100 matches, aborting":["Meer dan 100 overeenkomsten, afbreken"],"Use regex (JavaScript regex syntax)":["Gebruik regex (JavaScript regex-syntaxis)"],"Replace in selected cells":["Vervangen in geselecteerde cellen"],"Match case":["Hoofdlettergevoelig"],"Find":["Zoeken"],"Replace":["Vervangen"],"No matches, invalid or empty regular expression":["Geen overeenkomsten, ongeldige of lege reguliere expressie."],"Replace All":["Alles vervangen"],"Find and Replace":["Zoeken en vervangen"],"find and replace":["zoeken en vervangen"],"Write raw LaTeX or other formats here, for use with nbconvert. It will not be rendered in the notebook. When passing through nbconvert, a Raw Cell\'s content is added to the output unmodified.":["Schrijf hier ruwe LaTeX of andere formaten, voor gebruik met nbconvert. Het wordt niet weergegeven in het notebook. Bij passage door nbconvert wordt de inhoud van een ruwe cel ongewijzigd aan de uitvoer toegevoegd."],"Grow the tooltip vertically (press shift-tab twice)":["Vergroot de tooltip verticaal (druk tweemaal op shift-tab)"],"show the current docstring in pager (press shift-tab 4 times)":["toon de huidige docstring in pager (druk vier keer op shift-tab)"],"Open in Pager":["Openen in Pager"],"Tooltip will linger for 10 seconds while you type":["De tooltip blijft 10 seconden staan terwijl u typt"],"Welcome to the Notebook Tour":["Welkom bij de Notebook Tour"],"You can use the left and right arrow keys to go backwards and forwards.":["U kunt de linker- en rechterpijltoetsen gebruiken om vooruit en achteruit te gaan."],"Filename":["Bestandsnaam"],"Click here to change the filename for this notebook.":["Klik hier om de bestandsnaam voor dit notebook te wijzigen."],"Notebook Menubar":["Barre de Menu du Notebook"],"The menubar has menus for actions on the notebook, its cells, and the kernel it communicates with.":["La barre de menu a des menus pour les actions concernant le notebook, ses cellules, et le noyau avec lequel il communique."],"Notebook Toolbar":["Notebook Werkbalk"],"The toolbar has buttons for the most common actions. Hover your mouse over each button for more information.":["De werkbalk heeft knoppen voor de meest voorkomende acties. Beweeg de muis over elke knop voor meer informatie."],"Mode Indicator":["Modus-indicator"],"The Notebook has two modes: Edit Mode and Command Mode. In this area, an indicator can appear to tell you which mode you are in.":["Het notebook heeft twee modi: bewerkingsmodus en commandomodus. In dit gebied kan een indicator verschijnen om aan te geven in welke modus u zich bevindt."],"Right now you are in Command Mode, and many keyboard shortcuts are available. In this mode, no icon is displayed in the indicator area.":["U bevindt zich momenteel in de commandomodus en er zijn veel sneltoetsen beschikbaar. In deze modus wordt er geen pictogram weergegeven in het indicatiegebied."],"Pressing <code>Enter</code> or clicking in the input text area of the cell switches to Edit Mode.":["Door op <code>Enter</code> te drukken of te klikken in het invoerveld van de cel, schakelt u over naar de bewerkingsmodus."],"Notice that the border around the currently active cell changed color. Typing will insert text into the currently active cell.":["Let op dat de rand rond de momenteel actieve cel van kleur is veranderd. Typen voegt tekst in in de momenteel actieve cel."],"Back to Command Mode":["Terug naar Commandomodus"],"Pressing <code>Esc</code> or clicking outside of the input text area takes you back to Command Mode.":["Door op <code>Esc</code> te drukken of buiten het invoerveld te klikken, keert u terug naar de commandomodus."],"Keyboard Shortcuts":["Sneltoetsen"],"You can click here to get a list of all of the keyboard shortcuts.":["U kunt hier klikken om een lijst met alle sneltoetsen te krijgen."],"Kernel Indicator":["Kernel-indicator"],"This is the Kernel indicator. It looks like this when the Kernel is idle.":["Dit is de kernelindicator. Het ziet er zo uit wanneer de kernel inactief is."],"The Kernel indicator looks like this when the Kernel is busy.":["De kernelindicator ziet er zo uit wanneer de kernel bezig is."],"Interrupting the Kernel":["Het onderbreken van de kernel"],"To cancel a computation in progress, you can click here.":["Om een lopende berekening te annuleren, kunt u hier klikken."],"Notification Area":["Meldingsgebied"],"Messages in response to user actions (Save, Interrupt, etc.) appear here.":["Berichten als reactie op gebruikersacties (Opslaan, Onderbreken, enz.) verschijnen hier."],"End of Tour":["Einde van de rondleiding"],"This concludes the Jupyter Notebook User Interface Tour.":["Dit concludeert de Jupyter Notebook gebruikersinterface tour."],"Edit Attachments":["Bijlagen bewerken"],"Cell":["Cel"],"Edit Metadata":["Metagegevens bewerken"],"Custom":["Aangepast"],"Set the MIME type of the raw cell:":["Stel het MIME-type van de ruwe cel in:"],"Raw Cell MIME Type":["Type MIME van de ruwe cel"],"Raw NBConvert Format":["Ruwe NBConvert-indeling"],"Raw Cell Format":["Ruwe celindeling"],"Slide":["Dia"],"Sub-Slide":["Subdia"],"Fragment":["Fragment"],"Skip":["Overslaan"],"Notes":["Notities"],"Slide Type":["Dia-type"],"Slideshow":["Diavoorstelling"],"Add tag":["Tag toevoegen"],"Edit the list of tags below. All whitespace is treated as tag separators.":["Bewerk de lijst met tags hieronder. Alle witruimte wordt behandeld als tag-scheidingstekens."],"Edit the tags":["Bewerk de tags"],"Edit Tags":["Bewerk Tags"],"Shutdown":["Afsluiten"],"Create a new notebook with %s":["Maak een nieuw notebook met %s"],"An error occurred while creating a new notebook.":["Er is een fout opgetreden bij het maken van een nieuw notebook."],"Creating File Failed":["Maken van bestand mislukt"],"An error occurred while creating a new file.":["Er is een fout opgetreden bij het maken van een nieuw bestand."],"Creating Folder Failed":["Maken van map mislukt"],"An error occurred while creating a new folder.":["Er is een fout opgetreden bij het maken van een nieuwe map."],"Failed to read file":["Kon bestand niet lezen"],"Failed to read file %s":["Kon bestand %s niet lezen"],"The file size is %d MB. Do you still want to upload it?":["De bestandsgrootte is %d MB. Wil je het nog steeds uploaden?"],"Large file size warning":["Waarschuwing voor grote bestandsgrootte"],"Server error: ":["Serverfout: "],"The notebook list is empty.":["De lijst met notebooks is leeg."],"Click here to rename, delete, etc.":["Klik hier om te hernoemen, te verwijderen, enz."],"Running":["Bezig"],"Enter a new file name:":["Voer een nieuwe bestandsnaam in:"],"Enter a new directory name:":["Voer een nieuwe mapnaam in:"],"Enter a new name:":["Voer een nieuwe naam in:"],"Rename file":["Bestand hernoemen"],"Rename directory":["Map hernoemen"],"Rename notebook":["Notebook hernoemen"],"Move":["Verplaatsen"],"An error occurred while renaming \\"%1$s\\" to \\"%2$s\\".":["Une erreur s\'est produite pendant le renommage de Â«Â %1$sÂ Â» vers Â«Â %2$sÂ Â»."],"Rename Failed":["Hernoemen mislukt"],"Enter a new destination directory path for this item:":["Voer een nieuw bestemmingsmap pad in voor dit item:"],"Move an Item":["Verplaats een item"],"An error occurred while moving \\"%1$s\\" from \\"%2$s\\" to \\"%3$s\\".":["Er is een fout opgetreden bij het verplaatsen van \\"%1$s\\" van \\"%2$s\\" naar \\"%3$s\\"."],"Move Failed":["Verplaatsen mislukt"],"Are you sure you want to permanently delete: \\"%s\\"?":["Weet u zeker dat u \\"%s\\" permanent wilt verwijderen?"],"An error occurred while deleting \\"%s\\".":["Er trad een fout op bij het verwijderen van \\"%s\\"."],"Delete Failed":["Verwijderen niet gelukt"],"Are you sure you want to duplicate: \\"%s\\"?":["Weet u zeker dat u \\"%s\\" wilt dupliceren?"],"Duplicate":["Dupliceer"],"An error occurred while duplicating \\"%s\\".":["Er trad een fout op bij het dupliceren van \\"%s\\"."],"Duplicate Failed":["Duplicatie niet gelukt"],"Upload":["Upload"],"Invalid file name":["Ongeldige bestandsnaam"],"File names must be at least one character and not start with a period":["Een bestandsnaam moet tenminste Ã©Ã©n teken bevatten en mag niet beginnen met een punt"],"Cannot upload invalid Notebook":["Upload van ongeldig notebook niet mogelijk"],"There is already a file named \\"%s\\". Do you want to replace it?":["Er is al een bestand \\"%s\\". Wil je dat vervangen?"],"Replace file":["Vervang bestand"]}}}'
      );
    },
    7765: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"default":"python3","kernelspecs":{"python3":{"name":"python3","spec":{"argv":["/usr/bin/python3.10","-m","ipykernel_launcher","-f","{connection_file}"],"env":{},"display_name":"Python 3","language":"python","interrupt_mode":"signal","metadata":{}},"resources":{"logo-64x64":"kernelspecs/python3/logo-64x64.png","logo-32x32":"kernelspecs/python3/logo-32x32.png"}},"python3-old":{"name":"python3-old","spec":{"argv":["/usr/bin/python3.8","-m","ipykernel_launcher","-f","{connection_file}"],"env":{},"display_name":"Python 3 Old","language":"python","interrupt_mode":"signal","metadata":{}},"resources":{"logo-64x64":"kernelspecs/python3/logo-64x64.png","logo-32x32":"kernelspecs/python3/logo-32x32.png"}},"javascript":{"name":"javascript","spec":{"argv":[],"env":{},"display_name":"Javascript","language":"javascript","interrupt_mode":"signal","metadata":{}},"resources":{"logo-64x64":"kernelspecs/javascript/logo-64x64.png","logo-32x32":"kernelspecs/javascript/logo-32x32.png"}},"sql":{"name":"sql","spec":{"argv":[],"env":{},"display_name":"SQL","language":"sql","interrupt_mode":"signal","metadata":{}},"resources":{"logo-64x64":"kernelspecs/sql/logo-64x64.png","logo-32x32":"kernelspecs/sql/logo-32x32.png"}},"ocaml":{"name":"ocaml","spec":{"argv":[],"env":{},"display_name":"OCaml","language":"ocaml","interrupt_mode":"signal","metadata":{}},"resources":{"logo-64x64":"kernelspecs/ocaml/logo-64x64.png","logo-32x32":"kernelspecs/ocaml/logo-32x32.png"}}}}'
      );
    },
  },
]);
//# sourceMappingURL=4249.1e5474dd649c722b8777.js.map
