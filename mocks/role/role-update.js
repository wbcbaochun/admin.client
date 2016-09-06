/**
 * mock for 角色变更
 * @type {Object}
 *
 * params:
 * {
 * 	id: 1, 
 * 	name: "管理员", 
 * 	memo: "整体系统的管理员，↵用户最高权限", 
 * 	permissions: ["user.view", "role.view"]
 * }
 */
module.exports = {
    '/api/role/update': {
        POST: {
            data: {
                status: 0,
                message: '变更角色信息成功！'
            }
        }
    }
};
