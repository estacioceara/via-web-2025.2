let palestras = [
    {
        titulo: "Programando com JS",
        horario: "08h as 09h"
    },
    {
        titulo: "Aprendendo Python",
        horario: "09h as 10h"
    },
    {
        titulo: "Chet Gi Pi Ti em 2026",
        horario: "10h as 11h"
    },
];

const TABELA = document.getElementById("tabela");

function addLinha(dados) {
    TABELA.innerHTML += `
        <tr>
            <td>${dados.titulo}</td>
            <td>${dados.horario}</td>
            <td>
                <button>Editar</button>
                <button>Excluir</button>
            </td>
        </tr>
    `;
}

palestras.forEach(addLinha);
