const { expect } = require('chai');
const taskModel = require('../../models/tasksModel');
const taskService = require('../../services/tasksService');
const sinon = require('sinon');

describe('Testando camada de service', () => {
  before(() => {
    const resolveCreateTask = {
      task: 'Teste',
      date: '22/08/1899',
      status: 'Andamento',
      id: '620d51787dd2d1b6e747d2e7',
    };
    sinon.stub(taskModel, 'insertTaskModel').resolves(resolveCreateTask);
    sinon.stub(taskModel, 'updateTaskModel').resolves(resolveCreateTask);
  });
  after(() => {
    taskModel.insertTaskModel.restore();
  });
  describe('Verifica se o service de criar task', () => {
    it('Verifica se retorna um objeto', async () => {
      const response = await taskService.createTaskService({
        task: 'Teste',
        date: '22/08/1899',
        status: 'Andamento',
      });
      expect(response).to.be.an('object');
    });
    it('Verifica se possui a propriedade task', async () => {
      const response = await taskService.createTaskService({
        task: 'Teste',
        date: '22/08/1899',
        status: 'Andamento',
      });
      expect(response).to.be.an.property('task');
    });
    it('Verifica se possui a propriedade task', async () => {
      const response = await taskService.createTaskService({
        task: 'Teste',
        date: '22/08/1899',
        status: 'Andamento',
      });
      expect(response).to.be.an.property('id');
    });
    it('Verifica se ao não passar a task corretamente joga um erro', async () => {
      try {
        await taskService.createTaskService({ task: 'Teste', date: '22/14/85' })
      } catch (error) {
        expect(error.message)
          .to.be.an('string')
          .equal('É necessário informar um status');
      }
    });
  });
  describe('Verifica se o service de update task funciona corretamente', () => {
    it('Se retorna um objeto', async () => {
      const response = await taskService.updateTaskService({
        task: 'Teste',
        date: '22/08/1899',
        status: 'Andamento',
        id: '620d51787dd2d1b6e747d2e7',
      });
      expect(response).to.be.an('object');
    });
    it('Se possui a propriedade id', async () => {
      const response = await taskService.updateTaskService({
        task: 'Teste',
        date: '22/08/1899',
        status: 'Andamento',
        id: '620d51787dd2d1b6e747d2e7',
      });
      expect(response).to.have.a.property('id');
    });
    it('Verifica se não é possível atualizar com um id incorreto', async () => {
      try {
        await taskService.updateTaskService({
          task: 'Teste',
          date: '22/08/1899',
          status: 'Andamento',
        });
      } catch (error) {
        expect(error.message).to.be.an('string').equal("Cannot read properties of undefined (reading 'id')")
      }
    })
  });
});
