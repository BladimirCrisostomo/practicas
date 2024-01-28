function generarPotenciasFraccionales(n) {
    const potencias = [];
    for (let i = 1; i <= n; i++) {
        potencias.push(1 / Math.pow(2, i));
    }
    return potencias;
}

function mostrarTabla(potencias) {
    console.log("%-10s %-10s %-10s", "Potencia", "Fracción", "Decimal");
    console.log("=" .repeat(30));

    for (let i = 0; i < potencias.length; i++) {
        const fraccion = `1/${Math.pow(2, i + 1)}`;
        const decimal = potencias[i].toFixed(10);
        console.log("%-10s %-10s %-10s", i + 1, fraccion, decimal);
    }
}

// Número de potencias fraccionales a generar
const numPotencias = 6;

// Generar las potencias fraccionales
const potenciasFraccionales = generarPotenciasFraccionales(numPotencias);

// Mostrar la tabla con el formato deseado
mostrarTabla(potenciasFraccionales);
