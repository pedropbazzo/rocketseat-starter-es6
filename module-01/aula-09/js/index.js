const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};

// const {
//   nome,
//   idade,
//   endereco: { cidade }
// } = usuario;

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);
