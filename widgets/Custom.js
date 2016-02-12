var div = document.createElement("div");
div.id = 'custom';
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.innerHTML = globalBattery.percent;

document.body.appendChild(div);