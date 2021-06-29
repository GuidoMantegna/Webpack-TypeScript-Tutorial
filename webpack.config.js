// To create an absolute path (used within output{path:...}) we can use the path module.
const path = require('path');

module.exports = {
/* specify the entry (our TypeScript source file). 
This is the entry point for webpack, is the first file it's going to look at and eventually compile. 
But it will also compile all the dependencies or files that we import into the index.ts file.       
*/
    entry: './src/index.ts',

/* Tell Webpack to compile TS files or modules using the TS loader package into JS (Between the entry and output process) */
    module: {
        rules: [
        {
            test: /\.ts$/,
            include: [path.resolve(__dirname, 'src')],
            use: 'ts-loader',
        }
        ]
    },

/* define Output files (the resulting JavaScript bundle that Webpack is gonna spit out into the public folder at the ends).
The output file is going to be an object because inside here we specify a few different properties.  
 */
    output: {
        // Call the JS file that is inside the public folder
        filename: 'bundle.js',
        // Define the absolute path to where we want output this file. The method resolver takes two parameters:
        // 1. __dirname --> looks where this file is on the computer or the server and it finds the absolute path to the webpack.config.js
        // 2. The directory from this path that we're currently in that we want to jump into  
        path: path.resolve(__dirname, 'docs')
    }

}
