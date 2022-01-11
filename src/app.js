(() => {
  const { hash } = window.location;
  const routes = [];

  routes[''] = login;
  routes['#/login'] = login;
  routes['#/signup'] = signup;
  routes['#/game'] = game;
  routes[hash]();
})();
