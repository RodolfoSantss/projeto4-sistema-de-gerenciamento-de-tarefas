function adicionarTarefa(lista, tarefa) {
  if (!tarefa.trim()) {
    return lista;
  }

  lista.push({
    texto: tarefa,
    concluida: false
  });

  return lista;
}

function concluirTarefa(lista, indice) {
  lista[indice].concluida = true;
  return lista;
}

module.exports = {
  adicionarTarefa,
  concluirTarefa
};