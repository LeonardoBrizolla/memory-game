const gameButton = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .game-button {
        width: 100px;
        height: 100px;
        background-color: #50fa7b;
        border-radius: 50%;
        border: 3px solid #fffcee;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        font-weight: bold;
        color: #fffcee;
        font-size: 1.05em;
        text-transform: uppercase;
        box-shadow: 0px 4px 5px #3a4042;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = (content) => {
    module._style();

    return `
      <button class="game-button">
        ${content}
      </button>
    `;
  };

  return {
    render: module.render,
  };
})();
