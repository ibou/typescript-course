const button = document.querySelector('button');
function clickHandler(message: string) {
    console.log("My clicked action...", message);

} 

button.addEventListener('click', clickHandler.bind(null, "Youhouuuusss !"));
