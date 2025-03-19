# Sistema de Gestión de Personas

## Descripción
Este sistema permite registrar datos de varias personas (nombre, edad, nota) y generar reportes. Al finalizar el programa, se muestra el listado completo de datos cargados y otro listado ordenado por nota de mayor a menor.

## Estructura del Proyecto
```
/NIVELACION-ARRAYS
├── js/
│   ├── index.html    # Interfaz web para la versión JavaScript
│   └── main.js       # Versión JavaScript del sistema
├── python/
│   └── index.py      # Versión Python del sistema
└── README.md         # Este archivo de documentación
```

## Requisitos Previos

### Para la versión JavaScript:
- Navegador web moderno con soporte para JavaScript
- No se requieren instalaciones adicionales

### Para la versión Python:
- Python 3.x instalado en el sistema
- No se requieren bibliotecas adicionales

## Instrucciones de Ejecución

### Versión JavaScript:
1. **Abrir el archivo HTML**:
   - Navegue a la carpeta `js`
   - Haga doble clic en el archivo `index.html` para abrirlo en su navegador predeterminado
   - O arrastre el archivo `index.html` a una ventana de navegador abierta

2. **Acceder a la consola del navegador**:
   - **Windows/Linux**: Presione F12 o haga clic derecho → Inspeccionar → Consola
   - **Mac**: Presione Cmd+Option+J o haga clic derecho → Inspeccionar → Consola

3. **Interactuar con el programa**:
   - El programa se inicia automáticamente al cargar la página
   - Siga las instrucciones mostradas en la consola para agregar personas y generar reportes

### Versión Python:
1. **Abrir una terminal o línea de comandos**:
   - **Windows**: Presione Win+R, escriba "cmd" y presione Enter
   - **Mac**: Abra la aplicación Terminal
   - **Linux**: Abra la aplicación Terminal

2. **Navegar al directorio del proyecto**:
   ```bash
   cd ruta/a/NIVELACION-ARRAYS/python
   ```

3. **Ejecutar el programa**:
   ```bash
   python index.py
   ```
   O si tiene múltiples versiones de Python instaladas:
   ```bash
   python3 index.py
   ```

4. **Interactuar con el programa**:
   - Siga las instrucciones mostradas en la terminal para agregar personas y generar reportes

## Funcionalidades del Sistema

### Menú Principal:
1. **Agregar persona**: Permite ingresar datos de una nueva persona
2. **Mostrar listados**: Muestra el listado original y el ordenado por notas
3. **Finalizar**: Termina el programa y muestra los listados finales

### Validación de Datos:
- **Nombre**: Acepta cualquier texto
- **Edad**: Debe ser un número entero positivo
- **Nota**: Debe ser un número entre 0 y 10 (acepta decimales)

### Reportes Generados:
- **Listado Original**: Muestra los datos en el orden en que fueron ingresados
- **Listado Ordenado**: Muestra los datos ordenados por nota de mayor a menor

## Estructura de Datos
El programa utiliza una lista/array principal donde cada elemento es una sublista/subarray con el formato:
```
[nombre, edad, nota]
```

