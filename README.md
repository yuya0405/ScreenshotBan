# ScreenshotBan
JSでスクリーンショットを禁止する機能を実装

# 実行方法

1. 最新の [Node.js](https://nodejs.org/en/) がインストールされていることを確かめる。
2. プロジェクトフォルダ（my-app）内で`npm start`を実行。

# 実装に利用したコードの一部
[画像の無断転載を防ぐ方法アイデアメモ](https://qiita.com/a_haru/items/2b8af48f84432e03f199)

# その他の参考
[WEBサイトのテキスト・画像のコピー・キャプチャ防止策まとめ](https://nanimonaikedo.jp/coding/406/#%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%E7%94%BB%E9%9D%A2%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E9%98%B2%E6%AD%A2)

[JavaScriptでPrintscreenによる画面キャプチャを無理やり無効にする方法](https://qiita.com/Atheist2/items/d46e07508a6c619cca9f)

[さまざまな動画のコピー防止策を知ろう](https://blog.socialcast.jp/11/post-371/#toc1)

# DRMを使った動画配信について

本コードでは実装可能なコピー対策は出来るところまで行ったが、HTMLから動画のURLを解析されてしまうとダウンロードできるようになってしまう。これを防ぐ方法には、DRMを使った動画配信が挙げられる。

- GoogleのWidevine
- AppleのFairPlay
- MicrosoftのPlayReady

上記を導入すれば動画を暗号化できるようになるが、非常に高価な模様（価格不詳）
