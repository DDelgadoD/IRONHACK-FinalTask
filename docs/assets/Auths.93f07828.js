import { _ as c, a as r } from "./title.41b47a33.js";
import { u as _ } from "./auth.a934d963.js";
import {
  _ as n,
  o as p,
  h as d,
  a as i,
  b as l,
  c as u,
  e as h,
  p as m,
  j as g,
  d as s,
} from "./index.4bfbbcf5.js";
const t = (o) => (m("data-v-8d9451b3"), (o = o()), g(), o),
  f = { class: "login" },
  v = t(() =>
    s(
      "div",
      { class: "logos" },
      [
        s("img", { class: "icono", src: c, alt: "Icono App" }),
        s("img", { class: "logo", src: r, alt: "\xA1YO CONTROLO!" }),
      ],
      -1
    )
  ),
  A = t(() =>
    s(
      "p",
      { class: "holding" },
      " David Delgado International Holdings Group Company Ltd. ",
      -1
    )
  ),
  I = {
    __name: "Auths",
    setup(o) {
      const e = _();
      return (
        p(async () => {
          console.log("auth: ", e.isAuth),
            e.isAuth == !0 &&
              (console.log(
                "user is logged: \xBFQu\xE9 pretendes hacer pseudo-hacker abrazafarolas?"
              ),
              d.push("/"));
        }),
        (b, S) => {
          const a = i("RouterView");
          return l(), u("div", f, [v, h(a), A]);
        }
      );
    },
  },
  O = n(I, [["__scopeId", "data-v-8d9451b3"]]);
export { O as default };
