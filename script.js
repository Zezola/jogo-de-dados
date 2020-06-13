
vitorias1 = document.querySelector('.score1')
vitorias2 = document.querySelector('.score2')


function rolagem([min = 1, max = 6]) {
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor)
}




const btn = document.querySelector('.controlBtn').addEventListener('click', () => {
    let dice1 = document.querySelector('.dice1').innerHTML = rolagem([])
    let dice2 = document.querySelector('.dice2').innerHTML = rolagem([])
    if (dice1 > dice2) {
        vitorias1.innerHTML++;
    } else if (dice1 < dice2) {
        vitorias2.innerHTML++;
    } else {
        console.log('EMPATE')
    }
})

/*
const btn = document.querySelector('.controlBtn').addEventListener('click', () => {
    vitorias1 += 1;
    console.log(vitorias1)
    vitorias1.innerHTML  = 5

}) */