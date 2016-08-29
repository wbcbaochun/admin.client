'use strict';
var AppConfigs = {
	ENV: '${ENV}',
	API_BASE_URL: '${API.BASE}/api/',
	USER_TOKEN_KEY: 'x-access-token',
	UPLOAD_DOMAIN: '${UPLOAD_DOMAIN}'
};

module.exports = {
     name: 'AppConfigs',
     fn: AppConfigs
};
