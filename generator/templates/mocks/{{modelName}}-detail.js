/**
 * mock for {{modelText}}详情
 * @type {Object}
 *
 * params:
 * {id: "1"}
 */
module.exports = {
    '/api/{{modelName}}/detail': {
        POST: {
            data: {
                status: 0,
                result: {
                    id: 1,
                    name: '{{modelText}}1',
                }
            }
        }
    }
};
