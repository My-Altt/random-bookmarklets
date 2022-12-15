const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

let i = 0;
let n = 0;
let l = prompt('how many times do you want the alphabet to repeat');

while (i < alphabet.length) {
    alert(alphabet[i]);
    i++;
    if (i == 26) {
    i = i * 0;
    n++;
    if (n == l) {
    break;
}
}
}

