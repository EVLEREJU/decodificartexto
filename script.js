const inputTexto = document.querySelector (".input-texto");
const mensagem = document.querySelector (".mensagem");

function btnEncriptar(){
   const textoEncriptado = encriptar(inputTexto.value)
   mensagem.value = textoEncriptado
   mensagem.style.backgroundImage ="none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["a","ai"],["e","enter"],["i", "imes"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for( i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){

          stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}
function btnDesencriptar(){ 
    mensagem.value = inputTexto.value;
          
   }


