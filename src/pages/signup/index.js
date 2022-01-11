(() => {
  const $root = document.querySelector('#root');

  const $loginButton = flatButton.render({
    content: 'Login',
  });
  const $signupButton = flatButton.render({
    content: 'Signup',
    active: true,
  });

  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render('Welcome!');

  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

  $root.insertAdjacentHTML('beforeend', $loginButton);
  $root.insertAdjacentHTML('beforeend', $signupButton);
  $root.insertAdjacentHTML('beforeend', $logoWrapper);
})();
