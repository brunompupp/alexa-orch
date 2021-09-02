const api = require('../services/api');
const autentica = require('./auth');

async function folderId(){
  let {data} = await api.get('/Folders');
  let organizationId = data.value[0].Id;
  api.defaults.headers['X-UIPATH-OrganizationUnitId'] = organizationId;
  return organizationId;
}

async function maquinaId(){
  let {data} = await api.get('/Robots');
  let maquinaId = data.value[0].Id;
  return maquinaId;
}

async function atividades(){
  let {data} = await api.get('/Releases');
  console.log(data);
  let processos = data.value;
  let dados = [];

  for (let i=0; i < processos.length; i++) {
    dados.push({nomeKey: processos[i].ProcessKey, key:processos[i].Key, nome: processos[i].Name });
    
  }

  return dados;

}
module.exports = {
  async buscaJobs(req,res){
    try {

      let organizationId = await folderId();
      if(!organizationId){
        return res.json({status: 'erro', organizationId})
      }
      let jobs = await atividades();
      return res.json({status: 'sucesso', jobs});

    } catch (e) {
      return res.json({status: 'erro', message: e.message})
    }
  },

  async startJob(req,res){
    let {key} = req.body;
    console.log(key)
    try {

      
      let roboId = await maquinaId();
      console.log(roboId);
      let dados = {
        "startInfo":{
          "ReleaseKey": key,
          "Strategy": "Specific",
          "RobotIds": [roboId],
          "JobsCount": 0,
          "Source":"Manual"
        }
      }

      let {data} = await api.post('/Jobs/UiPath.Server.Configuration.OData.StartJobs', dados);

      let startId = data.value[0].Id;

      if(!startId){
        return res.json({status: 'erro', data})
      }

      return res.json({status: 'sucesso', startId})
    } catch (e) {
      return res.json({status: 'erro', message: e.message})
      
    }
  }

}