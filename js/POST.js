const sendBtn = document.getElementById('sendBtn');
const result = document.getElementById('result');

sendBtn.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;


    if (!title || !body) {
        result.innerHTML = '<span style="color:red;">Пожалуйста, заполните все поля</span>';
        return;
    }

    result.innerHTML = 'Отправляем данные... ⏳';


   fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка запроса: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    result.innerHTML = `<h3>Ответ сервера:</h3><pre>${JSON.stringify(data, null, 2)}</pre>`;
  })
  .catch(error => {
    result.innerHTML = `<span style="color:red;">${error.message}</span>`;
  });
});