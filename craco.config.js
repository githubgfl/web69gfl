const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],

babel:{
     plugins:[ 
  [
         "import",
         {
             "libraryName" : "antd" , 
             "libraryDirectory" : "es" ,    // 默认值：lib 
             "style" : true 
         }
        ]
      ]
  

    

},



};