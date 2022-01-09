const gameButton = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .game-button {
        width: 70px;
        height: 70px;
        background-color: #50fa7b;
        border-radius: 50%;
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        transition: opacity 100ms linear;
        font-weight: bold;
        text-transform: uppercase;
      }

      .game-button:hover {
        opacity: 0.8;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
      <button
        class="game-button"
      >
        Start
      </button>
    `;
  };

  return {
    render: module.render,
  };
})();
