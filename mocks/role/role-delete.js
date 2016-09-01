/**
 * mock for 角色删除
 * @type {Object}
 */
module.exports = {
    '/api/role/delete': {
        POST: {
            data: {
                status: 0,
                message: '删除角色成功！'
            }
        }
    }
};
