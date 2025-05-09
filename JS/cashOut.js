document.getElementById('btn-cash-out').
    addEventListener('click', function (event) {
        // Prevent page reload after submit 
        event.preventDefault();

        const cashOut = parseFloat(document.getElementById('out-amount').value);
        const pin = document.getElementById('out-pin').value;

        if (pin === "12") {
            let balance = parseFloat(document.getElementById('account-balance').innerText);
            console.log(balance)
            if (cashOut <= balance) {
                balance -= cashOut;
                document.getElementById('account-balance').innerText = balance.toFixed(3);
                document.getElementById('out-amount').value = '';
                document.getElementById('out-pin').value = '';
            } else {
                alert('no sufficient balance');
            }
        } else {
            alert('failed');
        }
    })