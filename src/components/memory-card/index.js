function createMemoryCard() {
  const $memoryCard = `
  <article class="memory-card">
    <img
      src="img/icon-collabcode.svg"
      alt="Gueio mascote da CollabCode"
      class="icon"
      onClick="handleClick()"
    />
  </article>
  `;

  return $memoryCard;
}

function createMemoryCardFront() {
  const $memoryCardFront = `
  <article class="memory-card -front">
    <img
      src="img/icon-js.png"
      alt="Icone do livro JavaScript"
      class="icon"
      onClick="handleClick()"
    />
  </article>
  `;

  return $memoryCardFront;
}

function handleClick() {
  console.log('ae');
}
