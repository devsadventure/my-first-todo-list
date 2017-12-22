const addButtonEl = document.querySelector('#add-button');
const inputEl = document.querySelector('#todo-input');
const listEl = document.querySelector('#todo-list');

addButtonEl.addEventListener('click', e => {
  const itemEl = document.createElement('div');

  // 삭제 버튼 만들기
  const x = document.createElement('div');

  itemEl.textContent = inputEl.value;
  itemEl.appendChild(x);
  listEl.appendChild(itemEl);

  inputEl.value = '';

  itemEl.addEventListener('click', e => {
    if (itemEl.classList.contains('complete')) {
      itemEl.classList.remove('complete');
    } else {
      itemEl.classList.add('complete');
    }
  })

  const removeButtonEl = document.createElement('div');
  removeButtonEl.textContent = 'x';
});
