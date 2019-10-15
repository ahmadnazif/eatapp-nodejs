var api = require('axios').default.create({
    baseURL: 'https://eatapi-254203.appspot.com'
});
const sr = require('./SimpleResp');

var methods = {
    addFnbAsync: async function (fnbName, fnbType) {
        console.log("POST initiated");

        try {
            var data = {
                'name': fnbName,
                'fnbType': fnbType === 'Food' ? 0 : 1
            };

            var resp = await api.post('api/fnb/add', data);
            sr.statusCode = resp.status;
            sr.responseContentString = resp.data;
            //sr.length = 100;
            sr.error = null;
        } catch (ex) {
            sr.error = ex;
        }

        return sr;
    },
    listAllFnbAsync: async function(){
        console.log("GET initiated");

        try {
            var resp = await api.get('api/fnb/list-all');
            sr.statusCode = resp.status;
            sr.responseContentString = resp.data;
            sr.length = resp.data.length;
            sr.error = null;
        } catch (ex) {
            sr.statusCode = 0;
            sr.responseContentString = null;
            sr.length = 10;
            sr.error = ex;
        }

        return sr;
    }
}

module.exports = methods;