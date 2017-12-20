/*
* @Author: orange
* @Date:   2017-11-29 10:16:37
* @Last Modified by:   yueyataihen
* @Last Modified time: 2017-12-20 11:07:45
*/

'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var navSide        = require('page/common/nav-side/index.js');
var _mm            = require('util/mm.js');
var _utils         = require('util/utils.js');
var templateBanner = require('./banner.string');
var jsonData       = require('./banner.json');


$(function() {
    var $bannerUl = $('.banner-ul');
    var $floorCon = $('.floor-con');
	// 渲染banner的html
	// var bannerHtml = _mm.renderHtml(templateBanner);
	// $('.banner-con').html(bannerHtml);
   
    //console.log(jsonData);
    //实现数据的绑定
    bindData();
    function bindData(){
        var str  = "",
            // str1 = '',
            floorList  = jsonData.data.floorList,
            floorItems = jsonData.data.floorList.floorItems,
            bannerList = jsonData.data.bannerList;
        $.each(bannerList,function(index,item){
            str +="<li><a href='./list.html?categoryId="+item['categoryId']+" target='_blank'><img src='"+item['img']+"' class='banner-img'/></a></li>";
        });
        $bannerUl.html(str);
        // $.each(floorList,function(index,item){
        //     str1 +="<div class='floor-wrap'><h1 class='floor-title'>"
        //     +item['floorTitle']
        //     +"</h1><ul class='floor-list'><li class='floor-item'><a href='./list.html?categoryId="
        //     +item['floorItems']['categoryId']
        //     +"'><span class='floor-text'>"
        //     +item['floorTitle']
        //     +"</span><img class='floor-img' src='"
        //     +item['floorItems']['img']
        //     +"' alt='"
        //     +item['floorItems']['img']
        //     +"'/></a></li></ul></div>";
        //     console.log(item);
        //     console.log(item['categoryId']);
        // });
        // $floorCon.html(str1);
    }
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