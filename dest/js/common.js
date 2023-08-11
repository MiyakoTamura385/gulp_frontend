/*アロー関数*/
var hellow = function () {
    window.alert('start');
    window.alert('script');
    window.alert(title + 'は第' + num + '回です。');
    window.alert('finish');
};
/*変数（型付け）*/
// var btn: Object;
var btn = document.getElementById('btn');
var title;
title = 'foodfes';
var num;
num = 109;
/*イベント*/
btn.addEventListener('click', hellow, false);
