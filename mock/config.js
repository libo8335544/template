const path = require('path');
const config = {
    '/page/config': {
        method: 'get',
        data: './json/pageConfig.json',
        target: 'http://localhost:3000',
        changeOrigin:true
    }
}

//处理文件目录
for (let item in config) {
    if (config.hasOwnProperty(item)) config[item].path = path.resolve(__dirname, config[item].data);
}
module.exports = config;