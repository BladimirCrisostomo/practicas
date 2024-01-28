def es_correo_electronico(cadena):
    # Verificar si la cadena contiene el carácter '@' y al menos un punto después de él
    if '@' in cadena and '.' in cadena[cadena.index('@'):]:
        # Verificar si la cadena termina con alguna de las terminaciones válidas
        if cadena.endswith('.com') or cadena.endswith('.com.mx') or cadena.endswith('.mx'):
            return True
    return False

# Función para validar y mostrar el resultado
def validar_correo():
    correo = input("Ingrese una cadena de texto: ")
    if es_correo_electronico(correo):
        print("La cadena ingresada es un correo electrónico válido.")
    else:
        print("La cadena ingresada no es un correo electrónico válido.")

# Programa principal
if __name__ == "__main__":
    validar_correo()
