const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function encriptador(stringEncriptado) {

    let matrizMensaje = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizMensaje.length; i++) {
        if (stringEncriptado.includes(matrizMensaje[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizMensaje[i][0], matrizMensaje[i][1]);

        }


    }
    return stringEncriptado;
}

function btnEncriptar() {
    const textoEncriptado = encriptador(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = " ";
    mensaje.style.backgroundImage = "none";
}

function desencriptador(stringDesencriptado) {

    let matrizMensaje = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizMensaje.length; i++) {
        if (stringDesencriptado.includes(matrizMensaje[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizMensaje[i][1], matrizMensaje[i][0]);

        }


    }
    return stringDesencriptado;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptador(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = " ";
}

//funcion para copiar el texto encriptado

function btnCopiar() {
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}