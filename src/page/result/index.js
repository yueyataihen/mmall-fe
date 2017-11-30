/*
* @Author: orange
* @Date:   2017-11-30 19:32:47
* @Last Modified by:   orange
* @Last Modified time: 2017-11-30 21:08:36
*/

'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type = _mm.getUrlParam('type') || 'default',
        $element = $('.'+ type + '-success');
    // 显示对应的提示元素
    $element.show();
});