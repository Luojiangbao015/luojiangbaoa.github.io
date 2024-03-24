const docsify = require('docsify/lib/core');  
const path = require('path');  
  
docsify.init({  
  // 其他配置选项...  
  css: [path.resolve(__dirname, 'ff.css')],  
});