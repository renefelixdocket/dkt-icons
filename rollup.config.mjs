import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

const config = {
    input: 'src/index.ts',
    output : {
        dir: 'dist',
        format: 'esm'
    },
    external : [/@babel\/runtime/, 'react'],
    plugins: [
        babel({babelHelpers: 'runtime', plugins: ['@babel/plugin-transform-runtime']}), typescript()
    ],
};

export default config;