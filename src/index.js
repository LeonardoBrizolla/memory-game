const $root = document.querySelector('#root');
const $memoryCard = document.createElement('article');
const $memoryCardVerse = document.createElement('article');
const $icon = `
  <img
    src="img/icon-collabcode.svg"
    alt="Gueio mascote da CollabCode"
    class="icon"
  />
`;
const $iconJS = `
  <img
    src="img/icon-js.png"
    alt="Verso do card"
    class="icon"
  />
`;

$root.insertBefore($memoryCard, null);
$memoryCard.classList.add('memory-card');
$memoryCard.insertAdjacentHTML('afterbegin', $icon);

$root.insertBefore($memoryCardVerse, null);
$memoryCardVerse.classList.add('memory-card');
$memoryCardVerse.classList.add('-verse');
$memoryCardVerse.insertAdjacentHTML('afterbegin', $iconJS);
