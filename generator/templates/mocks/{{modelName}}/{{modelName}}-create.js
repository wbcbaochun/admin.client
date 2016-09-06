/**
 * mock for {{modelText}}新增
 * @type {Object}
 *
 * params:
 * {
 * 	name: "test1", 
 * }
 */
module.exports = {
    '/api/{{modelName}}/create': {
        POST: {
            data: {
                status: 0,
                message: '新增{{modelText}}成功！'
            }
        }
    }
};
