const path=require('path')
module.exports={
    entry:'./src/app/index.js',
    output:{
        path:path.resolve(__dirname+'/src/public'),
        filename:'main.js',
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                },
                resolve:{
                    extensions:['.js','.jsx']
                }
            },

        ]
    }
}