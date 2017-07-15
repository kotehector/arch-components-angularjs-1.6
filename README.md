# Curso Angular Fundamentals

## Cambia de branch para ver otros ejercicios

## ¿Que vamos a utilizar?
1. nodejs (little-server)
2. bower
3. gulp
4. angularjs

## Como empezar
1. Descarga o clona el repositorio
2. En la carpeta raíz lanzamos: `npm install`
2. En la carpeta raíz lanzamos: `bower install`
3. En la carpeta raíz lanzamos: `gulp`
4. En la carpeta raíz lanzamos: `npm run dev`

## Temario
 1. Introducción
  - Arquitectura y anatomía de AngularJs
  - Getting started y setup
  - Debug básico
 2. Controladores
  - Crear un Controlador
  - Unir al $scope
  - Inyección de dependencias y minificación
  - Utilizando 'controllerAs'
 3. Proyecto 1
 4. Directivas: renderizar html
  - ng-repeat
  - ng-show / ng-hide
  - ng-if
  - ng-switch
  - ng-class
  - ng-model
  - ng-href / ng-src
 5. Proyecto 2
 6. Eventos
  - ng-click
  - ng-submit
  - ng-blur / ng-focus
  - ng-change
 7. Proyecto 3
 8. Expresiones
 9. Proyecto 4
10. Servicios
  - Servicios y factorías
  - $http y unión con las vistas
11. Proyecto 5
12. Filtros y formateo
  - Date, currency
  - Filtrar y ordenar colecciones
13. Componentes y Directivas personalizadas
  - Comportamiento de Directivas
  - Templates y Controladores de Directivas
  - Vincular porpiedades y Directivascon el estado
14. Proyecto 6
15. Formularios
  - Unir modelo con el formulario (Vista)
  - Validación de estados internos
  - ng-options
  - ng-disabled
  - Validación basadas en datos
16. Ejercicio
17. Rutas y vistas
  - Uso de ui-router
18. Ejercicio


## Gulp Tasks dentro del gulpfile.js
- `gulp`- lanza la tarea por defecto (las tres siguientes a la vez)
- `gulp inject` - Injecta los .css y .js dentro del index.html
- `gulp build-css` - Compilado de Sass
- `gulp dev` - Levanta el servidor
