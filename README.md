# FlowPilot AI

AI搭載タスク・業務管理SaaSのポートフォリオ用 Concept Work / Sample Work。
実在するサービスではなく、料金、機能、人物、プロジェクトは架空です。

## ファイル一覧

- `index.html`：全13セクションの構造、本文、料金、SEO・OGP基本設定
- `assets/style.css`：CSS Variables、レイアウト、レスポンシブ、hover、アニメーション
- `assets/script.js`：モバイルメニュー、CTA案内、タスク完了・進捗、デモ画面切り替え
- `assets/favicon.svg`：オリジナルの簡易ブランドアイコン
- `README.md`：編集・公開ガイド

ビルドやパッケージのインストールは不要です。`index.html`をブラウザで直接開けます。

## サイト構成

Header → Hero → 対象ユーザー → 課題 → 6つの機能 → Product UI Showcase → 3ステップの使い方 → AI Assistant → 利用メリット → 料金 → FAQ → Final CTA → Footer。

## デザイン

白とライトグレーの余白、深いネイビーの文字、インディゴの操作色を組み合わせています。人物写真に頼らず、製品画面を主役にして「仕事が整理される」体験を表現。Heroのコンパクトな画面、大きなダッシュボード、不均等な機能カード、会話型の提案画面で情報に強弱を付けています。

## UIモックアップ

Hero：優先タスク、AI提案、予定、週次進捗。
Product：Today / Inbox / Projects / Calendar / AI Assistant の切り替え、タスクチェック、進捗更新。
Assistant：5日間のタスク分解と、提案を反映したサンプル状態への切り替え。
サンプル状態は保存・送信されず、再読み込みでリセットされます。実際の生成AI、アカウント登録、決済、Google Calendar連携は実装していません。

## 編集箇所

### CTAリンク

`assets/script.js`冒頭の`CTA_URLS`で `free` / `pro` / `team` / `signin` を設定できます。空文字では架空サービスの案内ダイアログを開きます。ポートフォリオとして利用する限り、空のままを推奨します。
「デモを見る」は`index.html`の`href="#product"`です。
Privacy / Termsの文章は`assets/script.js`の`modalContent`です。

### 料金

`index.html`の`id="pricing"`内にある3つの`.price-card`を編集します。Pro/Teamの案内ダイアログにも金額があるため、`assets/script.js`の`modalContent.pro` / `.team`も合わせて変更してください。
無料回数はFreeカードとFAQ、無料の補足文はHero・Final CTAにもあります。

### サービス名・文章

本文・見出し・ロゴ表記：`index.html`。
ダイアログ・画面切り替え用サンプル文章：`assets/script.js`の`modalContent`と`views`。
タイトル・説明・OGP：`index.html`の`head`。
色・フォント・角丸：`assets/style.css`冒頭の`:root`。
サービス名変更時はREADME、favicon、フッターも見直してください。

## GitHub Pagesで公開する際の注意

1. このフォルダの中身をリポジトリの公開対象フォルダ（ルートまたは`docs`）に置きます。`index.html`が公開対象の直下に来るようにしてください。
2. GitHub Pagesの設定で対象ブランチとフォルダを指定します。ビルド処理は不要です。
3. CSS・JS・faviconは相対パスなので、プロジェクト名が付くURLでも動作します。ファイル名の大文字・小文字は保持してください。
4. 公開URLが決まったら`head`に`<link rel="canonical" href="実際の公開URL">`と`<meta property="og:url" content="実際の公開URL">`を追加します。
5. OGPタイトル・説明・種別・言語は設定済みです。画像は未設定です。必要なら1200×630px程度の専用画像を用意し、`og:image`にその絶対URLを指定してください。
6. Concept Workの注記を残してください。実績数・実在企業ロゴ・架空の口コミは使用していません。
7. 公開後にURL上でモバイル表示とアセット読み込みを再確認してください。ホスティング側の設定はこの納品物に含まれません。

## アクセシビリティ

日本語lang、文字コード、単一h1、見出し階層、main/nav/sectionなどのランドマーク、スキップリンク、キーボードフォーカス、ネイティブcheckbox・details・dialog、メニュー展開状態、進捗の読み上げ、動きを減らす設定に対応しています。アプリ画面は視覚デモのため一部に小さな補助文字を使用しています。サービスの主要説明は画面外の本文にもあります。

## ポートフォリオ掲載文案

**FlowPilot AI — AI / SaaS Website**

フリーランスや小規模チーム向けのAIタスク管理サービスを想定したコンセプトサイト。企画、情報設計、コピー、UIデザイン、HTML・CSS・JavaScript実装まで一貫して制作しました。「今日やることが見えてくる」を軸に、優先順位の提案や予定整理の価値を、ダッシュボードとチャットUIで具体的に表現。課題の共感から機能理解、料金比較、無料プランへの導線までを設計しています。PC・タブレット・スマートフォンに対応し、プロダクト画面の一部は操作可能なデモとして実装しました。

Category: AI / SaaS Website
Type: Concept Work / Sample Work
Target: Freelancers / Small Teams / Creators / Remote Workers
Design: Modern / Product-focused / Clean / Digital / Smart
Technology: HTML / CSS / JavaScript

## 検証結果と制約

確認済み：HTTP 200応答、UTF-8、参照ファイルの存在、内部リンクの参照先、IDの重複なし、h1が1つ、JavaScript構文チェック。

未確認：ブラウザ起動が環境側で失敗したため、PC・タブレット・スマートフォンの実描画、横スクロール、hover、アニメーション、キーボード操作、CTA・メニュー・FAQ・デモの実操作および実行時エラー。レスポンシブCSSと各動作は実装済みですが、公開前にブラウザで確認してください。
