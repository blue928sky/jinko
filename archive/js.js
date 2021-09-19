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