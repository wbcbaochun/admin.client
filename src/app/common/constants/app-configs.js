'use strict';
let AppConfigs = {
	ENV: '${ENV}',
	API_BASE_URL: '${API.BASE}/api/',
	SOCKET_URL: '${API.BASE}',
	USER_TOKEN_KEY: 'x-access-token',
	UPLOAD_DOMAIN: '${UPLOAD_DOMAIN}'
};

module.exports = {
     name: 'AppConfigs',
     fn: AppConfigs
};
