const inputCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .input-collabcode {
        display: block;
        color: #3a4042;
        font-weight: bold;
        font-size: 1.12em;
        border-bottom: 2px solid rgba(58, 64, 66, 0.5);
        padding-bottom: 12px;
        padding-top: 12px;
        width: 100%;
      }

      .input-collabcode:focus-visible {
        outline: 2px solid #f25a70;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
      <input
        class="input-collabcode"
        type="email"
      />
    `;
  };

  return {
    render: module.render,
  };
})();
