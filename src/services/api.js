const axios = require('axios');
const api = axios.create({
  baseURL: 'https://cloud.uipath.com/ajbpublicidade/ajb/odata/',
  headers: {
    'Content-Type': 'application/json',
    'X-UIPATH-TenantName': process.env.TENANT_NAME
  }
});

module.exports = api;