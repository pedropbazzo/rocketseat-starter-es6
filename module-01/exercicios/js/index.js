class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    this.admin = false;
  }
  isAdmin() {
    return this.admin;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true

const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

const idades = usuarios.map(item => item.idade);
console.log(idades);

const findGoogle = usuarios.find(item => item.empresa === "Google");
console.log(findGoogle);

const arrMultiplied = usuarios.map(item => ({
  ...item,
  idade: item.idade * 2
}));
const arrFiltred = arrMultiplied.filter(item => item.idade <= 50);

console.log(arrFiltred);

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: "Diego", idade: 23 };
const mostraIdade = usuario => usuario.idade;
mostraIdade(usuario);

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = "Diego", idade = 18) => {
  nome, idade;
};
mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4
const promise = () => new Promise((resolve, reject) => resolve());

const empresa = {
  nomee: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};

const {
  nomee,
  endereco: { cidade, estado }
} = empresa;

console.log(nomee); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: "Diego", idade: 23 }));

const arra = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arra;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function soma(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

const user = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

const user2 = {
  ...user,
  nome: "Gabriel"
};

const user3 = {
  ...user,
  endereco: {
    ...user.endereco,
    cidade: "Lontras"
  }
};

console.log(user2, user3);

console.log(`O usuário ${nome} possui ${idade} anos.`);

const userOSS = {
  nome,
  idade,
  cidade: "Rio do Sul"
};

console.log(userOSS);
