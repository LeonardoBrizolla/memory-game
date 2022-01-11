const labelCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .label-collabcode {
        color: #3a4042;
        font-size: 1em;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = (content) => {
    module._style();

    return `
      <label class="label-collabcode">
        ${content}
      </label>
    `;
  };

  return {
    render: module.render,
  };
})();
