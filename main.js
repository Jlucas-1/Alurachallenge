const textArea = document.querySelector(".campo__texto");
const mensagem = document.querySelector(".campo__mensagem");

function btnCifrar() {
    const textoCifrado = cifrar(textArea.value);
    mensagem.value = textoCifrado;
}

function cifrar(stringCifrada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCifrada = stringCifrada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        stringCifrada = stringCifrada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }

    return stringCifrada;
}

function btnDecifrar() {
    const textoDecifrado = decifrar(textArea.value);
    mensagem.value = textoDecifrado;
}

function decifrar(stringDecifrada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecifrada = stringDecifrada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        stringDecifrada = stringDecifrada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }

    return stringDecifrada;
}

function btnCopiar(){
    navigator.clipboard.writeText(mensagem.value).then(() => {
        alert("Copiado para área de transferência!");
    });
}

