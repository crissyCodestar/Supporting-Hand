var path = require('path');

module.exports = {
    mode:'none',
    context: __dirname + "/src",
    entry: "./app.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            // {
            //     test: /\.jsx?$/,
            //     exclude: /node_modules/,
            //     use: [
            //       {
            //         loader: 'babel-loader',
            //         options: {
            //           presets: ['react']
            //         }
            //       }
            //     ],
            //   },
            {
                test: /\.css$/,
                loaders: ["style", "css"],
                include: ['./node_modules/grommet/grommet.min.css', './node_modules/grommet-css/build/index.min.css']
            },{
              exclude: /node_modules/,
              test: /\.js$/,
              use: [
                { loader: 'babel-loader' }
              ]
            },
            {
              test: /\.scss$/,
              use: [
                {
                  loader: 'style-loader'
                },
                {
                  loader: 'css-loader'
                },
                {
                  loader: 'sass-loader', options: {
                    includePaths: ['./node_modules', './node_modules/grommet/node_modules']
                  }
                }
              ]
            },
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "react-router-dom": "BrowserRouter"
    },
};
