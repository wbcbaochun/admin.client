/**
 * mock for 用户下载
 * @type {Object}
 *
 * params: 
 * {page: "1", 
 * count: "10", 
 * name: "t", 
 * mail: "a@a.com", 
 * deleteFlag: "0"}
 */
module.exports = {
    '/api/user/download': {
        POST: {
            data: {
                status: 0,
                result: [{
                    id: 1,
                    name: 'test1',
                    mail: 'test1@test.com',
                    deletedAt: null
                }, {
                    id: 2,
                    name: 'test2',
                    mail: 'test2@test.com',
                    deletedAt: null
                }, {
                    id: 3,
                    name: 'test3',
                    mail: 'test3@test.com',
                    deletedAt: null
                }, {
                    id: 4,
                    name: 'test4',
                    mail: 'test4@test.com',
                    deletedAt: null
                }, {
                    id: 5,
                    name: 'test5',
                    mail: 'test5@test.com',
                    deletedAt: null
                }]
            }
        }
    }
};
