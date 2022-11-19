const main = document.querySelector("main");
let hour = new Date().getHours().toString();
let minute = new Date().getMinutes().toString();
if (hour.length == 1) hour = hour.toString().replace("", "0");
if (minute.length == 1) minute = minute.toString().replace("", "0");
main.innerHTML = `<h1>${hour}<span>:</span>${minute}</h1>`;
setInterval(() => {
    hour = new Date().getHours().toString();
    minute = new Date().getMinutes().toString();
    main.innerHTML = `<h1>${hour}<span>:</span>${minute}</h1>`;
}, 300);
