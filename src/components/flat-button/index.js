const flatButton = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .flat-button {
        background-color: #eae6da;
        width: 186px;
        height: 176px;
        color: #fffeee;
        font-size: 1.5em;
        font-weight: bold;
        text-transform: uppercase;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
      <button class="flat-button">
        Login
      </button>
    `;
  };

  return {
    render: module.render,
  };
})();
