const $root = document.querySelector('#root');
const $memoryCard = document.createElement('article');
const $icon = `<img src="img/icon-collabcode.svg"
alt="Gueio mascote da CollabCode" class="icon"/>`;

$root.insertBefore($memoryCard, null);

$memoryCard.classList.add('memory-card');
$memoryCard.insertAdjacentHTML('afterbegin', $icon);
