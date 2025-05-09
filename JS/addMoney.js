document.getElementById('btn-add-money').
    addEventListener('click', function (event) {
        // Prevent page reload after submit 
        event.preventDefault();

        const amount = parseFloat(document.getElementById('input-add-amount').value);
        const pin = document.getElementById('input-pin').value;
        // console.log(number, pin)

        if (pin === "12") {
            let balance = parseFloat(document.getElementById('account-balance').innerText);
            balance += amount;
            // console.log(balance)
            document.getElementById('account-balance').innerText = balance.toFixed(3);

            document.getElementById('input-add-amount').value = '';
            document.getElementById('input-pin').value = '';
        } else {
            alert('failed');
        }
    })