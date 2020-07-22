"use strict";
const button = document.querySelector('button');
function clickHandler(message) {
    console.log("My clicked action...", message);
}
button.addEventListener('click', clickHandler.bind(null, "Youhouuuusss !"));
//# sourceMappingURL=app.js.map