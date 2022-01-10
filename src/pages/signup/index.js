(() => {
  const $root = document.querySelector('#root');

  const $loginButton = flatButton.render({
    content: 'Login',
  });
  const $signupButton = flatButton.render({
    content: 'Signup',
    active: true,
  });

  $root.insertAdjacentHTML('beforeend', $loginButton);
  $root.insertAdjacentHTML('beforeend', $signupButton);
})();
