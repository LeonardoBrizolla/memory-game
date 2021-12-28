const $root = document.querySelector('#root');
const $memoryCardFront = document.createElement('article');
createMemoryCard();

const $iconJS = `
  <img
    src="img/icon-js.png"
    alt="Icone do livro JavaScript"
    class="icon"
  />
`;

$memoryCardFront.classList.add('memory-card');
$memoryCardFront.classList.add('-front');
$root.insertBefore($memoryCardFront, null);

$memoryCardFront.insertAdjacentHTML('afterbegin', $iconJS);
