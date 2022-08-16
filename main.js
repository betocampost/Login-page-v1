const username = document.getElementById('Usuario')
const password = document.getElementById('Contraseña')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        Usuario: username.value,
        Contraseña: password.value
    }

    console.log(data)
})