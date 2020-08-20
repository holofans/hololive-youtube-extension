# Hololive Youtube Extension

![IMG](https://raw.githubusercontent.com/ugurcandede/Under-Construction/master/construction-scene/Capture.PNG)

Readings for design:

- [How to make a Chrome Extension](https://thoughtbot.com/blog/how-to-make-a-chrome-extension) (Quick and Dirty Overview)
- [Chrome Dev Doc: Message Passing](https://developer.chrome.com/extensions/messaging) (emitting events to/from the **background** (associated with the extension button and anything UI it draws) to the **content_script** (running on page))

Similar Extensions for ideas:

- https://github.com/ParticleCore/Iridium Formerly YoutubePlus / Youtube+, this is a firefox extension that supports hotkeys, 
  - features:
    - Play videos automatically
    - Force max thumbnail resolution
    - Dark theme control
    - Turn 60fps off
  - analysis:
    - CON: single-file JS and html concatenation within js code not a great example of maintaining youtube stability
    - CON: bad permission management lead to it being removed from AMO store
    - CON: does not inject massive amounts of UI into Youtube
    - PRO: can be used as reference on what Youtube elements are parseable, but:
    - CON: does not have open source, please avoid copy pasting code directly.

- https://github.com/mustafakalash/royt Reddit On Youtube (RoYT) embeds Reddit Webpage obtained from Reddit API onto Youtube while watching.
  - features:
    - adds Reddit Data to the DOM
  - analysis:
    - PRO: Clean coding, although it's in one js file it's compartmentalized and very functionally written. Very easy to borrow its support functions (and even extend on them!).
    - PRO: Has localization support.
    - CON: It's not using VueJS or anything, but rather native Javascript to render. I don't think this is a deal breaker given how compartmentalized it is at doing its job - after all we aren't rendering reddit videos.
    - PRO: MIT-like with Attribution License
  - mozilla addons page: https://addons.mozilla.org/en-US/firefox/addon/reddit-on-youtube/?src=search
  
- some technical questions:
  - can youtube iframe youtube?
  - can youtube iframes superchat youtube?
  - can webextensions affect the content of youtube inside an iframe?
  - can pop outs superchat?
  - can chat pop-out superchat?

-----
## running


### `npm run build`

Build the extension into `dist` folder for **production**.

### `npm run build:dev`

Build the extension into `dist` folder for **development**.

### `npm run watch`

Watch for modifications then run `npm run build`.

### `npm run watch:dev`

Watch for modifications then run `npm run build:dev`.

It also enable [Hot Module Reloading](https://webpack.js.org/concepts/hot-module-replacement), thanks to [webpack-extension-reloader](https://github.com/rubenspgcavalcante/webpack-extension-reloader) plugin.

:warning: Keep in mind that HMR only works for your **background** entry.

### `npm run build-zip`

Build a zip file following this format `<name>-v<version>.zip`, by reading `name` and `version` from `manifest.json` file.
Zip file is located in `dist-zip` folder.



------
Built atop of:

# [vue-web-extension](https://github.com/Kocal/vue-web-extension)

[![Build Status (Travis)](https://travis-ci.org/Kocal/vue-web-extension.svg?branch=master)](https://travis-ci.org/Kocal/vue-web-extension)
[![Build Status (AppVeyor)](https://ci.appveyor.com/api/projects/status/huaoxwvqcoyx2x08/branch/master?svg=true)](https://ci.appveyor.com/project/Kocal/vue-web-extension/branch/master)

This template allows you to quickly start a web extension containing:

- Boilerplate for `manifest.json` and `background.js` files, and for `icons` / `popup` folders
- [Vue](https://github.com/vuejs/vue)
- [Vue-router](https://github.com/vuejs/vue-router) (configurable)
- [Vuex](https://github.com/vuejs/vuex) (configurable)
- [Axios](https://github.com/axios/axios) (configurable)
- [Webpack 4](https://github.com/webpack/webpack)
- [Babel](https://github.com/babel/babel) with [preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
- [ESLint](https://github.com/eslint/eslint) (configurable)
- [Prettier](https://github.com/prettier/prettier) (configurable)
- A git precommit hook for running Prettier by using [pretty-quick](https://github.com/azz/pretty-quick) or [precise-commits](https://github.com/nrwl/precise-commits) (configurable)
- CSS extraction, with [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
- Compliable with the **C**ontent **S**ecurity **P**olicy of Chrome and Firefox web stores (some usages [`eval`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) are removed)
- A script to package your extension into a `.zip` file

## Requirements

- Node.js >= 10 and npm >= 5
- [git](https://git-scm.com)
- [vue-cli 2](https://github.com/vuejs/vue-cli/tree/v2)

## Documentation

The documentation can be found on [vue-web-extension.netlify.app](https://vue-web-extension.netlify.app/). Please check the documentation website and the [open and closed issues](https://github.com/Kocal/vue-web-extension/issues?q=), before raising a new issue.

