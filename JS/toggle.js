// hidden double click, or one click show then 2nd click hide .
// let cashoutF = 1;
// let addmoneyF = 1;
// document.getElementById('btn-show-cash-out').
//     addEventListener('click', function () {
//         if (cashoutF == 1) {
//             cashoutF = 0;
//             addmoneyF = 1; // if add money flag is already 0, then 1st click add money from not show
//             document.getElementById('cash-out-from').classList.remove('hidden');
//             document.getElementById('add-money-from').classList.add('hidden');
//         } else {
//             cashoutF = 1;
//             document.getElementById('cash-out-from').classList.add('hidden');
//         }
//     })

// document.getElementById('btn-show-add-money').
//     addEventListener('click', function () {
//         if (addmoneyF == 1) {
//             addmoneyF = 0;
//             cashoutF = 1; // if add money flag is already 0, then 1st click cash out from not show
//             document.getElementById('cash-out-from').classList.add('hidden');
//             document.getElementById('add-money-from').classList.remove('hidden');
//         } else {
//             addmoneyF = 1;
//             document.getElementById('add-money-from').classList.add('hidden');
//         }
//     })

document.getElementById('btn-show-cash-out').
    addEventListener('click', function () {
        showSection('cash-out-from');
    })

document.getElementById('btn-show-add-money').
    addEventListener('click', function () {
        showSection('add-money-from');
    })

document.getElementById('btn-show-transection').
    addEventListener('click', function () {
        showSection('transection-from');
    })