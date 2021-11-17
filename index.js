
const {
  get_synlink_api,
  set_synlink_api,
} = require('./commands/axiosWrapper');

module.exports = {
  get_device: (pduConfiguration, responseCallback) => get_synlink_api(pduConfiguration, "/api/device", responseCallback),
  get_banks: (pduConfiguration, responseCallback) => get_synlink_api(pduConfiguration, "/api/bank", responseCallback),
  get_inlets: (pduConfiguration, responseCallback) => get_synlink_api(pduConfiguration, "/api/inlets", responseCallback),
  get_outlets: (pduConfiguration, responseCallback) => get_synlink_api(pduConfiguration, "/api/outlets", responseCallback),
  get_groups: (pduConfiguration, responseCallback) => get_synlink_api(pduConfiguration, "/api/groups", responseCallback),
  get_sensors: (pduConfiguration, responseCallback) => get_synlink_api(pduConfiguration, "/api/sensors", responseCallback),

  put_outlets: (pduConfiguration, outletObj, responseCallback) => set_synlink_api(pduConfiguration, `/api/outlets/${outletObj.id}`, outletObj, responseCallback),
  put_banks: (pduConfiguration, bankObj, responseCallback) => set_synlink_api(pduConfiguration, `/api/banks/${bankObj.id}`, bankObj, responseCallback),
  put_inlets: (pduConfiguration, inletObj, responseCallback) => set_synlink_api(pduConfiguration, `/api/inlets/${inletObj.id}`, inletObj, responseCallback),

}