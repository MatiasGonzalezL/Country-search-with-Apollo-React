# Desafío para Software Engineers

Nombre postulante: [Matías González]
Link a la app en producción: [LINK DEL DEPLOY]

## Pregunta abierta

"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

Respuesta: ------> Si queremos bajar el tiempo de respuesta debemos dividir para conquistar, es decir, empaquetaría la lista de asistencia por semana, mes o año (dependiendo del tiempo que lleve el alumno), probablemente por semana sería lo más apropiado. De esta forma podemos sacar un promedio o conteo por semana, luego por mes y agruparlos en categorias más pequeñas. De esta forma bajaríamos los 90 millones de datos a cerca de 18 millones si lo hacemos por semana (5 días hábiles) y a cerca de 4,5 millones si lo hacemos por mes (20 días hábiles aprox.). Esto obviamente bajaría el tiempo de respuesta al tener menos datos con los que trabajar y a los que llamar, ya que el sistema almacenaría los datos antiguos y no los llamaría a menos que el usuario lo solicitara. Sumado a lo anterior, utilizaría React para hacer uso de los hooks y poder almacenar la información con los states y además poder trabajar mejor con las variables, para el diseño lo más usual es Bootstrap, ya que así nos ahorramos tiempo al tener elementos disponibles ya hechos.

## Instrucciones

Debes crear un buscador de países consultando el [siguiente grafo](https://countries.trevorblades.com/). Este código contiene una base para seguir con la aplicación en React y ApolloClient. Queda a disposición tuya cualquier cambio, ya sea de estructura, estilo, etc.

Se espera que logres hacer una aplicación parecida a la del siguiente diagrama:

![image1](imgs/1.png)
![image2](imgs/2.png)

La funcionalidad y estructura debe ser igual, pero el diseño y variantes (por ejemplo, cambiar colores de las cosas) queda a tu gusto. **Considerar que el ícono al lado del nombre de cada país es el emoji**.

Además de esto, se espera que hagas deploy de tu app en el servicio que desees (Heroku, Netlify, AWS, Github Pages, etc).

## Consideraciones

- Se espera que uses buenas prácticas como gitflow (pull requests y commits), orden del código, estructura, eficiencia, etc.
- Puedes dejar comentarios de decisiones que tuviste que tomar y del por qué en este repositorio.
- Se va a considerar un buen diseño de UX/UI.

## Hints

Acá van algunas cosas que pueden ser útiles (o no 👀):

- [Gitignore](https://www.toptal.com/developers/gitignore)
- [GraphQL](https://www.howtographql.com/)
- [React](https://es.reactjs.org/)
- [Styled components](https://styled-components.com/docs/basics)
- [ApolloClient](https://www.apollographql.com/docs/react/)
- [Lodash](https://lodash.com/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint](https://commitlint.js.org/#/)
- [Eslint](https://eslint.org/)
- [Eslint airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [Husky](https://www.npmjs.com/package/husky)
