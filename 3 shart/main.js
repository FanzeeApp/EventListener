output = document
randomNum = document.getElementById("rand")
randomBtn = document.querySelector(".btn")


let colors = ['red', 'yellow', 'green', 'blue', 'purple', 'orange', '#f44', '#aff', 'lightgreen'];

randomBtn.addEventListener('click', ()=> {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNum.innerText = randomNumber

    let randRang = colors[Math.floor(Math.random() * colors.length)];

    output.body.style.backgroundColor = randRang;
});

