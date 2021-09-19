// グローバル設定
$(document).bind('mobileinit', function(){
                 $.mobile.loadingMessageTextVisible = true;
                 $.mobile.loadingMessage = 'ロード中';
                 $.mobile.pageLoadErrorMessage = 'ページの読み込みに失敗しました';
                 $.mobile.page.prototype.options.bankBthText = '戻る';
                 $.mobile.dialog.prototype.options.closeBthText = '閉じる';
                 $.mobile.selectmenu.prototype.options.closeText = '閉じる';
                 $.mobile.listview.prototype.options.filterPlaceholder = 'キーワードを入力して下さい';
                 });

$(function(){
  $('#talk').on('swiperight', function(){ $('#Menu').panel('open'); });
  $('#learn-word').on('swiperight', function(){ $('#Menu2').panel('open'); });
  $('#how').on('swiperight', function(){ $('#Menu3').panel('open'); });
  $('#learnList').on('swiperight', function(){ $('#Menu4').panel('open'); });
  $('#info').on('swiperight', function(){ $('#Menu5').panel('open'); });
  $('#reset').on('swiperight', function(){ $('#Menu6').panel('open'); });
  
  // 読み込み後
  send();
  });

/* スクロールイベント　何故かうごかない
$(window).on('scroll', function(){
             var scrollHeight = $(document).height();
             var scrollPosition = $(window).height() + $(window).scrollTop();
             if((scrollHeight - scrollPosition)/scrollHeight == 0){
                // 処理
             }
             });
 */

var i = 0;          // 初期に挨拶を返すための変数
var str;
var s = 0;          // 覚えるボタンのID付与
var wake = 0;       // 覚醒フラグ
var waked = 0;      // 覚醒した後のフラグ
var listB;
var len;            // 配列の要素数

var week = ['日', '月', '火', '水', '木', '金', '土'];

var DH = new Date();                // オブジェクトの生成
var Month  = DH.getMonth() + 1;      // 月を返す
var Day    = DH.getDate();           // 日にちを返す
var Hours  = DH.getHours();          // 時間を返す
var WeekNo = DH.getDay();

var MD = '今日は' + Month + '月' + Day + '日(' + week[WeekNo] + ')だよ';
var HO = '今は' + Hours + '時くらいだよ';
var WE = '今日は' + week[WeekNo] + '曜日だったはず';
var name;

// renewal.jsの
var ary, capaA;

// 学習機能
if(typeof localStorage === 'undefined'){
    window.alert('このブラウザでは学習機能が使用できません');
    
    // 覚えるボタンを隠す
    $(function(){ $('#learn-btn').hide(); });
}else{
    var storage = localStorage;
    var aryPls  = [];
    var aryPls2;
    if(storage.aryPls == null)
        storage.setItem('aryPls', JSON.stringify(aryPls));      // JSON形式で追加しないと文字化けが起こる
    aryPls2 = JSON.parse(storage.getItem('aryPls'));
    
    // 覚えるボタン
    function learn(){
        var input   = $('#inputData').val();
        var output  = $('#outputData').val();
        
        if(input.length && output.length){
            input = input.replace(/&/g, '&amp').replace(/</g, '&lt;');                // HTMLの文字コードの拒否
            output = output.replace(/&/g, '&amp').replace(/</g, '&lt;');
            aryPls2.push([input, output]);
            storage.aryPls = JSON.stringify(aryPls2);
            
            window.alert('覚えました');
            $('#inputData, #outputData').val('');
            $('#plus').text(aryPls2.length);         // 表示を変更
            history.back();
        }else
            window.alert('入力して下さい');
    }
    
    // 忘れるボタン
    function clearStorage(){
        aryPls = [];
        storage.setItem('aryPls', '[]');            // JSON形式で追加しないと文字化けが起こる
        window.alert('覚えた言葉をリセットしました');
        $('#plus').text(0);
        $('#listB').html('');
    }
    
    // 覚えさせるボタンの挙動
    function set(num){
        str = str.replace(/&amp/g, '&').replace(/&lt;/g, '<');
        
        var string = '#ing' + num;
        $('#inputData').val($(string).text());
    }
    
    // 覚えさせた言葉一覧を表示ボタン
    function printL(){
        len = aryPls2.length;
        aryPls2 = JSON.parse(storage.getItem('aryPls'));
        if(!aryPls2.length)
            window.alert('言葉を覚えていません');
        else{
            listB = '';
            for(var j=0; j<len; j++){
                aryPls2.sort();
                listB += '<tr><td>' + aryPls2[j][0] + '</td><td>' + aryPls2[j][1] + '</td></tr>';
                $('#listB').html(listB).trigger('create');
            }
        }
    }
}

// 覚醒スクリプト
function wakeUp(){
    waked=1;
    $('#talkP').append('<div><p class="ui-body ui-body-a ui-corner-all ui-btn-inline">覚醒しました。<br>終了させるにはリロードしてください。</p></div>');
    scrollBy(0,200);
}

// send()のスクリプト
function send(){
    var cnt = 0;   // 一致した回数を入れるための変数
    len = aryPls2.length;
    
    str = $('#text').val();
    str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;');
    var strS = str.replace(/\s/g, '');
    
    
    var strA;
    var str1 = '<div align="right"><p class="me ui-bar ui-bar-a ui-corner-all ui-btn-inline">';
    var str2 = '<div><p class="ui-body ui-body-a ui-corner-all ui-btn-inline">';
    var str3 = '</p></div>';
    
    if(!i){    // 初期に挨拶を返す
        var mem = ['', 'よう', 'なんか用か？', 'どうした？', '今日も頑張ろう', 'なんだか寂しそうだな', MD];
        var memlen = mem.length;
        
        if(3 < Hours && Hours < 7)
            mem[0] = 'はやいね';
        else if(6 < Hours && Hours < 10)
            mem[0] = 'おはよ';
        else if(9 < Hours && Hours < 18)
            mem[0] = 'こんにちは';
        else
            mem[0] = 'こんばんは';
        $('#talkP').append(str2 + mem[Math.floor(Math.random()*memlen)] + str3);
        i=1;
    }else if(str.length && strS.length){                    // 本文
        var mem = [];                                       // 一時的に保存する配列
        
        $('#talkP').append(str1 + str + str3);              // 自分の発言を入れる
        $('#text').val('');     // input内の値の消去
        
        // 初期の単語
        for(var j=0; j<capaA; j++){                     // 配列の量分まわす
            var meta;                                   // match()の返り値を入れる変数
            var capa;                                   // 登録されてる数を入れる変数
            meta =　ary[j][0];                          // いったん格納
            
            var Reg = new RegExp(meta, 'g');            // それを正規表現の値として保存(オブジェクト化しないといけない)
            meta = str.match(Reg);                      // 正規表現で検索
            
            if(meta!=null){                             // null以外なら実行
                capa = ary[j].length;                   // 登録数を代入
                for(var k=1; k<capa; k++){
                    mem[cnt] = ary[j][k];               // 一致した奴の返事を格納
                    cnt++;                              // 一致した回数をカウントし、代入
                }
            }
        }
        
        aryPls2 = JSON.parse(storage.getItem('aryPls'));
        
        // 追加した単語
        if(typeof localStorage !== 'undefined' && aryPls2.length){
            for(var j=0; j<len; j++){                           // 配列の量分まわす
                var meta;                                       // indexOfの返り値を入れる変数
                meta = str.indexOf(aryPls2[j][0]);              // 受け取った言葉をindexOf()で検索し-1以外だとヒット
                
                if(meta!=-1){                                   // -1以外なら実行
                    mem[cnt] = aryPls2[j][1];                   // 一致した奴の返事を格納
                    cnt++;                                      // 一致して回数をカウントし、代入
                }
            }
        }
        
        if(cnt)
            strA = mem[Math.floor(Math.random()*cnt)];          // 返事を配列から入れる
        else{
            strA ='『<span id="ing' + s + '">' + str + '</span>』って？<br><a href="#learn-word" class="ui-btn ui-corner-all ui-icon-edit ui-btn-icon-left" onClick="set(' + s + ')">覚えさせる</a>';
            s++;
        }
        
        // 覚醒機能
        if(str == '覚醒する？'){
            wake = 1;
            strA = '……';
        }else if(str == '覚醒しちゃう？' && wake==1){
            wake = 2;
            strA = '……';
        }else if(str == '覚醒しちゃいます？' && wake==2){
            wake = 3;
            strA = '……！';
        }else if(str == '覚醒しちゃいましょう！' && wake==3){
            strA = 'うおおおおおおお！<br><a href="#" class="ui-btn ui-corner-all ui-icon-edit ui-btn-icon-left" onClick="wakeUp()">覚醒する</a>';
        }else if(wake > 0){
            wake = 0;
            strA = 'ぷしゅう……';
        }
        
        // 覚醒単語
        if(waked != 0){
            var wakeAry = ['ふひひ', 'んんんん！', 'くっ……古傷が', '(暗黒微笑)', '(☝ ՞ਊ ՞)☝', 'うぇえええええええええええいい', 'んぼぁああああああああ', 'ヌカコポォオオオオオ', 'デュフフ', 'ええいいああああああ', 'HAHAHA', 'きぇえええええええ！', 'ひぃいはあああああああ', 'うふふふふ！オッケー☆', 'でっていう', 'おててのシワとシワを合わせてごっつぁんです！', '知ってました？<br>自転車ってタイヤが付いてるんです', 'ひゃっはー！', '愛しさと切なさを超えた超越者となるのだ', 'ヒジとかヒザとかカカトとかカサカサ'];
            var len0 = wakeAry.length;
            strA = wakeAry[Math.floor(Math.random()*len0)];
        }
        
        // 入力＆処理
        $('#talkP').append(str2 + strA + str3);
        $('#inputData, #outputData').val('');
        cnt = 0;
        scrollDown();              // 下にスクロール
    }
}

// スクロールする関数
var scrollCount=0;
function scrollDown(){
    window.scrollBy(0,20);
    if(scrollCount<30){
        setTimeout('scrollDown()', 10);
        scrollCount++;
    }else{
        scrollCount=0;
    }
}
