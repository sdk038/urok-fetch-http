const btn = document.getElementById('loadData');
const result = document.getElementById('result');


btn.addEventListener('click', () => {
  result.innerHTML = 'Загрузка... ⏳';


  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка запроса: ' + response.status);
      }
      return response.json();
    })
    .then(data => {

      const firstFive = data.slice(0, 5);
      result.innerHTML = `<h3>Полученные данные:</h3><pre>${JSON.stringify(firstFive, null, 2)}</pre>`;
    })
    .catch(error => {
      result.innerHTML = `<span style="color:red;">${error.message}</span>`;
    });
});
