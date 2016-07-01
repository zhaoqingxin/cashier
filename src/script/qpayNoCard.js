/**
 * Created by zhaoqingxin on 16/6/27.
 */

import "../style/pages/qpayNoCard.less";

/*
import "babel-polyfill";
import $ from "jquery";

let App =(function(){

    /!*设置页面content容器高度*!/
    let handleInitSize = () => {
        let clientHeight = $(window).height();
        let bodyHeight = $(document.body).height();
        console.log(clientHeight,bodyHeight);
        if(bodyHeight<clientHeight){
            let contentHeight = clientHeight-$('.header').outerHeight();;
            $(".content").outerHeight(contentHeight);
        }
        $('.client-height').height(clientHeight);
    };
    let handleOnSize = () => {
        $(window).resize(function(){
            let clientHeight = $(window).height();
            let bodyHeight = $(document.body).height();
            console.log(clientHeight,bodyHeight);
            if(bodyHeight<clientHeight){
                let contentHeight = clientHeight-$('.header').outerHeight();;
                $(".content").outerHeight(contentHeight);
            }
            $('.client-height').height(clientHeight);
        });
    };
    /!*切换储蓄卡,信用卡等卡类型*!/
    let switchBankType = () => {
        $('.payment-tag li a').click(function(){
            $('.payment-tag li').removeClass('active');
            $(this).parent('li').addClass('active');
            $('.cashier-payment .payment-bank-list .mainBank-list').addClass("hide").eq($(this).parent().index()).removeClass('hide');
            $('.mainBank-list li a').removeClass('active');
        });
    };
    /!*选择银行*!/
    let switchBank = () => {
        $('.mainBank-list li a').click(function(){
            $('.mainBank-list li a').removeClass('active');
            $(this).addClass('active');
        });
    };
    /!*显示详情*!/
    let handleDetails = () => {
        $('.trade-info .details-btn').click(function(){
            $('.trade-info .details').slideToggle();
            /!*if($('.trade-info .details').is(':hidden')){
             $('.trade-info .details').removeClass('hide');
             }else{
             $('.trade-info .details').addClass('hide');
             }*!/
        });
    };
    /!*打开添加快捷卡窗口*!/
    let handleAddQpay = () => {
        $('.bind-new-bank-btn a').click(function(){
            $('.dialog-box').removeClass('hide');
            $('.wrapper').children('div').addClass('hide');
            $('.wrapper').children('.identification-card').removeClass('hide');
        })
    };
    /!*关闭添加快捷卡窗口*!/
    let handleClosedialog = () => {
        $('.dialog-box .close').click(function(){
            $('.dialog-box').addClass('hide');
        })
    };
    /!*卡号识别后的跳转*!/
    let handleIdentifyCard = () => {
        $('.identification-card button').click(function(){
            $('.wrapper').children('div').addClass('hide');
            $('.wrapper').children('.confirm').removeClass('hide');
        })
    };
    /!*跳转到卡号识别*!/
    let handleGotoIdentifyCard = () => {
        $('.identification-card-btn').click(function(){
            $('.wrapper').children('div').addClass('hide');
            $('.wrapper').children('.identification-card').removeClass('hide');
        })
    };
    /!*跳转到选择银行卡类型*!/
    let handleGotoSelectCardType = () => {
        $('.select-card-type-btn').click(function(){
            $('.wrapper').children('div').addClass('hide');
            $('.wrapper').children('.select-card-type').removeClass('hide');
        })
    };
    /!*选择银行卡类型*!/
    let handleSelectCardType = () => {
        $('.select-card-type .select-box input').click(function(){
            if(this.value){
                $('.select-card-type button').removeClass('btn-disable').addClass('btn-threme');
            }
        });
        $('.select-card-type button').click(function(){
            "use strict";
            if($(this).hasClass('btn-disable')){
                return;
            }else{
                $('.wrapper').children('div').addClass('hide');
                $('.wrapper').children('.payment-bank-list').removeClass('hide');
            }
        })
    };

    return {
        init:function(){
            handleInitSize();
            switchBankType();
            switchBank();
            handleDetails();
            handleAddQpay();
            handleClosedialog();
            handleOnSize();
            handleIdentifyCard();
            handleGotoSelectCardType();
            handleGotoIdentifyCard();
            handleSelectCardType();
        }
    }
})();
App.init();
*/
import "babel-polyfill";
window.onload=function(){
    var oDiv = document.getElementsByTagName('body')[0];
    alert(oDiv);
    oDiv.onclick = function(){
        alert('hahahah');
    };
}