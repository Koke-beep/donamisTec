# DonamisTec - MovieApp

Aplicacion reactiva de dos vistas responsive: dashboard de películas y detalle de cada una de ellas.

* Store del estado de la aplicación propio mediante observables (básico).
* HttpInterceptor: intercepta todas las peticiones y le añade la api key. Los errores de petición se gestionan desde este punto, mediante pipes rxjs y un componente toast.
* Toast: componente que se muestra al producirse un error en alguna petición gestionado por un servicio observable.

## Comenzando 🚀

Obtener una copia del proyecto en funcionamiento en tu máquina local:

```
    git clone https://github.com/Koke-beep/donamisTec.git
    cd movieApp
    npm install
    ng serve
```


## Construido con 🛠️

* Angular v.11.2.19
* RxJS
* TS

---
