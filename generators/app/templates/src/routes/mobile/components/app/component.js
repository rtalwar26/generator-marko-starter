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
    let thisComp = this;
    const informChild = (pageName, eventHandler) => {
      let page = thisComp.getComponent(pageName);
      page && (typeof page[eventHandler] === 'function') && page[eventHandler]();
    }
    setTimeout(() => {

      let router = app.views.main.router;

      router.clearPreviousHistory();


      app.on('pageBeforeIn', (page) => {

        informChild(page.name, 'pageBeforeIn');
      })
      app.on('pageAfterIn', (page) => {
        informChild(page.name, 'pageAfterIn');

      })

      app.on('pageBeforeOut', (page) => {
        informChild(page.name, 'pageBeforeOut');

      })
      app.on('pageAfterOut', (page) => {
        informChild(page.name, 'pageAfterOut');

      })

    }, 1);



  }
}

