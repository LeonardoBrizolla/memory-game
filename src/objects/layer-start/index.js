const layerStart = (() => {
  module = {};

  module.handleClick = (event, $component) => {
    if (event.target.classList.contains('game-button')) {
      const $children = $component.querySelectorAll('*');
      $children.forEach(($item) => $item.classList.add('-disabled'));
    }
  };

  module.handleTransitionEnd = (event, $component) => {
    if (event.target.classList.contains('transparency-layer'))
      $component.remove();
  };

  module.render = (content) => {
    const $transparencyLayer = transparencyLayer.render();
    const $gameButton = gameButton.render(content);

    return `
      <div
        className="layer-start"
        onClick="layerStart.handleClick(event, this)"
        onTransitionEnd="layerStart.handleTransitionEnd(event, this)"
      >
        ${$transparencyLayer}
        ${$gameButton}
      </div>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick,
    handleTransitionEnd: module.handleTransitionEnd,
  };
})();
