const $root = document.querySelector('#root');

const $cardsWrapper = createCardsWrapper();
const createMemoryCard = memoryCard();

const $memoryCardJS = createMemoryCard({
  nameClass: '-front',
  src: 'img/icon-js.png',
  alt: 'Livro JS',
});
const $memoryCardBug = createMemoryCard({
  src: 'img/icon-bug.png',
  alt: 'Bug',
  nameClass: '-front',
});
const $memoryCardWoman = createMemoryCard({
  src: 'img/icon-woman.png',
  alt: 'Woman code',
  nameClass: '-front',
});
const $memoryCardHeadCode = createMemoryCard({
  src: 'img/icon-head.png',
  alt: 'Cabeça',
  nameClass: '-front',
});

$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardBug);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardBug);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardJS);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardJS);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardHeadCode);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardHeadCode);

$root.insertAdjacentElement('beforeend', $cardsWrapper);
