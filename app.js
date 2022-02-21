const button = document.querySelector('a')
const user = document.querySelector('#name')
const password = document.querySelector('#password')
const body = document.querySelector('body')
const user_credentials = [{
    user_name: 'ironman123',
    password_log: 'iron123'
}]


button.addEventListener('click', () => {
    
    if(user.value === user_credentials[0].user_name && password.value === user_credentials[0].password_log){
        button.href = './loggedIn.html'
    } else if (user.value === '' || password.value === ''){
        enterTheDetails()

    }
    else {
        incorrectFunc()
    }
})

const warning = document.createElement('p')
warning.classList.add('warn_user')
const details = document.createElement('p')
details.classList.add('details')


const incorrectFunc = () => {
    warning.innerText = 'Incorrect User Credentials';
    details.innerText = ''
    body.appendChild(warning)
}



const enterTheDetails = () => {
    details.innerText = 'Please Enter the details to Proceed'
    warning.innerText = ''
    body.appendChild(details)
}

