let totalKm = 0;

document.getElementById('addKm').addEventListener('click', () => {
    const kmInput = document.getElementById('kmInput');
    const km = parseFloat(kmInput.value);

    if (!isNaN(km) && km > 0) {
        totalKm += km;
        const kmList = document.getElementById('kmList');
        const newKm = document.createElement('li');
        newKm.textContent = `Dia ${kmList.children.length + 1}: ${km} km`;
        kmList.appendChild(newKm);

        document.getElementById('totalKm').textContent = `Total de quilômetros rodados: ${totalKm.toFixed(0)} km`;
        kmInput.value = '';
    }
});
