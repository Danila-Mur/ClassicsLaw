import "./index.sass";
import Inputmask from "inputmask";

// $(".js-input").inputmask({ mask: "(999) 999-9999" });
let inputTel = document.querySelector(".js-input");

let im = new Inputmask("+7(999)999-99-99");
im.mask(inputTel);
