const util = require('util');
const {OrchestratorApi} = require('uipath-orchestrator-api-node');

const api = new OrchestratorApi({
  userinfo: {
    tenancyName: 'mazars',
    usernameOrEmailAddress: 'bruno.pupp',
    password: 'brunomp05'
  },
  serverinfo:{
    servername: 'https://servert2c.eastus.cloudapp.azure.com'
  }
});



const Orchestrator = require('uipath-orchestrator');
const orchestrator = new Orchestrator({
  tenancyName : 'mazars',
  usernameOrEmailAddress: 'bruno.pupp',
  password: 'brunomp05',
  hostname: 'https://servert2c.eastus.cloudapp.azure.com',
  isSecure: true,
  port: 443,
  invalidCertificate: true,
  connectionPool: 5
});

const apiPath = '/odata/Users';

const apiQuery = {};

module.exports = {
  async index(req,res){

    orchestrator.get(apiPath, apiQuery, function(err, data){
      if(err){
        console.log('Erro', err)
        return res.json('erro')
      }
    
      console.log('Data' + util.inspect(data))
      return res.json('ok')
    });


  },

  async show(req,res){
    

    const respo = await api.authenticate();

    const robots = await api.robot.findAll();
    return res.json({respo, robots})

  }
}
