const { handle } = require('../../Generators/index');

module.exports = {
  async CreateCrud(request, response){
    const { name } = request.body;
    try{
      await handle(name);
      return response.status(200).json({ message: 'Crud gerado com sucesso!' })
    }catch(err){
      return response.status(400).json({ Error: 'Ops falha na operação!' })
    }
    
  }
}