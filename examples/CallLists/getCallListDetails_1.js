import VoximplantApiClient from "@voximplant/apiclient-nodejs";

const client = new ApiClient();

client.onready(function(){
// Get all lists registered by user
client.CallLists.getCallListDetails({listId: '1',
            output: 'json'})
      .then(ev=>console.log(ev))
      .catch(err=>console.error(err));
});