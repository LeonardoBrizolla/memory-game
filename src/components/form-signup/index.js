const formSignup = (() => {
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
    const $usernameLabel = labelCollabcode.render('Username');
    const $usernameInput = inputCollabcode.render({
      placeholder: 'leobrizolla',
    });

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
    const $eyeCollabcodePassword = eyeCollabcode.render({
      attrFor: 'password',
    });

    const $confirmPasswordLabel = labelCollabcode.render('Confirm password');
    const $confirmPasswordInput = inputCollabcode.render({
      id: 'confirmPassword',
      placeholder: '',
      type: 'password',
    });
    const $eyeCollabcodeConfirmPassword = eyeCollabcode.render({
      attrFor: 'confirmPassword',
    });

    const $btn = btnCollabcode.render({
      content: 'Signup',
      route: 'login',
    });

    return `
      ${$usernameLabel}
      ${$usernameInput}
      ${$emailLabel}
      ${$emailInput}
      ${$passwordLabel}
      ${$passwordInput}
      ${$eyeCollabcodePassword}
      ${$confirmPasswordLabel}
      ${$confirmPasswordInput}
      ${$eyeCollabcodeConfirmPassword}
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
