const { Router } = require('express');
const routes = Router();

const CreateCrud = require('./controllers/CreateCrudController');

routes.post('/CrudGen', CreateCrud.CreateCrud);

module.exports = routes;