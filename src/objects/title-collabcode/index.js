const titleCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .title-collabcode {
        font-size: 1.5em;
        text-transform: uppercase;
        color: #f25a70;
        letter-spacing: 0.6px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = (content) => {
    module._style();

    return `<h1 class="title-collabcode">${content}</h1>`;
  };

  return {
    render: module.render,
  };
})();
