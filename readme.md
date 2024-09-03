- Para el proyecto backend use el comando npm install para instalar todos los modulos requeridos para su correcto funcionamiento.
- No olvide cambiar las variables de entorno de la bd por las que tiene en su ambiente en el archivo .env del proyecto backend.
- Para este proyecto usamos el paquete de promise-mysql. IMPORTANTE! la autenticacion que se debe usar en mysql es la version Legacy asociado a mysql_native_password, si se usa una version mayor como la 8,
  no va a funcionar. Debe tener en cuenta que esta version es usada como aprendizaje y para la implementacion de un proyecto mas robusto es recomendado buscar un paquete compatible con la version 8, ya que
  a nivel de seguridad es mejor.
- Ahora ejecute los scripts de creacion de bd y tablas en su motor de bd, en caso de que haga referencia a otra tabla debera modificarla en la clase product.js.
- Para ejecutar el proyecto use el comando npm run dev.
