
# Info
fork from <a href="https://github.com/raukaute/vue-hackernews-3.0.git">Raukaute</a>

Please refer to the <a href="https://ssr.vuejs.org">vue-2 ssr guide</a> to get an idea how this is working.
As the HN v2 clone this repo is to explore the possibilities of Vue 3.0 SSR. Final build setup is project dependant. 

## Ideas?

With all the new possibilities vue@next brought there's propably other/smarter ways to code parts of the meachanics....

## Build Setup

**Requires Node.js 10.13.0+**  

``` bash
# install dependencies
npm install # or yarn

# serve in dev mode, with hot reload at localhost:8080
npm run start:dev

# build for production
npm run build

# serve in production mode
npm start:prod
```

## Credits

Based, inspired and forked by/from Vue-2.0 Hackernews clone by @evanyou and Hackernews clone by @nuxt

## License

MIT
 ## Error fix

 rm -rf node_modules package-lock.json && npm install && npm start