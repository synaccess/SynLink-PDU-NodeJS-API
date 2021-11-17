
const axios = require('axios');

const get_synlink_api = (
  pduConfiguration = {
    ip: "192.168.1.100",
    pat: null,
  },
  urlPath, // example: /api/outlets
  responseCallback = () => {}
) => {
  if (pduConfiguration.pat) {
    console.log(`${pduConfiguration.ip}${urlPath}`)
    axios.get(`${pduConfiguration.ip}${urlPath}`, {
      headers: {
        "Authorization": `Bearer ${pduConfiguration.pat}`
      }
    }).then(response => {
      if (response.status === 200) {
        responseCallback(null, response.data);
      } else {
        responseCallback({
          error: `Error Code ${response.status} found from SynLink HTTP API`
        })
      }
    }).catch(error => {
      responseCallback({
        error: `Error Code ${error.response.status} found from SynLink HTTP API`,
      })
    })
  } else {
    responseCallback({
      error: "Missing Personal Access Token"
    })
  }
} 

const set_synlink_api = (
  pduConfiguration = {
    ip: "192.168.1.100",
    pat: null,
  },
  urlPath, // example: /api/outlets
  userObj,
  responseCallback = () => {}
) => {
  if (pduConfiguration.pat) {
    axios.put(`${pduConfiguration.ip}${urlPath}`,
      userObj,
      {
        headers: {
          "Authorization": `Bearer ${pduConfiguration.pat}`
        }
      }
    ).then(response => {
      if (response.status === 200) {
        responseCallback(null, response.data);
      } else {
        responseCallback({
          error: `Error Code ${response.status} found from SynLink HTTP API`
        })
      }
    })
  } else {
    responseCallback({
      error: "Missing Personal Access Token"
    })
  }
} 

module.exports = {
  get_synlink_api,
  set_synlink_api
} ;