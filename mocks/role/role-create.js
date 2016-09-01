/**
 * mock for 角色新增
 * @type {Object}
 *
 * params:
 * {name: "test1", password: "123456", mail: "test1@test.com"}
 */
module.exports = {
    '/api/role/create': {
        POST: {
            data: {
                status: 0,
                message: '新增角色成功！'
            }
        }
    }
};
