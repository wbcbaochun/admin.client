/**
 * mock for 用户列表
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
    '/api/user/list': {
        POST: {
            data: {
                status: 0,
                result: {
                    count: 35,
                    list: [{
                        id: 1,
                        name: 'test1',
                        mail: 'test1@test.com',
                        deleteFlag: '0',
                        updatedAt:"2016-09-08T07:33:12.000Z"
                    }, {
                        id: 2,
                        name: 'test2',
                        mail: 'test2@test.com',
                        deleteFlag: '1',
                        updatedAt:"2016-09-08T07:33:12.000Z"
                    }, {
                        id: 3,
                        name: 'test3',
                        mail: 'test3@test.com',
                        deleteFlag: '0',
                        updatedAt:"2016-09-08T07:33:12.000Z"
                    }, {
                        id: 4,
                        name: 'test4',
                        mail: 'test4@test.com',
                        deleteFlag: '0',
                        updatedAt:"2016-09-08T07:33:12.000Z"
                    }, {
                        id: 5,
                        name: 'test5',
                        mail: 'test5@test.com',
                        deleteFlag: '0',
                        updatedAt:"2016-09-08T07:33:12.000Z"
                    }, ]
                }
            }
        }
    }
};
