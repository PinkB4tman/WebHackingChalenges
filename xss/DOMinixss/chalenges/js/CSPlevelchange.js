const hint1 = atob('SSBmZWVsIGxpa2UgdGhlIGNzcCBpcyBtaXNzaW5nIHNvbWV0aGluZy4uLg==');
const hint2 = atob('SSBndWVzcyB3ZSBoYXZlIHRvIGdvIGJhY2sgdG8gdGhlIEJBU0VpY3Mu');
const answer = atob('PGJhc2UgaHJlZj0iaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL01va3NoNDUvaG9zdC14c3Mucm9ja3MvIj4=');


function logHint1() {
    console.log(hint1);
}


function logHint2() {
    console.log(hint2);
}


function logAnswer() {
    console.log(answer);
}


const Bhint1 = document.getElementById('hint1');
const Bhint2 = document.getElementById('hint2');
const Bansw = document.getElementById('answer');


Bhint1.addEventListener('click', logHint1);
Bhint2.addEventListener('click', logHint2);
Bansw.addEventListener('click', logAnswer);



const levelShow = document.getElementById("levelShow");
levelShow.innerHTML = document.cookie;
document.getElementById('levelForm').addEventListener('submit', function (event) {
    // empeche lenvoie du vrai form
    event.preventDefault();


    const level = document.getElementById('difficulty').value;
    document.cookie = 'level=' + level;
    location = window.location
});