var login = document.querySelector('#login')
var loginbtn = document.querySelector('.login')
var exit = document.querySelector('.exit')
var login_bg = document.querySelector('.login_bg')
var register = document.querySelector('#register')
var registerbtn = document.querySelector('.register')
var cancell = document.querySelector('.cancel')
var register_bg = document.querySelector('.register_bg')


const cancel = (btn) => {
    btn.classList.add('hiden')
}


loginbtn.onclick = () => {
    console.log('a');
    login.classList.remove('hiden')
}
exit.onclick = () => {
    cancel(login)
}
registerbtn.onclick = () => {
    console.log('a');
    register.classList.remove('hiden')
}
cancell.onclick = () => {
    cancel(register)
}