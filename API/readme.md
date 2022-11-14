### Readme BackEnd (API-REST)

Este desafío para la parte del backEnd, se pedia realizar una API rest que pudiera consumir una base de datos de AWS, con el objetico de hacer un servidor donde desde el frontEnd prodriamos consumir esa información. 

Para esta parte del desafío se realizo con Node.js y Express, junto con varias librerías las cuales son:

- npm init -y : Esto es para iniciar el proyecto de node y que se cree en nuestra carpeta raiz (API) el archivo package.jason, donde se instalaran todas nuestras dependencia para el proyecto en la parte del backEnd.
- npm i dotenv : Esto para poder trabajar con variables de entorno.
- npm i express : Framework que se utiliza para node.js.
- npm i promise-mysql : Se utiliza para poder conectarnos a una base de datos mysql y poder hacer consultas.
- npm i @babel/cli @babel/core @babel/node @babel/preset-env : transcompilador de javaScript
- npm i morgan : Se usa para ver las peticiones que haremos en el proyecto (GET)
- npm i nodemon : Se utiliza para que el servidor se actualice automáticamente y podamos ver la información sin necesidad de estar deteniendo el servidor y volverlo a cargar.

La base de datos consta de dos tablas una de “products” y otra de “category”, y se tiene que crear una archivo .env en la raíz del proyecto, donde se pondrá los datos para la conexión a la base de datos.

Para hacer la conexión hacia la base de datos se utilizaron las siguientes configuraciones:

- Se crea la constante de conexión en la que llamaremos la librería promise-mysql y haremos un createPool, esto para indicarle a la base de datos los parámetros de conexión los cuales son:
    - connectionLimit : esto para que no sea rechazada las peticiones después de los 5 segundos no sean abortadas.
    - host : donde esta aloja a base de datos.
    - user: nombre de usuario con que se ingresa a la base de datos.
    - password :  contraseña para ingresar a la base de datos.
    - database : nombre de la base de datos.
    - queueLimit :  numero máximo de peticiones para conexión.
    - waitForConnection : Determina la acción del pool cuando no hay conexiones disponibles y se ha alcanzado el límite. Si es true, el pool pondrá en cola la solicitud de conexión y la llamará cuando haya una disponible.
    - categories : nombre de la categoría de cada producto.

### Estructura JSON

Al Realizar una petición HTTP a la ruta (http://localhost:3001/api/products) el servicio retorna un JSON con la siguiente estructura (array de objetos) y esta url devuelve todos los productos.
[
	{
		"id": 5,
		"name": "ENERGETICA MR BIG",
		"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
		"price": 1490,
		"discount": 20,
		"category": 1
	}
]

- id : Identificador único de cada producto.
- name :  Nombre de cada producto.
- url_image: Imagen de cada producto.
- pice : Precio de cada producto.
- discount : Porcentaje de descuento del producto
- category : Identificador de la categoría

Al Realizar una petición HTTP a la ruta (http://localhost:3001/api/products/search) el servicio retorna un JSON con la siguiente estructura (array de objetos).

Como en esta petición estamos pidiendo la información de un producto en especifico. Esta búsqueda se realiza por el nombre del producto, el cual es obtenido por query en la url, como un ejemplo pudiera quedar así la ruta: (http://localhost:3001/api/products/search?name=Fanta)
[
	{
		"id": 52,
		"name": "Fanta",
		"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/fanta_2lt5236.jpg",
		"price": 1500,
		"discount": 0,
		"category": 4
	}
]

Al Realizar una petición HTTP a la ruta (http://localhost:3001/api/products/beer) el servicio retorna un JSON con la siguiente estructura (array de objetos).

Esta ruta lo que hace es filtrar todos los productos y traernos solo los que están en categorías de “cerveza”, como se realizo esta ruta también están realizadas las otras categorías.
[
	{
		"name": "Cerveza Escudo Normal LATA 350CC",
		"price": 600,
		"url_image": "",
		"categories": "cerveza"
	},
	{
		"name": "Cerveza Escudo Sin Filtrar LATA 350CC",
		"price": 800,
		"url_image": "",
		"categories": "cerveza"
	}
]

las otras categorías están distribuidas en esta forma, vale acotar que ya su explicación esta arriba en la categoría de “cerveza”

(http://localhost:3001/api/products/ron)

(http://localhost:3001/api/products/energetic)

(http://localhost:3001/api/products/beverage)

(http://localhost:3001/api/products/pisco)

(http://localhost:3001/api/products/snack)

(http://localhost:3001/api/products/vodka)
