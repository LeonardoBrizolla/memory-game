const eyeCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .eye-collabcode {
        display: block;
        text-indent: -99999px;
        background: url(/img/eye.svg) no-repeat center;
        width: 23px;
        height: 15px;
        cursor: pointer;
        opacity: 0.5;
        margin-left: auto;
        transform: translateY(-190%);
        transition: opacity 200ms linear;
      }

      .eye-collabcode.-active {
        opacity: 1;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = function () {
    const attrFor = this.getAttribute('for');
    const $input = document.querySelector(`#${attrFor}`);

    if ($input.getAttribute('type') === 'text') {
      $input.setAttribute('type', 'password');
      this.classList.remove('-active');
    } else {
      $input.setAttribute('type', 'text');
      this.classList.add('-active');
    }
  };

  module.render = ({ attrFor = '' }) => {
    module._style();

    return `
      <label
        for="${attrFor}"
        class="eye-collabcode"
        onclick="eyeCollabcode.handleClick.bind(this)()"
      >
        Mostrar senha
      </label>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick,
  };
})();
