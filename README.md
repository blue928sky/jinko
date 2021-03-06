# #=== WIP ===#
# jinkoさんとは？
### 遊びたい方は⇒[こちら](https://blue928sky.github.io/jinko/)

私が学生の頃に暇つぶしというか、プログラミングの勉強の一環として作っていた[人工無能](#人工無能とは)型のチャットボットです。  
近年はニューラルネットワーク等で人工学習が進んでおり人工知能が飛躍的進化を遂げています。ですが、当時、私の能力不足かつそこまで人工知能をJavaScriptでやろうとういう猛者(いたかもしれない)はいなかったので人工無能と呼ばれる、ユーザーが能動的に言葉を教えるプログラミングを組んでいました。  
今思えば分ち書きもなければ、正規表現(しかも覚えたてで拙い)を駆使してユーザーの言葉をなんとか拾ってくるという力技。見てて懐かしいやら恥ずかしいやらのソースコードです。  
このREADME.mdは当時のことを思い出しながらこんなこと調べたな、とかをつらつら書きたいように書いてるやつです。

# 人工無能とは
> 人工無脳（じんこうむのう）は、人間的な会話の成立を目指した人工知能に類するコンピュータプログラムである。  
> [人工無能 - Wikipedia](https://ja.wikipedia.org/wiki/%E4%BA%BA%E5%B7%A5%E7%84%A1%E8%84%B3)
<details>
<summary>概要</summary>
<blockquote>人工無脳は、ユーザーがキーボード等を通じて語りかけることで、何らかの返答を口語でアウトプットする。 コンピュータに対する人格や知性といった人間らしさの付与を最終到達点と考える研究分野には、人間の脳（ニューロン）の働きをコンピュータプログラムに置き換えて成長させ、コンピュータにコミュニケーション能力を獲得せしむる道が存在するが、ボトムアップ型とも通称される、自我や知性を持つ人工知能の構築には課題が多く、完成が容易でない。 そこで、コンピュータに言葉の意味を理解させるのではなく、インプットされた内容に対する自然な応答を事前に学習、蓄積させておく手法が考案された。 このような逆算的アプローチによって構成された人工知能をトップダウン型と称し、ここで解説する人工無脳や、コンピュータゲームにおいて自律行動するNPC、オートメイテッドのオブジェクト等が、その代表格として知られる。 したがって、予め用意された文章を選択的にアウトプットする手法により会話の成立を目指した、ある種の人工無脳であるGoogleアシスタントやSiri等は、人工知能ともうたわれている。 先述の通り、人工無脳はトップダウン的なアプローチによって人間らしさが構築されており、事前に準備されたユーザーが期待するであろうレスポンスをアウトプットするため、その応答からは、しばしば知性の存在を錯覚させる。 しかしながら大半の人工無脳は、収集した文章からキーワードを抽出（構文解析）し、内部のデータベースとマッチング（探索）して応答する手法を用いているため、人間の思考とは解に至るまでのプロセスが大きく異なる。<br>
<a href="https://ja.wikipedia.org/wiki/%E4%BA%BA%E5%B7%A5%E7%84%A1%E8%84%B3#概要">人工無能 - Wikipedia</a></blockquote></details>

いきなりWikiですが、概ねそういうことです。  
つまり、受け取った言葉を今まで蓄積したデータを参照して返事をするということです。人工知能との違いは、人工知能は受け取った言葉や蓄積した言葉をある規則性をもって計算し、最も得点の高い答えを生成もしくはピックアップして出力する。それに対し、人工無能は計算こそするものの人工知能よりもはるかに少ないデータ量や計算で返事を返すもので、簡単に言えばオウム返しや定型句を返すものと思ってください(※ただし、これは比喩表現です)。

#### 人口知能型のチャットボット
⇒ 相手の言葉を考えて受け取り、考えて答える
#### 人口無能型のチャットボット
⇒ 相手の言葉を何となく受けとり、何となく返す

とざっくり覚えていただけたらと思います。

ただし、上記のように最近の人工無能は無能とは言い難い進化を遂げており、GoogleアシスタントやSiriなど話し言葉を受け取り、音声で返すようになり他のサービスとの橋渡し役なども可能になっています。  
~~そんなことどうでもいいですね、そうですね~~

# 開発環境＆使用言語
どうでもいいことを書きつつ当時の環境をちまちまと並べます
## 開発環境
- MacBook Pro (Late 2011)
- Xcode (バージョンは忘れました) 

当時、C言語とObjective-Cを勉強してiOSアプリの開発をしていたこともあってMacとXcodeで開発していました。  
まぁメモリの容量からしてエミュレータが起動するのに物凄い時間を要したことは言うまでもありませんが……。

## 開発言語
- HTML5
- JavaScript
  - [jQuery](https://jquery.com/)
  - [jQuery Mobile](https://jquerymobile.com/)
- CSS3
  - jQuery Mobile

当時のスマホ向けWebアプリを作成に必須だったのではないかと思われるくらい様々な所で見かけたjQueryを使用していました。  
今でも現役でアップデートはされていますが、見る機会は減った気がします。  
少ない記述でDOM操作可能で簡単にAjaxに対応していたのでなかなかどうして便利だったのですが、jQuery Mobileの記述量の多さから他のフレームワークに移られてしまいました。[Onsen UI](https://ja.onsen.io/)なんてのもありましたね。  
HTML5もドラフトされて「なにこれ！HTMLでこんな表現できんの！？」って状態だったのですが、案の定IEさんの対応が遅く(W3CとWHATWGの対立もあって)記述内容がしっちゃかめっちゃかだった気がします。

特にCSS3。  
ベンダープレフィックスと呼ばれるものを大量に書き込まなきゃ各ブラウザに対応できなかったという面倒くさいことが山のようにありました。今はだいぶ緩和されてみたいですが。
<details>
  <summary>主なベンダープレフィックス</summary>
  <ul>
    <li><code>-moz-</code>&ensp;&ensp;&ensp;&ensp;Firefox</li>
    <li><code>-webkit-</code>&ensp;Google Chrome、Safari</li>
    <li><code>-o-</code>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Opera</li>
    <li><code>-ms-</code>&ensp;&ensp;&ensp;&ensp;&ensp;Internet Explorer</li>
  </ul>
</details>

今はW3CとWHATWGが仲直りしてHTML Living standerdって物が策定されたみたいですね。

jQuery MoblieはCSSがとても充実していて当時の流行りだったスマホでのレイアウト様式を備えていました。アイコンもSVG対応しており(もちろん非対応のブラウザにはPNG表示)スマホの画面が大きくなるなか、拡大されても滲まず表示することが可能でした。  
今でもそうですがAndroidとiOSのアプリ開発はネイティブ言語が主流で、AndroidはJava(現在はKotlin)でiOSはObjectiv-C(現在はSwift)です。お互いに互換性がなくAndroidのアプリを開発してもiOSに持っていくことは個人レベルではとても困難でした。逆も然りです。  
AndroidとiOSのアプリを同時に開発するはとてもコストがかかることでしたが、それを解決するのがクロスプラットフォーム・[ハイブリッドアプリ](#ハイブリッドアプリ)でした。

### ハイブリッドアプリ
ハイブリッドアプリとはWebサイトを構築する言語や技術を利用してiOSやAndroidなどのスマホ向けに開発されたアプリのことです。ざっくり言えば、
#### ネイティブアプリ + HTML5 + JavaScript (+ CSS3) ⇒ ハイブリッドアプリ
です。

上記の通り、各OSのアプリを作るには各々にあった言語を習得する必要があり、個人的な開発ではとても垣根が高いものでした。しかし、HTMLやJavaScriptなどのWebサイトを構築してる言語はOSに依存せずに表示表現することが可能です。また、iOSやAndroidにも標準でWebViewウィジェットを搭載しています。このWebサイト構築を利用してネイティブアプリとして動かそうとしたのがハイブリッドアプリです。  
当時はアシアル株式会社が提供していた[Monaca](https://ja.monaca.io/)やニトビ・ソフトウエア社によるPhonegap(現在はアドビが買収し[Apache Cordova](https://cordova.apache.org/))が競い合っていたイメージがあります。この二つのモバイルフレームワークのすごいところが、HTMLやJavaScriptだけでは実現できないネイティブ機能の操作が容易という点です。ネイティブ機能、つまりGPSや端末の加速度センサー、カメラ機能など本来ネイティブ機能にアクセスするにはWebサイト構築技術だけでは不可能でした。しかし、このモバイルフレームワークはアプリとしてWebViewに表示するのはHTML5やJavaScriptなどの言語を使用し、ネイティブ機能にアクセスする部分はインターフェースを介してJavaScriptで呼び出しが可能です。  
こうなればクロスプラットフォームとしてはとても優秀でネイティブ言語を習得しなくても(一部は必要ですが)ネイティブ機能にアクセスすることが容易でネイティブアプリと遜色ないアプリ、ハイブリッドアプリの開発が可能ということです。  
まぁ、当時はコンパイルや描画に時間がかかったり、動作がやはりネイティブに劣ったりjQuery Mobileに不具合があったりと、なかなか初心者には厳しいこともありました。現在はXamarin(マイクロソフトの子会社開発)、React Native(Facebook)、Flutter(Google)などが作ったモバイルフレームワークがあり、個人開発でも十分クラスプラットフォームに対応したアプリ開発が可能になりました(こちらは独自の言語を利用しネイティブ機能にアクセスするのでハイブリッドアプリではないですが)。

脱線に次ぐ脱線。

## 活用していた機能
- [Ajax](#Ajax)
- [DOM操作](#DOM操作)
- [Web storage (Local storage)](#web-storage-local-storage)

### Ajax
**A**synchronous **J**vaScript **A**nd **X**ML略してAjaxです。リロードや別ページを開かずJavaScriptで非同期通信を行いDOM操作を行うことでリアルタイムに情報を取得したかのように見せることができる技術。  
すべての情報を全部読み込むには時間がかかるためUX低下を招いたり、そのユーザーにとって不必要なデータを取得するとサーバーにも負担がかかる。しかし、非同期通信をすれば一部の情報だけ先に表示させて必要なデータのみを非同期的に取得すれば、ユーザーからは滞りなく表示しているように見えたりサーバーの負荷を軽減することが可能です。

そもそも2010年頃からUXデザインという言葉が流行され始め、いまではどのアプリでもあたかもシームレスに動いてるかのような動作をしていますが、ほとんどは非同期通信を行いバックグラウンドでデータをやり取りしUXの向上を図っています。まあ、同期的に通信して画面が固まったかのようになるよりはユーザーのイラつきを軽減できますよね。  
HTML Living standerdでは`img`属性に`decoding="async"`と`loading="lazy"`が標準化されてます。非同期というか、HTMLのbodyをパースした後に読み込む属性ですがメインスレッドでは実行しないのでユーザーからは非同期と変わらない動作をします。

### DOM操作
**D**ocument **O**bject **M**odelを操作することです。そもそもサーバーからページデータを受け取るとこのDOMと呼ばれるデータに変換して受け取ります。このデータをCSSなど用いてスタイリングし描画することでページを表示しています。この変換後のデータをJavaScriptなどで、追加・修正・削除などをすることでサーバーにアクセスせずにページを変化させることができます。Ajaxと一緒に利用するとよりリッチな表現が可能になります。

### Web storage (Local storage)
ざっくり言うと、クッキーの上位互換です。クッキーはログイン情報などの一部をデバイスに残しておくことで、再度ページに訪問してもログイン状態を保持し、ユーザーが快適にページへアクセスしたりすることができる情報のことです。しかしこのクッキーは4KBまでしか保持できないこと、有効期限があること、セキュリティに難があったことがあり開発者を悩ませていました。  
HTML5からWeb storageと呼ばれる機能が追加され5MBまで保存可能、有効期限はなく、明示的に記述しなければサーバーに情報を送信しないというクッキーの後継となるものが登場しました(Web storageでもセキュリティ対策は必要ですが)。
