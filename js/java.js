//eye voor wachtwoord...
function viewPassword() {
    var passwordInput = document.getElementById('password-field');
    var passStatus = document.getElementById('pass-status');

    if (passwordInput.type == 'password') {
        passwordInput.type = 'text';
        passStatus.className = 'fa fa-eye-slash';

    } else {
        passwordInput.type = 'password';
        passStatus.className = 'fa fa-eye';
    }
}
// switch
const vlakken = document.querySelectorAll('.vlak');
const rimpel = document.createElement('div');
rimpel.classList = 'rimpel';


function maakRipple(e) {
    console.log(e);
    let x = e.pageX - this.offsetLeft;
    let y = e.pagey - this.offsetTop;
    rimpel.style.left = x + 'px';
    rimpel.style.top = y + 'px';
    e.target.append(rimpel);
}

for (let i = 0; i < vlakken.length; i++) {
    vlakken[i].addEventListener('click', maakRipple);
}