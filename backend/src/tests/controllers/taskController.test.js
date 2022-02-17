const sinon = require('sinon');
const { expect } = require('chai');

const taskService = require('../../services/tasksService');
const taskController = require('../../controllers/tasksController');

describe('Ao chamar o controller do create', () => {
  describe('Quando o payload informado não é válido', () => {
    const response = {};
    const request = {};
    const next = () => { };

    before(() => {
      request.body = {
        task: 'Teste',
        date: '22/08/1899',
        status: 'Andamento',
        id: '620d51787dd2d1b6e747d2e7',
      };

      response.status = sinon.stub().returns(response);

      response.json = sinon.stub().returns();

      sinon.stub(taskService, 'createTaskService').resolves({
        task: 'Teste',
        date: '22/08/1899',
        status: 'Andamento',
        id: '620d51787dd2d1b6e747d2e7',
      });
    });

    after(() => {
      taskService.createTaskService.restore();
    });

    it('é chamado com o status com o código', async () => {
      await taskController.createTaskController(request, response, next);
      expect(response.status.calledWith(201)).to.be.equal(false);
    });

  });
});
