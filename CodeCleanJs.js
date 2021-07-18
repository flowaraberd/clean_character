//Codigo desarrollado por: Carlos Alberto.

const limpiar = {
    'ü': 'u', 'é': 'e', 'ú': 'u', 'í': 'i', 'ó': 'o', 'á': 'a', 'ñ': 'n', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U', 'Ü': 'U', 'Ñ': 'N', '¿': '', '?': '', '¡': '', '!': '', '”': '', '“': '', '"': '', '\'': '', '#': '', '$': '', '%': '', '&': '', '(': '', ')': '', '+': '', '=': '', '-': '', '.': '', ',': '', ':': '', ';': '', '/': '', '\\': '', '^': '', '`': '', '_': '', '@': '', '{': '', '}': '', '[': '', ']': '', '|': '', '~': '', '*': '', '<': '', '>': ''
};
function clean(text) {
    let t = text;
    let s = text.length;
    let i = 0;
    let l = '';
    for (; i < s; i++) {
        if (t[i].charCodeAt() <= 255) {
            if (limpiar[t[i]] != '') {
                if (limpiar[t[i]] != undefined) {
                    if (limpiar[t[i]].length == 1) {
                        l += limpiar[t[i]];
                    }
                } else {
                    l += t[i];
                }
            }
        }
    }
    if (i == s) {
        return l.toLowerCase();
    }
}
// Se llama esta funcion primero, recibe comom params una cadena de texto.
function getSplitToArray(idword) {
    let space = 0;
    if (idword != '' && idword != ' ' && idword != null && idword != undefined) {
        let text = clean(idword.trim());//variable publica
        let readyText = '';
        if (text != '' && text != ' ' && text != null && text != undefined) {
            for (let i = 0; i < text.length; i++) {
                if (text[i] == ' ') {
                    space++;
                    if (space == 1) {
                        readyText += text[i];
                    }
                } else if (text[i] != ' ') {
                    space = 0;
                    readyText += text[i];
                }
                if (i == text.length - 1) {
                    let wordBreak = readyText.split(' ');
                    return wordBreak;
                }
            }
        }
    }
}
