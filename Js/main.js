// Función para encriptar texto usando cifrado César
function encrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        let encryptedCharCode = ((charCode - 65 + shift) % 26) + 65; // Cifrado César para letras mayúsculas
        result += String.fromCharCode(encryptedCharCode);
    }
    return result;
}

// Función para desencriptar texto usando cifrado César
function decrypt(encryptedText, shift) {
    let result = '';
    for (let i = 0; i < encryptedText.length; i++) {
        let charCode = encryptedText.charCodeAt(i);
        let decryptedCharCode = ((charCode - 65 - shift + 26) % 26) + 65; // Descifrado César para letras mayúsculas
        result += String.fromCharCode(decryptedCharCode);
    }
    return result;
}
