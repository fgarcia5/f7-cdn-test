const app = new Framework7({
  root: "#app",
  routes: [
    {
      path: "/",
      componentUrl: "./pages/home.html"
    }
  ]
});

var $ = Dom7;
