/*
* @Author: orange
* @Date:   2017-11-30 19:32:47
* @Last Modified by:   yueyataihen
* @Last Modified time: 2017-12-17 14:51:07
*/

'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type = _mm.getUrlParam('type') || 'default',
        $element = $('.'+ type + '-success');
    if(type === 'payment'){
    	var orderNumber  = _mm.getUrlParam('orderNumber'),
    	    $orderNumber = $elemnt.find('.order-number');
    	$orderNumber.attr('href',$orderNumber.attr('href') + orderNumber);
    }
    // 显示对应的提示元素
    $element.show();
});