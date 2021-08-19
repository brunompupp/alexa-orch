const axios = require('axios');
const api = axios.create({
  baseURL: 'https://account.uipath.com/oauth/token',
  headers: {
    'Content-Type': 'application/json',
    'X-UIPATH-TenantName': 'ajb'
  }
});

module.exports = api;