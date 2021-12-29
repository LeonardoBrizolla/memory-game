const createMemoryCard = (front, icon, alt) => {
  const $memoryCard = `
  <article class="memory-card ${front}">
    <img
      src="img/${icon}"
      alt="${alt}"
      class="icon"
      onClick="handleClick()"
    />
  </article>
  `;

  return $memoryCard;
};

function handleClick() {
  console.log('ae');
}
