/*
* @Author: yueyataihen
* @Date:   2017-12-16 11:01:17
* @Last Modified by:   yueyataihen
* @Last Modified time: 2017-12-16 15:08:43
*/
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide         = require('page/common/nav-side/index.js');
var _mm             = require('util/mm.js');
var _order          = require('service/order-service.js');
var templateIndex   = require('./index.string');

// page逻辑部分
var page = {
	data : {
		orderNumber : _mm.getUrlParam('orderNumber')
	},
	init : function(){
		this.onLoad();
		this.bindEvent();
	},
	onLoad : function(){		
		// 初始化左侧菜单
		navSide.init({
		    name: 'order-list'
		});
		this.loadDetail();
	},
	bindEvent : function(){
		var _this = this;
		$(document).on('click','.order-cancel',function(){
			if(window.confirm('确实要取消该订单？')){
				_order.cancelOrder(_this.data.orderNumber,function(res){
					_mm.successTips('订单取消成功');
					_this.loadDetail();
				},function(errMsg){
					_mm.errorTips(errMsg);
			    });
			}	
		});
	},
	// 加载订单详情
	loadDetail : function(){
		var _this         = this,
		    orderDetailHtml = '',
		    $content      = $('.content');
		$content.html('<div class="loading"></div>');
		_order.getOrderDetail(this.data.orderNumber,function(res){
			_this.dataFilter(res);
			// 渲染html
            orderDetailHtml = _mm.renderHtml(templateIndex,res);
            $content.html(orderDetailHtml);
		},function(errMsg){
            $content.html('<p class="err-tip">' + errMsg + '</p>');
		});
	},	
	// 数据的适配
	dataFilter : function(data){
		data.needPay      = data.status == 10;
		data.isCancelable = data.status == 10;
	}
};
$(function(){
	page.init();
});

