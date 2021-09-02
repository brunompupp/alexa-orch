module.exports = {
  async index(req,res){
    try {
      return res.json({status: 'sucesso'})
      
    } catch (e) {
      return res.json({status: 'erro', message: e.message})
      
    }
  }
}