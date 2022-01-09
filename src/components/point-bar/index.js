const pointBar = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .point-bar {
        background-color: #3a4042;
        height: 2.5rem;
        text-align: center;
        font-family: 'Comfortaa', sans-serif;
      }

      .point-bar > .number {
        color: #fff;
        line-height: 2.5rem;
        font-weight: bold;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();

    return `
      <header class="point-bar">
        <span class="number">${store.score}</span>
      </header>
    `;
  };

  return {
    create: module.create,
  };
})();
