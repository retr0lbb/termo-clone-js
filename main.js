const input = document.getElementById('palavra')
const btn = document.querySelector('#btn')

const frames = []
const coluns= 4
const palavras = ["algos", "mamae", "sugar", "viver"]
const palavraSelecionada = palavras[gerarNumeroAleatorio(0, 3)];

console.log(palavraSelecionada)

console.log(frames)

btn.addEventListener('click',() => {
    if(input.length =5){
        console.log(input.value)
        for(j=0; j<coluns; j++){
            frames[i] = []
            for(i=0; i<5; i++){
                frames[j][i] = document.getElementById(`${j+1}_${i+1}`)
                console.log(frames)
            }
            
        }
        
    }else{
        return console.log("palavra invalida")
    }

})

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  //coloacar dentro do for
  //frames[j][i].innerHTML = `${input.value[i]}`
  //if(palavraSelecionada[i]== `${input.value[i]}`){
  //    frames[i].className ='a'
  //    console.log(frames[i].className)
  //}else if(palavraSelecionada.indexOf(input.value[i]) !== -1){
  //    frames[i].className ='b'
  //}