/*
* @Author: orange
* @Date:   2017-11-29 10:16:37
* @Last Modified by:   orange
* @Last Modified time: 2017-11-30 19:28:09
*/

'use strict';
// require('./index.css');
// require('../module.js');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');
navSide.init({
   name: 'pass-update'
});
// _mm.request({
// 	url:'/product/list.do?keyword=1',
// 	success: function(res){
// 		console.log(res);
// 	},
// 	error: function(errMsg){
// 		console.log(errMsg);
// 	}
// });

//console.log(_mm.getUrlParam('test'));
// var html = '<div>{{data}}</div>';
// var data = {
// 	data: 1235678
// };
// console.log(_mm.renderHtml(html,data));