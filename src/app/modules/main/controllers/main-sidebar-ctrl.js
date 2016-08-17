/**
 * 控制器：主画面左侧边栏
 */
'use strict';
var _ = require('lodash');

function MainSidebarCtrl() {
	'ngInject';

	var vm = this;
	vm.menus = {};

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
		var menu = vm.menus[name] = (vm.menus[name] || {});
		return menu.isOpen;
	};
}

module.exports = {
    name: 'MainSidebarCtrl',
    fn: MainSidebarCtrl
};
