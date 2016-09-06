/**
 * mock for {{modelText}}列表
 * @type {Object}
 *
 * params: 
 * {
 *     page: "1", 
 *     count: "10", 
 *     name: "t", 
 * }
 */
module.exports = {
    '/api/{{modelName}}/list': {
        POST: {
            data: {
                status: 0,
                result: {
                    count: 35,
                    list: [{
                        id: 1,
                        name: '{{modelText}}1',
                    }, {
                        id: 2,
                        name: '{{modelText}}2',
                    }, {
                        id: 3,
                        name: '{{modelText}}3',
                    }, {
                        id: 4,
                        name: '{{modelText}}4',
                    }, {
                        id: 5,
                        name: '{{modelText}}5',
                    }, ]
                }
            }
        }
    }
};
