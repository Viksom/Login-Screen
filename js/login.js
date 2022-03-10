function main () {

    let loginButton = document.getElementById("loginButton")
    const email = document.getElementById("email")
    const password = document.getElementById("password")

    loginButton.addEventListener('click', (event) => {
        
        let emailValue = email.value
        let passwordValue = password.value

        const apiResponse = performeLogin()
        
        apiResponse.then( data => {

            console.log(data)

            const { user } = data
            handleLogin(user, {
                email: emailValue,
                password: passwordValue
            })
        })
    })
}

async function performeLogin(){

    let result

    return await fetch('../DB.json').then( response => response.json()).then(data => {
        return data
        })
}

function handleLogin(apiResponse, userInput){
    const { password, email } = apiResponse
    const userInputPassword = userInput.password
    const userInputEmail = userInput.email

    console.log(password, email, userInputPassword, userInputEmail)
    
    if (userInputEmail === email && userInputPassword === password){
        window.location.href = 'https://github.com/Viksom'
    }else{
        alert('Usuário não existe')
    }
}

window.onload = main