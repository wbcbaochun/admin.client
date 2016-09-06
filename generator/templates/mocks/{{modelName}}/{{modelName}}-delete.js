/**
 * mock for {{modelText}}删除
 * @type {Object}
 */
module.exports = {
    '/api/{{modelName}}/delete': {
        POST: {
            data: {
                status: 0,
                message: '删除{{modelText}}成功！'
            }
        }
    }
};
