const transparencyLayer = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .transparency-layer {
        background-color: rgba(58, 64, 66, 0.5);
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        transition: opacity 300ms 300ms linear;
      }

      .transparency-layer.-disabled {
        opacity: 0;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
      <div class="transparency-layer"></div>
    `;
  };

  return {
    render: module.render,
  };
})();
