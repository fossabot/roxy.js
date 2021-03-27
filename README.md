<h1 align="center">
    <img src="https://raw.githubusercontent.com/coleiscoolig/ro.js/main/rojs.png?token=AJTZHS7OQJRAYNSV7ISFLA3AL27EQ" alt="ro.js" width="250"/>
    <br>
</h1>

<h4 align="center">a simple node wrapper for roblox.</h4>

<p align="center">
    <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-blue.svg?style=flat-square" alt="style"/></a>
    <a href="https://discord.gg/WK2qTecTkJ"><img src="https://img.shields.io/badge/discord-ro.js-blue.svg?style=flat-square" alt="discord"></a>
    <a href="https://npmjs.org/ro.js"><img src="https://img.shields.io/npm/v/ro.js.svg?style=flat-square" alt="npm package"></a>
    <!-- <a href="https://travis-ci.org/suufi/noblox.js"><img src="https://img.shields.io/travis/suufi/noblox.js/master.svg?style=flat-square" alt="Travis Build Status"/></a></a> -->
</p>

<p align="center">
  <a href="#about">about</a> •
  <a href="#install">install</a> •
  <a href="#docs">docs</a> •
  <a href="https://github.com/suufi/noblox.js/tree/master/examples">examples</a> •
  <a href="#credits">credits</a> •
  <a href="#license">license</a>
</p>

## about

ro.js is a node module to interact with the roblox website via node.js. it is heavily inspired by noblox.js and bloxy but with simplicity in mind. <3

## install

run the following in your terminal:
```bash
# locally
    $ npm install ro.js --save
    $ yarn add wo.js

# globally
    $ npm install ro.js -g
    $ yarn global add ro.js
```

## docs

you can find our current docs at [ro.js.org](https://ro.js.org/)
    
## getting your cookie (chrome):

1. open roblox page and login to chosen account
2. press `Control + Shift + i` on your keyboard or right click and click inspect
3. click `Application`
4. find `.ROBLOSECURITY` and copy
5. put this full token into client.init: `client.init({ cookie: _|WARNING:-DO})`
    
## example

```js
const rojs = require('ro.js')
const client = new rojs.client()
async function init() {
    await client.init({cookie: _|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_12345678901234567890})
}
```

## credits

* [cole](https://github.com/suufi) - lead maintainer
* [suufi](https://github.com/suufi) & [visualizememe](https://github.com/Visualizememe) - inspiration
* [suufi](https://github.com/coleiscoolig) - readme base

## License

MIT
