let amigos = [];

function agregarAmigo() {
  const amigoInput = document.getElementById("amigo");
  const nombreAmigo = amigoInput.value.trim();

  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombreAmigo);
  amigoInput.value = "";
  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    const nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = amigo;
    listaAmigos.appendChild(nuevoAmigo);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Por favor, agregue amigos antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
