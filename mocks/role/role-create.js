/**
 * mock for 角色新增
 * @type {Object}
 *
 * params:
 * {
 * 	name: "操作员", 
 *  memo: "操作员的说明", 
 *  permissions: ["user.edit", "role.edit"]
 * }
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
