import { h, render } from "preact";
import base64 from "base64-encode-string";

function App({ text }) {
  var content = `${text} => b64 => ${base64(text)}`;
  return h("div", {}, content);
}

var root = document.createElement("div");
document.body.appendChild(root);

render(h(App, { text: "Hello World!" }), root);
