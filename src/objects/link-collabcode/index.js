const linkCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .link-collabcode {
        display: block;
        color: #3a4042;
        text-decoration: none;
        opacity: 0.73;
        font-size: 1.12em;
        text-align: right;
        margin-bottom: 60px;
      }

      .input-collabcode + .link-collabcode {
        margin-top: 43px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = ({ href = '', content = '' }) => {
    module._style();

    return `
      <a class="link-collabcode" href="${href}">
        ${content}
      </a>
    `;
  };

  return {
    render: module.render,
  };
})();
