const SELECT_MES = document.getElementById("mes");

let meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

for (let x = 0; x <= 11; x++) {
    SELECT_MES.innerHTML += `
        <option>${meses[x]}</option>
    `;
}