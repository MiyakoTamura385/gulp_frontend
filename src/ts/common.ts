/*アロー関数*/
const hellow = () => {
    window.alert('start');
    window.alert('script');
    window.alert(title + 'は第' + num + '回です。');
    window.alert('finish');
}

/*変数（型付け）*/
// var btn: Object;
const btn = document.getElementById('btn');

let title: string;
title = 'foodfes';

let num: number;
num = 109;

/*イベント*/
btn!.addEventListener('click', hellow, false);