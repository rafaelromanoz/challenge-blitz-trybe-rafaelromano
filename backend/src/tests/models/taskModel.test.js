const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { getConnection } = require('./mongoMockConnection');
const sinon = require('sinon');
const taskModel = require('../../models/tasksModel');

const payloadTask = {
  task: 'Arrumar um emprego',
  date: '22/08/1899',
  status: 'Andamento',
  id: '620d51787dd2d1b6e747d2e7',
};
describe('Insere uma nova task no banco de dados', () => {
  let connectionMock;
  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('Quando é inserido com sucesso', () => {
    it('Se é um objeto', async () => {
      const response = await taskModel.insertTaskModel();
      expect(response).to.be.an('object');
    });

    it('Se possui a propriedade id', async () => {
      const response = await taskModel.insertTaskModel(payloadTask);
      expect(response).to.have.a.property('id');
    });
  });
  describe('Quando é feito o upgrade corretamente de uma tarefa', () => {
    it('Se faz o upgrade da tarefa corretamente não retorna nada', async () => {
      try {
        await taskModel.updateTaskModel(payloadTask);
      } catch (error) {
        expect(error).to.be.an('void');
      }
    });
    it('Se não faz o upgrade informando um id inválido', async () => {
      try {
        await taskModel.updateTaskModel({
          task: 'Arrumar um emprego',
          date: '22/08/1899',
          status: 'Andamento',
          id: '620d51787dd2d17d2e7',
        });
      } catch (error) {
        expect(error.message)
          .to.be.an('string')
          .equal(
            'Argument passed in must be a string of 12 bytes or a string of 24 hex characters'
          );
      }
    });
  });
  describe('Verifica se é possível deletar corretamente', () => {
     it('Se ao deletar não retorna resposta', async () => {
       try {
         await taskModel.deleteTaskModel('620d51787dd2d1b6e747d2e7');
       } catch (error) {
         expect(error).to.be.an('void');
       }
     });
     it('Se não faz o deletar informando um id inválido', async () => {
       try {
         await taskModel.updateTaskModel('sdfsdf');
       } catch (error) {
         expect(error.message)
           .to.be.an('string')
           .equal(
             'Argument passed in must be a string of 12 bytes or a string of 24 hex characters'
           );
       }
     });
  })
});
