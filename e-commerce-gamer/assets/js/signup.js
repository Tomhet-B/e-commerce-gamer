// Selecciona el formulario de registro por su ID
const signupForm = document.querySelector('#signupForm');

//Agregar un evento para el envio del formulario.
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //Obtener los valores del formulario.
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Obtiene la lista de usuarios del almacenamiento local 
    // || [] o inicializa un arreglo vacío si no hay usuarios
    const Users = JSON.parse(localStorage.getItem('users')) || [];

     // Verifica si el usuario ya está registrado
    const isUserRegistered = Users.find(user => user.email === email);

     // Si el usuario ya está registrado, muestra una alerta y detiene la ejecución
    if(isUserRegistered){
        Swal.fire({
            icon: 'error',
            title: 'Error de datos!',
            text: 'El correo que ingresaste ya esta registrado.'
        })
        return
    }

    // Agrega un nuevo usuario al arreglo de usuarios
    Users.push({name, email, password});

   // Almacena la lista de usuarios actualizada en el almacenamiento local
    localStorage.setItem('users', JSON.stringify(Users));

    // Muestra una alerta de registro exitoso con SweetAlert2
    Swal.fire({
        icon: 'success',
        title: 'Registro Exitoso!',
        text: 'Tu registro se ha realizado con exito.'
    }).then(() => {
        window.location.href = 'login.html'
    });
})


