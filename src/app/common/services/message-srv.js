'use strict';

function MessageSrv($q, $uibModal, growl) {
    'ngInject';
    // 确认
    let _confirm = function(msg) {
        let d = $q.defer();

        let modalInstance = $uibModal.open({
            template: `<div class="modal-header">
                           <div class="modal-title"><strong>确认</strong> </div>
                        </div>
                        <div class="modal-body" translate="{{message}}">
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" ng-click="$close()">确认</button>
                            <button class="btn btn-default" ng-click="$dismiss()">取消</button>
                        </div>`,             
            controller: function($scope, message) {
                $scope.message = message;
            },
            resolve: {
                message: function() {
                    return msg; 
                }
            }
        });

        modalInstance.result.then(function() {
            return d.resolve();
        }, function() {
            return d.notify();
        });

        return d.promise;
    };

    let _error = function(message) {
        growl.error(message);
    };

    let _info = function(message) {
        growl.info(message);
    };

    let _success = function(message) {
    	growl.success(message);
    };

    return {
        // 确认
        confirm: _confirm,
        // 追加错误消息
        error: _error,
        // 追加正常消息
        info: _info,
        // 追加成功消息
        success: _success
    };
}

module.exports = {
    name: 'MessageSrv',
    fn: MessageSrv
};
