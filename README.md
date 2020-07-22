# Hasura を使ったプロジェクト実用例

## セットアップ

- 環境変数ファイルを各パッケージに配置

```bash
POSTGRES_PASSWORD=
HASURA_GRAPHQL_DATABASE_URL=
HASURA_GRAPHQL_ENDPOINT=
HASURA_GRAPHQL_ADMIN_SECRET=
AUTH_DOMAIN=
AUTH_CLIENT_ID=
AUTH_AUDIENCE=
```

- `hasura-cli` をインストール

```bash
npm install --global hasura-cli
```

- 依存関係をインストール

```bash
yarn install -W
```

## 開発

### hasura

Hasura GraphQL API サーバーの実装

- ローカル上に Hasura GraphQL API サーバーを起動

```bash
yarn hasura start
```

- ローカル上に起動した Hasura GraphQL API サーバーのコンソールを起動

```bash
yarn hasura console
```

- ローカル上に Hasura GraphQL API サーバーを停止

```bash
yarn hasura down
```

- 別の環境の Hasura GraphQL API サーバーにマイグレーションを適用する

```bash
yarn hasura migrate apply --version "<version>" --admin-secret "<admin-secret>" --endpoint "<endpoint>"
```

- 別の環境の Hasura GraphQL API サーバーにメタデータを適用する

```
yarn hasura metadata apply --admin-secret "<admin-secret>" --endpoint "<endpoint>"
```

### services

Hasura と連携させる外部サーバーの実装

- auth (認証プロバイダとの連携)

### web

Web クライアントの実装

- Hasura GraphQL API サーバーのスキーマ定義から TypeScript の型定義を生成

```bash
yarn web codegen
```

- ローカル上に React App を起動

```bash
yarn web start
```

- React App を本番用にビルド

```bash
yarn web build
```

### mobile

Mobile クライアントの実装 (TODO)
