// Selecciona el formulario de inicio de sesión por su ID
const loginForm = document.querySelector('#loginForm')

// Agrega un evento de envío al formulario
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //Obtener los valores del formulario.
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Obtiene la lista de usuarios del almacenamiento local 
    // || [] o inicializa un arreglo vacío si no hay usuarios
    const Users = JSON.parse(localStorage.getItem('users')) || [];

    // Busca un usuario que coincida con el correo electrónico y la contraseña proporcionados
    const validUser = Users.find(user => user.email === email && user.password === password);

     // Si no se encuentra un usuario válido, muestra una alerta con SweetAlert2
    if(!validUser){
        Swal.fire({
            icon: 'error',
            title: 'Error de datos!',
            text: 'Usuario y/o contraseña incorrectos!'
        })
        return
    }

    // Almacena el usuario válido en el almacenamiento local
    localStorage.setItem('login_success', JSON.stringify(validUser));

    // Redirige al usuario a la página de inicio (index.html)
    window.location.href = 'products.html';
})