/*
* @Author: orange
* @Date:   2017-11-29 10:16:37
* @Last Modified by:   orange
* @Last Modified time: 2017-12-03 15:58:41
*/

'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var navSide        = require('page/common/nav-side/index.js');
var _mm            = require('util/mm.js');
var templateBanner = require('./banner.string');

$(function() {
	// 渲染banner的html
	var bannerHtml = _mm.renderHtml(templateBanner);
	$('.banner-con').html(bannerHtml);
	// 初始化banner
    var $slider    = $('.banner').unslider({
    	dots: true, 
    });
    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
        var forward = $(this).hasClass('prev')?'prev':'next';
        $slider.data('unslider')[forward]();
    });

});