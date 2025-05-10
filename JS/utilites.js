function getInputById(id) {
    const value = parseFloat(document.getElementById(id).value);
    return value;
}

function getTextById(id) {
    const text = parseFloat(document.getElementById(id).innerText);
    return text;
}

function setById(id, balance) {
    document.getElementById(id).innerText = balance;
}

function cleanInputId(id) {
    document.getElementById(id).value = '';
}