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
.
├── .env.local<br >
├── .eslintrc.json<br >
├── .gitignore<br >
├── .prettierrc<br >
├── .vscode<br >
|   └── settings.json<br >
├── README.md<br >
├── auth<br >
|   └── [...nextauth].ts<br >
├── docker-compose.yml<br >
├── next-env.d.ts<br >
├── next.config.js<br >
├── package-lock.json<br >
├── package.json<br >
├── postcss.config.js<br >
├── public<br >
|   ├── next.svg<br >
|   └── vercel.svg<br >
├── src<br >
|   ├── app<br >
|   ├── components<br >
|   ├── const<br >
|   ├── features<br >
|   ├── libs<br >
|   ├── pages<br >
|   └── styles<br >
├── tailwind.config.js<br >
├── tsconfig.json<br >
├── utils<br >
|   ├── configs<br >
|   └── typeGuards.ts<br >
└── yarn.lock


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
