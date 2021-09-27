// const target = 'http://127.0.0.1:3000' //proxy 요청을 보낼 서버 주소

// module.exports = {
//     devServer: {
//         port: 8080,
//         proxy: {
//             //proxy 요청을 보낼 api 시작 부분
//             '^/api': {
//                 target,
//                 changeOrigin: true
//             }
//         }
//     }
// }


//네이버 로그아웃 프록시 사용(근데 안됨)
module.exports = { 
    chainWebpack: (config) => {
      config.plugins.delete("prefetch"); //prefetch삭제
    },
    devServer: {
      proxy: {
        '/oauth2.0': {
          target: "https://nid.naver.com",
        },
      },
    },
  };