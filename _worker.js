export default {
  // nodejs_compatフラグを使用することを明示
  flags: {
    nodejs_compat: true
  },
  
  async fetch(request, env) {
    const url = new URL(request.url);
    const method = request.method;
    
    // 環境変数のデバッグログ（デプロイ時のみ）
    if (url.pathname.startsWith('/api/email/')) {
      console.log('環境変数チェック:');
      console.log('RESEND_API_KEY存在: ', !!env.RESEND_API_KEY);
      console.log('RESEND_FROM_EMAIL存在: ', !!env.RESEND_FROM_EMAIL);
      
      // 環境変数の値の一部を安全にログに記録（セキュリティのため完全な値は記録しない）
      if (env.RESEND_API_KEY) {
        const keyPrefix = env.RESEND_API_KEY.substring(0, 4);
        console.log(`RESEND_API_KEY接頭辞: ${keyPrefix}...`);
      }
      
      if (env.RESEND_FROM_EMAIL) {
        console.log(`RESEND_FROM_EMAIL: ${env.RESEND_FROM_EMAIL}`);
      }
    }
    
    // APIルートへのPOSTリクエストを特別に処理
    if (method === "POST" && url.pathname.startsWith('/api/')) {
      console.log(`API POSTリクエスト処理: ${url.pathname}`);
      
      try {
        // メール送信APIの場合、環境変数を確認
        if (url.pathname === '/api/email/send-confirmation') {
          if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL) {
            console.error('メール送信に必要な環境変数が設定されていません');
            return new Response(JSON.stringify({ 
              success: false, 
              error: 'メール送信に必要な環境変数が設定されていません' 
            }), { 
              status: 500,
              headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
              }
            });
          }
          
          // 環境変数をプロセス環境変数として設定
          // これにより、APIルート内でprocess.env経由でアクセスできるようになる
          process.env.RESEND_API_KEY = env.RESEND_API_KEY;
          process.env.RESEND_FROM_EMAIL = env.RESEND_FROM_EMAIL;
          
          // リクエストボディをログに記録（デバッグ用）
          try {
            const clonedRequest = request.clone();
            const body = await clonedRequest.json();
            console.log('リクエストボディ:', JSON.stringify(body, null, 2));
          } catch (bodyError) {
            console.error('リクエストボディの解析に失敗:', bodyError);
          }
        }
        
        // APIリクエストを処理
        console.log('APIリクエストを処理中...');
        const response = await env.ASSETS.fetch(request.clone());
        
        // レスポンスのステータスコードをログに記録
        console.log(`API レスポンスステータス: ${response.status}`);
        
        // エラーレスポンスの場合、詳細をログに記録
        if (!response.ok) {
          const clonedResponse = response.clone();
          try {
            const errorData = await clonedResponse.json();
            console.error('APIエラーレスポンス:', JSON.stringify(errorData, null, 2));
          } catch (jsonError) {
            console.error('APIエラーレスポンスの解析に失敗:', jsonError);
            
            // テキストとして読み取り試行
            try {
              const textResponse = await response.clone().text();
              console.error('APIエラーレスポンス (テキスト):', textResponse);
            } catch (textError) {
              console.error('APIエラーレスポンスのテキスト読み取りに失敗:', textError);
            }
          }
          
          // メール送信APIの場合、カスタムエラーレスポンスを返す
          if (url.pathname === '/api/email/send-confirmation') {
            return new Response(JSON.stringify({ 
              success: false, 
              error: 'メール送信に失敗しました。詳細はサーバーログを確認してください。',
              status: response.status,
              timestamp: new Date().toISOString()
            }), { 
              status: 500,
              headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
              }
            });
          }
        }
        
        return response;
      } catch (e) {
        console.error(`API処理エラー: ${e.message}`);
        console.error(`エラースタック: ${e.stack || 'スタックなし'}`);
        
        // メール送信APIの場合、より詳細なエラー情報を返す
        if (url.pathname === '/api/email/send-confirmation') {
          return new Response(JSON.stringify({ 
            success: false, 
            error: `メール送信処理エラー: ${e.message}`,
            stack: e.stack,
            timestamp: new Date().toISOString(),
            envVars: {
              RESEND_API_KEY_EXISTS: !!env.RESEND_API_KEY,
              RESEND_FROM_EMAIL_EXISTS: !!env.RESEND_FROM_EMAIL,
              RESEND_FROM_EMAIL: env.RESEND_FROM_EMAIL
            }
          }), { 
            status: 500,
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type'
            }
          });
        }
        
        return new Response(JSON.stringify({ 
          success: false, 
          error: `API処理エラー: ${e.message}`,
          stack: e.stack
        }), { 
          status: 500,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
          }
        });
      }
    }
    
    // OPTIONSリクエスト（CORS preflight）を処理
    if (method === "OPTIONS") {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400'
        }
      });
    }
    
    // その他のリクエスト（GET等）を処理
    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      console.error(`リクエスト処理エラー: ${e.message}`);
      console.error(`エラースタック: ${e.stack || 'スタックなし'}`);
      return new Response(`リクエスト処理中にエラーが発生しました: ${e.message}`, { status: 500 });
    }
  }
};
