// document.getElementById('btn-cash-out').
//     addEventListener('click', function (event) {
//         // Prevent page reload after submit
//         event.preventDefault();

//         const cashOut = parseFloat(document.getElementById('out-amount').value);
//         const pin = document.getElementById('out-pin').value;

//         if (pin === "12") {
//             let balance = parseFloat(document.getElementById('account-balance').innerText);
//             console.log(balance)
//             if (cashOut <= balance) {
//                 balance -= cashOut;
//                 document.getElementById('account-balance').innerText = balance.toFixed(3);
//                 document.getElementById('out-amount').value = '';
//                 document.getElementById('out-pin').value = '';
//             } else {
//                 alert('no sufficient balance');
//             }
//         } else {
//             alert('failed');
//         }
//     })

document.getElementById('btn-cash-out').
    addEventListener('click', function (event) {
        // Prevent page reload after submit
        event.preventDefault();

        const cashOut = getInputById('out-amount');
        const pin = getInputById('out-pin');
        let balance = getTextById('account-balance');
        if (isNaN(cashOut) || isNaN(pin)) {
            alert("Add Amount & PIN.");
        } else if (pin === 12 && cashOut <= balance && cashOut > 0) {
            balance -= cashOut;
            setById('account-balance', balance.toFixed(3));

            //create element and append child
            addElement('Cash Out', cashOut.toFixed(3), balance.toFixed(3), 'transection-container');

            // after submit, input cell clean
            cleanInputId('out-amount');
            cleanInputId('out-pin');
        } else {
            alert('Invalid Amount or PIN');
            cleanInputId('out-amount');
            cleanInputId('out-pin');
        }
    })
