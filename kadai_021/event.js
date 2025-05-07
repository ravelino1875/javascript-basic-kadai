const btnClick = document.getElementById('btn');
const textClick = document.getElementById('text');

btnClick.addEventListener('click', () => {
  setTimeout(() => {
    textClick.textContent = "ボタンをクリックしました"
  }, 2000);
});