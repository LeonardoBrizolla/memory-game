(() => {
  const { hash } = window.location;
  const routes = [];

  routes[''] = login;
  routes['#/login'] = login;
  routes['#/signup'] = signup;
  routes['#/game'] = game;
  routes['#/404'] = status404;

  routes[hash] ? routes[hash]() : routes['#/404']();
})();
