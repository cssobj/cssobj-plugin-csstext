# cssobj-plugin-csstext

[![Join the chat at https://gitter.im/css-in-js/cssobj](https://badges.gitter.im/css-in-js/cssobj.svg)](https://gitter.im/css-in-js/cssobj)

Get cssText from CSSOM, for debug purpose.

## Install

- **npm**

``` javascript
npm install cssobj/cssobj-plugin-csstext
```

- **Use in DevTools**

paste below code into console:

``` javascript
function showcss(e){"string"==typeof e&&(e=document.getElementById(e)),e||(e=$0);var s=e.sheet||e.styleSheet;if(s.cssText)return s.cssText;for(var t="",n=s.cssRules||s.rules,r=0,c=n.length;r<c;r++)t+=n[r].cssText+"\n";return t}
```

Then can show css for any `<style>` tag:

``` javascript
showcss()  // show last selected style
showcss($0)  // show last selected style

showcss('styleTagId')  // using ID of style tag
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

