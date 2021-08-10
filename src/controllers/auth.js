const axios = require('axios');
const api = axios.create({
  baseURL: 'https://cloud.uipath.com/'
})
var teste = {
  AppID: '0a261141-395a-4ca5-b3d5-e7da75292d98',
  AppSecret: ')%RWT8QV^C(Yzuhx',
  UserKey: 'D7W7LLpCswJnB9aFItexhSMc-1eJn7DCqKT7FKabx5PqO',
  clientId: '8DEv1AMNXczW3y4U15LL3jYf62jK93n5',
  account: 'ajbpublicidade'

}
module.exports = {
  async index(req,res){
    console.log(req);

    return res.json('sucesso')
  },
  async auth(req,res){
    let{email, senha} = req.body;

    try {
      const resp = await api.post(`/identity/connect/authorize?response_type=code&client_id=${teste.AppID}&scope=OR.Jobs&redirect_uri=http://localhost:3340/auth`)
      console.log(resp)
      return res.send(resp.data);
    } catch (e) {
      return res.json({status:'erro', message: e.message})
    }
  }

}