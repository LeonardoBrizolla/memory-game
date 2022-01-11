const logoCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .logo-collabcode {
        background-color: white;
        display: inline-block;
        border: 40px solid white;
        border-radius: 50%;
      }

      .logo-collabcode > .logo {
        width: 175px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
    <figure class="logo-collabcode">
      <img
        class="logo"
        src="/img/icon-collabcode.svg"
      />
    </figure>
    `;
  };

  return {
    render: module.render,
  };
})();
