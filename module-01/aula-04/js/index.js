// class List {
//   constructor() {
//     this.data = [];
//   }

//   add(data) {
//     this.data.push(data);
//     console.log(this.data);
//   }
// }

// class TarefaList extends List {
//   constructor() {
//     super();

//     this.usuario = "Adriano";
//   }

//   mostrarUsuario() {
//     console.log(this.usuario);
//   }
// }

// var minhaLista = new TarefaList();

// document.getElementById("novatarefa").onclick = function() {
//   minhaLista.add("Nova tarefa");
//   minhaLista.mostrarUsuario();
// };

class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1, 2));
