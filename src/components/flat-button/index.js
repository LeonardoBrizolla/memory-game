const flatButton = (() => {
  const module = {};

  module._id = 0;

  module._style = (active) => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .flat-button-${module._id} {
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        width: 50%;
        height: 176px;
        padding-top: 60px;
        background-color: ${active ? '#f25a70' : '#eae6da'};
        color: ${active ? '#fff' : '#fffeee'};
        font-size: 1.5em;
        font-weight: bold;
        text-transform: uppercase;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = (route) => {
    location.hash = `#/${route}`;
    location.reload(true);
  };

  module.render = ({ content = '', active = false, route = '' }) => {
    module._id++;
    module._style(active);

    return `<!--
  --><button
        class="flat-button-${module._id}"
        onclick="flatButton.handleClick('${route}')"
      >
        ${content}
      </button>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick,
  };
})();
