/**
 * mock for 角色详情
 * @type {Object}
 *
 * params:
 * {id: "1"}
 */
module.exports = {
    '/api/role/detail': {
        POST: {
            data: {
                status: 0,
                result: {
                    id: 1,
                    name: 'test1',
                    mail: 'test1@test.com'
                }
            }
        }
    }
};
