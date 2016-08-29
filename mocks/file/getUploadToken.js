/**
 * mock for 获取上传Token
 * @type {Object}
 *
 * params: none
 */
module.exports = {
    '/api/file/getUploadToken': {
        GET: {
            data: {
                uptoken: '123'
            }
        }
    }
};
