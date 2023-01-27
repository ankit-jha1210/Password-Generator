const dynamicText = document.getElementById('dynamicText');
const slider = document.getElementById('slider');
const btn = document.getElementById('btn');
const passText = document.getElementById('passText');
let pass = '';
const copyBtn = document.getElementById('copy');
const checkboxes = document.querySelectorAll('.check');
let isUppercase = false, isLowercase = false;
let isNumbers = false, isSpecialCharacters = false;
slider.oninput = function () {
    dynamicText.innerHTML = this.value;
}

copyBtn.onclick = function () {
    if (pass === '') {
        alert('Error');
        return;
    }
    navigator.clipboard.writeText(pass);

}


checkboxes.forEach(checkbox => {
    checkbox.onclick = function () {
        if (checkbox.id === 'upper') isUppercase = !isUppercase
        if (checkbox.id === 'lower') isLowercase = !isLowercase;
        if (checkbox.id === 'num') isNumbers = !isNumbers;
        if (checkbox.id === 'char') isSpecialCharacters = !isSpecialCharacters
    }
})

const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()+";
btn.onclick = function (e) {
    const passLength = dynamicText.innerHTML - '0';

    let possibilities = '';
    pass = ''
    if (!isLowercase && !isNumbers && !isSpecialCharacters && !isUppercase) {
        alert('Pls select something');
        return;
    }
    if (isLowercase) possibilities += lowercaseCharacters;
    if (isUppercase) possibilities += uppercaseCharacters;
    if (isNumbers) possibilities += numbers;
    if (isSpecialCharacters) possibilities += specialCharacters;
    for (let i = 0; i <= passLength; i++) {
        const idx = Math.floor(Math.random() * possibilities.length + 1);
        pass += possibilities.charAt(idx);
    }
    passText.value = pass;
    // navigator.clipboard.writeText(pass)

}