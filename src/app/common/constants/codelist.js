'use strict';
var CodeList = {
    'deleteFlag': {
        '0': '有效',
        '1': '无效'
    },
    'permission': {
    	'user.view': '用户查看',
    	'user.edit': '用户编辑'
    }
};

module.exports = {
    name: 'CodeList',
    fn: CodeList
};
