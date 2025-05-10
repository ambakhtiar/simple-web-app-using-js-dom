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
    // After Submit, then input cell clean
    document.getElementById(id).value = '';
}

function showSection(id) {
    document.getElementById('add-money-from').classList.add('hidden');
    document.getElementById('cash-out-from').classList.add('hidden');
    document.getElementById('transection-from').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

// create Elemnt and add child by id
function addElement(type, balance, newBalance, id) {
    const div = document.createElement('div');
    if (type === "Add Money") {
        div.innerHTML = `
            <h2 class="text-2xl text-green-700">${type}</h2>
            <p>Balance: ${balance} New Balance ${newBalance}</p>
        `;
    } else {
        div.innerHTML = `
            <h2 class="text-2xl text-red-500">${type}</h2>
            <p>Balance: ${balance} New Balance ${newBalance}</p>
        `;
    }

    document.getElementById(id).appendChild(div);
}

