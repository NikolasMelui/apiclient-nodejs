const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get all roles.
  client.RoleSystem.getRoles({})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};