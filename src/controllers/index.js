const util = require('util');
const Orchestrator = require('uipath-orchestrator');


module.exports = {

  async index(req,res){
    let {tenant, email, senha} = req.body

    try {
      const orchestrator = new Orchestrator({
        tenancyName: 'AJBPUBLICIDADEDefault',
        usernameOrEmailAddress: email,
        password: senha,
        hostname: 'https://cloud.uipath.com/',
        isSecure: true,
        port: 443,
        invalidCertificate: false,
        connectionPool: 5
      })
      
      const apiPath = 'odata/Users';
      const apiQuery = {};
      
      const teste = await orchestrator.get(apiPath, apiQuery, function(err, data){
        if(err){
          console.log('Erro:' ,err)
          return err
        } 
        console.log(util.inspect(data))
        return util.inspect(data)
      })

      return res.json({status:'sucesso', teste})
    } catch (e) {
      return res.json({status: 'erro', message: e.message})
    }
  },

}