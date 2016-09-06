/**
 * 控制器：主画面左侧边栏
 */
'use strict';
let _ = require('lodash');

function MainSidebarCtrl(SessionSrv) {
	'ngInject';

	let vm = this;
	vm.menus = {};
	vm.currentUser = SessionSrv.getCurrentUser();

	/**
	 * 点击菜单
	 * @param  {string} name 菜单名
	 */
	vm.clickMenu = function(name) {
		_.forIn(vm.menus, function(menu, key) {
  			if (key === name) {
  				menu.isOpen = !menu.isOpen;
  			} else {
  				menu.isOpen = false;
  			}
		});
	};

	/**
	 * 菜单是否打开
	 * @param  {string}  name 菜单名
	 * @return {Boolean}      菜单是否打开
	 */
	vm.isOpen = function(name) {
		let menu = vm.menus[name] = (vm.menus[name] || {});
		return menu.isOpen;
	};
}

module.exports = {
    name: 'MainSidebarCtrl',
    fn: MainSidebarCtrl
};
