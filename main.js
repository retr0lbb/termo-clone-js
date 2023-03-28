const input = document.getElementById('palavra')
const btn = document.querySelector('#btn')



const frames = [[], [], [], [], [], []]
const palavras = ["algos", "mamae", "sugar", "viver","trans","atomo","china"]
const palavraSelecionada = palavras[gerarNumeroAleatorio(0, 6)];
var colluns = 0

console.log(palavraSelecionada)

console.log(frames)
console.log(input)

btn.addEventListener('click',() => {
    if(input.value.length  ===5|| colluns >6){
            for(j=0; j<5; j++){
                if(input.value ){
                frames[colluns][j] = document.getElementById(`${colluns}_${j}`);
                printTela()
                }
            }
        console.log(frames)
        colluns += 1;
    }else{
        return console.log("palavra invalida "+ length + input.value.length); 
    }

})

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

 
const printTela = () =>{
    frames[colluns][j].innerHTML = `${input.value[j]}`

    //checka para ver se a letra esta na posição correta
    if(palavraSelecionada[j]== `${input.value[j]}`){
       frames[colluns][j].className ='a'
    }else if(palavraSelecionada.indexOf(input.value[j]) !== -1){
        frames[colluns][j].className ='b'

    }

}

  //coloacar dentro do for
  //frames[j][i].innerHTML = `${input.value[i]}`
  //if(palavraSelecionada[i]== `${input.value[i]}`){
  //    frames[i].className ='a'
  //    console.log(frames[i].className)
  //}else if(palavraSelecionada.indexOf(input.value[i]) !== -1){
  //    frames[i].className ='b'
  //}