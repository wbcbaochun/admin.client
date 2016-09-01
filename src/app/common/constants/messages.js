'use strict';
let MessageList = {
	'error.system.error': '发生系统错误',
	'error.required': '请输入{{p0}}。',
	'error.url': '请输入正确格式的网址!',
	'error.email': '请输入正确的{{p0}}。',
	'error.number': '{{p0}}必须是数字。',
	'error.minlength': '最小长度不正确。',
	'error.maxlength': '超过了最大长度。',
	'error.alphaNumber': '请输入英文或数字。',	
	'error.fileUpload': '文件上传时发生错误，请重新上传。',
	'File extension error.': '上传文件的格式错误。',
	'confirm.update': '确定要更新吗？',
	'confirm.regist': '确定要做成吗？',
	'confirm.save': '确定要保存吗？',
	'confirm.delete': '确定要删除吗？',	
	'confirm.logout': '确定要退出吗？',
	'confirm.dateNoSave':'变更的数据将不会保存，确认换页吗？',
	'message.updateOk': '更新成功',
	'message.saveOk': '保存成功'
};

module.exports = {
    name: 'MessageList',
    fn: MessageList
};
