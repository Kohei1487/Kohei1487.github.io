'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//---準備ＯＫ？ダイアログボックス--------------------------------------

if (window.confirm("池田幸平　最終アセスメント発表！準備はいい？")) {
    window.alert("発表を開始します");
  } else if (window.confirm("準備はいい？")) {
   
  }else if (window.confirm("準備いいよね？")) {
  
  }  else if (window.confirm("発表を始めてください")) {
  
  }
  
//---カウントダウンタイマー(発表終了まで)-------------------------------

//タイマー表示要素を取得
const minute = document.getElementById("minute");
const second = document.getElementById("second");

//カウントの秒数
let count = 180;

//分に変換
let minuteCount = Math.floor(count / 60);

//秒に変換
let secondCount = count - (Math.floor(count / 60) * 60);

//変換した分と秒を要素に表示
minute.textContent = minuteCount;
second.textContent = secondCount;

//一定時間おきに行いたい関数を宣言
function countDown() {
if(count > 0) {
    //countが0より大きい場合はcountを1ずつ減らす
    count--;
    //分に変換
    let minuteCount = Math.floor(count / 60);
    //秒に変換
    let secondCount = count - (Math.floor(count / 60) * 60);
    //タイマー表示要素にcountの数値を表示
    minute.textContent = minuteCount;
    // 秒が10秒以上ならばそのまま秒数を表示させ、それ以外（9以下）になると0を付け足す
    second.textContent = secondCount >= 10 ? secondCount : `0${secondCount}`;
} else {
    //countが0以下になったら0分00秒を表示して、処理を停止させる
    minute.textContent = "0";
    second.textContent = "00";
    console.log("タイマーが停止しました");
    window.alert("発表を終了します");
    clearInterval(countDownTimer);
}
}

const countDownTimer = setInterval(countDown,1000);

//---カウントダウンタイマー(BTCまで)-------------------------------

function countdown(due) {
const now = new Date();

const rest = due.getTime() - now.getTime();
const sec = Math.floor(rest / 1000) % 60;
const min = Math.floor(rest / 1000 / 60) % 60;
const hours = Math.floor(rest / 1000 / 60 /60) % 24;
const days = Math.floor(rest / 1000 / 60 /60 /24);
const count = [days,hours,min,sec];

return count;
}

let goal = new Date(2023,10,10);

function recalc() {
const counter = countdown(goal);
document.getElementById('day').textContent = counter[0];
document.getElementById("hour").textContent = counter[1];
document.getElementById("min").textContent = String(counter[2]).padStart(2,"0");
document.getElementById("sec").textContent = String(counter[3]).padStart(2,"0");
refresh();
}

function refresh() {
setTimeout(recalc,1000);
}

recalc();


//---画像切替--------------------------------------------------------------

const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function(item, index) {
    item.onclick = function() {
        document.getElementById("bigimg").src = this.dataset.image;
    }
});

//---繰り返しゲーム------------------------------------------------------------

let enemy = 100;
let attackCount = 0;

function clickFunction1() {
    //div id="battle-log"の要素を取得し、定数battleTextへ代入
    const battleText = document.getElementById("battle-log");
    //新しいpタグを作成
    let newText = document.createElement("p");

    if (enemy > 0) {
    const attack = Math.floor(Math.random() * 30) + 1;
    console.log(`モンスターに ${attack} のダメージ！`);

    newText.textContent = `モンスターに ${attack} のダメージ！`;
    battleText.appendChild(newText);

    enemy -= attack;
    attackCount++;
    } else {
    console.log(`${attackCount}回でモンスターを倒した！`);
    
    newText.textContent = `${attackCount}回でモンスターを倒した！`;
    battleText.appendChild(newText);
    }
}

function clickFunction2() {
    //div id="battle-log"の要素を取得し、定数battleTextへ代入
    const battleText = document.getElementById("battle-log");
    //新しいpタグを作成
    

    while(enemy > 0) {
    const attack = Math.floor(Math.random() * 30) + 1;
    console.log(`モンスターに ${attack} のダメージ！`);
    let newText = document.createElement("p"); 
    newText.textContent = `モンスターに ${attack} のダメージ！`;
    battleText.appendChild(newText);
    
    enemy -= attack;
    attackCount++;
    }
    console.log(`${attackCount}回でモンスターを倒した！`);
    let newText = document.createElement("p");
    newText.textContent = `${attackCount}回でモンスターを倒した！`;
    battleText.appendChild(newText);
}


function clickFunction3() {
    enemy = 100;
    attackCount = 0;

    const resetElement = document.getElementById("battle-log");
    while(resetElement.firstChild) {
        resetElement.removeChild(resetElement.firstChild);
    }

    console.log("RESETしました");
}



if (enemy <  0) {
    document.getElementById("battle").src = "images/battle scene.png";
}

if (attackCount >=  8) {
    document.getElementById("battle").src = "images/battle scene.png";
}

if (attackCount ===  0 && enemy === 100) {
    document.getElementById("battle").src = "images/battle scene2.png";
}
