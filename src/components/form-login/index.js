const formLogin = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .form-signup {
        padding: 0 35px 40px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $emailLabel = labelCollabcode.render('E-mail');
    const $emailInput = inputCollabcode.render({
      placeholder: 'example@email.com',
      type: 'email',
    });

    const $passwordLabel = labelCollabcode.render('Password');
    const $passwordInput = inputCollabcode.render({
      id: 'password',
      placeholder: '',
      type: 'password',
    });
    const $eyeCollabcode = eyeCollabcode.render({
      attrFor: 'password',
    });

    const $linkCollabcode = linkCollabcode.render({
      href: '/',
      content: 'Forget password',
    });

    const $btn = btnCollabcode.render({
      content: 'Login',
      route: 'game',
    });

    return `
      ${$emailLabel}
      ${$emailInput}
      ${$passwordLabel}
      ${$passwordInput}
      ${$eyeCollabcode}
      ${$linkCollabcode}
      ${$btn}
    `;
  };

  module.render = () => {
    module._style();

    return `
      <form class="form-signup" action="" method="POST">
        ${module._children()}
      </form>
    `;
  };

  return {
    render: module.render,
  };
})();
