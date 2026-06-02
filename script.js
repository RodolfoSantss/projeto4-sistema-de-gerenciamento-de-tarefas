let tarefas = [];

function atualizarLista() {

  const lista = document.getElementById('lista');

  lista.innerHTML = '';

  tarefas.forEach((tarefa, indice) => {

    const li = document.createElement('li');

    li.innerHTML = `
      ${tarefa.texto}
      <button onclick="concluir(${indice})">
        Concluir
      </button>
    `;

    if (tarefa.concluida) {
      li.style.textDecoration = 'line-through';
    }

    lista.appendChild(li);

  });

  document.getElementById('contador').textContent =
    `Tarefas: ${tarefas.length}`;
}

function adicionar() {

  const campo = document.getElementById('tarefa');

  const texto = campo.value.trim();

  if (!texto) return;

  tarefas.push({
    texto,
    concluida: false
  });

  campo.value = '';

  atualizarLista();
}

function concluir(indice) {

  tarefas[indice].concluida = true;

  atualizarLista();
}