/**
 * mock for 用户详情
 * @type {Object}
 *
 * params:
 * {id: "1"}
 */
module.exports = {
    '/api/user/detail': {
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
