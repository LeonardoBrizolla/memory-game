const $root = document.querySelector('#root');

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard(
  '',
  'icon-collabcode.svg',
  'Gueio mascote da CollabCode'
);
const $memoryCardFront = createMemoryCard(
  '-front',
  'icon-js.png',
  'Icone do livro JavaScript'
);

$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFront);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFront);

$root.insertAdjacentElement('beforeend', $cardsWrapper);
