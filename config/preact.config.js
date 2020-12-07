import { resolve } from 'path';
import path from 'path';

export default {
    webpack(config, env, helpers) {
        if(env.production){
            config.output.publicPath = "/classlesswind/";
        }
        if ( config.module && config.module.rules ) {
            for ( const rule of config.module.rules ) {
                if ( rule.use ) {
                    for ( const loader of rule.use ) {
                        if ( loader.loader === 'postcss-loader' ) {
                            loader.options = {
                                postcssOptions: {
                                    config: path.resolve(__dirname, 'postcss.config.js')
                                }
                            }
                        }
                    }
                }
            }
        }

        config.resolve.alias["preact-cli-entrypoint"] = resolve(
            process.cwd(),
            "src",
            "index"
        );
        // fs.writeFileSync( './build/webpack.config.js', JSON.stringify( config, null, 4 ) )
    }
};