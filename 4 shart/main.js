let output = document
let btn = document.getElementById("btn")
let btn1 = document.getElementById('btn1'); 
let intervalId;

let colors = ['red', 'yellow', 'green', 'blue', 'purple', 'orange', '#f44', '#aff', 'lightgreen'];

btn.addEventListener('click', () => {

      intervalId = setInterval(() => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];

          output.body.style.backgroundColor = randomColor;
}, 800);

      btn.style.display = 'none';
      btn1.style.display = 'block';
});

btn1.addEventListener('click', () =>{
   clearInterval(intervalId)
      btn1.style.display = 'none';
      btn.style.display = 'block'; 
});