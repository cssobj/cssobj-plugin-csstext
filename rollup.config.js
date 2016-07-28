// rollup.config.js

export default {
  entry: 'src/cssobj-plugin-post-csstext.js',
  moduleName: 'cssobj_plugin_post_csstext',
  moduleId: 'cssobj_plugin_post_csstext',
  targets: [
    { format: 'iife', dest: 'dist/cssobj-plugin-post-csstext.iife.js' },
    { format: 'amd',  dest: 'dist/cssobj-plugin-post-csstext.amd.js'  },
    { format: 'cjs',  dest: 'dist/cssobj-plugin-post-csstext.cjs.js'  },
    { format: 'es',   dest: 'dist/cssobj-plugin-post-csstext.es.js'   }
  ]
}
