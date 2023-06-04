# django-curd-react

## Guia de instalacion

1. Clona el repositorio
```sh
git clone git@github.com:mrandersoncordero/django-crud-react.git
```

2. Ingresa al directorio
```sh
cd django-crud-react
```

3. Crea un entrono virtual
```sh
python -m venv venv 
```

4. Activa el entorno virtual
```sh
source venv/bin/activate
```

5. Instalar las librerias requeridas
```sh
pip install -r requirements.txt
```

6. Generar archivos de migracion de los modelos actuales
```sh
python manage.py makemigrations
```

7. Aplica los cambios a la base de datos
```sh
python manage.py migrate
```

8. Crea un superuser (sigue las instrucciones)
```sh
python manage.py createsuperuser
```

9. Inicia el servidor
```sh
python manage.py runserver
```

10. Accede desde el navegador http://localhost:8000/tasks

## Otras caracteristicas que tomar

 - Puedes acceder al panel administrador navegando a http://localhost:8000/admin e ingresando las credenciales del superuser. Alli podras crear usuarios grupos y para lo que fue creado el proyecto **tareas**

 - Puedes consumir y ver los datos de la api directamente de las vistas que genera django rest framework, dirigiendote a http://localhost:8000/tasks/api/v1/tasks/ alli podras realizar todas las acciones naturales de una api

 - Si necesitas documentacion de las rutas para consumir la api puedes visitar http://127.0.0.1:8000/tasks/docs/ donde te mostrara una breve descripcion de la api y sus rutas

## Correr aplicacion en react

1. Acceder a client
```sh
cd client
```

2. Instalar dependencias
```sh
npm install
```

3. Iniciar servidor
```sh
npm run dev
```

**nota**
Es importante que este corriendo el servidor web de django (pasos del 3 al 10) de lo contrario no podra ver ninguna informacion de la base de datos.
