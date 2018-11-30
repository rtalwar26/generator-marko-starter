let config = require('./routes');
 module.exports  = class {

  onCreate() {

  }

  onMount() {
    this.start()
    this.addBackHandlers();
  }

  addBackHandlers(){
    Dom7("a.move-back").on('click',()=>{
      window.app.views.main.router.back();
    })
  }

  start() {
    var theme = 'auto';
    if (document.location.search.indexOf('theme=') >= 0) {
      theme = document.location.search.split('theme=')[1].split('&')[0];
    }
    var app = new Framework7({
      theme: theme,
      root: '#app',

      name: 'My App',

      id: 'com.myapp.test',

      panel: {
        swipe: 'left',
      },

      routes: config.routes,

    });
    var mainView = app.views.create('.view-main', {
      stackPages: true,
      pushState: true,
      url:"/mobile"

    });
    window.app = app;
  }
}

