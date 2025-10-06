const SELECT_ALUNO = document.getElementById("aluno");

let alunos = [
    "Chiquim",
    "Zezim",
    "Maria",
    "Joana",
    "Joao",
    "Madeiusa",
];

function addOption(nome) {
    SELECT_ALUNO.innerHTML += `
        <option>${nome}</option>
    `;
}

alunos.forEach(addOption);

// outra forma (anonima)
alunos.forEach(function (nome) {
    SELECT_ALUNO.innerHTML += `
        <option>${nome}</option>
    `;
});


// outra forma (arrow function)
alunos.forEach((nome) => {
    SELECT_ALUNO.innerHTML += `
        <option>${nome}</option>
    `;
});
