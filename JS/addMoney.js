// document.getElementById('btn-add-money').
//     addEventListener('click', function (event) {
//         // Prevent page reload after submit
//         event.preventDefault();

//         const amount = parseFloat(document.getElementById('input-add-amount').value);
//         const pin = document.getElementById('input-pin').value;
//         // console.log(number, pin)

//         if (pin === "12") {
//             let balance = parseFloat(document.getElementById('account-balance').innerText);
//             balance += amount;
//             // console.log(balance)
//             document.getElementById('account-balance').innerText = balance.toFixed(3);

//             document.getElementById('input-add-amount').value = '';
//             document.getElementById('input-pin').value = '';
//         } else {
//             alert('failed');
//         }
//     })

// through function Use 
document.getElementById('btn-add-money').
    addEventListener('click', function (e) {
        e.preventDefault();
        const addMoney = getInputById('input-add-amount');
        const pin = getInputById('input-pin');
        console.log(addMoney, pin);

        if (isNaN(addMoney) || isNaN(pin)) {
            alert("Add Amount & PIN.");
        } else if (pin === 12 && addMoney > 0) {
            let balance = getTextById('account-balance');
            balance += addMoney;
            console.log(balance)

            setById('account-balance', balance);

            cleanInputId('input-add-amount');
            cleanInputId('input-pin');

        } else {
            alert('Invalid Amount or PIN');
            cleanInputId('out-amount');
            cleanInputId('out-pin');
        }
    })