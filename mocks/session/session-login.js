/**
 * mock for 用户登陆
 * @type {Object}
 *
 * params: {name: "user", password: "123456"}
 */
module.exports = {
    '/api/session/login': {
        POST: {
            data: {
                status: 0,
                result: {
                    id: 1,
                    name: '管理员小李',
                    userImg: '/tmp/img.jpg',
                    permissions: [
                        'user.view', 
                        'user.edit',
                        'role.view',
                        'role.edit'
                    ]
                }
            },
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0Njg4MTIzNjEsImV4cCI6MTQ2ODg5ODc2MX0.mOAC1oPZ_K_bjeF8YGtInUimWywFhdmOC_nZcF-X4B0'
            }
        }
    }
};
