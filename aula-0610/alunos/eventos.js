const SELECT_ALUNO = document.getElementById("aluno");

let alunos = [
    "Chiquim",
    "Zezim",
    "Maria",
    "Joana",
    "Joao",
];


for (let x = 0; x < alunos.length; x++) {
    SELECT_ALUNO.innerHTML += `
        <option>${alunos[x]}</option>
    `;
}