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

      .eye-collabcode + .btn-collabcode {
        margin-top: 45px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = (event, route) => {
    event.preventDefault();
    window.location.hash = `#/${route}`;
  };

  module.render = ({ content = '', route = '' }) => {
    module._style();

    return `
      <input
        class="btn-collabcode"
        type="submit"
        value="${content}"
        onClick="btnCollabcode.handleClick(event, '${route}')"
      />
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick,
  };
})();
