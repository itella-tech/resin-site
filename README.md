This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy on Cloudflare Pages

このプロジェクトはCloudflare Pagesにデプロイすることもできます。以下の手順に従ってください：

### 前提条件

1. Cloudflareアカウントを持っていること
2. wrangler CLIがインストールされ、認証されていること

### デプロイ手順

1. 環境変数を設定する

   Cloudflare Pagesで環境変数を使用するには、Cloudflareダッシュボードから設定します：
   
   Cloudflareダッシュボードの「Workers & Pages」→「プロジェクト」→「設定」→「環境変数」から以下の環境変数を設定してください：
   
   - RESEND_API_KEY
   - RESEND_FROM_EMAIL
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY

2. デプロイを実行する

   ```bash
   # 一括デプロイ（ビルド＋デプロイ）
   npm run deploy:cf
   ```

3. デプロイが完了すると、Cloudflareから提供されるURLでアプリケーションにアクセスできます：https://7b9c990f.resi-cola.pages.dev

### ローカルでのテスト

Cloudflare Pagesの環境をローカルでテストするには：

```bash
npm run pages:dev
```

これにより、ローカル環境でCloudflare Pagesのエミュレーションが起動し、アプリケーションをテストできます。

### Cloudflare Pages vs Cloudflare Workers

- **Cloudflare Pages**: 静的サイトホスティングサービス。静的なウェブサイトやシングルページアプリケーション（SPA）に適しています。大きなファイルサイズもサポートしており、Next.jsアプリケーションのデプロイに適しています。
- **Cloudflare Workers**: サーバーレス実行環境。動的なAPIやサーバーサイドロジックを実行できます。ファイルサイズに制限（25MiB）があります。

このプロジェクトはCloudflare Pagesを使用して、Next.jsアプリケーション全体をデプロイします。
