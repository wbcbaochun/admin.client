'use strict';

/**
 * 用于Translate customize loader, 读取消息
 * @param $rootScope  
 * @param $q        
 * @param {object} MessageList 消息一览
 */
function TranslateLoader($rootScope, $q, MessageList) {
    'ngInject';


    function _loader() {
        let d = $q.defer();

        d.resolve(MessageList);

        return d.promise;
    }

    return _loader;
}

module.exports = {
    name: 'TranslateLoader',
    fn: TranslateLoader
};
