import {
  _ as d,
  s as _,
  r as u,
  b as m,
  c as v,
  d as s,
  v as f,
  x as r,
  y as c,
  p as h,
  j as g,
} from "./index.6474dcd1.js";
import { f as w } from "./index.6b8ad705.js";
import "./auth.8e58f513.js";
import "./index.5fbf75cc.js";
const y = "/IRONHACK-FinalTask/assets/flying.1ae98977.png";
const e = (a) => (h("data-v-2197992a"), (a = a()), g(), a),
  b = { class: "form-container" },
  I = { class: "main" },
  x = { class: "content" },
  S = e(() => s("h2", null, "Inicio de Sesi\xF3n", -1)),
  k = e(() =>
    s(
      "button",
      { class: "btn", id: "submit", name: "submit", type: "submit" },
      " Iniciar sesion ",
      -1
    )
  ),
  C = e(() =>
    s("p", { class: "tip" }, "\xBFNo tienes tu cuenta? \xA1Crea una!", -1)
  ),
  R = e(() =>
    s("a", { class: "tip-link", href: "/signup" }, "Registrarse", -1)
  ),
  B = e(() =>
    s("p", { class: "tip" }, "\xBFTe olvidaste tu contrase\xF1a?", -1)
  ),
  L = e(() => s("a", { class: "tip-link", href: "" }, "Recuperar", -1)),
  N = e(() =>
    s("div", { class: "form-img" }, [s("img", { src: y, alt: "Flying!" })], -1)
  ),
  T = {
    __name: "Login",
    setup(a) {
      const l = _(),
        o = u({
          email: { content: "", error: !1 },
          password: { content: "", error: !1 },
        }),
        p = async () => {
          const i = await w(o);
          i ? console.log(i) : l.push("/");
        };
      return (i, t) => (
        m(),
        v("div", b, [
          s("div", I, [
            s("div", x, [
              S,
              s(
                "form",
                { onSubmit: t[2] || (t[2] = f((n) => p(), ["prevent"])) },
                [
                  r(
                    s(
                      "input",
                      {
                        "onUpdate:modelValue":
                          t[0] || (t[0] = (n) => (o.value.email.content = n)),
                        type: "email",
                        id: "email",
                        name: "email",
                        placeholder: "Correo electronico",
                      },
                      null,
                      512
                    ),
                    [[c, o.value.email.content]]
                  ),
                  r(
                    s(
                      "input",
                      {
                        "onUpdate:modelValue":
                          t[1] ||
                          (t[1] = (n) => (o.value.password.content = n)),
                        type: "password",
                        id: "password",
                        name: "password",
                        placeholder: "Contrase\xF1a",
                      },
                      null,
                      512
                    ),
                    [[c, o.value.password.content]]
                  ),
                  k,
                ],
                32
              ),
              C,
              R,
              B,
              L,
            ]),
            N,
          ]),
        ])
      );
    },
  },
  j = d(T, [["__scopeId", "data-v-2197992a"]]);
export { j as default };