# cssobj-plugin-csstext

Get cssText from CSSOM.

## Install

``` javascript
npm install cssobj/cssobj-plugin-csstext
```

## Usage:

### Option 1 (recommanded): as callback for onUpdate

``` javascript
var result = cssobj(obj, { onUpdate: pluginCssText(callback).post })

function callback(cssText) {
  // for each result.update
  // cssText be the whole cssom text of result

  console.log(cssText)
  // open your console and see the result
}
```

### Option 2: as a plugin

It **must** load after [plugin-cssom](https://github.com/cssobj/cssobj-plugin-cssom).

``` javascript
var pluginCssText = require('cssobj-plugin-csstext')

var result = cssobj(obj)

result.options.plugins.push( pluginCssText(callback) )
```

