const memoryCard = () => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');
  $style.textContent = `
    .memory-card {
      width: 155px;
      height: 155px;
      position: relative;
    }

    .memory-card .card {
      width: 100%;
      height: 100%;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      position: relative;
      cursor: pointer;
      position: absolute;
      display: none;
    }

    .memory-card .card.-front {
      background-color: #fff;
      display: block;
    }

    .memory-card .card.-front::before {
      content: '';
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }

    .memory-card .card > .icon {
      width: 100px;
    }

    .memory-card .card.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
    }
  `;

  $head.insertBefore($style, null);

  return ({ nameClass, src, alt }) => `
    <div class="memory-card">
      <article class="card -front">
        <img
          src="${src}"
          alt="${alt}"
          class="icon"
          onClick="handleClick()"
        />
      </article>
      <article class="card">
        <img
          src="../../../img/icon-collabcode.svg"
          alt="Gueio mascote da CollabCode"
          class="icon"
          onClick="handleClick()"
        />
      </article>
    </div>
  `;
};

const handleClick = () => console.log('ae');
