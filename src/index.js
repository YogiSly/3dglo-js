import timer from "./modules/timer.js";
import menu from "./modules/menu.js";
import modal from "./modules/modal.js";
import regular from "./modules/regular.js";
import tabs from "./modules/tabs.js";
import slider from "./modules/slider.js";
import calc from "./modules/calc.js";
import sendForm from "./modules/sendForm.js";

timer("20 december 2021");
menu();
modal();
regular();
tabs();
slider();
calc();
sendForm({ formId: "form1", someElem: [{ type: "block", id: "total" }] });
sendForm({ formId: "form3", someElem: [{ type: "block", id: "total" }] });
sendForm({ formId: "form2", someElem: [{ type: "block", id: "total" }] });
