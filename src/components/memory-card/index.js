const memoryCard = (() => {
  const module = {};

  module.create = () => {
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
      }

      .memory-card.-active .card,
      .memory-card.-score .card {
        display: none;
      }

      .memory-card.-active .card.-front,
      .memory-card.-score .card.-front {
        display: flex;
      }

      .memory-card .card.-front {
        background-color: #fff;
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

    return ({ src, alt }) => `
      <div class="memory-card" onclick="memoryCard.handleClick(this)">
        <article class="card -front">
          <img
            src="${src}"
            alt="${alt}"
            class="icon"
          />
        </article>
        <article class="card">
          <img
            src="../../../img/icon-collabcode.svg"
            alt="Gueio mascote da CollabCode"
            class="icon"

          />
        </article>
      </div>
    `;
  };

  module.handleClick = ($memoryCard) => {
    if (!$memoryCard.classList.contains('-active')) {
      module._activeMemoryCard($memoryCard);
      module._checkAcceptedMemoryCards();
    }
  };

  module._activeMemoryCard = ($memoryCard) => {
    if (store.countActiveMemoryCards < 2) {
      $memoryCard.classList.add('-active');
    }
  };

  module._checkAcceptedMemoryCards = () => {
    if (store.countActiveMemoryCards === 1) {
      const $activeMemoryCards = document.querySelectorAll(
        '.memory-card.-active'
      );

      if (
        $activeMemoryCards[0]
          .querySelector('.-front .icon')
          .getAttribute('src') ===
        $activeMemoryCards[1].querySelector('.-front .icon').getAttribute('src')
      ) {
        store.score++;

        document.querySelector('.point-bar > .number').textContent =
          store.score;

        $activeMemoryCards.forEach(($activeMemoryCard) => {
          $activeMemoryCard.classList.add('-score');
          $activeMemoryCard.classList.remove('-active');
        });
      } else {
        setTimeout(() => {
          $activeMemoryCards.forEach(($memoryCard) => {
            $memoryCard.classList.remove('-active');
          });

          store.countActiveMemoryCards = 0;
        }, 1500);
      }
    }
  };

  return {
    create: module.create,
    handleClick: module.handleClick,
  };
})();
