
## Instrucciones de Ejecución
Primero hay que instalar node_modules y luego se creará tambien la carpeta .next
```bash
npm install
```

Para ejecutar en modo desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

## Tecnologías Utilizadas

Este proyecto se desarrolló utilizando Next.js, Tailwind CSS y JavaScript.


## Control de Versiones

Se utilizó Git para llevar los cambios al repositorio remoto, siguiendo la nomenclatura propuesta en la consigna.


## Proceso de Desarrollo

Durante el desarrollo, se siguieron ciertas prácticas para mantener la organización y limpieza del proyecto.

### Ramas y Merges:

- Se realizaron merges principalmente con la rama `develop`, manteniendo la rama `main` más limpia.
- Se crearon ramas por tarea y se ordenaron por su creación. Luego se realizaron los merges en `develop` para mantener una organización personal.

### Comentarios sobre Commits:

- Cada rama corresponde a una tarea asignada, con commits organizados por sección.
- Se pueden encontrar comentarios detallados de los cambios en cada pull request. En GitHub, dentro de la lista de commits y merges, se puede hacer clic en el número correspondiente para ver mis comentarios de la pull request.
  

### Estilo de Código:

- Se instaló ESLint Standard para identificar y corregir errores de escritura de manera eficiente.



### Autocritica respecto al filtro:

1. En el filtro de personajes, es necesario hacer doble clic en los checkbox para seleccionarlos. Se debe mejorar la lógica en `NavPagination`.
2. Por ahora no pude dar paginacion a los personajes luego del filtrado, se muestran todos los personajes filtrados pero en una sola pagina aunque sean mas de 10.
3. Me falta hacer que se agreguen mas filtros del mismo tipo al mismo tiempo. Por ahora puedo poner un tipo de color de ojos y un genero

### Autocritica respecto al Lazy Loading:

Es la primera vez que lo utilicé sinceramente. Es bastante interesante, lo voy a usar en mis próximos proyectos y seguir aprendiendo.


## Recursos Utilizados

- Se utilizaron varios iconos obtenidos de fuentes como [Star Wars Icons](https://icons8.com "‌") y [Logos, Symbols – Free Download PNG, SVG (icons8.com)](https://icons8.com "‌").
- Los estilos iniciales del menú desplegable del filtro de personajes se basaron en [Tailwind CSS Filters - Flowbite](https://flowbite.com "‌").
