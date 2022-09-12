const rangeRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

rangeRef.addEventListener('input', onRangeChanged);

function onRangeChanged(event) {
    spanRef.style.fontSize = `${event.currentTarget.value}px`;
}