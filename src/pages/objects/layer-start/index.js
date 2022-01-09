const layerStart = (() => {
  module = {};

  module.handleClick = ($component) => $component.remove();

  module.render = (content) => {
    const $transparencyLayer = transparencyLayer.render();
    const $gameButton = gameButton.render(content);

    return `
      <div
        className="layer-start"
        onclick="layerStart.handleClick(this)"
      >
        ${$transparencyLayer}
        ${$gameButton}
      </div>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick,
  };
})();
