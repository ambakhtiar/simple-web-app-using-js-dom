// from submit reloading ther page 

document.getElementById('btn-login').
    addEventListener('click', function (event) {
        event.preventDefault(); // for from submit reloading

        const phoneNumber = document.getElementById('phone-number').value;
        const pin = document.getElementById('pin').value;

        if (phoneNumber === "12" && pin === "12") {
            // console.log("right");
            window.location.href = './home.html';
        } else {
            alert("Invalid Number or PIN");
            cleanInputId('phone-number');
            cleanInputId('pin');
        }
    })