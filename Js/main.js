// Función para encriptar el texto usando cifrado César (solo letras minúsculas)
function encrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            // Solo para letras minúsculas
            let encryptedCharCode = ((charCode - 97 + shift) % 26) + 97;
            result += String.fromCharCode(encryptedCharCode);
        } else {
            result += text.charAt(i); // Mantiene caracteres especiales sin cambios
        }
    }
    return result;
}

// Función para desencriptar el texto usando cifrado César (solo letras minúsculas)
function decrypt(encryptedText, shift) {
    let result = '';
    for (let i = 0; i < encryptedText.length; i++) {
        let charCode = encryptedText.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            // Solo para letras minúsculas
            let decryptedCharCode = ((charCode - 97 - shift + 26) % 26) + 97;
            result += String.fromCharCode(decryptedCharCode);
        } else {
            result += encryptedText.charAt(i); // Mantiene caracteres especiales sin cambios
        }
    }
    return result;
}

// Función para encriptar el texto
function encryptText() {
    let input = document.getElementById('input-text').value.toLowerCase(); // Convertimos a minúsculas
    let shift = 7; // Puedes ajustar el desplazamiento como desees
    let encrypted = encrypt(input, shift);
    let encryptedTextArea = document.getElementById('encrypted-text');
    let copiar = document.getElementById('copiar');
    let rightContainer = document.getElementById('right-container');
    let placeholderImg = document.getElementById('placeholder-img');
    let placeholderH2 = document.getElementById('placeholder-h2');
    let placeholderH5 = document.getElementById('placeholder-h5');

    if (input.trim() !== '') {
        // Si hay texto en el input se muestra el texto encriptado y se oculta el placeholder de la derecha
        encryptedTextArea.value = encrypted; // Mostramos el texto encriptado
        encryptedTextArea.style.display = 'block'; // Mostramos el textarea encriptado
        copiar.style.display = 'block'; // Mostramos el botón de cop
        rightContainer.classList.add('encrypted'); // Añadimos la clase 'encrypted'
        placeholderImg.style.display = 'none'; // Ocultamos el placeholder
        placeholderH2.style.display = 'none'; // Ocultamos el placeholder
        placeholderH5.style.display = 'none'; // Ocultamos el placeholder
    } else {
        // Si no hay texto en el input se limpia el textarea y se muestra el placeholder
        encryptedTextArea.value = ''; // Limpiamos el textarea
        encryptedTextArea.style.display = 'none'; // Ocultamos el textarea encriptado
        rightContainer.classList.remove('encrypted'); // Quitamos la clase 'encrypted'
        placeholderImg.style.display = 'block'; // Mostramos el placeholder
        placeholderH2.style.display = 'block'; // Mostramos el placeholder
        placeholderH5.style.display = 'block'; // Mostramos el placeholder
    }
}

// Función para desencriptar el texto
function decryptText() {
    let encryptedText = document.getElementById('encrypted-text').value;
    let shift = 7; // Asegúrate de usar el mismo desplazamiento que en la encriptación
    let decrypted = decrypt(encryptedText, shift);
    document.getElementById('encrypted-text').value = decrypted; // Mostramos el texto desencriptado en el input de texto
}

// Función para copiar el texto del textarea encriptado
function copyText() {
    let encryptedText = document.getElementById('encrypted-text').value;
    let messageContainer = document.getElementById('message-container');

    // Intentar copiar el texto al portapapeles
    navigator.clipboard
        .writeText(encryptedText)
        .then(() => {
            // Éxito al copiar
            showMessage('Texto copiado: ' + encryptedText, 'success');
        })
        .catch((err) => {
            // Manejar errores si no se puede copiar
            console.error('Error al copiar texto: ', err);
            showMessage(
                'Error al copiar texto. Por favor, intenta nuevamente.',
                'error',
            );
        });
}

// Función para mostrar un mensaje
function showMessage(message, type) {
    let messageContainer = document.getElementById('message-container');

    // Crear un elemento div para el mensaje
    let alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', type);
    alertDiv.textContent = message;

    // Agregar el mensaje al contenedor
    messageContainer.innerHTML = ''; // Limpiar mensajes anteriores
    messageContainer.appendChild(alertDiv);

    // Ocultar el mensaje después de 3 segundos (3000 milisegundos)
    setTimeout(() => {
        messageContainer.innerHTML = '';
    }, 3000); // 3 segundos
}
