import {
  _ as d,
  r as u,
  b as p,
  c as m,
  d as s,
  v as f,
  x as n,
  y as r,
  z as v,
  p as _,
  j as h,
  i as w,
  h as b,
} from "./index.be43a535.js";
import { s as g } from "./index.72bcf63d.js";
import { u as k } from "./auth.187cabc7.js";
const l = (o) => (_("data-v-fd195213"), (o = o()), h(), o),
  x = { class: "form-container" },
  y = { class: "main" },
  S = { class: "content" },
  C = l(() => s("h2", null, "Registro", -1)),
  V = { class: "form-check mt-4 ms-2" },
  q = l(() =>
    s(
      "label",
      { class: "form-check-label", for: "flexCheckDefault" },
      [
        w(
          " Al hacer tick nos autorizas a ceder tus datos a gente y te da igual "
        ),
        s("a", { href: "https://sabermas.umich.mx/" }, "[Saber m\xE1s]"),
      ],
      -1
    )
  ),
  z = l(() =>
    s(
      "button",
      { class: "btn", id: "submit", name: "submit", type: "submit" },
      " Registrarse ",
      -1
    )
  ),
  I = {
    __name: "Signup",
    setup(o) {
      k();
      const e = u({
          email: { content: "", error: !1 },
          password: { content: "", error: !1 },
          password2: { content: "", error: !1 },
          check: { content: !1, error: !1 },
        }),
        i = async () => {
          e.value.password.content == e.value.password2.content
            ? (await g(e.value.email.content, e.value.password.content)).data
                .user.id &&
              (alert(
                "Recibir\xE1s un email para confirmar tu usuario. \xA1Muchas Gracias!"
              ),
              b.push("/login"))
            : alert("Las contrase\xF1as no coinciden");
        };
      return (c, t) => (
        p(),
        m("div", x, [
          s("div", y, [
            s("div", S, [
              C,
              s(
                "form",
                { onSubmit: t[4] || (t[4] = f((a) => i(), ["prevent"])) },
                [
                  n(
                    s(
                      "input",
                      {
                        class: "large-input",
                        "onUpdate:modelValue":
                          t[0] || (t[0] = (a) => (e.value.email.content = a)),
                        type: "email",
                        id: "email",
                        name: "email",
                        placeholder: "Correo electronico",
                        required: "",
                      },
                      null,
                      512
                    ),
                    [[r, e.value.email.content]]
                  ),
                  n(
                    s(
                      "input",
                      {
                        class: "large-input",
                        "onUpdate:modelValue":
                          t[1] ||
                          (t[1] = (a) => (e.value.password.content = a)),
                        type: "password",
                        id: "password",
                        name: "password",
                        size: "20",
                        placeholder: "Contrase\xF1a",
                        required: "",
                      },
                      null,
                      512
                    ),
                    [[r, e.value.password.content]]
                  ),
                  n(
                    s(
                      "input",
                      {
                        class: "large-input",
                        "onUpdate:modelValue":
                          t[2] ||
                          (t[2] = (a) => (e.value.password2.content = a)),
                        type: "password",
                        id: "password2",
                        name: "password2",
                        size: "20",
                        placeholder: "Repite Contrase\xF1a",
                        required: "",
                      },
                      null,
                      512
                    ),
                    [[r, e.value.password2.content]]
                  ),
                  s("div", V, [
                    n(
                      s(
                        "input",
                        {
                          class: "form-check-input",
                          "onUpdate:modelValue":
                            t[3] || (t[3] = (a) => (e.value.check.content = a)),
                          type: "checkbox",
                          value: "false",
                          id: "flexCheckDefault",
                          required: "",
                        },
                        null,
                        512
                      ),
                      [[v, e.value.check.content]]
                    ),
                    q,
                  ]),
                  z,
                ],
                32
              ),
            ]),
          ]),
        ])
      );
    },
  },
  B = d(I, [["__scopeId", "data-v-fd195213"]]);
export { B as default };
