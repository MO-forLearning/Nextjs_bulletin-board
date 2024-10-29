## 概要

 Next.jsを用いたコメント投稿ができる掲示板サイト<br >
 カテゴリ登録&トピック作成後、その投稿内容についてコメントできます。<br >
 制作：約220時間（本サイト制作で初めてNext.jsに触れました。）


## 環境

| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| MySQL2                 | 3.6.3        |
| axios                 | 1.6.0        |
| Node.js               | 18.17.0    |
| Next.js                 | 14.0.1     |
| Next Auth                 | 4.24.4     |
| npm             |  9.6.7      |
| Tailwind CSS             |  3.3.5      |
| TypeScript             |  4.3.5      |


## 機能一覧

- ログイン機能
  - 登録されたユーザーのみ閲覧可能
- コメント投稿機能
  - 登録、更新日時表示
- トピック作成機能
- カテゴリ作成機能
- 検索機能
  - 絞り込み機能


## ディレクトリ構成
<pre>
.
├── .env.local
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── .vscode
|   └── settings.json
├── README.md
├── auth
|   └── [...nextauth].ts
├── docker-compose.yml
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
|   ├── next.svg
|   └── vercel.svg
├── src
|   ├── app
|   ├── components
|   ├── const
|   ├── features
|   ├── libs
|   ├── pages
|   └── styles
├── tailwind.config.js
├── tsconfig.json
├── utils
|   ├── configs
|   └── typeGuards.ts
└── yarn.lock
</pre>


## 開発環境構築

### コンテナの作成と起動

 .env ファイルを以下の環境変数例と[環境変数の一覧](#環境変数の一覧)を元に作成

.env
NEXT_PUBLIC_URL=http://localhost:3000<br >
MYSQL_HOST=localhost<br >
MYSQL_PORT=3306<br >
MYSQL_DATABASE=bulletinboard_next<br >
MYSQL_USER=root<br >
MYSQL_PASSWORD=rootroot


.env ファイルを作成後、以下のコマンドで開発環境を構築

npm run dev
