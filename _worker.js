export default {
  // nodejs_compatフラグを使用することを明示
  flags: {
    nodejs_compat: true
  },
  
  async fetch(request, env) {
    // 静的アセットの処理
    return env.ASSETS.fetch(request);
  }
};
