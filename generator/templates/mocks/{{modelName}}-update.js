/**
 * mock for {{modelText}}变更
 * @type {Object}
 */
module.exports = {
    '/api/{{modelName}}/update': {
        POST: {
            data: {
                status: 0,
                message: '变更{{modelText}}信息成功！'
            }
        }
    }
};
