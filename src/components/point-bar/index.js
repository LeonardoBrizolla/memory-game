const pointBar = (() => {
  const module = {};

  module.create = () => {
    return `
      <header>
        <span>1</span>
      </header>
    `;
  };

  return {
    create: module.create,
  };
})();
