const {
  adicionarTarefa,
  concluirTarefa
} = require('./tarefas');

describe('Sistema de tarefas', () => {

  test('Adicionar tarefa válida', () => {

    const lista = [];

    adicionarTarefa(lista, 'Estudar Git');

    expect(lista.length).toBe(1);

  });

  test('Não adicionar tarefa vazia', () => {

    const lista = [];

    adicionarTarefa(lista, '');

    expect(lista.length).toBe(0);

  });

  test('Concluir tarefa', () => {

    const lista = [
      {
        texto: 'Estudar Jest',
        concluida: false
      }
    ];

    concluirTarefa(lista, 0);

    expect(lista[0].concluida).toBe(true);

  });

});