/**
 * mock for 用户新增
 * @type {Object}
 *
 * params:
 * {name: "test1", password: "123456", mail: "test1@test.com"}
 */
module.exports = {
    '/api/user/create': {
        POST: {
            data: {
                status: 0,
                message: '新增用户成功！'
            }
        }
    }
};
