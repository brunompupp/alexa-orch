require('dotenv').config();
const axios = require('axios');
const api = axios.create({
  baseURL: process.env.URL_CLOUD,
  headers: {
    'Content-Type': 'application/json',
    'X-UIPATH-TenantName': process.env.TENANT_NAME
  }
});

module.exports = api;