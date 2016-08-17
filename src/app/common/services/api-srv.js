'use strict';

function ApiSrv($q, $http, $httpParamSerializer, AppConfigs, MessageSrv) {
    'ngInject';
    const tokenKey = AppConfigs.USER_TOKEN_KEY;

    function exec(url, params, options) {
        var d = $q.defer();

        // prepare request
        options = options || {};
        var req = {
            method: options.method || 'POST',
            url: AppConfigs.API_BASE_URL + url,
            data: params
        };
        req.headers = {};
        req.headers[tokenKey] = localStorage.getItem(tokenKey);

        // execute request
        $http(req)
            .success(function(data, status, headers) {
                // request ok
                let accessToken = headers(tokenKey);
                if (accessToken) {
                    localStorage.setItem(tokenKey, accessToken);
                }

                let isJson = headers('content-type').match(/application\/json/);
                if (isJson) {
                    if (data.status === 0) {
                        // result ok
                        if (data.message) {
                            MessageSrv.success(data.message);
                        }
                        return d.resolve(data.result);
                    } else {
                        // result error
                        if (data.message) {
                            MessageSrv.error(data.message);
                        }
                        return d.reject(data);
                    }
                } else {
                    return d.resolve(data);
                }
            })
            .catch(function(reason) {
                // request error
                MessageSrv.error('error.system.error');
                if (AppConfigs.ENV === 'dev') {
                    console.error('API调用失败:' + url);
                    console.error(reason);
                }
                d.reject(reason);
            });
        return d.promise;
    }

    return {
        exec
    };
}

module.exports = {
    name: 'ApiSrv',
    fn: ApiSrv
};
