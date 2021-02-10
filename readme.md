# 減災教室プロジェクト

## アップロード方法
このwebページは`npm`で管理されており、そのままアップロードしても動きません。
なので、ビルド(≒Cでいうところのコンパイル)する必要があります。

### 事前準備
開発環境の準備をしましょう。node package manager(npm)をインストールしてください。
インストール後、ファイルのダウンロードと初期設定を終わらせます。

```
$ git clone [url]    
$ cd Gensai
$ npm install
```

### ローカルでの実行
とりあえず試しに手元で動かしたい場合

```
npm run build
npm run dev
```


そのあと`localhost:8080/`にアクセスすると開きます。（勝手に開くはず）

### サーバーでの実行

サーバで動かしたい場合

```
npm run prod
```

そのあと出来上がった

- dist/
    - (ただしbuild.js.mapは取り除く)
- static/
    - すべて
- index.html
- policy.html

をサーバにアップロードしてください。

## 教室の追加方法
「教室」が簡単に追加できるようになっています。
ただ一部プログラム内にハードコーディングされている部分があるので、jsonから読み取るように変更します。

1. static/以下に「レベル名」でフォルダを作成
1. static/[level]以下にimgフォルダと問題設定ファイルcontent.jsonを設置。
1. imgフォルダ内には問題サムネイルQ1.png, Q2.png ... Q.ongを設置
1. imgフォルダ内にkao0.png, kao1.png...を設置
1. loader.jsで問題ファイルをロードする文を書く
1. topにリンクを張る

最終的なフォルダ構成は次のようになります。
- static/
    - default/
    - [level]
        - img/
            - kao0.png
            - kao1.png
            - Q1.png
            - Q2.png
        - content.json: 問題ファイル
    - settings.json: Webの設定やテキストはすべてここに書く


### 問題ファイルの設定方法
問題ファイルはjsonというフォーマットで書かれています。それに合わせて書くようにしてください。
だいぶ簡略化したつもりです。こちらは最低限必要なものだけ例示しておきます。

| key | type | description |
|-- | -- | --|
cateogorries: jsonArray

```json
categories: [

]
```

## フォルダ構成
vue.componentで構成されてます

- assets/
    - css/
    - json/
        - 言語の切り替えを楽にするため、htmlのテキストはjsonに保存され後から読み込む仕様になっています。
        - webpackでコンパイルするのでファイルを分けても高速なはずです。
