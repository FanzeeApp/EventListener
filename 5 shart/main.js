let rasmlar = [
  `<img src="./img/photo_2024-10-09_06-54-09.jpg">`,
  `<img src="./img/Screenshot from 2024-10-14 02-03-29.png">`,
  `<img src="./img/Screenshot from 2024-09-25 16-47-59.png">`,
  `<img src="./img/Screenshot from 2024-01-15 13-44-47.png">`,
  `<img src="./img/Screenshot from 2024-09-25 16-47-59.png">`,
];

let count = 0;
let output = document.querySelector(".output");

setInterval(() => {
  let rasm = rasmlar[count];
  output.innerHTML = rasm;

  count = (count + 1) % rasmlar.length;
}, 2000);
