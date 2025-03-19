"""
Sistema de Gestión de Personas
Este programa permite registrar personas con sus datos (nombre, edad, nota)
y muestra los listados: original y ordenado por nota (mayor a menor)
"""

def gestion_personas():
    """Función principal del programa que gestiona el menú y flujo de ejecución"""
    personas = []
    continuar = True
    
    print("=== SISTEMA DE GESTIÓN DE PERSONAS ===")
    
    # Bucle principal para ingresar datos
    while continuar:
        print("\n1. Agregar persona")
        print("2. Mostrar listados")
        print("3. Finalizar")
        
        opcion = input("Seleccione una opción (1-3): ")
        
        if opcion == "1":
            agregar_persona(personas)
        elif opcion == "2":
            mostrar_listados(personas)
        elif opcion == "3":
            continuar = False
            mostrar_listados(personas)
            print("¡Programa finalizado!")
        else:
            print("Opción no válida. Intente nuevamente.")

def agregar_persona(personas):
    """Función para solicitar y validar los datos de una persona"""
    print("\n--- Ingreso de datos ---")
    
    nombre = input("Ingrese el nombre: ")
    
    # Validar edad
    while True:
        try:
            edad = int(input("Ingrese la edad: "))
            if edad < 0:
                print("Por favor, ingrese una edad válida (número positivo).")
                continue
            break
        except ValueError:
            print("Por favor, ingrese un número entero válido.")
    
    # Validar nota
    while True:
        try:
            nota = float(input("Ingrese la nota (0-10): "))
            if nota < 0 or nota > 10:
                print("Por favor, ingrese una nota válida (entre 0 y 10).")
                continue
            break
        except ValueError:
            print("Por favor, ingrese un número válido.")
    
    # Agregar la persona a la lista
    personas.append([nombre, edad, nota])
    print("¡Persona agregada con éxito!")

def mostrar_listados(personas):
    """Función para mostrar los listados: original y ordenado por nota"""
    if not personas:
        print("\nNo hay datos para mostrar.")
        return
    
    print("\n=== LISTADO ORIGINAL ===")
    print("Nombre\tEdad\tNota")
    print("------------------------")
    for persona in personas:
        print(f"{persona[0]}\t{persona[1]}\t{persona[2]}")
    
    # Crear una copia para no modificar la lista original
    personas_ordenadas = personas.copy()
    
    # Ordenar por nota (de mayor a menor)
    personas_ordenadas.sort(key=lambda x: x[2], reverse=True)
    
    print("\n=== LISTADO ORDENADO POR NOTA (MAYOR A MENOR) ===")
    print("Nombre\tEdad\tNota")
    print("------------------------")
    for persona in personas_ordenadas:
        print(f"{persona[0]}\t{persona[1]}\t{persona[2]}")

# Ejecutar el programa si se ejecuta directamente
if __name__ == "__main__":
    gestion_personas()