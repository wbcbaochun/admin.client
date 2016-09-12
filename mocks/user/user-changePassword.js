/**
 * mock for 用户修改密码
 * @type {Object}
 * params: {oldPassword: "123456", newPassword: "222222"}
 */
module.exports = {
    '/api/user/changePassword': {
        POST: {
            data: {
                status: 0,
                message: '修改密码成功！'
            }
        }
    }
};
