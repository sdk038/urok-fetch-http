const updateBtn = document.getElementById('updateBtn');
const result = document.getElementById('result');

updateBtn.addEventListener('click', () => {
  const postId = document.getElementById('postId').value;
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  if (!postId || !title || !body) {
    result.innerHTML = '<span style="color:red;">Заполните все поля</span>';
    return;
  }

  result.innerHTML = 'Отправляем запрос... ⏳';

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'PUT',
    headers: {

    },
    body: JSON.stringify({
      id: postId,
      title: title,
      body: body,
      userId: 1
    })
  })
  .then(response => {
    if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
    return response.json();
  })
  .then(data => {
    result.innerHTML = `
      <h3>Ответ сервера:</h3>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
  })
  .catch(error => {
    result.innerHTML = `<span style="color:red;">${error.message}</span>`;
  });
});
