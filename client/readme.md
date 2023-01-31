### Readme FrontEnd (cliente)

En esta parte del desafío se realizo con vanilla javaScript, html y bootstrap.

El objetivo de hacer el frontEnd es realizar la parte visual del e-commerce, que se pueda ver la información que nos traemos de la api en forma visual en una pagina web para la experiencia del usuario.

- Primero se creo la plantilla HTML donde se creo el Layout de lo que es la pagina visual del e-commerce.
- En el archivo index.html se agrego el CDN de bootstrap para poder trabajar los estilos.
- Se creo dos archivos .js:
    - index.js :  encargado de hacer la llamada a la API REST, mediante FETCH, lo cual nos ayudo a hacer peticiones asíncronas de javaScript, basado en promesas, esto lo que hacia es que nos traía la información del servidor y esta llegaba tal cual como esta explicado en el readme del backEnd. Ademas este archivo es el encargado de “pintar” en el html la información. En esta parte se realizo la petición con la url de cada servicio indicado en el backEnd.
    - search.js :  encargado de la lógica para traer al cliente la información del producto ya filtrado en el backEnd. Este también se hace con petición FETCH. En esta parte se realizo la petición con la url de cada servicio indicado en el backEnd mas la información del nombre proporcionada por el frontEnd(lo que la persona escriba).



    