import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['resi-cola.netlify.app', 'resi-cola.pages.dev', 'resi-cola.workers.dev'],
    unoptimized: true, // 画像最適化を無効化して、静的なHTMLを生成
  },
  // Cloudflare Workersでの実行に対応
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  // Cloudflare Workersでの実行に必要な設定
  webpack: (config) => {
    config.externals = [...(config.externals || []), 'bufferutil', 'utf-8-validate'];
    return config;
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
