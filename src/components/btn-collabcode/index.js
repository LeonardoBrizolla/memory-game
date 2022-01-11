const btnCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .btn-collabcode {
        background-color: #f25a70;
        height: 48px;
        width: 100%;
        font-size: 14px;
        color: white;
        text-transform: uppercase;
        border-radius: 24px;
        cursor: pointer;
      }

      .btn-collabcode:focus-visible {
        outline: 3px solid #000;
      }

      .input-collabcode + .btn-collabcode {
        margin-top: 45px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = (content) => {
    module._style();

    return `
      <input class="btn-collabcode" type="submit" value="${content}" />
    `;
  };

  return {
    render: module.render,
  };
})();
