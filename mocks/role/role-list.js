/**
 * mock for 角色列表
 * @type {Object}
 *
 * params: 
 * {page: "1", 
 * count: "10"}
 */
module.exports = {
    '/api/role/list': {
        POST: {
            data: {
                status: 0,
                result: {
                    count: 2,
                    list: [{
                        id: 1,
                        name: '管理员',
                        memo: '整体系统的管理员， 用户最高权限',
                        permissions: ['user.view', 'user.edit']
                    }, {
                        id: 2,
                        name: '操作员',
                        memo: '只可以操作，不可以变更数据',
                        permissions: ['user.view']
                    }]
                }
            }
        }
    }
};
