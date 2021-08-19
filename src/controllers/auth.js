require('dotenv').config();
const auth = require('../services/auth');
const api = require('../services/api');

module.exports = {
  async index(req,res){
    let dados = {
      "grant_type": "refresh_token",
      "client_id": "8DEv1AMNXczW3y4U15LL3jYf62jK93n5",
      "refresh_token": "SU1kxaGC6kSyETdlUsYRouW_xevptrEjcKK1oGFLRRweJ"
    }
    try{

      let {data} = await auth.post('/', dados);
      let token = data.access_token;
      api.defaults.headers['Authorization'] = 'Bearer ' + token;

      return res.json({status: 'sucesso', token})


    }catch(e){
      return res.json({status:'erro', message: e.message})
    }
    //let resp = await api.get()

  },
  async create(req,res){


    try {
    
      return res.json({status: 'sucesso'});
    } catch (e) {
      return res.json({status:'erro', message: e.message})
    }
  },

  async autenticacao(){
    let dados = {
      "grant_type": "refresh_token",
      "client_id": "8DEv1AMNXczW3y4U15LL3jYf62jK93n5",
      "refresh_token": "SU1kxaGC6kSyETdlUsYRouW_xevptrEjcKK1oGFLRRweJ"
    }
    try{

      let {data} = await auth.post('/', dados);
      let token = data.access_token;
      api.defaults.headers['Authorization'] = 'Bearer ' + token;

      return {status: 'sucesso', token}


    }catch(e){
      return {status:'erro', message: e.message}
    }
  }

}