require('dotenv').config();
const util = require('util');
const {OrchestratorApi} = require('uipath-orchestrator-api-node');

const api = new OrchestratorApi({
  userinfo: {
    tenancyName: process.env.TENANT_NAME,
    usernameOrEmailAddress: process.env.USER,
    password: process.env.SENHA
  },
  serverinfo:{
    servername: process.env.URL_VM
  }
});



const Orchestrator = require('uipath-orchestrator');
const orchestrator = new Orchestrator({
  tenancyName : process.env.TENANT_NAME,
  usernameOrEmailAddress: process.env.USER,
  password: process.env.SENHA,
  hostname: process.env.URL_VM,
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
